/**
 * Image optimization script — converts JPEG/PNG in public/images/ to WebP
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const IMAGES_DIR = join(ROOT, 'public', 'images');

const WEBP_QUALITY = 82;
const SKIP_EXTENSIONS = new Set(['.webp', '.svg', '.gif']);

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (!SKIP_EXTENSIONS.has(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function main() {
  console.log('🔍 Scanning images in public/images/ ...\n');

  const files = await getFiles(IMAGES_DIR);
  let totalOriginal = 0;
  let totalOptimized = 0;
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    // Skip if webp already exists
    try {
      await stat(webpPath);
      skipped++;
      continue;
    } catch {
      // webp doesn't exist, proceed
    }

    try {
      const originalStat = await stat(file);
      totalOriginal += originalStat.size;

      await sharp(file)
        .webp({ quality: WEBP_QUALITY, effort: 4 })
        .toFile(webpPath);

      const optimizedStat = await stat(webpPath);
      totalOptimized += optimizedStat.size;

      const saving = (((originalStat.size - optimizedStat.size) / originalStat.size) * 100).toFixed(0);
      const rel = file.replace(IMAGES_DIR, '');
      console.log(`  ✓ ${rel}`);
      console.log(`    ${formatBytes(originalStat.size)} → ${formatBytes(optimizedStat.size)} (${saving}% smaller)`);

      converted++;
    } catch (err) {
      console.error(`  ✗ Failed: ${file} — ${err.message}`);
    }
  }

  console.log('\n─────────────────────────────────────');
  console.log(`  Converted: ${converted} files`);
  console.log(`  Skipped (already WebP): ${skipped} files`);
  if (converted > 0) {
    const totalSaving = (((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(0);
    console.log(`  Total size: ${formatBytes(totalOriginal)} → ${formatBytes(totalOptimized)} (${totalSaving}% smaller)`);
  }
  console.log('─────────────────────────────────────\n');
}

main().catch(console.error);

/**
 * Exports cv/Reza_CV.html to public/files/Reza_CV.pdf (the file the website links to).
 * Usage: npm run cv
 * Needs Microsoft Edge or Google Chrome installed.
 */

import { execFileSync } from 'child_process';
import { existsSync } from 'fs';
import { tmpdir } from 'os';
import { dirname, join, resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = join(root, 'cv', 'Reza_CV.html');
const pdf = join(root, 'public', 'files', 'Reza_CV.pdf');

const browsers = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
];
const browser = browsers.find(existsSync);
if (!browser) {
  console.error('No Edge/Chrome found. Open cv/Reza_CV.html and print to PDF manually.');
  process.exit(1);
}

execFileSync(
  browser,
  ['--headless', '--disable-gpu', `--user-data-dir=${join(tmpdir(), 'cv-export-profile')}`, '--no-pdf-header-footer', `--print-to-pdf=${pdf}`, pathToFileURL(html).href],
  { stdio: 'inherit' },
);
console.log(`Exported ${pdf}`);

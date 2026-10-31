# CV source

`Reza_CV.html` is the single source of the CV. The website serves `public/files/Reza_CV.pdf`,
which is generated from it, so every CV link on the site (nav, hero, about, footer) stays current.

## Update the CV
1. Edit `cv/Reza_CV.html` in any text editor. All text is plain HTML; styling is in the `<style>` block at the top.
   Roles are `<div class="job">` blocks, bullets are `<li>`, skills are `label` / `value` pairs.
   Text flows across pages automatically, so nothing runs off the bottom. Keep it to 2 pages.
2. Run `npm run cv` to export the PDF to `public/files/Reza_CV.pdf` (needs Edge or Chrome installed).
3. Commit both files and push to `main`.

Manual alternative: open the HTML in Edge or Chrome, press Ctrl+P, choose "Save as PDF" with "Headers and footers" off,
and save over `public/files/Reza_CV.pdf`.

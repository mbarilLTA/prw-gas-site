// Exports each post in posts.html to social/png/post-N.png at 1080x1080.
// Usage: node social/render.js   (needs Playwright with Chromium installed)
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

(async () => {
  const outDir = path.join(__dirname, 'png');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1200 } });
  await page.goto('file://' + path.join(__dirname, 'posts.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const posts = await page.$$('article.post');
  for (const post of posts) {
    const id = await post.getAttribute('id');
    await post.screenshot({ path: path.join(outDir, `${id}.png`) });
    console.log('wrote', `${id}.png`);
  }
  await browser.close();
})();

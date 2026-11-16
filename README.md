# Glasgow Gander: website redesign and social posts

Proposed new homepage and marketing material for Glasgow Gander Walking Tours.

- `index.html`: a single-page homepage. Booking buttons link to the existing Wix booking page, so it can go live without changing the booking system. It fixes the SEO description, which currently says "FREE".
- `social/posts.html`: six 1080×1080 Instagram/Facebook post designs. Edit the words in the file, then export them with `node social/render.js` (needs Playwright). The exported images are in `social/png/`.

## Before going live

Search `index.html` for `TODO`:

1. Replace "hundreds of" with the real current review count.
2. Paste three real guest reviews into the reviews section.
3. Add a photo of Johnny where the striped placeholder is.
4. Confirm prices for the private and group packages (currently "Ask for a quote").

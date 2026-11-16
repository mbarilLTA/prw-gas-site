# Glasgow Gander: website redesign and social posts

Proposed new homepage and marketing material for Glasgow Gander Walking Tours.

- `index.html`: a single-page homepage. Booking buttons link to the existing Wix booking page, so it can go live without changing the booking system. It fixes the SEO description, which currently says "FREE".
- `assets/`: the logo and photos. Tour photos (police box, George Square group, indoor stage) were supplied for this project; the logo, pub photo and City Chambers photo came from the current site. Full-size originals are in `assets/originals/`.
- `social/posts.html`: eight 1080×1080 Instagram/Facebook post designs. Edit the words in the file, then export them with `node social/render.js` (needs Playwright). The exported images are in `social/png/`.

## Before going live

Search `index.html` for `TODO`:

1. Replace "hundreds of" with the real current review count.
2. Confirm prices for the private and group packages (currently "Ask for a quote").

The reviews section and social posts 3 and 8 quote TripAdvisor reviews from September to November 2026, word for word.

# Web design business — website

One-page website for a local small-business web designer based in Herne Bay, Kent, UK.

## Tech rules
- Plain HTML, CSS and JavaScript only. No frameworks, build tools or npm.
- Files: `index.html`, `css/style.css`, `js/main.js`, images in `images/`.
- Mobile-first. Fast, semantic HTML, alt text on every meaningful image, good colour contrast.
- British English spelling.
- Colours are CSS variables in `css/style.css`. Always use the variables.

## The business
- **Name:** not decided yet. "Herne Bay Web Design" is a placeholder (header, footer, `<title>`).
- **Selling points:** local (Herne Bay), affordable, here to help small businesses get a new site or upgrade an old one.
- **Services:** new websites, website upgrades/redesigns, ongoing help after launch.
- Don't invent claims (prices, turnaround times, years of experience, review scores, guarantees). Ask first.

## Portfolio
- First project: **Henry's Exterior Cleaning** (repo `jakec116399-pixel/henry-jet-washing`), covering Canterbury, Herne Bay and Whitstable. Never call it "Henry's Jet Washing".
- `images/henry-desktop.jpg`, `henry-desktop-work.jpg`, `henry-mobile.jpg` are screenshots of that site, used in the hero and the case study.
- The testimonial and "Visit the site" link are commented out in `#work` until Henry provides a quote and `henryexteriorcleaning.com` is live. Use Henry's exact words; never make up a quote.

## Tone
Friendly, plain and specific. Short, scannable copy. No hype, jargon, clichés or exclamation marks. The About section is first person.

## Design
- Light and warm: off-white page (`--bg`), sand sections (`--surface`), one accent colour (sea teal `--accent`). Warm sand `--highlight` is only for the hero underline. Dark `--ink` is for the footer only.
- Fonts: Bricolage Grotesque (headings), Inter (body).
- Device mock-ups (browser frame and phone) show real client work.

## Sections
Header, hero, Why a website (6 benefits), Services (3 cards + "Every site I build"), Recent work (Henry case study), How it works (4 steps), About, FAQs, Contact (form + details), footer.

## Still to do (search for `TODO` in `index.html`)
- Business name, your name, real email and phone.
- Your photo in About.
- Formspree form ID for the contact form.
- Henry's testimonial and live link.
- Before launch: domain and GitHub Pages, favicon, LocalBusiness structured data, social preview image.

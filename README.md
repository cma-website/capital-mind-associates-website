# Capital Mind Associates — Next.js corporate website

10 main pages, each with seven content sections, plus Privacy Policy, Disclaimer and HTML Sitemap. Complete editable Next.js App Router source and a ready-to-host static export are included.

## Run locally
Requires Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```
Open http://localhost:4173. Do not open index.html directly from a file explorer: asset paths need a web server.

## Production build
```bash
npm run build
npm start
```
`out/` contains the static website. `npm start` serves this folder locally at port 4173. Upload the CONTENTS of out to static hosting. Python 3 is optional for `npm run check` (page/link verification).

## Main pages
1. Home
2. About
3. Accounting & Bookkeeping (financial statements, payroll and MIS)
4. GST Registration & Returns (GSTR-1, GSTR-3B, GSTR-9, ITC and notices)
5. ITR Filing & Tax Advisory (including TDS support)
6. Company & LLP Registration (including Udyam and DSC guidance)
7. ROC Filing & Annual Compliance
8. Trademark Registration
9. Business Loans & Financial Reports (CMA data and project reports)
10. Contact

## Editing
- Service content: content/site.json
- Homepage: app/page.jsx
- About, Contact and utility content: app/[slug]/page.jsx
- Palette, layout and typography: app/globals.css
- Logo, header, hero, enquiry and footer: components/Corporate.jsx
- Shared content sections and schema: components/Sections.jsx
- Images: public/assets

## Reference design
Navy header/footer, ivory/near-white surfaces, light-grey alternating sections, gold buttons with dark text, compact rising-bar full-name logo and the tagline “Your Growth. Our Commitment.” The logo is a clean code reconstruction of the supplied screenshot, not an extracted original logo file. Arial/Helvetica sans-serif matches its overall typography style; the exact original font could not be identified from the raster screenshot. Main headings are 32px; cards/forms use smaller headings for hierarchy.

Six original generated transparent PNG service illustrations are included. The business-meeting photographs are existing project assets. Illustrations are not photographs of actual staff or evidence of client relationships. See ASSETS_AND_SOURCES.md.

## Contact
All active call and WhatsApp links use 8796862433 only. The enquiry form builds a WhatsApp draft. The visitor must press Send inside WhatsApp. It does not save submissions to a server or send email. No login, lender affiliation, fake testimonials or live eligibility calculation is included.

## Public launch / SEO
This package defaults to NOINDEX for review. Before a public launch, copy .env.example to .env.local and set your real HTTPS domain and NEXT_PUBLIC_ALLOW_INDEXING=true, then rebuild. The public launch domain controls canonical URLs, sitemap and schema URLs. Hosting access must also be public for search indexing.

The package includes titles, descriptions, canonical URLs, service/organization/breadcrumb/FAQ structured data, sitemap.xml and robots.txt. Search ranking and AI recommendations are not guaranteed. Google Business Profile and Search Console account setup are not included. Add verified address, hours and professional credentials only when available. No fabricated address or ratings are present.

The root homepage canonical is configured separately in app/page.jsx. Current service requirements should be reviewed for the applicable financial year and client facts.

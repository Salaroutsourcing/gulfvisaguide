# Gulf Career Hub — static website starter

A responsive, GitHub Pages-friendly job-information website. It currently contains category guides, not confirmed live job vacancies.

## Before publishing
1. Search all files for `YOUR-DOMAIN.example` and replace it with your final HTTPS domain.
2. Confirm the brand/page name and WhatsApp number in `script.js` (`SITE_CONFIG`). The starter number is prefilled from previously shared business contact context; verify it belongs to this Facebook page before publishing.
3. Replace the category-guide cards in `script.js` with real, current vacancies and link each card to a dedicated detail page. Do not label guides as live jobs.
4. For every real vacancy, include the actual employer/recruiter, accurate role, location, date posted, expiry date, requirements, salary only when confirmed, application method, and source. Remove expired jobs promptly.
5. Add dedicated About, Contact, Privacy Policy, Terms, Editorial/Verification Policy, and Disclaimer pages before applying for advertising.
6. Create `robots.txt` and `sitemap.xml` using the final domain; submit the sitemap in Google Search Console.
7. Validate each individual vacancy page's `JobPosting` JSON-LD with Google's Rich Results Test. Only mark up a page that visibly contains that one real job; never put `JobPosting` markup on the job listing/search page or on a category guide.
8. Test mobile layout, links, keyboard navigation and page speed before launch.

## Publish on GitHub Pages
- Create a GitHub repository.
- Upload the contents of this folder (not the outer ZIP folder) to the repository root.
- In Settings → Pages, choose deploy from branch, select `main` and `/ (root)`, and save.
- Add your custom domain later if desired; set the DNS records GitHub specifies and enable HTTPS.

## Important
This is a front-end starter, not a database or job management system. New job listings currently require editing `script.js`; a CMS or backend can be added later. Search-engine ranking, AI citations and AdSense approval cannot be guaranteed. The page includes no real vacancy claims and no `JobPosting` structured data by design.

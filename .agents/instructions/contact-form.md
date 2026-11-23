# Contact form

The site is hosted on **GitHub Pages**, which only serves static files and cannot process form submissions. The contact form in [`src/pages/contact.astro`](../../src/pages/contact.astro) therefore submits to **[Formspree](https://formspree.io)** (free plan), which forwards messages by email.

## Rules

- **Never put the owner's email address in the site** (no `mailto:` links, no plain-text addresses). The whole point of the form is to keep the address away from scrapers.
- **Do not use Netlify Forms attributes** (`data-netlify`, `netlify-honeypot`, `form-name`). They do nothing on GitHub Pages.
- The form ID in `FORMSPREE_ENDPOINT` is public and safe to commit. It does not reveal the destination address.
- Keep the field named `email`, because Formspree uses it as the reply-to address.

## How it works

- `action` points at Formspree, so the form still works without JavaScript (Formspree shows its own thank-you page).
- With JavaScript, a script on the page submits with `fetch` (`Accept: application/json`) and shows an inline success or error message in `#form-status`.
- `_subject` sets the email subject line.

## Spam protection

- Formspree's built-in spam filtering (Formshield).
- A hidden `_gotcha` honeypot field. Formspree silently drops submissions where it is filled in.
- **Restrict to Domain** (`c-est-moi.com`, without `www` so both variants match), set in the Formspree dashboard rather than in code: open the **project**, go to the **Settings** tab, then 'Restrict to Domain'. It is a project-level setting, not a per-form one. Submissions from other domains, including `localhost`, are not rejected; they go to the Formspree **spam inbox**. So local test messages end up there.
- The domain check relies on the browser sending a `Referer` header. Do not add a `no-referrer` or `same-origin` Referrer-Policy to the site, or every message will be marked as spam. Browsers that strip the header (such as Brave) can still send genuine messages to spam, so check the spam inbox now and then.

## Free plan limits

50 submissions a month, with the submission archive kept for 30 days. Custom thank-you redirects are a paid feature, which is why the success message is shown inline instead.

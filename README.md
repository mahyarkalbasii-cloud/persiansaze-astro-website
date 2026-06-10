# PersianSaze Astro Website

Clean Astro rebuild of the PersianSaze marketing homepage.

## Stack

- Astro
- TypeScript
- Tailwind CSS

## Commands

```bash
npm run dev
npm run check
npm run build
```

## Launch checklist

- [ ] **Remove the `X-Robots-Tag: noindex` rule for `*.pages.dev` from `public/_headers`
  once the production domain (persiansaze.com) is connected.** The rule exists so
  preview deployments are not indexed by search engines before cutover.

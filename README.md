# Personal Portfolio

A one-page GitHub Pages site built with Jekyll. Dark-mode portfolio/CV with hero, experience timeline, notes (blog), and footer. No navigation bar; single scrolling page. Compatible with GitHub Pages (no frameworks or build tools).

## Structure

- `index.md` — Single page (layout: one-page): Hero, Experience, Notes, Footer
- `_layouts/one-page.html` — Minimal layout (no header/nav)
- `_data/experience.yml` — Timeline entries (title, company, dates, bullets)
- `assets/styles.css` — Dark theme, hero two-column, timeline, chips, cards
- `assets/profile.svg` — Placeholder profile image (replace with `profile.jpg` and update `src` in `index.md` for your photo)
- `_posts/` — Blog posts (shown in Notes section; use frontmatter: title, date, excerpt)
- `_config.yml` — Jekyll configuration

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).

## GitHub Pages and CI/CD

- **Deploy** (`.github/workflows/deploy.yml`): Runs on push to `main` when site-related files change (and via **Actions → Deploy workflow → Run workflow**). Builds the site with Jekyll and deploys to GitHub Pages. Concurrency ensures only the latest deploy runs.
- **Validate** (`.github/workflows/validate.yml`): Runs on pull requests to `main` (and manually). Builds the site and runs HTML/link checks with `htmlproofer` (broken links, invalid HTML).
- **Visual regression** (`.github/workflows/visual-regression.yml`): Runs on pull requests to `main` (and manually). Builds the site, serves it, and uses Playwright to compare screenshots of the homepage and one article against committed baseline images. Fails if layout/design changes exceed a small pixel threshold.

**Updating visual snapshots** (e.g. after an intentional design or content change):

1. Build and serve the site: `bundle exec jekyll build` then in one terminal run `npm run serve` (or `npx serve _site -p 4000`).
2. In another terminal, update baselines: `npm run test:visual:update` (or `npx playwright test --update-snapshots`).
3. Commit the new or changed files under `tests/visual/__snapshots__/`.

If this is the first time using visual regression, generate baselines as above and commit the `tests/visual/__snapshots__/` directory so CI can compare against them.

**Manual re-runs:** In the repo go to **Actions**, select the workflow, then **Run workflow**.

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

## GitHub Pages

Push to the `main` branch. GitHub Pages will build the site automatically.

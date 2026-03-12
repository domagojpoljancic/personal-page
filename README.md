# Personal Site

A minimal GitHub Pages site built with Jekyll (minima theme). CV/portfolio-style homepage with featured projects, latest writing, and optional blog. Designed for quick scanning (recruiters) and depth (developers).

## Structure

- `index.md` — Homepage (hero, featured projects, latest writing, about preview, contact)
- `about.md` — About page
- `projects.md` — Projects list
- `blog.md` — Writing (post list, reverse chronological)
- `assets/` — `styles.css`, `profile.svg` (placeholder; replace with `profile.jpg` and update the image `src` in `index.md` for your photo)
- `_posts/` — Blog posts (Markdown with YAML frontmatter)
- `_config.yml` — Jekyll configuration
- `_includes/` — `head.html` (adds custom CSS), `custom-head.html`, `latest-posts.html`

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).

## GitHub Pages

Push to the `main` branch. GitHub Pages will build the site automatically when the repository is set as a GitHub Pages source.

# Personal Site

A minimal GitHub Pages site built with Jekyll (minima theme). Serves as a CV/portfolio-style homepage with optional blog posts.

## Structure

- `index.md` — Homepage (CV landing)
- `about.md` — About page
- `projects.md` — Projects list
- `blog.md` — Writing / blog index
- `_posts/` — Blog posts (Markdown with YAML frontmatter)
- `_config.yml` — Jekyll configuration

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000](http://localhost:4000).

## GitHub Pages

Push to the `main` branch. GitHub Pages will build the site automatically when the repository is set as a GitHub Pages source.

---
layout: default
title: Home
---

<div class="page">
  <div class="page-inner">
    <!-- LEFT COLUMN: IDENTITY RAIL -->
    <aside class="rail-left">
      <div class="identity-block">
        <div class="identity-photo-wrap">
          <img class="identity-photo" src="{{ '/assets/profile.svg' | relative_url }}" alt="Profile image">
        </div>

        <div class="identity-name">
          <span class="identity-name-line">Firstname</span>
          <span class="identity-name-line">Lastname</span>
        </div>
      </div>

      <section class="card links-card">
        <h2 class="card-label">Links</h2>
        <ul class="links-list">
          <li>
            <span class="links-label">Email</span>
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </li>
          <li>
            <span class="links-label">LinkedIn</span>
            <a href="https://linkedin.com/in/username">linkedin.com/in/username</a>
          </li>
          <li>
            <span class="links-label">GitHub</span>
            <a href="https://github.com/username">github.com/username</a>
          </li>
          <li>
            <span class="links-label">Instagram</span>
            <a href="https://instagram.com/username">instagram.com/username</a>
          </li>
        </ul>
      </section>

      <div class="cv-block">
        <a class="btn-primary" href="{{ '/cv.pdf' | relative_url }}">Download CV</a>
      </div>

      <section class="card experience-card">
        <h2 class="card-label">Experience</h2>
        <div class="timeline timeline-compact">
          {% for role in site.data.experience %}
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-role">{{ role.title }}</h3>
                <p class="timeline-meta">{{ role.company }} · {{ role.dates }}</p>
                <ul class="timeline-bullets">
                  {% for bullet in role.bullets %}
                    <li>{{ bullet }}</li>
                  {% endfor %}
                </ul>
              </div>
            </div>
          {% endfor %}
        </div>
      </section>

      <section class="card education-card">
        <h2 class="card-label">Education</h2>
        <div class="edu-item">
          <p class="edu-degree">MSc, Placeholder Degree</p>
          <p class="edu-meta">Example University · 2015 — 2017</p>
        </div>
        <div class="edu-item">
          <p class="edu-degree">BSc, Placeholder Field</p>
          <p class="edu-meta">Another Institution · 2011 — 2015</p>
        </div>
      </section>
    </aside>

    <!-- RIGHT COLUMN: NARRATIVE + WORK -->
    <main class="rail-right">
      <section class="card intro-card">
        <p class="intro-kicker">Technical product · Software · Experiments</p>
        <p class="intro-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Focused on building useful software products, working closely with engineering teams, and iterating quickly from idea to shipped feature.
        </p>
        <p class="intro-body">
          Interested in thoughtful systems, clear interfaces, and small tools that unlock new ways of working. This space collects current work, notes, and experiments.
        </p>

        <div class="chips chips-subtle">
          <span class="chip">Technical Product</span>
          <span class="chip">Engineering Degree</span>
          <span class="chip">AI Experiments</span>
          <span class="chip">Building in Public</span>
        </div>
      </section>

      <section class="card status-card">
        <div class="status-row">
          <div class="status-block">
            <p class="status-label">Currently building</p>
            <p class="status-value">Placeholder AI project</p>
          </div>
          <div class="status-block">
            <p class="status-label">Latest note</p>
            {% assign latest = site.posts | first %}
            <p class="status-value">
              {% if latest %}
                <a href="{{ latest.url | relative_url }}">{{ latest.title }}</a>
              {% else %}
                —
              {% endif %}
            </p>
          </div>
        </div>
      </section>

      <section class="section notes">
        <div class="section-inner">
          <div class="notes-header">
            <h2 class="section-title">Notes</h2>
            <p class="section-intro">
              Short build logs about experiments and products in progress.
            </p>
          </div>

          <ul class="notes-list">
            {% for post in site.posts limit:3 %}
              <li class="notes-item">
                <div class="notes-meta">
                  <span class="notes-date">{{ post.date | date: "%Y-%m-%d" }}</span>
                </div>
                <div class="notes-main">
                  <a class="notes-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  <p class="notes-excerpt">
                    {{ post.excerpt | default: post.content | strip_html | truncatewords: 24 }}
                  </p>
                  <a class="notes-readmore" href="{{ post.url | relative_url }}">Read more →</a>
                </div>
              </li>
            {% endfor %}
          </ul>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-links">
            <a href="mailto:your.email@example.com">Email</a>
            <a href="https://linkedin.com/in/username">LinkedIn</a>
            <a href="https://github.com/username">GitHub</a>
          </div>
          <p class="footer-note">Built with GitHub Pages.</p>
        </div>
      </footer>
    </main>
  </div>
</div>


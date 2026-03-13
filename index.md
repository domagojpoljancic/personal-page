---
layout: default
title: Home
---

<div class="page">
  <section class="hero">
    <div class="layout-grid">
      <!-- 1. Portrait (left column, top) -->
      <div class="profile-photo-block">
        <div class="hero-photo-wrap">
          <img class="hero-photo" src="{{ '/assets/profile.svg' | relative_url }}" alt="Profile image">
        </div>
      </div>

      <!-- 2. Name (left column, under portrait) -->
      <h1 class="profile-name">Placeholder Name</h1>
      <p class="profile-location">📍 City, Country</p>

      <!-- 3. Intro / bio card (right column, top) -->
      <div class="intro-card">
        <p class="intro-eyebrow">About</p>
        <p class="intro-lede">
          Product manager with an engineering background, focused on building simple tools and products that solve real problems.
        </p>
        <p class="hero-bio">
          Interested in thoughtful interfaces, calm product strategy, and learning by shipping small experiments.
        </p>

        <div class="chips">
          <span class="chip">Technical Product</span>
          <span class="chip">Engineering Degree</span>
          <span class="chip">AI Experiments</span>
          <span class="chip">Building in Public</span>
        </div>
      </div>

      <!-- 4. Links card (left column, under name and location) -->
      <div class="links-card">
        <h2 class="links-title">Links</h2>
        <ul class="links-list">
          <li><span class="links-label">Email</span><a href="mailto:your.email@example.com">your.email@example.com</a></li>
          <li><span class="links-label">LinkedIn</span><a href="https://linkedin.com/in/username">linkedin.com/in/username</a></li>
          <li><span class="links-label">GitHub</span><a href="https://github.com/username">github.com/username</a></li>
          <li><span class="links-label">Instagram</span><a href="https://instagram.com/username">instagram.com/username</a></li>
        </ul>
      </div>

      <!-- 5. Status card (right, under intro card) -->
      <div class="status-card">
        <p class="status-label">Current focus</p>
        <p class="status-value">Placeholder AI project</p>

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

      <!-- 6. Experience (left column, under links) -->
      <section class="section experience">
        <div class="section-inner">
          <h2 class="section-title">Experience</h2>
          <div class="timeline">
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
        </div>
      </section>

      <!-- 7. CV button (left, under Experience) -->
      <a class="btn-primary cv-button" href="{{ '/cv.pdf' | relative_url }}">Download CV</a>

      <!-- 8. Education (left column, under CV) -->
      <section class="section education">
        <div class="section-inner">
          <h2 class="section-title">Education</h2>
          <div class="timeline education-timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-role">Placeholder Degree</h3>
                <p class="timeline-meta">University Name · 2013 — 2017</p>
                <ul class="timeline-bullets">
                  <li>Short placeholder description about studies and focus areas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. Notes (right column, under Status) -->
      <section class="section notes" id="notes">
        <div class="section-inner">
          <h2 class="section-title">Notes</h2>
          <p class="section-intro">
            Short build logs about experiments and products in progress.
          </p>

          <ul class="notes-list">
            {% for post in site.posts limit:10 %}
              <li class="notes-item">
                <span class="notes-date">{{ post.date | date: "%Y-%m-%d" }}</span>
                <a class="notes-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <p class="notes-excerpt">
                  {{ post.excerpt | default: post.content | strip_html | truncatewords: 20 }}
                </p>
                <a class="notes-readmore" href="{{ post.url | relative_url }}">Read more →</a>
              </li>
            {% endfor %}
          </ul>
        </div>
      </section>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="section-inner footer-inner">
      <div class="footer-links">
        <a href="mailto:your.email@example.com">Email</a>
        <a href="https://linkedin.com/in/username">LinkedIn</a>
        <a href="https://github.com/username">GitHub</a>
      </div>
      <p class="footer-note">Built with GitHub Pages.</p>
    </div>
  </footer>
</div>


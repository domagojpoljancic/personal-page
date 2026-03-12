---
layout: default
title: Home
---

<div class="page">
  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-left">
        <h1 class="hero-headline">Technical Product Manager with an engineering background.</h1>
        <p class="hero-bio">
          Product-focused builder experimenting with software and new ideas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p class="hero-bio">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>

        <div class="chips">
          <span class="chip">Technical Product</span>
          <span class="chip">Engineering Degree</span>
          <span class="chip">AI Experiments</span>
          <span class="chip">Building in Public</span>
        </div>

        <div class="links-card">
          <h2 class="links-title">Links</h2>
          <ul class="links-list">
            <li><span class="links-label">Email</span><a href="mailto:your.email@example.com">your.email@example.com</a></li>
            <li><span class="links-label">LinkedIn</span><a href="https://linkedin.com/in/username">linkedin.com/in/username</a></li>
            <li><span class="links-label">GitHub</span><a href="https://github.com/username">github.com/username</a></li>
            <li><span class="links-label">Instagram</span><a href="https://instagram.com/username">instagram.com/username</a></li>
          </ul>
        </div>

        <a class="btn-primary" href="{{ '/cv.pdf' | relative_url }}">Download CV</a>

        <div class="status-card">
          <p class="status-label">Currently building</p>
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
      </div>

      <div class="hero-right">
        <div class="hero-photo-wrap">
          <img class="hero-photo" src="{{ '/assets/profile.svg' | relative_url }}" alt="Profile image">
        </div>
      </div>
    </div>
  </section>

  <!-- EXPERIENCE -->
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

  <!-- NOTES -->
  <section class="section notes">
    <div class="section-inner">
      <h2 class="section-title">Notes</h2>
      <p class="section-intro">
        Short build logs about experiments and products in progress.
      </p>

      <ul class="notes-list">
        {% for post in site.posts limit:3 %}
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


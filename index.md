---
layout: one-page
title: Home
---

<div class="portfolio">
  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-text">
        <h1 class="hero-headline">Technical Product Manager with an engineering background.</h1>
        <p class="hero-bio">Product-focused builder experimenting with software and new ideas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div class="chips">
          <span class="chip">Technical Product</span>
          <span class="chip">Engineering Degree</span>
          <span class="chip">AI Experiments</span>
          <span class="chip">Building in Public</span>
        </div>
        <div class="quick-links card">
          <a href="mailto:your.email@example.com" class="quick-link"><span class="icon">{% include icon-email.html %}</span> Email</a>
          <a href="https://linkedin.com/in/username" class="quick-link"><span class="icon">{% include icon-linkedin.html %}</span> LinkedIn</a>
          <a href="https://github.com/username" class="quick-link"><span class="icon">{% include icon-github.html %}</span> GitHub</a>
          <a href="https://instagram.com/username" class="quick-link"><span class="icon">{% include icon-instagram.html %}</span> Instagram</a>
        </div>
        <a href="/cv.pdf" class="btn btn-cv">Download CV</a>
        <div class="status card">
          <p class="status-label">Currently building</p>
          <p class="status-value">Placeholder AI project</p>
          <p class="status-label">Latest note</p>
          <p class="status-value">{% assign latest = site.posts | first %}{% if latest %}<a href="{{ latest.url }}">{{ latest.title }}</a>{% else %}—{% endif %}</p>
        </div>
      </div>
      <div class="hero-photo-wrap">
        <img class="hero-photo" src="{{ '/assets/profile.svg' | relative_url }}" alt="Profile photo" width="320" height="320">
      </div>
    </div>
  </section>

  <!-- EXPERIENCE -->
  <section class="section experience">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        {% for job in site.data.experience %}
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ job.title }}</h3>
            <p class="timeline-company">{{ job.company }}</p>
            <p class="timeline-dates">{{ job.dates }}</p>
            <ul class="timeline-bullets">
              {% for bullet in job.bullets %}
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
    <div class="container">
      <h2 class="section-title">Notes</h2>
      <p class="notes-intro">Short build logs about experiments and projects.</p>
      <ul class="notes-list">
        {% for post in site.posts limit: 3 %}
        <li class="notes-item">
          <span class="notes-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          <a href="{{ post.url }}" class="notes-title">{{ post.title }}</a>
          <p class="notes-preview">{{ post.excerpt | default: post.content | strip_html | truncatewords: 20 }}</p>
          <a href="{{ post.url }}" class="notes-link">Read more →</a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-links">
        <a href="mailto:your.email@example.com">Email</a>
        <a href="https://linkedin.com/in/username">LinkedIn</a>
        <a href="https://github.com/username">GitHub</a>
      </div>
      <p class="footer-credit">Built with GitHub Pages.</p>
    </div>
  </footer>
</div>

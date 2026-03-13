---
layout: default
title: Home
---

<div class="page">
  <div class="container">
    <aside class="sidebar">
      <div class="sidebar-stack">
        <div class="profile-wrap">
          <div class="avatar-wrap">
            <img class="avatar" src="{{ '/assets/profile.svg' | relative_url }}" alt="Profile" width="220" height="220">
          </div>
          <div class="name-block">
            <h1 class="profile-name">Placeholder Name</h1>
            <p class="profile-location">📍 City, Country</p>
          </div>
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

        <section class="section experience">
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
        </section>

        <a class="btn-primary cv-button" href="{{ '/cv.pdf' | relative_url }}">Download CV</a>

        <section class="section education">
          <h2 class="section-title">Education</h2>
          <div class="timeline">
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
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-role">Another Degree</h3>
                <p class="timeline-meta">Another University · 2010 — 2013</p>
                <ul class="timeline-bullets">
                  <li>Placeholder description for second entry.</li>
                </ul>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-role">Certificate</h3>
                <p class="timeline-meta">Institution · 2008 — 2010</p>
                <ul class="timeline-bullets">
                  <li>Short placeholder for third education entry.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>

    <main class="main">
      <div class="main-stack">
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

        <div class="status-card focus-card">
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

        <section class="section notes" id="notes">
          <h2 class="section-title">Notes</h2>
          <p class="section-intro">Short build logs about experiments and products in progress.</p>
          <div class="notes-list">
            {% for post in site.posts limit:5 %}
              <article class="note-card">
                <p class="note-date">{{ post.date | date: "%Y-%m-%d" }}</p>
                <h3 class="note-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                <p class="note-excerpt">{{ post.excerpt | default: post.content | strip_html | truncatewords: 20 }}</p>
                <a class="note-read" href="{{ post.url | relative_url }}">Read more →</a>
              </article>
            {% endfor %}
          </div>
        </section>
      </div>
    </main>
  </div>

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
</div>

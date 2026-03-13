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
            <li><span class="links-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7"/></svg><span class="links-label">Email</span></span><a href="mailto:your.email@example.com">your.email@example.com</a></li>
            <li><span class="links-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg><span class="links-label">LinkedIn</span></span><a href="https://linkedin.com/in/username">linkedin.com/in/username</a></li>
            <li><span class="links-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5.39.49.68 1.05 1 1.5v4"/><path d="M9 19c-5 1.5-5-2.5-7-3l2 2 3 3 2 2 3-3"/></svg><span class="links-label">GitHub</span></span><a href="https://github.com/username">github.com/username</a></li>
            <li><span class="links-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg><span class="links-label">Instagram</span></span><a href="https://instagram.com/username">instagram.com/username</a></li>
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
          <div class="notes-header">
            <h2 class="section-title">Notes</h2>
            <p class="section-intro">Short build logs about experiments and products in progress.</p>
          </div>
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

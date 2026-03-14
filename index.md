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
            <img class="avatar" src="{{ '/assets/profile.png' | relative_url }}" alt="Domagoj Poljančić" width="220" height="220">
          </div>
          <div class="name-block">
            <h1 class="profile-name">Domagoj Poljančić</h1>
            <p class="profile-location">📍 Hamburg, Germany</p>
          </div>
        </div>

        <div class="links-card">
          <h2 class="links-title">Links</h2>
          <ul class="links-list">
            <li>
              <div class="links-row">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="1.6" />
                  <polyline points="4 6 12 12 20 6" fill="none" stroke="currentColor" stroke-width="1.6" />
                </svg>
                <span class="links-label">Email</span>
              </div>
              <a href="mailto:domagoj.poljancic@gmail.com">domagoj.poljancic@gmail.com</a>
            </li>
            <li>
              <div class="links-row">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="1.6" />
                  <path d="M8 17V10h2.5V17H8Zm3.75 0V10H14v1.8h.03C14.3 10.9 15.1 10.5 16 10.5c1.9 0 2.5 1.1 2.5 3V17H16v-2.7c0-.8-.3-1.3-1-1.3-.9 0-1.3.6-1.3 1.7V17h-1.95Z" fill="currentColor" />
                </svg>
                <span class="links-label">LinkedIn</span>
              </div>
              <a href="https://linkedin.com/in/dpoljancic">linkedin.com/in/dpoljancic</a>
            </li>
            <li>
              <div class="links-row">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6" />
                  <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="1.6" />
                </svg>
                <span class="links-label">GitHub</span>
              </div>
              <a href="https://github.com/dpoljancic">github.com/dpoljancic</a>
            </li>
            <li>
              <div class="links-row">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" ry="4" fill="none" stroke="currentColor" stroke-width="1.6" />
                  <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6" />
                  <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" />
                </svg>
                <span class="links-label">Instagram</span>
              </div>
              <a href="https://instagram.com/username">instagram.com/username</a>
            </li>
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

        <a class="btn-primary cv-button" href="{{ '/assets/Domagoj_Poljancic_CV_2026.pdf' | relative_url }}">Download CV</a>

        <section class="section education">
          <h2 class="section-title">Education</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-role">Master of Computer Engineering</h3>
                <p class="timeline-meta">Faculty of Engineering, Rijeka · 2017</p>
                <ul class="timeline-bullets">
                  <li>Graduated Cum Laude (Top 20%). Member of Autonomous Perception and Artificial Systems Laboratory. Thesis on photogrammetry; publication on OpenStack-based cloud.</li>
                </ul>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="timeline-role">Bachelor of Computer Engineering</h3>
                <p class="timeline-meta">Faculty of Engineering, Rijeka · 2015</p>
                <ul class="timeline-bullets">
                  <li>Co-founder of RITEH UAV Team. Thesis on UAV interaction via smartwatch/smartphone; publication on UAV safety and regulations.</li>
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
            Technical product manager with 9+ years across system engineering, business analysis, and product. I bridge business and IT by turning priorities into clear backend architecture and scalable APIs.
          </p>
          <p class="hero-bio">
            Focused on backend-heavy products, KYC and account lifecycle, and practical AI—from LLMs and RAG to observability and delivery. Strong in Agile, SQL, AWS, and making complex systems easier to run and integrate.
          </p>
          <div class="chips">
            <span class="chip">Technical Product</span>
            <span class="chip">Backend & APIs</span>
            <span class="chip">AI & Data</span>
            <span class="chip">Observability</span>
          </div>
        </div>

        <div class="status-card focus-card">
          <p class="status-label">Current focus</p>
          <p class="status-value">Backend product, KYC & account lifecycle, and AI-enabled tooling.</p>
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
        <a href="mailto:domagoj.poljancic@gmail.com">Email</a>
        <a href="https://linkedin.com/in/dpoljancic">LinkedIn</a>
        <a href="https://github.com/dpoljancic">GitHub</a>
      </div>
      <p class="footer-note">Built with GitHub Pages.</p>
    </div>
  </footer>
</div>

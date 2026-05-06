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
            <p class="profile-tagline">Technical Product Manager focused on backend platforms, APIs and AI-enabled products.</p>
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
              <a href="https://github.com/domagojpoljancic">github.com/domagojpoljancic</a>
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
              <a href="https://www.instagram.com/domagoj.93/">instagram.com/domagoj.93</a>
            </li>
          </ul>
        </div>

        {% assign exp_roles = site.data.experience %}
        <section class="section experience{% if exp_roles.size == 1 %} experience-single-role{% endif %}" id="experience-section">
          <h2 class="section-title">Experience</h2>
          <div class="timeline">
            {% for role in exp_roles limit:1 %}
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
            {% if exp_roles.size > 1 %}
              {% for role in exp_roles offset:1 limit:1 %}
                <div class="timeline-item experience-second-desktop-only">
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
            {% endif %}
            {% if exp_roles.size > 2 %}
              <div id="experience-toggle-slot-top" class="experience-toggle-slot-top"></div>
            {% endif %}
            {% if exp_roles.size > 1 %}
            <div class="experience-mobile-top">
              <button type="button" class="sidebar-expand-btn sidebar-expand-experience-top" id="experience-expand-btn-top" aria-expanded="false" aria-controls="experience-more-panel">Show more experience</button>
              <a class="btn-primary cv-button cv-button-mobile-collapsed" href="{{ '/assets/Domagoj_Poljancic_CV_2026.pdf' | relative_url }}">Download CV</a>
              <a class="btn-secondary cv-button references-button cv-button-mobile-collapsed" href="mailto:domagoj.poljancic@gmail.com?subject=Reference%20request%20for%20Domagoj%20Poljancic&body=Hi%20Domagoj%2C%0A%0AI%E2%80%99d%20like%20to%20request%20references%20regarding%20your%20experience%20for%20a%20role%2Fopportunity.%0A%0ACompany%3A%0ARole%3A%0A%0AThanks%2C%0A">Request references</a>
            </div>
            <div id="experience-more-panel" class="experience-more-panel">
              {% for role in exp_roles offset:1 %}
                <div class="timeline-item{% if forloop.first %} experience-more-second-mobile-only{% endif %}">
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
            {% if exp_roles.size > 2 %}
              <div id="experience-toggle-slot-bottom" class="experience-toggle-slot-bottom">
                <button type="button" class="experience-desktop-toggle" id="experience-desktop-toggle-btn" aria-expanded="false" aria-controls="experience-more-panel">
                  <span class="experience-toggle-label-more">Show more experience</span>
                  <span class="experience-toggle-label-less" hidden>Show less experience</span>
                </button>
              </div>
            {% endif %}
            <div class="experience-mobile-bottom">
              <button type="button" class="sidebar-expand-btn sidebar-expand-experience-bottom" id="experience-collapse-btn-bottom" aria-expanded="true" aria-controls="experience-more-panel">Hide experience</button>
              <a class="btn-primary cv-button cv-button-mobile-expanded" href="{{ '/assets/Domagoj_Poljancic_CV_2026.pdf' | relative_url }}">Download CV</a>
              <a class="btn-secondary cv-button references-button cv-button-mobile-expanded" href="mailto:domagoj.poljancic@gmail.com?subject=Reference%20request%20for%20Domagoj%20Poljancic&body=Hi%20Domagoj%2C%0A%0AI%E2%80%99d%20like%20to%20request%20references%20regarding%20your%20experience%20for%20a%20role%2Fopportunity.%0A%0ACompany%3A%0ARole%3A%0A%0AThanks%2C%0A">Request references</a>
            </div>
            {% else %}
            <div class="experience-mobile-top experience-mobile-top-cv-only">
              <a class="btn-primary cv-button cv-button-mobile-collapsed" href="{{ '/assets/Domagoj_Poljancic_CV_2026.pdf' | relative_url }}">Download CV</a>
              <a class="btn-secondary cv-button references-button cv-button-mobile-collapsed" href="mailto:domagoj.poljancic@gmail.com?subject=Reference%20request%20for%20Domagoj%20Poljancic&body=Hi%20Domagoj%2C%0A%0AI%E2%80%99d%20like%20to%20request%20references%20regarding%20your%20experience%20for%20a%20role%2Fopportunity.%0A%0ACompany%3A%0ARole%3A%0A%0AThanks%2C%0A">Request references</a>
            </div>
            {% endif %}
          </div>
        </section>

        <a class="btn-primary cv-button cv-button-desktop-only" href="{{ '/assets/Domagoj_Poljancic_CV_2026.pdf' | relative_url }}">Download CV</a>
        <a class="btn-secondary cv-button references-button cv-button-desktop-only" href="mailto:domagoj.poljancic@gmail.com?subject=Reference%20request%20for%20Domagoj%20Poljancic&body=Hi%20Domagoj%2C%0A%0AI%E2%80%99d%20like%20to%20request%20references%20regarding%20your%20experience%20for%20a%20role%2Fopportunity.%0A%0ACompany%3A%0ARole%3A%0A%0AThanks%2C%0A">Request references</a>

        <section class="section education" id="education-section">
          <h2 class="section-title">Education</h2>
          <button type="button" class="sidebar-expand-btn sidebar-expand-education-top" id="education-expand-btn-top" aria-expanded="false" aria-controls="education-panel">Show education</button>
          <div id="education-panel" class="timeline education-panel">
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
          <button type="button" class="sidebar-expand-btn sidebar-expand-education-bottom" id="education-collapse-btn-bottom" aria-expanded="true" aria-controls="education-panel">Hide education</button>
        </section>
      </div>
    </aside>

    <main class="main">
      <div class="main-content">
        <h2 class="main-headline">Technical Product Manager building scalable backend platforms, APIs, and AI-enabled systems.</h2>

        <p class="main-summary">
          I’m a technical product leader with 9+ years across product management and system engineering, focused on backend platforms and APIs. I sit between product and engineering to turn messy requirements into clear architectures: platforms, integrations, and services that teams can actually ship and operate. I’ve led platform work on player accounts, KYC, tenant integrations, and observability, with a strong bias toward documentation and visibility so teams move fast without losing trust in the system.
        </p>

        <section class="focus-areas" aria-label="Focus areas">
          <h3 class="focus-areas-title">Focus Areas</h3>
          <div class="focus-areas-grid">
            <span class="focus-area-tag">Product Strategy</span>
            <span class="focus-area-tag">Technical Leadership</span>
            <span class="focus-area-tag">Backend Platform Architecture</span>
            <span class="focus-area-tag">SaaS</span>
            <span class="focus-area-tag">Systems Design</span>
            <span class="focus-area-tag">APIs & Integrations</span>
            <span class="focus-area-tag">Authentication & Identity</span>
            <span class="focus-area-tag">KYC & Regulated Systems</span>
            <span class="focus-area-tag">Observability & Reliability</span>
            <span class="focus-area-tag">AI & LLM Systems</span>
          </div>
        </section>

        <div class="main-focus main-focus-editorial">
          <p class="focus-label">Current Focus</p>
          <p class="focus-block"><strong>Work:</strong><br>Leading product and architecture for B2B backend platforms - APIs, player accounts, KYC, and authentication. Driving clarity and reducing integration friction so teams can ship faster on reliable foundations.</p>
          <p class="focus-block"><strong>Side:</strong><br>Currently building Baby Routine, a watch-first helper for parents to log bottle feeds, left or right breast feeds, and diaper changes from the wrist.<br><br>Built a vibecoded iOS app (LangGraph, RAG) and explored LLM systems, agents, and reliability from prototyping to real-world constraints.</p>
        </div>

        <section class="section notes notes-preview" id="notes">
          <h2 class="notes-section-title">Notes</h2>
          <p class="notes-section-intro">Technical and product reflections: experiments, tools, and what I’m learning.</p>
          <div class="notes-feed">
            <article class="note-preview note-preview-disabled" aria-disabled="true">
              <p class="note-preview-date">2026-05-06</p>
              <h3 class="note-preview-title">Exploring new AI ideas while parents keep requesting Baby Tracker features</h3>
              <p class="note-preview-excerpt">While exploring new AI ideas and learning new technologies, I still shipped three Baby Routine Tracker updates — one of which made a happy parent send me an advanced baby thermometer as a gift.</p>
              <span class="note-preview-badge">Coming soon</span>
            </article>
            {% for post in site.posts limit:5 %}
              <article class="note-preview">
                <p class="note-preview-date">{{ post.date | date: "%Y-%m-%d" }}</p>
                <h3 class="note-preview-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                <p class="note-preview-excerpt">{{ post.excerpt | default: post.content | strip_html | truncatewords: 40 }}</p>
                {% if post.coming_soon %}
                  <span class="note-preview-link">COMING SOON</span>
                {% else %}
                  <a class="note-preview-link" href="{{ post.url | relative_url }}">Read more →</a>
                {% endif %}
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
        <a href="https://github.com/domagojpoljancic">GitHub</a>
        <a href="https://www.instagram.com/domagoj.93/">Instagram</a>
      </div>
      <p class="footer-note">Built with GitHub Pages.</p>
    </div>
  </footer>
</div>

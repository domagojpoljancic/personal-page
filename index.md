---
layout: default
title: Home
---

<div class="home">
  <section class="hero">
    <img class="profile-photo" src="{{ '/assets/profile.svg' | relative_url }}" alt="Profile photo" width="140" height="140">
    <h1 class="hero-headline">Building useful software and experimenting with new ideas.</h1>
    <p class="hero-summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>

  <section class="section">
    <h2 class="section-title">Featured projects</h2>
    <div class="project-card">
      <h3>Project Alpha</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Short description of the project and its outcome.</p>
      <a href="https://github.com/username/project-alpha">View project →</a>
    </div>
    <div class="project-card">
      <h3>Project Beta</h3>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Another placeholder project summary.</p>
      <a href="https://github.com/username/project-beta">View project →</a>
    </div>
    <div class="project-card">
      <h3>Project Gamma</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation. Third placeholder with a brief description.</p>
      <a href="https://github.com/username/project-gamma">View project →</a>
    </div>
    <p><a href="{{ '/projects.html' | relative_url }}">View all projects →</a></p>
  </section>

  <section class="section">
    <h2 class="section-title">Latest writing</h2>
    {% include latest-posts.html %}
    <p><a href="{{ '/blog.html' | relative_url }}">Read more on the Writing page →</a></p>
  </section>

  <section class="section about-preview">
    <h2 class="section-title">About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p><a href="{{ '/about.html' | relative_url }}">More about me →</a></p>
  </section>

  <section class="section">
    <h2 class="section-title">Contact</h2>
    <ul class="contact-list">
      <li><strong>GitHub:</strong> <a href="https://github.com/username">github.com/username</a></li>
      <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/username">linkedin.com/in/username</a></li>
      <li><strong>Email:</strong> your.email@example.com</li>
    </ul>
  </section>
</div>

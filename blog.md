---
layout: page
title: Writing
permalink: /blog/
---

## Writing

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Here you'll find occasional posts and notes.

---

### Posts

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <div class="post-date">{{ post.date | date: "%Y-%m-%d" }}</div>
    <a class="post-title" href="{{ post.url }}">{{ post.title }}</a>
    <p class="post-excerpt">{{ post.excerpt | default: post.content | strip_html | truncatewords: 25 }}</p>
    <a href="{{ post.url }}">Read more →</a>
  </li>
{% endfor %}
</ul>

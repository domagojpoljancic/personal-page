---
title: "Building my personal page with vibe coding"
date: 2026-03-16
description: "Notes on building my personal website with GitHub Pages and vibe coding — what worked, what didn’t, and what I’d do differently."
layout: post
slug: building-personal-page-vibe-coding
cover: /assets/images/image-6b57a37f-8102-4cd1-9ed3-4e519003d2ac.png
tags: [ai, vibe-coding, github-pages]
---

This one started as a side quest.

While I was building my iOS app with AI, I thought it would be a great idea to also quickly create a personal page. Something simple — a place where I can write, share what I build, and have a single link that represents me.

Riding the whole vibe coding hype, the idea felt obvious: just build it myself.

No templates. No frameworks. Just a blank repo, GitHub Pages, and AI.

---

I chose GitHub Pages mostly because it’s simple and free. No backend, no hosting setup, no complexity. I also looked at existing tools and templates, but most of them felt very similar, and I didn’t like the design enough to just reuse them.

So I decided to vibe code the whole thing from scratch.

Stack-wise, it’s pretty straightforward: HTML, CSS, a bit of Jekyll, and everything hosted on GitHub Pages. I also added GitHub Actions, mostly out of curiosity — just a small pipeline that runs checks before publishing.

---

What I expected was something similar to building the iOS app.

Open Cursor, describe what I want, iterate a bit, done.

That’s not what happened.

---

The biggest frustration was turning design ideas into actual layout.

With the app, I could describe flows and logic and get pretty good results. With the website, things like spacing, alignment, and structure were much harder. Small changes — like moving a button or adjusting spacing — took multiple prompts.

Copying parts of the page into Cursor and saying “move this here” or “make this cleaner” didn’t work well. Everything had to be very explicit. And even then, results were inconsistent.

Iteration felt slow.

---

AI definitely helped, but not in the way I expected.

It was useful for generating initial structure, fixing bugs, and suggesting CSS changes. But it struggled with consistent design decisions, following a visual direction, and keeping things simple.

In many cases, it overcomplicated solutions instead of simplifying them.

---

One thing I didn’t expect was how many tokens I burned on small changes.

Things like adjusting spacing, tweaking colors, or fixing layout issues each took multiple prompts. Looking back, many of those changes would have been faster to just write directly in CSS.

---

What also surprised me is that this took roughly the same amount of time as building my iOS app.

That shouldn’t be the case.

But it happened because I didn’t have a clear design upfront, I was designing while coding, and I expected AI to “figure out” the design for me.

It didn’t.

---

There were also some annoying technical issues.

At one point, changes weren’t showing up at all — which turned out to be caching issues. Another time, the entire design basically broke and the page switched from dark to light without any obvious reason.

Debugging that with AI wasn’t fun.

---

That said, the end result is actually pretty good.

It looks clean, minimal, and surprisingly close to something you’d expect from a proper template. You wouldn’t immediately guess it was built this way.

---

If I were to do this again, I’d probably take a different approach.

Most likely start with a template, focus on content first, and then customize instead of building everything from scratch.

Vibe coding works — but for this use case, it wasn’t the most efficient path.

---

My main takeaway:

Building a personal site with AI felt like a challenge.

It’s absolutely possible, and it does work. But it’s not as easy as it looks — especially when design is involved.

I’m still optimistic about vibe coding. It’s powerful, and it helped me get something real out there.

But this was a good reminder:

AI doesn’t replace thinking, structure, or taste.

You still need all three.

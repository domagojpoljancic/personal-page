---
title: "A weekend vibe coding experiment"
date: 2026-03-12
description: "A short write-up of building a small iOS app in a weekend using Cursor and vibe coding, combining product thinking with AI-assisted development."
excerpt: "A short write-up of building a small iOS app in a weekend using Cursor and vibe coding, combining product thinking with AI-assisted development."
layout: post
slug: weekend-vibe-coding-experiment
cover: /assets/images/weekend-live-coding-cover.png
tags: [ai, cursor, live-coding, ios]
---

I decided to finally try vibe coding seriously—not just playing around with prompts, but actually building something real. The goal wasn’t to generate code snippets, but to end up with a working app: something structured, usable, and grounded in a real use case (mine).

After reading quite a bit about different tools over the past year, one kept coming up: Cursor. I had seen people use it successfully for actual development work, not just experiments, so I decided to give it a proper try. I briefly considered alternatives like Lovable, but Cursor felt like the better choice if I wanted something that could handle real logic and potentially grow into something more complex later.

For me, vibe coding means compressing product thinking, design, and development into a single continuous flow. You’re not separating phases anymore. You define the idea, shape the product, think through structure, and build it—all at once. The key difference is that you’re not doing it alone. You’re working with a system that can turn your ideas into code, suggest structure, help debug, and even write tests. But that only works if you guide it properly. Without structure, it quickly turns into noise.

Interestingly, this project didn’t start in Cursor. It started in Miro. For a few weeks, I had been collecting ideas—most of them didn’t lead anywhere. After a couple of failed attempts with other concepts and tools, I decided to simplify the problem. Instead of trying to build something “interesting,” I focused on something I already use every day: a physical vocabulary box for learning German.

That became the foundation for the app.

Before writing any code, I mapped out the basic structure. Nothing overly detailed—just flows, screens, and the smallest possible version of the product. The key decision was to keep the MVP extremely tight. If the app could only do one useful thing, it had to allow a user to create a box, add words, and study them. Everything else was deliberately excluded. No backend, no authentication, no overcomplicated AI features. That constraint turned out to be one of the most important decisions in the entire process.

Once that was clear, I moved into Cursor and started building. The workflow was simple but effective: think through a feature, sometimes shape a prompt in ChatGPT, bring it into Cursor, and iterate directly in the codebase. What surprised me most was how fast things moved. Setting up Xcode, structuring the app, and even attaching a local database all happened much faster than expected.

Even more interesting was how well Cursor handled context. At one point, I added a placeholder for a “How to use” screen, planning to come back to it later. Cursor picked up on how the rest of the app worked and generated a surprisingly complete version of that screen on its own. That was one of the moments where the whole approach really clicked.

In total, this was a weekend project—less than 10 hours of work spread across two days. Roughly half of that time went into product thinking and design, around 20% into database logic, and the rest into UI, polishing, and fixing issues. There were fewer bugs than I expected, which honestly surprised me. The result was a fully working, local version of the app. Only after that did I start thinking about adding a backend and AI agents.

A big part of why this worked was not the tool itself, but the combination of the skills. Product thinking helped define scope and avoid unnecessary features. Basic development knowledge helped structure things properly. Previous coding experience made it easier to review and adjust what was generated. And AI knowledge helped me actually use the tool effectively instead of just prompting randomly.

At the same time, not everything was smooth. Some things didn’t work on the first try, and there was definitely time spent fixing edge cases and doing small refactors. Frontend polish, in particular, still required manual thinking. Also, this wasn’t my first attempt at something like this. I had tried a similar approach last year with a different tool, and it didn’t go well. Things broke, I couldn’t recover easily, and the project fell apart. This time felt much more stable and controlled.

What made the difference was being strict about what not to build. I intentionally skipped backend work, authentication, user profiles, and more advanced AI features. That kept the scope manageable and allowed me to actually finish something instead of endlessly extending it.

So, does vibe coding actually work? Yes—but only under the right conditions. AI clearly compresses the process of building an MVP. You can go from idea to a working app in hours instead of days. Setup is faster, iteration is faster, and even structure can emerge quickly. But there’s an important caveat: anyone can build an AI app, but not everyone can build a good one. The difference comes down to judgment—knowing what to build, what to skip, and how to guide the system.

For me, this experiment proved that vibe coding works if you constrain the problem properly. Without constraints, you generate a lot but build very little. With them, you can move surprisingly fast and end up with something that actually makes sense.

In the next post, I’ll go into the app itself—what I built, how it works, and what the first version actually looks like.

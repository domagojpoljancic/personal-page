---
layout: post
title: "Exploring new AI ideas while parents keep requesting Baby Tracker features"
date: 2026-05-06 12:00:00 +0000
categories: [projects, garmin, ai]
cover: /assets/images/baby-tracker-maintenance-cover.png
description: "Baby Routine Tracker kept growing after launch — native menus, manual logging, performance fixes, and what it feels like when real parents depend on your side project."
excerpt: "While exploring new AI ideas and learning new technologies, I still shipped three Baby Routine Tracker updates — one of which made a happy parent send me an advanced baby thermometer as a gift."
---

Even though Baby Routine Tracker started as a small side project, people continued using it long after the initial release.

And not only using it — they kept sending feedback, feature requests, and bug reports.

At some point I realized that maintaining real software feels very different from building something new from scratch.

Once real users appear, the project changes completely.

Suddenly, things that seemed “good enough” stop being good enough anymore.

---

One of the first larger updates I shipped was replacing the old custom menus with Garmin’s native menu components.

Honestly, I still don’t know why I didn’t use them from the beginning.

The app immediately felt cleaner and much more natural to use. Sometimes the best improvements come from removing your own custom solutions and just using the platform properly.

---

Another important update came directly from user feedback.

Originally, users asked for easier editing of historical entries. But after talking through the actual issue, I realized they didn’t really want advanced editing.

What they actually needed was manual entry logging.

So instead of building complicated editing flows, I added the ability to manually log diapers and feeding sessions directly through the menu or by long-holding the main buttons.

That turned out to be exactly the right decision.

The parent who originally requested the feature was so happy with the update that they actually sent my family an advanced baby thermometer as a gift.

That was probably the moment where the app stopped feeling like “just a side project.”

---

Another category of issues only appeared after people started using the app heavily over a longer period of time.

At first everything worked perfectly fine during testing. But real users behave differently than test data.

As parents kept logging more and more entries, the app started slowing down. History views became heavier, responsiveness dropped, and some screens behaved unpredictably simply because I never tested the app with hundreds of records in the database.

So a large part of recent updates became focused on performance and stability:

- fixing storage handling
- improving responsiveness
- optimizing history loading
- fixing 12/24 hour formatting issues

None of those updates sound particularly exciting, but they matter a lot once people actually depend on your software every day.

---

What surprised me most is how different maintaining software feels compared to building it.

When you build something new, it’s mostly ideas, features, experimentation, and excitement.

Maintenance is different.

Users are not thinking about architecture or clean code. They are tired parents trying to quickly log something while carrying a baby at 3 AM.

That changes how you think about software.

You stop optimizing for “cool ideas” and start optimizing for reliability, speed, and simplicity.

---

AI still helped a lot during maintenance.

I continued using Cursor and vibe coding for fixes, refactors, and iteration. In many cases it significantly sped up development, especially for smaller changes and debugging.

But maintenance also exposed something important:

A lot of software problems only appear after long-term real-world usage.

Not because the original implementation was necessarily bad, but because it’s impossible to predict every usage pattern in advance.

---

I think that’s probably the biggest lesson from this project so far.

Building software is one thing.

Maintaining software that people actually rely on is something completely different.

And honestly, it’s both more exhausting and more rewarding than I expected.

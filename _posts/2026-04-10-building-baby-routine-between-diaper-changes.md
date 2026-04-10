---
layout: post
title: "Building a Baby Routine Tracker for Garmin (Between Diaper Changes)"
date: 2026-04-10 12:00:00 +0000
categories: [projects, garmin, ai]
cover: /assets/images/baby-routine-tracker-cover.png
description: "When the watch tracks every workout but not the 2 AM bottle, you open Monkey C between diaper changes. Parental leave, docs-first debugging, and a watch that occasionally rebooted to keep me humble."
excerpt: "When the watch tracks every workout but not the 2 AM bottle, you write little apps for your Garmin between diaper changes and pretend that's normal. Parental leave well spent."
---

👉 **Try the app:** [https://apps.garmin.com/en-US/apps/1668307c-8455-466e-8dfd-ae30a4a37915](https://apps.garmin.com/en-US/apps/1668307c-8455-466e-8dfd-ae30a4a37915)

---

At some point it became obvious that we were already using our Garmin watches for almost everything - steps, sleep, workouts - but not for the one thing we were suddenly doing all day.

We had just gotten a baby. And naturally, what's better than building an app for it.

Feeding, diapers, sleep… all of that still lived on the phone. And every time it meant unlocking it, opening an app, tapping something, and putting it away again - usually while holding a baby with the other hand.

My wife had already started using one of the existing apps on her watch, but it was quite limited. Still, it was enough to get the idea going - we quickly started noticing what was missing and how it could be better.

It wasn't a huge problem, but it was repetitive enough to be annoying. And since both of us already had Garmin watches, the idea felt obvious: this should live on the watch, and it should be simple.

---

I decided to use part of my parental leave to build it. Not in a structured way, but in short bursts between everything else going on. The initial goal was simple - just get something working. Naturally, that didn't stay minimal for very long.

When I saw that Garmin apps are built in Monkey C, I wasn't overly optimistic. It's not exactly a common language, which usually means fewer examples and less reliable AI support. Still, getting started was surprisingly smooth. The simulator worked immediately, and putting together a basic UI didn't take much effort. Designing the app was actually one of the easier parts - I used Miro to sketch ideas, ChatGPT to structure them, and Cursor to implement. For simple interfaces, that combination works really well.

---

The problems started once I moved beyond visuals and into actual logic. Things compiled, something appeared on the screen, but behavior was inconsistent. The code looked reasonable, but didn't really hold up. It took a bit to realize that AI was mostly guessing. Without strong references, it was producing something plausible, not something reliable.

What made a difference was changing how I approached prompting. I started referencing official Garmin documentation in almost every step and pointing Cursor to real projects to guide implementation details. That was especially important for things like menus, where small interaction details matter a lot. Being explicit about expected behavior helped turn the process into something more predictable.

---

Even then, there were moments where I got stuck in loops - fixing one issue would introduce another, and I'd end up going back and forth between approaches. At some point I stopped expecting AI to solve it and switched to more traditional debugging: logging, isolating problems, trying different directions. That's where things started to stabilize.

The takeaway there was pretty clear: AI is extremely powerful, but it still requires you to think like an engineer. Especially when you're working with less common technologies, it doesn't replace understanding - it just accelerates whatever direction you give it.

---

The first attempt to install the app on my watch was another small reminder of that. I initially followed AI-generated instructions, which didn't work. Then I went through Garmin's documentation and did it properly, and everything fell into place. It wasn't a big issue, but it reinforced the same pattern - docs first, AI second.

A more memorable moment was when the app started crashing the watch. At one point, pressing any button would simply restart the device. Not exactly reassuring when you're testing on something you use every day - especially when that device is a brand new, top-tier Garmin watch you just bought. Seeing it reboot over and over again is not the kind of feedback you want. Fortunately, it turned out to be just a logic issue and not anything permanent, but it definitely made the debugging process feel a bit more real.

---

One thing I really liked throughout the project is how fast everything feels. The codebase is small, changes are quick, and the feedback loop is immediate. You're not dealing with layers of complexity - you're just trying ideas and seeing what happens. That also made it easy to go beyond the original scope. The plan was to build a minimal MVP, but once things started working, I kept adding small improvements. Nothing major, just incremental changes that made the app more usable.

---

If I had to summarize the experience, it's mostly about how AI fits into the process. It speeds things up significantly, but only if you guide it properly. Documentation becomes more important, not less, and referencing real projects often makes the difference between something working and something just looking right.

But beyond that, this project reminded me of something simpler. You don't need a big idea to build something useful. Sometimes it's just about removing a small friction from your daily routine.

In this case, that friction was unlocking a phone while holding a baby at 2 AM.

---

That's probably the most honest description of this app.

And also a pretty accurate picture of what coding looks like right now - slightly chaotic, occasionally frustrating, but still very much worth it.

I'll keep an eye on how people use it (if anyone installs it at all), but for now the main feedback loop is very close to home. My wife and I will effectively be QA - using it daily, noticing what's missing, reporting bugs to each other, and gradually shaping it further.

---
title: "Putting AI into action for LinguAI"
date: 2026-03-23 12:00:00 +0000
layout: post
description: "From simple AI idea to hybrid backend — LangGraph, database, and the reality of building AI features."
excerpt: "From simple AI idea to hybrid backend — LangGraph, database, and the reality of building AI features."
slug: putting-ai-into-action-for-linguai
cover: /assets/images/image-7398f0ce-6749-498b-b3a5-85abc5ac5f32.png
tags: [ai, backend, langgraph, retrieval, ios]
---

From the very beginning, this project was never just about building an iOS app. The idea was always to create something that actually uses AI in a meaningful way. Not just calling an API, but building something closer to agents, workflows, and eventually more advanced concepts like RAG.

The moment this became real was when I introduced the "AI Suggest" button. That was the first feature that required an actual backend. Up until that point, everything could live on the device, but generating vocabulary boxes dynamically required something more.

In my head, the backend was very simple. All I needed was something that takes a prompt and returns a vocabulary box. That was it. It sounded almost trivial.

It turned out not to be.

---

### Why I went with LangGraph

Before committing to a solution, I explored tools like n8n and Flowise. Both are great, especially when it comes to visualizing workflows and building pipelines quickly. I even ran them locally and experimented a bit.

But something did not feel right.

Building logic block by block in a UI felt limiting, especially for what I had in mind long term. I knew I would eventually want more control, more flexibility, and probably more complex pipelines. LangGraph seemed like a better fit for that direction, even if it was slightly overkill for the first version.

What made the decision easier was the fact that it works well with a code-first approach, which fits naturally with vibe coding. Instead of being constrained by a visual tool, I could evolve the logic more freely.

---

### Learning while building

I did not come into this with deep knowledge of LangGraph. I knew it existed, but that was about it. Most of the learning happened while building.

Interestingly, this did not feel as hard as I expected. Vibe coding helped a lot here. Instead of spending hours reading documentation, I could iterate quickly, ask for explanations, and adjust as I went.

At the same time, I am aware that I still do not fully understand everything that is happening under the hood. And that is fine for now. The goal was not mastery, but progress.

---

### What I thought would work (and did not)

My initial mental model was quite structured. I imagined clean separation of agents, clear state management, and predictable routing. It looked neat in theory.

Once I started implementing it, that structure began to fall apart.

The more I extended the system, the more I realized that my initial assumptions did not hold. Some parts were too rigid, others too simplistic. I had to adapt constantly, changing the logic as new edge cases appeared.

What started as a clean design slowly evolved into something more pragmatic. Less elegant, but more useful.

---

### Database vs AI

At one point, I tried to rely heavily on a database. There are plenty of existing vocabulary datasets, so it seemed logical to build a retrieval-based solution first.

And for simple use cases, it worked well. If the prompt was something like "food vocabulary", the results were solid.

But as soon as the requests became more nuanced, the system started to struggle. The database approach alone was not flexible enough.

That is when I moved towards a hybrid solution. The idea was simple: use the database when possible, and fall back to AI when needed. Then validate the results and store them for future reuse.

This was not something I planned from the beginning. It was a direct result of what did not work.

---

### The real difficulty: quality

The biggest surprise was not the architecture or the tooling. It was quality.

I initially assumed that generating useful vocabulary would be straightforward. Write a prompt, get a structured response, done.

In reality, getting consistent, relevant, and non-generic results takes a lot of effort. Prompting alone is not enough. You need validation, filtering, and sometimes multiple iterations to get something usable.

Most of the backend complexity comes from trying to solve this problem.

---

### What worked well

Despite the challenges, some parts worked surprisingly smoothly. Setting up LangGraph and getting the basic flow running was easier than expected. The integration between backend and frontend also felt very natural.

I could define what the backend should return and then immediately use that in the iOS app. That feedback loop was fast and reliable, which made the overall development process much more enjoyable.

---

### Where things got messy

At some point, I gave Cursor too much freedom. It started restructuring parts of the backend, introducing new nodes, and changing logic without me fully realizing the impact.

Eventually, I reached a point where I did not fully understand my own system anymore.

Getting out of that required stepping back, asking for explanations, and going through the flow step by step. It was a good reminder that speed without control can backfire.

Another challenge was the lack of a graphical overview. Compared to tools like n8n or Flowise, everything here lives in code. That makes debugging harder and increases the chance of losing track of the overall flow.

---

### Idempotency and real-world concerns

One thing I did not initially think about was idempotency. Once the backend started interacting with external APIs, especially OpenAI, it became clear that duplicate requests could become a problem.

Adding request tracking and conflict handling turned out to be an important step. It is not a flashy feature, but it makes the system more reliable and prevents unnecessary costs.

---

### Testing reality

Although I wrote some tests and even used AI to generate additional cases, most of the validation was manual. I relied heavily on iterating through request and response cycles, observing the output, and adjusting the logic.

It is not perfect, but for an early-stage project, it was enough to move forward.

---

### Where things stand

The backend now works. It generates vocabulary boxes, integrates with the app, and behaves reliably enough for real usage.

At the same time, it is far from simple. There are many moving parts, and coming back to the project requires a bit of reorientation each time.

---

### Final thought

Building the backend for this app felt like exploring something new, complex, but ultimately powerful.

It confirmed something important for me: AI does not remove complexity. It just shifts it.

And if you are not careful, it can shift it somewhere you do not fully understand.

---
title: "Leviathan Alpha — 30-Day Game Plan"
author: "Personal reference document"
date: "April 2026"
geometry: "margin=1in"
fontsize: 11pt
mainfont: "Helvetica"
colorlinks: true
linkcolor: "black"
urlcolor: "black"
header-includes:
  - \usepackage{xcolor}
  - \definecolor{signalgreen}{RGB}{32,197,93}
  - \usepackage{titlesec}
  - \titleformat{\section}{\normalfont\Large\bfseries\color{signalgreen}}{\thesection}{1em}{}
---

# The one-page summary

**Goal by end of month:**

- 300–500 Twitter followers
- 50–100 waitlist signups
- 1 viral moment (thread or tweet with 50+ engagements)
- Clear answer to: *"is this worth pushing into month 2?"*

**Effort budget:** ~8 hours/week. Split: 60% distribution, 30% learning, 10% product tweaks.

**What you are NOT doing this month:** building the product, setting up Stripe, integrating PMXT into a backend, hiring anyone, worrying about legal structure.

---

# Week 1 — Foundation + Twitter launch

**Goal:** get infrastructure and audience-building setup in place.

## Days 1–2 (3 hours)

- Buy `leviathanalpha.io` domain (Porkbun or Cloudflare, ~$35/yr)
- Point it at your Vercel deployment (DNS setup, 15 min)
- Lock in Twitter handle — pick one and commit:
  - `@LeviathanIntel` (recommended — ties to "intelligence layer")
  - `@LeviathanHQ` (shortest, most company-feeling)
- Complete Twitter profile: logo, header, bio, pinned tweet
- Follow 40 accounts from the follow list (see last section)

## Days 3–7 (4 hours)

- Post 3 tweets/day: 1 morning watchlist, 1 alert with commentary, 1 observation
- Reply to 5 Tier-1 tweets/day (substantive, data-rich)
- Set up Beehiiv newsletter (free, 30 min)
- Add newsletter signup to landing page footer

**Week 1 milestones:**

- Domain live
- Twitter profile complete, 30–80 followers
- Newsletter set up, first post drafted
- 15–25 total replies across the week

---

# Week 2 — Build rhythm + PMXT research

**Goal:** get into daily posting groove and understand the data layer.

## Daily (5 hours total for the week)

- 3–5 tweets/day (maintain morning/midday/afternoon cadence)
- 5–10 substantive replies/day
- Saturday thread — your first big one:
  *"Why I'm building Leviathan Alpha (and what's broken in prediction markets)"*
- Draft Wednesday newsletter #1 (500 words max — *"what I'm tracking this week"*)

## Once this week (2 hours)

- Try PMXT open-source sidecar locally (clone, install, hit endpoints)
- Evaluate: data freshness, coverage, what's missing
- Start a "whale watchlist" Google Sheet with 10 interesting Polymarket wallets

**Week 2 milestones:**

- 80–200 followers
- First thread shipped
- First newsletter sent
- Clear understanding of what PMXT gives you vs what you'd build

---

# Week 3 — Get spotted + first product validation

**Goal:** start getting noticed by Tier-1 PM accounts and validate with real users.

## Daily (5 hours total for the week)

- Keep 3–5 tweets/day
- Ramp to 10 replies/day
- Mid-week thread: *"3 Polymarket whales I've tracked for 2 weeks — here's what their flow says"*
- Wednesday newsletter #2
- Saturday thread: *"Cross-venue arbs that closed this week"*

## Once this week (2 hours)

DM 10 mid-tier PM accounts (1k–20k followers) offering free early access in exchange for feedback. Script:

> "Hey — solo founder, building the AI agent for prediction markets. Whale tracking across Polymarket/Kalshi/8+ venues. Would love to give you early access in exchange for honest feedback. If interested, DM me your email."

Respond to the 3–5 who reply.

**Week 3 milestones:**

- 200–400 followers
- At least 1 tweet with 25+ engagements
- 3–5 mid-tier accounts in your early access pipeline
- At least 1 reply from a Tier-1 account

---

# Week 4 — Assess + decide

**Goal:** lock in the decision: push into month 2 hard, or reassess.

## Daily (5 hours total for the week)

- Maintain rhythm (3–5 tweets/day, 10 replies/day)
- Final newsletter of the month (retro: *"30 days building in public"*)
- Saturday thread — go big:
  *"I tracked 30 days of Polymarket flow. Here are 5 patterns I found."*

## Once this week (3 hours)

- Review: did you hit the targets?
- Survey your waitlist and early access folks: what do they actually want?
- Make the month-2 decision (see below)

**Week 4 milestones:**

- 300–500 followers
- 50–100 waitlist signups
- 1 thread with 50+ engagements
- Clear picture of what to build first in month 2

---

# The month-2 decision framework

At the end of Week 4, you'll have data. Make one of three calls:

| State after Week 4 | Next Month Action |
|---|---|
| 400+ followers, 80+ signups, 3+ DMs from interested users | **Push into month 2.** Build the MVP. |
| 150–300 followers, 20–50 signups, minimal DMs | **Keep distributing, defer product.** One open-source tool release. |
| Below 150 followers and 20 signups after real effort | **Diagnose before continuing.** Pivot or narrow. |

---

# Key principles for the month

**1. Distribution is the only scarce resource right now.**  
Not product. Not design. Not infrastructure. Audience. Every hour should be evaluated against *"does this grow the audience?"*

**2. No product work this month.**  
Building product is seductive and feels productive. It's a trap when you have 0 users. Resist. The landing page is enough.

**3. Consistency > intensity.**  
Posting 3 tweets every day for 30 days > posting 30 tweets one day and nothing for a week. The algorithm needs consistency.

**4. Treat every tweet like a pitch to your target user.**  
Would a Polymarket whale read this and think *"this person knows what they're talking about"*? If no, don't post it.

**5. Don't check your stats constantly.**  
Post. Reply. Move on. Check follower count once a day, max.

---

# The weekly cadence

| Day | Posts | Reply goal | Other |
|---|---|---|---|
| Monday | 3 tweets | 10 | Plan week's threads |
| Tuesday | 3 tweets | 10 | — |
| Wednesday | 3 tweets | 10 | Send newsletter |
| Thursday | 3 tweets | 10 | — |
| Friday | 3 tweets | 10 | Draft weekend thread |
| Saturday | 3 tweets + weekly thread | 5 | — |
| Sunday | 2 tweets | 5 | Review week, plan next |

Total: ~20 tweets + ~60 replies + 1 thread + 1 newsletter per week.

**The single rule you can't break:** post every single weekday. Miss one day and the algorithm forgets you. Miss three and you're starting from zero. If you have zero time one day: post ONE reply. That's enough.

---

# Who to follow on Twitter

## Tier 1 — Prediction market core (follow all)

- **@domer\_predict** — biggest PM analyst, active, replies to newcomers
- **@PolymarketWhales** — whale alert bot
- **@Polymarket** — official
- **@Kalshi** — official
- **@ManifoldMarkets** — official
- **@shayne\_coplan** — Polymarket founder
- **@tarek\_mansour** — Kalshi founder
- **@mickyellis** — Manifold founder
- **@PredictionHunt** — API and tools
- **@StarSpangledGamblers\_** — PM commentary
- **@natesilver538** — Nate Silver, posts about PMs often

## Tier 2 — Finance Twitter (mentions PMs regularly)

- **@matt\_levine** — Matt Levine (Bloomberg), huge audience
- **@TheStalwart** — Joe Weisenthal (Bloomberg, Odd Lots)
- **@tracyalloway** — Tracy Alloway (Bloomberg)
- **@conorsen** — macro + PM crossover
- **@profplum99** — markets commentary
- **@carlquintanilla** — CNBC, shares PM data

## Tier 3 — Crypto / on-chain adjacent (your cousin niche)

- **@arkham** — intelligence platform
- **@nansen\_ai** — on-chain analytics
- **@lookonchain** — crypto whale tracker
- **@DefiLlama** — DeFi analytics

## Tier 4 — Solo founders (your peer group)

- **@levelsio** — Pieter Levels, solo SaaS legend
- **@marc\_louvion** — Marc Lou, solo SaaS
- **@tonydinh** — Tony Dinh, solo SaaS
- **@dannypostmaa** — Danny Postma

## Tier 5 — AI agent / prosumer tool founders

- **@AravSrinivas** — Perplexity CEO
- **@cursor\_ai** — Cursor (AI code editor)
- **@v0** — Vercel v0
- **@alexalbert\_\_** — Anthropic / Claude

## The 3 highest-ROI daily reply targets

These are the accounts whose replies will convert the most new followers for you:

1. **@domer\_predict** — active, replies to substantive comments, your exact audience
2. **@PolymarketWhales** — every whale alert is a prompt to add your take
3. **@matt\_levine** — whenever he mentions anything finance, your reply gets seen by finance Twitter

Reply to these three daily with substantive additions. That one tactic alone, done for 30 days, gets you to 300+ followers.

---

# Start tomorrow

Tomorrow's tasks (1 hour):

1. Buy the domain (15 min)
2. Point it at Vercel (15 min)
3. Finalize Twitter handle and profile (20 min)
4. Post your first tweet + reply to 3 things (10 min)

Everything compounds from there.

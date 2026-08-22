# First7 Play Roadmap

## North Star

> Make Scripture something people can explore, solve, discover, and remember through play.

### Guiding principle

**KJV Scripture first. Gameplay second.**

First7 Play should not simply place Bible words inside games. The gameplay should encourage people to open, read, connect, remember, and understand Scripture.

---

# Phase 1 — Foundation

This phase is substantially complete.

## Platform

- Astro static-first architecture
- Content-driven architecture
- Cloudflare deployment
- PWA direction
- Mobile-responsive design
- No database required
- No backend required

## Puzzle Engines

- Connections
- Matching
- Sequence
- Investigation

## Mystery System

- Fragment registry
- Mystery Archive
- Fragment icons
- Chamber seals
- SVG interaction
- Hidden progression
- Archive Notes
- Multi-layer clues
- Scripture clues
- Fragment recovery
- Unlock interactions

## Quiz System

- Independent quiz engine
- Content-driven quizzes
- Static generation
- Ten-question format
- Genesis Journey
- Exodus Journey
- Life of Moses
- Kings of Israel
- Great Women of Scripture
- Parables of Jesus
- Miracles of Jesus
- Book of Acts
- Prophecy Foundations
- Revelation Journey

### Current milestone

- 10 quizzes
- 100 quiz questions
- Multiple puzzle engines
- Investigation system
- Mystery Archive
- Static-first gameplay architecture

---

# Phase 2 — Puzzle Library

## Goal: 45 puzzle experiences

Rather than immediately creating many new engines, deepen the existing engines.

## Connections — Target: 15

Focus on:

- People
- Places
- Objects
- Events
- Biblical concepts
- Scripture vocabulary

### Quality rule

Categories must have one clear and defensible relationship. Avoid ambiguous or forced groupings.

---

## Matching — Target: 15

Use meaningful relationships such as:

- Person → Event
- Person → Book
- Place → Event
- Prophet → Message
- Object → Use
- Name → Meaning
- Book → Theme
- Verse → Reference

The goal is to make Matching a genuine Bible-learning tool rather than simple memory matching.

---

## Sequence — Target: 15

Use sequence where Scripture actually provides an order:

- Biblical events
- Journeys
- Life events
- Story progression
- Steps in an encounter
- Chronological events

### Quality rule

Never invent chronology where Scripture does not establish it.

---

# Phase 3 — Investigation Archive

## Goal: 8 investigations

Continue developing the investigation system as one of First7 Play's most distinctive experiences.

Potential investigations:

1. Temple Investigation
2. Wilderness Passage
3. Dream Chamber
4. Scroll Investigation
5. Ark Investigation
6. Jericho Investigation
7. Upper Room Investigation
8. Empty Tomb Investigation

## Visual language

Continue evolving:

- Faded sacred text
- Subtle sigils
- Hidden clickable symbols
- Scripture overlays
- SVG diagrams
- Multi-layer clues
- Archive Notes
- Fragment recovery
- Unlock animations

## Investigation design principle

Do not simply tell the player what to click.

Give the player enough information to discover what to investigate.

The goal is curiosity and discovery.

---

# Phase 4 — Quiz Library

The first milestone is complete at:

**10 quizzes / 100 questions**

The quiz engine should remain stable while the content library grows.

## Long-term target

**30 quizzes / 300 questions**

Potential future quizzes:

- Psalms Journey
- Proverbs & Wisdom
- Bible Geography
- Tabernacle Journey
- Life of Abraham
- Life of Joseph
- Life of David
- Life of Elijah
- Life of Daniel
- Life of Peter
- Life of Paul
- Parables II
- Miracles II
- Teachings of Jesus
- Sermon on the Mount
- Names & Titles of God
- Names & Titles of Jesus
- Bible Animals
- Bible Numbers
- Bible Books Journey

## Quiz quality rule

> **One question → one clearly defensible KJV-supported answer.**

If a question can reasonably have two KJV-supported answers, reject or rewrite the question.

The quiz should prioritize:

- Meaning over trivia
- Scripture over speculation
- Understanding over obscure details
- Clear references
- KJV-only Scripture

For prophecy in particular, questions should test what Scripture actually records rather than requiring speculative interpretation.

---

# Phase 5 — Cross-Game Progression

Eventually the separate experiences should begin to connect.

A possible progression:

```text
Player
  ↓
Plays puzzle
  ↓
Discovers Scripture
  ↓
Earns Fragment
  ↓
Fragment enters Archive
  ↓
Archive reveals Investigation
  ↓
Investigation unlocks clue
  ↓
Clue points to Scripture
  ↓
Quiz tests understanding
```

The goal is to make the experience feel like discovery rather than a collection of unrelated games.

The player should be able to think:

> "I discovered something."

rather than simply:

> "I played a Bible game."

---

# Phase 6 — First7 2D Scripture Journey

This should be a major future engineering project, not the immediate priority.

## Technology

- Astro
- Phaser
- Pixel Art
- Static content

## Content architecture

```text
src/content/2d-bible-game/

creation/
flood/
abraham/
exodus/
jericho/
david/
...
```

## Engine architecture

```text
src/components/2d-bible-game/

JourneyGame
Player
NPC
Dialogue
Quest
Fragment
Scene
PixelUI
```

## Pages

```text
src/pages/2d-bible-game/

index.astro
[...slug].astro
```

### Core architectural rule

**One Phaser engine. Many content-driven worlds.**

Do not create a separate custom game engine for every Bible story.

---

# Phase 7 — Pixel Scripture World

The eventual 2D Scripture Journey should focus on exploration and discovery.

Possible player actions:

- Walk
- Explore
- Talk
- Inspect
- Discover
- Collect
- Unlock
- Learn

Combat, crafting, and complex inventory systems are not required for the initial direction.

The world itself should become the game.

Potential visual direction:

- Pixel-art environments
- Ancient landscapes
- Rivers
- Wilderness
- Cities
- Temples
- Scrolls
- Sacred objects
- Subtle atmospheric effects

The visual style should remain lightweight and compatible with the static-first philosophy.

---

# Phase 8 — Offline / Distributed First7

Because the platform is being designed as:

- Static
- Content-driven
- Client-side

the long-term goal is to preserve compatibility with:

- Cloudflare
- IPFS
- Offline PWA
- Local installation
- Older computers
- Mobile devices

Gameplay should not depend on a permanent application server for its core functionality.

---

# Immediate Roadmap

```text
NOW
 │
 ├── Finish 10 quizzes ✓
 │
 ▼
PUZZLE SPRINT
 │
 ├── Connections → 15
 ├── Matching → 15
 ├── Sequence → 15
 │
 ▼
INVESTIGATION SPRINT
 │
 └── Investigations → 8
 │
 ▼
POLISH SPRINT
 │
 ├── Mobile gameplay
 ├── Share system
 ├── Progress feedback
 ├── Accessibility
 └── Consistent UI
 │
 ▼
CROSS-GAME PROGRESSION
 │
 ├── Fragments
 ├── Archive
 ├── Unlocks
 └── Discovery
 │
 ▼
2D SCRIPTURE JOURNEY
 │
 ├── Phaser engine
 ├── Pixel-art prototype
 ├── One world
 └── Content-driven levels
 │
 ▼
EXPANSION
 │
 ├── 30 quizzes
 ├── 45+ puzzles
 ├── 8+ investigations
 └── Multiple Scripture Journey worlds
```

---

# Product Philosophy

Do not let the roadmap become a race to add features.

The platform already has enough technology to grow.

The next goal is to make what exists exceptionally good.

A successful First7 Play experience should make a visitor think:

> **"There is so much here. What should I try first?"**

rather than:

> "They have lots of different engines."

The priority is therefore:

**Depth → Quality → Discovery → Expansion**

not simply feature count.

---

# Long-Term First7 Play Structure

```text
                    FIRST7 PLAY
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       PUZZLES        DISCOVERY       STUDY
          │              │              │
     Connections     Investigations     Quiz
     Matching        Mysteries
     Sequence        Archive
          │              │
          └──────────────┼──────────────┘
                         │
                  SCRIPTURE JOURNEY
                         │
                    2D Pixel World
```

## Experience progression

```text
Explore
   ↓
Investigate
   ↓
Solve
   ↓
Learn
   ↓
Remember
```

The ultimate goal is for First7 Play to become a place where Scripture can be **explored, solved, discovered, and remembered through play** while preserving a lightweight, static-first architecture.

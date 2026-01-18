# REGENESIS: COMPLETE MASTER DOCUMENT V3
## Vision + Strategy + Technical Architecture + Development Roadmap

*Comprehensive update incorporating latest specifications, LLM architecture, legal considerations, and UI/UX refinements*
*January 2026*

---

# TABLE OF CONTENTS

1. [Executive Summary](#part-a-executive-summary)
2. [Product Vision & Core Philosophy](#part-b-product-vision--core-philosophy)
3. [The Three User Tiers](#part-c-the-three-user-tiers)
4. [Coach Experience & Features](#part-d-coach-experience--features)
5. [Coachee Experience & Features](#part-e-coachee-experience--features)
6. [ReGenesis Permissions & Autonomy Model](#part-f-regenesis-permissions--autonomy-model)
7. [Data, Privacy & Trust Architecture](#part-g-data-privacy--trust-architecture)
8. [Agentic Client Analysis](#part-h-agentic-client-analysis)
9. [Wisdom Corpus Engine](#part-i-wisdom-corpus-engine)
10. [Technical Architecture & LLM Strategy](#part-j-technical-architecture--llm-strategy)
11. [Development Roadmap & Phasing](#part-k-development-roadmap--phasing)
12. [Brand, Design & UX](#part-l-brand-design--ux)
13. [Integrations Reference](#part-m-integrations-reference)
14. [Legal & Compliance Framework](#part-n-legal--compliance-framework)
15. [Appendices](#appendices)

---

# PART A: EXECUTIVE SUMMARY

## What is ReGenesis?

ReGenesis is not a coaching app. ReGenesis is an **invisible, embedded agentic AI intelligence** that lives inside the tools coaches and coachees already use. There is no new website to learn, no dashboard to check, no additional workflow to adopt.

### The Core Promise
**Zero workflow change, infinite support.**

Session ends → Notes appear → Coach tweaks → Client receives. All without leaving the browser. What used to take 30-45 minutes of post-session admin happens automatically in 5 minutes or less.

### Key Differentiators

| Traditional Coaching Apps | ReGenesis |
|---------------------------|-----------|
| Another app to check | Invisible — embedded in existing tools |
| Coach does admin work | AI does admin, coach coaches |
| Data owned by platform | Data sovereign to user |
| Generic AI responses | Writes in coach's voice (powered by Claude) |
| Sessions only | 24/7 coachee companion |
| Guesses about coachee | Pattern recognition across all data |

### Architecture Philosophy

- **Extension-first** — Chrome extension is the daily driver
- **Web app exists** for onboarding, deep dives, settings, demos
- **Mobile app for coach** — Full functionality adapted for phone, voice-enabled chat bar
- **"ReGenesis brings you the screen when you need it. You never go looking for ReGenesis."**

---

# PART B: PRODUCT VISION & CORE PHILOSOPHY

## The Golden Rules

1. **Don't ask what can be found. Scan first, ask only what's missing.**
2. **Multi-select everywhere** — People wear multiple hats
3. **Voice/free-form always available** — Messy input welcome, AI clarifies
4. **No duplication** — If it exists somewhere, ingest it
5. **Progressive trust = progressive access** — Sensitive data comes later
6. **Reflect back, don't interrogate** — Show understanding, invite correction

## The Experience Promise

1. User grants access to existing sources
2. AI scours and gathers everything it can
3. AI presents: "Here's what I understand about you"
4. AI asks: "Here's what I still need to know"
5. User confirms, corrects, adds
6. System is working within hours, not days

## Design Principles

- **Always allow multi-select** — Never force single choice when multiple apply
- **Always include "None of the above"** — Respect users who don't fit categories
- **Always include "Other" with text/voice field** — Capture edge cases
- **Keep tone calm and confident** — No over-the-top validation
- **Be comprehensive with platform lists** — Include all major options
- **Add brief "why" explanations at sensitive moments** — Build trust
- **Provide submit button clarity** — Users need to know how to proceed
- **Voice-controllable settings** — "Just tell ReGenesis what you want changed" instead of navigating menus

## Core Coaching Ideology

> **Always return to "What do you really want?"** — the coachee's North Star, their deep desire. Work on the beliefs, mindsets, habits that block them from becoming who they're meant to be.

---

# PART C: THE THREE USER TIERS

ReGenesis serves three distinct user types, each with their own onboarding flow and data ownership model.

```
┌─────────────────────────────────────────────────────────────┐
│                    CORPORATE ADMIN                          │
│              (Program Owner / L&D / HR)                     │
│                                                             │
│  Sees: Aggregate ROI, program metrics, coach utilization    │
│  Cannot see: Individual session content, personal goals     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         COACH                               │
│              (Internal or External)                         │
│                                                             │
│  Sees: Session insights, coachee progress (with consent)    │
│  Shares: Aggregated outcomes to corporate (anonymized)      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        COACHEE                              │
│              (Individual Being Coached)                     │
│                                                             │
│  Owns: All personal data — sovereign and portable           │
│  Controls: What coach sees, what company sees               │
│  Takes: Data with them when they leave the company          │
└─────────────────────────────────────────────────────────────┘
```

### Key Principle: Sovereign Coachee Data

The coachee's data belongs to **them**, not the company that pays for coaching. This is not policy — it is **architecture**:

- Company **cannot** access personal coaching content (architecturally impossible)
- Coach sees only what coachee explicitly shares
- Company sees only aggregated, anonymized outcomes
- If coachee leaves the company, their ReGenesis account goes with them

---

# PART D: COACH EXPERIENCE & FEATURES

## The Top 5 Coach Workflows

### Workflow 1: Post-Session Notes Generation

**The Problem:** Coaches spend 30-45 minutes after each session writing notes, often delaying or skipping this critical touchpoint.

**The ReGenesis Solution:**
1. Session ends → Transcript arrives (from Zoom, Google Meet, or Fireflies)
2. ReGenesis auto-drafts structured session notes in coach's voice using the **6-section format**:

#### Session Notes Template (6 Sections)

| Section | Content | Key Principles |
|---------|---------|----------------|
| **1. Session Recap** | Chronological flow of what was discussed — core ideas, breakthroughs, key phrases, verbatim quotes (especially from coachee) | Balance detail: comprehensive but scannable. Outline bullet-point style, easy to read at a glance. Not a back-and-forth dialogue, but captures essence of what was spoken. |
| **2. Observations, Insights & Analysis** | What ReGenesis noticed — patterns, breakthroughs, psychological framing, shadow, becoming | Deep synthesis from master coach perspective. Bold, direct, profound. Always orient back to coachee's soul's yearning. |
| **3. Inquiries for Growth** | ≤5 piercing questions for reflection | Not generic. Reframe binary thinking, invoke counterfactuals, connect to values, introduce healthy doubt. |
| **4. Invitations to Action** | Behavioral commitments with specificity | Small but powerful. Precise parameters (when, where, how long). Address underlying patterns, not just symptoms. |
| **5. Resources / Tools / Follow-up** | Relevant materials, frameworks, guides | Hyperlinked to Resource Library. Include coach commitments. |
| **6. Next Meeting & Future Focus** | Upcoming session prep | Date/time, potential focus areas, topics to continue. |

#### Nested/Accordion Architecture

**Critical:** All session notes (and all data displays throughout the platform) use a **nested/accordion structure**:

```
High-Level Summary
└── Click → Section Headings
    └── Click → Key Points
        └── Click → Full Detail
            └── Click → Exact Quote/Timestamp
                └── Click → Jump to Video/Audio Recording (if within retention window)
```

This allows the coachee (and coach) to:
- Get the gist at a glance
- Drill down to any level of detail they want
- Trace insights back to the exact moment they were spoken

3. Coach edits via direct text or **AI command bar**:
   - "make warmer"
   - "add resource about boundaries"
   - "remove the part about his father"
   - "shorten the action items"
   - "this doesn't sound like me"
4. **Bonus:** If session mentioned specific frameworks or follow-ups, ReGenesis auto-drafts **ancillary documents** alongside the main notes (e.g., delegation guide, NVC conversation script, RACI framework synthesis)
5. Coach reviews ancillary documents, approves what to include
6. One-click delivery → Client receives polished email with HTML + PDF attachment + hyperlinked resources stored in their **Resource Library**

**The Promise:** Session ends. Notes appear. **5 minutes or less.** (Target: 3 minutes as system improves)

---

### Workflow 2: T-15 Pre-Session Prep

**The Problem:** Coaches walk into sessions unprepared, scrambling to remember context, or spending 15+ minutes re-reading old notes.

**The ReGenesis Solution:**
15 minutes before a scheduled session, ReGenesis auto-generates a contextual brief:

| Section | Content |
|---------|---------|
| **North Star Reminder** | Client's stated values, vision, and overarching goals |
| **Last Session Recap** | Key themes, breakthroughs, emotional moments |
| **Commitments to Check** | What they said they'd do — did they? (✓ / ✗ / ?) |
| **Life Context** | What's happening in their world right now |
| **Pattern Intelligence** | "This is the 4th time she's mentioned feeling invisible at work" |
| **Suggested Openers** | Powerful questions tailored to where they are |
| **Private Coach Notes** | Your own observations and hypotheses |
| **Between-Session Intelligence** | Summary of coachee-ReGenesis conversations since last session (nested/accordion style) |
| **Coachee Pre-Session Input** | What coachee shared in prep prompts (celebrating, focus, priorities) |

#### Between-Session Intelligence (Nested/Accordion)

When coach reviews what coachee discussed with AI companion:

```
AI Companion Conversations (3 since last session)
└── Jan 14: Promotion anxiety (20 min)
    └── Key themes: Fear of visibility, imposter feelings
        └── Emotional moments: First time expressed anger
            └── Full conversation transcript
└── Jan 12: Boundary conversation follow-up (10 min)
    └── Marked commitment incomplete (3rd time)
        └── Full conversation transcript
└── Jan 10: Journal entry — unusually vulnerable
    └── Full entry text
```

**Critical:** T-15 prep is for **coach's eyes only** — never sent to coachee. Coach can keep it open during the session as a reference guide, or close it — their choice.

**Privacy Reminder:** Coachee can **redact** any conversation from coach visibility. They have a safe space to share things even beyond what they'd tell their coach. This must be clear in the privacy/security messaging.

---

### Workflow 3: Coach's Daily Command Center

**The Problem:** Coaches juggle multiple clients, lose track of commitments, and don't have a "mission control" for their practice.

**The ReGenesis Solution:**
Coach opens extension at start of day or between sessions, asks: "What's my day look like?"

**Smart Prioritization (Front and Center):**
```
🎯 FOCUS NOW
Your most important prep: Marcus Chen at 2pm
→ He's been struggling with the promotion decision
→ Commitment incomplete 3rd time (boundary conversation)
→ Had emotional ReGenesis conversation yesterday

[Open T-15 Prep]
```

**Full Dashboard Shows:**
- **Today's Sessions** — With 1-line context for each ("Marcus: promotion anxiety, checking on boundary conversation")
- **Prep Needed** — Any sessions requiring special attention
- **Outstanding Actions** — Your commitments to clients, follow-up emails, resources to send
- **Client Pulse** — Anyone who's struggling, disengaged, or had a breakthrough between sessions
- **Your North Star** — Reminder of your own priorities and boundaries

#### Coach's Personal Goals & Priorities (Dashboard Bottom)

At the bottom of the dashboard, a section for the **coach's own life**:

```
🌟 YOUR LIFE PRIORITIES (All Areas)

Professional Growth & Leadership
├── ICF PCC certification progress: 127/500 hours
├── Next action: Schedule mentor coaching session
└── [Click for all professional goals]

Health & Wellbeing
├── Annual physical: Overdue
├── Next action: Book appointment
└── [Click for all health goals]

Relationships & Family
├── Oana's birthday: 3 days away
├── Next action: Pick up gift
└── [Click for all relationship goals]

Financial Security
├── Q1 invoicing: 3 clients pending
├── Next action: Send invoices
└── [Click for all financial goals]

Personal Growth & Learning
└── [Click for all learning goals]

Community & Impact
└── [Click for all community goals]
```

**Principle:** The coach's app helps them live a whole, integrated life — not just run their practice. Anything that can be delegated to AI agents should be. The coach only does what only they can do.

**Philosophy:** GTD "what should I focus on right now?" — AI-prioritized based on all context across all clients and coach's goals.

---

### Workflow 4: In-Session Real-Time Support (Stretch Goal)

**The Problem:** During sessions, coaches sometimes forget key context, miss patterns, or struggle to find the right question.

**The ReGenesis Solution:**
An inconspicuous prompt bar sits just below the camera so coach maintains eye contact. ReGenesis listens and surfaces:
- **Suggested Questions:** "Ask about the fear underneath the anger"
- **Pattern Recognition:** "Third time she's mentioned her father"
- **Framework Suggestions:** "This sounds like Drama Triangle — consider naming it"
- **Quick Queries:** Coach can silently ask "What did she commit to last time?" and get instant answer

**Expandable Side Panel:**
When ReGenesis offers more complex information (e.g., "Would you like me to show you a delegation framework?"), clicking "Yes" opens a **resizable, draggable side panel** that the coach can:
- Read while maintaining eye contact (positioned near camera)
- Resize larger or smaller
- Drag to different screen locations
- Minimize when not needed

The "wise co-pilot whispering in your ear" experience — all glanceable without breaking presence.

---

### Workflow 5: 24/7 Coachee Companion (Future Vision)

**The Problem:** Coaching happens in 1-hour sessions, but life happens 24/7. Coachees forget insights, lose momentum, and arrive at sessions having to "catch up" instead of going deeper.

**The ReGenesis Solution:**
Coachees get their own ReGenesis — available as a mobile app and chat interface:
- **Process challenges** in real-time (bad meeting, difficult conversation, anxiety spiral)
- **Track commitments** and get smart reminders
- **Prepare for difficult conversations** with role-play and frameworks
- **Receive smart nudges** based on their patterns and goals
- **Reflect and journal** with prompts tailored to their journey

ReGenesis knows their full coaching context and supports continuity. Coach can see engagement summaries and key insights (with consent) in T-15 prep — using the **nested/accordion structure** so they can drill down as needed without being overwhelmed.

---

## Coach Mobile App

The coach needs a **mobile app** with full platform functionality adapted for phone:

**Core Features:**
- **Chat bar** — Just like ChatGPT or Claude, available for quick tasks
- **Voice interaction** — Speak commands, get responses
- **Full dashboard access** — Adapted for mobile screen
- **Quick actions:**
  - "Log a thought about Sarah"
  - "Send this resource to Marcus via text"
  - "Remind me to bill Jennifer"
  - "What's my schedule tomorrow?"
  - "Add this to my private notes for David"

**Use Case:** Coach is walking, thinking about a client, remembers something important. Opens app, speaks: "Hey, I'm realizing Sarah might benefit from the Drama Triangle framework. Log this in her private notes and suggest it for our next T-15 prep." Done.

---

## Coach's Private Intelligence Layer

On each Client Profile, a private section only coach sees:

```
📝 Private Intelligence (Coach + ReGenesis)

🎯 ReGenesis's Current Read:
Marcus is in a Creator/Reactor oscillation around his leadership identity.
He defaults to Reactor (blame, justify, defend) when his competence is questioned.
The promotion anxiety isn't about the role — it's about being "found out."

🤖 ReGenesis Observations (auto-updated):
• Jan 15: Authority pattern triggered again — boss gave critical feedback
• Jan 12: First time expressed anger directly instead of deflecting
• Jan 8: Mentioned father's disappointment for first time (session 23)
• Jan 5: Breakthrough — named his fear of success, not just failure

✍️ Your Private Notes:
• Remind myself to slow down with him — he shuts down when pushed too fast
• Consider introducing Drama Triangle next session
• His wife might be enabling the avoidance — tread carefully

💬 Between-Session Intelligence:
• Jan 14: 20-min conversation with ReGenesis about promotion anxiety
• Jan 11: Marked "have boundary conversation" as incomplete (3rd time)
• Jan 10: Journaled about feeling like an imposter — unusually vulnerable

[Click any item to drill down to full detail]
```

---

## Client Resource Library

**Per-client architecture** — each coachee has their own Resource Library where:

| Aspect | Specification |
|--------|---------------|
| **Structure** | Per-client (not global) |
| **Contents** | Ancillary documents, frameworks, guides, links, PDFs, any resource ever shared |
| **Population** | Built over time as coach shares resources; some starter templates available |
| **Access** | Coach can browse/search; Coachee can access their own library |
| **Linking** | Resources hyperlinked in session notes for easy access |
| **Search & Filter** | By type, date, topic, keywords, themes |

**Note:** Most resources are AI-generated on an as-needed basis for each client. The library grows organically as the coaching relationship develops. A small set of universal starter templates (5-10 commonly used frameworks) can be pre-loaded.

---

## Voice Profile System

Voice matching refers to **written tone**, not audio. Coach feeds ReGenesis their past notes, emails, text messages, and other writing samples during onboarding to train the voice profile.

| Capability | Description | Phase |
|------------|-------------|-------|
| Learning from coach edits | System improves based on edits | Phase 2 |
| "This doesn't sound like me" override | Regenerate in coach's voice | Phase 2 |
| Minimum sample threshold | "Need 3+ writing samples for reliable matching" | Phase 3.5 |
| Sample diversity guidance | "Include: emails, notes, casual messages" | Phase 3.5 |
| Voice confidence indicator | Visual meter on generated content (clickable for details) | Phase 3.5 |

---

## AI Command Bar Specification

The Session Notes Editor includes an AI command bar for natural language editing:

| Command Type | Example | Result |
|--------------|---------|--------|
| Tone adjustment | "make warmer" / "more direct" / "softer" | Rewrites selected section with adjusted tone |
| Content addition | "add resource about boundaries" | Inserts relevant resource with context |
| Content removal | "remove the part about his father" | Deletes specified content |
| Section modification | "shorten the action items" / "expand observations" | Adjusts section length |
| Voice correction | "this doesn't sound like me" | Regenerates in coach's voice |
| Specific edits | "change 'you should' to 'you might consider'" | Direct text replacement |

**Priority:** P0 — Critical to the notes editing experience.

---

## Communication Transparency Indicators

**All communications** sent through ReGenesis include a subtle but clear indicator of origin:

| Indicator | Meaning | Visual |
|-----------|---------|--------|
| **"From [Coach Name]"** | Coach wrote directly, no AI involvement | 👤 |
| **"AI-drafted, reviewed by [Coach Name]"** | AI drafted, coach edited/approved | 🤖✓ |
| **"From ReGenesis"** | AI only, coach not in the loop (for approved autonomous actions) | 🤖 |

**Purpose:** Full transparency so coachee knows the nature of each communication. Builds trust and authentic relationship.

---

## Settings & Preferences (Comprehensive)

The Settings page should be:
1. **Visually comprehensive** — User can see all settings laid out if they want
2. **Voice-controllable** — "Hey ReGenesis, change my notification preference to mornings only" → Confirms and executes
3. **Never buried** — No multiple layers of menus like Zoom

### Settings Categories:

**Account & Profile**
- Personal information
- Professional credentials
- Voice profile management
- Writing samples

**Integrations**
- Video conferencing: Zoom, Google Meet, Microsoft Teams
- Calendar: Google Calendar, Outlook Calendar, Apple Calendar
- Email: Gmail, Outlook
- File storage: Google Drive, Dropbox, OneDrive
- Billing: Square, Stripe, PayPal
- Transcription: Fireflies, Otter.ai, Fathom
- CRM: CoachAccountable, Practice Better

**AI Preferences**
- ReGenesis personality/tone
- Suggestion frequency
- In-session support level
- Voice vs. text preference

**Notifications**
- Channel preferences (email, SMS, app)
- Timing preferences
- Category controls
- Do not disturb

**Session Notes**
- Default template
- Section preferences
- Auto-send settings
- Review timing

**Privacy & Security**
- Data retention
- Encryption settings
- Connected sources
- Audit log access

**Billing & Subscription**
- Plan management
- Invoice settings
- Payment methods

---

# PART E: COACHEE EXPERIENCE & FEATURES

## Coachee Onboarding

### Invitation from Coach

Coach sends email (drafted by ReGenesis, reviewed and approved by coach):

> Hi [Coachee Name],
>
> I'm excited to introduce you to ReGenesis, an AI companion that will support our coaching work together.
>
> ReGenesis helps by:
> - Remembering everything we discuss so nothing gets lost
> - Checking in with you between sessions
> - Helping you track progress on your goals
> - Being available 24/7 when you need support
>
> **Your privacy is protected by design:**
> - Your personal reflections and data are yours alone
> - I only see what you choose to share with me
> - [Company] cannot access your coaching conversations — this is built into the architecture, not just a policy
> - You take your data with you if you ever leave [Company]

### Privacy Preferences (3 Data Tiers)

During onboarding, coachees choose what goes where:

| Tier | Who Sees | Examples |
|------|----------|----------|
| **Tier 1: Private** | Coachee + ReGenesis only | Personal reflections, journal entries, sensitive goals |
| **Tier 2: Coach-Shared** | Coach + Coachee + ReGenesis | Session notes, goals you're working on together, progress updates |
| **Tier 3: Company-Visible** | Anonymized aggregate only | That coaching is occurring, engagement level, general theme categories |

**Key:** Tier 1 is **architecturally enforced** — coach literally cannot access (no encryption key).

**Safe Space Assurance:**
> "You can share anything with ReGenesis in Tier 1 — even things you're not ready to tell your coach. This is a completely private space for you to process, reflect, and be fully honest. Your coach will never see Tier 1 content unless you explicitly move it to Tier 2."

### Retention Preferences at Onboarding

During coachee onboarding, present retention preferences as a clear choice:

> "How long would you like us to keep your data?"

Options:
- 1 year of inactivity → auto-delete
- 3 years of inactivity → auto-delete
- **7 years (default)** — therapy/medical best practices
- Indefinitely (until manually deleted)
- Designate a trusted person who can access/delete

This can be changed anytime in settings.

---

## Coachee Pre-Session Preparation

**24 hours before session:** First reminder + prep prompts

| Prompt | Purpose |
|--------|---------|
| "What are you celebrating?" | Agency, wins, progress toward goals |
| "What are you grateful for today?" | Positive frame, presence |
| "What would make this session powerful?" | Focus, intention-setting |
| "What's the most important topic you want to discuss?" | Prioritization |
| [Link to last session notes] | Continuity |
| [Link to commitments from last session] | Accountability |

**1 hour before session (configurable):** Quick check-in
- "How are you feeling heading into today's session?"
- "Anything shifted since yesterday?"

**Data Flow:**
```
Coachee responds to prompts
    ↓
Responses summarized
    ↓
Appear in coach's T-15 prep under "Coachee Pre-Session Input"
```

**Benefit:** Coach saves significant time getting into the main work because coachee arrives prepared and focused.

---

## Coachee Control Panel

Coachees control their experience:

| Control | Options |
|---------|---------|
| Nudge frequency | How often ReGenesis checks in |
| Time-of-day preferences | When nudges are welcome |
| Communication channel | Email, text, app |
| Opt-out specific nudge types | Per-type control |
| Privacy tier settings | What stays private vs. shared |
| Redaction controls | Hide specific conversations from coach |

---

## Data Transparency Dashboard

Available to every coachee:
- What sources are connected
- What data has been accessed
- What data is stored
- Audit log of AI actions
- One-click revoke for any source
- One-click delete all

---

# PART F: REGENESIS PERMISSIONS & AUTONOMY MODEL

## Coach-Facing ReGenesis — Automatic vs. Ask Permission

| Action | Auto or Ask? | Rationale |
|--------|--------------|-----------|
| Auto-draft T-15 prep before sessions | ✅ Auto | No risk — coach can ignore. Delight, not intrusion. |
| Auto-draft session notes after transcript | ✅ Auto | Core value prop. Coach reviews before sending. |
| Auto-detect coaching sessions from calendar | ✅ Auto | How ReGenesis knows when to act. |
| Auto-pull/process transcripts | ✅ Auto | After initial setup — this is the magic. |
| Auto-generate suggested resources | ✅ Auto | Coach reviews before including. |
| Auto-draft ancillary documents & guides | ✅ Auto | When session mentions frameworks, conversations, or follow-ups. Coach reviews, approves. |
| Auto-track commitments from sessions | ✅ Auto | Extraction only — no outbound action. |
| Auto-learn from coach edits | ✅ Auto | Improves voice matching silently. |
| Auto-flag patterns across clients | ✅ Auto | Internal intelligence, surfaces when relevant. |
| Send any email/text/nudge to client | 🛑 Always Ask | Irreversible. Coach approves every outbound. |
| Bill/charge clients | 🛑 Always Ask | Financial action. Always confirm. |
| Delete any data | 🛑 Always Ask | Irreversible. Confirm before destruction. |
| Share data with new party | 🛑 Always Ask | Adding client, sharing with org, etc. |
| Change privacy/consent settings | 🛑 Always Ask | For coach or coachee. |
| Modify notes after sent to client | 🛑 Always Ask | Historical record integrity. |

**Critical Clarification:** ReGenesis auto-drafts all content (notes, T-15 prep, ancillary docs) without permission. Coach approval is only required for **sending** content to the coachee or taking external actions.

---

## Coachee-Facing ReGenesis — 5-Tier Autonomy Model

### TIER 1: Full Autonomy (ReGenesis Acts Freely)
*Low stakes. No coach involvement needed.*

| Action | Examples |
|--------|----------|
| Routine check-ins | "How did that conversation with your boss go?" |
| Commitment reminders | "You mentioned wanting to meditate 3x this week — how's that going?" |
| Celebration prompts | "You completed your commitment! How did it feel?" |
| Pre-session reminders | "Your session with [Coach] is tomorrow at 2pm. Anything you want to focus on?" |
| Reflection invitations | "It's been a week since your last session. Any insights bubbling up?" |
| Resource delivery | Sending materials the coach already approved to share |
| Answering coachee questions about their own data | "What did I commit to last session?" |
| Processing/listening conversations | Coachee vents, ReGenesis reflects back, no action taken |
| Coachee-initiated data actions | Delete, export, revoke consent — their sovereign choice |
| Scheduling/rescheduling | "Find me another time with Jesse" → ReGenesis checks calendars, proposes, confirms |

**Guardrails:** Frequency controlled by coachee preferences, time-of-day awareness, easy opt-out.

### TIER 2: Autonomous + Coach Visibility (ReGenesis Acts, Coach Sees Summary)
*ReGenesis takes action. Coach gets digest — no approval needed, but transparency maintained.*

| Action | Examples |
|--------|----------|
| Substantive coachee conversations | Coachee processes difficult situation — coach sees summary in T-15 prep |
| Goal updates or changes | Coachee modifies goals — coach notified in digest |
| Completion tracking | Coachee marks commitments done/not done — coach sees progress |
| Pattern flags | ReGenesis notices coachee struggling — flags in coach dashboard |
| Coachee shares new context | "I got promoted" / "We're getting divorced" — coach sees before next session |
| Sentiment shifts | Engagement drops or emotional tone changes significantly |

### TIER 3: Coach Approval Required (ReGenesis Drafts, Coach Confirms)
*Higher stakes. ReGenesis prepares, coach decides.*

| Action | Examples |
|--------|----------|
| Personalized outreach beyond templates | Nudge referencing something sensitive or specific |
| Suggesting new resources | Book or practice not pre-approved |
| Boundary-adjacent conversations | Coachee asks for advice approaching therapeutic territory |
| Accountability escalation | Coachee consistently not following through |
| Introducing new topics | ReGenesis notices pattern, wants to raise with coachee |
| Scheduling changes | Suggesting coachee book extra session |
| Connecting coachee with external resources | Therapist referral, support group, etc. |
| **Sending session notes to coachee** | ReGenesis auto-drafts (Tier 1), coach reviews/edits, then approves sending |
| **Sending ancillary documents/guides** | Auto-drafted resources require coach approval before attaching |

### TIER 4: Immediate Escalation (ReGenesis Alerts Coach, Awaits Guidance)
*High stakes. Human judgment essential.*

| Situation | ReGenesis Response |
|-----------|-------------------|
| Safety concerns | Suicidal ideation, self-harm, harm to others |
| Crisis indicators | Acute distress, panic, dissociation |
| Disclosure of abuse/trauma | Current or historical |
| Legal/ethical boundaries | Coachee asks ReGenesis to do something inappropriate |
| Relational rupture | Coachee expresses anger at coach or desire to quit |
| Major life events | Death, divorce, job loss, health crisis |

### TIER 5: Hard Boundaries (ReGenesis Never Does, Period)

| Action | Why |
|--------|-----|
| Contact emergency services | Legal/liability — human must decide |
| Contact coachee's family/employer/others | Privacy violation |
| Provide clinical diagnosis | Not a therapist |
| Prescribe medication or treatment | Outside scope |
| Guarantee confidentiality from coach | Coachee knows coach has Tier 2 visibility |
| Act against coach's explicit instructions | Coach can set limits |
| Override coachee's privacy tier settings | Tier 1 = private means private |

### The Governing Principle
> **ReGenesis drafts freely, surfaces proactively, supports continuously — but acts on the world only with appropriate human approval based on stakes.**

---

# PART G: DATA, PRIVACY & TRUST ARCHITECTURE

## What Data Can ReGenesis Store?

| Data Type | Store? | Notes |
|-----------|--------|-------|
| Session transcripts | ✅ Yes | Core functionality — encrypted at rest |
| Session notes (drafts and final) | ✅ Yes | Version history preserved |
| Coach profile & preferences | ✅ Yes | Voice profile, templates, settings |
| Client profiles | ✅ Yes | Name, contact, goals, context |
| Coachee intake forms | ✅ Yes | Onboarding questionnaires, initial assessments |
| Client assessment results | ✅ Yes | With client consent (Enneagram, StrengthsFinder, DISC, etc.) |
| Ancillary documents & guides | ✅ Yes | Stored in client's Resource Library |
| Conversation history (coach-ReGenesis) | ✅ Yes | For context continuity |
| Conversation history (coachee-ReGenesis) | ✅ Yes | Tier 1/2/3 based on coachee settings |
| Calendar data | ✅ Yes | Session scheduling, patterns |
| Email content | ⚠️ Limited | Only coaching-related threads, with consent |
| Billing/payment records | ✅ Yes | For invoicing features |
| Video recordings | ⚠️ Short-term | 2 weeks max, then auto-deleted |

## Video Recording Retention

- Auto-delete after 2 weeks
- Coachee receives notification **48 hours before** deletion with option to download
- **Additional notification 24 hours before** deletion
- **Final notification right before** deletion (within 1 hour)
- Countdown visible in their data dashboard

## What Must Never Be Sent to LLM?

| Data Type | Rule |
|-----------|------|
| Passwords, API keys, credentials | Never sent, auto-redacted |
| Full SSN, credit card numbers | Never sent, auto-redacted |
| Data marked Tier 1 (Private) by coachee | Never sent in a way coach can see |
| Health information (PHI) | Requires explicit consent + HIPAA considerations |
| Information about third parties | Minimize — focus on coachee |
| Coach's other clients' data | Strict isolation — never cross-contaminate |

## The Evaporation Promise

> **Delete means delete. Not archived. Not recoverable. Gone.**

This is a core trust differentiator — when users delete their data, it's immediately and permanently erased.

**Critical UX Requirement:** Users must be given **3 separate confirmation steps** before deletion executes, so they don't accidentally delete all their data:

1. **First warning:** "This will permanently delete [X]. This cannot be undone."
2. **Second confirmation:** "Are you absolutely sure? Type DELETE to confirm."
3. **Final confirmation:** "Last chance — this action is irreversible. [Cancel] [Delete Forever]"

Only after all 3 confirmations does deletion execute. Users must **fully understand** the permanence before proceeding.

## Trust Hierarchy

| Level | What It Means | How ReGenesis Delivers |
|-------|---------------|------------------------|
| 1. Architecture | They CAN'T violate privacy | Zero-knowledge, user-held keys |
| 2. Certification | Third parties VERIFY security | SOC 2, HIPAA, ISO 27001 |
| 3. Policy | They PROMISE not to violate | Clear terms, plain language |
| 4. Reputation | Others SAY they're trustworthy | Testimonials, track record |
| 5. Enforcement | CONSEQUENCES if they violate | GDPR fines, legal liability |

**ReGenesis operates at Levels 1 + 2** — architecture makes violation impossible, certifications prove it.

## Zero-Knowledge Encryption Model

**How "Architecturally Impossible" Corporate Access Works:**

```
COACHEE ONBOARDING:
1. Coachee creates account
2. Client generates unique encryption key pair (public/private)
3. Private key stored ONLY on coachee's devices (never transmitted)
4. Public key registered with ReGenesis

SESSION DATA FLOW:
1. Session transcript generated
2. Client-side: Content encrypted with coachee's public key
3. Encrypted blob sent to ReGenesis servers
4. ReGenesis can store and sync, but CANNOT decrypt
5. Only coachee's device can decrypt (has private key)

COACH SHARING (Tier 2):
1. Coachee selects content to share with coach
2. Client re-encrypts selected content with coach's public key
3. Coach can now decrypt that specific content
4. Company still cannot access (doesn't have either key)
```

## Compliance Planning

| Regulation | Priority | What It Signals |
|------------|----------|-----------------|
| GDPR | HIGH | Gold standard for privacy |
| SOC 2 Type II | HIGH | Enterprise requirement, independent audit |
| HIPAA-ready | MEDIUM-HIGH | Healthcare-grade security |
| ISO 27001 | MEDIUM | International security standard |

**Approach:** Design for GDPR from day 1, pursue SOC 2 first, build HIPAA-ready architecture.

---

# PART H: AGENTIC CLIENT ANALYSIS

## The Core Superpower

> ReGenesis sees the whole person — who they truly are, who they're becoming, and what's hidden in their shadow — without the coach's projections, biases, or limited memory.

## Priority Data Sources

**For MVP:**

| Source | Priority | What ReGenesis Learns |
|--------|----------|----------------------|
| Coaching session transcripts | P0 | Patterns, language, emotions, shadow, breakthroughs |
| Calendar | P0 | Life rhythm, where time actually goes |
| Goals & commitments (in ReGenesis) | P0 | Stated intentions vs. actual follow-through |
| Client onboarding questionnaire | P0 | Coach's intake questions + AI's gap-filling questions |
| Coachee self-reports | P0 | Check-ins, reflections, private notes |
| Email (with consent) | P1 | Communication patterns, stress indicators |
| Text messaging (with consent) | P1 | Real-time emotional states |
| Assessment results | P1 | Enneagram, StrengthsFinder, DISC |

## The Insight Hierarchy

| Level | What ReGenesis Sees | Example |
|-------|---------------------|---------|
| 1. **Patterns** | What repeats across sessions | "She mentions feeling 'invisible' in 7 of 12 sessions" |
| 2. **Trajectories** | Where they're heading based on current path | "At this rate of delegation avoidance, burnout in 6 months" |
| 3. **Gaps** | Contradictions between stated and actual | "Says work-life balance is priority #1, but canceled 4 sessions for work" |
| 4. **Shadow** | What's hidden, denied, unconscious | "The anger at his team may be displaced anger at himself" |
| 5. **Becoming** | Who they're growing into | "She's developing her voice — first time she pushed back on her boss" |
| 6. **Hard Truths** | What coach can't/won't say, coachee can't see | "His perfectionism isn't about excellence — it's about avoiding criticism" |

## Pattern-Across-Sessions: Drill-Down Capability

When ReGenesis surfaces a pattern or insight, the coach (or coachee) should be able to **see the evidence**:

```
💡 Pattern Detected: "Invisible" theme

Summary: Sarah has mentioned feeling "invisible" 7 times across 12 sessions,
always in work contexts, never in personal relationships.

Evidence (click to expand):
├── Session 3 (Oct 15): "I feel like no one sees my contributions"
│   └── [Jump to transcript: 23:45]
├── Session 5 (Oct 29): "It's like I'm invisible in meetings"
│   └── [Jump to transcript: 12:30]
├── Session 7 (Nov 12): "My ideas get credited to others"
│   └── [Jump to transcript: 34:15]
├── Session 8 (Nov 19): "I'm invisible to leadership"
│   └── [Jump to transcript: 8:22]
├── Session 9 (Nov 26): "No one notices when I'm not there"
│   └── [Jump to transcript: 41:05]
├── Session 10 (Dec 3): Referenced invisibility again
│   └── [Jump to transcript: 15:33]
└── Session 12 (Dec 17): "Still feeling unseen"
    └── [Jump to transcript: 27:18]

[Agree with this pattern] [Dismiss] [Add to Private Notes]
```

This **nested/accordion approach** lets the coach:
- See the AI's synthesis at a glance
- Drill down to specific instances
- Jump to exact moments in transcripts
- Confirm or challenge the AI's interpretation

## What ReGenesis Uniquely Offers

- **Perfect memory** — Never forgets a detail from session 1
- **Pattern recognition** — Sees connections humans miss
- **No projection** — Doesn't overlay its own issues onto the client
- **No fatigue** — Equal attention to session 47 as session 1
- **Cross-domain synthesis** — Connects work patterns to relationship patterns to childhood patterns

## Tone Calibration

**Principle:** Scarily accurate, profoundly compassionate, never judgmental.

| ✅ ReGenesis Voice | ❌ Too Far |
|-------------------|-----------|
| "There's something underneath the anger — it might be grief." | "Client is in denial about grief." |
| "The pattern with authority figures mirrors early family dynamics." | "Client has unresolved father issues." |
| "I notice he becomes dismissive when we approach his relationship with his father." | "He's avoiding his daddy issues." |
| "She may be ready to explore what's driving the perfectionism." | "Her perfectionism is clearly rooted in childhood trauma." |

**The Voice Guidelines:**
- Use "I notice..." and "I wonder if..." rather than declarative statements
- Offer hypotheses, not diagnoses
- Honor the coachee's autonomy to reject insights
- Lead with curiosity, not conclusions
- Name what you see, not what it means

## Proactive Pattern Surfacing

ReGenesis shouldn't wait to be asked — it should occasionally surface patterns proactively:

```
💡 ReGenesis noticed something:

"Across the last 5 sessions, Sarah has mentioned feeling
'invisible' 7 times — always in work contexts, never in
personal relationships. This might be worth exploring."

[Add to Private Notes] [Dismiss] [Tell me more]
```

If coach agrees, observation goes to Private Intelligence section on client profile.

## Confidence Indicators — Simplified Approach

| Element | Behavior |
|---------|----------|
| Default | ReGenesis presents content confidently |
| Visual indicator | Subtle confidence meter (clickable) |
| On click | Opens dialogue: "Where did you get this? How confident are you?" |
| ReGenesis explains | Sources, reasoning, confidence level in natural language |
| Future integration | Links to Wisdom Corpus citations when available |

**Avoid:** Language like "I'm not sure but..." which undermines trust.

**Use:** "Based on [source], I believe..." or visual indicators that invite exploration without suggesting uncertainty.

## "Explain This" / Attribution Feature

User can ask ReGenesis "Why did you suggest this?" or "Where did this come from?"

**Response includes:**
- Source (transcript moment, pattern across sessions, Wisdom Corpus)
- Reasoning chain
- Confidence level
- Links to original content

---

# PART I: WISDOM CORPUS ENGINE

## Vision

**Two Core Values:**

1. **Contextual Wisdom Support** — Out of all the vast territory of human wisdom and experience captured across all kinds of media and formats, from poetry to neuroscience, across centuries and cultures, ReGenesis can suggest what might be most helpful in whatever precise moment for whatever type of client. The right insight, framework, or quote for this person right now.

2. **Integrated Wisdom Entity** — ReGenesis becomes a fundamentally wiser entity that has absorbed the entire range of human experience and wisdom. It can ask more powerful questions, find more powerful insights, suggest more powerful resources — all grounded in the greatest works across the ages.

**Result:** An AI wiser than any coach, therapist, or sage who ever lived — because it holds the integrated wisdom of ALL of them.

## The 16 Knowledge Domains

The Wisdom Corpus spans 16 primary knowledge domains across 7 scales (Intrapersonal → Interpersonal/Family → Team/Org → Community → Societal → Planetary → Cosmic):

| Domain | Coverage |
|--------|----------|
| **1. Consciousness, Mind & Psychology** | Cognitive/affective sciences, neuroscience, depth/archetypal psychology, developmental/social psychology, transpersonal/altered states, positive psychology, psychotherapy modalities |
| **2. Personal Development & Well-Being** | Self-cultivation/habits, mindfulness/contemplative practice, resilience/stress, ethics of self, purpose/vocation/calling, coaching sciences |
| **3. Family, Love & Relationships** | Attachment/bonding, communication/conflict, parenting/kinship, intimacy/sexuality, community of care |
| **4. Leadership & Management Sciences** | Leadership development, organizational behavior, organizational design/culture, teams/collaboration, strategy/innovation |
| **5. Community Organizing, Civic Action & Democracy** | Grassroots organizing, deliberation/participation, civic tech/collective intelligence, restorative/transformative justice, citizenship/service |
| **6. Society, Politics, Law & Economics** | Political philosophy/governance, law/rights, economics/political economy, inequality/justice, media/cultural power, global/international studies |
| **7. Systems Thinking & Complexity** | System dynamics, complex adaptive systems, cybernetics, network science, sensemaking/systems practice |
| **8. Ecology & Deep Ecology** | Earth system science, ecological resilience/panarchy, bioregionalism/place, ecopsychology/eco-spirituality, rights of nature/environmental justice, regeneration/restoration |
| **9. Philosophy & Ethics** | Metaphysics/ontology, epistemology/logic, moral/political philosophy, comparative/world philosophies, philosophy of mind/science/language |
| **10. Religion, Spirituality & Myth** | World religions/theologies, mysticism/esotericism, indigenous/Earth-based traditions, myth/ritual/symbol, comparative religion/interspirituality |
| **11. Education & Learning** | Philosophy of education, pedagogy/andragogy, learning sciences, assessment/equity, lifelong/informal learning |
| **12. Culture, Language & Anthropology** | Cultural anthropology/ethnography, linguistics/discourse, identity/belonging, collective memory/heritage |
| **13. Literature, Art & Aesthetics** | Literature/poetry, visual arts/architecture, music/sound/performance, aesthetics/philosophy of art, creative process/imagination |
| **14. Science, Technology & Cosmology** | Physics/cosmology, life sciences/evolution, Earth/environmental sciences, math/logic, technology/futures, science/society |
| **15. Health, Healing & Somatics** | Integrative/functional medicine, somatic therapies/bodywork, trauma-informed therapies, integrative counseling/alternative therapies, public/planetary health |
| **16. Time, Death & Transcendence** | Chronobiology/pace, deep time/legacy, death/dying, transcendence/afterlife |

## Corpus Prioritization

### Tier 1: MVP Core (Top 50 Books)
Highest priority for initial RAG ingestion — focused on coaching-specific application.

### Tier 2: Essential Expansion (Books 51-150)
Second priority — broader psychological and developmental depth.

### Tier 3: Full Wisdom (Books 151-500)
Third priority — comprehensive coverage across all 16 domains.

### Tier 4: Complete Corpus (500-1000)
Long-term — full range of human wisdom literature.

*See Appendix A for complete prioritized book list with domain mappings.*

## Tagging Structure (From Airtable Schema)

Each corpus entry is tagged across multiple dimensions:

### Bibliographic Tags
- Title, Author, Authorship Type
- Year, Language, Publisher
- Translations (Canonical, Public Domain, Poetic)
- Edition Integrity, Peer Review Status

### Content Classification
- **Primary Domain** (from 16 domains above)
- **Primary Subdomain(s)** with confidence score
- Other Domains/Subdomains
- Scale/Level Focus (individual → planetary)
- Form/Genre, Medium of Expression

### Developmental Framework Tags
- **ITQ Emphasis** — Where the work speaks from (intellect, heart, body, spirit)
- **ITQ Deficit Treated** — What it helps strengthen
- **ITQ Practice** — What it invites the reader to do
- **SD Digestible For** — Best audience fit by Spiral Dynamics stage
- **SD Bridge Move** — Developmental transition it supports
- **SD Contraindication** — "Allergic reaction" at certain stages
- **Kegan Order Best-Fit** — Developmental order alignment
- **Kegan Likely Move** — Transition it supports
- **SDT Needs Targeted** — Self-Determination Theory needs addressed
- **SDT Guidance Style**

### Epistemological Tags
- Author Positionality
- Epistemic Mode(s)/Ways of Knowing
- Evidence Base, Rigor/Evidence Strength
- Ontological Stance, Cosmology
- Ethical Orientation, Political-Economy Lens

### Content Tags
- Themes/Concepts, Key Words
- Core Challenges Addressed
- Key Questions, Proposed Orientations
- Archetypes/Motifs, Metaphors/Imagery
- Predecessors/Sources, Successors/Influenced Works
- Related Movements/Schools

### Application Tags
- Practice Modalities
- Application Domains
- **Coaching & Therapeutic Use Cases**
- Cautions/Contraindications
- Intended Audience
- Difficulty/Density, Tone/Style

### Technical Tags
- Node ID, Embedding Vector ID(s)
- Entities Extracted, Coverage Map
- Granularity Prepared, Auto-Tag Confidence
- Curator, Curation Date, Validation Status

## Jesse's Methodologies as Core Knowledge

**Foundational Frameworks:**
- Co-Active Coaching Principles (CTI-trained)
- ICF Core Competencies
- Creator/Reactor Model (Conscious Leadership)
- FISBE Cycle (Focus → Inner State → Behavior)
- Drama Triangle → Empowerment Triangle
- RAIN Framework (Recognize, Allow, Investigate, Nurture)

**Analytical Approach:**
- Always return to "What do you really want?"
- Identify core dilemma beneath surface
- Connect present to formative experiences
- Name unspoken fears and desires
- Present polarities, not problems
- Trace somatic patterns
- See shadow, becoming, hard truths

**6-Section Notes Structure:**
1. Session Recap (chronological flow)
2. Observations, Insights & Analysis
3. Inquiries for Growth (≤5 piercing questions)
4. Invitations to Action (behavioral science-informed)
5. Resources / Tools / Follow-up
6. Next Meeting & Future Focus

## Attribution Policy

| Context | Style |
|---------|-------|
| Session notes (soul-level) | Light/invisible, but hyperlinked for click-through |
| Resources section | Explicit with hyperlinks |
| Direct quotes | Credit inline |
| On demand | Explain source when asked |

## Priority Framework Extractions for RAG

| Framework | Source | Use Case |
|-----------|--------|----------|
| GROW Model | Whitmore | Session structure |
| Co-Active 4 Cornerstones | CTI | Foundational stance |
| SCARF Model | David Rock | Threat/reward response |
| Choice Map | Marilee Adams | Learner vs Judger |
| Drama Triangle → Empowerment | Conscious Leadership | Victim patterns |
| RAIN | Tara Brach | Emotional processing |
| The Work | Byron Katie | Belief inquiry |
| IFS Parts Model | Schwartz | Internal systems |
| Attachment Styles | Levine, Johnson | Relational patterns |
| Stages of Change | Prochaska | Readiness assessment |
| Gottman 4 Horsemen | Gottman | Relationship warning signs |
| Polyvagal Ladder | Dana/Porges | Nervous system states |

---

# PART J: TECHNICAL ARCHITECTURE & LLM STRATEGY

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                                   │
│                                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │ Chrome   │ │  Gmail   │ │ Outlook  │ │  Mobile  │ │  Zoom    │     │
│  │Extension │ │ Add-in   │ │ Add-in   │ │   App    │ │Integration│    │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘     │
│       └────────────┴────────────┴────────────┴────────────┘            │
│                    ┌────────────▼────────────┐                         │
│                    │   Local Encryption      │                         │
│                    │   (Client-side keys)    │                         │
│                    └────────────┬────────────┘                         │
└─────────────────────────────────┼───────────────────────────────────────┘
                                  │ HTTPS/WSS (encrypted in transit)
┌─────────────────────────────────▼───────────────────────────────────────┐
│                           API GATEWAY                                    │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│  │ Authentication  │  │  Rate Limiting  │  │   API Routing   │        │
│  │   (OAuth 2.0)   │  │                 │  │                 │        │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘        │
└─────────────────────────────────┬───────────────────────────────────────┘
                                  │
┌─────────────────────────────────▼───────────────────────────────────────┐
│                         CORE SERVICES                                    │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│  │   User      │ │  Session    │ │   Goals     │ │  Analytics  │      │
│  │  Service    │ │  Service    │ │  Service    │ │  Service    │      │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│  │Integration  │ │  AI/LLM     │ │Notification │ │  Consent    │      │
│  │  Service    │ │  Service    │ │  Service    │ │  Service    │      │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘      │
└─────────────────────────────────┬───────────────────────────────────────┘
                                  │
┌─────────────────────────────────▼───────────────────────────────────────┐
│                         DATA LAYER                                       │
│  ┌─────────────────────────────────────────────────────────────┐       │
│  │                    Encrypted Data Store                      │       │
│  │  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │       │
│  │  │ User Profiles │  │Session Blobs  │  │  Goal Data    │   │       │
│  │  │ (encrypted)   │  │(zero-knowledge)│ │  (encrypted)  │   │       │
│  │  └───────────────┘  └───────────────┘  └───────────────┘   │       │
│  └─────────────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────┘
```

## LLM Architecture — Claude-First Strategy

Based on extensive testing, **Claude excels at the soulful, nuanced, coaching-quality work** that is core to ReGenesis. The following architecture optimizes for quality where it matters most and cost/speed where appropriate.

### LLM Routing by Function

| Function | Recommended Model | Why |
|----------|-------------------|-----|
| **Session Notes Generation** | **Claude Opus 4.5** | Highest quality writing, deepest analysis, worth the premium for core product. Beautiful, eloquent, almost spiritual coaching voice. |
| **Observations/Insights/Patterns** | **Claude Opus 4.5** | Same — this is the heart of the product. Deep psychological framing, nuance, wisdom. |
| **T-15 Prep Summaries** | **Claude Sonnet 4.5** | Good quality, faster, cheaper for routine summaries. |
| **24/7 Coachee Companion Chat** | **Claude Sonnet 4.5** | Conversational, empathetic, maintains coaching presence. |
| **Coach Quick Tasks** | **Claude Haiku 4.5** | Fast, cheap for simple requests ("schedule meeting," "send reminder," "log this thought"). |
| **Administrative/Functional** | **GPT-4o or Claude Haiku** | Scheduling, email drafts, CRM updates, invoicing — workhorse stuff. |
| **Voice Transcription** | **Whisper / Deepgram** | Accuracy, real-time capability. |

### Wisdom Corpus RAG Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     WISDOM CORPUS RAG                        │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Embedding Model: text-embedding-3-large (OpenAI)   │    │
│  │  or Mistral Embed                                   │    │
│  │  - Converts 10,000+ book chunks into vectors        │    │
│  │  - Run once per chunk, relatively cheap             │    │
│  └─────────────────────────────────────────────────────┘    │
│                              │                               │
│                              ▼                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Vector Database: Pinecone / Weaviate / Chroma      │    │
│  │  - Stores embeddings with metadata                  │    │
│  │  - Fast similarity search                           │    │
│  └─────────────────────────────────────────────────────┘    │
│                              │                               │
│                              ▼                               │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Generation Model: Claude Sonnet 4.5                │    │
│  │  - Takes retrieved passages                         │    │
│  │  - Weaves into coaching response                    │    │
│  │  - Maintains voice, adds attribution                │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  Framework: LlamaIndex (best for document-heavy apps)       │
└─────────────────────────────────────────────────────────────┘
```

### LLM Pricing Reference (Per Million Tokens)

| Model | Input | Output | Best For |
|-------|-------|--------|----------|
| Claude Opus 4.5 | $5.00 | $25.00 | Premium analysis, session notes |
| Claude Sonnet 4.5 | $3.00 | $15.00 | Companion chat, summaries |
| Claude Haiku 4.5 | $1.00 | $5.00 | Quick tasks, simple queries |
| GPT-4o | $2.50-5.00 | $10.00-15.00 | Functional tasks, multimodal |

**Cost Optimization:**
- Batch API: 50% discount for async processing
- Prompt caching: 90% savings on repeated context
- Route by complexity: Simple → Haiku, Complex → Opus

## Extension Architecture (Plasmo-based)

| Component | Function |
|-----------|----------|
| Chrome Extension | Sidepanel UI for ReGenesis interactions |
| Background Service Worker | Message routing, API calls |
| Content Scripts | Inject on supported sites |
| WebSocket Connection | Real-time state updates |

## Voice Matching Process

1. Coach uploads sample content (emails, notes, articles)
2. System creates "voice profile" via embeddings + style analysis
3. All generated content passed through voice-matching layer
4. Coach edits → system learns → voice improves

## Context Window Management

```
SESSION CONTEXT:
├── Coachee profile (always included)
├── Last 3 sessions (full summaries)
├── Current session transcript (streaming)
├── Relevant goals and commitments
└── Coach preferences and voice profile

RETRIEVAL AUGMENTATION:
├── Vector search for relevant past content
├── Wisdom Corpus retrieval for frameworks/quotes
├── Recency-weighted results
└── Coachee-consented data only
```

---

# PART K: DEVELOPMENT ROADMAP & PHASING

## Master Phase Summary

| Phase | Name | Features | Status |
|-------|------|----------|--------|
| **0** | Extension Shell + ReGenesis Foundation | 21 | ✅ Done |
| **1** | Context Reading + First Magic | 12 | ✅ Done |
| **1.5** | State Foundation | 7 | ✅ Done |
| **2** | ReGenesis Actions | 28+ | ✅ Done |
| **2.5** | Navigation Commands | 4 | ✅ Done |
| **2.7** | Scheduled Messaging | 13 | 🚧 Active |
| **3** | Web App Redesign + T-15 Prep View | 32+ | Planned |
| **3.5** | Coach Onboarding + Voice Profile | 18+ | Planned |
| **4** | External Sites (Calendar, Gmail, Outlook) | 24+ | Planned |
| **4.5** | Coachee Layer + Privacy Tiers | 40+ | Planned |
| **5** | Pitch Polish + Demo Mode | 7+ | Planned |
| **5.5** | In-Session Real-Time Support | 8 | Planned |
| **6+** | Agentic Client Analysis | 32 | Vision |
| **7+** | Wisdom Corpus + Ubiquitous ReGenesis | 34 | Vision |

**TOTAL: ~300+ features**

*See full phase-by-phase breakdown in Appendix B.*

---

# PART L: BRAND, DESIGN & UX

## Product Name

**"ReGenesis"** — Chosen for trademark safety (lower risk than "Sage" or "Lumina") while capturing the spirit of transformation and renewal.

*Note: Consult trademark attorney before finalizing. Environmental company REGENESIS operates in different class (remediation), not coaching/software.*

## Logo & Icon

**Logo:** Ouroboros symbol (snake/circle eating its tail). Simplified versions for small sizes (16x16, 32x32 favicons).

**Side Panel Header:** Just the ouroboros symbol, no text. Clean, confident, recognizable — like Claude's spark or ChatGPT's aperture.

## Color Palette

- **Primary:** Deep teal/blue (trust, calm, wisdom)
- **Accent:** Purple (transformation, depth)
- **Warm touches:** Gold/orange from ouroboros (warmth, humanity)

## Typography

Clean, modern, readable. Inter, Söhne, or similar.

## UI Inspiration

| Inspiration | Why |
|-------------|-----|
| **Linear** | Clean, fast, keyboard-driven, command bar magic |
| **Notion** | Flexible, calm, content breathes |
| **Superhuman** | Speed, AI enhances not interrupts, premium feel |

**NOT:** Salesforce (cluttered), most coaching platforms (dated), ChatGPT (too chat-centric)

**Vibe:** Calm confidence. Powerful but not complicated.

## ReGenesis Voice & Tone

| Attribute | Description |
|-----------|-------------|
| **Warm** | Like a trusted colleague, not a robot |
| **Direct** | Gets to the point, doesn't over-explain |
| **Wise** | Thoughtful, offers perspective |
| **Humble** | "I noticed..." not "You should..." |
| **Professional** | Not overly casual, not stiff |

**Example:**
> "Marcus mentioned struggling with that conversation again. You might want to revisit the commitment he made last session about setting boundaries. Want me to pull up that context?"

---

# PART M: INTEGRATIONS REFERENCE

## Confirmed Integration Targets (For MVP/Demo)

| Integration | Priority | Purpose |
|-------------|----------|---------|
| **Google Calendar** | P0 | Detect sessions, trigger T-15 prep, daily command center |
| **Google Meet** | P0 | Auto-pull transcripts |
| **Google Docs** | P0 | Read/write session notes |
| **Google Drive** | P0 | File storage, access existing docs |
| **Gmail** | P0 | Send session notes, read client communication |
| **Outlook Calendar** | P1 | Enterprise calendar integration |
| **Outlook Email** | P1 | Enterprise email integration |
| **OneDrive/SharePoint** | P1 | Enterprise file storage |
| **Zoom** | P0 | Import transcripts, access recordings |
| **Fireflies.ai** | P1 | Import transcripts |
| **Calendly** | P1 | Scheduling awareness, calendar invites |
| **Square** | P1 | Billing integration |
| **Stripe** | P1 | Billing integration |

## Client Check-In Channels

| Channel | Priority | Use Case |
|---------|----------|----------|
| **Email** | P0 | Session summaries, nudges, check-ins |
| **SMS/Text** | P1 | Quick nudges, reminders |
| **WhatsApp** | P2 | Future — international coachees |

## Complete Platform Lists

**Calendar & Scheduling:**
Google Calendar, Outlook Calendar, Apple Calendar, Calendly, Acuity Scheduling, SavvyCal, Cal.com, Book Like A Boss

**Video & Meeting:**
Zoom, Google Meet, Microsoft Teams, Webex, FaceTime, Skype

**Transcription Services:**
Otter.ai, Fireflies.ai, Fathom, Rev, Grain, Descript, Trint

**Email:**
Gmail, Outlook/Microsoft 365, Apple Mail, ProtonMail, Hey.com, Fastmail, Yahoo Mail

**Notes & Documents:**
Google Docs, Notion, Microsoft Word, Apple Notes, Evernote, OneNote, Obsidian, Dropbox Paper

**File Storage:**
Google Drive, Dropbox, OneDrive, iCloud, Box

**Task & Project Management:**
Asana, Trello, Monday.com, Todoist, ClickUp, Basecamp, Airtable, Things 3, OmniFocus

**CRM & Client Management:**
HubSpot, Salesforce, Dubsado, HoneyBook, Practice Better, CoachAccountable

**Payments & Invoicing:**
Stripe, PayPal, Square, Venmo, Zelle, QuickBooks, FreshBooks, Wave

**Assessments:**
CliftonStrengths, Enneagram, DISC, Myers-Briggs (MBTI), Hogan, VIA Character Strengths, Leadership Circle, EQ-i, 360 tools

**Biometrics & Health (Future):**
Apple Watch / Apple Health, Fitbit, Oura Ring, Whoop, Garmin

---

# PART N: LEGAL & COMPLIANCE FRAMEWORK

## Coaching vs. Therapy: Legal Distinction

| Factor | Licensed Therapy | Coaching |
|--------|-----------------|----------|
| State Licensing Required | Yes - all 50 states | No - unregulated |
| HIPAA Applies | Yes (usually) | No (unless part of health plan) |
| Confidentiality Legally Protected | Yes - by state law | No - only contractual |
| Mandatory Reporting Laws (Tarasoff) | Yes | Not directly |
| Can Diagnose/Treat Mental Conditions | Yes | No - prohibited |

**Key Insight:** Coaches are NOT legally bound by Tarasoff/duty-to-warn laws. However, ethical best practice is to have clear policies anyway.

**If Coach is Also Licensed Therapist:** They remain bound by their professional obligations even when "coaching."

## Mandatory Reporting Policy (Recommended)

During coachee onboarding, present clear disclosure:

```
YOUR DATA, YOUR CONTROL

Your conversations with ReGenesis are private and belong to you.

✓ COMPLETE PRIVACY FROM EMPLOYER
  Even if your organization pays for ReGenesis, they NEVER have
  access to your session content, notes, or AI conversations.
  They only see that you're an active user.

✓ YOU CONTROL WHAT YOUR COACH SEES
  You can redact any conversation with the AI companion before
  your coach sees the summary. Your coach only sees what you approve.

✓ ENCRYPTION & SECURITY
  All data encrypted in transit and at rest. [SOC 2 / ISO 27001]

⚠️ IMPORTANT EXCEPTIONS (Legal Requirements):
  In rare cases, we may be required to break confidentiality:

  • Imminent risk of serious harm to yourself
  • Imminent risk of serious harm to others
  • Suspected child abuse or elder abuse (where legally required)
  • Court order or legal subpoena

  If any of these apply, we will work with your coach to ensure
  your safety and comply with legal requirements.

By continuing, you acknowledge you understand these policies.
```

## Employer-Sponsored Coaching: Data Protection

**The Question:** If a company pays for an employee's ReGenesis subscription, do they own the data?

**Our Position:** No. The architecture makes employer access impossible.

**How We Enforce This:**
1. **Independent service structure** — Not part of health plan
2. **Direct contract with employee** — Even if employer pays
3. **Architectural separation** — Employer only sees aggregate usage metrics
4. **Zero-knowledge encryption** — Employer never has technical access to content
5. **Clear Terms of Service** — Data belongs to user, not employer

**Compliance Considerations:**
- **CCPA (California):** Employees have rights to access, delete, correct data
- **HIPAA:** Only applies if structured as part of health plan (we avoid this)
- **State biometric laws (BIPA):** Relevant if using voice/facial recognition

## Outstanding Legal Questions (Needs Attorney Review)

1. Jurisdiction for international users (GDPR, PIPEDA)
2. Specific Terms of Service language for employer-paid subscriptions
3. E&O insurance requirements for AI-generated advice
4. State-by-state coaching regulation trends
5. Subpoena resistance architecture

---

# APPENDICES

## Appendix A: Wisdom Corpus — Prioritized Book List

### Top 50 Priority Additions (Critical Gaps)

**A. Coaching Methodology (1-10)**
1. Leadership and Self-Deception — Arbinger Institute
2. The Anatomy of Peace — Arbinger Institute
3. The Outward Mindset — Arbinger Institute
4. Your Brain at Work — David Rock
5. Change Your Questions, Change Your Life — Marilee Adams
6. Thanks for the Feedback — Stone & Heen
7. Conversational Intelligence — Judith Glaser
8. Switch — Chip & Dan Heath
9. Made to Stick — Chip & Dan Heath
10. The Reflective Practitioner — Donald Schön

**B. Relational/Attachment (11-18)**
11. The Seven Principles for Making Marriage Work — John Gottman
12. A General Theory of Love — Lewis, Amini, Lannon
13. I Don't Want to Talk About It — Terry Real
14. The New Rules of Marriage — Terry Real
15. Us — Terry Real
16. Polysecure — Jessica Fern
17. Love Sense — Sue Johnson
18. The Science of Trust — John Gottman

**C. Shadow Work & Depth Psychology (19-25)**
19. Meeting the Shadow — Zweig & Abrams
20. King, Warrior, Magician, Lover — Moore & Gillette
21. Care of the Soul — Thomas Moore
22. Inner Work — Robert Johnson
23. Romancing the Shadow — Connie Zweig
24. A Little Book on the Human Shadow — Robert Bly
25. Healing the Shame That Binds You — John Bradshaw

**D. Adult Development (26-32)**
26. Spiral Dynamics — Beck & Cowan
27. An Everyone Culture — Kegan & Lahey
28. Changing on the Job — Jennifer Garvey Berger
29. Unlocking Leadership Mindtraps — Jennifer Garvey Berger
30. Tribal Leadership — Logan, King, Fischer-Wright
31. Leadership Agility — Joiner & Josephs
32. Simple Habits for Complex Times — Berger & Johnston

**E. Organizational Culture (33-38)**
33. The Culture Code — Daniel Coyle
34. Turn the Ship Around! — L. David Marquet
35. Multipliers — Liz Wiseman
36. Leaders Eat Last — Simon Sinek
37. Extreme Ownership — Jocko Willink
38. Measure What Matters — John Doerr

**F. Professional Training Texts (39-50)**
39. Theory and Practice of Counseling and Psychotherapy — Gerald Corey
40. Psychotherapy Relationships That Work — Norcross & Wampold
41. The Heart and Soul of Change — Hubble, Duncan, Miller
42. Systems of Psychotherapy — Prochaska & Norcross
43. Evidence Based Coaching Handbook — Stober & Grant
44. Existential Psychotherapy — Irvin Yalom
45. The Theory and Practice of Group Psychotherapy — Irvin Yalom
46. Cognitive Behavior Therapy: Basics and Beyond — Judith Beck
47. DBT Skills Training Manual — Marsha Linehan
48. Emotionally Focused Couple Therapy — Susan Johnson
49. Ethics in Psychotherapy and Counseling — Pope & Vasquez
50. Deliberate Practice for Psychotherapists — Rousmaniere

*Full 500-book list with domain mappings available in WISDOM_CORPUS_RESEARCH.md*

---

## Appendix B: Detailed Phase-by-Phase Build Plan

*[Full phase details from V2 document, updated with ReGenesis naming and new features]*

### Key Phase Updates from V2:

**Phase 2 Additions:**
- 6-section notes template (Session Recap added)
- Nested/accordion architecture for notes
- Communication transparency indicators
- Coach mobile app requirements

**Phase 3 Additions:**
- Comprehensive settings page (voice-controllable)
- Coach's personal goals/priorities section

**Phase 4 Additions:**
- Outlook + Microsoft ecosystem integrations

**Phase 4.5 Additions:**
- Enhanced video retention notifications (48h, 24h, right-before)
- Legal disclosure during onboarding
- Redaction controls for coachee

**Phase 7+ Additions:**
- Full Wisdom Corpus with 16 domains
- Tagging structure implementation
- RAG architecture with Claude + LlamaIndex

---

## Appendix C: Gap Analysis Summary (V2 Updates)

### New Features Added in V3

| Feature | Section | Phase |
|---------|---------|-------|
| 6-section notes template (Session Recap added) | D | 2 |
| Nested/accordion architecture | D | 2 |
| Communication transparency indicators | D | 2 |
| Coach mobile app | D | 4 |
| Coach's personal goals/priorities | D | 3 |
| Voice-controllable settings | D | 3 |
| Enhanced video retention notifications | G | 4.5 |
| In-session expandable side panel | D | 5.5 |
| Legal disclosure language | N | 4.5 |
| LLM architecture specification | J | All |
| Wisdom Corpus 16 domains | I | 7+ |
| Tagging structure from Airtable | I | 7+ |
| Outlook/Microsoft integrations | M | 4 |

---

## Appendix D: Open Questions for Team

1. Do the phase adjustments align with technical dependencies?
2. Is the nested/accordion architecture achievable with current stack?
3. Can coach mobile app share codebase with web extension?
4. What's the minimum viable security certification timeline?
5. RAG framework preference: LlamaIndex vs LangChain?
6. How deep does ICF integration go in partnership development?

---

*Generated: January 2026*
*Author: Jesse Torrence with Claude*
*Version: 3.0*

---

**Document History:**
- V1.0 — Original master document
- V2.0 — Comprehensive update incorporating team Q&A, gap analysis, wisdom corpus research
- V3.0 — Major update incorporating:
  - Renamed from Sage to **ReGenesis** throughout
  - **6-section notes template** (Session Recap added as Section 1)
  - **Nested/accordion architecture** for all data displays
  - **Communication transparency indicators** (AI-drafted vs. coach-direct)
  - **Coach mobile app** with voice interaction
  - **Coach's personal goals/priorities** on dashboard
  - **Voice-controllable settings** page
  - **Enhanced video retention** (48h, 24h, right-before notifications)
  - **In-session expandable side panel** for frameworks
  - **Legal & compliance framework** (new Part N)
  - **LLM architecture specification** (Claude-first strategy)
  - **Wisdom Corpus 16 domains** with tagging structure
  - **Microsoft/Outlook integrations** for enterprise
  - All research findings from trademark, legal, and LLM analysis

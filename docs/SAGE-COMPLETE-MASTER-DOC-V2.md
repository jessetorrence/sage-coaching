# SAGE: COMPLETE MASTER DOCUMENT V2
## Vision + Strategy + Technical Architecture + Development Roadmap

*Comprehensive update incorporating all team feedback, gap analysis, and latest specifications*
*January 2026*

---

# TABLE OF CONTENTS

1. [Executive Summary](#part-a-executive-summary)
2. [Product Vision & Core Philosophy](#part-b-product-vision--core-philosophy)
3. [The Three User Tiers](#part-c-the-three-user-tiers)
4. [Coach Experience & Features](#part-d-coach-experience--features)
5. [Coachee Experience & Features](#part-e-coachee-experience--features)
6. [Sage Permissions & Autonomy Model](#part-f-sage-permissions--autonomy-model)
7. [Data, Privacy & Trust Architecture](#part-g-data-privacy--trust-architecture)
8. [Agentic Client Analysis](#part-h-agentic-client-analysis)
9. [Wisdom Corpus Engine](#part-i-wisdom-corpus-engine)
10. [Technical Architecture](#part-j-technical-architecture)
11. [Development Roadmap & Phasing](#part-k-development-roadmap--phasing)
12. [Brand, Design & UX](#part-l-brand-design--ux)
13. [Integrations Reference](#part-m-integrations-reference)
14. [Appendices](#appendices)

---

# PART A: EXECUTIVE SUMMARY

## What is Sage?

Sage is not a coaching app. Sage is an **invisible, embedded agentic AI intelligence** that lives inside the tools coaches and coachees already use. There is no new website to learn, no dashboard to check, no additional workflow to adopt.

### The Core Promise
**Zero workflow change, infinite support.**

Session ends → Notes appear → Coach tweaks → Client receives. All without leaving the browser. What used to take 30-45 minutes of post-session admin happens automatically in 5 minutes or less.

### Key Differentiators

| Traditional Coaching Apps | Sage |
|---------------------------|------|
| Another app to check | Invisible — embedded in existing tools |
| Coach does admin work | AI does admin, coach coaches |
| Data owned by platform | Data sovereign to user |
| Generic AI responses | Writes in coach's voice |
| Sessions only | 24/7 coachee companion |
| Guesses about coachee | Pattern recognition across all data |

### Architecture Philosophy

- **Extension-first** — Chrome extension is the daily driver
- **Web app exists** for onboarding, deep dives, settings, demos
- **"Sage brings you the screen when you need it. You never go looking for Sage."**

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

## Core Coaching Ideology

> **Always return to "What do you really want?"** — the coachee's North Star, their deep desire. Work on the beliefs, mindsets, habits that block them from becoming who they're meant to be.

---

# PART C: THE THREE USER TIERS

Sage serves three distinct user types, each with their own onboarding flow and data ownership model.

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
- If coachee leaves the company, their Sage account goes with them

---

# PART D: COACH EXPERIENCE & FEATURES

## The Top 5 Coach Workflows

### Workflow 1: Post-Session Notes Generation

**The Problem:** Coaches spend 30-45 minutes after each session writing notes, often delaying or skipping this critical touchpoint.

**The Sage Solution:**
1. Session ends → Transcript arrives (from Zoom, Google Meet, or Fireflies)
2. Sage auto-drafts structured session notes in coach's voice using the 5-section format:
   - **Observations, Insights & Analysis** — What Sage noticed, patterns, breakthroughs
   - **Inquiries for Growth** — ≤5 piercing questions for reflection
   - **Invitations to Action** — Behavioral commitments with specificity
   - **Resources / Tools / Follow-up** — Relevant materials, frameworks, guides
   - **Next Meeting & Future Focus** — Upcoming session prep
3. Coach edits via direct text or **AI command bar**:
   - "make warmer"
   - "add resource about boundaries"
   - "remove the part about his father"
   - "shorten the action items"
   - "this doesn't sound like me"
4. **Bonus:** If session mentioned specific frameworks or follow-ups, Sage auto-drafts **ancillary documents** alongside the main notes (e.g., delegation guide, NVC conversation script, RACI framework synthesis)
5. Coach reviews ancillary documents, approves what to include
6. One-click delivery → Client receives polished email with HTML + PDF attachment + hyperlinked resources stored in their **Resource Library**

**The Promise:** Session ends. Notes appear. **5 minutes or less.** (Target: 3 minutes as system improves)

---

### Workflow 2: T-15 Pre-Session Prep

**The Problem:** Coaches walk into sessions unprepared, scrambling to remember context, or spending 15+ minutes re-reading old notes.

**The Sage Solution:**
15 minutes before a scheduled session, Sage auto-generates a contextual brief:

| Section | Content |
|---------|---------|
| **North Star Reminder** | Client's stated values, vision, and overarching goals |
| **Last Session Recap** | Key themes, breakthroughs, emotional moments |
| **Commitments to Check** | What they said they'd do — did they? (✓ / ✗ / ?) |
| **Life Context** | What's happening in their world right now |
| **Pattern Intelligence** | "This is the 4th time she's mentioned feeling invisible at work" |
| **Suggested Openers** | Powerful questions tailored to where they are |
| **Private Coach Notes** | Your own observations and hypotheses |
| **Between-Session Intelligence** | Summary of coachee-Sage conversations since last session |
| **Coachee Pre-Session Input** | What coachee shared in prep prompts (celebrating, focus, priorities) |

**Critical:** T-15 prep is for **coach's eyes only** — never sent to coachee. Coach can keep it open during the session as a reference guide, or close it — their choice.

---

### Workflow 3: Coach's Daily Command Center

**The Problem:** Coaches juggle multiple clients, lose track of commitments, and don't have a "mission control" for their practice.

**The Sage Solution:**
Coach opens extension at start of day or between sessions, asks: "What's my day look like?"

**Smart Prioritization (Front and Center):**
```
🎯 FOCUS NOW
Your most important prep: Marcus Chen at 2pm
→ He's been struggling with the promotion decision
→ Commitment incomplete 3rd time (boundary conversation)
→ Had emotional Sage conversation yesterday

[Open T-15 Prep]
```

**Full Dashboard Shows:**
- **Today's Sessions** — With 1-line context for each ("Marcus: promotion anxiety, checking on boundary conversation")
- **Prep Needed** — Any sessions requiring special attention
- **Outstanding Actions** — Your commitments to clients, follow-up emails, resources to send
- **Client Pulse** — Anyone who's struggling, disengaged, or had a breakthrough between sessions
- **Your North Star** — Reminder of your own priorities and boundaries

**Philosophy:** GTD "what should I focus on right now?" — AI-prioritized based on all context across all clients and coach's goals.

---

### Workflow 4: In-Session Real-Time Support (Stretch Goal)

**The Problem:** During sessions, coaches sometimes forget key context, miss patterns, or struggle to find the right question.

**The Sage Solution:**
An inconspicuous bar sits just below the camera so coach maintains eye contact. Sage listens and surfaces:
- **Suggested Questions:** "Ask about the fear underneath the anger"
- **Pattern Recognition:** "Third time she's mentioned her father"
- **Framework Suggestions:** "This sounds like Drama Triangle — consider naming it"
- **Quick Queries:** Coach can silently ask "What did she commit to last time?" and get instant answer

The "wise co-pilot whispering in your ear" experience — all glanceable without breaking presence.

---

### Workflow 5: 24/7 Coachee Companion (Future Vision)

**The Problem:** Coaching happens in 1-hour sessions, but life happens 24/7. Coachees forget insights, lose momentum, and arrive at sessions having to "catch up" instead of going deeper.

**The Sage Solution:**
Coachees get their own Sage — available as a mobile app and chat interface:
- **Process challenges** in real-time (bad meeting, difficult conversation, anxiety spiral)
- **Track commitments** and get smart reminders
- **Prepare for difficult conversations** with role-play and frameworks
- **Receive smart nudges** based on their patterns and goals
- **Reflect and journal** with prompts tailored to their journey

Sage knows their full coaching context and supports continuity. Coach can see engagement summaries and key insights (with consent) in T-15 prep.

---

## Coach's Private Intelligence Layer

On each Client Profile, a private section only coach sees:

```
📝 Private Intelligence (Coach + Sage)

🎯 Sage's Current Read:
Marcus is in a Creator/Reactor oscillation around his leadership identity.
He defaults to Reactor (blame, justify, defend) when his competence is questioned.
The promotion anxiety isn't about the role — it's about being "found out."

🤖 Sage Observations (auto-updated):
• Jan 15: Authority pattern triggered again — boss gave critical feedback
• Jan 12: First time expressed anger directly instead of deflecting
• Jan 8: Mentioned father's disappointment for first time (session 23)
• Jan 5: Breakthrough — named his fear of success, not just failure

✍️ Your Private Notes:
• Remind myself to slow down with him — he shuts down when pushed too fast
• Consider introducing Drama Triangle next session
• His wife might be enabling the avoidance — tread carefully

💬 Between-Session Intelligence:
• Jan 14: 20-min conversation with Sage about promotion anxiety
• Jan 11: Marked "have boundary conversation" as incomplete (3rd time)
• Jan 10: Journaled about feeling like an imposter — unusually vulnerable
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

**Note:** Most resources are AI-generated on an as-needed basis for each client. The library grows organically as the coaching relationship develops. A small set of universal starter templates (5-10 commonly used frameworks) can be pre-loaded.

---

## Voice Profile System

Voice matching refers to **written tone**, not audio. Coach feeds Sage their past notes, emails, text messages, and other writing samples during onboarding to train the voice profile.

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

# PART E: COACHEE EXPERIENCE & FEATURES

## Coachee Onboarding

### Invitation from Coach

Coach sends email (drafted by Sage, reviewed and approved by coach):

> Hi [Coachee Name],
>
> I'm excited to introduce you to Sage, an AI companion that will support our coaching work together.
>
> Sage helps by:
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
| **Tier 1: Private** | Coachee + Sage only | Personal reflections, journal entries, sensitive goals |
| **Tier 2: Coach-Shared** | Coach + Coachee + Sage | Session notes, goals you're working on together, progress updates |
| **Tier 3: Company-Visible** | Anonymized aggregate only | That coaching is occurring, engagement level, general theme categories |

**Key:** Tier 1 is **architecturally enforced** — coach literally cannot access (no encryption key).

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
| Nudge frequency | How often Sage checks in |
| Time-of-day preferences | When nudges are welcome |
| Communication channel | Email, text, app |
| Opt-out specific nudge types | Per-type control |
| Privacy tier settings | What stays private vs. shared |

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

# PART F: SAGE PERMISSIONS & AUTONOMY MODEL

## Coach-Facing Sage — Automatic vs. Ask Permission

| Action | Auto or Ask? | Rationale |
|--------|--------------|-----------|
| Auto-draft T-15 prep before sessions | ✅ Auto | No risk — coach can ignore. Delight, not intrusion. |
| Auto-draft session notes after transcript | ✅ Auto | Core value prop. Coach reviews before sending. |
| Auto-detect coaching sessions from calendar | ✅ Auto | How Sage knows when to act. |
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

**Critical Clarification:** Sage auto-drafts all content (notes, T-15 prep, ancillary docs) without permission. Coach approval is only required for **sending** content to the coachee or taking external actions.

---

## Coachee-Facing Sage — 5-Tier Autonomy Model

### TIER 1: Full Autonomy (Sage Acts Freely)
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
| Processing/listening conversations | Coachee vents, Sage reflects back, no action taken |
| Coachee-initiated data actions | Delete, export, revoke consent — their sovereign choice |
| Scheduling/rescheduling | "Find me another time with Jesse" → Sage checks calendars, proposes, confirms |

**Guardrails:** Frequency controlled by coachee preferences, time-of-day awareness, easy opt-out.

### TIER 2: Autonomous + Coach Visibility (Sage Acts, Coach Sees Summary)
*Sage takes action. Coach gets digest — no approval needed, but transparency maintained.*

| Action | Examples |
|--------|----------|
| Substantive coachee conversations | Coachee processes difficult situation — coach sees summary in T-15 prep |
| Goal updates or changes | Coachee modifies goals — coach notified in digest |
| Completion tracking | Coachee marks commitments done/not done — coach sees progress |
| Pattern flags | Sage notices coachee struggling — flags in coach dashboard |
| Coachee shares new context | "I got promoted" / "We're getting divorced" — coach sees before next session |
| Sentiment shifts | Engagement drops or emotional tone changes significantly |

### TIER 3: Coach Approval Required (Sage Drafts, Coach Confirms)
*Higher stakes. Sage prepares, coach decides.*

| Action | Examples |
|--------|----------|
| Personalized outreach beyond templates | Nudge referencing something sensitive or specific |
| Suggesting new resources | Book or practice not pre-approved |
| Boundary-adjacent conversations | Coachee asks for advice approaching therapeutic territory |
| Accountability escalation | Coachee consistently not following through |
| Introducing new topics | Sage notices pattern, wants to raise with coachee |
| Scheduling changes | Suggesting coachee book extra session |
| Connecting coachee with external resources | Therapist referral, support group, etc. |
| **Sending session notes to coachee** | Sage auto-drafts (Tier 1), coach reviews/edits, then approves sending |
| **Sending ancillary documents/guides** | Auto-drafted resources require coach approval before attaching |

### TIER 4: Immediate Escalation (Sage Alerts Coach, Awaits Guidance)
*High stakes. Human judgment essential.*

| Situation | Sage Response |
|-----------|---------------|
| Safety concerns | Suicidal ideation, self-harm, harm to others |
| Crisis indicators | Acute distress, panic, dissociation |
| Disclosure of abuse/trauma | Current or historical |
| Legal/ethical boundaries | Coachee asks Sage to do something inappropriate |
| Relational rupture | Coachee expresses anger at coach or desire to quit |
| Major life events | Death, divorce, job loss, health crisis |

### TIER 5: Hard Boundaries (Sage Never Does, Period)

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
> **Sage drafts freely, surfaces proactively, supports continuously — but acts on the world only with appropriate human approval based on stakes.**

---

# PART G: DATA, PRIVACY & TRUST ARCHITECTURE

## What Data Can Sage Store?

| Data Type | Store? | Notes |
|-----------|--------|-------|
| Session transcripts | ✅ Yes | Core functionality — encrypted at rest |
| Session notes (drafts and final) | ✅ Yes | Version history preserved |
| Coach profile & preferences | ✅ Yes | Voice profile, templates, settings |
| Client profiles | ✅ Yes | Name, contact, goals, context |
| Coachee intake forms | ✅ Yes | Onboarding questionnaires, initial assessments |
| Client assessment results | ✅ Yes | With client consent (Enneagram, StrengthsFinder, DISC, etc.) |
| Ancillary documents & guides | ✅ Yes | Stored in client's Resource Library |
| Conversation history (coach-Sage) | ✅ Yes | For context continuity |
| Conversation history (coachee-Sage) | ✅ Yes | Tier 1/2/3 based on coachee settings |
| Calendar data | ✅ Yes | Session scheduling, patterns |
| Email content | ⚠️ Limited | Only coaching-related threads, with consent |
| Billing/payment records | ✅ Yes | For invoicing features |
| Video recordings | ⚠️ Short-term | 2 weeks max, then auto-deleted |

## Video Recording Retention

- Auto-delete after 2 weeks
- Coachee receives notification **48 hours before** deletion with option to download
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

| Level | What It Means | How Sage Delivers |
|-------|---------------|-------------------|
| 1. Architecture | They CAN'T violate privacy | Zero-knowledge, user-held keys |
| 2. Certification | Third parties VERIFY security | SOC 2, HIPAA, ISO 27001 |
| 3. Policy | They PROMISE not to violate | Clear terms, plain language |
| 4. Reputation | Others SAY they're trustworthy | Testimonials, track record |
| 5. Enforcement | CONSEQUENCES if they violate | GDPR fines, legal liability |

**Sage operates at Levels 1 + 2** — architecture makes violation impossible, certifications prove it.

## Zero-Knowledge Encryption Model

**How "Architecturally Impossible" Corporate Access Works:**

```
COACHEE ONBOARDING:
1. Coachee creates account
2. Client generates unique encryption key pair (public/private)
3. Private key stored ONLY on coachee's devices (never transmitted)
4. Public key registered with Sage

SESSION DATA FLOW:
1. Session transcript generated
2. Client-side: Content encrypted with coachee's public key
3. Encrypted blob sent to Sage servers
4. Sage can store and sync, but CANNOT decrypt
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

> Sage sees the whole person — who they truly are, who they're becoming, and what's hidden in their shadow — without the coach's projections, biases, or limited memory.

## Priority Data Sources

**For MVP:**

| Source | Priority | What Sage Learns |
|--------|----------|------------------|
| Coaching session transcripts | P0 | Patterns, language, emotions, shadow, breakthroughs |
| Calendar | P0 | Life rhythm, where time actually goes |
| Goals & commitments (in Sage) | P0 | Stated intentions vs. actual follow-through |
| Client onboarding questionnaire | P0 | Coach's intake questions + AI's gap-filling questions |
| Coachee self-reports | P0 | Check-ins, reflections, private notes |
| Email (with consent) | P1 | Communication patterns, stress indicators |
| Text messaging (with consent) | P1 | Real-time emotional states |
| Assessment results | P1 | Enneagram, StrengthsFinder, DISC |

## The Insight Hierarchy

| Level | What Sage Sees | Example |
|-------|----------------|---------|
| 1. **Patterns** | What repeats across sessions | "She mentions feeling 'invisible' in 7 of 12 sessions" |
| 2. **Trajectories** | Where they're heading based on current path | "At this rate of delegation avoidance, burnout in 6 months" |
| 3. **Gaps** | Contradictions between stated and actual | "Says work-life balance is priority #1, but canceled 4 sessions for work" |
| 4. **Shadow** | What's hidden, denied, unconscious | "The anger at his team may be displaced anger at himself" |
| 5. **Becoming** | Who they're growing into | "She's developing her voice — first time she pushed back on her boss" |
| 6. **Hard Truths** | What coach can't/won't say, coachee can't see | "His perfectionism isn't about excellence — it's about avoiding criticism" |

## What Sage Uniquely Offers

- **Perfect memory** — Never forgets a detail from session 1
- **Pattern recognition** — Sees connections humans miss
- **No projection** — Doesn't overlay its own issues onto the client
- **No fatigue** — Equal attention to session 47 as session 1
- **Cross-domain synthesis** — Connects work patterns to relationship patterns to childhood patterns

## Tone Calibration

**Principle:** Scarily accurate, profoundly compassionate, never judgmental.

| ✅ Sage Voice | ❌ Too Far |
|--------------|-----------|
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

Sage shouldn't wait to be asked — it should occasionally surface patterns proactively:

```
💡 Sage noticed something:

"Across the last 5 sessions, Sarah has mentioned feeling
'invisible' 7 times — always in work contexts, never in
personal relationships. This might be worth exploring."

[Add to Private Notes] [Dismiss] [Tell me more]
```

If coach agrees, observation goes to Private Intelligence section on client profile.

## Confidence Indicators — Simplified Approach

| Element | Behavior |
|---------|----------|
| Default | Sage presents content confidently |
| Visual indicator | Subtle confidence meter (clickable) |
| On click | Opens dialogue: "Where did you get this? How confident are you?" |
| Sage explains | Sources, reasoning, confidence level in natural language |
| Future integration | Links to Wisdom Corpus citations when available |

**Avoid:** Language like "I'm not sure but..." which undermines trust.

**Use:** "Based on [source], I believe..." or visual indicators that invite exploration without suggesting uncertainty.

## "Explain This" / Attribution Feature

User can ask Sage "Why did you suggest this?" or "Where did this come from?"

**Response includes:**
- Source (transcript moment, pattern across sessions, Wisdom Corpus)
- Reasoning chain
- Confidence level
- Links to original content

---

# PART I: WISDOM CORPUS ENGINE

## Vision

**Two Powers:**

1. **Precision Retrieval** — Pull the exact right quote, framework, concept for this person in this moment, traceable to source

2. **Integrated Wisdom** — Fundamentally wiser entity that sees patterns across all human knowledge, understands transformation at the deepest level

**Result:** An AI wiser than any coach, therapist, or sage who ever lived — because it holds the integrated wisdom of ALL of them.

## Initial Sources — Core Coaching Canon

**Tier 1: 75-100 books** covering:
- Coaching Foundations (Co-Active, Coaching Habit, etc.)
- Depth Psychology & Shadow Work (Jung, IFS, Schwartz, Zweig)
- Psychology & Therapy (Frankl, van der Kolk, Levine)
- Somatics & Embodiment (Levine, polyvagal theory)
- Conscious Leadership (15 Commitments, Creator/Reactor frameworks)
- Enneagram (Riso/Hudson, Helen Palmer, Beatrice Chestnut)
- Personal Development (Atomic Habits, Mindset, etc.)
- Communication (NVC, Crucial Conversations)
- Mindfulness (Tolle, Kabat-Zinn, Brach)
- Relationships & Attachment (Gottman, Johnson, Hendrix)
- Neuroscience (Buddha's Brain, Siegel)

**Top 50 Priority Additions** (fills critical gaps):
- Arbinger Institute trilogy (Leadership and Self-Deception, Anatomy of Peace, Outward Mindset)
- David Rock (Your Brain at Work, SCARF model)
- Terry Real's relational work
- Heath Brothers (Switch, Made to Stick)
- Professional training textbooks (Gerald Corey, Yalom)
- Modality-specific clinical manuals (DBT, EFT, Gottman)

*Full 200-book prioritized list available in Appendix A.*

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

**5-Section Notes Structure:**
1. Observations, Insights & Analysis
2. Inquiries for Growth (≤5 piercing questions)
3. Invitations to Action (behavioral science-informed)
4. Resources / Tools / Follow-up
5. Next Meeting & Future Focus

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

## Tagging Structure

Each corpus entry tagged by:

**1. Coach Use Case**
- Post-session (notes, reflection)
- Pre-session (T-15 prep)
- In-session (real-time support)
- Between-session (ongoing development)

**2. Coachee Situation**
- Stuck/blocked
- Anxious/overwhelmed
- Relationship conflict
- Career transition
- Meaning/purpose crisis
- Shadow work needed
- Nervous system dysregulation

**3. Intervention Level**
- Cognitive (reframes, beliefs)
- Emotional (feeling work)
- Somatic (body-based)
- Relational (connection patterns)
- Spiritual (meaning, transcendence)

---

# PART J: TECHNICAL ARCHITECTURE

## System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                                   │
│                                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │ Chrome   │ │  Gmail   │ │ Outlook  │ │  Slack   │ │  Zoom    │     │
│  │Extension │ │ Add-in   │ │ Add-in   │ │   Bot    │ │Integration│    │
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

## Extension Architecture (Plasmo-based)

| Component | Function |
|-----------|----------|
| Chrome Extension | Sidepanel UI for Sage interactions |
| Background Service Worker | Message routing, API calls |
| Content Scripts | Inject on supported sites |
| WebSocket Connection | Real-time state updates |

## AI/LLM Architecture

| Function | Model | Why |
|----------|-------|-----|
| Session summarization | Claude/GPT-4 | Quality, nuance, voice matching |
| Quick responses | Claude Haiku/GPT-3.5 | Speed, cost |
| Voice transcription | Whisper/Deepgram | Accuracy, real-time |
| Embeddings (search) | text-embedding-3 | Vector search for context |

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
├── Recency-weighted results
└── Coachee-consented data only
```

---

# PART K: DEVELOPMENT ROADMAP & PHASING

## Master Phase Summary

| Phase | Name | Features | Status |
|-------|------|----------|--------|
| **0** | Extension Shell + Sage Foundation | 21 | ✅ Done |
| **1** | Context Reading + First Magic | 12 | ✅ Done |
| **1.5** | State Foundation | 7 | ✅ Done |
| **2** | Sage Actions | 28+ | ✅ Done |
| **2.5** | Navigation Commands | 4 | ✅ Done |
| **2.7** | Scheduled Messaging | 13 | 🚧 Active |
| **3** | Web App Redesign + T-15 Prep View | 32+ | Planned |
| **3.5** | Coach Onboarding + Voice Profile | 18+ | Planned |
| **4** | External Sites (Calendar, Gmail) | 24 | Planned |
| **4.5** | Coachee Layer + Privacy Tiers | 40+ | Planned |
| **5** | Pitch Polish + Demo Mode | 6+ | Planned |
| **5.5** | In-Session Real-Time Support | 8 | Planned |
| **6+** | Agentic Client Analysis | 32 | Vision |
| **7+** | Wisdom Corpus + Ubiquitous Sage | 34 | Vision |

**TOTAL: ~300+ features**

---

## DETAILED PHASE-BY-PHASE BUILD PLAN

### PHASE 0: Extension Shell + Sage Foundation ✅ COMPLETE

**Outcome:** A Chrome extension with a chat side panel that authenticates, talks to Sage, and returns AI responses.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | AI chat interface in Chrome extension sidepanel | P0 | React sidepanel component with message input/output |
| 2 | Streaming responses with typing indicator | P0 | WebSocket streaming, animated typing dots |
| 3 | Message retry on failure | P1 | Error handling, retry button |
| 4 | Clear conversation command | P1 | /clear command, confirmation |
| 5 | Plasmo-based Chrome extension with React | P0 | Extension scaffold, manifest, build pipeline |
| 6 | Sidepanel UI for Sage interactions | P0 | Layout, styling, responsive design |
| 7 | Background service worker for message routing | P0 | Message passing between components |
| 8 | Content script injection on supported sites | P0 | Injection logic, site detection |
| 9 | Auth state sync with web app via cookies | P0 | Cookie reading, auth flow |
| 10 | Extension badge showing connection status | P1 | Badge colors, status tracking |
| 11 | Chrome storage for local preferences | P1 | Storage API wrapper, preference schema |
| 12 | NextAuth.js credential provider with Django backend | P0 | Auth integration, token handling |
| 13 | Google OAuth login | P0 | OAuth flow, token storage |
| 14 | Session cookie management | P0 | Cookie handling, expiry |
| 15 | Role-based access control | P0 | Role definitions, permission checks |
| 16 | Extension auth sync with web app | P0 | Shared auth state |
| 17 | JWT token storage and refresh | P0 | Token lifecycle management |
| 18 | Protected route middleware | P0 | Route guards, redirects |
| 19 | Password reset flow | P1 | Email, reset page, validation |
| 20 | User registration flow | P1 | Signup form, verification |
| 21 | Product name: "Sage" | P0 | Branding, naming |

---

### PHASE 1: Context Reading + First Magic ✅ COMPLETE

**Outcome:** Extension understands where you are in the coach app and can answer questions about the current page.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Context-aware responses based on current page | P0 | Page context injection into prompts |
| 2 | Conversation history persistence | P0 | Database storage, session continuity |
| 3 | Conversation context window management | P1 | Token counting, history truncation |
| 4 | DOM scraping via data-sage-* attributes | P0 | Attribute selectors, data extraction |
| 5 | Page type detection (client-detail, session-detail, etc.) | P0 | URL parsing, page classification |
| 6 | Client ID and name extraction from page | P0 | DOM selectors, data parsing |
| 7 | Session ID extraction from page | P0 | DOM selectors, data parsing |
| 8 | Client context available to Sage | P0 | Context enrichment in API |
| 9 | Session context available to Sage | P0 | Context enrichment in API |
| 10 | AI scouring of connected sources to auto-generate profile | P0 | OAuth data fetching, profile synthesis |
| 11 | "Here's what I found" presentation | P0 | Profile display UI |
| 12 | Auto-draft in 5 minutes (specific timing) | P0 | Timer, notification, draft generation |

---

### PHASE 1.5: State Foundation ✅ COMPLETE

**Outcome:** Database tracks all user state; WebSocket broadcasts changes; Extension uses API-based context.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | WebSocket connection for real-time state updates | P0 | WebSocket server, client connection |
| 2 | Bidirectional state flow | P0 | Event handlers, state sync |
| 3 | UserActiveState tracking (active client, session, page) | P0 | State model, tracking logic |
| 4 | Presence heartbeat to backend | P1 | Heartbeat interval, presence service |
| 5 | State subscription model with broadcast | P0 | Pub/sub pattern, broadcast logic |
| 6 | Frontend action handler for UI updates | P0 | Action dispatcher, UI update hooks |
| 7 | JWT token refresh over WebSocket | P1 | Token refresh protocol |

---

### PHASE 2: Sage Actions ✅ COMPLETE (+ Recommended Additions)

**Outcome:** Sage can do things — draft T-15 prep, generate session notes, send follow-up emails — with user confirmation.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Suggested actions with confirmation UI | P0 | Action cards, approve/reject buttons |
| 2 | Generate T-15 pre-session briefing | P0 | T-15 template, data aggregation, generation |
| 3 | Generate post-session notes (5-section format) | P0 | Notes template, transcript processing |
| 4 | Draft follow-up emails in coach's voice | P0 | Email templates, voice matching |
| 5 | Create action items from session transcript | P1 | Commitment extraction, tracking |
| 6 | Quick commands via slash syntax | P1 | Command parser, execution |
| 7 | Action rejection/modification before execution | P0 | Edit UI, confirmation flow |
| 8 | Multi-channel notification delivery | P0 | WebSocket, browser push, in-app |
| 9 | Notification categories | P0 | Category system, filtering |
| 10 | Severity levels (info, warning, error) | P1 | Severity styling, prioritization |
| 11 | Dismissible vs. persistent notifications | P1 | Dismissal logic, persistence rules |
| 12 | Action buttons within notifications | P1 | Button actions, handlers |
| 13 | Notification expiration and auto-dismiss | P2 | Timer, auto-dismiss logic |
| 14 | Notification preferences per category | P1 | Preference UI, storage |
| 15 | Do not disturb mode | P2 | DND toggle, schedule |
| 16 | Notification center (history view) | P2 | History list, filtering |
| 17 | Browser notification permission flow | P1 | Permission request, handling |
| 18 | Session reminder notifications (T-60, T-15) | P1 | Timer triggers, reminders |

**🆕 RECOMMENDED ADDITIONS FOR PHASE 2:**

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 19 | **AI Command Bar for notes editing** | P0 | Command input, NLP parsing, edit execution |
| 20 | **Voice learning from edits** | P1 | Edit tracking, voice model updates |
| 21 | **"This doesn't sound like me" override** | P1 | Override button, regeneration |
| 22 | **Basic Command Center "What's my day?"** | P0 | Day view query, smart prioritization |
| 23 | **AI-prioritized Focus Now recommendation** | P0 | Priority algorithm, focus card UI |
| 24 | **Private Intelligence Layer (basics)** | P0 | Client profile section, manual notes |
| 25 | **Sage observations auto-populated** | P1 | Pattern detection, observation storage |
| 26 | **Client Resource Library (basics)** | P1 | Per-client storage, upload, search |
| 27 | **Hyperlink resources in session notes** | P1 | Link insertion, library integration |
| 28 | **Coach feedback loop ("This was off")** | P2 | Feedback buttons, learning signal |

---

### PHASE 2.5: Navigation Commands ✅ COMPLETE

**Outcome:** Sage can execute commands on the frontend via WebSocket.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Navigation commands via chat | P0 | Command parsing, navigation execution |
| 2 | Search clients by natural language query | P0 | NL search, client matching |
| 3 | Suggested opening questions in T-15 | P1 | Question generation, T-15 integration |
| 4 | Commitment status (checkmarks) in T-15 | P1 | Status tracking, visual indicators |

---

### PHASE 2.7: Scheduled Messaging 🚧 ACTIVE

**Outcome:** Coaches can schedule follow-up messages for optimal delivery times.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Schedule messages for future delivery | P0 | Scheduler, queue, delivery service |
| 2 | Multi-channel support (email, SMS, WhatsApp) | P0 | Channel adapters, routing |
| 3 | AI-suggested optimal send times | P1 | Send time algorithm, suggestions |
| 4 | Pre-send review notification (T-15 before send) | P0 | Review notification, preview UI |
| 5 | Approve, edit, reschedule, or cancel from notification | P0 | Action handlers, state management |
| 6 | Auto-send if no action during review window | P1 | Timer, auto-send logic |
| 7 | Auto-cancel if client responds before scheduled send | P1 | Response detection, cancellation |
| 8 | Pending messages dashboard | P1 | Dashboard view, filters |
| 9 | Delivery retry with exponential backoff | P1 | Retry logic, backoff algorithm |
| 10 | Delivery failure notifications to coach | P1 | Failure detection, notification |
| 11 | Scheduled message audit trail | P1 | Audit logging, history |
| 12 | Template integration for scheduled messages | P2 | Template picker, variable injection |
| 13 | Configurable pre-send review timing | P2 | Settings UI, timing options |

---

### PHASE 3: Web App Redesign + T-15 Prep View 📋 PLANNED

**Outcome:** The web app gets a visual overhaul AND has Sage built directly into the UI.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Client list with pagination | P0 | List component, pagination logic |
| 2 | Client detail view | P0 | Detail layout, data display |
| 3 | Client search and filtering | P0 | Search input, filter dropdowns |
| 4 | Client profile with contact information | P0 | Profile section, contact fields |
| 5 | Client session history | P0 | History list, session cards |
| 6 | Client documents and files | P1 | Document list, file viewer |
| 7 | Add/edit/archive clients | P0 | CRUD forms, validation |
| 8 | Client invitation via email | P1 | Invitation flow, email template |
| 9 | Client onboarding flow | P1 | Onboarding wizard, progress tracking |
| 10 | Session list per client | P0 | Session list, sorting |
| 11 | Session detail view with notes | P0 | Notes display, 5-section layout |
| 12 | Create/edit/delete sessions | P0 | Session CRUD, calendar integration |
| 13 | Session status tracking | P0 | Status model, state machine |
| 14 | Session notes editor (rich text) | P0 | Rich text editor, formatting |
| 15 | Session action items | P1 | Action item list, completion tracking |
| 16 | Session transcript storage | P1 | Transcript model, storage |
| 17 | Transcript processing to generate notes | P1 | Processing pipeline, generation |
| 18 | Main dashboard view | P0 | Dashboard layout, widgets |
| 19 | **Smart Focus Now widget (front and center)** | P0 | Priority algorithm, prominent card |
| 20 | Upcoming sessions widget | P0 | Session list, countdown |
| 21 | Recent clients widget | P1 | Client list, activity |
| 22 | Pending action items widget | P1 | Action list, urgency sorting |
| 23 | Quick actions (new client, new session) | P1 | Action buttons, modals |
| 24 | Dashboard view mode toggle | P2 | View toggle, layout options |
| 25 | Scheduled messages panel | P1 | Messages list, status indicators |
| 26 | User profile settings | P1 | Settings form, preferences |
| 27 | Email template management | P1 | Template CRUD, preview |
| 28 | Notification preferences | P1 | Preference toggles, categories |
| 29 | Scheduled message preferences | P1 | Timing settings, defaults |
| 30 | Integration connections management | P1 | OAuth status, connect/disconnect |
| 31 | **T-15 Prep View (dedicated screen)** | P0 | Full T-15 layout, all sections |
| 32 | **Private Intelligence Layer on Client Profile** | P0 | Private section, Sage's Read, observations |

---

### PHASE 3.5: Coach Onboarding + Voice Profile 📋 PLANNED

**Outcome:** 8-phase AI-powered onboarding that builds coach's voice profile.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Multi-step onboarding wizard | P0 | Wizard component, step navigation |
| 2 | Organization creation during onboarding | P0 | Org form, creation flow |
| 3 | Coach profile setup | P0 | Profile form, validation |
| 4 | **"Scan First" data source connection** | P0 | OAuth connections, source selection |
| 5 | **AI scouring and profile generation** | P0 | Background processing, profile synthesis |
| 6 | **"Here's what I found" presentation** | P0 | Profile display, confidence indicators |
| 7 | **Inline correction capability** | P1 | Edit-in-place, correction tracking |
| 8 | **Fill-the-gaps questions (only what AI couldn't find)** | P1 | Dynamic question generation |
| 9 | Voice profile training (writing samples) | P0 | Sample upload, analysis |
| 10 | **Minimum sample threshold indicator** | P1 | Progress meter, guidance |
| 11 | **Sample diversity guidance** | P1 | Recommendation UI |
| 12 | **Voice match confidence meter** | P2 | Confidence display, details on click |
| 13 | Progressive permission requests | P1 | Permission flow, explanations |
| 14 | Integration connection during onboarding | P1 | OAuth flows, status tracking |
| 15 | LinkedIn profile connection | P1 | LinkedIn OAuth, data import |
| 16 | Personal/coaching website scraping | P2 | Web scraper, content extraction |
| 17 | Resume/CV upload and parsing | P2 | File upload, parsing |
| 18 | Calendar & scheduling connections | P2 | Calendar OAuth, sync |

---

### PHASE 4: External Sites (Calendar, Gmail) 📋 PLANNED

**Outcome:** Extension works beyond the coach app — on Google Calendar, Gmail, and arbitrary pages.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Site adapter pattern for multi-site support | P0 | Adapter interface, site detection |
| 2 | Google Calendar context extraction | P0 | Calendar DOM scraping, event parsing |
| 3 | Gmail context extraction | P0 | Gmail DOM scraping, email parsing |
| 4 | Auto-detect coaching sessions from calendar | P0 | Session detection heuristics |
| 5 | Heuristic-based session detection | P0 | ML/rule-based detection |
| 6 | Calendar event → client matching | P0 | Name matching, client lookup |
| 7 | Pre-session briefing triggered by calendar | P1 | Calendar triggers, T-15 generation |
| 8 | Gmail DOM scraping for email context | P0 | Email extraction, thread parsing |
| 9 | Email template management | P0 | Template CRUD, variables |
| 10 | Rich text email editor | P0 | Editor component, formatting |
| 11 | Draft emails via Sage chat | P0 | Draft command, email generation |
| 12 | Email variable interpolation | P1 | Variable system, substitution |
| 13 | Email sending with coach approval | P0 | Approval flow, send execution |
| 14 | Backend-mediated Gmail API | P2 | Gmail API integration |
| 15 | Email communication | P0 | Email channel, delivery |
| 16 | SMS/text messaging (Twilio) | P1 | Twilio integration, SMS delivery |
| 17 | WhatsApp Business API messaging | P1 | WhatsApp integration |
| 18 | Accountability prompts (daily/weekly) | P1 | Prompt scheduler, templates |
| 19 | Pre-session reminders (24h, 1h) | P1 | Reminder triggers, notifications |
| 20 | Well-being pulse checks | P2 | Check-in prompts, tracking |
| 21 | Goal progress nudges | P2 | Progress detection, nudges |
| 22 | Microsoft Outlook calendar integration | P1 | Outlook OAuth, sync |
| 23 | Backend-mediated calendar API | P2 | Calendar API integration |
| 24 | Agentic site adaptation engine | P2 | Auto-healing selectors |

---

### PHASE 4.5: Coachee Layer + Privacy Tiers 📋 PLANNED

**Outcome:** Coachees have their own experience with consent controls, privacy tiers, and goal tracking.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Organization-based multi-tenancy | P0 | Org model, tenant isolation |
| 2 | Zero-knowledge encryption (client-side keys) | P0 | Key generation, encryption library |
| 3 | Web Crypto API key generation | P0 | Key management, storage |
| 4 | 3-tier consent model (Private → Coach → Company) | P0 | Tier model, content classification |
| 5 | Data sovereignty (coachee owns their data) | P0 | Ownership model, export |
| 6 | Instant, complete, verifiable deletion | P0 | Delete flow, **3 confirmations** |
| 7 | GDPR/CCPA/HIPAA compliance design | P1 | Compliance checks, documentation |
| 8 | Audit logging for sensitive actions | P1 | Audit log, retention |
| 9 | Coach role | P0 | Role permissions |
| 10 | Coachee role | P0 | Role permissions |
| 11 | Corporate Admin role | P2 | Admin permissions |
| 12 | Organization-level permissions | P1 | Org permission model |
| 13 | Role-based feature access | P1 | Feature flags by role |
| 14 | **Coachee invitation email (coach drafts, approves)** | P0 | Invitation flow, email template |
| 15 | **Coachee privacy preferences at onboarding** | P0 | 3-tier selection UI |
| 16 | **Retention preferences at onboarding** | P0 | Retention options, storage |
| 17 | Coachee-facing Sage Tier 1 Full Autonomy | P1 | Autonomous actions, guardrails |
| 18 | Coachee-facing Sage Tier 2 Coach Visibility | P1 | Digest generation, coach alerts |
| 19 | Coachee-facing Sage Tier 3 Coach Approval | P1 | Approval queue, workflow |
| 20 | Coachee-facing Sage Tier 4 Immediate Escalation | P0 | Escalation detection, alerts |
| 21 | **Coachee Control Panel** | P0 | Nudge frequency, timing, channel, opt-out |
| 22 | **Coachee Pre-Session Preparation (24h, 1h prompts)** | P1 | Prompt scheduler, response collection |
| 23 | **Prep responses flow to T-15** | P1 | Data pipeline, T-15 integration |
| 24 | **Data Transparency Dashboard** | P1 | Connected sources, data accessed, audit log |
| 25 | One-click revoke for any source | P1 | Revoke flow, cleanup |
| 26 | One-click delete all | P1 | Delete flow, **3 confirmations** |
| 27 | **Between-Session Intelligence data flow** | P1 | Coachee-Sage conversations → T-15 |
| 28 | Data redaction (passwords, SSN, CC) | P0 | Auto-redaction, pattern matching |
| 29 | PHI consent flow | P1 | HIPAA consent, tracking |
| 30 | **End-of-Life Data Planning question** | P2 | Onboarding question, options |
| 31 | **Video recording 48h notification before deletion** | P1 | Notification trigger, download option |

---

### PHASE 5: Pitch Polish + Demo Mode 📋 PLANNED

**Outcome:** A polished, repeatable 10-15 minute demo that communicates the vision.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Demo data set (curated clients, sessions, transcripts) | P0 | Seed data, realistic scenarios |
| 2 | Demo mode toggle (load demo data, disable mutations) | P0 | Demo flag, mutation blocking |
| 3 | Demo script (minute-by-minute narrative) | P0 | Script document, cue points |
| 4 | Reset mechanism (one-click reset to clean state) | P0 | Reset command, state restore |
| 5 | Health checks (pre-demo validation) | P1 | Health endpoint, status checks |
| 6 | Recording assets (GIFs/videos for pitch deck) | P1 | Screen recording, editing |

**🆕 RECOMMENDED ADDITION FOR PHASE 5:**

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 7 | **In-Session Support MVP (for demo wow factor)** | P1 | Suggestion bar, basic questions |

---

### PHASE 5.5: In-Session Real-Time Support 📋 PLANNED

**Outcome:** During live video sessions, coaches receive real-time AI suggestions.

| # | Feature | Priority | What to Build |
|---|---------|----------|---------------|
| 1 | Live transcript streaming during session | P0 | Real-time transcription, streaming |
| 2 | Real-time AI suggestions during session | P0 | Suggestion generation, display |
| 3 | Session insights overlay | P1 | Overlay UI, positioning |
| 4 | Topic tracking during session | P1 | Topic detection, tracking |
| 5 | Emotion/sentiment analysis during session | P2 | Sentiment model, indicators |
| 6 | Suggested questions based on conversation | P0 | Question generation, relevance |
| 7 | Inconspicuous bar below camera | P2 | Bar component, eye-contact friendly |
| 8 | "Wise co-pilot whispering in your ear" experience | P2 | Glanceable UX, minimal distraction |

---

### PHASE 6+: Agentic Client Analysis 🔮 VISION

**Outcome:** Privacy-first deep client insight engine.

| Category | Features |
|----------|----------|
| Data Sources | LinkedIn ingestion, email analysis, calendar behavior, text messaging |
| Insight Levels | Patterns, Trajectories, Gaps, Shadow, Becoming, Hard Truths |
| Corporate Features | Admin onboarding, stakeholder approval, aggregate dashboard, ROI metrics |
| Advanced | Cross-domain synthesis, no projection, no fatigue, perfect memory |

---

### PHASE 7+: Wisdom Corpus + Ubiquitous Sage 🔮 VISION

**Outcome:** RAG system for coaching wisdom augmentation, plus multi-device presence.

| Category | Features |
|----------|----------|
| Knowledge | 16 domains, coach methodology embedding, framework-aware responses |
| Attribution | Citation system, source linking, "explain this" |
| Platforms | Mobile app (iOS/Android), desktop app, voice interface |
| Expansion | Wearable integration, multi-device continuity |
| Integrations | Notion, CoachAccountable overlay, Zoom transcript, platform adapters |

## Key Phase Details

### Phase 2: Sage Actions ✅

Core value delivery:
- Generate T-15 pre-session briefing
- Generate post-session notes (5-section format)
- Draft follow-up emails in coach's voice
- Create action items from session transcript
- Suggested actions with confirmation UI

**Recommended Additions (from Gap Analysis):**
- AI Command Bar for notes editing (P0)
- Voice learning from edits (P1)
- Basic Command Center "What's my day?" (P0)
- Private Intelligence Layer basics (P0)
- Client Resource Library basics (P1)
- Coach feedback loop ("This was off" / "Perfect") (P2)

### Phase 3: Web App Redesign + T-15 Prep View

Key screens:
- Dashboard (with smart prioritization front-and-center)
- Client List
- Client Profile (with Private Intelligence Layer)
- Session Notes Editor (with AI Command Bar)
- T-15 Prep View

### Phase 3.5: Coach Onboarding + Voice Profile

**"Scan First, Ask What's Missing" Onboarding Sequence:**

| Step | Action | Sage Behavior |
|------|--------|---------------|
| 1 | Connect data sources | "Let me look at what you've already got..." |
| 2 | AI scouring | Background processing of LinkedIn, website, docs, calendar |
| 3 | Profile presentation | "Here's what I found about you and your practice..." |
| 4 | Inline correction | Coach corrects any errors directly |
| 5 | Gap-filling questions | "I couldn't find [X]. Can you tell me...?" |
| 6 | Completion | Profile complete with minimal coach effort |

**Design Principle:** The coach should feel like Sage already knows them. Onboarding is confirmation and refinement, not interrogation.

### Phase 4.5: Coachee Layer + Privacy Tiers

- Zero-knowledge encryption
- 3-tier consent model
- Coachee control panel
- Data transparency dashboard
- Coachee pre-session preparation prompts
- Between-session intelligence data flow to T-15

### Phase 5: Pitch Polish + Demo Mode

**Recommendation:** Include minimal In-Session Support MVP for demo wow factor:
- Inconspicuous suggestion bar
- Suggested questions (basic)

### Phase 6+: Agentic Client Analysis

Full insight hierarchy:
- LinkedIn data ingestion
- Email pattern analysis
- Calendar behavior analysis
- Tiered revelation model
- Proactive insight generation

### Phase 7+: Wisdom Corpus + Ubiquitous Sage

- 16 Knowledge Domains integration
- Coach methodology embedding
- Framework-aware responses
- Citation and attribution system
- Mobile app (iOS/Android)
- Voice interface
- Wearable integration

---

# PART L: BRAND, DESIGN & UX

## Product Name

**"Sage"** (consult trademark attorney; "ReGenesis" as safer alternative due to Sage Group PLC trademark on accounting software)

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

## Sage Voice & Tone

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

## Confirmed Integration Targets (For Jesse Test Case)

| Integration | Priority | Purpose |
|-------------|----------|---------|
| **Google Calendar** | P0 | Detect sessions, trigger T-15 prep, daily command center |
| **Google Meet** | P0 | Auto-pull transcripts |
| **Google Docs** | P0 | Read/write session notes |
| **Google Drive** | P0 | File storage, access existing docs |
| **Google Sheets** | P1 | Billing export, client tracking |
| **Gmail** | P0 | Send session notes, read client communication |
| **Zoom** | P0 | Import transcripts, access recordings |
| **Fireflies.ai** | P1 | Import transcripts |
| **Calendly** | P1 | Scheduling awareness, calendar invites |
| **Square** | P1 | Billing integration |

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

# APPENDICES

## Appendix A: Wisdom Corpus — Top 200 Priority Books

*Full list available in separate document: WISDOM_CORPUS_RESEARCH.md*

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

---

## Appendix B: Gap Analysis Summary (January 2026)

### Features Added Based on Gap Analysis

| Gap | Feature | Phase |
|-----|---------|-------|
| 1 | AI Command Bar (full spec) | 2 |
| 2 | Client Resource Library (full spec) | 2 |
| 3 | Voice Profile quality indicators | 2/3.5 |
| 4 | Between-Session Intelligence in T-15 | 4.5 |
| 5 | Private Intelligence Layer | 2 |
| 6 | Smart Prioritization in Command Center | 2 |
| 7 | "Scan First" Onboarding Sequence | 3.5 |
| 8 | Coachee Pre-Session Preparation | 4.5 |

### Clarifications Made Explicit

| Item | Clarification |
|------|---------------|
| Tier 3 Drafting vs. Sending | Drafting = auto, Sending = approval |
| T-15 Prep | Never sent, kept open during session |
| Delete Promise | 3 confirmations required, brand promise |
| Video Retention | 48-hour notification before auto-delete |
| Retention Config | Set at onboarding, changeable anytime |

### Phase Adjustments

| Feature | Original | Recommended |
|---------|----------|-------------|
| Voice learning from edits | 3.5 | 2 |
| Basic Command Center | 3 | 2 |
| Client Resource Library | Unphased | 2 |
| In-Session Support MVP | 5.5 | 5 (minimal) |
| Private Intelligence Layer | Unclear | 2 (basics) |

---

## Appendix C: Feedback System

### Routing

| Feedback Type | Route To |
|---------------|----------|
| Bug reports | GitHub Issues or Linear |
| Feature requests | Linear or feedback board |
| Urgent/blocking bugs | Slack channel + auto-create ticket |
| General product feedback | Internal database + periodic digest |
| Coaching-specific feedback | Coach's own notes/profile |

### Urgency Handling

| Level | Interrupt Flow? | Action |
|-------|-----------------|--------|
| Critical | NO | Auto-log, alert team, acknowledge user |
| High | NO | Log, acknowledge, continue |
| Medium | NO | Log silently |
| Low | NO | Log via feedback button |

**Principle:** Never interrupt the sacred coaching space for a bug report.

### Coach Feedback Loop

| Signal | Meaning | System Response |
|--------|---------|-----------------|
| Small edit, no flag | "Right idea, different wording" | Learn voice preferences |
| "This was off" button | "Wrong direction entirely" | Don't repeat this pattern |
| "Perfect" indicator | "Nailed it" | Reinforce this approach |

---

## Appendix D: Open Questions for Team

1. Do the phase adjustments align with technical dependencies?
2. Is the Private Intelligence Layer simple enough for Phase 2?
3. Can a minimal In-Session Support be ready for Phase 5 demo?
4. Any concerns with the "scan first" onboarding approach?
5. What's the minimum viable security certification timeline?
6. How deep does ICF integration go in partnership development?

---

*Generated: January 2026*
*Author: Jesse Torrence with Claude*
*Version: 2.0*

---

**Document History:**
- V1.0 — Original master document
- V2.0 — Comprehensive update incorporating:
  - Team Q&A responses (11 sections)
  - Wisdom Corpus research
  - Gap analysis findings
  - Features-by-phase alignment
  - Missing features analysis
  - All clarifications and phase adjustments

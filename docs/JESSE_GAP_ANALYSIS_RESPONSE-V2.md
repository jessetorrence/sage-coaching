# Jesse's Gap Analysis Response V2
## Review of `missing-features-analysis.md` and `features-by-phase.md` — Updated

**Date:** January 2026
**Reviewer:** Jesse Torrence (with Claude)
**Version:** 2.0 — Major update with all latest specifications

---

## Executive Summary

This document provides a comprehensive update to the original gap analysis response, incorporating:
- **Rename from Sage to ReGenesis** throughout
- **6-section notes template** (Session Recap added as Section 1)
- **Nested/accordion architecture** specification
- **Communication transparency indicators**
- **Coach mobile app** requirements
- **LLM architecture recommendations** (Claude-first strategy)
- **Legal & compliance framework** additions
- **Enhanced privacy/security features**

This document outlines:
- **12 True Gaps** — Features missing or needing specification (expanded from 8)
- **7 Articulation Issues** — Captured but need clarification (expanded from 5)
- **6 Phasing Recommendations** — Suggested timeline adjustments
- **10 Additional Recommendations** — Enhancements to consider (expanded from 6)

---

# PART 1: TRUE GAPS (Missing Features)

## Gap 1: Session Notes — 6-Section Format (Updated)

**Status:** Original spec had 5 sections; now requires 6

**The Feature:** Session Notes should follow this **6-section format**:

| Section | Content | Purpose |
|---------|---------|---------|
| **1. Session Recap** | Chronological flow of what was discussed — core ideas, key phrases, verbatim quotes | New section. Not a dialogue, but captures essence. Balance detail: comprehensive but scannable. |
| **2. Observations, Insights & Analysis** | Patterns, breakthroughs, psychological framing | Deep synthesis from master coach perspective |
| **3. Inquiries for Growth** | ≤5 piercing questions for reflection | Reframe binary thinking, invoke counterfactuals |
| **4. Invitations to Action** | Behavioral commitments with specificity | Small but powerful. Precise parameters. |
| **5. Resources / Tools / Follow-up** | Relevant materials, frameworks, guides | Hyperlinked to Resource Library |
| **6. Next Meeting & Future Focus** | Upcoming session prep | Date/time, potential focus areas |

**Key Addition:** Section 1 (Session Recap) captures the chronological flow of the session. It's an outline-style summary that gives the coachee a quick reminder of what was discussed, with key quotes and moments highlighted.

**Priority:** P0 — This is the core deliverable

**Target Phase:** Phase 2

---

## Gap 2: Nested/Accordion Architecture — Full Specification

**Status:** Not explicitly specified in original analysis

**The Feature:** All data displays throughout the platform use a **nested/accordion structure** that allows drill-down from high-level summary to exact source.

### Application Areas:

| Context | Nested Levels |
|---------|---------------|
| **Session Notes** | Summary → Section Headings → Key Points → Full Detail → Exact Quote → Video Timestamp |
| **T-15 Between-Session Intelligence** | Conversation List → Key Themes → Emotional Moments → Full Transcript |
| **Pattern Recognition** | Pattern Summary → Evidence List → Individual Instances → Exact Quotes → Timestamps |
| **Wisdom Corpus Citations** | Insight → Source Attribution → Full Quote → Book/Chapter Reference |

### Specification:

```
Example: Session Notes

Session Recap (click to expand)
├── Check-in: Feeling overwhelmed
│   ├── "I'm ruminating, having trouble sleeping"
│   │   └── [Jump to 3:45 in recording]
│   └── "I don't know how to drive" (metaphor for life)
│       └── [Jump to 5:22 in recording]
├── Topic 1: Promotion Decision
│   ├── Key tension: fear of visibility vs. desire for growth
│   │   └── [Jump to 12:30 in recording]
│   └── "What if they find out I don't belong?"
│       └── [Jump to 18:45 in recording]
└── Topic 2: Relationship with Father
    └── [Click to expand full detail]
```

**Benefit:** Coachee (and coach) can:
- Get the gist at a glance
- Drill down to any level of detail
- Trace insights back to the exact moment spoken
- Access recordings within retention window

**Priority:** P0 — Core UX principle

**Target Phase:** Phase 2 (basic), refined in Phase 3

---

## Gap 3: AI Command Bar — Explicit Specification

**Status:** Referenced in D6.1 but needs explicit specification

**The Feature:** The Session Notes Editor should have an AI command bar where coach types natural language editing commands.

**Specification to Add:**

| Command Type | Example | Result |
|--------------|---------|--------|
| Tone adjustment | "make warmer" / "more direct" / "softer" | Rewrites selected section with adjusted tone |
| Content addition | "add resource about boundaries" | Inserts relevant resource with context |
| Content removal | "remove the part about his father" | Deletes specified content |
| Section modification | "shorten the action items" / "expand observations" | Adjusts section length |
| Voice correction | "this doesn't sound like me" | Regenerates in coach's voice |
| Specific edits | "change 'you should' to 'you might consider'" | Direct text replacement |

**Priority:** P0 — This is critical to the notes editing experience, not P1.

**Target Phase:** Phase 2 (with notes generation)

---

## Gap 4: Communication Transparency Indicators

**Status:** Not specified in original analysis

**The Feature:** All communications sent through ReGenesis must include a clear indicator of origin.

**Specification:**

| Indicator | Meaning | Visual |
|-----------|---------|--------|
| **"From [Coach Name]"** | Coach wrote directly, no AI involvement | 👤 |
| **"AI-drafted, reviewed by [Coach Name]"** | AI drafted, coach edited/approved | 🤖✓ |
| **"From ReGenesis"** | AI only, coach not in loop (for approved autonomous actions) | 🤖 |

**Purpose:** Full transparency so coachee knows the nature of each communication. Builds trust and authentic relationship.

**Priority:** P1 — Important for trust

**Target Phase:** Phase 2

---

## Gap 5: Client Resource Library — Full Specification

**Status:** D6.3 mentions single line item; needs full spec

**The Feature:** Each client has a Resource Library where all shared materials are stored, searchable, and accessible.

### Specification to Add:

**Architecture:**

| Aspect | Specification |
|--------|---------------|
| **Structure** | Per-client library (not global) |
| **Contents** | Ancillary documents, frameworks, guides, links, PDFs, any resource ever shared |
| **Population** | Built over time as coach shares resources; some starter templates available |
| **Access** | Coach can browse/search; Coachee can access their own library |
| **Search & Filter** | By type, date, topic, keywords, themes |

**Capabilities:**

| # | Capability | Priority | Phase |
|---|------------|----------|-------|
| 1 | Per-client resource storage | P1 | 2 |
| 2 | Search/filter by type, date, topic | P1 | 2 |
| 3 | Hyperlink resources in session notes | P1 | 2 |
| 4 | Coachee access to their library | P1 | 4.5 |
| 5 | Resource versioning (track updates) | P2 | 3 |
| 6 | Bulk upload capability | P2 | 3 |
| 7 | Starter template library (5-10 common frameworks) | P2 | 2 |

**Note:** Most resources are AI-generated on an as-needed basis for each client. The library grows organically as the coaching relationship develops.

---

## Gap 6: Voice Profile — Quality Indicators

**Status:** D13 covers basics; missing quality/confidence metrics

**The Feature:** Voice profile should include confidence indicators and remediation path.

### Specification to Add:

| # | Capability | Priority | Phase |
|---|------------|----------|-------|
| 1 | Minimum sample threshold indicator ("Need 3+ writing samples for reliable matching") | P1 | 3.5 |
| 2 | Sample diversity guidance ("Include: emails, notes, casual messages") | P1 | 3.5 |
| 3 | Voice match confidence meter (visual indicator on generated content) | P2 | 3.5 |
| 4 | "This doesn't sound like me" override button | P1 | 2 |
| 5 | Continuous learning from coach edits | P1 | 2 |

**Clarification:** Voice matching refers to **written tone**, not audio. Coach feeds ReGenesis their past notes, emails, text messages, and other writing samples during onboarding to train the voice profile.

**Target Phase:** Basics in Phase 2 (learning from edits), full profile system in Phase 3.5

---

## Gap 7: Between-Session Intelligence in T-15 Prep

**Status:** D5.8 mentions it; data flow needs explicit connection

**The Feature:** Coachee-ReGenesis conversations between sessions should automatically appear in T-15 prep with **nested/accordion structure**.

### Specification to Add:

**Data Flow:**
```
Coachee talks to ReGenesis (between sessions)
    ↓
ReGenesis summarizes key moments, insights, emotions
    ↓
Summary auto-populates "Between-Session Intelligence" section of T-15 prep
    ↓
Coach sees before next session (no manual lookup required)
    ↓
Coach can drill down through nested levels to full transcript
```

**T-15 "Between-Session Intelligence" Section Format:**

```
💬 Between-Session Intelligence (3 conversations)

Jan 14: Promotion anxiety (20 min) [click to expand]
├── Key themes: Fear of visibility, imposter feelings
├── Emotional moments: First time expressed anger directly
├── Coach insight: Pattern matches father relationship
└── [Full conversation transcript]

Jan 12: Boundary conversation follow-up (10 min) [click to expand]
├── Marked commitment incomplete (3rd time)
├── Stated reason: "The timing wasn't right"
└── [Full conversation transcript]

Jan 10: Journal entry — unusually vulnerable [click to expand]
└── [Full entry text]
```

**Privacy Note:** Coachee can **redact** any conversation from coach view. This creates a safe space for things they're not ready to share.

**Priority:** P1

**Target Phase:** Phase 4.5 (with coachee layer) — but ensure T-15 prep format in Phase 3 has placeholder for this section

---

## Gap 8: Coach's Private Intelligence Layer — Earlier Phase

**Status:** D25 mentions it; currently mapped to Phase 2 which may be too early, or Phase 3 which may be too late

**The Feature:** On each Client Profile, a private section only coach sees with ReGenesis's observations and coach's own notes.

**Jesse's Position:** This should be in the **earliest possible phase** for demos. It's not technically complicated — it's just a private section on the client profile page.

### Specification:

**Location:** Client Profile page (prominent but private)

**Structure:**
```
📝 Private Intelligence (Coach + ReGenesis)

🎯 ReGenesis's Current Read:
[Auto-generated assessment of where client is right now]

🤖 ReGenesis Observations (auto-updated):
• [Date]: [Observation] [click to see evidence]
• [Date]: [Observation] [click to see evidence]
• [Date]: [Observation] [click to see evidence]

✍️ Your Private Notes:
[Coach's manual hypotheses, observations, reminders to self]

💬 Between-Session Intelligence:
[Summary of coachee-ReGenesis interactions since last session]
```

**Capabilities:**

| # | Capability | Priority | Phase |
|---|------------|----------|-------|
| 1 | Private notes section (coach manual entry) | P0 | 2 |
| 2 | ReGenesis observations auto-populated | P1 | 2 |
| 3 | ReGenesis's Current Read (synthesized assessment) | P1 | 3 |
| 4 | Between-Session Intelligence integration | P1 | 4.5 |

**Target Phase:** Phase 2 for basics (critical for early demos), enhanced in Phase 3

---

## Gap 9: Smart Prioritization in Command Center

**Status:** D4 captures components; missing AI prioritization

**The Feature:** The Daily Command Center shouldn't just show lists — it should **proactively prioritize** what matters most right now.

### Specification to Add:

| # | Capability | Priority | Phase |
|---|------------|----------|-------|
| 1 | AI-prioritized "Focus Now" recommendation | P0 | 2 |
| 2 | Priority reasoning ("Marcus at 2pm — he's been struggling") | P1 | 2 |
| 3 | Cross-domain awareness (coach's goals, tasks, all clients) | P1 | 3 |
| 4 | Front-and-center attention-grabbing placement on dashboard | P0 | 2 |

**Example Output:**
```
🎯 FOCUS NOW
Your most important prep: Marcus Chen at 2pm
→ He's been struggling with the promotion decision
→ Commitment incomplete 3rd time (boundary conversation)
→ Had emotional ReGenesis conversation yesterday

[Open T-15 Prep]
```

**Target Phase:** Phase 2 — Critical for early demos.

---

## Gap 10: Coach Mobile App

**Status:** Not specified in original analysis

**The Feature:** Full platform functionality adapted for mobile with chat bar and voice interaction.

### Specification:

**Core Capabilities:**

| # | Capability | Priority | Phase |
|---|------------|----------|-------|
| 1 | Chat bar interface (like ChatGPT/Claude apps) | P0 | 4 |
| 2 | Voice interaction (speak commands, get responses) | P1 | 4 |
| 3 | Full dashboard access (mobile-adapted) | P1 | 4 |
| 4 | Quick logging ("Log thought about Sarah") | P0 | 4 |
| 5 | Send resources via text/email | P1 | 4 |
| 6 | View T-15 prep on mobile | P0 | 4 |
| 7 | Offline capability (queue commands) | P2 | 5 |

**Use Case:** Coach walking, thinking about client, opens app: "Hey, I'm realizing Sarah might benefit from the Drama Triangle framework. Log this in her private notes and suggest it for our next T-15 prep." Done.

**Priority:** P1 — Important for coach experience

**Target Phase:** Phase 4 (with external site integrations)

---

## Gap 11: Coach's Personal Goals & Priorities Section

**Status:** Not specified in original analysis

**The Feature:** At the bottom of the coach's dashboard, a section for the coach's own life across all areas.

### Specification:

**Dashboard Section:**
```
🌟 YOUR LIFE PRIORITIES

Professional Growth & Leadership
├── ICF PCC certification progress: 127/500 hours
└── Next action: Schedule mentor coaching session

Health & Wellbeing
├── Annual physical: Overdue
└── Next action: Book appointment

Relationships & Family
├── [Personal items]
└── Next action: [Specific action]

Financial Security
├── Q1 invoicing: 3 clients pending
└── Next action: Send invoices

[+ Personal Growth, Community & Impact, etc.]
```

**Principle:** The coach's app helps them live a whole, integrated life — not just run their practice. Anything automatable should be delegated to AI agents.

**Priority:** P2 — Nice to have for demo

**Target Phase:** Phase 3

---

## Gap 12: "Scan First, Ask What's Missing" Onboarding Sequence

**Status:** D3 captures AI profile generation; sequencing philosophy not explicit

**The Feature:** Onboarding should follow this specific sequence:

1. Connect data sources first
2. AI scours and builds profile automatically
3. Shows "Here's what I found"
4. **Only then** asks questions to fill gaps

### Specification to Add:

**Onboarding Sequence (Explicit):**

| Step | Action | ReGenesis Behavior |
|------|--------|-------------------|
| 1 | Connect data sources | "Let me look at what you've already got..." |
| 2 | AI scouring | Background processing of LinkedIn, website, docs, calendar |
| 3 | Profile presentation | "Here's what I found about you and your practice..." |
| 4 | Inline correction | Coach corrects any errors directly |
| 5 | Gap-filling questions | "I couldn't find [X]. Can you tell me...?" |
| 6 | Completion | Profile complete with minimal coach effort |

**Design Principle:** The coach should feel like ReGenesis already knows them. Onboarding is confirmation and refinement, not interrogation.

**Priority:** P0 — Core design principle

**Target Phase:** Phase 3.5

---

# PART 2: ARTICULATION CLARIFICATIONS

## Issue A: Tier 3 — Drafting vs. Sending

**Clarification Needed:** Make absolutely explicit that:

- **Drafting** session notes and T-15 prep = **Automatic** (Tier 1 behavior)
- **Sending** session notes to coachee = **Requires approval** (Tier 3)

**Suggested Language:**
> "ReGenesis auto-drafts all content (notes, T-15 prep, ancillary docs) without permission. Coach approval is only required for **sending** content to the coachee or taking external actions."

**Action:** Please verify this is clearly understood in implementation specs.

---

## Issue B: T-15 Prep — Never Sent, Kept Open During Session

**Clarification Needed:** T-15 prep is:
1. For coach's eyes only
2. **Never** sent to coachee
3. Meant to be kept open (if coach wants) to guide them into and during the session

**Suggested Language:**
> "T-15 Prep is a coach-only view. It is never sent to anyone. Coaches can keep it open during the session as a reference guide, or close it — their choice."

---

## Issue C: "Delete Means Delete" — Brand Promise

**Clarification Needed:** This should be documented as a **marketing/brand promise**, not just a technical feature.

**Suggested Language:**
> "**The Evaporation Promise:** Delete means delete. Not archived. Not recoverable. Gone. This is a core trust differentiator — when users delete their data, it's immediately and permanently erased."

**Critical UX Requirement:** Users must be given **3 separate confirmation steps** before deletion executes:

1. **First warning:** "This will permanently delete [X]. This cannot be undone."
2. **Second confirmation:** "Are you absolutely sure? Type DELETE to confirm."
3. **Final confirmation:** "Last chance — this action is irreversible. [Cancel] [Delete Forever]"

---

## Issue D: Video Recording Notification Before Deletion — ENHANCED

**Clarification Needed:** The 2-week video retention policy should include **multiple notifications**:

| Timing | Notification |
|--------|-------------|
| 48 hours before | First warning with download option |
| 24 hours before | Second reminder |
| Right before (within 1 hour) | Final notification |

**Suggested Language:**
> "Video recordings auto-delete after 2 weeks. Coachee receives notifications at 48 hours, 24 hours, and right before deletion with option to download. Countdown visible in their data dashboard."

---

## Issue E: Retention Configured at Onboarding

**Clarification Needed:** Retention preferences should be:
- Presented during onboarding (not buried in settings)
- Configurable by coachee
- Changeable anytime later

**Suggested Language:**
> "During coachee onboarding, present retention preferences as a clear choice: 'How long would you like us to keep your data?' Options: 1 year, 3 years, 7 years (default), indefinitely. This can be changed anytime in settings."

---

## Issue F: Coachee Redaction Controls

**Clarification Needed:** Coachees must be able to hide specific AI conversations from coach.

**Suggested Language:**
> "You can share anything with ReGenesis in Tier 1 — even things you're not ready to tell your coach. This is a completely private space. Your coach will never see Tier 1 content unless you explicitly move it to Tier 2. You can also redact specific conversations from the coach's Between-Session Intelligence summary."

---

## Issue G: Settings Page — Voice Controllable

**Clarification Needed:** Settings should be comprehensive but not buried.

**Suggested Language:**
> "The Settings page is visually comprehensive — all settings laid out clearly. But users can also just tell ReGenesis what they want: 'Change my notification preference to mornings only.' ReGenesis confirms and executes. No digging through menus like Zoom."

---

# PART 3: PHASING RECOMMENDATIONS

## Rec 1: Voice Profile Basics — Move to Phase 2

**Current:** Phase 3.5 (Weeks 12-14)

**Recommendation:** Move **voice learning from edits** to Phase 2.

**Rationale:** Without any voice matching, Phase 2 notes generation will feel generic. The system should start learning from coach edits immediately in Phase 2. Full voice profile training can remain in Phase 3.5.

| Capability | Recommended Phase |
|------------|-------------------|
| Learning from coach edits | Phase 2 |
| "This doesn't sound like me" override | Phase 2 |
| Writing sample upload | Phase 3.5 |
| Style analysis | Phase 3.5 |
| Voice confidence indicator | Phase 3.5 |

---

## Rec 2: Command Center — Move to Phase 2

**Current:** Phase 3

**Recommendation:** Move basic Command Center to **Phase 2**.

**Rationale:** "What's my day look like?" with smart prioritization is critical for early demos. Even a simple version demonstrates the value proposition.

| Capability | Recommended Phase |
|------------|-------------------|
| "What's my day?" query response | Phase 2 |
| AI-prioritized focus recommendation | Phase 2 |
| Today's sessions with context | Phase 2 |
| Full visual dashboard | Phase 3 |
| Client Pulse, Outstanding Actions | Phase 3 |

---

## Rec 3: Client Resource Library — Phase 2

**Current:** Not explicitly phased

**Recommendation:** Basic Resource Library in **Phase 2** alongside notes generation.

**Rationale:** Ancillary documents need somewhere to be stored. Even a simple per-client storage with search is needed before generating resources.

---

## Rec 4: In-Session Support — MVP for Phase 5 Demo

**Current:** Phase 5.5 (Weeks 20-22), after Pitch Polish

**Recommendation:** Create **minimal MVP** for Phase 5 demo.

**Rationale:** "Wise co-pilot whispering in your ear" is a major wow factor. If it's after pitch polish phase, it won't be in investor demos.

| Capability | Phase 5 MVP | Phase 5.5 Full |
|------------|-------------|----------------|
| Inconspicuous suggestion bar | ✓ | ✓ |
| Suggested questions (basic) | ✓ | ✓ |
| Expandable side panel for frameworks | — | ✓ |
| Pattern recognition callouts | — | ✓ |
| Quick queries during session | — | ✓ |

---

## Rec 5: Outlook/Microsoft Integrations — Phase 4

**Current:** Not explicitly prioritized

**Recommendation:** Add Microsoft ecosystem to **Phase 4** alongside Google.

**Rationale:** Enterprise clients often use Outlook/Teams/OneDrive. Critical for B2B sales.

| Integration | Phase |
|-------------|-------|
| Outlook Calendar | Phase 4 |
| Outlook Email | Phase 4 |
| OneDrive/SharePoint | Phase 4 |
| Microsoft Teams | Phase 4 (if time) |

---

## Rec 6: Legal Disclosure — Phase 4.5

**Current:** Not specified

**Recommendation:** Include legal disclosure during coachee onboarding in **Phase 4.5**.

**Rationale:** Need clear language about privacy, employer data protection, and mandatory reporting exceptions before launching coachee layer.

---

# PART 4: ADDITIONAL RECOMMENDATIONS

## Rec A: LLM Architecture — Claude-First Strategy

**The Recommendation:** Use Claude as primary LLM for all coaching-quality outputs.

**Architecture:**

| Function | Recommended Model | Why |
|----------|-------------------|-----|
| **Session Notes Generation** | **Claude Opus 4.5** | Highest quality writing, deepest analysis. Beautiful, eloquent coaching voice. |
| **Observations/Insights/Patterns** | **Claude Opus 4.5** | Heart of the product. Deep psychological framing. |
| **T-15 Prep Summaries** | **Claude Sonnet 4.5** | Good quality, faster, cheaper for routine summaries. |
| **24/7 Coachee Companion Chat** | **Claude Sonnet 4.5** | Conversational, empathetic. |
| **Coach Quick Tasks** | **Claude Haiku 4.5** | Fast, cheap for simple requests. |
| **Administrative/Functional** | **GPT-4o or Haiku** | Scheduling, email drafts, CRM updates. |

**Wisdom Corpus RAG:**
- Embedding: text-embedding-3-large (OpenAI) or Mistral Embed
- Vector DB: Pinecone / Weaviate / Chroma
- Generation: Claude Sonnet 4.5
- Framework: LlamaIndex

**Priority:** P0 — Core architecture decision

**Target Phase:** Phase 2 (basic), refined ongoing

---

## Rec B: Confidence Indicators — Simplified Approach

**Original Suggestion:** Multi-level confidence indicators (High/Medium/Low)

**Jesse's Preference:** Simpler approach without reducing user trust.

**Recommended Implementation:**

| Element | Behavior |
|---------|----------|
| Default | ReGenesis presents content confidently |
| Visual indicator | Subtle confidence meter (clickable) |
| On click | Opens dialogue: "Where did you get this? How confident are you?" |
| ReGenesis explains | Sources, reasoning, confidence level in natural language |
| Future integration | Links to Wisdom Corpus citations when available |

**Avoid:** Language like "I'm not sure but..." which undermines trust.

**Use:** "Based on [source], I believe..." or visual indicators that invite exploration.

---

## Rec C: "Explain This" / Attribution Feature

**The Feature:** User can ask ReGenesis "Why did you suggest this?" or "Where did this come from?"

**Response includes:**
- Source (transcript moment, pattern across sessions, Wisdom Corpus)
- Reasoning chain
- Confidence level
- Links to original content

**Priority:** P1

**Target Phase:** Phase 3 (basic), enhanced with Wisdom Corpus in Phase 7+

---

## Rec D: Coach "Disagree" Feedback Loop

**The Feature:** When coach significantly edits ReGenesis's output, lightweight signal for learning.

**Implementation:**

| Signal | Meaning | System Response |
|--------|---------|-----------------|
| Small edit, no flag | "Right idea, different wording" | Learn voice preferences |
| "This was off" button | "Wrong direction entirely" | Don't repeat this pattern |
| "Perfect" indicator | "Nailed it" | Reinforce this approach |

**Priority:** P2

**Target Phase:** Phase 2 (simple), enhanced in Phase 3.5

---

## Rec E: Proactive Pattern Surfacing

**The Feature:** ReGenesis shouldn't wait to be asked — it should occasionally surface patterns proactively.

**Implementation:**
- ReGenesis notices pattern across sessions
- Surfaces in chat: "I've noticed something across your last 5 sessions with Sarah..."
- Coach can acknowledge, dismiss, or add to Private Notes
- If coach agrees, observation goes to Private Intelligence section

**Example:**
```
💡 ReGenesis noticed something:

"Across the last 5 sessions, Sarah has mentioned feeling
'invisible' 7 times — always in work contexts, never in
personal relationships. This might be worth exploring."

[See evidence] [Add to Private Notes] [Dismiss] [Tell me more]
```

**Priority:** P1

**Target Phase:** Phase 3

---

## Rec F: "5-Minute Promise" — Prominent Positioning

**The Feature:** "Within 5 minutes of transcript arriving, your notes are ready."

**Recommendation:** Make this a prominent brand promise.

**Marketing Language:**
> "Session ends. Notes appear. 5 minutes or less."

**Future:** As system improves, this could become "3 minutes or less."

**Priority:** P0 — Core value proposition

---

## Rec G: Coachee Pre-Session Prep — Responses to T-15

**The Feature:** Coachee receives prompts 24h and 1h before session; responses appear in coach's T-15.

**24-Hour Prompts:**
| Prompt | Purpose |
|--------|---------|
| "What are you celebrating?" | Agency, wins |
| "What are you grateful for?" | Positive frame |
| "What would make this session powerful?" | Focus |
| "Most important topic?" | Prioritization |

**Data Flow:**
```
Coachee responds → Summarized → Appears in T-15 "Coachee Pre-Session Input"
```

**Priority:** P1

**Target Phase:** Phase 4.5

---

## Rec H: Legal Compliance Framework

**The Recommendation:** Include legal research findings in product specs.

**Key Points to Address:**
1. Coaching vs. therapy legal distinction
2. Mandatory reporting policy (with exceptions listed)
3. Employer-sponsored data protection architecture
4. Onboarding disclosure language

**Priority:** P1 for coachee layer

**Target Phase:** Phase 4.5

---

## Rec I: Wisdom Corpus 16 Domains

**The Recommendation:** Explicitly document the 16 knowledge domains and tagging structure.

**16 Domains:**
1. Consciousness, Mind & Psychology
2. Personal Development & Well-Being
3. Family, Love & Relationships
4. Leadership & Management Sciences
5. Community Organizing, Civic Action & Democracy
6. Society, Politics, Law & Economics
7. Systems Thinking & Complexity
8. Ecology & Deep Ecology
9. Philosophy & Ethics
10. Religion, Spirituality & Myth
11. Education & Learning
12. Culture, Language & Anthropology
13. Literature, Art & Aesthetics
14. Science, Technology & Cosmology
15. Health, Healing & Somatics
16. Time, Death & Transcendence

**Tagging Structure (from Airtable):**
- Developmental tags (ITQ, Spiral Dynamics, Kegan)
- Epistemological tags (ways of knowing, evidence base)
- Application tags (coaching use cases, contraindications)

**Priority:** P1 for Phase 7+

**Target Phase:** Phase 7+

---

## Rec J: In-Session Expandable Side Panel

**The Feature:** During live sessions, when ReGenesis suggests a framework, coach can click "Show me" to open a resizable, draggable side panel.

**Capabilities:**
- Positioned near camera for eye-contact maintenance
- Resizable larger or smaller
- Draggable to different screen locations
- Minimizable when not needed

**Priority:** P2

**Target Phase:** Phase 5.5

---

# SUMMARY: Action Items for Team

## Immediate Documentation Updates

| Item | Action |
|------|--------|
| 6-Section Notes Template | Add Session Recap as Section 1 (Gap 1) |
| Nested/Accordion Architecture | Add full specification (Gap 2) |
| AI Command Bar | Add full specification (Gap 3) |
| Communication Transparency | Add indicator spec (Gap 4) |
| Client Resource Library | Add full specification (Gap 5) |
| Voice Profile Quality | Add confidence indicators (Gap 6) |
| Between-Session Intelligence | Document data flow with nesting (Gap 7) |
| Private Intelligence Layer | Confirm Phase 2 placement (Gap 8) |
| Command Center Prioritization | Add smart focus feature (Gap 9) |
| Coach Mobile App | Add full specification (Gap 10) |
| Coach's Personal Goals | Add dashboard section (Gap 11) |
| Onboarding Sequence | Document "scan first" philosophy (Gap 12) |

## Clarifications to Make Explicit

| Item | Clarification |
|------|---------------|
| Tier 3 Drafting vs. Sending | Drafting = auto, Sending = approval |
| T-15 Prep | Never sent, kept open during session |
| Delete Promise | 3 confirmations required, brand promise |
| Video Retention | 48h, 24h, and right-before notifications |
| Retention Config | Set at onboarding, changeable anytime |
| Coachee Redaction | Can hide conversations from coach |
| Settings Page | Voice-controllable, not buried |

## Phase Adjustments to Consider

| Feature | Current Phase | Recommended |
|---------|---------------|-------------|
| Voice learning from edits | 3.5 | 2 |
| Basic Command Center | 3 | 2 |
| Client Resource Library | Unphased | 2 |
| In-Session Support MVP | 5.5 | 5 (minimal) |
| Private Intelligence Layer | Unclear | 2 (basics) |
| Outlook/Microsoft | Unphased | 4 |
| Legal Disclosure | Unphased | 4.5 |

## New Architecture Decisions

| Decision | Recommendation |
|----------|----------------|
| Primary LLM | Claude (Opus for notes, Sonnet for chat) |
| RAG Framework | LlamaIndex |
| Embedding Model | text-embedding-3-large (OpenAI) |
| Vector Database | Pinecone / Weaviate / Chroma |

---

*Generated: January 2026*
*Author: Jesse Torrence with Claude*
*Version: 2.0*

---

**Document History:**
- V1.0 — Original gap analysis response (8 gaps, 5 clarifications, 4 phasing recs, 6 additional recs)
- V2.0 — Comprehensive update incorporating:
  - Renamed from Sage to **ReGenesis** throughout
  - **12 gaps** (expanded from 8)
  - **7 clarifications** (expanded from 5)
  - **6 phasing recommendations** (adjusted)
  - **10 additional recommendations** (expanded from 6)
  - **LLM architecture** (Claude-first)
  - **Legal framework** additions
  - **16 knowledge domains** documentation
  - All research findings from trademark, legal, and LLM analysis

---

**Questions for Team:**

1. Do the phase adjustments align with technical dependencies?
2. Is the nested/accordion architecture achievable with current stack?
3. Can coach mobile app share codebase with web extension?
4. Any concerns with the "scan first" onboarding approach?
5. LlamaIndex vs LangChain preference for RAG?
6. Timeline for SOC 2 certification?

---

**Ready for GitHub push upon Jesse's approval.**

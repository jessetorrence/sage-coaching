# Jesse's Gap Analysis Response
## Review of `missing-features-analysis.md` and `features-by-phase.md`

**Date:** January 2026
**Reviewer:** Jesse Torrence (with Claude)

---

## Executive Summary

Excellent work on both documents. The categorization of features vs. design principles is clean and accurate. The phasing is logical. Approximately 95% of features are correctly captured.

This document outlines:
- **8 True Gaps** — Features missing from the analysis
- **5 Articulation Issues** — Captured but need clarification
- **4 Phasing Recommendations** — Suggested timeline adjustments
- **6 Additional Recommendations** — Enhancements to consider

---

# PART 1: TRUE GAPS (Missing Features)

## Gap 1: AI Command Bar — Explicit Specification Needed

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

## Gap 2: Client Resource Library — Full Specification

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

**Note:** Most resources are AI-generated on an as-needed basis for each client. The library grows organically as the coaching relationship develops. A small set of universal starter templates (5-10 commonly used frameworks) can be pre-loaded.

---

## Gap 3: Voice Profile — Quality Indicators

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

**Clarification:** Voice matching refers to **written tone**, not audio. Coach feeds Sage their past notes, emails, text messages, and other writing samples during onboarding to train the voice profile.

**Target Phase:** Basics in Phase 2 (learning from edits), full profile system in Phase 3.5

---

## Gap 4: Between-Session Intelligence in T-15 Prep

**Status:** D5.8 mentions it; data flow needs explicit connection

**The Feature:** Coachee-Sage conversations between sessions should automatically appear in T-15 prep.

### Specification to Add:

**Data Flow:**
```
Coachee talks to Sage (between sessions)
    ↓
Sage summarizes key moments, insights, emotions
    ↓
Summary auto-populates "Between-Session Intelligence" section of T-15 prep
    ↓
Coach sees before next session (no manual lookup required)
```

**T-15 "Between-Session Intelligence" Section Should Include:**

| Item | Example |
|------|---------|
| Conversation summary | "Jan 14: 20-min conversation about promotion anxiety" |
| Key emotional moments | "Expressed frustration with boss for first time" |
| Commitment updates | "Marked 'boundary conversation' as incomplete (3rd time)" |
| Journal entries (if used) | "Jan 10: Journaled about imposter feelings — unusually vulnerable" |
| Coachee-initiated context | "Shared: 'I got the promotion'" |

**Priority:** P1

**Target Phase:** Phase 4.5 (with coachee layer) — but ensure T-15 prep format in Phase 3 has placeholder for this section

---

## Gap 5: Coach's Private Intelligence Layer — Earlier Phase

**Status:** D25 mentions it; currently mapped to Phase 2 which may be too early, or Phase 3 which may be too late

**The Feature:** On each Client Profile, a private section only coach sees with Sage's observations and coach's own notes.

**Jesse's Position:** This should be in the **earliest possible phase** for demos. It's not technically complicated — it's just a private section on the client profile page to store insights/observations from both coach and Sage.

### Specification:

**Location:** Client Profile page (prominent but private)

**Structure:**
```
📝 Private Intelligence (Coach + Sage)

🎯 Sage's Current Read:
[Auto-generated assessment of where client is right now]

🤖 Sage Observations (auto-updated):
• [Date]: [Observation]
• [Date]: [Observation]
• [Date]: [Observation]

✍️ Your Private Notes:
[Coach's manual hypotheses, observations, reminders to self]

💬 Between-Session Intelligence:
[Summary of coachee-Sage interactions since last session]
```

**Capabilities:**

| # | Capability | Priority | Phase |
|---|------------|----------|-------|
| 1 | Private notes section (coach manual entry) | P0 | 2 |
| 2 | Sage observations auto-populated | P1 | 2 |
| 3 | Sage's Current Read (synthesized assessment) | P1 | 3 |
| 4 | Between-Session Intelligence integration | P1 | 4.5 |

**Target Phase:** Phase 2 for basics (critical for early demos), enhanced in Phase 3

---

## Gap 6: Smart Prioritization in Command Center

**Status:** D4 captures components; missing AI prioritization

**The Feature:** The Daily Command Center shouldn't just show lists — it should **proactively prioritize** what matters most right now, GTD-style "what's the single next action?"

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
→ Had emotional Sage conversation yesterday

[Open T-15 Prep]
```

**Target Phase:** Phase 2 — This is critical for early demos. Even a simple "What's my day?" with smart prioritization shows the coach experience.

---

## Gap 7: "Scan First, Ask What's Missing" Onboarding Sequence

**Status:** D3 captures AI profile generation; sequencing philosophy not explicit

**The Feature:** Onboarding should follow this specific sequence:

1. Connect data sources first
2. AI scours and builds profile automatically
3. Shows "Here's what I found"
4. **Only then** asks questions to fill gaps

### Specification to Add:

**Onboarding Sequence (Explicit):**

| Step | Action | Sage Behavior |
|------|--------|---------------|
| 1 | Connect data sources | "Let me look at what you've already got..." |
| 2 | AI scouring | Background processing of LinkedIn, website, docs, calendar |
| 3 | Profile presentation | "Here's what I found about you and your practice..." |
| 4 | Inline correction | Coach corrects any errors directly |
| 5 | Gap-filling questions | "I couldn't find [X]. Can you tell me...?" |
| 6 | Completion | Profile complete with minimal coach effort |

**Design Principle:** The coach should feel like Sage already knows them. Onboarding is confirmation and refinement, not interrogation.

**Priority:** P0 — This is a core design principle, not just a feature.

**Target Phase:** Phase 3.5

---

## Gap 8: Coachee Pre-Session Preparation

**Status:** Not explicitly captured

**The Feature:** Coachees should receive preparation prompts before their session to maximize session effectiveness.

### Specification to Add:

**Timing:**
- 24 hours before session: First reminder + prep prompts
- 1 hour before session (or configurable): Final reminder + quick check-in

**24-Hour Pre-Session Prompt Content:**

| Prompt | Purpose |
|--------|---------|
| "What are you celebrating?" | Agency, wins, progress toward goals |
| "What are you grateful for today?" | Positive frame, presence |
| "What would make this session powerful?" | Focus, intention-setting |
| "What's the most important topic you want to discuss?" | Prioritization |
| [Link to last session notes] | Continuity |
| [Link to commitments from last session] | Accountability |

**1-Hour Pre-Session Prompt:**
- Quick check-in: "How are you feeling heading into today's session?"
- Final focus: "Anything shifted since yesterday?"

**Data Flow:**
```
Coachee responds to prompts
    ↓
Responses summarized
    ↓
Appear in coach's T-15 prep under "Coachee Pre-Session Input"
```

**Benefit:** Coach saves significant time getting into the main work because coachee arrives prepared and focused.

**Priority:** P1

**Target Phase:** Phase 4.5 (with coachee layer)

---

# PART 2: ARTICULATION CLARIFICATIONS

## Issue A: Tier 3 — Drafting vs. Sending

**Clarification Needed:** Make absolutely explicit that:

- **Drafting** session notes and T-15 prep = **Automatic** (Tier 1 behavior)
- **Sending** session notes to coachee = **Requires approval** (Tier 3)

**Suggested Language:**
> "Sage auto-drafts all content (notes, T-15 prep, ancillary docs) without permission. Coach approval is only required for **sending** content to the coachee or taking external actions."

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

**Critical UX Requirement:** Users must be given **3 separate confirmation steps** before deletion executes, so they don't accidentally delete all their data:

1. **First warning:** "This will permanently delete [X]. This cannot be undone."
2. **Second confirmation:** "Are you absolutely sure? Type DELETE to confirm."
3. **Final confirmation:** "Last chance — this action is irreversible. [Cancel] [Delete Forever]"

Only after all 3 confirmations does deletion execute. Users must **fully understand** the permanence before proceeding.

---

## Issue D: Video Recording Notification Before Deletion

**Clarification Needed:** The 2-week video retention policy should include:
- Notification to coachee **before** auto-deletion
- Option to download before deletion
- Clear countdown visible in UI

**Suggested Language:**
> "Video recordings auto-delete after 2 weeks. Coachee receives notification 48 hours before deletion with option to download. Countdown visible in their data dashboard."

---

## Issue E: Retention Configured at Onboarding

**Clarification Needed:** Retention preferences should be:
- Presented during onboarding (not buried in settings)
- Configurable by coachee
- Changeable anytime later

**Suggested Language:**
> "During coachee onboarding, present retention preferences as a clear choice: 'How long would you like us to keep your data?' Options: 1 year, 3 years, 7 years (default), indefinitely. This can be changed anytime in settings."

---

# PART 3: PHASING RECOMMENDATIONS

## Rec 1: Voice Profile Basics — Move to Phase 2

**Current:** Phase 3.5 (Weeks 12-14)

**Recommendation:** Move **voice learning from edits** to Phase 2.

**Rationale:** Without any voice matching, Phase 2 notes generation will feel generic. The system should start learning from coach edits immediately in Phase 2. Full voice profile training (sample uploads, analysis) can remain in Phase 3.5.

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

**Rationale:** "What's my day look like?" with smart prioritization is critical for early demos. It shows the coach's daily experience. Even a simple version demonstrates the value proposition. Full visual dashboard can remain in Phase 3.

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

**Rationale:** "Wise co-pilot whispering in your ear" is a major wow factor. If it's after pitch polish phase, it won't be in investor demos. Even a basic version (suggested questions appearing in a subtle bar) would be powerful.

| Capability | Phase 5 MVP | Phase 5.5 Full |
|------------|-------------|----------------|
| Inconspicuous suggestion bar | ✓ | ✓ |
| Suggested questions (basic) | ✓ | ✓ |
| Pattern recognition callouts | — | ✓ |
| Framework suggestions | — | ✓ |
| Quick queries during session | — | ✓ |

---

# PART 4: ADDITIONAL RECOMMENDATIONS

## Rec A: Confidence Indicators — Simplified Approach

**Original Suggestion:** Multi-level confidence indicators (High/Medium/Low)

**Jesse's Preference:** Simpler approach without reducing user trust.

**Recommended Implementation:**

| Element | Behavior |
|---------|----------|
| Default | Sage presents content confidently |
| Visual indicator | Subtle confidence meter (clickable) |
| On click | Opens dialogue: "Where did you get this? How confident are you?" |
| Sage explains | Sources, reasoning, confidence level in natural language |
| Future integration | Links to Wisdom Corpus citations when available |

**Avoid:** Language like "I'm not sure but..." which undermines trust.

**Use:** "Based on [source], I believe..." or visual indicators that invite exploration without suggesting uncertainty.

---

## Rec B: "Explain This" / Attribution Feature

**The Feature:** User can ask Sage "Why did you suggest this?" or "Where did this come from?"

**Response includes:**
- Source (transcript moment, pattern across sessions, Wisdom Corpus)
- Reasoning chain
- Confidence level
- Links to original content

**Priority:** P1

**Target Phase:** Phase 3 (basic), enhanced with Wisdom Corpus in Phase 7+

---

## Rec C: Coach "Disagree" Feedback Loop

**The Feature:** When coach significantly edits Sage's output, lightweight signal for learning.

**Implementation:**

| Signal | Meaning | System Response |
|--------|---------|-----------------|
| Small edit, no flag | "Right idea, different wording" | Learn voice preferences |
| "This was off" button | "Wrong direction entirely" | Don't repeat this pattern |
| "Perfect" indicator | "Nailed it" | Reinforce this approach |

**Priority:** P2

**Target Phase:** Phase 2 (simple), enhanced in Phase 3.5

---

## Rec D: Proactive Pattern Surfacing

**The Feature:** Sage shouldn't wait to be asked — it should occasionally surface patterns proactively.

**Implementation:**
- Sage notices pattern across sessions
- Surfaces in chat: "I've noticed something across your last 5 sessions with Sarah..."
- Coach can acknowledge, dismiss, or add to Private Notes
- If coach agrees, observation goes to Private Intelligence section on client profile

**Example:**
```
💡 Sage noticed something:

"Across the last 5 sessions, Sarah has mentioned feeling
'invisible' 7 times — always in work contexts, never in
personal relationships. This might be worth exploring."

[Add to Private Notes] [Dismiss] [Tell me more]
```

**Priority:** P1

**Target Phase:** Phase 3

---

## Rec E: "5-Minute Promise" — Prominent Positioning

**The Feature:** "Within 5 minutes of transcript arriving, your notes are ready."

**Recommendation:** Make this a prominent brand promise, not a buried spec item.

**Marketing Language:**
> "Session ends. Notes appear. 5 minutes or less."

**Future:** As system improves, this could become "3 minutes or less."

**Priority:** P0 — Core value proposition

---

## Rec F: Pre-Session Coachee Prep — Summary

**Full specification in Gap 8 above.**

**Key Points:**
- 24 hours before: Full prep prompts (celebrating, gratitude, focus, priorities)
- 1 hour before: Quick check-in
- Links to previous notes and commitments
- Responses appear in coach's T-15 prep

**Priority:** P1

**Target Phase:** Phase 4.5

---

# SUMMARY: Action Items for Team

## Immediate Documentation Updates

| Item | Action |
|------|--------|
| AI Command Bar | Add full specification (Gap 1) |
| Client Resource Library | Add full specification (Gap 2) |
| Voice Profile Quality | Add confidence indicators (Gap 3) |
| Between-Session Intelligence | Document data flow to T-15 (Gap 4) |
| Private Intelligence Layer | Confirm Phase 2 placement (Gap 5) |
| Command Center Prioritization | Add smart focus feature (Gap 6) |
| Onboarding Sequence | Document "scan first" philosophy (Gap 7) |
| Coachee Pre-Session Prep | Add full specification (Gap 8) |

## Clarifications to Make Explicit

| Item | Clarification |
|------|---------------|
| Tier 3 Drafting vs. Sending | Drafting = auto, Sending = approval |
| T-15 Prep | Never sent, kept open during session |
| Delete Promise | Brand promise, not just feature |
| Video Retention | Notification before auto-delete |
| Retention Config | Set at onboarding, changeable anytime |

## Phase Adjustments to Consider

| Feature | Current Phase | Recommended |
|---------|---------------|-------------|
| Voice learning from edits | 3.5 | 2 |
| Basic Command Center | 3 | 2 |
| Client Resource Library | Unphased | 2 |
| In-Session Support MVP | 5.5 | 5 (minimal) |
| Private Intelligence Layer | Unclear | 2 (basics) |

---

*Generated: January 2026*
*Author: Jesse Torrence with Claude*

---

**Questions for Team:**

1. Do the phase adjustments align with technical dependencies?
2. Is the Private Intelligence Layer simple enough for Phase 2?
3. Can a minimal In-Session Support be ready for Phase 5 demo?
4. Any concerns with the "scan first" onboarding approach?

---

**Ready for GitHub push upon Jesse's approval.**

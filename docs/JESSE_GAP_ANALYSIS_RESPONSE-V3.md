# Jesse's Gap Analysis Response V3
## Review of `missing-features-analysis.md` and `features-by-phase.md` — Updated

**Date:** January 2026
**Reviewer:** Jesse Torrence (with Claude)
**Version:** 3.0 — Comprehensive update with all V4 master doc specifications

---

## Executive Summary

This document provides a comprehensive update to the gap analysis response, incorporating all V4 master document changes:
- **All V3 features** (6-section notes, nested/accordion, mobile apps, etc.)
- **Expanded Workflow 5** — Full companion conversation log on client page
- **Mobile apps for ALL user tiers** (coach, coachee, corporate admin)
- **Coach to-dos beyond coaching** (personal life integration)
- **Voice profile future vision** (voice cloning, avatars)
- **In-session adjustable controls** (dials/toggles)
- **Legacy/Story Capture feature** from digital exhaust
- **Progress tracking & trends** (micro and macro level)
- **Expanded autonomy model** (Tier 1 additions, Tier 5 clarifications)
- **24/7 chatbot timing** — moved to MVP/Phase 1
- **Meta-learning architecture** for wisdom corpus
- **Corporate coachee features** (KPIs, OKRs, team dynamics)
- **Client list page** and **Scheduling/calendar page** specifications
- **Context window management** explanation
- **Branding clarification** (jessetorrence.com inspiration)
- **Expanded billing integrations** (PayPal, Zelle, Venmo)
- **Expanded legal questions** (10 items)
- **Priority books to add** (8 specific titles)

This document outlines:
- **18 True Gaps** — Features missing or needing specification (expanded from 12)
- **10 Articulation Issues** — Captured but need clarification (expanded from 7)
- **8 Phasing Recommendations** — Suggested timeline adjustments (expanded from 6)
- **14 Additional Recommendations** — Enhancements to consider (expanded from 10)

---

# PART 1: TRUE GAPS (Missing Features)

## Gap 1: Session Notes — 6-Section Format ✅ (Carried from V2)

**Status:** Specified in V3/V4 master doc

**The Feature:** Session Notes should follow this **6-section format**:

| Section | Content | Purpose |
|---------|---------|---------|
| **1. Session Recap** | Chronological flow of what was discussed — core ideas, key phrases, verbatim quotes | New section. Not a dialogue, but captures essence. Balance detail: comprehensive but scannable. |
| **2. Observations, Insights & Analysis** | Patterns, breakthroughs, psychological framing | Deep synthesis from master coach perspective |
| **3. Inquiries for Growth** | ≤5 piercing questions for reflection | Reframe binary thinking, invoke counterfactuals |
| **4. Invitations to Action** | Behavioral commitments with specificity | Small but powerful. Precise parameters. |
| **5. Resources / Tools / Follow-up** | Relevant materials, frameworks, guides | Hyperlinked to Resource Library |
| **6. Next Meeting & Future Focus** | Upcoming session prep | Date/time, potential focus areas |

**Priority:** P0 — Core deliverable

**Target Phase:** Phase 2

---

## Gap 2: Nested/Accordion Architecture ✅ (Carried from V2)

**Status:** Fully specified in V4 master doc

**The Feature:** All data displays throughout the platform use a **nested/accordion structure** that allows drill-down from high-level summary to exact source.

### Application Areas:

| Context | Nested Levels |
|---------|---------------|
| **Session Notes** | Summary → Section Headings → Key Points → Full Detail → Exact Quote → Video Timestamp |
| **T-15 Between-Session Intelligence** | Conversation List → Key Themes → Emotional Moments → Full Transcript |
| **Pattern Recognition** | Pattern Summary → Evidence List → Individual Instances → Exact Quotes → Timestamps |
| **Wisdom Corpus Citations** | Insight → Source Attribution → Full Quote → Book/Chapter Reference |
| **Client Profile** | High-level status → Sections → Details → Full history |

**Priority:** P0 — Core UX principle

**Target Phase:** Phase 2 (basic), refined in Phase 3

---

## Gap 3: AI Command Bar ✅ (Carried from V2)

**Status:** Fully specified in V4 master doc

**The Feature:** AI command bar for natural language editing in session notes.

| Command Type | Example | Result |
|--------------|---------|--------|
| Tone adjustment | "make warmer" / "more direct" / "softer" | Rewrites selected section with adjusted tone |
| Content addition | "add resource about boundaries" | Inserts relevant resource with context |
| Content removal | "remove the part about his father" | Deletes specified content |
| Section modification | "shorten the action items" / "expand observations" | Adjusts section length |
| Voice correction | "this doesn't sound like me" | Regenerates in coach's voice |
| Specific edits | "change 'you should' to 'you might consider'" | Direct text replacement |

**Priority:** P0 — Critical to notes editing experience

**Target Phase:** Phase 2

---

## Gap 4: Full Companion Conversation Log on Client Page (NEW)

**Status:** New in V4

**The Feature:** On each client's page, coach sees a **full log of ALL 24/7 companion conversations** — not just a summary.

### Specification:

```
📱 Companion Conversations (Full Log)

[Search] [Filter by Date] [Filter by Theme]

Jan 14, 2026 — 8:47pm (20 min)
├── Topic: Promotion anxiety
├── T-15 Summary: Fear of visibility, imposter feelings, first anger expression
├── [Expand full transcript]
└── [Jump to specific moments]

Jan 12, 2026 — 2:15pm (10 min)
├── Topic: Boundary conversation follow-up
├── T-15 Summary: Marked incomplete (3rd time), "timing wasn't right"
├── [Expand full transcript]
└── [Jump to specific moments]

[Load earlier conversations...]
```

**Key Features:**
- Full transcript access (not just summary)
- T-15 summary auto-generated for each conversation
- Search and filter by date, theme, topic
- Drill-down to specific moments
- Respects coachee redaction settings (Tier 1 content hidden)

**Priority:** P1

**Target Phase:** Phase 4.5 (with coachee layer)

---

## Gap 5: Client List Page (NEW)

**Status:** New in V4

**The Feature:** Coach's main view showing all clients with key information at a glance.

### Specification:

```
📋 YOUR CLIENTS

[Search] [Filter: Active | Inactive | All] [Sort: Next Session | Last Session | Name]

┌─────────────────────────────────────────────────────────────────┐
│ Marcus Chen                                    Next: Today 2pm  │
│ VP Product @ TechCorp                                           │
│ Focus: Leadership presence, promotion readiness                 │
│ Status: 🟡 Struggling — missed commitment 3x, emotional convo   │
│ [Open Profile] [T-15 Prep] [Quick Note]                         │
└─────────────────────────────────────────────────────────────────┘
```

**Capabilities:**

| # | Capability | Priority | Phase |
|---|------------|----------|-------|
| 1 | List view with all clients | P0 | 2 |
| 2 | Search and filter | P0 | 2 |
| 3 | Status indicators (thriving/struggling/check-in needed) | P1 | 3 |
| 4 | One-click access to T-15 prep | P0 | 3 |
| 5 | Quick note logging | P1 | 2 |
| 6 | Sort by various criteria | P1 | 3 |

**Priority:** P0 — Essential navigation

**Target Phase:** Phase 2 (basic), Phase 3 (enhanced)

---

## Gap 6: Scheduling / Calendar Page (NEW)

**Status:** New in V4

**The Feature:** Full calendar view integrated with coach's scheduling.

### Specification:

```
📅 CALENDAR

[Week View] [Month View] [Day View]

┌────────────────────────────────────────────────────────────────────┐
│                     JANUARY 2026                                    │
├────────────────────────────────────────────────────────────────────┤
│ Mon 19                                                              │
│  └── 2:00pm - Marcus Chen (Leadership coaching)                     │
│       └── [T-15 Prep Ready] [Join Zoom]                             │
│                                                                     │
│ Tue 20                                                              │
│  └── 10:00am - Sarah Williams (Work-life balance)                   │
│       └── [T-15 Prep Generating...] [Join Meet]                     │
│  └── 3:00pm - New Client Intake: Jennifer Adams                     │
│       └── [Intake Form] [Profile Draft]                             │
└────────────────────────────────────────────────────────────────────┘

Quick Actions:
[+ Add Session] [Sync Calendar] [Set Availability] [Send Scheduling Link]
```

**Capabilities:**

| # | Capability | Priority | Phase |
|---|------------|----------|-------|
| 1 | Calendar sync (Google, Outlook) | P0 | 4 |
| 2 | T-15 prep status indicators | P0 | 3 |
| 3 | Quick join meeting links | P0 | 4 |
| 4 | Week/Month/Day views | P1 | 3 |
| 5 | Scheduling link generation | P2 | 4 |
| 6 | Availability management | P2 | 4 |

**Priority:** P1 — Important for daily workflow

**Target Phase:** Phase 3 (basic), Phase 4 (full integration)

---

## Gap 7: Mobile Apps for ALL User Tiers (NEW)

**Status:** New in V4 — V3 only specified coach mobile

**The Feature:** Each user tier needs mobile app access.

### Coach Mobile App (from V3):
- Chat bar interface
- Voice interaction
- Full dashboard access
- Quick logging
- T-15 prep viewing

### Coachee Mobile App (NEW):
- 24/7 companion chat interface
- Voice interaction for reflections
- Commitment tracking
- Session notes access
- Resource library
- Journal/reflection
- Scheduling

### Corporate Admin Mobile App (NEW):
- Dashboard access (aggregate metrics)
- Seat management
- Program alerts
- Report scheduling

**Priority:**
- Coach mobile: P0
- Coachee mobile: P0 (core differentiator)
- Admin mobile: P2

**Target Phase:**
- Coach: Phase 4
- Coachee: Phase 4.5
- Admin: Phase 5

---

## Gap 8: Coach To-Dos Beyond Coaching (NEW)

**Status:** New in V4

**The Feature:** Coach's dashboard includes non-coaching to-dos — the whole life, not just practice.

### Specification:

```
🌟 YOUR LIFE PRIORITIES (All Areas)

Professional Growth & Leadership
├── ICF PCC certification progress: 127/500 hours
└── Next action: Schedule mentor coaching session

Health & Wellbeing
├── Annual physical: Overdue
└── Next action: Book appointment

Relationships & Family
├── Oana's birthday: 3 days away
└── Next action: Pick up gift

Financial Security
├── Q1 invoicing: 3 clients pending
└── Next action: Send invoices
```

**Principle:** ReGenesis helps the coach live a whole, integrated life. "Pick up birthday gift" lives alongside "Send Marcus the delegation framework."

**Priority:** P2

**Target Phase:** Phase 3

---

## Gap 9: In-Session Adjustable Controls (NEW)

**Status:** New in V4

**The Feature:** Real-time "dials/toggles" the coach can adjust during a session.

### Controls:

| Control | Options |
|---------|---------|
| AI Intervention Level | Quiet → Suggestive → Active |
| Framework Depth | Light touch → Deep exploration |
| Pattern Surfacing | Only major → Show all |
| Time Awareness | Off → Gentle reminders → Strict pacing |

**Use Case:** Coach adjusts AI support level based on session flow — more active when stuck, quieter during breakthroughs.

**Priority:** P2 — Stretch goal

**Target Phase:** Phase 5.5

---

## Gap 10: Time Keeper Feature (NEW)

**Status:** New in V4

**The Feature:** Subtle timer/notification for session pacing during in-session support.

### Specification:
- Non-intrusive visual indicator of time elapsed
- Configurable warnings (15 min left, 5 min left)
- Optional audio cue for coach only
- Smart suggestions: "You might want to wrap up commitments"

**Priority:** P2

**Target Phase:** Phase 5.5

---

## Gap 11: Progress Tracking & Trends (NEW)

**Status:** New in V4

**The Feature:** Track coachee progress at micro and macro levels.

### Micro-Level (Session to Session):
- Commitment completion rates
- Emotional tone shifts
- Topic recurrence
- Breakthrough moments

### Macro-Level (Over Time):
- Long-term goal progress
- Pattern evolution
- Skill development
- Behavioral changes

### Visualization:

```
📈 YOUR PROGRESS

Commitment Completion
├── This month: 78% (7/9)
├── Last month: 62% (5/8)
└── Trend: ↗️ Improving

Key Themes Over Time
├── Leadership presence — Session 1-8: Major focus, now resolved
├── Work-life balance — Session 4-present: Ongoing
└── Relationship with father — Session 12-present: Emerging
```

**Priority:** P1 (coachee-facing), P2 (coach dashboard)

**Target Phase:** Phase 4.5 (basic), Phase 6+ (advanced analytics)

---

## Gap 12: Legacy / Story Capture Feature (NEW)

**Status:** New in V4

**The Feature:** Convert coaching journey "digital exhaust" into meaningful legacy artifact.

### Capabilities:
- Life story synthesis — AI-crafted narrative
- Lessons learned — Key insights and wisdom gained
- Transformation map — Where they started vs. where they are now
- Gift to future self — "Letter to yourself in 5 years"

### Use Cases:
- End of coaching engagement gift
- Personal milestone celebrations
- Reflection on annual growth
- Family legacy documentation

**Priority:** P3 — Future vision

**Target Phase:** Phase 7+

---

## Gap 13: Sentiment Analysis Integration (NEW)

**Status:** New in V4

**The Feature:** Advanced sentiment tracking over time.

### Capabilities:
- Session-by-session emotional tone
- Trend analysis (improving, declining, stable)
- Trigger identification (what topics cause distress)
- Progress correlation (do positive sessions lead to better outcomes?)

**Priority:** P2 — Future feature

**Target Phase:** Phase 6+

---

## Gap 14: Corporate Coachee Features (NEW)

**Status:** New in V4

**The Feature:** For coachees in corporate/enterprise contexts, additional features support professional development.

### KPIs & OKRs Integration:
- Connect to company performance management systems
- Track professional goals alongside personal development
- Correlate coaching progress with business outcomes

### Team Dynamics Context:
- (With consent) Understanding of team composition
- Role clarity and stakeholder mapping
- Organizational change context

### 360 Feedback Integration:
- Import assessment results
- Track development areas over time
- Connect feedback themes to coaching focus

**Priority:** P2 — Enterprise feature

**Target Phase:** Phase 4.5 (basic), Phase 6+ (full)

---

## Gap 15: Voice Profile Future Vision (NEW)

**Status:** New in V4 — expands on V3 voice profile

**The Feature:** Beyond written voice matching, future vision includes actual voice cloning and avatars.

### Current (V3/V4):
- Written tone matching from samples
- Learning from coach edits
- Voice confidence indicators

### Future Vision:
- Actual voice cloning for audio messages
- AI avatars for asynchronous coaching content
- Video synthesis for personalized resources

**Note:** Requires consent framework and legal review.

**Priority:** P3 — Long-term vision

**Target Phase:** Phase 7+

---

## Gap 16: Meta-Learning Architecture for Wisdom Corpus (NEW)

**Status:** New in V4

**The Feature:** The Wisdom Corpus learns and improves over time based on actual usage.

### Components:
- **Session Learning:** What wisdom actually helps in sessions?
- **Coach Feedback:** Which suggestions accepted, modified, rejected?
- **Outcome Correlation:** Which wisdom led to breakthroughs?
- **Continuous Refinement:** Tags and relevance scores update

### Community Contribution (Future):
- Coaches suggest additions
- Rating/validation system
- Regional/cultural variations

**Priority:** P2 — Future feature

**Target Phase:** Phase 7+

---

## Gap 17: Context Window Management Specification (NEW)

**Status:** New in V4 — needs technical specification

**The Feature:** Explain how ReGenesis handles the massive amount of data from long coaching relationships within LLM context limits.

### Solution: Intelligent Context Assembly

```
SESSION CONTEXT ASSEMBLY:
├── Coachee profile (always included) — ~500 tokens
├── Current goals & commitments — ~200 tokens
├── Last 3 sessions (full summaries) — ~1500 tokens
├── Current session transcript (streaming) — varies
├── Coach preferences and voice profile — ~300 tokens
└── TOTAL FIXED: ~2500 tokens

RETRIEVAL AUGMENTATION (as needed):
├── Vector search for relevant past content — top 5 chunks
├── Wisdom Corpus retrieval — top 3 chunks
├── Pattern/insight database query — relevant patterns only
└── TOTAL RETRIEVED: ~2000 tokens
```

### Key Strategies:
1. Summarization Chain: Raw transcripts → Session summaries → Patterns
2. Vector Retrieval: Only pull relevant historical content
3. Tiered Memory: Recent = full, Older = summaries, Ancient = patterns
4. Coachee-Consented Only: Don't waste context on redacted content

**Priority:** P0 — Core architecture decision

**Target Phase:** Phase 2

---

## Gap 18: Third-Party Privacy Handling (NEW)

**Status:** New in V4 — needs design specification

**The Question:** When coachee discusses other people (spouse, boss, colleague), how do we handle their privacy?

### Current Approach:
- Minimize storage of third-party information
- Focus on coachee's experience and patterns
- Never contact third parties
- Aggregate/anonymize in any reporting

### Open Questions:
- How much can we store about third parties?
- Do we need consent framework for third-party data?
- How do we handle sensitive disclosures about others?

**Priority:** P1 — Legal/ethical consideration

**Target Phase:** Phase 4.5 (needs design spec earlier)

---

# PART 2: ARTICULATION CLARIFICATIONS

## Issue A: Tier 3 — Drafting vs. Sending ✅ (Carried from V2)

**Clarification:** Make absolutely explicit:
- **Drafting** session notes and T-15 prep = **Automatic** (Tier 1 behavior)
- **Sending** session notes to coachee = **Requires approval** (Tier 3)

---

## Issue B: T-15 Prep — Never Sent, Kept Open During Session ✅ (Carried from V2)

**Clarification:** T-15 prep is:
1. For coach's eyes only
2. **Never** sent to coachee
3. Meant to be kept open during session as reference guide

---

## Issue C: "Delete Means Delete" — Brand Promise ✅ (Carried from V2)

**Clarification:** This is a **marketing/brand promise**:
> "**The Evaporation Promise:** Delete means delete. Not archived. Not recoverable. Gone."

With **3 separate confirmation steps** before deletion executes.

---

## Issue D: Video Recording Notification ✅ (Carried from V2)

**Clarification:** Multiple notifications before video deletion:
- 48 hours before
- 24 hours before
- Right before (within 1 hour)

---

## Issue E: Tier 5 Confidentiality Clarification (NEW)

**The Issue:** Tier 5 says ReGenesis cannot "Guarantee confidentiality from coach" — this needs clarification.

**Clarification:**
- **Tier 1 (Private) content is FULLY confidential** — coach cannot see
- **Tier 2 (Coach-Shared) content** — coach has visibility because coachee chose to share
- ReGenesis cannot guarantee Tier 2 content is hidden from coach — that's the point of Tier 2
- Coachees are informed at onboarding that Tier 2 = visible to coach

**Suggested Language:**
> "ReGenesis cannot guarantee complete confidentiality for Tier 2 content — your coach has visibility into content you've chosen to share. For truly private reflections, use Tier 1."

---

## Issue F: Tier 1 Autonomy Expansion (NEW)

**The Issue:** V4 expands what ReGenesis can do autonomously at Tier 1.

**New Tier 1 Actions:**
- Progress summaries: "Here's how you've been doing on your goals this month..."
- Pattern observations: "I've noticed you tend to feel anxious on Sunday nights..."

**Clarification:** These are still low-stakes, but represent more proactive intelligence surfacing. Coachee preferences should control frequency and depth.

---

## Issue G: 24/7 Chatbot Timing (NEW)

**The Issue:** Previous versions were unclear about when the 24/7 companion launches.

**Clarification:** The coachee companion is available from **MVP/Phase 1** — this is a **core differentiator**, not a future feature.

**Rationale:** Without the 24/7 companion, ReGenesis is just a notes tool. The companion is what makes it a coaching platform.

---

## Issue H: Brand Identity — Not Robotic (NEW)

**The Issue:** Brand needs to feel human, not clinical.

**Clarification:**
- Inspiration: jessetorrence.com aesthetic
- Natural, organic, warm
- Human, not robotic
- Wise, not clinical
- Calm confidence, not aggressive tech
- NOT: Cold, corporate, medical, robotic, or "AI-forward"

---

## Issue I: Expanded Billing Integrations (NEW)

**The Issue:** V3 only included Square, Stripe. Individual coaches use other methods.

**Clarification:** Add:
- PayPal (P2)
- Venmo (P2)
- Zelle (P2)

---

## Issue J: Legal Questions Expansion (NEW)

**The Issue:** V3 had 5 legal questions. V4 expands to 10.

**Full List:**
1. Jurisdiction for international users (GDPR, PIPEDA)
2. Specific Terms of Service language for employer-paid subscriptions
3. E&O insurance requirements for AI-generated advice
4. State-by-state coaching regulation trends
5. Subpoena resistance architecture
6. Third-party data (spouse, boss, colleague) — consent implications
7. Voice cloning consent requirements (future feature)
8. AI liability for coaching advice
9. Cross-border data transfer (EU to US)
10. Biometric data regulations (if using voice/face for auth)

---

# PART 3: PHASING RECOMMENDATIONS

## Rec 1: 24/7 Companion — Move to Phase 1 (NEW)

**Current:** Phase 4.5 (too late)

**Recommendation:** Basic 24/7 companion in **Phase 1**.

**Rationale:** This is the core differentiator. Without it, ReGenesis is just a notes tool. Basic chat capability should launch early; full features can come later.

| Capability | Phase |
|------------|-------|
| Basic chat interface | Phase 1 |
| Commitment reminders | Phase 2 |
| Full conversation log for coach | Phase 4.5 |
| Advanced features (redaction, full autonomy) | Phase 4.5 |

---

## Rec 2: Voice Profile Basics — Move to Phase 2 ✅ (From V2)

**Recommendation:** Voice learning from edits in Phase 2.

| Capability | Recommended Phase |
|------------|-------------------|
| Learning from coach edits | Phase 2 |
| "This doesn't sound like me" override | Phase 2 |
| Writing sample upload | Phase 3.5 |
| Full voice profile system | Phase 3.5 |

---

## Rec 3: Client List Page — Phase 2 (NEW)

**Current:** Not explicitly phased

**Recommendation:** Basic client list in **Phase 2**.

**Rationale:** Essential navigation. Coaches need to see their clients at a glance from the earliest phases.

---

## Rec 4: Calendar Page — Phase 3 (NEW)

**Current:** Not explicitly phased

**Recommendation:** Basic calendar view in **Phase 3**, full integrations in **Phase 4**.

**Rationale:** Calendar is critical for daily workflow, but requires integration work.

---

## Rec 5: Command Center — Phase 2 ✅ (From V2)

**Recommendation:** Basic Command Center in Phase 2.

| Capability | Recommended Phase |
|------------|-------------------|
| "What's my day?" query response | Phase 2 |
| AI-prioritized focus recommendation | Phase 2 |
| Full visual dashboard | Phase 3 |

---

## Rec 6: In-Session Support MVP — Phase 5 ✅ (From V2)

**Recommendation:** Create minimal MVP for Phase 5 demo.

| Capability | Phase 5 MVP | Phase 5.5 Full |
|------------|-------------|----------------|
| Inconspicuous suggestion bar | ✓ | ✓ |
| Suggested questions (basic) | ✓ | ✓ |
| Adjustable controls/dials | — | ✓ |
| Time keeper | — | ✓ |
| Expandable side panel | — | ✓ |

---

## Rec 7: Mobile Apps Phasing (NEW)

**Recommendation:** Phase mobile apps appropriately.

| App | Recommended Phase |
|-----|-------------------|
| Coach mobile (basic) | Phase 4 |
| Coachee mobile (companion) | Phase 4.5 |
| Admin mobile | Phase 5 |

**Rationale:** Coach mobile with coachee layer enables the core experience. Admin can wait.

---

## Rec 8: Compliance Phasing (NEW)

**Recommendation:** Phase compliance work explicitly.

| Certification | Phase |
|---------------|-------|
| GDPR-compliant architecture | Design from Day 1 |
| SOC 2 Type I | Phase 4 |
| SOC 2 Type II | Phase 5+ |
| HIPAA certification | Phase 6+ |

---

# PART 4: ADDITIONAL RECOMMENDATIONS

## Rec A: LLM Architecture — Claude-First Strategy ✅ (From V2)

Use Claude as primary LLM for all coaching-quality outputs.

| Function | Recommended Model |
|----------|-------------------|
| Session Notes Generation | Claude Opus 4.5 |
| Observations/Insights/Patterns | Claude Opus 4.5 |
| T-15 Prep Summaries | Claude Sonnet 4.5 |
| 24/7 Coachee Companion Chat | Claude Sonnet 4.5 |
| Coach Quick Tasks | Claude Haiku 4.5 |
| Administrative/Functional | GPT-4o or Haiku |

---

## Rec B: Expanded Methodologies for Wisdom Corpus (NEW)

**The Recommendation:** Add Jesse's additional methodologies to core knowledge.

**Add:**
- Polyvagal Theory (Dana/Porges)
- Internal Family Systems (IFS) (Schwartz)
- Nonviolent Communication (NVC) (Rosenberg)
- Limiting Beliefs Work

---

## Rec C: Priority Books to Add (NEW)

**The Recommendation:** Add these 8 books to priority list.

| Book | Author | Domain |
|------|--------|--------|
| The Body Keeps the Score | Bessel van der Kolk | Trauma/Somatics |
| Polyvagal Theory in Therapy | Deb Dana | Nervous System |
| No Bad Parts | Richard Schwartz | IFS |
| Nonviolent Communication | Marshall Rosenberg | Communication |
| Untethered Soul | Michael Singer | Spirituality/Psychology |
| Power of Now | Eckhart Tolle | Presence/Mindfulness |
| Man's Search for Meaning | Viktor Frankl | Meaning/Purpose |
| Sapiens | Yuval Noah Harari | Big Picture Context |

---

## Rec D: Foundational Textbook Research (NEW)

**The Recommendation:** Research what textbooks are used in BA, MA, PhD programs for therapist/coach training.

**Categories:**
- Counseling Psychology programs
- Clinical Psychology programs
- Coaching certification programs (ICF-accredited)
- Organizational Psychology programs
- Marriage and Family Therapy programs

**Phase:** Research in Phase 3, incorporation in Phase 7+

---

## Rec E: Corpus Prioritization Numbers (NEW)

**The Recommendation:** Document corpus size expectations.

| Phase | Source Count |
|-------|--------------|
| MVP | 100-500 |
| Complete Vision | 50,000-100,000 |

---

## Rec F: Confidence Indicators — Simplified Approach ✅ (From V2)

| Element | Behavior |
|---------|----------|
| Default | ReGenesis presents content confidently |
| Visual indicator | Subtle confidence meter (clickable) |
| On click | Opens dialogue with sources and reasoning |

---

## Rec G: "Explain This" / Attribution Feature ✅ (From V2)

User can ask "Why did you suggest this?" — response includes source, reasoning, confidence, links.

---

## Rec H: Coach "Disagree" Feedback Loop ✅ (From V2)

| Signal | Meaning |
|--------|---------|
| Small edit, no flag | "Right idea, different wording" |
| "This was off" button | "Wrong direction entirely" |
| "Perfect" indicator | "Nailed it" |

---

## Rec I: Proactive Pattern Surfacing ✅ (From V2)

ReGenesis surfaces patterns proactively, not just when asked.

---

## Rec J: "5-Minute Promise" — Brand Promise ✅ (From V2)

"Session ends. Notes appear. 5 minutes or less." — Prominent brand promise.

---

## Rec K: Legal Compliance Framework ✅ (From V2)

Include legal research findings in product specs:
- Coaching vs. therapy distinction
- Mandatory reporting policy
- Employer-sponsored data protection
- Onboarding disclosure language

---

## Rec L: Wisdom Corpus 16 Domains ✅ (From V2)

Explicitly document the 16 knowledge domains and tagging structure.

---

## Rec M: In-Session Expandable Side Panel ✅ (From V2)

Resizable, draggable side panel for framework display during sessions.

---

## Rec N: Ever-Evolving Corpus System (NEW)

**The Recommendation:** Design the corpus to grow and improve over time.

- Meta-learning from actual usage
- Community contribution (future)
- Regional/cultural variations
- Continuous tag refinement

---

# SUMMARY: Action Items for Team

## Documentation Updates Required

| Item | Gap # | Priority |
|------|-------|----------|
| Full companion conversation log on client page | 4 | P1 |
| Client list page specification | 5 | P0 |
| Scheduling/calendar page specification | 6 | P1 |
| Mobile apps for all user tiers | 7 | P0 |
| Coach non-coaching to-dos | 8 | P2 |
| In-session adjustable controls | 9 | P2 |
| Time keeper feature | 10 | P2 |
| Progress tracking & trends | 11 | P1 |
| Legacy/story capture | 12 | P3 |
| Sentiment analysis | 13 | P2 |
| Corporate coachee features | 14 | P2 |
| Voice profile future vision | 15 | P3 |
| Meta-learning architecture | 16 | P2 |
| Context window management | 17 | P0 |
| Third-party privacy handling | 18 | P1 |

## Clarifications to Make Explicit

| Item | Issue # |
|------|---------|
| Tier 5 confidentiality | E |
| Tier 1 autonomy expansion | F |
| 24/7 chatbot timing (MVP) | G |
| Brand identity (not robotic) | H |
| Expanded billing integrations | I |
| Expanded legal questions | J |

## Phase Adjustments

| Feature | Current | Recommended |
|---------|---------|-------------|
| 24/7 companion (basic) | 4.5 | 1 |
| Voice learning from edits | 3.5 | 2 |
| Client list page | Unphased | 2 |
| Calendar page | Unphased | 3/4 |
| Basic Command Center | 3 | 2 |
| Coach mobile | 4 | 4 |
| Coachee mobile | Unphased | 4.5 |
| Admin mobile | Unphased | 5 |
| In-Session MVP | 5.5 | 5 |

## New Research Tasks

| Task | Phase |
|------|-------|
| Foundational textbooks research | Phase 3 |
| Third-party privacy design spec | Phase 3 |
| Voice cloning consent framework | Phase 6+ |
| Sentiment analysis model selection | Phase 5 |

---

*Generated: January 2026*
*Author: Jesse Torrence with Claude*
*Version: 3.0*

---

**Document History:**
- V1.0 — Original gap analysis response
- V2.0 — Comprehensive update with 12 gaps, 7 clarifications, 6 phasing recs, 10 additional recs
- V3.0 — Full V4 master doc alignment:
  - **18 gaps** (expanded from 12)
  - **10 clarifications** (expanded from 7)
  - **8 phasing recommendations** (expanded from 6)
  - **14 additional recommendations** (expanded from 10)
  - All new V4 features documented and phased
  - Research tasks identified
  - Legal questions expanded
  - Methodology additions specified

---

**Questions for Team:**

1. Do the phase adjustments align with technical dependencies?
2. Is the nested/accordion architecture achievable with current stack?
3. Can mobile apps share codebase across platforms (React Native/Expo)?
4. Context window management approach — validate proposed strategy?
5. Third-party privacy handling — needs dedicated design session?
6. 24/7 companion in Phase 1 — feasible?
7. Corpus numbers (50-100K) — storage/embedding cost implications?
8. Meta-learning architecture — dedicated research sprint needed?
9. Corporate features — delay until enterprise customers confirmed?
10. Voice cloning — legal research timeline?

---

**Ready for GitHub push upon Jesse's approval.**

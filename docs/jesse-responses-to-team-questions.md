# Jesse's Responses to Team Questions
## Sage Product Development — January 2026

---

# Section 1: Extension Demo Story

## 1a: 30-Second Demo

**The Demo:**

> "Coach finishes a Zoom session. Within 5 minutes, they open the Sage extension, see their session notes already drafted in their voice — observations, powerful questions, action items, all structured. They make one quick edit, hit send, and the client receives a polished session summary email. What used to take 30-45 minutes of post-session admin just happened automatically."

**The Core Promise in Action:**

Session ends → Notes appear → Coach tweaks → Client receives. All without leaving the browser.

---

## 1b: Top 3 Extension Workflows to Demo (+ Stretch Goals)

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
3. Coach edits via direct text or AI command bar ("make warmer," "add resource about boundaries," "remove the part about his father")
4. **Bonus:** If session mentioned specific frameworks or follow-ups (e.g., "a guide to delegation," "NVC script for that conversation with your boss"), Sage auto-drafts these as ancillary documents alongside the main notes
5. Coach reviews ancillary documents, approves what to include
6. One-click delivery → Client receives polished email with HTML + PDF attachment + hyperlinked resources stored in their Resource Library

**Time saved:** 30-45 min → 5 min

### Workflow 2: T-15 Pre-Session Prep
**The Problem:** Coaches walk into sessions unprepared, scrambling to remember context, or spending 15+ minutes re-reading old notes.

**The Sage Solution:**
15 minutes before a scheduled session, Sage auto-generates a contextual brief:
- **North Star Reminder:** Client's stated values, vision, and overarching goals
- **Last Session Recap:** Key themes, breakthroughs, emotional moments
- **Commitments to Check:** What they said they'd do — did they?
- **Life Context:** What's happening in their world right now (promotion, divorce, trip)
- **Pattern Intelligence:** "This is the 4th time she's mentioned feeling invisible at work"
- **Suggested Openers:** Powerful questions tailored to where they are
- **Private Coach Notes:** Your own observations and hypotheses

**Note:** T-15 prep is for coach's eyes only — never sent to coachee. Coach can keep it open during the session or close it.

### Workflow 3: Coach's Daily Command Center
**The Problem:** Coaches juggle multiple clients, lose track of commitments, and don't have a "mission control" for their practice.

**The Sage Solution:**
Coach opens extension at start of day or between sessions, asks: "What's my day look like?"

Sage shows:
- **Today's Sessions** — With 1-line context for each ("Marcus: promotion anxiety, checking on boundary conversation")
- **Prep Needed** — Any sessions requiring special attention
- **Outstanding Actions** — Your commitments to clients, follow-up emails, resources to send
- **Client Pulse** — Anyone who's struggling, disengaged, or had a breakthrough between sessions
- **Your North Star** — Reminder of your own priorities and boundaries

It's the GTD "what should I focus on right now?" in one glance.

### Workflow 4 (Stretch Goal): In-Session Real-Time Support
**The Problem:** During sessions, coaches sometimes forget key context, miss patterns, or struggle to find the right question.

**The Sage Solution:**
An inconspicuous bar sits just below the camera so coach maintains eye contact. Sage listens and surfaces:
- **Suggested Questions:** "Ask about the fear underneath the anger"
- **Pattern Recognition:** "Third time she's mentioned her father"
- **Framework Suggestions:** "This sounds like Drama Triangle — consider naming it"
- **Quick Queries:** Coach can silently ask "What did she commit to last time?" and get instant answer

The "wise co-pilot whispering in your ear" experience — all glanceable without breaking presence.

### Workflow 5 (Future Vision): 24/7 Coachee Companion
**The Problem:** Coaching happens in 1-hour sessions, but life happens 24/7. Coachees forget insights, lose momentum, and arrive at sessions having to "catch up" instead of going deeper.

**The Sage Solution:**
Coachees get their own Sage — available as a mobile app and chat interface:
- **Process challenges** in real-time (bad meeting, difficult conversation, anxiety spiral)
- **Track commitments** and get smart reminders
- **Prepare for difficult conversations** with role-play and frameworks
- **Receive smart nudges** based on their patterns and goals
- **Reflect and journal** with prompts tailored to their journey

Sage knows their full coaching context and supports continuity. Coach can see engagement summaries and key insights (with consent) in T-15 prep.

This is the "coaching doesn't stop when the session ends" experience.

---

# Section 2: Extension Branding

## 2a: Extension Name
**"Sage"** (with caveat to consult trademark attorney; "Sage for Coaches" as safer fallback due to Sage Group PLC trademark on accounting software)

## 2b: Extension Icon
Use the **ouroboros symbol** from Jesse's existing brand (snake/circle eating its tail). Strip the "Jesse Torrence Coaching" text — just the symbol. Team to create simplified versions optimized for small sizes (16x16, 32x32 favicons). Teal-blue-purple color palette.

## 2c: Side Panel Header
**Just the ouroboros symbol, no text.** Clean, confident, recognizable — like Claude's spark or ChatGPT's aperture.

---

# Section 3: Sage Permissions & Trust

## 3a: Coach-Facing Sage — Automatic vs. Ask Permission

| Action | Auto or Ask? | Rationale |
|--------|--------------|-----------|
| Auto-draft T-15 prep before sessions | ✅ Auto | No risk — coach can ignore. Delight, not intrusion. |
| Auto-draft session notes after transcript | ✅ Auto | Core value prop. Coach reviews before sending. |
| Auto-detect coaching sessions from calendar | ✅ Auto | How Sage knows when to act. |
| Auto-pull/process transcripts | ✅ Auto | After initial setup — this is the magic. |
| Auto-generate suggested resources | ✅ Auto | Coach reviews before including. |
| Auto-draft ancillary documents & guides | ✅ Auto | When session mentions frameworks, conversations, or follow-ups that need deeper work (e.g., "a summary of delegation best practices," "draft conversation with boss using NVC," "synthesis of the RACI framework"), Sage auto-drafts these as separate documents alongside the main notes. Coach reviews, approves, and they become hyperlinked attachments in the final notes, stored in the client's Resource Library. |
| Auto-track commitments from sessions | ✅ Auto | Extraction only — no outbound action. |
| Auto-learn from coach edits | ✅ Auto | Improves voice matching silently. |
| Auto-flag patterns across clients | ✅ Auto | Internal intelligence, surfaces when relevant. |
| Send any email/text/nudge to client | 🛑 Always Ask | Irreversible. Coach approves every outbound. |
| Bill/charge clients | 🛑 Always Ask | Financial action. Always confirm. |
| Delete any data | 🛑 Always Ask | Irreversible. Confirm before destruction. |
| Share data with new party | 🛑 Always Ask | Adding client, sharing with org, etc. |
| Change privacy/consent settings | 🛑 Always Ask | For coach or coachee. |
| Modify notes after sent to client | 🛑 Always Ask | Historical record integrity. |
| Send client consent requests | 🛑 Always Ask | Coach drafts, reviews, then sends. |
| Create/modify client profiles | 🛑 Always Ask | New client = confirm. Edits = confirm. |
| Connect to new external integration | 🛑 Always Ask | OAuth = explicit consent moment. |
| Access sensitive data sources | 🛑 Always Ask | Progressive trust — only with explicit opt-in. |

---

## 3b: Coachee-Facing Sage — Tiered Autonomy Model

### TIER 1: Full Autonomy (Sage Acts Freely)
*Low stakes. No coach involvement needed.*

| Action | Examples |
|--------|----------|
| Routine check-ins | "How did that conversation with your boss go?" / "Good luck at your retreat today!" |
| Commitment reminders | "You mentioned wanting to meditate 3x this week — how's that going?" |
| Celebration prompts | "You completed your commitment! How did it feel?" |
| Pre-session reminders | "Your session with [Coach] is tomorrow at 2pm. Anything you want to focus on?" |
| Reflection invitations | "It's been a week since your last session. Any insights bubbling up?" |
| Resource delivery | Sending materials the coach already approved to share |
| Answering coachee questions about their own data | "What did I commit to last session?" / "Show me my goals" |
| Processing/listening conversations | Coachee vents, Sage reflects back, no action taken |
| Coachee-initiated data actions | Coachee deletes data, exports, revokes consent — their sovereign choice |
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

**Important Clarification:** The *drafting* of session notes and T-15 prep is fully automatic (Tier 1 behavior). What requires approval is the *sending* of session notes to the coachee. T-15 prep is for the coach's eyes only and is never sent — the coach simply reviews it before the session and can keep it open or close it.

| Action | Examples |
|--------|----------|
| Personalized outreach beyond templates | Nudge referencing something sensitive or specific |
| Suggesting new resources | Book or practice not pre-approved |
| Boundary-adjacent conversations | Coachee asks for advice approaching therapeutic territory |
| Accountability escalation | Coachee consistently not following through |
| Introducing new topics | Sage notices pattern, wants to raise with coachee |
| Scheduling changes | Suggesting coachee book extra session |
| Connecting coachee with external resources | Therapist referral, support group, etc. |
| **Sending session notes to coachee** | Core workflow — Sage auto-drafts (Tier 1), coach reviews/edits, then approves sending |
| **Sending ancillary documents/guides** | Auto-drafted resources require coach approval before attaching to notes |

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

### Control Layers

**Coachee Controls (their preferences):**
- Nudge frequency — how often Sage checks in
- Time-of-day preferences — when nudges are welcome
- Communication channel — email, text, app
- Opt-out of specific nudge types
- Privacy tier settings (what stays private vs. shared)

**Coach Controls (their practice):**
- Autonomy level per client — more or less Sage independence
- Escalation sensitivity — what triggers immediate alerts
- Digest preferences — daily, weekly, real-time
- Opt-out certain clients entirely — some get full Sage, others minimal
- Template and resource pre-approval — what Sage can send freely

### The Governing Principle
> **Sage drafts freely, surfaces proactively, supports continuously — but acts on the world only with appropriate human approval based on stakes.**

---

# Section 4: Confirmed Integration Targets

## For Jesse (Test Case) — Build These Now

| Integration | Priority | Purpose |
|-------------|----------|---------|
| **Google Calendar** | P0 | Detect sessions, trigger T-15 prep, daily command center |
| **Google Meet** | P0 | Auto-pull transcripts |
| **Google Docs** | P0 | Read/write session notes |
| **Google Drive** | P0 | File storage, access existing docs |
| **Google Sheets** | P1 | Billing export, client tracking |
| **Gmail** | P0 | Send session notes, read client communication |
| **Zoom** | P0 | Import transcripts, access recordings |
| **Fireflies.ai** | P1 | Import transcripts (Jesse's primary transcription tool) |
| **Calendly** | P1 | Scheduling awareness, calendar invites |
| **Square** | P1 | Billing integration, "bill my clients" command |

## Client Check-In Channels

| Channel | Priority | Use Case |
|---------|----------|----------|
| **Email** | P0 | Session summaries, nudges, check-ins |
| **SMS/Text** | P1 | Quick nudges, reminders |
| **WhatsApp** | P2 | Future — international coachees |

## NOT Needed for Test Case (Defer)
- ❌ Notion — Jesse doesn't use
- ❌ Outlook Calendar — not on Microsoft stack
- ❌ Microsoft Teams — not on Microsoft stack
- ❌ CoachAccountable — **FLAG: Ask team what this is? Is it an app/platform?**

## Future Vision (Post-Test Case)
Eventually integrate with all major platforms so coaches can plug in whatever they already use.

---

# Section 5: Data & Privacy Boundaries

## 5a: What Data Can Sage Store?

| Data Type | Store? | Notes |
|-----------|--------|-------|
| Session transcripts | ✅ Yes | Core functionality — encrypted at rest |
| Session notes (drafts and final) | ✅ Yes | Version history preserved |
| Coach profile & preferences | ✅ Yes | Voice profile, templates, settings |
| Client profiles | ✅ Yes | Name, contact, goals, context |
| **Coachee intake forms** | ✅ Yes | Onboarding questionnaires, initial assessments, background info |
| Client assessment results | ✅ Yes | With client consent (Enneagram, StrengthsFinder, DISC, etc.) |
| Ancillary documents & guides | ✅ Yes | Auto-drafted resources, frameworks, conversation guides — stored in client's Resource Library |
| Conversation history (coach-Sage) | ✅ Yes | For context continuity |
| Conversation history (coachee-Sage) | ✅ Yes | Tier 1/2/3 based on coachee settings |
| Calendar data | ✅ Yes | Session scheduling, patterns |
| Email content | ⚠️ Limited | Only coaching-related threads, with consent |
| Billing/payment records | ✅ Yes | For invoicing features |
| Video recordings | ⚠️ Short-term | 2 weeks max, then auto-deleted (coachee can download before deletion) |

## 5b: What Must Be Redacted or Never Sent to LLM?

| Data Type | Rule |
|-----------|------|
| Passwords, API keys, credentials | Never sent, auto-redacted |
| Full SSN, credit card numbers | Never sent, auto-redacted |
| Data marked Tier 1 (Private) by coachee | Never sent to LLM in a way coach can see — stays between coachee and Sage only |
| Health information (PHI) | Requires explicit consent + HIPAA considerations |
| Information about third parties | Minimize — focus on coachee, not detailed info about their family/colleagues |
| Coach's other clients' data | Strict isolation — never cross-contaminate |

## 5c: Client (Coachee) Consent Expectations

**What coachees agree to by default:**
1. AI-assisted notes — Sessions transcribed and processed by AI
2. Data storage — Transcripts and notes stored securely with encryption
3. Coach visibility (Tier 2) — Coach can see session content, goals, progress by default
4. AI companion access — (If enabled) 24/7 Sage support, with coach seeing summaries
5. Data ownership — Coachee owns their data, can export or delete anytime

**What coachees can control:**
- **Tier 1 (Private)** — Mark ANY content as private. Stays between coachee and Sage only.
- **Tier 2 (Coach-Shared)** — Default for most coaching content.
- **Tier 3 (Company-Visible)** — Only if corporate-sponsored. Anonymized, aggregated metrics only.

**The Trust Model:**
> Coachees can share 95% openly with their coach, but keep that 5% truly private — things they can only tell a non-human intelligence. Sage uses this private context to provide better support and recognize patterns, but the coach never sees it.

## 5d: Retention Policy

**Note:** Retention preferences are configurable at onboarding and can be adjusted anytime by the coachee.

| Data Type | Default Retention | Configurable? |
|-----------|-------------------|---------------|
| Active client data | Indefinitely while relationship active | Yes |
| Inactive client data | 7 years (therapy/medical best practices), then auto-deleted | Yes — coachee can set 1yr, 3yr, 7yr, or indefinite |
| Video recordings | 2 weeks, then auto-deleted (coachee notified, can download) | Yes — can opt for immediate deletion |
| Deleted data | Gone immediately and permanently — "delete means delete" | N/A |
| Conversation history | Same as client data retention | Yes |
| Billing records | 7 years (tax/legal requirements) | No — legal requirement |
| Backups | Rolling 30-day backup, then purged | No — system requirement |

## 5e: End-of-Life Data Planning (Onboarding Question)

During coachee onboarding, ask:
> "If you become inactive for an extended period, or in the event of your death, what would you like to happen to your data?"

**Options:**
- Keep my data for 7 years, then delete
- Delete my data after 1 year of inactivity
- Delete my data after 3 years of inactivity
- Keep my data indefinitely (until manually deleted)
- Designate a trusted person who can access/delete my data

## 5f: Delete Confirmation UX

1. **First warning:** "This will permanently delete [X]. This cannot be undone."
2. **Second confirmation:** "Are you absolutely sure? Type DELETE to confirm."
3. **Final confirmation:** "Your data has been permanently deleted. It cannot be recovered."

---

# Section 6: Web App Redesign Scope

## Recommendation: Key Screens Only

The extension is the star of the demo and the primary interface. But the web app matters for onboarding, deep work, settings, and pitch credibility.

## Architecture: Hybrid Model

- **Extension** is the daily driver — lives in browser, overlays on everything
- **Web app** exists for onboarding, deep dives, settings, demo/pitch
- Coach rarely goes to web app directly — Sage brings them there when needed

**Philosophy:**
> "Sage brings you the screen when you need it. You never have to go looking for Sage."

## Screens to Polish for Pitch

| Screen | Priority | Why |
|--------|----------|-----|
| **Dashboard** | P0 | First thing they see. North Star, today's sessions, critical actions. |
| **Client List** | P0 | All clients at a glance, select and navigate. |
| **Client Profile** | P0 | Deep view — history, goals, progress, notes, private coach intelligence. |
| **Session Notes Editor** | P0 | 5-section structure, AI command bar, one-click send. |
| **T-15 Prep View** | P0 | Contextual intelligence before sessions. |
| **Onboarding Flow** | P1 | First experience — "scan first, ask what's missing" philosophy. |
| **Settings/Integrations** | P1 | Connected apps, preferences. |
| **Schedule/Calendar** | P2 | Visual view — but most scheduling via prompt. |
| **Resource Library** | P2 | Browse/search — can also ask Sage. |
| **Business/Billing** | P2 | Functional but doesn't need to be beautiful. |

## Mobile Considerations

- Read-heavy, action-light
- One-tap approvals
- Prompt bar always accessible
- Full editing → "I'll do this on my laptop"

---

# Section 7: Brand Direction

## 7a: Product Name
**"Sage"** (consult trademark attorney; "Sage for Coaches" as safer fallback)

## 7b: Color / Logo / Typography

**Logo:** Ouroboros symbol (snake/circle). Simplified versions for small sizes.

**Colors:** Teal-blue-purple gradient palette
- Primary: Deep teal/blue (trust, calm, wisdom)
- Accent: Purple (transformation, depth)
- Warm touches: Gold/orange from ouroboros (warmth, humanity)

**Typography:** Clean, modern, readable. Inter, Söhne, or similar.

## 7c: UI Inspiration

1. **Linear** — Clean, fast, keyboard-driven, command bar magic
2. **Notion** — Flexible, calm, content breathes
3. **Superhuman** — Speed, AI enhances not interrupts, premium feel

**NOT:** Salesforce (cluttered), most coaching platforms (dated), ChatGPT (too chat-centric)

**Vibe:** Calm confidence. Powerful but not complicated.

## 7d: Tone/Voice for Sage

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

# Section 8: Agentic Client Analysis

## 8a: Priority Data Sources

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

**Next Stage:** Full digital exhaust (with progressive trust), social media (future).

## 8b: Most Valuable Insights

**The Core Superpower:**
> Sage sees the whole person — who they truly are, who they're becoming, and what's hidden in their shadow — without the coach's projections, biases, or limited memory.

**The Insight Hierarchy:**

| Level | What Sage Sees | Example |
|-------|----------------|---------|
| 1. **Patterns** | What repeats across sessions | "She mentions feeling 'invisible' in 7 of 12 sessions" |
| 2. **Trajectories** | Where they're heading based on current path | "At this rate of delegation avoidance, burnout in 6 months" |
| 3. **Gaps** | Contradictions between stated and actual | "Says work-life balance is priority #1, but canceled 4 sessions for work" |
| 4. **Shadow** | What's hidden, denied, unconscious | "The anger at his team may be displaced anger at himself" |
| 5. **Becoming** | Who they're growing into | "She's developing her voice — first time she pushed back on her boss" |
| 6. **Hard Truths** | What coach can't/won't say, coachee can't see | "His perfectionism isn't about excellence — it's about avoiding criticism" |

**Core Coaching Ideology:**
> Always return to "What do you really want?" — their North Star, deep desire. Work on the beliefs, mindsets, habits that block them from becoming who they're meant to be.

**What Sage Uniquely Offers:**
- **Perfect memory** — Never forgets a detail from session 1
- **Pattern recognition** — Sees connections humans miss
- **No projection** — Doesn't overlay its own issues onto the client
- **No fatigue** — Equal attention to session 47 as session 1
- **Cross-domain synthesis** — Connects work patterns to relationship patterns to childhood patterns

## 8c: Tone Calibration

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

## 8d: Presentation Format

**Narrative + Visual Hybrid:**

For **T-15 Prep** (quick glance):
- Bullet points for key context
- One-line pattern summaries
- Commitment status (✓ / ✗ / ?)
- Suggested opening questions

For **Client Profile** (deep dive):
- Poetic narrative for deep insights ("Marcus is at a crossroads...")
- Visual timeline showing emotional arc across sessions
- Commitment tracking with trends
- Direct quotes hyperlinked to transcript source
- Coach's private observations and hypotheses

For **Pattern Intelligence**:
- Frequency counts ("mentioned 'not good enough' 14 times")
- Trend arrows (↑ confidence, ↓ anxiety)
- Relationship maps (who matters to them)
- Theme clusters (work, family, identity, health)

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

# Section 9: Wisdom Corpus Engine

## 9a: Initial Sources

**Tier 1: Core Coaching Canon (MVP) — 75-100 books**

Categories:
- Coaching Foundations (Co-Active, Coaching Habit, etc.)
- Depth Psychology & Shadow Work (Jung, IFS, Schwartz, Zweig)
- Psychology & Therapy (Frankl, van der Kolk, Levine)
- Somatics & Embodiment (Levine, polyvagal theory)
- Conscious Leadership (15 Commitments, Creator/Reactor frameworks)
- Enneagram (Riso/Hudson complete works, Helen Palmer, Beatrice Chestnut)
- Personal Development (Atomic Habits, Mindset, etc.)
- Communication (NVC, Crucial Conversations)
- Mindfulness (Tolle, Kabat-Zinn, Brach)
- Relationships & Attachment (Gottman, Johnson, Hendrix)
- Neuroscience (Buddha's Brain, Siegel)

**Deep research in progress** — curating from 12,397-book corpus with prioritized recommendations.

## 9b: Jesse's Methodologies as Core Knowledge

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

**Voice:** Conversational, intimate, bold + compassionate, efficient not verbose.

## 9c: Attribution Policy

| Context | Style |
|---------|-------|
| Session notes (soul-level) | Light/invisible, but hyperlinked for click-through |
| Resources section | Explicit with hyperlinks |
| Direct quotes | Credit inline |
| On demand | Explain source when asked |

## 9d: Community Input

- Anyone can suggest sources (AI filters, human approves)
- Vetted coaches can upload to walled-off section
- Each coach/coachee has their own territory
- AI learns preferences but intentionally diversifies to expand horizons
- No cross-contamination between coaches

## The Wisdom Corpus Vision

**Two Powers:**

1. **Precision Retrieval** — Pull the exact right quote, framework, concept for this person in this moment, traceable to source

2. **Integrated Wisdom** — Fundamentally wiser entity that sees patterns across all human knowledge, understands transformation at the deepest level

**Result:** An AI wiser than any coach, therapist, or sage who ever lived — because it holds the integrated wisdom of ALL of them.

---

# Section 10: Chat Feedback Channel

## 10a: Routing Destination

| Feedback Type | Route To |
|---------------|----------|
| Bug reports | GitHub Issues or Linear |
| Feature requests | Linear or feedback board |
| Urgent/blocking bugs | Slack channel + auto-create ticket |
| General product feedback | Internal database + periodic digest |
| Coaching-specific feedback | Coach's own notes/profile |

**Primary:** Linear. **Urgent:** Slack webhook.

## 10b: Urgency Handling

| Level | Interrupt Flow? | Action |
|-------|-----------------|--------|
| Critical | NO | Auto-log, alert team, acknowledge user |
| High | NO | Log, acknowledge, continue |
| Medium | NO | Log silently |
| Low | NO | Log via feedback button |

**Principle:** Never interrupt the sacred coaching space for a bug report.

## 10c: Acknowledgment Level

| Type | Response |
|------|----------|
| Urgent bug | "Captured and flagged for immediate attention." |
| Regular bug | "Got it — logged for the team." |
| Feature request | "Added to feedback list." |
| Passive | Silent logging |

---

# Section 11: Privacy Model Validation

## 11a: Tiered Revelation Model (3 Tiers)

| Tier | Who Sees | Description |
|------|----------|-------------|
| **Tier 1: Private** | Coachee + AI only | Coachee's private notes. AI uses for context, coach NEVER sees. |
| **Tier 2: Coach-Shared** | Coach + Coachee + AI | Default for coaching content. |
| **Tier 3: Org-Visible** | Anonymized/aggregated only | Corporate sees metrics, never individual content. |

**Key:** Tier 1 is architecturally enforced — coach literally cannot access (no encryption key).

## 11b: Evaporation Promise

| Aspect | Promise |
|--------|---------|
| Instant | Deletion happens immediately |
| Complete | All data, backups, derived data |
| Verifiable | Confirmation + audit log |
| Irreversible | Cannot be undone |

> "Delete means delete. Not archived. Not recoverable. Gone."

## 11c: Compliance Planning

| Regulation | Priority | What It Signals |
|------------|----------|-----------------|
| GDPR | HIGH | Gold standard for privacy |
| SOC 2 Type II | HIGH | Enterprise requirement, independent audit |
| HIPAA-ready | MEDIUM-HIGH | Healthcare-grade security |
| ISO 27001 | MEDIUM | International security standard |

**Approach:** Design for GDPR from day 1, pursue SOC 2 first, build HIPAA-ready architecture.

## 11d: Client Trust

**Trust Hierarchy:**

| Level | What It Means | How Sage Delivers |
|-------|---------------|-------------------|
| 1. Architecture | They CAN'T violate privacy | Zero-knowledge, user-held keys |
| 2. Certification | Third parties VERIFY security | SOC 2, HIPAA, ISO 27001 |
| 3. Policy | They PROMISE not to violate | Clear terms, plain language |
| 4. Reputation | Others SAY they're trustworthy | Testimonials, track record |
| 5. Enforcement | CONSEQUENCES if they violate | GDPR fines, legal liability |

**Sage operates at Levels 1 + 2** — architecture makes violation impossible, certifications prove it.

**For coachees:**
> "We're SOC 2 certified and HIPAA-compliant — independent auditors verified our security. And the way we built this means we literally cannot access your private content even if we wanted to."

---

# Summary

All 11 sections complete. Document ready for team review.

**Pending:**
- Trademark consultation for "Sage" name
- Team clarification on "CoachAccountable" integration

---

# APPENDIX A: Wisdom Corpus Deep Dive

## Executive Summary

Analysis of Jesse's 12,397-book Wisdom Corpus with prioritized recommendations for RAG-optimized coaching knowledge base. Priority criterion: **coachee transformation impact**.

### Current Corpus Strengths
- Philosophy (913 books), Literature (689), Wisdom Traditions (350)
- Strong coverage: Ken Wilber (38), Joseph Campbell (24), Byron Katie (13), Goleman (11), Brown (8), Siegel (9)
- Core coaching texts present: Co-Active Coaching, The Coaching Habit, Coaching for Performance

### Critical Gaps Identified
1. Arbinger Institute trilogy (Leadership and Self-Deception, Anatomy of Peace, Outward Mindset)
2. David Rock/NeuroLeadership (Your Brain at Work, SCARF model)
3. Terry Real's relational work
4. Heath Brothers (Switch, Made to Stick)
5. Thomas Moore's soul work (Care of the Soul)
6. Professional training/education textbooks (major gap)
7. Modality-specific clinical manuals

---

## TOP 50 PRIORITY ADDITIONS

These books fill the most critical gaps for professional coaching application. Ordered by transformation impact.

### A. Coaching Methodology Gaps (10 books)

| # | Book | Author | Why Critical |
|---|------|--------|--------------|
| 1 | **Leadership and Self-Deception** | Arbinger Institute | Self-deception patterns — foundational |
| 2 | **The Anatomy of Peace** | Arbinger Institute | Heart at war/peace framework |
| 3 | **The Outward Mindset** | Arbinger Institute | Inward vs outward orientation |
| 4 | **Your Brain at Work** | David Rock | SCARF model, neuroscience for coaches |
| 5 | **Change Your Questions, Change Your Life** | Marilee Adams | Choice Map framework |
| 6 | **Thanks for the Feedback** | Stone & Heen | Receiving feedback — missing complement to Difficult Conversations |
| 7 | **Conversational Intelligence** | Judith Glaser | Trust in conversations |
| 8 | **Switch** | Chip & Dan Heath | Elephant/Rider model — behavior change |
| 9 | **Made to Stick** | Chip & Dan Heath | Ideas that stick |
| 10 | **The Reflective Practitioner** | Donald Schön | Reflection-in-action theory |

### B. Relational/Attachment Gaps (8 books)

| # | Book | Author | Why Critical |
|---|------|--------|--------------|
| 11 | **The Seven Principles for Making Marriage Work** | John Gottman | Gottman Method core |
| 12 | **A General Theory of Love** | Lewis, Amini, Lannon | Limbic resonance science |
| 13 | **I Don't Want to Talk About It** | Terry Real | Male depression, covert shame |
| 14 | **The New Rules of Marriage** | Terry Real | Relational repair |
| 15 | **Us** | Terry Real | Full relational life therapy |
| 16 | **Polysecure** | Jessica Fern | Attachment in diverse relationships |
| 17 | **Love Sense** | Sue Johnson | Attachment science accessible |
| 18 | **The Science of Trust** | John Gottman | Research foundation |

### C. Shadow Work & Depth Psychology (7 books)

| # | Book | Author | Why Critical |
|---|------|--------|--------------|
| 19 | **Meeting the Shadow** | Zweig & Abrams (eds.) | Essential shadow anthology |
| 20 | **King, Warrior, Magician, Lover** | Moore & Gillette | Masculine archetypes |
| 21 | **Care of the Soul** | Thomas Moore | Soul in daily life |
| 22 | **Inner Work** | Robert Johnson | Dream and active imagination |
| 23 | **Romancing the Shadow** | Connie Zweig | Shadow in relationships |
| 24 | **A Little Book on the Human Shadow** | Robert Bly | Accessible shadow intro |
| 25 | **Healing the Shame That Binds You** | John Bradshaw | Toxic shame |

### D. Adult Development & Vertical Growth (7 books)

| # | Book | Author | Why Critical |
|---|------|--------|--------------|
| 26 | **Spiral Dynamics** | Beck & Cowan | Developmental stages |
| 27 | **An Everyone Culture** | Kegan & Lahey | Deliberately developmental orgs |
| 28 | **Changing on the Job** | Jennifer Garvey Berger | Adult development for leaders |
| 29 | **Unlocking Leadership Mindtraps** | Jennifer Garvey Berger | Complexity and leadership |
| 30 | **Tribal Leadership** | Logan, King, Fischer-Wright | Stage-based culture |
| 31 | **Leadership Agility** | Joiner & Josephs | Development and leadership |
| 32 | **Simple Habits for Complex Times** | Berger & Johnston | Complexity practices |

### E. Organizational Culture (6 books)

| # | Book | Author | Why Critical |
|---|------|--------|--------------|
| 33 | **The Culture Code** | Daniel Coyle | How culture works |
| 34 | **Turn the Ship Around!** | L. David Marquet | Intent-based leadership |
| 35 | **Multipliers** | Liz Wiseman | Leadership that amplifies |
| 36 | **Leaders Eat Last** | Simon Sinek | Safety and belonging |
| 37 | **Extreme Ownership** | Jocko Willink | Radical responsibility |
| 38 | **Measure What Matters** | John Doerr | OKRs for alignment |

### F. Professional Training Texts (12 books)

| # | Book | Author | Why Critical |
|---|------|--------|--------------|
| 39 | **Theory and Practice of Counseling and Psychotherapy** | Gerald Corey | THE counseling textbook |
| 40 | **Psychotherapy Relationships That Work** | Norcross & Wampold | Evidence-based relationships |
| 41 | **The Heart and Soul of Change** | Hubble, Duncan, Miller | Common factors research |
| 42 | **Systems of Psychotherapy** | Prochaska & Norcross | Transtheoretical model |
| 43 | **Evidence Based Coaching Handbook** | Stober & Grant | Research foundation for coaching |
| 44 | **Existential Psychotherapy** | Irvin Yalom | Deep existential approach |
| 45 | **The Theory and Practice of Group Psychotherapy** | Irvin Yalom | Group work gold standard |
| 46 | **Cognitive Behavior Therapy: Basics and Beyond** | Judith Beck | CBT training manual |
| 47 | **DBT Skills Training Manual** | Marsha Linehan | DBT clinical manual |
| 48 | **Emotionally Focused Couple Therapy** | Susan Johnson | EFT clinical manual |
| 49 | **Ethics in Psychotherapy and Counseling** | Pope & Vasquez | Ethical foundations |
| 50 | **Deliberate Practice for Psychotherapists** | Rousmaniere | Skill development |

---

## EXTENDED PRIORITY LIST: BOOKS 51-150

### G. Additional Relational & Couples (51-60)

| # | Book | Author |
|---|------|--------|
| 51 | What Makes Love Last? | John Gottman |
| 52 | The Marriage Clinic | John Gottman |
| 53 | Passionate Marriage | David Schnarch |
| 54 | Crucible Approach | David Schnarch |
| 55 | Wired for Dating | Stan Tatkin |
| 56 | Your Brain on Love | Stan Tatkin |
| 57 | How Can I Get Through to You? | Terry Real |
| 58 | The Relationship Cure | John Gottman |
| 59 | Eight Dates | John & Julie Gottman |
| 60 | Love Worth Making | Stephen Snyder |

### H. Additional Depth Psychology (61-75)

| # | Book | Author |
|---|------|--------|
| 61 | Soul Mates | Thomas Moore |
| 62 | The Re-Enchantment of Everyday Life | Thomas Moore |
| 63 | A Blue Fire | James Hillman |
| 64 | The Thought of the Heart | James Hillman |
| 65 | We (Understanding Psychology of Romantic Love) | Robert Johnson |
| 66 | Lying with the Heavenly Woman | Robert Johnson |
| 67 | Transformation | Robert Johnson |
| 68 | The Fisher King and the Handless Maiden | Robert Johnson |
| 69 | Women Who Run with the Wolves | Clarissa Pinkola Estés |
| 70 | The Maiden King | Robert Bly & Marion Woodman |
| 71 | Addiction to Perfection | Marion Woodman |
| 72 | The Pregnant Virgin | Marion Woodman |
| 73 | Memories, Dreams, Reflections | Carl Jung |
| 74 | Modern Man in Search of a Soul | Carl Jung |
| 75 | The Undiscovered Self | Carl Jung |

### I. Trauma & Nervous System Expansion (76-90)

| # | Book | Author |
|---|------|--------|
| 76 | Complex PTSD: From Surviving to Thriving | Pete Walker |
| 77 | The Tao of Fully Feeling | Pete Walker |
| 78 | Healing the Fragmented Selves of Trauma Survivors | Janina Fisher |
| 79 | Transforming the Living Legacy of Trauma | Janina Fisher |
| 80 | Nurturing Resilience | Kathy Kain & Stephen Terrell |
| 81 | The Body Bears the Burden | Robert Scaer |
| 82 | 8 Keys to Safe Trauma Recovery | Babette Rothschild |
| 83 | The Body Remembers | Babette Rothschild |
| 84 | Polyvagal Exercises for Safety and Connection | Deb Dana |
| 85 | The Polyvagal Theory in Therapy | Deb Dana |
| 86 | Accessing the Healing Power of the Vagus Nerve | Stanley Rosenberg |
| 87 | When the Body Says No | Gabor Maté |
| 88 | The Myth of Normal | Gabor Maté |
| 89 | Scattered Minds | Gabor Maté |
| 90 | In the Realm of Hungry Ghosts | Gabor Maté |

### J. Meditation & Contemplative Depth (91-105)

| # | Book | Author |
|---|------|--------|
| 91 | The Mind Illuminated | Culadasa (John Yates) |
| 92 | Seeing That Frees | Rob Burbea |
| 93 | Mastering the Core Teachings of the Buddha | Daniel Ingram |
| 94 | The Heart of the Buddha's Teaching | Thich Nhat Hanh |
| 95 | When Things Fall Apart | Pema Chödrön |
| 96 | The Places That Scare You | Pema Chödrön |
| 97 | Comfortable with Uncertainty | Pema Chödrön |
| 98 | The Wisdom of No Escape | Pema Chödrön |
| 99 | After the Ecstasy, the Laundry | Jack Kornfield |
| 100 | No Time Like the Present | Jack Kornfield |
| 101 | True Refuge | Tara Brach |
| 102 | Trusting the Gold | Tara Brach |
| 103 | Stillness Speaks | Eckhart Tolle |
| 104 | A Thousand Names for Joy | Byron Katie |
| 105 | I Need Your Love — Is That True? | Byron Katie |

### K. Organizational & Leadership Expansion (106-120)

| # | Book | Author |
|---|------|--------|
| 106 | Teaming | Amy Edmondson |
| 107 | Impact Players | Liz Wiseman |
| 108 | Leadership Is Language | L. David Marquet |
| 109 | Death by Meeting | Patrick Lencioni |
| 110 | The Ideal Team Player | Patrick Lencioni |
| 111 | The Motive | Patrick Lencioni |
| 112 | Trillion Dollar Coach | Eric Schmidt et al. |
| 113 | Creativity, Inc. | Ed Catmull |
| 114 | The Advantage | Patrick Lencioni |
| 115 | Primal Leadership | Goleman, Boyatzis, McKee |
| 116 | Resonant Leadership | Boyatzis & McKee |
| 117 | The New One Minute Manager | Ken Blanchard |
| 118 | Radical Collaboration | Tamm & Luyet |
| 119 | Conversational Capacity | Craig Weber |
| 120 | The Thin Book of Trust | Charles Feltman |

### L. Behavior Change & Habits (121-130)

| # | Book | Author |
|---|------|--------|
| 121 | Tiny Habits | BJ Fogg |
| 122 | The Power of Habit | Charles Duhigg |
| 123 | Smarter Faster Better | Charles Duhigg |
| 124 | Nudge | Richard Thaler & Cass Sunstein |
| 125 | Influence | Robert Cialdini |
| 126 | Pre-Suasion | Robert Cialdini |
| 127 | The Willpower Instinct | Kelly McGonigal |
| 128 | The Upside of Stress | Kelly McGonigal |
| 129 | Grit | Angela Duckworth |
| 130 | Range | David Epstein |

### M. Positive Psychology & Flourishing (131-140)

| # | Book | Author |
|---|------|--------|
| 131 | Flourish | Martin Seligman |
| 132 | Learned Optimism | Martin Seligman |
| 133 | The Happiness Hypothesis | Jonathan Haidt |
| 134 | The Righteous Mind | Jonathan Haidt |
| 135 | The Happiness Advantage | Shawn Achor |
| 136 | Before Happiness | Shawn Achor |
| 137 | Option B | Sheryl Sandberg & Adam Grant |
| 138 | Give and Take | Adam Grant |
| 139 | Think Again | Adam Grant |
| 140 | Hidden Potential | Adam Grant |

### N. Career, Purpose & Life Design (141-150)

| # | Book | Author |
|---|------|--------|
| 141 | Designing Your Life | Burnett & Evans |
| 142 | Designing Your Work Life | Burnett & Evans |
| 143 | So Good They Can't Ignore You | Cal Newport |
| 144 | Let Your Life Speak | Parker Palmer |
| 145 | A Hidden Wholeness | Parker Palmer |
| 146 | The Courage to Teach | Parker Palmer |
| 147 | The Soul of Money | Lynne Twist |
| 148 | Die Empty | Todd Henry |
| 149 | The Crossroads of Should and Must | Elle Luna |
| 150 | Essentialism | Greg McKeown |

---

## BOOKS 151-200: Additional Depth

### Creativity & Expression (151-165)
151. The Artist's Way — Julia Cameron
152. The War of Art — Steven Pressfield
153. Do the Work — Steven Pressfield
154. Turning Pro — Steven Pressfield
155. Big Magic — Elizabeth Gilbert
156. Bird by Bird — Anne Lamott
157. Writing Down the Bones — Natalie Goldberg
158. Wild Mind — Natalie Goldberg
159. The Creative Habit — Twyla Tharp
160. Art & Fear — Bayles & Orland
161. Steal Like an Artist — Austin Kleon
162. Show Your Work — Austin Kleon
163. Free Play — Stephen Nachmanovitch
164. The Courage to Create — Rollo May
165. Flow and the Psychology of Discovery — Csikszentmihalyi

### Family Systems & Parenting (166-180)
166. Parenting from the Inside Out — Dan Siegel
167. The Whole-Brain Child — Dan Siegel
168. No-Drama Discipline — Dan Siegel
169. Brainstorm — Dan Siegel
170. How to Talk So Kids Will Listen — Faber & Mazlish
171. Siblings Without Rivalry — Faber & Mazlish
172. Unconditional Parenting — Alfie Kohn
173. The Conscious Parent — Shefali Tsabary
174. The Awakened Family — Shefali Tsabary
175. Running on Empty — Jonice Webb
176. Recovering from Emotionally Immature Parents — Lindsay Gibson
177. Family Secrets — John Bradshaw
178. Homecoming — John Bradshaw
179. It Didn't Start with You — Mark Wolynn
180. The New Peoplemaking — Virginia Satir

### Classic Therapeutic Foundations (181-200)
181. On Becoming a Person — Carl Rogers
182. Freedom to Learn — Carl Rogers
183. Client-Centered Therapy — Carl Rogers
184. Toward a Psychology of Being — Abraham Maslow
185. The Farther Reaches of Human Nature — Abraham Maslow
186. Motivation and Personality — Abraham Maslow
187. Gestalt Therapy Verbatim — Fritz Perls
188. The Gestalt Approach — Fritz Perls
189. I and Thou — Martin Buber
190. The Art of Loving — Erich Fromm
191. Escape from Freedom — Erich Fromm
192. The Courage to Be — Paul Tillich
193. Love's Executioner — Irvin Yalom
194. When Nietzsche Wept — Irvin Yalom
195. Staring at the Sun — Irvin Yalom
196. The Gift of Therapy — Irvin Yalom
197. Becoming Myself — Irvin Yalom
198. The Denial of Death — Ernest Becker
199. The Road Less Traveled — M. Scott Peck
200. Further Along the Road Less Traveled — M. Scott Peck

---

## CORPUS SUMMARY

**Already Present in 12,397-book corpus (strong foundation):**
- Core coaching texts (Co-Active, Coaching Habit, etc.)
- Ken Wilber's integral work (38 books)
- Joseph Campbell's mythology (24 books)
- Brené Brown's vulnerability work (8 books)
- Dan Siegel's interpersonal neurobiology (9 books)
- Enneagram (12 books including Wisdom of the Enneagram)
- Somatic/trauma foundations (Levine, Ogden, Porges)
- IFS (Schwartz, Earley)
- ACT (Hayes, Harris)
- Mindfulness (Tolle, Kabat-Zinn, Brach, Chödrön)

**Priority Additions (Top 200 above):**
- Books 1-50: Critical gaps — add immediately
- Books 51-100: High-value depth — second wave
- Books 101-150: Important expansion — third wave
- Books 151-200: Comprehensive coverage — fourth wave

**Full detailed analysis:** See [WISDOM_CORPUS_RESEARCH.md](WISDOM_CORPUS_RESEARCH.md) for complete modality-by-modality breakdown, training text gaps, and RAG optimization recommendations.

---

## MODALITY-SPECIFIC TRAINING GAPS

### What's Present (Good):
- ✅ ACT (Hayes, Harris basics)
- ✅ IFS (Schwartz, Earley)
- ✅ Somatic/SE (Levine, Ogden, Porges)
- ✅ Motivational Interviewing (Miller & Rollnick)
- ✅ CBT foundations (Beck original)

### What's Missing (Critical):
- ❌ DBT (Linehan's manuals)
- ❌ EMDR (Shapiro — zero texts)
- ❌ EFT clinical manuals (Johnson's training texts)
- ❌ Gottman Method manuals
- ❌ Gerald Corey textbooks
- ❌ Common factors research (Wampold, Duncan, etc.)
- ❌ Ethics texts (Pope & Vasquez)
- ❌ Clinical interviewing skills

---

## RAG OPTIMIZATION RECOMMENDATIONS

### Priority Framework Extractions

These frameworks should be deeply embedded for retrieval:

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

### Tagging Structure for Entries

Each corpus entry should be tagged by:

1. **Coach Use Case**
   - Post-session (notes, reflection)
   - Pre-session (T-15 prep)
   - In-session (real-time support)
   - Between-session (ongoing development)

2. **Coachee Situation**
   - Stuck/blocked
   - Anxious/overwhelmed
   - Relationship conflict
   - Career transition
   - Meaning/purpose crisis
   - Shadow work needed
   - Nervous system dysregulation

3. **Intervention Level**
   - Cognitive (reframes, beliefs)
   - Emotional (feeling work)
   - Somatic (body-based)
   - Relational (connection patterns)
   - Spiritual (meaning, transcendence)

---

## IMMEDIATE ACTION ITEMS

1. **Add Top 50 books** listed above (fills critical gaps)
2. **Extract frameworks** into structured format for precise retrieval
3. **Tag existing corpus** by use case, situation, intervention level
4. **Ingest training texts** for professional foundation
5. **Create citation system** linking insights to source material

---

## WHAT THE CORPUS ENABLES

When complete, the Wisdom Corpus gives Sage:

**Precision Power:** Pull the exact right quote, framework, or practice for this person in this moment — traceable to source.

**Integrated Wisdom:** A fundamentally wiser entity that sees patterns across all human knowledge about transformation.

**Professional Grounding:** Evidence-based foundation that elevates coaching from intuition to informed practice.

**Result:** An AI assistant wiser than any single coach, therapist, or sage — because it holds the integrated wisdom of ALL of them, while remaining humble about what it doesn't know.

---

*Full detailed analysis available in WISDOM_CORPUS_RESEARCH.md*

---

*Generated: January 2026*
*Author: Jesse Torrence with Claude*

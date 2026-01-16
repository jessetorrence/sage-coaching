# Sage: Invisible Coaching Intelligence
## Master Design Document v3

*Last updated: January 15, 2026*
*Status: Complete prototype specification*

---

# PART 1: EXECUTIVE SUMMARY

## What Sage Is

Sage is an embedded, agentic AI intelligence layer for coaches, clients, and organizations. It is not an app, not a dashboard, not a destination — it is invisible infrastructure that lives inside existing tools and workflows.

**Core promise:** Nothing important in a coaching relationship is ever lost — and insight compounds automatically over time.

**Design philosophy:** Don't ask what can be found. Scan first, ask only what's missing.

**Vision:** On every coach's dashboard, computer, and phone worldwide. The infrastructure that ICF itself pushes to its entire membership network.

---

# PART 2: CORE PHILOSOPHY

## The Golden Rules

1. **No new destination** — not an app, not a website, not a dashboard
2. **AI-first data gathering** — scan existing sources, then fill gaps
3. **Multi-select everywhere** — people wear multiple hats
4. **Voice/free-form always available** — messy input welcome, AI clarifies
5. **No duplication** — if it exists somewhere, ingest it
6. **Progressive trust = progressive access** — sensitive data comes later
7. **Reflect back, don't interrogate** — show understanding, invite correction
8. **Calm, confident tone** — no fanfare, no "wow that's brave," just professional trust

## Data Sovereignty (Non-Negotiable)

1. User owns their data — not the platform
2. Clients own their data — same deal
3. Full transparency — see exactly what's accessed
4. Plain language — no legalese
5. Revoke access anytime — one click
6. Delete means delete — from our systems, originals untouched
7. No training on user data — unless explicitly opted in

---

# PART 3: THREE-TIER DATA INTELLIGENCE HIERARCHY

```
TIER 1: CORPORATE (if applicable)
├── Public info (website, press, LinkedIn company page)
├── Shared internal docs (LMS, performance systems, rubrics)
├── Org structure, headcount, culture docs
├── Coaching program goals and metrics
│
└── TIER 2: COACH
    ├── Public info (LinkedIn, website, social, content)
    ├── Personal docs (Drive, Dropbox, notes, writing)
    ├── Tools & systems (calendar, email, CRM, etc.)
    ├── Coaching style, philosophy, methods
    ├── Existing intake forms, agreements, questionnaires
    │
    └── TIER 3: CLIENT (Coachee)
        ├── Existing coach records (notes, transcripts, emails)
        ├── Client's own digital exhaust (if they consent)
        ├── Completed intake forms / assessments
        ├── Biometric data (coming soon)
        └── Ongoing session data
```

**All three tiers follow the same pattern:**
Grant access → AI scours → AI presents back → User confirms/corrects → AI asks only what's missing

---

# PART 4: COMPLETE USER JOURNEY MAP

## TIER 1: CORPORATE (If Applicable)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CORPORATE LEADER / PROGRAM ADMIN                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. AWARENESS                                                       │
│     └── Discovers Sage (via ICF, vendor, word of mouth)             │
│                                                                     │
│  2. ONBOARDING                                                      │
│     ├── Grant access to public + internal sources                   │
│     ├── AI scours company data (LMS, performance, HR systems)       │
│     ├── AI presents: "Here's what I understand about your org"      │
│     ├── Confirm/correct                                             │
│     ├── Define coaching program structure                           │
│     ├── Set compliance & data ownership rules                       │
│     └── Invite/onboard coaches in program                           │
│                                                                     │
│  3. ONGOING VALUE                                                   │
│     ├── Program-wide insights & patterns                            │
│     ├── ROI tracking & reporting                                    │
│     ├── Coach performance visibility                                │
│     └── Aggregate outcomes (anonymized)                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## TIER 2: COACH

```
┌─────────────────────────────────────────────────────────────────────┐
│  COACH (Independent, Embedded, or Hybrid)                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. AWARENESS & ACQUISITION                                         │
│     ├── Discovers Sage (ICF network, training program, referral)    │
│     ├── Sees value prop: "Invisible intelligence for coaches"       │
│     └── Signs up                                                    │
│                                                                     │
│  2. ONBOARDING (Day 1: 10-15 min)                                   │
│     ├── Basic identity (name, email)                                │
│     ├── Grant access to existing sources                            │
│     │   ├── LinkedIn, website, social, writing                      │
│     │   ├── Documents (Drive, Dropbox, local)                       │
│     │   ├── Phone (photos, notes, voice memos)                      │
│     │   └── Messages (text, WhatsApp, Slack)                        │
│     ├── AI scours everything                                        │
│     ├── AI presents: "Here's what I understand about you"           │
│     ├── Confirm/correct/add (voice or text)                         │
│     ├── AI asks only what's missing                                 │
│     │   ├── Role & structure                                        │
│     │   ├── Coaching niche & style                                  │
│     │   ├── Credentials & training                                  │
│     │   ├── Current practice (clients, sessions)                    │
│     │   ├── Business stage & needs                                  │
│     │   └── Workspace setup                                         │
│     ├── Connect tools (calendar, video, email, notes, etc.)         │
│     ├── AI scans for client data                                    │
│     ├── AI presents clients found                                   │
│     ├── Check existing intake process (agreements, questionnaires)  │
│     ├── Send client consent requests                                │
│     ├── Invite clients to deeper onboarding (optional now or later) │
│     └── Select assessments to offer clients                         │
│                                                                     │
│  3. FIRST VALUE (Within 24-48 hours)                                │
│     ├── Pre-session brief for next coaching call                    │
│     ├── Session notes captured automatically                        │
│     ├── Follow-up email with notes drafted, ready for approval      │
│     │   and sending                                                 │
│     └── "This actually works" moment                                │
│                                                                     │
│  4. ONGOING COACHING SUPPORT                                        │
│     ├── Pre-session briefs (every session)                          │
│     ├── Session notes & commitment tracking                         │
│     ├── Follow-up emails drafted for approval                       │
│     ├── Insights & patterns across clients                          │
│     ├── Deep insights + powerful questions suggested                │
│     ├── Continuity across sessions (nothing lost)                   │
│     └── In-session support (optional, coach-controlled)             │
│                                                                     │
│  5. COACH'S PERSONAL GROWTH & LEARNING SUPPORT (Always Available)   │
│     │                                                               │
│     │  PERSONAL AI ASSISTANT:                                       │
│     │  ├── Billing & invoicing                                      │
│     │  ├── Scheduling & calendar management                         │
│     │  ├── Daily agenda & prep                                      │
│     │  ├── Session preparation                                      │
│     │  ├── Life management beyond coaching                          │
│     │  └── Anything else — just ask                                 │
│     │                                                               │
│     │  COACH DEVELOPMENT & EFFECTIVENESS:                           │
│     │  ├── ICF-aligned rubrics (ACC/PCC/MCC standards)              │
│     │  ├── Qualitative metrics on coaching effectiveness            │
│     │  ├── Quantitative metrics on coaching impact                  │
│     │  ├── Suggestions for improvement                              │
│     │  ├── AI coaches the coach to be a better coach                │
│     │  ├── Track progress toward next credential level              │
│     │  ├── Modality-specific feedback (Co-Active, somatic, etc.)    │
│     │  ├── Pattern recognition in your coaching style               │
│     │  ├── Blind spot identification                                │
│     │  └── Continuous professional development support              │
│     │                                                               │
│     └── PERSONAL GROWTH:                                            │
│         ├── Coach's own goals and aspirations                       │
│         ├── Work-life balance support                               │
│         ├── Learning journey and skill development                  │
│         └── The coach gets coached too                              │
│                                                                     │
│  6. BUSINESS BUILDING (When Ready)                                  │
│     │                                                               │
│     │  FOR NEW / ASPIRING COACHES:                                  │
│     │  ├── Training program recommendations                         │
│     │  ├── Certification guidance (ICF pathway)                     │
│     │  ├── Website built for you (branding, style, content)         │
│     │  ├── First client acquisition support                         │
│     │  ├── Marketing & positioning help                             │
│     │  └── Draft outreach to people you know                        │
│     │                                                               │
│     │  FOR ESTABLISHED COACHES:                                     │
│     │  ├── Website improvements                                     │
│     │  ├── Content creation (articles, posts, thought leadership)   │
│     │  ├── Social media support (drafting, scheduling)              │
│     │  ├── Repurpose session insights into content                  │
│     │  ├── Testimonial collection and auto-uploads                  │
│     │  ├── Video testimonials → auto-upload to social               │
│     │  ├── Referral requests (drafted, personalized)                │
│     │  ├── Expand from current clients to their networks            │
│     │  └── Business growth strategy & guidance                      │
│     │                                                               │
│     └── FOR ALL COACHES:                                            │
│         ├── Track referral sources                                  │
│         ├── Pipeline visibility                                     │
│         └── Revenue growth support                                  │
│                                                                     │
│  7. CONTINUOUS IMPROVEMENT                                          │
│     ├── AI learns from your edits and feedback                      │
│     ├── Voice/style matching improves over time                     │
│     ├── Deeper patterns emerge across clients                       │
│     └── Insights compound over months/years                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## TIER 3: CLIENT (Coachee)

```
┌─────────────────────────────────────────────────────────────────────┐
│  CLIENT                                                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. CONSENT & AWARENESS                                             │
│     ├── Receives consent request from coach                         │
│     ├── Clear explanation: what Sage is, how data is protected      │
│     ├── Options: Consent / No thanks / Questions                    │
│     └── If no → removed from system, no impact on coaching          │
│                                                                     │
│  2. ONBOARDING (If consents — mirrors coach flow)                   │
│     ├── Grant access to existing sources                            │
│     │   ├── LinkedIn, website, social, writing                      │
│     │   ├── Documents (Drive, Dropbox, local)                       │
│     │   ├── Phone (photos, notes, voice memos)                      │
│     │   └── Messages (text, WhatsApp, Slack)                        │
│     ├── AI scours everything                                        │
│     ├── AI presents: "Here's what I understand about you"           │
│     ├── Confirm/correct/add                                         │
│     ├── AI asks only what's missing                                 │
│     │   ├── Goals & focus areas                                     │
│     │   ├── What success looks like                                 │
│     │   ├── How you prefer feedback                                 │
│     │   ├── What helps you stay accountable                         │
│     │   └── Anything else to know                                   │
│     ├── Complete any missing intake forms                           │
│     └── Take assessments (if coach offers)                          │
│                                                                     │
│  3. ONGOING VALUE                                                   │
│     ├── Feels deeply known and held by coach                        │
│     ├── Nothing falls through the cracks                            │
│     ├── Continuity across sessions                                  │
│     ├── Commitments tracked and followed up                         │
│     └── Progress visible over time                                  │
│                                                                     │
│  4. 24/7 SAGE COMPANION (Always Available)                          │
│     ├── Always-on support between sessions                          │
│     ├── Continuity, encouragement, and accountability               │
│     ├── Bridge between sessions                                     │
│     ├── Knows client inside and out                                 │
│     ├── Knows coach's style and methods                             │
│     ├── Transparent about being AI                                  │
│     ├── Can do check-ins, reflections, prompts                      │
│     └── Maintains the relationship even when coach isn't there      │
│                                                                     │
│  5. BIOMETRIC INTEGRATIONS (Coming Soon)                            │
│     ├── Apple Watch                                                 │
│     ├── Fitbit                                                      │
│     ├── Oura Ring                                                   │
│     ├── Other wearables                                             │
│     ├── Physical health tracking                                    │
│     ├── Sleep, HRV, activity data                                   │
│     ├── Emotional/mental state awareness                            │
│     └── Continuous data for deeper insight                          │
│                                                                     │
│  6. CONTRIBUTION TO COACH'S BUSINESS (Optional)                     │
│     ├── Asked for testimonial at right moment                       │
│     ├── Easy to give (text, video, voice)                           │
│     ├── Asked for referrals (warm, personalized)                    │
│     └── Becomes advocate for coach                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

# PART 5: DISTRIBUTION STRATEGY

## Goal: On Every Coach's Device Worldwide

```
┌─────────────────────────────────────────────────────────────────────┐
│  DISTRIBUTION CHANNELS                                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. ICF PARTNERSHIP                                                 │
│     ├── Official tool for ICF members                               │
│     ├── Pushed to entire membership network                         │
│     ├── Integrated with ICF credentialing                           │
│     ├── Track CCE hours, mentor coaching, etc.                      │
│     └── Becomes the infrastructure for professional coaching        │
│                                                                     │
│  2. TRAINING PROGRAMS                                               │
│     ├── CTI, iPEC, Coach U, Georgetown, etc.                        │
│     ├── Built into curriculum                                       │
│     ├── New coaches start with Sage from Day 1                      │
│     └── Trainers use Sage to train                                  │
│                                                                     │
│  3. CORPORATE COACHING PROGRAMS                                     │
│     ├── Enterprise sales                                            │
│     ├── Embedded in L&D / HR systems                                │
│     └── Required tool for internal + external coaches               │
│                                                                     │
│  4. COACH-TO-COACH REFERRAL                                         │
│     ├── Coaches tell other coaches                                  │
│     ├── Testimonials from practicing coaches                        │
│     └── Community effect                                            │
│                                                                     │
│  5. CLIENT-TO-COACH REFERRAL                                        │
│     ├── Clients become advocates                                    │
│     ├── "My coach uses this amazing thing..."                       │
│     └── Pulls new coaches into the ecosystem                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

# PART 6: COACH ONBOARDING FLOW (DETAILED)

## Phase 1: Welcome & Data Sources (Minutes 1-5)

### Step 1.1: Welcome
- Brief explanation of what Sage is
- Promise: "I'll learn about you from what already exists"
- Assurance: "You stay in control of everything"

### Step 1.2: Basic Identity
- Name (what should I call you?)
- Email

### Step 1.3: Grant Access to Existing Sources

**Prompt:** "Instead of asking you a hundred questions, let me learn about you from what already exists. Grant access to any of these:"

**Professional Profiles**
- LinkedIn (connect account or paste URL)
- Personal website (URL)
- Resume/CV (upload)

**Social Media Platforms** *(all in one multi-select question in final UI)*
- Instagram
- Facebook
- Twitter / X
- LinkedIn content (posts, articles)
- YouTube
- TikTok
- Threads
- Pinterest
- Twitch
- Discord
- Clubhouse
- Snapchat

**Writing & Content Platforms**
- Medium
- Substack
- Personal blog
- Quora
- Podcast (host or guest)
- Published articles / books

**Document Storage**
- Google Drive
- Dropbox
- OneDrive
- iCloud Drive
- Box
- Local computer files

**Phone Data** *(with sensitive data reassurance)*
- Photos / videos
- Notes app
- Voice memos

**Messaging & Communication**
- Text messages / iMessage
- WhatsApp
- Slack
- Signal

**Other Digital Sources**
- Email archive
- Calendar history
- Browser bookmarks

**Offline Sources** (to upload)
- Journals / notebooks
- Printed materials
- Writing samples

### Step 1.4: Data Security Reassurance

At sensitive moments (phone, messages), include:

*"Your data is encrypted and stored securely. You can revoke my access and delete it from my systems anytime, while keeping your original data exactly where it is. If you have questions or don't feel comfortable with anything at all, just tell me and we'll address it immediately."*

---

## Phase 2: AI Scours & Presents Back (Minutes 5-8)

### What AI Does (Behind the Scenes)
- Reads all granted sources
- Builds comprehensive profile
- Identifies patterns, themes, voice

### What AI Presents

**"Here's what I understand about you:"**

- Who you are (name, location, background)
- Credentials & training (certifications, schools, degrees)
- What you do (specialties, client types)
- Your approach (frameworks, themes, voice)
- Your business (website, services, pricing if public)
- What I learned from your writing (values, phrases, style)

**"What I'm still missing:"**
- List of gap categories (not questions yet)

### User Response Options (Multi-select)
- Yes, this is accurate
- Mostly right — a few corrections
- Some gaps — important stuff missed
- Let me talk it out (voice/text field)

---

## Phase 3: Fill the Gaps (Minutes 8-12)

**Only ask what AI couldn't find.**

### Role & Structure (Multi-select)
- Solo independent coach
- Contract with organizations
- Embedded in a company
- Manager/leader who coaches
- Coaching program administrator
- Therapist/counselor who coaches
- Consultant who coaches
- Other

*If corporate selected → Branch to Corporate Path*

### Coaching Taxonomy

**Niches** (Multi-select, comprehensive)

*Executive & Leadership*
- Executive coaching
- Leadership development
- C-suite / senior executive
- New manager / first-time leader
- High-potential talent

*Career & Professional*
- Career transition
- Career development
- Professional presence

*Life & Personal*
- Life coaching
- Personal development
- Goal achievement
- Habit change / behavior change

*Performance & Productivity*
- Performance coaching
- Productivity / time management
- Peak performance / flow states

*Relationships & Communication*
- Relationship coaching
- Communication skills
- Conflict resolution

*Health & Wellness*
- Health coaching
- Wellness coaching
- Stress management
- Burnout recovery

*Specialized*
- Spiritual coaching
- Somatic coaching
- Trauma-informed coaching
- Business / entrepreneur coaching
- Team coaching
- Group coaching
- Other

**Frameworks & Methodologies** (Multi-select)

*Major Frameworks*
- Co-Active Coaching (CTI)
- GROW Model
- Ontological Coaching
- Solution-Focused
- Appreciative Inquiry
- Positive Psychology
- Cognitive Behavioral
- Motivational Interviewing

*Somatic & Body-Based*
- Somatic coaching
- Embodiment practices
- Nervous system regulation

*Depth & Psychological*
- Internal Family Systems (IFS)
- Parts work
- Shadow work
- Attachment-informed
- Trauma-informed

*Other*

### Credentials & Training (if not found)

**ICF Credentials**
- ACC / PCC / MCC / In process

**Training Programs**
- CTI, iPEC, Coach U, Georgetown, Hudson, etc.

**Related Credentials**
- Licensed therapist
- Psychologist
- MBA
- OD certification
- Other

### Current Practice
- Average client load (ranges)
- Current exact client count (text field)
- Sessions per week (ranges)

### Business Stage & Needs
- Just starting out — need everything
- Established but want to grow
- Full practice — want efficiency
- Corporate/employed — not building a business

### Workspace Setup
- Computer/laptop primary
- Phone/tablet primary
- Both equally
- Paper-based / analog
- Mix of everything

### Work Location
- Home office
- Corporate office
- Co-working space
- Remote / nomadic
- Hybrid

---

## Phase 4: Tools & Integrations (Minutes 12-15)

**Explainer:** "Once I connect to your tools, I'll be able to find your client data automatically. This means less work for you — I'll pull what's already there and only ask about what's missing."

### Core Tools (Multi-select for each category)

**Calendar**
- Google Calendar, Outlook Calendar, Apple Calendar
- Calendly, Acuity Scheduling, SavvyCal, Cal.com
- Other

**Video Platforms**
- Zoom, Google Meet, Microsoft Teams, Webex
- FaceTime, Skype
- Other

**Recording & Transcription**
- Zoom (recordings/transcripts)
- Otter.ai, Fireflies.ai, Fathom
- Rev, Grain, Descript, Trint
- Other

**Email**
- Gmail, Outlook, Apple Mail
- Yahoo Mail, ProtonMail, Hey.com, Fastmail
- Other

**Notes & Documentation**
- Google Docs / Drive, Dropbox / Dropbox Paper
- Microsoft Word / OneDrive, Notion
- Apple Notes, Evernote, OneNote, Obsidian
- Other

**Project & Task Management**
- Asana, Trello, Monday.com, Todoist
- ClickUp, Basecamp, Airtable
- Things 3, OmniFocus, Reminders (Apple), Google Tasks
- Jira, Linear, Sunsama
- Other

**CRM & Client Management**
- HubSpot, Salesforce
- Dubsado, HoneyBook, Practice Better, CoachAccountable
- Google Sheets, Excel, Airtable
- Other

**Payments & Invoicing**
- Stripe, PayPal, Square, Venmo / Zelle
- QuickBooks, FreshBooks, Wave
- Other

### Explicit Consent to Connect

**"Ready to connect to these tools now?"**
- Yes, connect now
- Wait, I want to review the list
- I have a question first

**Show connection status:**
✓ Google Sheets — connected
✓ Google Drive — connected
(etc.)

**"All tools synced successfully."**

---

## Phase 5: Client Data Discovery

### AI Scans for Clients

**"Scanning for clients..."**

AI searches: Calendar history, email threads, spreadsheets, session recordings, transcripts, messages

### AI Presents Client List

**"I found [X] clients. Here's what I know about each one:"**

| Client | Sessions | Last Session | Source |
|--------|----------|--------------|--------|

### Existing Intake Process Check

**"I found your client intake process:"**
- Launch Questionnaire — found
- Coaching Agreement — found

**Client Status Table** showing who has/hasn't completed what

**"Would you like me to send reminders to clients with missing items?"**

---

## Phase 6: Client Consent Flow

### Explanation

**"Your clients will need to consent to AI-assisted coaching support. Here's how we handle that without slowing you down:"**

1. I'll give you a link — clear explanation of data use and protection
2. You can personalize it — add your own message or send as-is
3. Send to all clients at once — or select specific ones
4. If anyone opts out — I immediately disconnect and remove their data
5. Everyone else stays connected — we keep moving forward

### Preview Consent Message

Show draft email. Coach can:
- Send as-is
- Edit it
- Add personal note
- Start over

---

## Phase 7: Deeper Client Onboarding

### Invitation to Coach

**"Would you like to invite clients to complete deeper onboarding now?"**

Options:
- Yes, send invites now
- Let me select which clients
- I'll do this later
- Tell me more first

---

## Phase 8: Assessments & Personality Tools

### AI Identifies Gaps

**"I noticed you don't have personality or strengths assessments on file for most clients."**

### Options Offered

**Personality & Type**
- Enneagram, Myers-Briggs (MBTI), DISC
- Hogan Personality Inventory, 16 Personalities

**Strengths & Capabilities**
- CliftonStrengths (StrengthsFinder)
- VIA Character Strengths, HIGH5 Strengths

**Leadership & 360 Feedback**
- Leadership Circle Profile, Korn Ferry
- CCL 360, Hogan 360, Custom 360 tools

**Emotional Intelligence**
- EQ-i 2.0, MSCEIT, Genos

**Career & Interests**
- Strong Interest Inventory, Holland Codes, Career Anchors

**Team & Collaboration**
- Five Behaviors, Belbin Team Roles, Thomas-Kilmann (TKI)

### How It Works

1. Coach chooses which assessments
2. AI sends links to clients
3. Clients complete or upload existing results
4. AI absorbs data into client profile
5. Insights surface in prep briefs
6. Insights evolve over time — connected to what emerges in sessions

---

## Phase 9: Goals & Business Support

### Coach Goals (Multi-select)
- More clients
- Better clients (fit, engagement, outcomes)
- Higher revenue
- Less admin time
- Better work-life balance
- Stronger client outcomes
- Build reputation / thought leadership
- Scale (hire coaches, build team)
- Reduce burnout
- More meaningful work

### Business Building Support (Available When Ready)

**Website** — build or improve
**Marketing & Content** — articles, posts, thought leadership
**Testimonials & Referrals** — collection and auto-uploads
**Social Media** — drafting, scheduling, repurposing

---

## Phase 10: Onboarding Complete

### Summary

**"You're all set, [Name]."**

Here's what's happening now:
1. ✓ Your profile is complete
2. ✓ Your tools are connected
3. ✓ Client consent requests sent
4. ✓ Deeper client onboarding invites queued
5. ✓ Assessments selected and ready
6. ⏳ Scanning and learning in the background

**By your next session, I'll be ready to:**
- Prepare you with a pre-session brief
- Capture notes and track commitments
- Draft follow-up emails with notes, ready for approval and sending
- Surface insights and patterns across your clients

**Always available:**
- **Coach's Personal Growth & Learning Support** — personal AI for anything: billing, scheduling, prep, life management, coaching effectiveness, professional development
- **24/7 Client Companion** — always-on support providing continuity, encouragement, and a bridge between sessions for your clients
- **In-Session Support** — real-time prompts and insights during sessions (optional)

**When you're ready:**
- Website building or improvements
- Marketing and content support
- Testimonial collection and auto-uploads
- Business growth strategy

*If and when you need any of these, just let me know. I'm here.*

---

# PART 7: CORPORATE BRANCH (If Applicable)

*Triggered when coach selects corporate affiliation*

### Organization Context
- Organization name
- Role/title
- Tenure
- Full-time / part-time / contract

### Authority & Decision Level (Multi-select)
- Can approve tools for self
- Can approve tools for team
- Need manager approval
- Influence purchasing decisions
- Make purchasing decisions
- Manage coaching program budget
- Manage other coaches
- Primary vendor contact

### Organizational Systems

**Learning & Development**
- LMS (which one?)
- Learning experience platform
- Internal coaching platform
- External coaching vendor

**Performance Management**
- Workday, SuccessFactors, Lattice, 15Five, Culture Amp, custom, other

**HR Systems**
- Workday, SAP, Oracle, BambooHR, ADP, other

**Communication**
- Microsoft Teams, Slack, Google Workspace, other

### Coaching Program Structure
- Formal program with defined processes
- Informal / ad hoc
- External coaches only
- Internal coaches only
- Mix
- Manager-as-coach model
- Peer coaching

### Compliance & Data Ownership
- Who owns coaching data? (coach / org / shared / coachee / unclear)
- Compliance requirements (HIPAA, SOC 2, GDPR, internal policies)

---

# PART 8: CLIENT ONBOARDING (Parallel Track)

## Mirrors Coach Onboarding

Same philosophy:
Grant access → AI scours → AI presents → Confirm/correct → Fill gaps

## Data Sources (Same as Coach)
- LinkedIn, website, social media (all platforms)
- Writing platforms (Medium, Substack, blog)
- Document storage (Drive, Dropbox, etc.)
- Phone (photos, notes, voice memos)
- Messages (text, WhatsApp, Slack)
- Email, calendar, bookmarks
- Journals / notebooks
- Existing assessment results

## Client-Specific Questions (Only What's Missing)
- Preferred name / pronouns
- Best contact method
- What brought you to coaching?
- Goals and focus areas
- What success looks like
- How you prefer feedback
- What helps you stay accountable
- Anything else to know

## Assessments
- Offered based on coach's selections
- Client can complete or upload existing
- Results absorbed into profile

## Biometric Integrations (Coming Soon)
- Apple Watch
- Fitbit
- Oura Ring
- Other wearables
- Physical health tracking
- Sleep, HRV, activity data
- Emotional/mental state awareness
- Continuous data for deeper insight

---

# PART 9: FEATURE SUMMARY

## Core Features (Active from Day 1)

1. **Pre-Session Briefs** — fully prepared for every call
2. **Session Notes & Commitments** — captured automatically
3. **Follow-Up Emails** — drafted with notes, ready for approval and sending
4. **Insights & Patterns** — surfaced across clients and time

## Coach's Personal Growth & Learning Support (Always Available)

**Personal AI Assistant:**
- Billing, scheduling, prep
- Daily agenda and priorities
- Life management
- Anything — just ask

**Coach Development & Effectiveness:**
- ICF-aligned rubrics (ACC/PCC/MCC)
- Qualitative and quantitative coaching metrics
- Suggestions for improvement
- AI coaches the coach to be a better coach
- Track progress toward next credential
- Modality-specific feedback
- Pattern recognition in coaching style
- Blind spot identification
- Continuous professional development

**Personal Growth:**
- Coach's own goals and aspirations
- Work-life balance
- Learning journey

## 24/7 Sage Companion (For Clients)

- Always-on support between sessions
- Continuity, encouragement, accountability
- Bridge between sessions
- Knows client inside and out
- Knows coach's style and methods
- Transparent about being AI
- Check-ins, reflections, prompts
- Maintains relationship when coach isn't there

## In-Session Support (Optional)

- Real-time prompts and insights
- Pattern flags
- Coach controls visibility
- On/off per session or client

## Business Building (When Ready)

**For New Coaches:**
- Training recommendations
- Certification guidance
- Website built for them
- First client acquisition
- Marketing & positioning

**For Established Coaches:**
- Website improvements
- Content creation
- Social media support
- Testimonial collection and auto-uploads
- Referral requests
- Business growth strategy

---

# PART 10: DESIGN PRINCIPLES

## Onboarding UX
- Multi-select everywhere
- Always include "None of these" option
- Always include "Other" with text/voice field
- Voice input always available
- Comprehensive options (all platforms, all tools)
- Group related options in single questions where possible
- Calm, confident tone — no pressure
- Brief "why" explanations at sensitive moments
- Explicit consent before connecting tools
- Progress indicators

## Data Philosophy
- Scan first, ask second
- Present back what was found
- Only ask what's truly missing
- Let clients fill their own gaps
- Progressive depth over time
- No duplication

## Trust Building
- Plain language, no legalese
- Transparency at every step
- Control always with user
- Easy revocation
- Delete from systems, keep originals
- "If anything feels uncomfortable, just tell me"

---

# PART 11: COMPREHENSIVE PLATFORM LISTS

## Social Media
Instagram, Facebook, Twitter/X, LinkedIn, YouTube, TikTok, Threads, Pinterest, Twitch, Discord, Clubhouse, Snapchat, BeReal

## Writing/Content
Medium, Substack, Personal blog, Quora, Mirror/Web3, Notion (public), Podcast

## Document Storage
Google Drive, Dropbox, OneDrive, iCloud Drive, Box, Local files

## Calendar
Google Calendar, Outlook, Apple Calendar, Calendly, Acuity, SavvyCal, Cal.com

## Video
Zoom, Google Meet, Microsoft Teams, Webex, FaceTime, Skype

## Transcription
Otter.ai, Fireflies.ai, Fathom, Rev, Grain, Descript, Trint

## Email
Gmail, Outlook, Apple Mail, Yahoo, ProtonMail, Hey.com, Fastmail

## Notes/Docs
Google Docs, Notion, Word, Apple Notes, Evernote, OneNote, Obsidian, Dropbox Paper

## Task/Project Management
Asana, Trello, Monday.com, Todoist, ClickUp, Basecamp, Airtable, Things 3, OmniFocus, Reminders, Google Tasks, Jira, Linear, Sunsama

## CRM/Client Management
HubSpot, Salesforce, Dubsado, HoneyBook, Practice Better, CoachAccountable, Google Sheets, Excel, Airtable

## Payments
Stripe, PayPal, Square, Venmo, Zelle, QuickBooks, FreshBooks, Wave

## Assessments
CliftonStrengths, Enneagram, DISC, MBTI, Hogan, 16 Personalities, VIA Strengths, HIGH5, Leadership Circle, Korn Ferry, CCL 360, EQ-i, MSCEIT, Genos, Strong Interest, Holland Codes, Career Anchors, Five Behaviors, Belbin, Thomas-Kilmann

## Biometrics (Coming Soon)
Apple Watch, Fitbit, Oura Ring, Whoop, Garmin, other wearables

---

# PART 12: OPEN QUESTIONS

1. Exact UI for "AI presents what it found"
2. How to handle clients who don't consent
3. Minimum viable corporate compliance
4. Voice input implementation (real-time vs. async)
5. Assessment platform integrations
6. Pricing model for different tiers
7. What's the "first value" moment that hooks them?
8. ICF partnership strategy
9. Training program partnerships
10. Coach trainer specific features

---

*Document version: 3.0*
*Last updated: January 15, 2026*
*Status: Complete prototype specification*

---

**END OF DOCUMENT**

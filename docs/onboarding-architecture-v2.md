# Invisible Coaching Intelligence: Onboarding Architecture v2

## Core Philosophy

### The Golden Rule
**Don't ask what can be found. Scan first, ask only what's missing.**

### The Experience Promise
1. User grants access to existing sources
2. AI scours and gathers everything it can
3. AI presents: "Here's what I understand about you"
4. AI asks: "Here's what I still need to know"
5. User confirms, corrects, adds
6. System is working within hours, not days

### Design Principles
- **Multi-select everywhere** — coaches wear multiple hats
- **Voice/free-form always available** — messy input welcome, AI clarifies
- **No duplication** — if it exists somewhere, ingest it
- **Progressive trust = progressive access** — sensitive data comes later
- **Reflect back, don't interrogate** — show understanding, invite correction

---

## Phase 1: Access & Scan (Day 1, First 5 Minutes)

### Step 1.1: Welcome & Core Identity
Quick basics that can't be inferred:
- Name
- Email
- Phone (optional)

### Step 1.2: Grant Access to Existing Sources

**Prompt:** "Instead of asking you a hundred questions, let me learn about you from what already exists. Grant access to any of these, and I'll do the rest:"

| Source | What AI Learns | Priority |
|--------|---------------|----------|
| **LinkedIn** | Full professional history, certifications, education, headline, about section, skills, recommendations | High |
| **Personal Website** | Brand voice, positioning, services, about page, testimonials, philosophy | High |
| **Google Account** | Calendar patterns, email voice, docs/notes style | High |
| **Resume/CV upload** | Credentials, history, education | Medium |
| **Social Media** | | |
| ↳ Instagram | Visual brand, tone, content style | Optional |
| ↳ Facebook | Community engagement, groups | Optional |
| ↳ Twitter/X | Thought leadership, voice | Optional |
| ↳ YouTube | Content, teaching style | Optional |
| **Other platforms** | | |
| ↳ Podcast appearances | Voice, philosophy, stories | Optional |
| ↳ Published articles/books | Depth of thought, frameworks | Optional |
| ↳ Course platforms (Teachable, etc.) | Content, methodology | Optional |

### Step 1.3: AI Scours & Synthesizes (Behind the Scenes)

AI builds initial profile:
- Professional background
- Coaching niche(s)
- Certifications & credentials
- Training/education
- Brand voice & tone
- Philosophy & approach (inferred)
- Business structure (inferred)
- Client types (inferred from testimonials, case studies)

### Step 1.4: AI Presents Back

**Prompt:** "Based on what I found, here's what I understand about you:"

```
[AI-generated profile summary]

- You're a [role] based in [location]
- You specialize in [niches]
- Your credentials include [certifications]
- You trained at [schools/programs]
- Your approach seems to emphasize [themes]
- Your brand voice is [warm/professional/playful/etc.]
- You work with [client types]
- You appear to [solo practice / work with orgs / both]
```

**Then:** "How did I do? Anything to correct or add?"

User can:
- Confirm
- Correct specific items
- Add via text or voice (messy is fine)

---

## Phase 2: Fill the Gaps (Day 1, Minutes 5-15)

After AI presents what it found, it asks ONLY what's missing.

### 2.1: Role & Structure Clarification

**Question:** "Which of these describe how you work? (Select all that apply)"

| Option | Description |
|--------|-------------|
| Solo independent coach | Run my own practice, my own clients |
| Contract with organizations | Take clients through coaching firms or platforms |
| Embedded in a company | Full-time or part-time role inside an org |
| Manager/leader who coaches | Coaching is part of my leadership role |
| Coaching program administrator | I manage coaches or coaching programs |
| Therapist/counselor who coaches | Licensed mental health + coaching |
| Consultant who coaches | Coaching is part of broader consulting |
| Other | [Free text / voice] |

**Follow-up if "Embedded" or "Contract with organizations" selected:**
→ Branch to Corporate Path (see Section 6)

### 2.2: Coaching Taxonomy

#### Niche / Focus Area

**Question:** "What types of coaching do you do? (Select all that apply)"

**Executive & Leadership**
- [ ] Executive coaching
- [ ] Leadership development
- [ ] C-suite / senior executive
- [ ] New manager / first-time leader
- [ ] High-potential talent

**Career & Professional**
- [ ] Career transition
- [ ] Career development
- [ ] Job search / interview prep
- [ ] Professional presence / executive presence

**Life & Personal**
- [ ] Life coaching
- [ ] Personal development
- [ ] Goal achievement
- [ ] Habit change / behavior change
- [ ] Mindset / limiting beliefs

**Performance & Productivity**
- [ ] Performance coaching
- [ ] Productivity / time management
- [ ] Focus / attention / ADHD
- [ ] Peak performance / flow states

**Relationships & Communication**
- [ ] Relationship coaching
- [ ] Communication skills
- [ ] Conflict resolution
- [ ] Difficult conversations

**Health & Wellness**
- [ ] Health coaching
- [ ] Wellness coaching
- [ ] Stress management
- [ ] Burnout recovery
- [ ] Sleep / energy

**Specialized**
- [ ] Spiritual coaching
- [ ] Somatic coaching
- [ ] Trauma-informed coaching
- [ ] Addiction recovery coaching
- [ ] Financial coaching
- [ ] Entrepreneurship / business coaching
- [ ] Creative / artist coaching
- [ ] ADHD coaching
- [ ] Neurodivergent coaching
- [ ] Parenting coaching
- [ ] Couples coaching
- [ ] Team coaching
- [ ] Group coaching

**Other:** [Free text / voice]

#### Coaching Style & Methodology

**Question:** "What frameworks, methodologies, or approaches do you use? (Select all that apply)"

**Major Frameworks**
- [ ] Co-Active Coaching (CTI)
- [ ] GROW Model
- [ ] Ontological Coaching
- [ ] Solution-Focused
- [ ] Appreciative Inquiry
- [ ] Positive Psychology
- [ ] Cognitive Behavioral
- [ ] Motivational Interviewing
- [ ] Acceptance and Commitment (ACT)

**Somatic & Body-Based**
- [ ] Somatic coaching
- [ ] Embodiment practices
- [ ] Breathwork
- [ ] Nervous system regulation
- [ ] Polyvagal-informed

**Depth & Psychological**
- [ ] Internal Family Systems (IFS)
- [ ] Parts work
- [ ] Shadow work
- [ ] Jungian / archetypal
- [ ] Psychodynamic
- [ ] Attachment-informed
- [ ] Trauma-informed

**Systems & Organizational**
- [ ] Systems coaching
- [ ] Stakeholder-centered
- [ ] 360 feedback-based
- [ ] Team coaching methodologies
- [ ] Organizational development

**Assessments Used**
- [ ] DISC
- [ ] Myers-Briggs (MBTI)
- [ ] StrengthsFinder / CliftonStrengths
- [ ] Enneagram
- [ ] Hogan
- [ ] EQ-i / Emotional Intelligence
- [ ] Leadership Circle
- [ ] VIA Character Strengths
- [ ] Custom intake assessments

**Other:** [Free text / voice]

### 2.3: Credentials & Training

**If not captured from LinkedIn/resume:**

**Question:** "What coaching credentials do you hold? (Select all that apply)"

**ICF Credentials**
- [ ] ACC (Associate Certified Coach)
- [ ] PCC (Professional Certified Coach)
- [ ] MCC (Master Certified Coach)
- [ ] In process / pursuing ICF credential

**Other Coaching Certifications**
- [ ] CCE (Center for Credentialing & Education)
- [ ] BCC (Board Certified Coach)
- [ ] NBC-HWC (Health & Wellness Coach)
- [ ] CPCC (Certified Professional Co-Active Coach)
- [ ] CPC (Certified Professional Coach - iPEC)
- [ ] Other: [specify]

**Training Programs Completed**
- [ ] CTI (Coaches Training Institute)
- [ ] iPEC
- [ ] Coach U
- [ ] Georgetown Leadership Coaching
- [ ] Hudson Institute
- [ ] Newfield Network
- [ ] Presence-Based Coaching
- [ ] Columbia Coaching Certification
- [ ] Other: [specify]

**Related Credentials**
- [ ] Licensed therapist (LMFT, LCSW, LPC, etc.)
- [ ] Psychologist (PhD, PsyD)
- [ ] Psychiatrist (MD)
- [ ] MBA
- [ ] Organizational Development (OD) certification
- [ ] HR certification (SHRM, HRCI)
- [ ] Other advanced degree: [specify]
- [ ] Other certification: [specify]

**Question:** "Anything else about your background or training I should know?"
[Voice / free text field]

---

## Phase 3: Tools & Integrations (Day 1, Minutes 10-15)

### 3.1: Core Tools (Required for MVIP)

**Question:** "Let's connect the tools where your coaching actually happens:"

| Tool Type | Options | Integration |
|-----------|---------|-------------|
| **Calendar** | Google Calendar / Outlook / Apple Calendar | OAuth |
| **Video** | Zoom / Google Meet / Microsoft Teams / Other | OAuth |
| **Email** | Gmail / Outlook / Other | OAuth |
| **Notes/Docs** | Google Docs / Notion / Word / Evernote / Other | OAuth |

### 3.2: Extended Tools (Week 1)

**Question:** "What other tools do you use in your practice? (Select all that apply)"

**Scheduling**
- [ ] Calendly
- [ ] Acuity
- [ ] SavvyCal
- [ ] Book Like A Boss
- [ ] Native calendar booking
- [ ] Manual scheduling

**CRM / Client Management**
- [ ] Dubsado
- [ ] HoneyBook
- [ ] Practice Better
- [ ] CoachAccountable
- [ ] HubSpot
- [ ] Salesforce
- [ ] Airtable
- [ ] Notion database
- [ ] Spreadsheet
- [ ] None currently

**Payments & Invoicing**
- [ ] Stripe
- [ ] PayPal
- [ ] Square
- [ ] QuickBooks
- [ ] FreshBooks
- [ ] Wave
- [ ] Bank transfer / manual

**Communication (besides email)**
- [ ] Slack
- [ ] Voxer
- [ ] WhatsApp
- [ ] Signal
- [ ] Text/SMS
- [ ] Client portal messaging

**File Storage**
- [ ] Google Drive
- [ ] Dropbox
- [ ] OneDrive
- [ ] iCloud
- [ ] Box

**Website**
- [ ] WordPress
- [ ] Squarespace
- [ ] Wix
- [ ] Webflow
- [ ] Kajabi
- [ ] Custom built

**Other:** [Free text]

---

## Phase 4: Goals & Aspirations (Week 1-2)

### 4.1: Business Goals

**Question:** "What do you want for your coaching practice? (Select all that apply)"

- [ ] More clients
- [ ] Better clients (fit, engagement, outcomes)
- [ ] Higher revenue
- [ ] Less admin time
- [ ] Better work-life balance
- [ ] Stronger client outcomes
- [ ] Build reputation / thought leadership
- [ ] Scale (hire coaches, build team)
- [ ] Transition to group/corporate work
- [ ] Reduce burnout
- [ ] More meaningful work
- [ ] Other: [free text / voice]

### 4.2: Personal Aspirations (Optional, Deeper)

**Prompt:** "If you've already articulated your values, vision, or mission — paste it here or point me to where it lives (website, doc, etc.). Or just talk it out and I'll help you clarify:"

[Large free text / voice field]

**Follow-up prompt:** "What would you do with 10 extra hours per week?"

[Free text / voice]

---

## Phase 5: Current Practice Snapshot

### 5.1: Inferred from Integrations

Once calendar + email + CRM are connected, AI infers:
- Number of active clients
- Session frequency
- Client tenure
- Engagement patterns
- Revenue (if payments connected)

**AI presents:** "Based on your calendar and tools, it looks like you have approximately [X] active clients, with [Y] sessions per week. Does that sound right?"

### 5.2: Only Ask What Can't Be Inferred

If not inferable:
- Approximate annual coaching revenue (optional, for business support)
- Typical engagement length
- Pricing model (per session, package, retainer)

**Sensitive data (tax docs, detailed financials) — only offered later:**

**Prompt:** "Later, if you want, you can share financial documents for deeper business insights. That's entirely optional and only when you're ready."

---

## Phase 6: Corporate Branch (If Applicable)

**Triggered if user selected:**
- "Embedded in a company"
- "Contract with organizations"
- "Coaching program administrator"

### 6.1: Organization Context

**Question:** "Tell me about the organization(s) you work with:"

For EACH organization:
- Organization name
- Your role/title there
- How long you've been there
- Full-time / part-time / contract

### 6.2: Authority & Decision Level

**Question:** "What's your decision-making authority in this organization? (Select all that apply)"

- [ ] I can approve new tools/software for myself
- [ ] I can approve tools for my team
- [ ] I need manager approval for new tools
- [ ] I influence purchasing decisions
- [ ] I make purchasing decisions
- [ ] I manage budget for coaching program
- [ ] I manage other coaches
- [ ] I'm the primary point of contact for external vendors

### 6.3: Organizational Systems

**Question:** "What systems does this organization use? (Select all that apply)"

**Learning & Development**
- [ ] LMS (which one?): [dropdown + other]
- [ ] Learning experience platform
- [ ] Internal coaching platform
- [ ] External coaching vendor

**Performance Management**
- [ ] Workday
- [ ] SuccessFactors
- [ ] Lattice
- [ ] 15Five
- [ ] Culture Amp
- [ ] Custom system
- [ ] Other: [specify]

**HR Systems**
- [ ] Workday
- [ ] SAP
- [ ] Oracle
- [ ] BambooHR
- [ ] ADP
- [ ] Other: [specify]

**Communication**
- [ ] Microsoft Teams
- [ ] Slack
- [ ] Google Workspace
- [ ] Other: [specify]

### 6.4: Coaching Program Structure

**Question:** "How is coaching structured in this organization?"

- [ ] Formal coaching program with defined processes
- [ ] Informal / ad hoc coaching
- [ ] External coaches only
- [ ] Internal coaches only
- [ ] Mix of internal and external
- [ ] Manager-as-coach model
- [ ] Peer coaching

**If formal program:**
- Number of coaches in program
- Number of coachees / participants
- Coaching rubric or competency model used?
- Required reporting or metrics?

### 6.5: Compliance & Data Ownership

**Critical questions:**

**Question:** "Who owns the coaching data in this organization?"
- [ ] The coach owns it
- [ ] The organization owns it
- [ ] Shared ownership
- [ ] The coachee/client owns it
- [ ] Unclear / not defined

**Question:** "What compliance requirements apply?"
- [ ] HIPAA
- [ ] SOC 2
- [ ] GDPR
- [ ] Internal data policies
- [ ] None that I know of
- [ ] Other: [specify]

---

## Phase 7: Client Data & Onboarding

### 7.1: Import Existing Clients

**Prompt:** "Let's bring in your current clients. You can:"

| Method | Description |
|--------|-------------|
| **Connect CRM** | Auto-sync from Dubsado, HubSpot, etc. |
| **Upload spreadsheet** | CSV or Excel with client list |
| **Connect Google Contacts** | Pull from labeled group |
| **Add manually** | Enter one by one |

**For each client, AI looks for:**
- Name
- Email
- Phone
- Start date
- Session history (from calendar)
- Notes (from connected docs)
- Communication history (from email)

### 7.2: Client Consent Flow

**Prompt:** "Your clients need to consent to AI-assisted notes and insights. Here's how it works:"

1. You send a simple consent request (we draft it, you approve)
2. Client clicks to approve
3. They can revoke anytime
4. They own their data — can delete anytime

**Options for client consent:**
- [ ] Send consent request to all clients now
- [ ] Send to specific clients
- [ ] I'll handle consent myself
- [ ] Skip for now, remind me later

### 7.3: Client Onboarding (Their Experience)

When client receives consent request:

1. Clear, plain-language explanation of what AI does
2. What data is accessed
3. How it benefits them (continuity, better follow-up, nothing lost)
4. One-click approve
5. Granular controls (what they can opt out of)
6. Delete / revoke anytime

---

## Phase 8: Upload & Enhance (Ongoing)

### 8.1: Voice & Style Training

**Prompt:** "Help me sound like you. Share any of these:"

- [ ] Sample emails you've sent to clients
- [ ] Session notes you've written
- [ ] Your intake forms / questionnaires
- [ ] Blog posts or articles
- [ ] Podcast transcripts
- [ ] Course content

**AI response:** "Based on these samples, here's how I understand your voice: [description]. I'll draft content in this style. You can always edit and I'll learn from your changes."

### 8.2: Client History Upload

**Prompt:** "Want to give me history on existing clients? Upload any of these:"

- [ ] Past session transcripts
- [ ] Existing notes
- [ ] Intake forms completed
- [ ] Assessment results
- [ ] Email threads

### 8.3: Ongoing Learning

AI continuously learns from:
- Edits you make to drafts
- Feedback you give
- New sessions and patterns
- Your explicit corrections

---

## Data Sovereignty & Trust

### Core Commitments (Shown Upfront, Plain Language)

1. **You own your data.** Not us. Not ever.
2. **Your clients own their data.** Same deal.
3. **You see everything we see.** Full transparency on what's accessed.
4. **Delete means delete.** Instant, complete, irreversible.
5. **Permissions are granular.** Turn anything off anytime.
6. **No training on your data.** Unless you explicitly opt in.
7. **We explain in plain English.** No legalese hiding in terms.

### Transparency Dashboard (Available Anytime)

- What sources are connected
- What data has been accessed
- What data is stored
- Audit log of AI actions
- One-click revoke for any source
- One-click delete all

---

## Summary: The Onboarding Flow

### Day 1 (5-15 minutes)
1. **Basic identity** — name, email
2. **Grant access** — LinkedIn, website, socials, Google
3. **AI scours** — builds profile automatically
4. **AI presents** — "Here's what I found"
5. **User confirms/corrects** — via click or voice
6. **AI asks gaps** — role, niche, credentials (only what's missing)
7. **Connect core tools** — calendar, video, email, notes
8. **First session captured** — within 24 hours

### Week 1 (progressive, bite-sized)
- Extended tools (CRM, payments, etc.)
- Coaching style & frameworks
- Import clients
- Client consent flow
- Upload samples for voice training
- Business goals

### Ongoing (earned trust)
- Deeper aspirations
- Financial data (optional)
- Additional integrations
- Expanded permissions
- Continuous learning from usage

---

## Open Questions for Further Development

1. What's the exact UI for "AI presents what it found"?
2. How do we handle clients who don't consent?
3. What's the minimum viable corporate compliance?
4. How do we handle coaches with multiple corporate relationships?
5. Voice input — real-time transcription or async?
6. What's the "first value" moment that hooks them?

---

*Document version: 2.0*
*Last updated: January 2026*
*Status: Working draft*

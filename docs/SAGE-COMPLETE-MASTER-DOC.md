# SAGE: COMPLETE MASTER DOCUMENT
## Vision + Strategy + Technical Architecture + Development Roadmap

*Everything in one place for easy reading*

---

# PART A: PRODUCT VISION & DESIGN
# Sage: Master Design Document v4
## The Invisible Coaching Intelligence

---

## Executive Summary

Sage is not a coaching app. Sage is an **invisible, embedded agentic AI intelligence** that lives inside the tools coaches and coachees already use. There is no new website to learn, no dashboard to check, no additional workflow to adopt.

Sage is:
- **Invisible** — Embedded in email, calendar, docs, browser
- **Sovereign** — User-owned, not company-owned
- **Specialized** — Expert in coaching, psychology, behavior change, human development
- **Proactive** — Acts on behalf of users through prompts or voice
- **Contextual** — Knows users deeply from all their data sources

### The Core Promise
**Zero workflow change, infinite support.**

---

## Part 1: Core Philosophy

### 1.1 The Golden Rules

1. **Don't ask what can be found. Scan first, ask only what's missing.**
2. **Multi-select everywhere** — People wear multiple hats
3. **Voice/free-form always available** — Messy input welcome, AI clarifies
4. **No duplication** — If it exists somewhere, ingest it
5. **Progressive trust = progressive access** — Sensitive data comes later
6. **Reflect back, don't interrogate** — Show understanding, invite correction

### 1.2 The Experience Promise

1. User grants access to existing sources
2. AI scours and gathers everything it can
3. AI presents: "Here's what I understand about you"
4. AI asks: "Here's what I still need to know"
5. User confirms, corrects, adds
6. System is working within hours, not days

### 1.3 Design Principles (From UX Prototyping)

- **Always allow multi-select** — Never force single choice when multiple apply
- **Always include "None of the above"** — Respect users who don't fit categories
- **Always include "Other" with text/voice field** — Capture edge cases
- **Keep tone calm and confident** — No "that's brave" or "extraordinary access"
- **Be comprehensive with platform lists** — Include all major options
- **Add brief "why" explanations at sensitive moments** — Build trust
- **Never use profanity** — "Holy shit" might offend some users
- **Provide submit button clarity** — Users need to know how to proceed

---

## Part 2: Three-Tier Data Hierarchy

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

## Part 3: Corporate Admin Onboarding

**Prototype User: Terrence Hackett, McKinsey & Company**

### 3.1 Welcome & Role Verification

**Prompt:** "Welcome to Sage. Let's get your coaching program connected. First, help us understand your role:"

**Role Options (multi-select):**
- [ ] Program Owner / Lead
- [ ] Learning & Development
- [ ] HR / People Operations
- [ ] IT / Security
- [ ] Finance / Procurement
- [ ] Executive Sponsor
- [ ] Other: [text field]

### 3.2 Organization Context

**Questions:**
- Organization name
- Your role/title
- Program scale:
  - Number of coaches (1-10, 11-50, 51-200, 200+)
  - Number of coachees (1-50, 51-200, 201-500, 501-2000, 2000+)
- Coaching structure:
  - [ ] Internal coaches only
  - [ ] External coaches only
  - [ ] Mix of internal and external
  - [ ] Manager-as-coach model
  - [ ] Peer coaching

### 3.3 Current Pain Points

**Question:** "What challenges are you hoping Sage helps solve? (Select all that apply)"

- [ ] Limited visibility into coaching quality and outcomes
- [ ] Difficulty tracking ROI on coaching investment
- [ ] Administrative overhead managing coaches and matching
- [ ] Inconsistent coaching methodology across coaches
- [ ] Scaling coaching to more employees
- [ ] Coach-coachee matching inefficiencies
- [ ] Compliance and reporting requirements
- [ ] None of the above
- [ ] Other: [text field]

### 3.4 Systems Integration

**Question:** "What systems does your organization use?"

**Learning & Development:**
- [ ] Custom LMS
- [ ] Workday Learning
- [ ] Cornerstone
- [ ] SAP SuccessFactors
- [ ] LinkedIn Learning
- [ ] Other: [specify]
- [ ] None

**Performance Management:**
- [ ] Workday
- [ ] SuccessFactors
- [ ] Lattice
- [ ] 15Five
- [ ] Culture Amp
- [ ] Custom system
- [ ] Other: [specify]
- [ ] None

**HR Systems:**
- [ ] Workday
- [ ] SAP
- [ ] Oracle
- [ ] BambooHR
- [ ] ADP
- [ ] Other: [specify]
- [ ] None

**Communication:**
- [ ] Microsoft Teams
- [ ] Slack
- [ ] Google Workspace
- [ ] Outlook/Exchange
- [ ] Other: [specify]

### 3.5 Stakeholder Approval Workflow

**Question:** "Sage integrates with your existing systems. Who needs to approve this integration?"

**Stakeholder Checklist:**
- [ ] IT Security
- [ ] Legal / Compliance
- [ ] HR / People Operations
- [ ] L&D / Talent Development
- [ ] Procurement
- [ ] Finance
- [ ] Other: [specify]

**For each stakeholder selected, Sage drafts a personalized email:**

---

#### Draft Email: IT Security

**Subject:** Sage Integration Review Request — AI-Assisted Coaching Platform

Dear [IT Security Lead],

We're evaluating Sage, an AI-powered coaching intelligence platform, for our enterprise coaching program. Before proceeding, we need your security review and approval.

**Key Security Features:**
- SOC 2 Type II certified
- End-to-end encryption (AES-256 at rest, TLS 1.3 in transit)
- Zero-knowledge architecture for sensitive coaching content
- GDPR and CCPA compliant
- Single Sign-On (SSO) via SAML 2.0 / OAuth 2.0
- Role-based access controls (RBAC)
- Complete audit logging
- Data residency options available

**Integration Scope:**
- Calendar integration (read-only for scheduling awareness)
- Optional: Email integration (with explicit user consent per message)
- Authentication via existing identity provider

**Data Handling:**
- Coaching session content is encrypted and inaccessible to Sage staff
- Corporate admins see only aggregate, anonymized metrics
- Individual coaching data owned by coachee, not the organization

I'd like to schedule 30 minutes for a security architecture walkthrough. The Sage team can provide their security documentation and answer technical questions.

Best regards,
[Your Name]

---

#### Draft Email: Legal / Compliance

**Subject:** Legal Review — Sage AI Coaching Platform Agreement

Dear [Legal Contact],

We're finalizing vendor evaluation for Sage, an AI-assisted coaching platform. I'm attaching the draft agreement and DPA for your review.

**Key Legal Considerations:**
- Data Processing Agreement (DPA) included
- GDPR Article 28 compliant processor terms
- Individual data sovereignty model (coachees own their data)
- Right to deletion fully supported
- No training on customer data without explicit opt-in
- Clear liability and indemnification provisions

**Unique Architecture:**
- Coaching content is architecturally inaccessible to corporate admins
- This protects the organization from liability related to sensitive disclosures
- Coachees maintain data portability rights

Please flag any concerns or required modifications.

Best regards,
[Your Name]

---

#### Draft Email: HR / People Operations

**Subject:** Sage Platform — HR Integration and Employee Experience

Dear [HR Lead],

Sage will enhance our coaching program with AI-assisted insights while maintaining employee privacy and trust.

**For HR/People Ops:**
- Seamless employee onboarding via HRIS integration
- Automated coach-coachee matching (optional)
- Aggregate program insights without individual exposure
- Clear separation between performance data and coaching conversations
- Support for manager-as-coach and peer coaching models

**Employee Trust:**
- Coaching conversations remain confidential by architecture, not just policy
- Employees control what (if anything) is shared with the organization
- Data portability if employees leave the company

This supports our commitment to psychological safety in coaching.

Best regards,
[Your Name]

---

#### Draft Email: L&D / Talent Development

**Subject:** Sage Platform — Coaching Program Enhancement

Dear [L&D Lead],

Sage augments our coaching investment with AI-powered insights and support.

**For L&D:**
- Real-time visibility into coaching engagement and progress
- ICF-aligned competency tracking (ACC/PCC/MCC development paths)
- Aggregate outcome metrics tied to business goals
- Coach development recommendations
- Scalability without proportional admin overhead

**ROI Tracking:**
- Pre/post coaching assessments integrated
- Goal completion rates and milestone tracking
- Engagement quality indicators
- Time-to-value metrics

I'd like to walk you through the L&D dashboard capabilities.

Best regards,
[Your Name]

---

#### Draft Email: Procurement

**Subject:** Sage AI Coaching Platform — Vendor Onboarding

Dear [Procurement Contact],

We're ready to proceed with Sage for our coaching program. Please initiate vendor onboarding.

**Vendor Details:**
- Company: Sage AI, Inc.
- Product: Sage Coaching Intelligence Platform
- Pricing Model: Per-seat (coach) + per-seat (coachee) annual subscription
- Contract Term: [Annual/Multi-year]

**Required Actions:**
- Vendor registration in procurement system
- Payment terms setup
- Insurance verification (E&O, Cyber Liability)

Attached: W-9, insurance certificates, company registration

Best regards,
[Your Name]

---

#### Draft Email: Finance

**Subject:** Budget Approval — Sage AI Coaching Platform

Dear [Finance Contact],

Requesting budget approval for Sage, our enterprise coaching platform.

**Investment Overview:**
- Annual cost: $[X]
- Cost per coach: $[X]/year
- Cost per coachee: $[X]/year
- Program size: [X] coaches, [X] coachees

**ROI Projection:**
- Reduced admin time: [X] hours/year
- Improved coach utilization: [X]%
- Measurable outcomes via integrated assessments
- Scalability without proportional cost increase

This investment aligns with our [L&D strategy / leadership development goals / culture initiative].

Best regards,
[Your Name]

---

### 3.6 Data Visibility Explanation

**Prompt:** "Here's what you'll be able to see — and what you won't:"

**Corporate Dashboard Shows:**
- Program enrollment and engagement rates
- Aggregate coaching hours delivered
- Goal completion rates (anonymized)
- Coach utilization and availability
- ROI metrics tied to business outcomes
- Assessment score improvements (aggregate)

**Corporate Dashboard Does NOT Show:**
- Individual session content
- Personal goals or challenges
- Specific coach-coachee conversations
- Anything the coachee hasn't explicitly approved

**Why This Matters:**
This architecture protects both employees and the organization. Employees can be fully candid in coaching without fear of disclosure. The organization is protected from liability related to sensitive information.

---

## Part 4: Coach Onboarding

**Prototype User: Jesse Torrence (you)**

### 4.1 Welcome & Access

**Prompt:** "Welcome to Sage. Instead of asking you a hundred questions, let me learn about you from what already exists. Grant access to any of these, and I'll do the rest:"

### 4.2 Data Sources (Comprehensive List)

**Professional Identity:**
- [ ] LinkedIn profile
- [ ] Personal/coaching website
- [ ] Resume/CV upload

**Social Media:**
- [ ] Instagram
- [ ] Facebook
- [ ] Twitter/X
- [ ] YouTube
- [ ] TikTok
- [ ] Threads
- [ ] LinkedIn posts
- [ ] Substack/Newsletter
- [ ] Medium/Blog
- [ ] Podcast (as host or guest)
- [ ] Twitch
- [ ] Discord
- [ ] Clubhouse
- [ ] None of the above
- [ ] Other: [text field]

**Document Storage:**
- [ ] Google Drive
- [ ] Dropbox
- [ ] OneDrive
- [ ] iCloud
- [ ] Box
- [ ] Notion
- [ ] Evernote
- [ ] OneNote
- [ ] Obsidian
- [ ] Apple Notes
- [ ] Dropbox Paper
- [ ] None of the above
- [ ] Other: [text field]

**Calendar & Scheduling:**
- [ ] Google Calendar
- [ ] Outlook Calendar
- [ ] Apple Calendar
- [ ] Calendly
- [ ] Acuity Scheduling
- [ ] SavvyCal
- [ ] Cal.com
- [ ] Book Like A Boss
- [ ] None of the above
- [ ] Other: [text field]

**Video & Meeting:**
- [ ] Zoom
- [ ] Google Meet
- [ ] Microsoft Teams
- [ ] Webex
- [ ] FaceTime
- [ ] Skype
- [ ] None of the above
- [ ] Other: [text field]

**Transcription Services:**
- [ ] Otter.ai
- [ ] Fireflies.ai
- [ ] Fathom
- [ ] Rev
- [ ] Grain
- [ ] Descript
- [ ] Trint
- [ ] None of the above
- [ ] Other: [text field]

**Email:**
- [ ] Gmail
- [ ] Outlook/Microsoft 365
- [ ] Apple Mail
- [ ] ProtonMail
- [ ] Hey.com
- [ ] Fastmail
- [ ] Yahoo Mail
- [ ] None of the above
- [ ] Other: [text field]

**CRM & Client Management:**
- [ ] HubSpot
- [ ] Salesforce
- [ ] Dubsado
- [ ] HoneyBook
- [ ] Practice Better
- [ ] CoachAccountable
- [ ] Airtable
- [ ] Notion database
- [ ] Spreadsheet (Google Sheets/Excel)
- [ ] None of the above
- [ ] Other: [text field]

**Project/Task Management:**
- [ ] Asana
- [ ] Trello
- [ ] Monday.com
- [ ] Todoist
- [ ] ClickUp
- [ ] Basecamp
- [ ] Things 3
- [ ] OmniFocus
- [ ] None of the above
- [ ] Other: [text field]

**Payments & Invoicing:**
- [ ] Stripe
- [ ] PayPal
- [ ] Square
- [ ] Venmo (business)
- [ ] Zelle
- [ ] QuickBooks
- [ ] FreshBooks
- [ ] Wave
- [ ] None of the above
- [ ] Other: [text field]

### 4.3 AI Scours & Presents Back

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

### 4.4 Fill the Gaps

AI asks ONLY what couldn't be found:

**Practice Details:**
- On average, how many coachees do you work with at once?
- Right now, exactly how many active coachees do you have?
- How often do you typically meet with each coachee?
- What's your typical engagement length?

**Coaching Approach:**
- What frameworks or methodologies do you use?
- What assessments do you use with coachees?

**Assessments (multi-select):**
- [ ] CliftonStrengths / StrengthsFinder
- [ ] Enneagram
- [ ] DISC
- [ ] Myers-Briggs (MBTI)
- [ ] Hogan Assessments
- [ ] VIA Character Strengths
- [ ] Leadership Circle Profile
- [ ] EQ-i / Emotional Intelligence
- [ ] 360-degree feedback tools
- [ ] Custom intake assessments
- [ ] None of the above
- [ ] Other: [text field]

**Credentials (if not found):**
- [ ] ICF ACC
- [ ] ICF PCC
- [ ] ICF MCC
- [ ] Pursuing ICF credential
- [ ] CCE / BCC
- [ ] NBC-HWC (Health & Wellness)
- [ ] CPCC (Co-Active)
- [ ] Other: [specify]
- [ ] None

**Training Background:**
- Where did you receive your coach training?
- [ ] CTI (Coaches Training Institute)
- [ ] iPEC
- [ ] Coach U
- [ ] Georgetown Leadership Coaching
- [ ] Hudson Institute
- [ ] Newfield Network
- [ ] Columbia Coaching Certification
- [ ] Internal corporate program
- [ ] Self-taught / mentorship
- [ ] Other: [specify]

### 4.5 Sensitive Data Access

**Prompt:** "There's more data that could help Sage support you even better. This is entirely optional and you control it completely."

**Phone Access:**
- [ ] Text/SMS history (for client communication patterns)
- [ ] Call logs (for session tracking)
- [ ] Voicemail transcripts
- [ ] None of the above

**Why we ask:** Understanding your communication patterns helps Sage anticipate needs and draft responses that sound like you. You can revoke access and delete this data from our servers at any time, while retaining it for yourself.

**Financial Data (optional):**
- [ ] Tax documents (for business insights)
- [ ] Bank statements (for revenue tracking)
- [ ] None of the above

**Why we ask:** Financial data helps Sage provide business coaching and growth recommendations. This is completely optional and can be added later when you're ready.

### 4.6 What Sage Offers Coaches

**Content Expectations:**
- [ ] Session summaries that sound like me
- [ ] Deep insights I might have missed
- [ ] Powerful questions that encourage growth
- [ ] Action items and accountability tracking
- [ ] Pattern recognition across sessions
- [ ] All of the above
- [ ] None of the above
- [ ] Other: [text field]

**Interface Preferences:**
- [ ] I want prompts/nudges throughout my workflow
- [ ] I want a digest I can review at my convenience
- [ ] I want voice interaction
- [ ] I want minimal interruption — only flag what's critical
- [ ] All of the above
- [ ] Other: [text field]

### 4.7 Coach Development & Effectiveness

**Prompt:** "Sage can help you grow as a coach, not just manage your practice."

**ICF Credential Development:**
- Track coaching hours toward ICF credentials
- Align sessions with ICF Core Competencies
- Identify development areas (ACC → PCC → MCC path)
- Prepare for credential applications

**Effectiveness Insights:**
- Session quality indicators
- Coachee progress tracking
- Outcome measurement
- Peer benchmarking (anonymized)

### 4.8 Business Building Support

**Question:** "Beyond coaching sessions, what business support would help you?"

- [ ] Website development or optimization
- [ ] Marketing content creation
- [ ] Testimonial collection and showcase
- [ ] Referral system development
- [ ] Social media presence
- [ ] Email newsletter support
- [ ] Lead generation and follow-up
- [ ] Pricing strategy
- [ ] Package/offering design
- [ ] None of the above
- [ ] Other: [text field]

### 4.9 Coachee Data Preview

**Prompt:** "Soon, we'll help you bring your coachees into Sage. You'll be able to:"

- Import existing coachees from your CRM or calendar
- Send consent requests (we draft, you approve)
- Give coachees 24/7 access to their own Sage companion
- Track progress across all your coachees
- Never lose context between sessions

**Ready Options:**
- [ ] I'm ready to invite my coachees now
- [ ] I want to explore Sage more first
- [ ] Let me add more of my own data first
- [ ] Remind me later

### 4.10 Final Feature Checklist

**Sage for Coaches includes:**

**Pre-Session:**
- [ ] Coachee context and history summary
- [ ] Suggested focus areas based on patterns
- [ ] Previous commitments and progress check

**During Session:**
- [ ] Real-time transcription and notes
- [ ] In-session support (prompts, questions) — optional
- [ ] Capture key moments as they happen

**Post-Session:**
- [ ] Session summary in your voice
- [ ] Extracted action items and commitments
- [ ] Follow-up draft emails/messages
- [ ] Integration with your notes system

**Between Sessions:**
- [ ] Coachee check-ins (via their Sage companion)
- [ ] Progress alerts and pattern recognition
- [ ] Preparation for next session

**Practice Management:**
- [ ] Client dashboard and progress tracking
- [ ] Scheduling optimization
- [ ] Invoice and payment tracking
- [ ] Coach development tracking

**24/7 Sage Companion for Coachees:**
- [ ] Always-available support between sessions
- [ ] Integrated with coachee's own tools
- [ ] Reports insights back to coach (with consent)

---

## Part 5: Coachee Onboarding

**Prototype User: McKinsey Employee Receiving Coaching**

### 5.1 Invitation from Coach

**Email (drafted by coach, sent by coach):**

Subject: Your Coaching Companion — Sage

Hi [Coachee Name],

I'm excited to introduce you to Sage, an AI companion that will support our coaching work together.

Sage helps by:
- Remembering everything we discuss so nothing gets lost
- Checking in with you between sessions
- Helping you track progress on your goals
- Being available 24/7 when you need support

**Your privacy is protected by design:**
- Your personal reflections and data are yours alone
- I only see what you choose to share with me
- [Company] cannot access your coaching conversations — this is built into the architecture, not just a policy
- You take your data with you if you ever leave [Company]

Click below to set up your Sage account:

[Get Started with Sage]

Looking forward to our work together,
[Coach Name]

### 5.2 Coachee Welcome & Consent

**Prompt:** "Welcome to Sage — your coaching companion."

**Key Assurances (upfront):**

1. **Your data is yours.** Not your company's. Not your coach's. Yours.

2. **Your company cannot see your coaching conversations.** This isn't just our policy — it's how Sage is built. Architecturally, your personal content is encrypted and inaccessible to anyone but you.

3. **Your coach sees only what you share.** You control exactly what your coach can access.

4. **If you leave [Company], your Sage account goes with you.** Your coaching history, goals, and insights are yours to keep forever.

5. **You can revoke access and delete data anytime.** While keeping your own copy.

### 5.3 Addressing Concerns

**Question:** "Before we start, is there anything you're concerned about?"

- [ ] I'm worried my company might see my coaching conversations
- [ ] I'm worried my manager might access this
- [ ] I didn't choose to be coached — it was required or offered
- [ ] I'm not sure if this will actually help
- [ ] I'm concerned about AI having access to my information
- [ ] None of the above — I'm ready to proceed
- [ ] Other: [text field]

**Responses to concerns:**

**If "worried company might see":**
"Your concern is completely valid. Here's how Sage protects you: Your coaching content is encrypted with keys that only you control. Neither Sage, your coach, nor your company can decrypt it. Your company sees only that coaching is happening and aggregate outcomes — never the content. This is architecture, not just policy."

**If "didn't choose coaching":**
"That's completely okay. Many people start coaching because it was offered or expected, and end up finding real value. Let's focus on what would actually be useful for you. You're in complete control of how deep this goes."

### 5.4 Privacy Preferences

**Prompt:** "Let's set up what you're comfortable sharing."

**Three Data Tiers:**

**Tier 1: Private (Only You)**
- Personal reflections and journal entries
- Sensitive goals or challenges
- Anything you mark as private

**Tier 2: Coach-Shared (You + Coach)**
- Session notes and summaries
- Goals you're working on together
- Progress updates
- Challenges you're discussing

**Tier 3: Company-Visible (Anonymized Aggregate Only)**
- That coaching is occurring (yes/no)
- Engagement level (participating/not)
- General theme categories (leadership, communication, etc.)
- Outcome metrics (goal progress %)

**You control which tier each piece of information belongs to.**
**You can change these settings anytime.**

### 5.5 Data Collection (Mirroring Coach Flow)

**Prompt:** "To support you best, Sage can learn from your existing tools. Grant access to any of these:"

**Work Tools:**
- [ ] Work calendar (Google/Outlook)
- [ ] Work email (with explicit per-message consent option)
- [ ] Work documents (Google Drive/OneDrive/SharePoint)
- [ ] Slack/Teams messages
- [ ] None of the above

**Personal Tools (optional):**
- [ ] Personal calendar
- [ ] Personal email
- [ ] Personal notes (Apple Notes/Notion/etc.)
- [ ] None of the above

**Why we ask:** Understanding your full context — work and life — helps Sage support your whole development journey. Personal tools are completely optional.

### 5.6 Goals & Aspirations

**Question:** "What brought you to coaching?"

- [ ] Career development / advancement
- [ ] Leadership skills
- [ ] Communication improvement
- [ ] Work-life balance
- [ ] Handling a specific challenge
- [ ] Personal growth
- [ ] Required or offered by my company
- [ ] Exploring / not sure yet
- [ ] Other: [text field]

**Question:** "What would make this coaching valuable for you?"

[Free text / voice field]

### 5.7 Whole-Life Goal Tracking

**Prompt:** "Sage can help you track goals across your whole life — not just work. This is completely optional and private to you."

**Life Areas (private by default):**
- [ ] Career & professional development
- [ ] Health & fitness
- [ ] Relationships & family
- [ ] Financial goals
- [ ] Personal interests & hobbies
- [ ] Spiritual / meaning / purpose
- [ ] Learning & education
- [ ] None of the above — keep it work-focused

**If selected, Sage acts as a GTD-style life companion:**
- Track goals and projects across all areas
- Surface relevant context in coaching sessions (with your permission)
- Provide 24/7 support for any area of life
- Integrate with all your existing productivity tools

### 5.8 Biometric Integration (Coming Soon)

**Prompt:** "In the future, Sage can integrate health and biometric data to support your wellbeing. Would you be interested?"

- [ ] Apple Watch / Apple Health
- [ ] Fitbit
- [ ] Oura Ring
- [ ] Whoop
- [ ] Garmin
- [ ] Other health apps
- [ ] Not interested
- [ ] Tell me more when it's available

### 5.9 Assessment Results

**Question:** "Have you taken any of these assessments? Sharing results helps your coach understand you better."

- [ ] CliftonStrengths / StrengthsFinder
- [ ] Enneagram
- [ ] DISC
- [ ] Myers-Briggs (MBTI)
- [ ] Hogan Assessments
- [ ] VIA Character Strengths
- [ ] Leadership Circle Profile
- [ ] EQ-i / Emotional Intelligence
- [ ] 360-degree feedback
- [ ] None of the above
- [ ] Other: [text field]

[Upload option for each selected]

### 5.10 Pre-Session Check-Ins

**Prompt:** "Before each coaching session, Sage can check in with you to help you prepare."

**Check-In Schedule:**
- [ ] Day before session — "What's on your mind for tomorrow's session?"
- [ ] Hour before session — "Quick reminder: your session is in an hour. Anything specific you want to focus on?"
- [ ] Both
- [ ] Neither — I'll prepare on my own

**Why this helps:** Arriving at sessions with clarity on what you want to work on makes every minute more valuable.

### 5.11 24/7 Sage Companion

**Prompt:** "Sage is available to you anytime, not just during coaching sessions."

**What 24/7 Sage offers:**
- Talk through challenges in the moment
- Process difficult conversations
- Prepare for high-stakes situations
- Track progress on commitments
- Celebrate wins
- Access insights from your coaching sessions

**How it works:**
- Seamlessly integrated with your existing tools
- No new app to check
- Appears in email, Slack, Teams, or wherever you work
- Completely optional — available when you want it

**Access Preference:**
- [ ] Yes, I want 24/7 Sage access
- [ ] Let me try it first
- [ ] No thanks — I prefer scheduled sessions only

### 5.12 What to Expect

**Your Coaching Experience with Sage:**

**Before Sessions:**
- Sage checks in (day before, hour before — your choice)
- Helps you clarify what you want to focus on
- Surfaces relevant context from your life

**During Sessions:**
- Your coach has full context (nothing lost between sessions)
- Real-time capture means nothing is missed
- You can focus fully on the conversation

**After Sessions:**
- Session summary sent to you
- Action items and commitments tracked
- Progress visible in your dashboard

**Between Sessions:**
- 24/7 Sage companion available
- Progress check-ins
- Support when you need it

**Data Portability:**
- Everything you create in Sage belongs to you
- Export your data anytime
- If you leave [Company], your account goes with you
- Your coaching history is yours forever

---

## Part 6: Distribution Strategy

### 6.1 ICF Partnership Vision

**The Goal:** Become the official AI infrastructure partner of the International Coaching Federation (ICF).

**Value to ICF:**
- Automated credential hour tracking for coaches
- ICF Core Competency development alignment
- Quality assurance across ICF-certified coaches
- Data insights on coaching effectiveness (aggregate, anonymized)
- Revenue share on enterprise deployments

**Value to Coaches:**
- Pre-integrated ICF requirements
- Credential development support (ACC → PCC → MCC)
- ICF-endorsed AI tools
- Competitive differentiation

### 6.2 Enterprise Distribution

**Go-to-Market:**
1. Partner with major coaching providers (BetterUp, CoachHub, etc.)
2. Direct enterprise sales to Fortune 500 L&D teams
3. ICF chapter partnerships
4. Coach training program integrations

### 6.3 Individual Coach Distribution

**Channels:**
- ICF member directory integration
- Coach training program partnerships
- Coaching association endorsements
- Word-of-mouth from enterprise deployments

---

## Part 7: Platform Integration Reference

### Complete Platform Lists

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

**Social Media:**
LinkedIn, Instagram, Facebook, Twitter/X, YouTube, TikTok, Threads, Substack, Medium, Twitch, Discord, Clubhouse

**Communication:**
Slack, Microsoft Teams, Voxer, WhatsApp, Signal, Text/SMS

**Assessments:**
CliftonStrengths, Enneagram, DISC, Myers-Briggs (MBTI), Hogan, VIA Character Strengths, Leadership Circle, EQ-i, 360 tools

**Biometrics & Health:**
Apple Watch / Apple Health, Fitbit, Oura Ring, Whoop, Garmin

**Enterprise Systems:**
Workday, SAP SuccessFactors, Oracle, BambooHR, ADP, Cornerstone, LinkedIn Learning, Custom LMS

---

## Part 8: Data Sovereignty Principles

### Core Commitments

1. **You own your data.** Not us. Not ever.
2. **Your clients/coachees own their data.** Same deal.
3. **You see everything we see.** Full transparency on what's accessed.
4. **Delete means delete.** Instant, complete, irreversible.
5. **Permissions are granular.** Turn anything off anytime.
6. **No training on your data.** Unless you explicitly opt in.
7. **We explain in plain English.** No legalese hiding in terms.

### Transparency Dashboard

Available to every user:
- What sources are connected
- What data has been accessed
- What data is stored
- Audit log of AI actions
- One-click revoke for any source
- One-click delete all

### Coachee-Specific Protections

- Coaching content encrypted with coachee-controlled keys
- Corporate admin dashboard shows aggregate only
- Coach sees only what coachee explicitly shares
- Data portability: coachee takes account when leaving company
- Right to be forgotten fully implemented

---

## Part 9: Open Questions

1. **Technical Architecture:** How exactly does the "architecturally impossible" corporate access work? (Zero-knowledge encryption? Key escrow? Client-side only?)

2. **Revenue Model:** Per-seat pricing at coach level, coachee level, or both? Enterprise vs. individual pricing?

3. **MVP Scope:** What's the MVIP (Minimal Viable Invisible Product)?
   - Calendar + Video integration
   - Email integration
   - Notes/Knowledge Store

4. **Voice Interface:** Real-time transcription or async? Voice as primary or secondary interface?

5. **First Value Moment:** What's the hook that makes coaches say "I need this"? (Likely: post-session summary that sounds like them)

6. **Corporate Compliance:** What's the minimum viable security certification? (SOC 2 Type II?)

7. **Coach Development:** How deep does ICF integration go? Official partnership or parallel tracking?

8. **24/7 Companion:** What are the boundaries? When does Sage say "let's discuss this with your coach"?

---

## Part 10: Next Steps

### Immediate (Prototype Phase)
1. Build functional onboarding flows in the wireframe app
2. Test with 3-5 real coaches (starting with Jesse)
3. Test corporate flow with simulated enterprise stakeholder
4. Validate data sovereignty messaging resonates

### Near-Term (MVP)
1. Core calendar + video integration
2. Session transcription and summary
3. Basic coach dashboard
4. Coachee consent flow
5. One enterprise pilot

### Medium-Term (Growth)
1. Full platform integrations
2. ICF partnership development
3. Coach development features
4. Business building tools
5. 24/7 companion launch

---

---
---
---

# PART B: DEVELOPMENT ROADMAP
# Sage Development Roadmap v1
## From Vision to Reality

---

## Executive Summary

This document translates the Sage Master Design into an actionable development plan. It covers technical architecture, MVP scoping, build priorities, and a phased roadmap from prototype to production.

---

## Part 1: Technical Architecture

### 1.1 Core Architectural Principles

**Principle 1: Invisible by Default**
Sage has no standalone app. It lives inside:
- Browser extensions
- Email clients (Gmail/Outlook add-ins)
- Calendar integrations
- Slack/Teams bots
- Voice assistants

**Principle 2: Sovereign Data Architecture**
```
┌─────────────────────────────────────────────────────────────────┐
│                     COACHEE DATA VAULT                          │
│           (Client-side encrypted, user-controlled keys)         │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐ │
│  │   Private   │  │Coach-Shared │  │   Company-Visible       │ │
│  │   (Tier 1)  │  │  (Tier 2)   │  │      (Tier 3)           │ │
│  │             │  │             │  │                         │ │
│  │ User key    │  │ Shared key  │  │ Aggregate/anonymized    │ │
│  │ only        │  │ with coach  │  │ No encryption needed    │ │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Principle 3: Zero-Knowledge for Sensitive Content**
- Coaching session content encrypted client-side before transmission
- Sage servers never see plaintext coaching conversations
- Decryption keys held only by coachee (Tier 1) or shared with coach (Tier 2)

### 1.2 System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                                   │
│                                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐     │
│  │ Browser  │ │  Gmail   │ │ Outlook  │ │  Slack   │ │  Zoom    │     │
│  │Extension │ │ Add-in   │ │ Add-in   │ │   Bot    │ │Integration│    │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘     │
│       │            │            │            │            │            │
│       └────────────┴────────────┴────────────┴────────────┘            │
│                                 │                                       │
│                    ┌────────────▼────────────┐                         │
│                    │   Local Encryption      │                         │
│                    │   (Client-side keys)    │                         │
│                    └────────────┬────────────┘                         │
└─────────────────────────────────┼───────────────────────────────────────┘
                                  │
                                  │ HTTPS/WSS (encrypted in transit)
                                  │
┌─────────────────────────────────▼───────────────────────────────────────┐
│                           API GATEWAY                                    │
│                                                                         │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐        │
│  │ Authentication  │  │  Rate Limiting  │  │   API Routing   │        │
│  │   (OAuth 2.0)   │  │                 │  │                 │        │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘        │
└─────────────────────────────────┬───────────────────────────────────────┘
                                  │
┌─────────────────────────────────▼───────────────────────────────────────┐
│                         CORE SERVICES                                    │
│                                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│  │   User      │ │  Session    │ │   Goals     │ │  Analytics  │      │
│  │  Service    │ │  Service    │ │  Service    │ │  Service    │      │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘      │
│                                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐      │
│  │Integration  │ │  AI/LLM     │ │Notification │ │  Consent    │      │
│  │  Service    │ │  Service    │ │  Service    │ │  Service    │      │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘      │
└─────────────────────────────────┬───────────────────────────────────────┘
                                  │
┌─────────────────────────────────▼───────────────────────────────────────┐
│                         DATA LAYER                                       │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────┐       │
│  │                    Encrypted Data Store                      │       │
│  │                                                              │       │
│  │  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │       │
│  │  │ User Profiles │  │Session Blobs  │  │  Goal Data    │   │       │
│  │  │ (encrypted)   │  │(zero-knowledge)│ │  (encrypted)  │   │       │
│  │  └───────────────┘  └───────────────┘  └───────────────┘   │       │
│  └─────────────────────────────────────────────────────────────┘       │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────┐       │
│  │              Analytics Data Store (Aggregate Only)           │       │
│  │                                                              │       │
│  │  No PII • No session content • Anonymized metrics only      │       │
│  └─────────────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────┘
```

### 1.3 Encryption Model

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

COMPANY VISIBILITY (Tier 3):
1. Coachee opts to share specific metrics
2. Metrics are anonymized and aggregated BEFORE encryption
3. Company sees: "85% goal completion rate across 50 coachees"
4. Company cannot see: Who, what goals, any session content
```

**Key Management:**
- Keys generated and stored using Web Crypto API (browser) or platform keychain
- Optional key backup: Encrypted with user passphrase, stored in cloud
- Key rotation supported for added security
- "Forgot password" = Generate new keys (old data inaccessible by design)

### 1.4 Integration Architecture

**OAuth 2.0 Flow for Each Integration:**

```
USER                    SAGE                    GOOGLE/ZOOM/etc.
  │                       │                           │
  │  "Connect Calendar"   │                           │
  │──────────────────────>│                           │
  │                       │                           │
  │                       │    OAuth Authorization    │
  │                       │─────────────────────────>│
  │                       │                           │
  │    Redirect to Google │                           │
  │<──────────────────────│                           │
  │                       │                           │
  │         User Consents │                           │
  │──────────────────────────────────────────────────>│
  │                       │                           │
  │                       │    Access + Refresh Token │
  │                       │<─────────────────────────│
  │                       │                           │
  │   "Calendar Connected"│                           │
  │<──────────────────────│                           │
```

**Supported Integrations (MVP):**

| Integration | Type | Data Flow | Priority |
|-------------|------|-----------|----------|
| Google Calendar | OAuth 2.0 | Read events, detect coaching sessions | P0 |
| Zoom | OAuth 2.0 | Join URL, recording access (with consent) | P0 |
| Gmail | OAuth 2.0 | Read-only, specific labels/threads | P1 |
| Google Docs | OAuth 2.0 | Read/write session notes | P1 |
| Outlook Calendar | OAuth 2.0 | Read events | P1 |
| Slack | Bot token | Post summaries, DM coachees | P2 |

### 1.5 AI/LLM Architecture

**Model Usage:**

| Function | Model | Why |
|----------|-------|-----|
| Session summarization | Claude/GPT-4 | Quality, nuance, voice matching |
| Quick responses | Claude Haiku/GPT-3.5 | Speed, cost |
| Voice transcription | Whisper/Deepgram | Accuracy, real-time |
| Embeddings (search) | text-embedding-3 | Vector search for context |

**Voice Matching Process:**
1. Coach uploads sample content (emails, notes, articles)
2. System creates "voice profile" via embeddings + style analysis
3. All generated content passed through voice-matching layer
4. Coach edits → system learns → voice improves

**Context Window Management:**
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

### 1.6 Security & Compliance

**Required Certifications:**
- SOC 2 Type II (required for enterprise)
- GDPR compliance (EU coachees)
- CCPA compliance (California)
- HIPAA-ready architecture (for health coaching expansion)

**Security Measures:**
- TLS 1.3 for all transit
- AES-256 for data at rest
- Client-side encryption for sensitive content
- Regular penetration testing
- Bug bounty program
- Audit logging for all data access

---

## Part 2: MVP Definition (MVIP)

### 2.1 What is the Minimal Viable Invisible Product?

The MVIP must deliver the core promise: **"Zero workflow change, infinite support."**

**First Value Moment:** Coach receives a session summary that sounds like them, 5 minutes after the session ends.

### 2.2 MVIP Feature Set

```
MVIP SCOPE
═══════════════════════════════════════════════════════════════

COACH FEATURES (P0):
├── Onboarding flow (scan + ask)
├── Calendar integration (Google first)
├── Zoom integration (recording access)
├── Session transcription (auto from Zoom)
├── Session summary generation (in coach's voice)
├── Basic coach dashboard
└── Coachee invite flow

COACHEE FEATURES (P0):
├── Consent flow (coach-initiated)
├── Basic privacy preferences (3 tiers)
├── View own session summaries
└── Simple goal tracking

NOT IN MVIP (P1+):
├── Corporate admin features
├── Email integration
├── Slack/Teams integration
├── 24/7 companion
├── Business building tools
├── ICF credential tracking
├── Biometric integration
└── Advanced analytics
```

### 2.3 MVIP User Journeys

**Coach Journey (MVIP):**
```
1. SIGN UP
   └── Connect Google Calendar
   └── Connect Zoom
   └── Upload 3-5 sample documents
   └── AI creates voice profile

2. FIRST SESSION
   └── Sage detects coaching session on calendar
   └── Session happens (Sage invisible)
   └── Zoom recording auto-uploaded
   └── Transcription runs automatically

3. POST-SESSION (5 minutes later)
   └── Coach receives email: "Session summary ready"
   └── Summary appears in Google Doc (or preferred note tool)
   └── Summary sounds like the coach wrote it
   └── Action items extracted
   └── Follow-up email draft ready

4. ONGOING
   └── Each session auto-summarized
   └── Coach can edit (Sage learns)
   └── Coachee context builds over time
```

**Coachee Journey (MVIP):**
```
1. INVITATION
   └── Receives email from coach
   └── Clear explanation of Sage + privacy
   └── One-click consent

2. SETUP
   └── Set privacy preferences (3 tiers)
   └── Optionally connect calendar

3. ONGOING
   └── Receives session summaries (what coach shares)
   └── Can view own goals and action items
   └── Can add private notes (Tier 1)
```

### 2.4 MVIP Technical Requirements

**Infrastructure:**
- Cloud: AWS or GCP (TBD)
- Database: PostgreSQL (structured) + S3 (blobs)
- Auth: Auth0 or Clerk
- AI: OpenAI API (GPT-4 + Whisper)
- Deployment: Vercel or AWS Lambda

**Integrations:**
- Google Calendar API
- Zoom API (OAuth + webhooks)
- Google Docs API
- SendGrid (email delivery)

**Client Apps:**
- Web app (React, Next.js)
- Chrome extension (for future Gmail/browser features)
- No mobile app in MVIP

---

## Part 3: Build Priorities

### 3.1 Phase 0: Foundation (Current → +2 weeks)

**Goal:** Functional prototype for internal testing

| Task | Description | Status |
|------|-------------|--------|
| Onboarding UI | Build coach onboarding flow in React wireframe | Not started |
| Design system | Establish component library, Tailwind config | Not started |
| Auth setup | Implement authentication (Clerk or Auth0) | Not started |
| Database schema | Design and implement initial schema | Not started |
| API foundation | Set up API routes, basic CRUD | Not started |

**Deliverable:** Working onboarding flow that captures coach data

### 3.2 Phase 1: Core Loop (+2 → +6 weeks)

**Goal:** End-to-end session capture and summarization

| Task | Description | Dependencies |
|------|-------------|--------------|
| Google Calendar OAuth | Connect and read coaching sessions | Auth setup |
| Zoom OAuth | Connect and access recordings | Auth setup |
| Transcription pipeline | Zoom recording → transcript | Zoom OAuth |
| Summarization engine | Transcript → coach-voice summary | Transcription |
| Voice profile system | Upload samples → style analysis | Summarization |
| Session dashboard | View all sessions, summaries, actions | All above |

**Deliverable:** Coach connects calendar/Zoom, session auto-summarizes in their voice

### 3.3 Phase 2: Coachee Layer (+6 → +10 weeks)

**Goal:** Coachees can consent, view content, track goals

| Task | Description | Dependencies |
|------|-------------|--------------|
| Coachee invite flow | Coach sends invite, coachee accepts | Core loop |
| Privacy preferences UI | Three-tier selection | Invite flow |
| Client-side encryption | Implement zero-knowledge for Tier 1 | Privacy UI |
| Coachee dashboard | View sessions, goals, private notes | Encryption |
| Goal tracking | Simple goal CRUD with progress | Dashboard |
| Shared vs. private | Honor tier settings throughout | All above |

**Deliverable:** Coachee experience working with privacy controls

### 3.4 Phase 3: Polish & Pilot (+10 → +14 weeks)

**Goal:** Ready for pilot with real coaches

| Task | Description | Dependencies |
|------|-------------|--------------|
| Email notifications | Session ready, check-ins, reminders | Core features |
| Edit and learn | Coach edits summary → AI improves | Summarization |
| Onboarding refinement | Based on pilot feedback | Pilot users |
| Error handling | Graceful failures, retry logic | All features |
| Security audit | External review of architecture | All features |
| Documentation | User guides, API docs | All features |

**Deliverable:** Production-ready MVIP for 10-20 pilot coaches

### 3.5 Phase 4: Enterprise Foundation (+14 → +20 weeks)

**Goal:** Support first enterprise customer

| Task | Description | Dependencies |
|------|-------------|--------------|
| Corporate admin role | Separate onboarding, permissions | Phase 3 |
| Aggregate dashboard | Program-level metrics, anonymized | Admin role |
| SSO integration | SAML 2.0 for enterprise auth | Admin role |
| Compliance features | Audit logs, data export, deletion | All features |
| Multi-coach support | One admin manages many coaches | Admin role |
| Stakeholder emails | Auto-draft approval request emails | Admin role |

**Deliverable:** Enterprise pilot with 1 organization

---

## Part 4: Prototype Implementation Plan

### 4.1 Current Wireframe State

The existing React wireframe at `/jt-preview` has:
- Basic Vite + React + Tailwind setup
- Shell component with navigation
- Placeholder pages

### 4.2 Prototype Build Plan

**Step 1: Onboarding Flow Components**

Build these screens in the wireframe:

```
/src/pages/onboarding/
├── Welcome.jsx              # Initial welcome + role selection
├── ConnectSources.jsx       # Platform integration checkboxes
├── AIAnalysis.jsx           # "Scanning your sources..." animation
├── ProfileReview.jsx        # "Here's what I found" + corrections
├── FillGaps.jsx             # Questions AI couldn't answer
├── Preferences.jsx          # Content preferences, interface style
├── CoacheePreview.jsx       # Preview of coachee invite flow
└── Complete.jsx             # Success + next steps
```

**Step 2: Component Library**

Build reusable components:

```
/src/components/
├── ui/
│   ├── Button.jsx
│   ├── Checkbox.jsx
│   ├── CheckboxGroup.jsx    # Multi-select with "None" option
│   ├── RadioGroup.jsx
│   ├── TextInput.jsx
│   ├── TextArea.jsx
│   ├── VoiceInput.jsx       # Record or type
│   ├── ProgressBar.jsx
│   ├── Card.jsx
│   └── Modal.jsx
├── onboarding/
│   ├── PlatformSelector.jsx  # Integration checkboxes by category
│   ├── ProfileSummary.jsx    # AI-generated profile display
│   ├── CorrectionField.jsx   # Inline edit for AI errors
│   └── QuestionCard.jsx      # Single question with options
└── layout/
    ├── OnboardingLayout.jsx  # Progress bar + step navigation
    └── DashboardLayout.jsx   # Post-onboarding shell
```

**Step 3: State Management**

```
/src/store/
├── onboardingStore.js       # Onboarding form state (Zustand)
├── userStore.js             # User profile data
└── sessionStore.js          # Session data (future)
```

**Step 4: Mock Data**

```
/src/data/
├── platforms.js             # All platform lists from design doc
├── questions.js             # All onboarding questions
├── mockProfile.js           # Sample AI-generated profile
└── mockResponses.js         # Simulated AI responses
```

### 4.3 Prototype Screens (Detailed)

**Screen 1: Welcome**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    Welcome to Sage                          │
│                                                             │
│     Instead of asking you a hundred questions,              │
│     let me learn about you from what already exists.        │
│                                                             │
│     ┌─────────────────────────────────────────────────┐    │
│     │  I am a...                                      │    │
│     │                                                 │    │
│     │  [ ] Independent coach                         │    │
│     │  [ ] Coach working with organizations          │    │
│     │  [ ] Coaching program administrator            │    │
│     │  [ ] Corporate L&D / HR                        │    │
│     │  [ ] Coachee (receiving coaching)              │    │
│     │                                                 │    │
│     └─────────────────────────────────────────────────┘    │
│                                                             │
│                    [Continue →]                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Screen 2: Connect Sources**
```
┌─────────────────────────────────────────────────────────────┐
│  ← Back                              Step 2 of 8            │
│  ═══════════════════════════════════════════                │
│                                                             │
│     Grant access to learn about you:                        │
│                                                             │
│     PROFESSIONAL IDENTITY                                   │
│     ┌─────────────────────────────────────────────────┐    │
│     │  [✓] LinkedIn profile                          │    │
│     │  [✓] Personal/coaching website                 │    │
│     │  [ ] Resume/CV upload                          │    │
│     └─────────────────────────────────────────────────┘    │
│                                                             │
│     CALENDAR & SCHEDULING                                   │
│     ┌─────────────────────────────────────────────────┐    │
│     │  [✓] Google Calendar                           │    │
│     │  [ ] Outlook Calendar                          │    │
│     │  [ ] Calendly                                  │    │
│     │  [ ] Other: ___________                        │    │
│     └─────────────────────────────────────────────────┘    │
│                                                             │
│     [+ Show more categories]                                │
│                                                             │
│                    [Continue →]                             │
└─────────────────────────────────────────────────────────────┘
```

**Screen 3: AI Analysis (Animation)**
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                                                             │
│                    ◐ ◓ ◑ ◒                                  │
│                                                             │
│              Scanning your sources...                       │
│                                                             │
│     ✓ LinkedIn profile loaded                               │
│     ✓ Website content analyzed                              │
│     ◐ Calendar patterns processing...                       │
│     ○ Building your profile                                 │
│                                                             │
│                                                             │
│     This usually takes about 30 seconds.                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Screen 4: Profile Review**
```
┌─────────────────────────────────────────────────────────────┐
│  ← Back                              Step 4 of 8            │
│  ═══════════════════════════════════════════════════        │
│                                                             │
│     Here's what I found:                                    │
│                                                             │
│     ┌─────────────────────────────────────────────────┐    │
│     │  NAME           Jesse Torrence           [Edit] │    │
│     │  LOCATION       Los Angeles, CA          [Edit] │    │
│     │  SPECIALIZATION Executive & Leadership   [Edit] │    │
│     │  CREDENTIALS    ICF PCC, CPCC            [Edit] │    │
│     │  TRAINING       CTI, Hudson Institute    [Edit] │    │
│     │  BRAND VOICE    Warm, direct, insightful [Edit] │    │
│     │  CLIENT TYPES   Senior leaders, founders [Edit] │    │
│     └─────────────────────────────────────────────────┘    │
│                                                             │
│     How did I do?                                           │
│                                                             │
│     [This is accurate]    [I need to make corrections]      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4.4 Implementation Order

1. **Set up routing** — React Router for onboarding flow
2. **Build CheckboxGroup component** — Used everywhere
3. **Build platform data** — All lists from design doc
4. **Build Welcome screen** — First functional screen
5. **Build ConnectSources screen** — Platform selection
6. **Build mock AI analysis** — Simulated scanning
7. **Build ProfileReview screen** — Display + edit
8. **Build FillGaps screens** — Dynamic questions
9. **Build Preferences screen** — Content/interface prefs
10. **Build Complete screen** — Success state
11. **Connect state management** — Persist across screens
12. **Add animations/polish** — Loading states, transitions

---

## Part 5: Tech Stack Decisions

### 5.1 Recommended Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Frontend** | React + Next.js 14 | SSR, API routes, great DX |
| **Styling** | Tailwind CSS | Already set up, rapid iteration |
| **State** | Zustand | Simple, lightweight, no boilerplate |
| **Auth** | Clerk | Best DX, OAuth built-in, enterprise SSO |
| **Database** | PostgreSQL (Supabase) | Managed, real-time, row-level security |
| **File Storage** | S3 / Supabase Storage | Encrypted blobs for recordings |
| **AI/LLM** | OpenAI API | GPT-4 for quality, Whisper for transcription |
| **Email** | Resend or SendGrid | Transactional emails |
| **Hosting** | Vercel | Zero-config Next.js deployment |
| **Monitoring** | Sentry + Vercel Analytics | Error tracking, performance |

### 5.2 Why This Stack?

**Speed to Market:**
- Vercel + Next.js = Deploy in minutes
- Supabase = Database + Auth + Storage in one
- Clerk = OAuth for all integrations pre-built

**Scalability:**
- All serverless, scales automatically
- No infrastructure management
- Pay-per-use economics

**Security:**
- Supabase row-level security for data isolation
- Clerk handles enterprise SSO
- Built-in encryption options

### 5.3 Alternative Considerations

| If... | Consider... |
|-------|-------------|
| Need more control over infra | AWS (Lambda, RDS, S3) |
| Enterprise requires specific cloud | Azure / GCP options available |
| Real-time features critical | Add Pusher or Ably |
| Mobile app needed | React Native (shared components) |

---

## Part 6: Risk Assessment

### 6.1 Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Zoom API changes/restrictions | Medium | High | Abstract integration layer, monitor changelog |
| AI quality inconsistent | Medium | High | Human review layer, quality scoring, fallbacks |
| Encryption performance issues | Low | Medium | Client-side web workers, progressive loading |
| OAuth token management | Medium | Medium | Robust refresh logic, graceful re-auth |

### 6.2 Business Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Coaches don't trust AI with clients | High | High | Transparent AI, always editable, gradual trust |
| Enterprise sales cycle too long | High | Medium | Focus on coach-led adoption first |
| Competition (BetterUp, etc.) | High | Medium | Differentiate on invisible + sovereign |
| Pricing model wrong | Medium | Medium | Start with pilot pricing, iterate |

### 6.3 Compliance Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| GDPR violation | Low | Critical | Privacy-by-design, DPO consultation |
| Data breach | Low | Critical | Zero-knowledge architecture, SOC 2 |
| Unauthorized data access | Low | Critical | Audit logging, access controls |

---

## Part 7: Success Metrics

### 7.1 MVIP Success Criteria

| Metric | Target | How Measured |
|--------|--------|--------------|
| Coach activation | 80% of signups complete onboarding | Funnel analytics |
| First session captured | Within 7 days of signup | Event tracking |
| Summary acceptance rate | 70% used without major edits | Edit tracking |
| Coachee consent rate | 80% of invited coachees consent | Invite funnel |
| NPS (coaches) | 40+ | Survey at day 30 |

### 7.2 Growth Metrics (Post-MVIP)

| Metric | Target | Timeframe |
|--------|--------|-----------|
| Active coaches | 100 | 6 months |
| Sessions processed | 1,000/month | 6 months |
| Enterprise pilots | 3 | 9 months |
| Revenue | $10K MRR | 12 months |

---

## Part 8: Immediate Next Steps

### This Week

1. **Finalize tech stack decisions** — Confirm Supabase vs. alternatives
2. **Set up development environment** — Next.js project with Tailwind
3. **Create component library** — CheckboxGroup, RadioGroup, etc.
4. **Build Welcome screen** — First functional onboarding step
5. **Implement routing** — Onboarding flow navigation

### Next 2 Weeks

1. **Complete onboarding UI** — All 8 screens functional
2. **Add mock AI responses** — Simulated profile generation
3. **Connect Clerk auth** — Real authentication
4. **Set up Supabase** — Database schema, initial tables
5. **Deploy to Vercel** — Live prototype for testing

### First Month

1. **Google Calendar integration** — Real OAuth, read events
2. **Zoom integration** — OAuth, recording access
3. **Transcription pipeline** — Whisper API integration
4. **Summary generation** — GPT-4 + voice matching
5. **Coach dashboard** — View sessions, summaries

---

## Appendix A: Database Schema (Draft)

```sql
-- Users (coaches and coachees)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT CHECK (role IN ('coach', 'coachee', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  onboarding_completed_at TIMESTAMPTZ
);

-- Coach profiles (extended data)
CREATE TABLE coach_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id),
  linkedin_url TEXT,
  website_url TEXT,
  credentials JSONB,
  specializations TEXT[],
  voice_profile JSONB,
  integrations JSONB
);

-- Coachee profiles
CREATE TABLE coachee_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id),
  coach_id UUID REFERENCES users(id),
  privacy_preferences JSONB,
  consent_given_at TIMESTAMPTZ,
  encryption_public_key TEXT
);

-- Coaching sessions
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coach_id UUID REFERENCES users(id),
  coachee_id UUID REFERENCES users(id),
  scheduled_at TIMESTAMPTZ,
  duration_minutes INTEGER,
  recording_url TEXT,
  transcript_encrypted BYTEA,
  summary_encrypted BYTEA,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Goals
CREATE TABLE goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coachee_id UUID REFERENCES users(id),
  title TEXT,
  description_encrypted BYTEA,
  privacy_tier INTEGER CHECK (privacy_tier IN (1, 2, 3)),
  status TEXT CHECK (status IN ('active', 'completed', 'paused')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Integrations
CREATE TABLE integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  provider TEXT NOT NULL,
  access_token_encrypted BYTEA,
  refresh_token_encrypted BYTEA,
  scopes TEXT[],
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Appendix B: API Endpoints (Draft)

```
AUTH
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me

ONBOARDING
POST   /api/onboarding/start
PUT    /api/onboarding/sources
POST   /api/onboarding/analyze
PUT    /api/onboarding/profile
PUT    /api/onboarding/preferences
POST   /api/onboarding/complete

INTEGRATIONS
GET    /api/integrations
POST   /api/integrations/connect/:provider
DELETE /api/integrations/:id
POST   /api/integrations/:id/refresh

SESSIONS
GET    /api/sessions
GET    /api/sessions/:id
POST   /api/sessions/:id/transcribe
POST   /api/sessions/:id/summarize
PUT    /api/sessions/:id/summary

COACHEES
GET    /api/coachees
POST   /api/coachees/invite
GET    /api/coachees/:id
PUT    /api/coachees/:id/consent

GOALS
GET    /api/goals
POST   /api/goals
PUT    /api/goals/:id
DELETE /api/goals/:id
```

---

*Document Version: Combined 1.0*
*Last Updated: January 2026*
*Status: Complete — Vision + Roadmap ready for review and implementation*

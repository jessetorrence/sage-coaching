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

*Document Version: 1.0*
*Last Updated: January 2026*
*Status: Development planning complete — ready for implementation*

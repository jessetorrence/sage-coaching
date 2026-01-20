# WIREFRAME UPDATE INSTRUCTIONS
## Comprehensive Guide for Updating ReGenesis Wireframe to V4 Spec

**Date:** January 2026
**Reference Document:** REGENESIS-COMPLETE-MASTER-DOC-V4.md
**Current Wireframe:** http://localhost:5175/

---

# TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Critical Branding Change](#2-critical-branding-change)
3. [Missing Pre-App Flows](#3-missing-pre-app-flows)
4. [Current Pages Audit](#4-current-pages-audit)
5. [Missing Pages & Features](#5-missing-pages--features)
6. [Session Notes Updates](#6-session-notes-updates)
7. [Nested/Accordion Architecture](#7-nestedaccordion-architecture)
8. [AI Command Bar](#8-ai-command-bar)
9. [Mobile App Wireframes](#9-mobile-app-wireframes)
10. [Corporate Admin Dashboard](#10-corporate-admin-dashboard)
11. [Brand & Design Updates](#11-brand--design-updates)
12. [Implementation Priority](#12-implementation-priority)
13. [Technical Notes](#13-technical-notes)

---

# 1. EXECUTIVE SUMMARY

## The Gap

The current wireframe shows the **in-app experience** for an already-onboarded coach. It's missing:

1. **First encounter** — Landing page, marketing, value proposition
2. **User type selection** — "Are you a Coach, Coachee, or Corporate Admin?"
3. **Onboarding flows** — For each of the 3 user types
4. **Integration setup** — Connecting existing tools (Google, Zoom, etc.)
5. **Coachee experience** — Entire user tier is missing
6. **Corporate Admin experience** — Entire user tier is missing
7. **Key V4 features** — 6-section notes, nested/accordion, AI command bar, etc.

## The Goal

Create a wireframe that demonstrates the **complete user journey**:

```
First Encounter (Landing Page)
    ↓
User Type Selection (Coach / Coachee / Corporate Admin)
    ↓
[COACH PATH]           [COACHEE PATH]           [ADMIN PATH]
    ↓                       ↓                       ↓
Coach Onboarding       Coachee Onboarding     Admin Onboarding
    ↓                       ↓                       ↓
Integration Setup      Privacy Preferences    Seat Management
    ↓                       ↓                       ↓
Voice Profile Setup    Welcome from Coach     Dashboard Setup
    ↓                       ↓                       ↓
Dashboard              24/7 Companion         Program Dashboard
    ↓                       ↓                       ↓
Full App Experience    Full Coachee App       Full Admin App
```

---

# 2. CRITICAL BRANDING CHANGE

## Rename "Sage" → "ReGenesis" EVERYWHERE

**Current State:** The wireframe uses "Sage" throughout (header button, tooltips, AI page)

**Required Change:** Replace ALL instances of "Sage" with "ReGenesis"

### Specific Locations:
- Header button: "🧙‍♂️ Sage" → Ouroboros icon + "ReGenesis"
- Tooltip header: "Sage AI Assistant" → "ReGenesis AI"
- AI page title: "Sage" → "ReGenesis"
- Any text references to "Sage" in prompts or descriptions

### Logo Change:
- Current: Generic logo (logo.jpg)
- Required: Ouroboros symbol (snake eating its tail)
- Need: Multiple sizes (16x16, 32x32 for favicons, larger for header)

### Brand Feel:
- **Current:** Slightly corporate/tech (dark gray header, gradient buttons)
- **Required:** Natural, organic, warm — inspired by jessetorrence.com
  - Less aggressive gradients
  - Warmer color palette (teal + gold/orange + natural greens)
  - More breathing room in layout
  - Calm confidence, not flashy tech

---

# 3. MISSING PRE-APP FLOWS

## 3.1 Landing Page (New)

**Purpose:** First encounter for anyone visiting ReGenesis

### Sections:

```
┌────────────────────────────────────────────────────────────────────┐
│                         HERO SECTION                                │
│                                                                     │
│  [Ouroboros Logo]                                                   │
│                                                                     │
│  ReGenesis                                                          │
│  The AI that makes you a better coach.                              │
│                                                                     │
│  Session ends. Notes appear. 5 minutes or less.                     │
│                                                                     │
│  [Get Started]  [Watch Demo]  [For Enterprise]                      │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                       VALUE PROPOSITION                             │
│                                                                     │
│  The Problem:                                                       │
│  Coaches spend 30-45 minutes after each session writing notes.      │
│  They walk into sessions unprepared. Insights get forgotten.        │
│                                                                     │
│  The ReGenesis Solution:                                            │
│  • Auto-drafts session notes in YOUR voice                          │
│  • T-15 prep delivered before every session                         │
│  • 24/7 companion for your coachees                                 │
│  • Pattern recognition across all sessions                          │
│  • Works inside tools you already use (Chrome extension)            │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                        FOR WHO?                                     │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                │
│  │   COACHES   │  │  COACHEES   │  │ ENTERPRISE  │                │
│  │             │  │             │  │             │                │
│  │ Save time.  │  │ 24/7 AI     │  │ Aggregate   │                │
│  │ Coach more. │  │ companion.  │  │ ROI metrics.│                │
│  │ [Learn More]│  │ [Learn More]│  │ [Learn More]│                │
│  └─────────────┘  └─────────────┘  └─────────────┘                │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                         FEATURES                                    │
│  (with screenshots/animations of each)                              │
│                                                                     │
│  1. Post-Session Notes (show 6-section format)                      │
│  2. T-15 Prep (show prep document)                                  │
│  3. Daily Command Center (show dashboard)                           │
│  4. 24/7 Coachee Companion (show chat interface)                    │
│  5. Pattern Recognition (show insight surfacing)                    │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                        PRIVACY FIRST                                │
│                                                                     │
│  "Your data belongs to YOU, not your employer."                     │
│                                                                     │
│  • Zero-knowledge encryption                                        │
│  • Coachee data is architecturally protected                        │
│  • SOC 2 / HIPAA-ready                                              │
│                                                                     │
│  [Read our Privacy Commitment]                                      │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                        PRICING                                      │
│                                                                     │
│  Individual Coach: $X/month                                         │
│  Team: $Y/coach/month                                               │
│  Enterprise: Contact us                                             │
│                                                                     │
│  [Start Free Trial]                                                 │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                         FOOTER                                      │
│                                                                     │
│  About | Privacy | Terms | Support | Contact                        │
└────────────────────────────────────────────────────────────────────┘
```

---

## 3.2 User Type Selection (New)

**Trigger:** User clicks "Get Started" or "Sign Up"

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    Welcome to ReGenesis                             │
│                                                                     │
│           How will you be using ReGenesis?                          │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                       I'M A COACH                           │    │
│  │                                                             │    │
│  │  I provide coaching to individuals or organizations.        │    │
│  │  I want ReGenesis to help me with session notes, client     │    │
│  │  management, and administrative tasks.                      │    │
│  │                                                             │    │
│  │  [Select Coach]                                             │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                     I'M BEING COACHED                       │    │
│  │                                                             │    │
│  │  My coach invited me to use ReGenesis.                      │    │
│  │  I want a 24/7 AI companion to support my growth.           │    │
│  │                                                             │    │
│  │  [Select Coachee]                                           │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                   I'M A PROGRAM ADMIN                       │    │
│  │                                                             │    │
│  │  I manage a coaching program for my organization.           │    │
│  │  I want to see aggregate metrics and ROI.                   │    │
│  │                                                             │    │
│  │  [Select Admin]                                             │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│           Already have an account? [Sign In]                        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## 3.3 Coach Onboarding Flow (New)

**Multi-step wizard — appears after coach selects their user type**

### Step 1: Basic Info
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 1 of 7: Tell us about yourself                    [○○○○○○○]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Name: [_______________]                                            │
│  Email: [_______________]                                           │
│  Password: [_______________]                                        │
│                                                                     │
│  Coaching Focus (select all that apply):                            │
│  □ Executive/Leadership    □ Life/Personal                          │
│  □ Career Transition       □ Wellness/Health                        │
│  □ Business/Entrepreneur   □ Relationship                           │
│  □ Other: [_______________]                                         │
│                                                                     │
│  [Continue →]                                                       │
└────────────────────────────────────────────────────────────────────┘
```

### Step 2: Credentials & Experience
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 2 of 7: Your Coaching Background                  [●○○○○○○]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Certifications (select all that apply):                            │
│  □ ICF ACC    □ ICF PCC    □ ICF MCC                               │
│  □ CTI CPCC   □ iPEC CPC   □ NBC-HWC                               │
│  □ None yet   □ Other: [_______________]                            │
│                                                                     │
│  Years of coaching experience:                                      │
│  ○ Just starting    ○ 1-3 years                                    │
│  ○ 3-7 years        ○ 7+ years                                     │
│                                                                     │
│  Approximate number of active clients:                              │
│  ○ 1-5    ○ 6-15    ○ 16-30    ○ 30+                              │
│                                                                     │
│  [← Back]  [Continue →]                                             │
└────────────────────────────────────────────────────────────────────┘
```

### Step 3: Methodologies & Frameworks
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 3 of 7: Your Coaching Approach                    [●●○○○○○]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Which frameworks/methodologies do you use? (select all)            │
│                                                                     │
│  □ Co-Active Coaching (CTI)      □ GROW Model                      │
│  □ Positive Psychology           □ Solution-Focused                 │
│  □ Somatic/Embodied              □ Narrative Coaching              │
│  □ Gestalt                       □ Ontological                     │
│  □ Cognitive Behavioral          □ Internal Family Systems (IFS)   │
│  □ Polyvagal/Nervous System      □ Nonviolent Communication (NVC)  │
│  □ Drama Triangle/Empowerment    □ Enneagram-based                 │
│  □ StrengthsFinder-based         □ Other: [_______________]        │
│                                                                     │
│  Why we ask: ReGenesis learns your approach and incorporates       │
│  these frameworks into suggestions and session notes.              │
│                                                                     │
│  [← Back]  [Continue →]                                             │
└────────────────────────────────────────────────────────────────────┘
```

### Step 4: Connect Your Tools
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 4 of 7: Connect Your Tools                        [●●●○○○○]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ReGenesis works with the tools you already use.                    │
│  Connect now or skip and connect later in Settings.                 │
│                                                                     │
│  VIDEO CONFERENCING (how ReGenesis gets transcripts)                │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐       │
│  │     ZOOM       │  │  GOOGLE MEET   │  │   MS TEAMS     │       │
│  │  [Connect ✓]   │  │   [Connect]    │  │   [Connect]    │       │
│  └────────────────┘  └────────────────┘  └────────────────┘       │
│                                                                     │
│  CALENDAR (how ReGenesis knows when sessions happen)                │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐       │
│  │ GOOGLE CAL     │  │   OUTLOOK      │  │  APPLE CAL     │       │
│  │  [Connect ✓]   │  │   [Connect]    │  │   [Connect]    │       │
│  └────────────────┘  └────────────────┘  └────────────────┘       │
│                                                                     │
│  EMAIL (how ReGenesis sends session notes)                          │
│  ┌────────────────┐  ┌────────────────┐                            │
│  │     GMAIL      │  │   OUTLOOK      │                            │
│  │  [Connect ✓]   │  │   [Connect]    │                            │
│  └────────────────┘  └────────────────┘                            │
│                                                                     │
│  TRANSCRIPTION (if not using Zoom/Meet built-in)                    │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐       │
│  │  FIREFLIES     │  │    OTTER       │  │    FATHOM      │       │
│  │   [Connect]    │  │   [Connect]    │  │   [Connect]    │       │
│  └────────────────┘  └────────────────┘  └────────────────┘       │
│                                                                     │
│  [← Back]  [Skip for now]  [Continue →]                             │
└────────────────────────────────────────────────────────────────────┘
```

### Step 5: Voice Profile Setup
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 5 of 7: Teach ReGenesis Your Voice                [●●●●○○○]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ReGenesis writes session notes in YOUR voice, not generic AI.      │
│  Help us learn how you communicate.                                 │
│                                                                     │
│  UPLOAD WRITING SAMPLES (at least 3 recommended)                    │
│                                                                     │
│  Best samples include:                                              │
│  • Past session notes you've written                                │
│  • Professional emails to clients                                   │
│  • Blog posts or articles                                           │
│  • Casual messages that show your personality                       │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                                                             │    │
│  │              [Drag files here or click to upload]           │    │
│  │                                                             │    │
│  │  Accepted: .docx, .txt, .pdf, .eml, or paste text below     │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  Or paste sample text:                                              │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                                                             │    │
│  │                                                             │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  Uploaded: 2 of 3+ recommended                                      │
│  • session_notes_marcus.docx ✓                                      │
│  • email_to_sarah.txt ✓                                             │
│                                                                     │
│  [← Back]  [Skip for now]  [Continue →]                             │
└────────────────────────────────────────────────────────────────────┘
```

### Step 6: Preferences
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 6 of 7: Your Preferences                          [●●●●●○○]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  When should ReGenesis deliver your T-15 prep?                      │
│  ○ 15 minutes before session (default)                             │
│  ○ 30 minutes before                                               │
│  ○ 1 hour before                                                   │
│  ○ Custom: [___] minutes                                           │
│                                                                     │
│  How should ReGenesis handle session notes?                         │
│  ○ Auto-draft, I'll review and send manually (default)             │
│  ○ Auto-draft and send after my approval                           │
│  ○ Auto-draft and auto-send (I trust ReGenesis)                    │
│                                                                     │
│  Notification preferences:                                          │
│  □ Email   □ Browser notification   □ SMS (requires phone)         │
│                                                                     │
│  Do Not Disturb hours:                                              │
│  [___] PM to [___] AM                                              │
│                                                                     │
│  [← Back]  [Continue →]                                             │
└────────────────────────────────────────────────────────────────────┘
```

### Step 7: Add First Client
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 7 of 7: Add Your First Client                     [●●●●●●○]  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Let's set up your first client so you can see ReGenesis in action. │
│                                                                     │
│  Client Name: [_______________]                                     │
│  Client Email: [_______________]                                    │
│                                                                     │
│  What are they working on? (brief description)                      │
│  [____________________________________________________]            │
│                                                                     │
│  Would you like to invite them to ReGenesis?                        │
│  ○ Yes, send them an invitation to join                            │
│  ○ Not yet, I'll invite them later                                 │
│                                                                     │
│  Have an existing intake form or notes?                             │
│  [Upload existing documents about this client]                      │
│                                                                     │
│  [← Back]  [Skip for now]  [Complete Setup →]                       │
└────────────────────────────────────────────────────────────────────┘
```

### Step 8: Setup Complete!
```
┌────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                     🎉 You're All Set!                              │
│                                                                     │
│  ReGenesis is ready to support your coaching practice.              │
│                                                                     │
│  What happens next:                                                 │
│                                                                     │
│  ✓ When your next session ends, ReGenesis will auto-draft notes    │
│  ✓ 15 minutes before sessions, you'll get a T-15 prep              │
│  ✓ Your daily dashboard shows what needs your attention            │
│                                                                     │
│  Quick start tips:                                                  │
│  • Install the Chrome extension for the best experience            │
│  • Try asking ReGenesis: "What's my day look like?"                │
│  • Review your first auto-drafted notes and give feedback          │
│                                                                     │
│  ┌─────────────────────────────────────────┐                       │
│  │     [Install Chrome Extension]          │                       │
│  │     (Recommended for best experience)   │                       │
│  └─────────────────────────────────────────┘                       │
│                                                                     │
│  [Go to Dashboard →]                                                │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## 3.4 Coachee Onboarding Flow (New)

**Trigger:** Coachee receives invitation email from coach and clicks link, OR selects "I'm being coached" on user type selection

### Step 1: Welcome & Coach Connection
```
┌────────────────────────────────────────────────────────────────────┐
│  Welcome to ReGenesis                                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  [Coach Photo]                                                      │
│                                                                     │
│  Jesse Torrence has invited you to join ReGenesis!                  │
│                                                                     │
│  ReGenesis is an AI companion that supports your coaching journey:  │
│  • Remember everything from your sessions                           │
│  • Available 24/7 to help you process challenges                    │
│  • Track your progress on goals and commitments                     │
│  • Prepare you for your next session                               │
│                                                                     │
│  Your privacy is protected by design.                               │
│  [Learn more about privacy →]                                       │
│                                                                     │
│  [Accept Invitation →]                                              │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Step 2: Privacy Preferences (3 Data Tiers)
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 2 of 5: Your Privacy Preferences                  [●○○○○]    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  You control what ReGenesis shares with your coach.                 │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────┐     │
│  │  TIER 1: PRIVATE (You + ReGenesis only)                   │     │
│  │                                                            │     │
│  │  Your deepest reflections. Things you're not ready        │     │
│  │  to share with anyone. Your coach CANNOT see this.        │     │
│  │                                                            │     │
│  │  Examples: Personal journal entries, sensitive goals,      │     │
│  │  things you want to process privately first.              │     │
│  └───────────────────────────────────────────────────────────┘     │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────┐     │
│  │  TIER 2: COACH-SHARED (You + Coach + ReGenesis)           │     │
│  │                                                            │     │
│  │  Information you're working on with your coach.           │     │
│  │  Your coach sees this. Your employer CANNOT.              │     │
│  │                                                            │     │
│  │  Examples: Session notes, goals, commitments,             │     │
│  │  progress updates, conversations about your work.         │     │
│  └───────────────────────────────────────────────────────────┘     │
│                                                                     │
│  ┌───────────────────────────────────────────────────────────┐     │
│  │  TIER 3: COMPANY-VISIBLE (Anonymized aggregate only)      │     │
│  │                                                            │     │
│  │  Your employer only sees that coaching is happening       │     │
│  │  and high-level engagement metrics. They NEVER see        │     │
│  │  your personal content, goals, or session details.        │     │
│  │                                                            │     │
│  │  This is architectural, not just a policy.                │     │
│  └───────────────────────────────────────────────────────────┘     │
│                                                                     │
│  [I understand my privacy options →]                                │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Step 3: Data Retention Preferences
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 3 of 5: Data Retention                            [●●○○○]    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  How long would you like us to keep your data?                      │
│                                                                     │
│  ○ 1 year of inactivity → auto-delete                              │
│  ○ 3 years of inactivity → auto-delete                             │
│  ● 7 years (default) — follows therapy best practices              │
│  ○ Indefinitely (until I manually delete)                          │
│  ○ Designate a trusted person who can access/delete                │
│                                                                     │
│  You can change this anytime in Settings.                           │
│  When you delete data, it's gone forever — not archived.            │
│                                                                     │
│  [← Back]  [Continue →]                                             │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Step 4: Notification Preferences
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 4 of 5: How Should ReGenesis Reach You?           [●●●○○]    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ReGenesis can check in with you between sessions.                  │
│  Choose how you'd like to be contacted:                             │
│                                                                     │
│  Communication channels:                                            │
│  □ Email: jesse@example.com                                         │
│  □ Text/SMS: [Add phone number]                                     │
│  □ App notifications (when you install the mobile app)              │
│                                                                     │
│  Check-in frequency:                                                │
│  ○ Daily gentle nudges                                             │
│  ○ A few times per week                                            │
│  ○ Only when I reach out                                           │
│                                                                     │
│  Best times to reach you:                                           │
│  □ Morning (6am-12pm)                                              │
│  □ Afternoon (12pm-6pm)                                            │
│  □ Evening (6pm-10pm)                                              │
│  □ Anytime                                                         │
│                                                                     │
│  [← Back]  [Continue →]                                             │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Step 5: Complete!
```
┌────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                     🎉 Welcome to ReGenesis!                        │
│                                                                     │
│  You're now connected to your coaching journey.                     │
│                                                                     │
│  What you can do:                                                   │
│                                                                     │
│  • Chat with ReGenesis anytime — it knows your coaching context    │
│  • Review notes from your sessions with [Coach Name]               │
│  • Track your commitments and celebrate wins                        │
│  • Reflect and journal privately (Tier 1)                          │
│  • Prepare for your next session                                   │
│                                                                     │
│  Your first session notes will appear after your next meeting       │
│  with [Coach Name].                                                 │
│                                                                     │
│  ┌─────────────────────────────────────────┐                       │
│  │     [Download Mobile App]               │                       │
│  │     24/7 companion in your pocket       │                       │
│  └─────────────────────────────────────────┘                       │
│                                                                     │
│  [Start chatting with ReGenesis →]                                  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## 3.5 Corporate Admin Onboarding Flow (New)

**Trigger:** Admin selects "I'm a Program Admin" on user type selection

### Step 1: Organization Info
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 1 of 4: Your Organization                         [○○○○]     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Organization Name: [_______________]                               │
│  Your Name: [_______________]                                       │
│  Your Role: [_______________]                                       │
│  Email: [_______________]                                           │
│                                                                     │
│  How many coachees will be in your program?                         │
│  ○ 1-10        ○ 11-50                                             │
│  ○ 51-200      ○ 200+                                              │
│                                                                     │
│  Will you be using internal coaches, external coaches, or both?     │
│  ○ Internal only                                                   │
│  ○ External only                                                   │
│  ○ Both internal and external                                      │
│                                                                     │
│  [Continue →]                                                       │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Step 2: Privacy Architecture Explanation
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 2 of 4: Privacy by Design                         [●○○○]     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Important: ReGenesis protects coachee data by architecture.        │
│                                                                     │
│  WHAT YOU WILL SEE:                                                 │
│  ✓ Aggregate engagement metrics                                    │
│  ✓ Program-level ROI indicators                                    │
│  ✓ Coach utilization rates                                         │
│  ✓ High-level theme distribution                                   │
│  ✓ Coachee satisfaction scores                                     │
│                                                                     │
│  WHAT YOU WILL NEVER SEE:                                           │
│  ✗ Individual session content                                      │
│  ✗ Personal goals or reflections                                   │
│  ✗ Specific conversation topics                                    │
│  ✗ Individual coachee progress details                             │
│                                                                     │
│  This is architectural — you don't have the encryption keys.        │
│  This protects your organization legally while ensuring coachees    │
│  can be fully honest in their coaching.                             │
│                                                                     │
│  [I understand →]                                                   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Step 3: Invite Coaches
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 3 of 4: Add Your Coaches                          [●●○○]     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Invite coaches to join your ReGenesis program.                     │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Coach Email                           Type                │    │
│  │  [_________________________]           [Internal ▼]        │    │
│  │                                                             │    │
│  │  [+ Add another coach]                                      │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  Or upload a CSV:                                                   │
│  [Upload coach list]                                                │
│                                                                     │
│  [← Back]  [Skip for now]  [Continue →]                             │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Step 4: Dashboard Setup
```
┌────────────────────────────────────────────────────────────────────┐
│  Step 4 of 4: Your Dashboard                            [●●●○]     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Which metrics matter most to you?                                  │
│  (Select up to 5 for your dashboard overview)                       │
│                                                                     │
│  □ Active coachees / Total seats                                   │
│  □ Average engagement rate                                         │
│  □ Sessions completed this month                                   │
│  □ Coach utilization rate                                          │
│  □ Goal completion rate (anonymized)                               │
│  □ Theme distribution (what people are working on)                 │
│  □ Coachee satisfaction scores                                     │
│  □ Notes delivery time (coach efficiency)                          │
│  □ Session punctuality                                             │
│  □ Retention rate                                                  │
│                                                                     │
│  How often would you like summary reports?                          │
│  ○ Weekly    ○ Bi-weekly    ○ Monthly    ○ Quarterly               │
│                                                                     │
│  [← Back]  [Complete Setup →]                                       │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

# 4. CURRENT PAGES AUDIT

## What Exists Now (In Wireframe)

| Page | Status | Notes |
|------|--------|-------|
| **Dashboard** | ✅ Exists | Needs updates (see below) |
| **Clients** | ✅ Exists | Needs updates (see below) |
| **Schedule** | ✅ Exists | Mostly good, minor updates |
| **Resource Library** | ✅ Exists | Needs per-client filtering |
| **AI Companion (Sage)** | ✅ Exists | Rename to ReGenesis |
| **Business Management** | ✅ Exists | Good |
| **Settings** | ✅ Exists | Needs expansion |
| **T-15 Prep Full Page** | ✅ Exists | Needs updates |
| **Session Notes Editor** | ✅ Exists | Major updates needed |

## What's Missing

| Page | Priority | Notes |
|------|----------|-------|
| **Landing Page** | P0 | First encounter |
| **User Type Selection** | P0 | Forking path |
| **Coach Onboarding** | P0 | 7-step wizard |
| **Coachee Onboarding** | P0 | 5-step wizard |
| **Admin Onboarding** | P1 | 4-step wizard |
| **Coachee Dashboard** | P0 | Their main view |
| **Coachee 24/7 Companion** | P0 | Chat interface |
| **Coachee Progress Page** | P1 | Their progress tracking |
| **Coachee Settings** | P1 | Privacy controls |
| **Admin Dashboard** | P1 | Aggregate metrics |
| **Admin Seat Management** | P1 | User management |

---

# 5. MISSING PAGES & FEATURES

## 5.1 Coachee Experience (Entire New Section)

### Coachee Dashboard
```
┌────────────────────────────────────────────────────────────────────┐
│  ReGenesis                                         [Settings] 👤   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Good morning, Sarah!                                               │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  YOUR NEXT SESSION                                          │    │
│  │                                                             │    │
│  │  Tomorrow at 2:00 PM with Jesse Torrence                   │    │
│  │                                                             │    │
│  │  [Prepare for Session]  [Reschedule]                       │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  YOUR COMMITMENTS                                           │    │
│  │                                                             │    │
│  │  ☐ Have boundary conversation with boss — Due: Tomorrow    │    │
│  │  ☐ Meditate 3x this week — Progress: 1/3                   │    │
│  │  ✓ Read Chapter 3 of Crucial Conversations — Completed     │    │
│  │                                                             │    │
│  │  [View all commitments]                                    │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  RECENT SESSION NOTES                                       │    │
│  │                                                             │    │
│  │  Session 12 — Jan 15, 2026                                 │    │
│  │  Focus: Leadership presence and promotion readiness         │    │
│  │  [Review notes →]                                          │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  CHAT WITH REGENESIS                                        │    │
│  │                                                             │    │
│  │  [Message ReGenesis...]                                    │    │
│  │                                                             │    │
│  │  Quick prompts:                                            │    │
│  │  • "I want to process a difficult conversation"            │    │
│  │  • "Help me prepare for tomorrow's session"                │    │
│  │  • "I need to vent about something"                        │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Coachee 24/7 Companion Chat
```
┌────────────────────────────────────────────────────────────────────┐
│  Chat with ReGenesis                                 [← Back]      │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │                                                             │    │
│  │  ReGenesis: Hey Sarah. How are you doing today?            │    │
│  │                                                             │    │
│  │  You: I had a really frustrating meeting with my boss.     │    │
│  │       He took credit for my work again.                    │    │
│  │                                                             │    │
│  │  ReGenesis: That sounds really frustrating. You've         │    │
│  │  mentioned feeling invisible at work before — this feels   │    │
│  │  connected to that pattern.                                │    │
│  │                                                             │    │
│  │  What's coming up for you right now? What do you notice    │    │
│  │  in your body?                                             │    │
│  │                                                             │    │
│  │  You: I feel angry. Tight in my chest. Like why do I       │    │
│  │       even bother.                                         │    │
│  │                                                             │    │
│  │  ReGenesis: I hear that anger. It makes sense. The         │    │
│  │  pattern of not being seen, not being credited — it's      │    │
│  │  exhausting.                                               │    │
│  │                                                             │    │
│  │  Would you like to:                                        │    │
│  │  • Keep processing this feeling                            │    │
│  │  • Think about what you want to do about it                │    │
│  │  • Role-play a conversation with your boss                 │    │
│  │                                                             │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  Privacy: This conversation is [Tier 2: Coach-Shared ▼]            │
│           Your coach will see a summary of this conversation.      │
│           [Change to Tier 1: Private]                              │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  [Type your message...]                           [Send]   │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Coachee Progress Page
```
┌────────────────────────────────────────────────────────────────────┐
│  Your Progress                                      [← Back]       │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📈 YOUR JOURNEY                                                    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  COMMITMENT COMPLETION                                      │    │
│  │                                                             │    │
│  │  This month: ████████░░ 78% (7/9)                          │    │
│  │  Last month: ██████░░░░ 62% (5/8)                          │    │
│  │  Trend: ↗️ Improving                                        │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  KEY THEMES OVER TIME                                       │    │
│  │                                                             │    │
│  │  ├── Leadership presence                                   │    │
│  │  │   Session 1-8: Major focus                              │    │
│  │  │   Status: ✅ Resolved                                   │    │
│  │  │                                                         │    │
│  │  ├── Work-life balance                                     │    │
│  │  │   Session 4-present: Ongoing                            │    │
│  │  │   Status: 🔄 In progress                                │    │
│  │  │                                                         │    │
│  │  └── Relationship with father                              │    │
│  │      Session 12-present: Emerging                          │    │
│  │      Status: 🌱 New                                        │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  BREAKTHROUGHS                                              │    │
│  │                                                             │    │
│  │  ⭐ Session 5: Named fear of success                       │    │
│  │  ⭐ Session 12: First expressed anger directly             │    │
│  │  ⭐ Session 18: Set first boundary with boss               │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  [View full progress report]  [Export PDF]                          │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## 5.2 Corporate Admin Dashboard (New)

```
┌────────────────────────────────────────────────────────────────────┐
│  ReGenesis Admin                      [Settings] [Manage Seats] 👤 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  📊 COACHING PROGRAM DASHBOARD                                      │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │  47 / 50     │  │    87%       │  │    142       │              │
│  │  Active      │  │  Engagement  │  │  Sessions    │              │
│  │  Coachees    │  │  Rate        │  │  This Month  │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  ROI INDICATORS (Anonymized)                                │    │
│  │                                                             │    │
│  │  Goal completion rate: 73%                                  │    │
│  │  Engagement trend: ↗️ +12% vs. last quarter                 │    │
│  │  Theme distribution:                                        │    │
│  │    Leadership 34% | Communication 28% | Work-life 21%       │    │
│  │  Coachee satisfaction: ⭐⭐⭐⭐⭐ 4.7/5.0                    │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  COACH PERFORMANCE                                          │    │
│  │                                                             │    │
│  │  Average notes delivery time: 4.2 min                       │    │
│  │  Session punctuality: 98%                                   │    │
│  │  Coachee retention: 95%                                     │    │
│  │  Coach utilization: 94%                                     │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  [Export Report]  [Schedule Monthly Summary]  [Manage Seats]        │
│                                                                     │
│  ⚠️ Note: You cannot see individual session content or personal    │
│     goals. This is architectural, protecting coachee privacy.      │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

# 6. SESSION NOTES UPDATES

## Current State
The Session Notes Editor has 4 sections:
1. Session Summary
2. Key Insights & Breakthroughs
3. Commitments & Next Steps
4. Resources Shared
5. Coach's Private Notes

## Required: 6-Section Format

Update to match V4 spec:

```
┌────────────────────────────────────────────────────────────────────┐
│  Session 12 Notes — Marcus Chen            [Save Draft] [Send]     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  AI COMMAND BAR (NEW)                                               │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Tell ReGenesis how to edit: "make warmer" "shorten" ...   │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ────────────────────────────────────────────────────────────────  │
│                                                                     │
│  1. SESSION RECAP                                                   │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Chronological flow of what was discussed. Core ideas,      │    │
│  │  breakthroughs, key phrases, verbatim quotes.               │    │
│  │                                                             │    │
│  │  [Editable textarea with accordion drill-down]              │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  2. OBSERVATIONS, INSIGHTS & ANALYSIS                               │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  What ReGenesis noticed — patterns, breakthroughs,          │    │
│  │  psychological framing, shadow, becoming.                   │    │
│  │                                                             │    │
│  │  [Editable textarea]                                        │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  3. INQUIRIES FOR GROWTH (≤5 questions)                             │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Piercing questions for reflection. Not generic.            │    │
│  │                                                             │    │
│  │  1. [Editable]                                              │    │
│  │  2. [Editable]                                              │    │
│  │  3. [Editable]                                              │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  4. INVITATIONS TO ACTION                                           │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Behavioral commitments with specificity.                   │    │
│  │  Small but powerful. Precise parameters.                    │    │
│  │                                                             │    │
│  │  [Editable textarea]                                        │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  5. RESOURCES / TOOLS / FOLLOW-UP                                   │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Relevant materials, frameworks, guides.                    │    │
│  │  Hyperlinked to Resource Library.                           │    │
│  │                                                             │    │
│  │  [Editable with hyperlink support]                          │    │
│  │                                                             │    │
│  │  ANCILLARY DOCUMENTS (auto-generated)                       │    │
│  │  ☐ Delegation Framework (AI-drafted)  [Preview] [Include]   │    │
│  │  ☐ NVC Conversation Script            [Preview] [Include]   │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  6. NEXT MEETING & FUTURE FOCUS                                     │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Next session: [Date/Time]                                  │    │
│  │  Potential focus areas: [Editable]                          │    │
│  │  Topics to continue: [Editable]                             │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
│  ────────────────────────────────────────────────────────────────  │
│                                                                     │
│  COACH'S PRIVATE NOTES (not sent to client)                         │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  [Editable textarea]                                        │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

# 7. NESTED/ACCORDION ARCHITECTURE

## The Principle

ALL data displays should support drill-down from summary to source:

```
High-Level Summary
└── Click → Section Headings
    └── Click → Key Points
        └── Click → Full Detail
            └── Click → Exact Quote/Timestamp
                └── Click → Jump to Video/Audio Recording
```

## Implementation Examples

### In Session Notes:
```
Session Recap
└── "Discussed delegation challenges"
    └── "Struggled with letting go of control"
        └── "I just feel like if I don't do it myself, it won't be done right"
            └── [23:45] Jump to recording
```

### In T-15 Prep — Between-Session Intelligence:
```
AI Companion Conversations (3 since last session)
└── Jan 14: Promotion anxiety (20 min)
    └── Key themes: Fear of visibility, imposter feelings
        └── Emotional moments: First time expressed anger
            └── Full conversation transcript
```

### In Pattern Recognition:
```
💡 Pattern Detected: "Invisible" theme

Summary: Sarah has mentioned feeling "invisible" 7 times...

Evidence (click to expand):
├── Session 3 (Oct 15): "I feel like no one sees my contributions"
│   └── [Jump to transcript: 23:45]
├── Session 5 (Oct 29): "It's like I'm invisible in meetings"
│   └── [Jump to transcript: 12:30]
...
```

### Technical Implementation:
- Use collapsible components (e.g., details/summary or React accordion)
- Store timestamps with content chunks
- Link to video player with seek capability
- Progressive loading (don't load all levels at once)

---

# 8. AI COMMAND BAR

## The Feature

A text input that allows natural language editing of session notes:

```
┌────────────────────────────────────────────────────────────────────┐
│ 🤖 Tell ReGenesis how to edit: [make warmer...              ] [Go] │
└────────────────────────────────────────────────────────────────────┘
```

## Supported Commands

| Command | Action |
|---------|--------|
| "make warmer" | Adjusts tone to be more empathetic |
| "more direct" | Tightens language, removes hedging |
| "softer" | Gentler language |
| "add resource about boundaries" | Inserts relevant resource with context |
| "remove the part about his father" | Deletes specified content |
| "shorten the action items" | Condenses section |
| "expand observations" | Adds more detail |
| "this doesn't sound like me" | Regenerates in coach's voice |
| "change 'you should' to 'you might consider'" | Direct text replacement |

## UI Behavior:
1. Coach types command
2. ReGenesis shows preview of changes (diff view)
3. Coach can [Accept] or [Reject] changes
4. Changes applied if accepted

---

# 9. MOBILE APP WIREFRAMES

## 9.1 Coach Mobile App

```
┌────────────────────────────────┐
│  ReGenesis          ⚙️        │
├────────────────────────────────┤
│                                │
│  🎯 FOCUS NOW                  │
│                                │
│  Marcus Chen at 2pm            │
│  Promotion anxiety,            │
│  missed commitment 3x          │
│                                │
│  [Open T-15 Prep]              │
│                                │
├────────────────────────────────┤
│                                │
│  TODAY'S SESSIONS              │
│                                │
│  2:00 PM - Marcus Chen         │
│  4:30 PM - Sarah Williams      │
│                                │
├────────────────────────────────┤
│                                │
│  [Message ReGenesis...    ]    │
│                                │
│  "Log a thought about Sarah"   │
│  "What's tomorrow look like?"  │
│  "Remind me to pick up gift"   │
│                                │
├────────────────────────────────┤
│  🏠    👥    📅    💬    ⚙️   │
│  Home Clients Sched Chat  Set  │
└────────────────────────────────┘
```

## 9.2 Coachee Mobile App

```
┌────────────────────────────────┐
│  ReGenesis          ⚙️        │
├────────────────────────────────┤
│                                │
│  Good morning, Sarah!          │
│                                │
│  📅 NEXT SESSION               │
│  Tomorrow at 2pm with Jesse    │
│  [Prepare]                     │
│                                │
├────────────────────────────────┤
│                                │
│  ✅ YOUR COMMITMENTS           │
│                                │
│  ☐ Boundary conversation       │
│  ☐ Meditate 3x (1/3)           │
│  ✓ Read Crucial Conversations  │
│                                │
├────────────────────────────────┤
│                                │
│  💬 CHAT WITH REGENESIS        │
│                                │
│  [What's on your mind?...]     │
│                                │
├────────────────────────────────┤
│  🏠    📝    📈    💬    ⚙️   │
│  Home Notes Progress Chat Set  │
└────────────────────────────────┘
```

---

# 10. CORPORATE ADMIN DASHBOARD

(See section 5.2 above for full wireframe)

Key features:
- Aggregate metrics only
- No access to individual content
- Seat management
- Report export
- Clear privacy notice

---

# 11. BRAND & DESIGN UPDATES

## Color Palette Changes

**Current:** Dark gray header, teal/blue/purple gradients
**Updated:**
- Primary: Deep teal (#0D9488)
- Accent: Purple (#7C3AED)
- Warm touches: Gold/amber (#F59E0B)
- Natural greens: (#10B981)
- Background: Warm whites, not pure white (#FAFAF9)

## Typography

Keep Inter or similar clean sans-serif, but consider:
- Slightly warmer weights
- More generous line-height
- More breathing room

## Overall Feel

- Less "tech startup," more "wise advisor"
- Natural, organic textures where appropriate
- Warm, inviting, calming
- NOT cold, clinical, or robotic

---

# 12. IMPLEMENTATION PRIORITY

## Phase 1: Critical Path (Do First)
1. ✅ Rename Sage → ReGenesis everywhere
2. ✅ Landing page
3. ✅ User type selection
4. ✅ Coach onboarding flow (7 steps)
5. ✅ Update Session Notes to 6-section format
6. ✅ Add AI Command Bar to Session Notes Editor

## Phase 2: Coachee Experience
7. Coachee onboarding flow
8. Coachee dashboard
9. Coachee 24/7 companion chat
10. Coachee progress page
11. Full companion conversation log on client page (coach view)

## Phase 3: Corporate & Polish
12. Corporate admin onboarding
13. Corporate admin dashboard
14. Nested/accordion architecture throughout
15. Communication transparency indicators
16. Brand/design refresh

## Phase 4: Mobile Wireframes
17. Coach mobile app wireframes
18. Coachee mobile app wireframes
19. Admin mobile app wireframes

---

# 13. TECHNICAL NOTES

## File Structure Suggestions

```
src/
├── App.jsx (main router)
├── pages/
│   ├── landing/
│   │   └── LandingPage.jsx
│   ├── onboarding/
│   │   ├── UserTypeSelection.jsx
│   │   ├── coach/
│   │   │   ├── CoachOnboarding.jsx
│   │   │   └── steps/
│   │   │       ├── BasicInfo.jsx
│   │   │       ├── Credentials.jsx
│   │   │       ├── Methodologies.jsx
│   │   │       ├── ConnectTools.jsx
│   │   │       ├── VoiceProfile.jsx
│   │   │       ├── Preferences.jsx
│   │   │       ├── FirstClient.jsx
│   │   │       └── Complete.jsx
│   │   ├── coachee/
│   │   │   └── CoacheeOnboarding.jsx
│   │   └── admin/
│   │       └── AdminOnboarding.jsx
│   ├── coach/
│   │   ├── Dashboard.jsx
│   │   ├── Clients.jsx
│   │   ├── Schedule.jsx
│   │   ├── SessionNotesEditor.jsx
│   │   ├── T15Prep.jsx
│   │   └── Settings.jsx
│   ├── coachee/
│   │   ├── CoacheeDashboard.jsx
│   │   ├── CompanionChat.jsx
│   │   ├── Progress.jsx
│   │   └── CoacheeSettings.jsx
│   └── admin/
│       ├── AdminDashboard.jsx
│       └── SeatManagement.jsx
├── components/
│   ├── common/
│   │   ├── Accordion.jsx
│   │   ├── AICommandBar.jsx
│   │   └── TransparencyIndicator.jsx
│   └── ...
└── data/
    └── mockData.js
```

## Key Components to Build

1. **Accordion/Nested Component** — Reusable drill-down UI
2. **AICommandBar** — Natural language editing
3. **TransparencyIndicator** — 👤 / 🤖✓ / 🤖 badges
4. **OnboardingWizard** — Multi-step form framework
5. **PrivacyTierSelector** — Tier 1/2/3 UI

## Routing

Consider React Router with:
- `/` — Landing page
- `/get-started` — User type selection
- `/onboard/coach` — Coach onboarding
- `/onboard/coachee` — Coachee onboarding
- `/onboard/admin` — Admin onboarding
- `/coach/*` — Coach app routes
- `/coachee/*` — Coachee app routes
- `/admin/*` — Admin app routes

---

# APPENDIX: CHECKLIST

## Branding
- [ ] Replace "Sage" with "ReGenesis" everywhere
- [ ] Update logo to ouroboros
- [ ] Apply warmer color palette
- [ ] Update brand voice/tone

## Landing & Onboarding
- [ ] Landing page
- [ ] User type selection
- [ ] Coach onboarding (7 steps)
- [ ] Coachee onboarding (5 steps)
- [ ] Admin onboarding (4 steps)

## Coach Experience
- [ ] 6-section session notes
- [ ] AI command bar
- [ ] Nested/accordion in all data displays
- [ ] Communication transparency indicators
- [ ] Full companion conversation log on client page
- [ ] Client list page with status indicators
- [ ] Coach non-coaching to-dos on dashboard

## Coachee Experience
- [ ] Coachee dashboard
- [ ] 24/7 companion chat
- [ ] Progress tracking page
- [ ] Privacy tier controls
- [ ] Redaction capability

## Corporate Admin
- [ ] Admin dashboard
- [ ] Seat management
- [ ] Report export
- [ ] Privacy notice

## Mobile
- [ ] Coach mobile wireframe
- [ ] Coachee mobile wireframe
- [ ] Admin mobile wireframe

---

*Document created: January 2026*
*Reference: REGENESIS-COMPLETE-MASTER-DOC-V4.md*
*For use by: Development team (Zeel) in new coding thread*

---

**Ready for handoff to coding thread.**

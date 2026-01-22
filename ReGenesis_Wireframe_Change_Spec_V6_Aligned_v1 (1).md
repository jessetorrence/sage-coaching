# ReGenesis Wireframe — V6‑Aligned Change Spec (Hyper‑Detailed) v1.0
*Updated: 2026‑01‑21 (America/Chicago)*

## Canonical source of truth
- **docs/REGENESIS-COMPLETE-MASTER-DOC-V6.md** (treat as authoritative for naming, IA, demo spine, trust/privacy, pricing, and the foundational philosophy)
- Current implementation baseline: **src/JTCoachingAppShellWireframe.jsx** (wireframe shell)

> Note: Live site review via Vercel preview is currently not accessible from my web viewer (“cache miss”), so this spec is derived from V6 + the current wireframe code.

---

# 0) Locked foundations (must remain true in UI)

## 0.1 The single sentence that holds it all (LOCKED)
**“ReGenesis exists to hold memory, reveal patterns, and generate insight—so human presence, compassion, and discernment can lead transformation.”**

## 0.2 Companion principle (LOCKED)
**“Human intuition and discernment are to be strengthened—not replaced.”**

## 0.3 Core mission phrase (LOCKED)
**“Preserve and deepen what is sacred in human-to-human care—while radically expanding access to care itself.”**  
And: **“Not instead of love, not instead of wisdom — in service of them.”**

## 0.4 The three primary human capacities we protect & amplify (LOCKED)
UI and feature framing should consistently reinforce:
1) **Human Presence** (attunement, being-with, groundedness)
2) **Compassion** (non-shame, tenderness + accountability)
3) **Discernment** (wisdom; not “analysis theater”)

## 0.5 Product ethos non‑negotiables (LOCKED)
Every shipped UI surface should pass:
- increases presence (not fragmentation)
- reduces shame (not subtle performance pressure)
- respects autonomy & consent
- leaves room for emergence/mystery
- helps humans be **more human**, not more machine-like

## 0.6 Agentic design principle (LOCKED)
- **Pages/screens:** DISPLAY / ORIENT / INFORM (scannable, drill-down, “truth-linked” to sources)
- **The agent (Sage):** DOING / ACTING / EXECUTING (drafting, scheduling, invoicing, sending—always with approval for outbound)

> Naming note (V6): product = **ReGenesis**; agent may be referred to as **Sage**. Implement both as constants (PRODUCT_NAME, AGENT_NAME) so you can rename later without sweeping edits.

---

# 1) Global UI requirements (apply everywhere)

## 1.1 Trust‑by‑architecture must be visible (LOCKED)
Make trust legible via UI, not promises:
- **Purpose + visibility badges** (e.g., “Client‑private”, “Shared summary”, “Coach approval required”)
- **Consent defaults** (private-by-default for coachee spaces; explicit share toggles)
- **Deletion = permanent** (3‑step “Evaporation Promise” confirmations)

## 1.2 “Auto vs Ask” must be reflected in UX (LOCKED)
Coach-facing agent behavior:
- Auto: draft T‑15, draft notes, pull transcript, flag patterns, draft resources, track commitments
- Always ask: send email/text, bill/charge, delete data, change privacy settings, share to new parties, modify notes after sent

Coachee-facing autonomy tiers (LOCKED):
- Tier 1: Full autonomy (low stakes)
- Tier 2: Autonomous + coach visibility summary
- Tier 3: Coach approval required
- Tier 4: Immediate escalation (safety/crisis)
- Tier 5: Hard boundaries (never)

> UI implication: anywhere an action could be “ask required”, show a small badge like “Approval required” and simulate the “Approve / Edit / Cancel” step.

## 1.3 Sample data realism requirement (LOCKED)
- Demo should *ideally* support 1–3 real clients w/ permission, using **automatic redaction / pseudonymization**.
- For the wireframe now: add a visible “Demo mode” toggle and obvious “sample data” labeling.  
No realistic PII shown by default.

---

# 2) IA + navigation (V6‑aligned)

## 2.1 Marketing top nav (LOCKED direction)
Keep minimal: **Home / Product / Pricing / Security / Login**

## 2.2 Logged‑in coach nav (keep current, but align labels)
Current wireframe has: Dashboard, Clients, Schedule, Resource Library, Business Management, Settings (+ agent button).
Keep this set unless V6 explicitly changes it; update copy/tone and add the command bar overlay (below).

## 2.3 Client page tab ordering (LOCKED — KEY CHANGE)
Add **Overview** as the FIRST tab (new).
Then (V6 locked list = 7 tabs):
1) **Overview** *(NEW)*
2) **Journey / Goals / Experiments**
3) **Notes History**
4) **T‑15 Prep**
5) **24/7 Companion Log**
6) **Profile Details (with privacy tiers)**
7) **Resources**

> IMPORTANT: This supersedes earlier v5-era “6-tab” assumptions. Profile remains a dedicated tab, but must implement privacy tiers and “optional/collapsed” treatment for sensitive fields.

---

# 3) Demo spine (LOCKED) — these must be buildable in the wireframe

## 3.1 4-piece demo spine
1) Embedded “Do Anything” agent + floating command bar
2) Post‑session draft notes (“tears moment”) w/ transcript drilldown + highlight‑edit loop
3) In‑session support (“camera-line prompt zone”) with modes + paste-to-Zoom (simulated)
4) 24/7 companion between sessions, private-by-default with share toggles and coach summary in T‑15

## 3.2 Strong addition (LOCKED)
**Coach Growth Loop:** optional coaching-the-coach layer (ICF lens, patterns across sessions, blind spots)

---

# 4) Page-by-page change spec (what Claude should implement)

## 4.1 Landing / Home (LOCKED hero direction)
### Hero requirements
- Coach-centric headline direction like “An embedded coaching partner…” (exact copy can be refined, but structure is locked)
- Primary CTA: **Start guided demo / Watch demo**
- Secondary CTA: **See how it works / 92-second tour**
- Micro-proof row (small, crisp credibility)
- Then: “I see you” pain → promise → scroll sections
- Early “Trust by architecture” block in human language

### Scroll sections
Use 4 short micro‑clip cards (placeholders OK) corresponding to demo spine items.

### Fork CTAs
Under hero: “Here for your organization?” and “Here as a coaching client?”

---

## 4.2 Coach Dashboard (LOCKED principles)
- Show “whole life vision” lightly + “coaching work world at a glance”
- Avoid guilt/anxiety UX
- Implement “Needs Attention” flags (badges):
  - Needs attention
  - Payment overdue
  - Momentum risk
  - Next session upcoming
- Add “Next best action” row (1–3 items) with calm language.
- Add persistent command bar hint: “Press ⌘K to ask Sage…”

---

## 4.3 Clients list (coach view)
- Each row: badges + quick actions:
  - Open Overview
  - Open T‑15
  - Open latest draft note
  - Draft a check‑in (agent drafts; coach approves)

---

## 4.4 Client page (tabs)
### 4.4.1 Overview (NEW, first tab)
Design goals: scannable, warm, non‑clinical.
Include:
- Identity snapshot (name/role/one-line context)
- “What’s alive now” (current focus + obstacle)
- “Pattern emerging” (gentle language; never diagnostic)
- Momentum (wins + commitments)
- Right rail:
  - Next session info
  - Buttons: Open T‑15 / Open latest note / Draft check‑in / Ask agent
- Consent/trust strip: visibility badge explaining what’s private vs shared.

### 4.4.2 Journey / Goals / Experiments
Keep existing goals UI but relabel and add:
- “Experiments” framing (small commitments)
- “Momentum risk” highlight when slipping
- “Ask Sage” action: propose next experiment (draft only)

### 4.4.3 Notes History
Keep list, add:
- Filters: Draft ready / Sent / All
- Status indicators: AI drafted, coach edited, sent
- Open editor shows transparency + transcript drilldown

### 4.4.4 T‑15 Prep
Add action row:
- Generate openings
- Suggest frameworks
- Pull last commitment
- Draft check-in
Also: keep “ground yourself” but add optional 5‑minute timer.

### 4.4.5 24/7 Companion Log (privacy and tiers)
Each conversation entry must show:
- Privacy state (Tier 1 private / shared summary / shared with coach)
- Toggle controls (simulated) for share state
- Coach view: if “summary only”, show bullets not transcript

### 4.4.6 Profile Details (with privacy tiers)
Keep Profile tab, but enforce:
- “Public-ish” professional info (LinkedIn) visible
- Sensitive personal details behind “Personal details (optional)” accordion (collapsed by default)
- Apply visibility badges per section
- Add “Third-party minimization” note (don’t store excessive spouse/boss details)

### 4.4.7 Resources
- Coach-assigned resources
- “Suggested (review first)” label for AI suggestions
- No diagnostic/therapeutic claims

---

## 4.5 Notes Editor — “tears moment” (P1-critical for demo)
Must demonstrate:
- 6-section template: Recap, Insights, Inquiries (≤5), Invitations, Resources, Next steps
- Highlight-to-edit loop (simulate rewrite options)
- Transcript “Source” drawer with snippet + timestamp
- Communication transparency:
  - AI drafted on [date]
  - Edited by coach
  - Sent to client (with approval step)

---

## 4.6 In-session support (“camera-line prompt zone”)
Add a view/drawer with:
- Mode toggle: observe-only / light / help
- Quick actions: propose question, propose framework, draft snippet
- “Paste into Zoom chat” simulated approval (coach clicks Approve → “Copied” toast)

---

## 4.7 Settings / Trust surfaces (architectural trust)
Implement demo UI for:
- Privacy tiers & defaults
- Export data
- Delete data (Evaporation Promise) with 3 confirmations
- Recording retention info (2 weeks + notifications 48h/24h/1h)

---

## 4.8 Pricing page (LOCKED)
- Individual coach: $39/mo (25 active clients), annual saves 15%
- Enterprise: $9/coachee/mo, unlimited free coach seats, admin dashboard, SSO/SAML, priority support
- Lead with: “No games, no gates, no bullshit.”

---

## 4.9 Security page (V6 trust hierarchy + ZK model)
Explain in human language:
- Trust hierarchy (architecture + certification)
- Zero-knowledge / key model (diagram block)
- LLM “never send” list (credentials, CC, Tier-1 private, etc.)
- Compliance intentions (GDPR design, SOC2 first, HIPAA-ready)

---

# 5) Implementation approach (minimal-refactor friendly)

## 5.1 Preferred lightweight modularization
Add small components and constants rather than rewriting everything:
- `src/lib/regenesisV6Copy.js` (PRODUCT_NAME, AGENT_NAME, locked phrases, CTAs, trust bullets)
- `src/components/CommandBarOverlay.jsx`
- `src/components/TrustStrip.jsx`
- `src/components/VisibilityBadge.jsx`
- `src/components/TranscriptDrawer.jsx`
- `src/components/ConfirmDeleteModal.jsx` (3-step)

## 5.2 Bundled commits
Implement in bundles (see the Claude prompt file), so deploys are safe and reviewable.

---

# 6) Definition of done (QA checklist)
- Landing hero structure matches V6 (CTAs + micro-proof + early trust block).
- Command bar opens with Cmd/Ctrl+K and shows demo commands.
- Dashboard uses calm “needs attention” flags (no guilt UX).
- Client tabs reordered and includes **Overview** first; total tabs = 7.
- Companion shows privacy state + tier/share controls.
- Profile Details tab exists and enforces privacy tiers + collapsed sensitive sections.
- Notes editor has transcript drilldown + highlight-to-edit + transparency.
- Settings include 3-step delete confirmation.
- Pricing matches $39 and $9 tiers with “no gates” copy.
- Security page explains architecture + never-send rules.


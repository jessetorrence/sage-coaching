# Claude Code Prompt — ReGenesis Wireframe Updates (V6‑Aligned, Bundle‑Based)

You have local access to this repo. Treat **docs/REGENESIS-COMPLETE-MASTER-DOC-V6.md** as the ONLY source of truth.

Primary file today: `src/JTCoachingAppShellWireframe.jsx` (monolithic wireframe).
Goal: implement the V6-aligned IA, hero/demo spine, privacy architecture cues, and key demo moments **without breaking the existing shell**.

## Global rules
- Work in **bundles** (one commit per bundle).
- Prefer **minimal refactor**. You may add small components in `src/components/` and constants in `src/lib/`.
- Tailwind only. No new UI frameworks.
- Keep copy warm, non-clinical, consent-forward.
- Anything outbound (email/text/billing/delete/share) must simulate **approval required**.

## Before coding
1) Read `docs/REGENESIS-COMPLETE-MASTER-DOC-V6.md` end-to-end.
2) Scan `src/JTCoachingAppShellWireframe.jsx` to locate: Landing, Dashboard, Client detail tabs, Notes editor, Companion, Settings, Pricing/Security (if present).
3) Use `rg` to find any “Sage” strings; align naming via constants (PRODUCT_NAME vs AGENT_NAME).

---

# BUNDLE 1 — V6 constants + naming + trust primitives (P0)
**Commit message:** `P0: V6 constants + trust primitives`

### Tasks
1) Create `src/lib/regenesisV6Copy.js` exporting:
- `PRODUCT_NAME = "ReGenesis"`
- `AGENT_NAME = "Sage"` (agent name per V6; easy to change later)
- Locked phrases (single sentence, companion principle, mission phrase)
- Hero CTA labels (primary/secondary)
- Trust bullets (own data, consent-first, delete anytime, no surprises)
2) Create `src/components/TrustStrip.jsx` (compact 4-bullet strip).
3) Create `src/components/VisibilityBadge.jsx`:
- Props: `label` (e.g., "Client‑private", "Shared summary", "Approval required")
- Render as pill.
4) Replace all user-facing hardcoded names (“ReGenesis”, “Sage”) to use constants where appropriate:
- Product name in nav/headers uses PRODUCT_NAME
- Agent button/command bar uses AGENT_NAME
5) Add a small “Trust by architecture” block component or inline block on key pages (Landing, Client Overview, Companion).

### QA
- App builds (`npm run build`)
- No broken routes/state switches

---

# BUNDLE 2 — Landing hero + demo spine scaffolding (P0)
**Commit message:** `P0: V6 landing hero + demo spine scaffolding`

### Tasks
1) Update marketing top nav to: Home / Product / Pricing / Security / Login
2) Rebuild hero to V6 structure:
- headline + subheadline (coach-centric “embedded coaching partner” direction)
- Primary CTA: Start guided demo / Watch demo
- Secondary CTA: See how it works / 92-second tour
- Micro-proof row
- “Here for your organization?” + “Here as a coaching client?” fork CTAs
- TrustStrip prominent near the fold
3) Add a “Guided Demo” stepper (modal or page) with 4 steps (V6 demo spine):
- Agent + command bar
- Post-session draft notes (tears moment) w/ drilldown
- In-session support panel
- 24/7 companion privacy controls
4) Add 4 micro-clip placeholder cards in scroll sections matching the demo spine.

### QA
- CTAs open stepper
- Trust strip is visible early

---

# BUNDLE 3 — Command bar overlay (P0)
**Commit message:** `P0: command bar overlay (Cmd/Ctrl+K)`

### Tasks
1) Create `src/components/CommandBarOverlay.jsx`:
- Opens on Cmd/Ctrl+K
- Shows input + suggested commands list (from V6 examples):
  - “What’s my day look like?”
  - “Pull up Marcus’s T‑15 prep”
  - “Draft a follow-up email for Sarah…”
  - “Bill Jennifer for January”
  - “Show me Sarah’s progress”
- Selecting a command triggers a simulated “Agent working…” toast and (optionally) navigates to the relevant view (Dashboard/Client/T‑15).
2) Add a persistent “Press ⌘K to ask Sage” hint in header or dashboard.

### QA
- Keyboard shortcut works
- No navigation regressions

---

# BUNDLE 4 — Dashboard calm mission-control + needs-attention flags (P0)
**Commit message:** `P0: dashboard needs-attention flags + next best actions`

### Tasks
1) Implement “Next best action” row (1–3 items) above/beside client list.
2) Add “Needs attention” badges per client row:
- Needs attention
- Payment overdue
- Momentum risk
- Next session upcoming
3) Replace any guilt phrasing (Overdue → Needs attention; etc.).
4) Add quick actions per client row:
- Open Overview
- Open T‑15
- Open latest note
- Draft check‑in (agent drafts → approval required)

### QA
- Dashboard reads calm
- Badges render and don’t clutter

---

# BUNDLE 5 — Client tab ordering (7 tabs) + Overview tab (P0)
**Commit message:** `P0: client tabs reorder + overview tab`

### Tasks
1) Update client page tab bar to EXACTLY 7 tabs in order:
1) Overview (NEW, default)
2) Journey / Goals / Experiments
3) Notes History
4) T‑15 Prep
5) 24/7 Companion Log
6) Profile Details (with privacy tiers)
7) Resources
2) Create `src/components/ClientOverviewTab.jsx` and render as first tab:
- Identity snapshot
- What’s alive now
- Pattern emerging (gentle)
- Momentum (wins + commitments)
- Right rail: Next session + quick actions (Open T‑15, Open latest note, Draft check‑in, Ask agent)
- Visibility badges + trust copy
3) Keep existing content for Goals/Notes/T‑15/Companion/Profile/Resources but re-route into the new tabs.

### QA
- Overview tab is default
- No missing tab content

---

# BUNDLE 6 — Notes editor “tears moment” upgrades (P1)
**Commit message:** `P1: notes editor tears-moment + transcript drilldown`

### Tasks
1) Ensure notes editor reflects 6-section template:
- Recap
- Insights
- Inquiries (≤5)
- Invitations to action
- Resources
- Next steps
2) Add `src/components/TranscriptDrawer.jsx`:
- “Source” button per paragraph opens drawer with transcript snippet + timestamp (demo data ok).
3) Add highlight-to-edit loop UI:
- Choose rewrite style: softer / shorter / add evidence / give options
- Apply edited state
4) Add transparency indicators:
- AI drafted
- Coach edited
- Sent to client (requires approval click)

### QA
- Drawer opens/closes
- No layout break

---

# BUNDLE 7 — In-session support panel (P1)
**Commit message:** `P1: in-session support panel (camera-line prompt zone)`

### Tasks
1) Add an “In‑Session Support” view (drawer or page):
- Mode toggle: observe-only / light / help
- Quick actions: propose question / propose framework / draft snippet
2) Add “Paste into Zoom chat” simulated flow:
- Coach clicks Approve → toast “Copied to clipboard” (no real Zoom integration)

### QA
- Panel accessible from anywhere (button or command bar)
- Doesn’t block core nav

---

# BUNDLE 8 — Companion tiers + Profile privacy tiers + Settings delete promise + Pricing/Security (P1/P2)
**Commit message:** `P1/P2: companion tiers + trust settings + pricing/security pages`

### Tasks (Companion)
1) Companion entries show privacy state:
- Tier 1 private
- Shared summary (Tier 2)
- Shared with coach
2) Add toggle controls (simulated) for share state and redact snippet.
3) Coach view shows summary bullets when not fully shared.

### Tasks (Profile Details)
4) Keep Profile tab and enforce privacy tiers:
- “Professional” info visible
- “Personal details (optional)” accordion default closed
- VisibilityBadge labels per section

### Tasks (Settings)
5) Add a “Delete my data” flow implementing the Evaporation Promise:
- 3-step confirmations (warn → type DELETE → final confirm)
6) Add recording retention card (2 weeks + 48h/24h/1h reminders) as demo UI.

### Tasks (Pricing)
7) Pricing page:
- Individual: $39/mo, 25 clients, annual saves 15%
- Enterprise: $9/coachee/mo, coach seats free, SSO/SAML, priority support
- Lead with “No games, no gates, no bullshit.”

### Tasks (Security)
8) Security page:
- Trust hierarchy (architecture + certification)
- Zero-knowledge key model diagram block
- “Never send to LLM” list (credentials, CC, Tier-1 private, etc.)
- Compliance plan (GDPR, SOC2, HIPAA-ready)

### QA
- All pages reachable
- Build passes

---

## Final QA checklist
- Cmd/Ctrl+K command bar works.
- Landing hero matches V6 structure.
- Client tab ordering is correct (7 tabs).
- Companion privacy/tier cues visible.
- Notes editor drilldown + edit loop present.
- Delete flow has 3 confirmations.
- Pricing & Security match V6.


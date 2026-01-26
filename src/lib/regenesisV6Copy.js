/**
 * ReGenesis V6 Constants & Copy
 *
 * Centralized source of truth for product naming, locked phrases,
 * and key copy throughout the application.
 *
 * IMPORTANT: These constants allow easy renaming without sweeping edits.
 */

// =============================================================================
// NAMING
// =============================================================================

export const PRODUCT_NAME = "ReGenesis";
export const AGENT_NAME = "Sasha";

// =============================================================================
// LOCKED PHRASES (V6 Foundation)
// =============================================================================

export const LOCKED_PHRASES = {
  // The Single Sentence That Holds It All
  singleSentence: "ReGenesis exists to hold memory, reveal patterns, and generate insight—so human presence, compassion, and discernment can lead transformation.",

  // Companion Principle
  companionPrinciple: "Human intuition and discernment are to be strengthened—not replaced.",

  // Core Mission Phrase
  missionPhrase: "Preserve and deepen what is sacred in human-to-human care—while radically expanding access to care itself.",

  // Additional Mission Statement
  missionAddendum: "Not instead of love, not instead of wisdom — in service of them.",

  // Coach Reality (Pain Point)
  coachReality: "You're holding dozens of human stories in your head—trying to be fully present in-session, remember everything out-of-session, and still run a business… all while knowing the real breakthroughs often live in patterns you can't track in real time.",

  // The Promise
  coachPromise: "ReGenesis remembers the whole arc, sees patterns across time, and takes the invisible admin off your plate—so you can coach more deeply, respond faster, and keep clients moving between sessions.",
};

// =============================================================================
// HERO CTAs (Landing Page)
// =============================================================================

export const HERO_CTAS = {
  primary: {
    label: "Start Guided Demo",
    altLabel: "Watch Demo",
  },
  secondary: {
    label: "See How It Works",
    altLabel: "92-Second Tour",
  },
  forkOrg: "Here for your organization?",
  forkClient: "Here as a coaching client?",
};

// =============================================================================
// TRUST BULLETS (Architecture Trust)
// =============================================================================

export const TRUST_BULLETS = [
  {
    key: "own-data",
    title: "You own your data",
    description: "Your data belongs to you, not us. Export or delete anytime.",
  },
  {
    key: "consent-first",
    title: "Consent-first",
    description: "Private by default. You control what's shared and with whom.",
  },
  {
    key: "delete-anytime",
    title: "Delete anytime",
    description: "Permanent deletion with our Evaporation Promise. Gone means gone.",
  },
  {
    key: "no-surprises",
    title: "No surprises",
    description: "Clear visibility badges show exactly who sees what.",
  },
];

// =============================================================================
// VISIBILITY BADGE LABELS
// =============================================================================

export const VISIBILITY_LABELS = {
  clientPrivate: "Client-private",
  sharedSummary: "Shared summary",
  sharedWithCoach: "Shared with coach",
  approvalRequired: "Approval required",
  aiDrafted: "AI drafted",
  coachEdited: "Coach edited",
  sentToClient: "Sent to client",
};

// =============================================================================
// PRICING (V6 Locked)
// =============================================================================

export const PRICING = {
  individual: {
    price: 39,
    period: "month",
    clients: 25,
    annualDiscount: 15,
    tagline: "Everything included.",
  },
  teams: {
    pricePerCoachee: 9,
    period: "month",
    coachSeats: "Coach seats free",
    features: ["Unlimited coaches", "Full analytics", "Admin dashboard"],
    tagline: "For organizations investing in their people",
  },
  philosophy: "No games. No gates. No B.S.",
};

// =============================================================================
// NEEDS ATTENTION FLAGS (Dashboard)
// =============================================================================

export const ATTENTION_FLAGS = {
  needsAttention: { label: "Needs attention", color: "amber" },
  paymentOverdue: { label: "Payment overdue", color: "red" },
  momentumRisk: { label: "Momentum risk", color: "orange" },
  nextSessionUpcoming: { label: "Next session upcoming", color: "blue" },
  draftReady: { label: "Draft ready", color: "green" },
  commitmentMissed: { label: "Commitment missed", color: "amber" },
};

// =============================================================================
// CLIENT TAB ORDERING (V6 - 7 Tabs)
// =============================================================================

export const CLIENT_TABS = [
  { key: "overview", label: "Overview" },
  { key: "goals", label: "Goals & Progress" },
  { key: "notes", label: "Session Notes" },
  { key: "t15", label: "T-15 Prep" },
  { key: "copilot", label: "In-Session Copilot" },
  { key: "sashaLog", label: "Sasha Conversations Log" },
  { key: "resources", label: "Shared Resources" },
];

// =============================================================================
// PRIVACY TIERS (Coachee Autonomy)
// =============================================================================

export const PRIVACY_TIERS = {
  tier1: {
    label: "Private",
    description: "Only you and Sasha can see this",
    icon: "lock",
  },
  tier2: {
    label: "Shared Summary",
    description: "Coach sees a summary, not the full content",
    icon: "eye-half",
  },
  tier3: {
    label: "Shared with Coach",
    description: "Your coach can see this content",
    icon: "eye",
  },
};

// =============================================================================
// DEMO SPINE (4-Piece Structure)
// =============================================================================

export const DEMO_SPINE = [
  {
    key: "agent",
    title: "Do Anything Agent",
    subtitle: "Command bar that pulls up any view and executes tasks",
    description: "Ask Sasha anything. Pull up client prep, draft emails, check your schedule—all from one place.",
  },
  {
    key: "notes",
    title: "Post-Session Notes",
    subtitle: "The 'tears moment' — AI drafts that truly see your client",
    description: "Session ends, beautiful notes appear. Drill down to exact transcript moments. Edit with a highlight.",
  },
  {
    key: "insession",
    title: "In-Session Copilot",
    subtitle: "Gentle prompts right below your camera line",
    description: "Observe-only or active help. Propose questions, frameworks, or paste directly into Zoom chat.",
  },
  {
    key: "companion",
    title: "24/7 Companion",
    subtitle: "Support between sessions, private by default",
    description: "Your client processes challenges anytime. You see what they choose to share in your prep.",
  },
];

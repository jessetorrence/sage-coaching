import React from "react";
import { mockClients } from "./data/mockClients";
import logo from "./assets/logo.jpg";
import { PRODUCT_NAME, AGENT_NAME, LOCKED_PHRASES, TRUST_BULLETS, PRICING } from "./lib/regenesisV6Copy";
import TrustStrip, { TrustBlock } from "./components/TrustStrip";
import VisibilityBadge, { ClientPrivateBadge, ApprovalRequiredBadge, AIDraftedBadge } from "./components/VisibilityBadge";
import CommandBarOverlay, { CommandBarHint } from "./components/CommandBarOverlay";

export default function JTCoachingAppShellWireframe() {
  // User type: null = landing page, "coach" | "coachee" | "admin"
  const [userType, setUserType] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [onboardingStep, setOnboardingStep] = React.useState(0);

  const [activePage, setActivePage] = React.useState("Dashboard");
  const [selectedClient, setSelectedClient] = React.useState(mockClients[0]);
  const [selectedBusinessTab, setSelectedBusinessTab] = React.useState("Client Impact & Outcomes");
  const [selectedSessionId, setSelectedSessionId] = React.useState(null);
  const [showT15Prep, setShowT15Prep] = React.useState(false);
  const [t15Client, setT15Client] = React.useState(null);
  const [showSageTooltip, setShowSageTooltip] = React.useState(false);
  const [showCommandBar, setShowCommandBar] = React.useState(false);

  // Keyboard shortcut for command bar (Cmd/Ctrl + K)
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowCommandBar(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { key: "Dashboard", label: "Dashboard" },
    { key: "Clients", label: "Clients" },
    { key: "Schedule", label: "Schedule" },
    { key: "Resources", label: "Resource Library" },
    { key: "Business", label: "Business Management" },
    { key: "Settings", label: "Settings" },
  ];

  // LANDING PAGE - First encounter
  if (!userType) {
    return (
      <LandingPage
        onSelectUserType={(type) => {
          setUserType(type);
          setOnboardingStep(1);
        }}
      />
    );
  }

  // ONBOARDING FLOWS - Before logged in
  if (!isLoggedIn) {
    if (userType === "coach") {
      return (
        <CoachOnboardingFlow
          step={onboardingStep}
          setStep={setOnboardingStep}
          onComplete={() => setIsLoggedIn(true)}
          onBack={() => {
            if (onboardingStep === 1) {
              setUserType(null);
            } else {
              setOnboardingStep(onboardingStep - 1);
            }
          }}
        />
      );
    }
    if (userType === "coachee") {
      return (
        <CoacheeOnboardingFlow
          step={onboardingStep}
          setStep={setOnboardingStep}
          onComplete={() => setIsLoggedIn(true)}
          onBack={() => {
            if (onboardingStep === 1) {
              setUserType(null);
            } else {
              setOnboardingStep(onboardingStep - 1);
            }
          }}
        />
      );
    }
    if (userType === "admin") {
      return (
        <AdminOnboardingFlow
          step={onboardingStep}
          setStep={setOnboardingStep}
          onComplete={() => setIsLoggedIn(true)}
          onBack={() => {
            if (onboardingStep === 1) {
              setUserType(null);
            } else {
              setOnboardingStep(onboardingStep - 1);
            }
          }}
        />
      );
    }
  }

  // LOGGED IN - Route to appropriate dashboard based on user type
  if (userType === "coachee") {
    return (
      <CoacheeDashboardShell
        onLogout={() => {
          setUserType(null);
          setIsLoggedIn(false);
          setOnboardingStep(0);
        }}
      />
    );
  }

  if (userType === "admin") {
    return (
      <AdminDashboardShell
        onLogout={() => {
          setUserType(null);
          setIsLoggedIn(false);
          setOnboardingStep(0);
        }}
      />
    );
  }

  // COACH DASHBOARD (existing functionality)
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">

      {/* V6 Command Bar Overlay - Opens with Cmd/Ctrl+K */}
      <CommandBarOverlay
        isOpen={showCommandBar}
        onClose={() => setShowCommandBar(false)}
        onNavigate={(action) => {
          // Navigate to relevant view based on command
          if (action === "dashboard") setActivePage("Dashboard");
          if (action === "t15") setShowT15Prep(true);
          if (action === "client") setActivePage("Clients");
        }}
      />

      {/* TOP HORIZONTAL NAVIGATION */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="flex items-center justify-between px-8 py-3">
          {/* Logo and Brand */}
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo" className="h-10 rounded-lg" />

            {/* Command Bar Hint - V6 addition */}
            <CommandBarHint onClick={() => setShowCommandBar(true)} />

            {/* Sage - AI Intelligence Feature */}
            <div className="relative">
              <button
                onClick={() => setShowCommandBar(true)}
                onMouseEnter={() => setShowSageTooltip(true)}
                onMouseLeave={() => setShowSageTooltip(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all"
              >
                <span className="text-xl">🧙‍♂️</span>
                <span className="font-semibold">{AGENT_NAME}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded">AI</span>
              </button>

              {/* Sage Tooltip - Shows all capabilities on hover */}
              {showSageTooltip && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white text-gray-900 rounded-xl shadow-2xl p-6 z-50 border border-gray-200">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b">
                    <span className="text-2xl">🧙‍♂️</span>
                    <div>
                      <h3 className="font-bold text-lg">Sage AI Assistant</h3>
                      <p className="text-xs text-gray-500">Your always-on coaching intelligence</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="text-sm">
                      <div className="font-semibold text-teal-600 mb-1">📋 Session & Client Support</div>
                      <ul className="text-xs text-gray-600 space-y-1 ml-4">
                        <li>• Prep T-15 briefs with client context</li>
                        <li>• Draft, edit, and send client notes automatically</li>
                        <li>• Identify patterns and insights across sessions</li>
                        <li>• Suggest powerful questions & frameworks</li>
                        <li>• Optional co-pilot support during sessions</li>
                      </ul>
                    </div>

                    <div className="text-sm">
                      <div className="font-semibold text-blue-600 mb-1">📅 Scheduling & Admin</div>
                      <ul className="text-xs text-gray-600 space-y-1 ml-4">
                        <li>• Find optimal meeting times</li>
                        <li>• Send calendar invites & reminders</li>
                        <li>• Draft professional emails</li>
                        <li>• Automate invoicing and tax filing</li>
                      </ul>
                    </div>

                    <div className="text-sm">
                      <div className="font-semibold text-purple-600 mb-1">💡 Insights & Growth</div>
                      <ul className="text-xs text-gray-600 space-y-1 ml-4">
                        <li>• Track & report metrics for ICF credentials and professional growth</li>
                        <li>• Provide resource recommendations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 p-3 rounded-lg">
                    <div className="text-xs font-semibold text-gray-700 mb-2">Try asking:</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="italic">"Prepare me for tomorrow's session with Marcus"</div>
                      <div className="italic">"Find time this week for a 1-hour session"</div>
                      <div className="italic">"What patterns do you see in Sarah's progress?"</div>
                      <div className="italic">"Find me the perfect gift for our anniversary"</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation with better spacing */}
          <nav className="flex gap-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActivePage(item.key)}
                className={[
                  "px-5 py-2 font-medium rounded-lg transition-all",
                  activePage === item.key
                    ? "bg-white text-gray-900 shadow-md"
                    : "text-white hover:bg-gray-800"
                ].join(" ")}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Alerts & Notifications */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white hover:bg-gray-800 rounded-lg transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {/* Notification badge */}
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-hidden">
        {showT15Prep && activePage === "Clients" ? (
          <T15PrepFullPage
            client={t15Client}
            onClose={() => setShowT15Prep(false)}
            onBack={() => setShowT15Prep(false)}
          />
        ) : selectedSessionId && activePage === "Clients" ? (
          <SessionNotesEditorPage
            sessionId={selectedSessionId}
            client={selectedClient}
            onClose={() => setSelectedSessionId(null)}
          />
        ) : (
          <>
            {activePage === "Dashboard" && (
              <DashboardPage
                onOpenT15={(client) => {
                  setT15Client(client);
                  setShowT15Prep(true);
                  setActivePage("Clients");
                }}
                onOpenSession={(sessionId, client) => {
                  setSelectedSessionId(sessionId);
                  setSelectedClient(client);
                  setActivePage("Clients");
                }}
              />
            )}
            {activePage === "Clients" && (
              <ClientsPage
                selectedClient={selectedClient}
                setSelectedClient={setSelectedClient}
                onOpenT15={(client) => {
                  setT15Client(client);
                  setShowT15Prep(true);
                }}
                onOpenSession={(sessionId) => setSelectedSessionId(sessionId)}
              />
            )}
            {activePage === "Schedule" && <SchedulePage />}
            {activePage === "Resources" && <ResourceLibraryPage />}
            {activePage === "AI" && <AICompanionPage />}
            {activePage === "Business" && (
              <BusinessManagementPage
                selectedTab={selectedBusinessTab}
                setSelectedTab={setSelectedBusinessTab}
              />
            )}
            {activePage === "Settings" && <SettingsPage />}
          </>
        )}
      </main>
    </div>
  );
}

// ============ DASHBOARD PAGE ============
// "Command and Control Center" - GTD-inspired with North Star goals
function DashboardPage({ onOpenT15, onOpenSession }) {
  const [showAllActions, setShowAllActions] = React.useState(false);

  const marcusClient = mockClients.find(c => c.name === "Marcus Williams");
  const sarahClient = mockClients.find(c => c.name === "Sarah Chen");

  if (showAllActions) {
    return <AllActionsAllDomainsPage onBack={() => setShowAllActions(false)} />;
  }

  return (
    <div className="p-8 overflow-auto h-full bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-gray-600 font-medium">Capture · Clarify · Organize · Reflect · Engage</p>
      </div>

      {/* V6: Next Best Action - Calm, focused, 1-3 items */}
      <div className="mb-6 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-teal-900">Your Next Best Action</h3>
            <p className="text-sm text-teal-700">Focus here first</p>
          </div>
        </div>
        <button
          onClick={() => onOpenT15 && onOpenT15(marcusClient)}
          className="w-full flex items-center justify-between p-4 bg-white rounded-lg border border-teal-200 hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-xl group-hover:bg-teal-200 transition-colors">
              📋
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-900">Prepare for Marcus Williams</p>
              <p className="text-sm text-gray-600">Session in 30 minutes — T-15 prep is ready</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">Next session upcoming</span>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>

      {/* V6: Needs Attention Row - Calm badges, not guilt-inducing */}
      <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flex items-center gap-2 px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          <span className="text-sm text-amber-800 font-medium">2 need attention</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <span className="text-sm text-blue-800 font-medium">3 sessions this week</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-3 bg-green-50 border border-green-200 rounded-lg">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-sm text-green-800 font-medium">1 draft ready</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg">
          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
          <span className="text-sm text-purple-800 font-medium">12 active clients</span>
        </div>
      </div>

      {/* FUNNEL TOP: Values → Vision → Mission/I Am Statement */}
      <div className="mb-8 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold mb-3 text-teal-50">Jesse's Core Values</h3>
          <p className="text-3xl font-bold mb-6">Courage · Truth · Integrity</p>
        </div>

        <div className="border-t border-teal-300 pt-6 mb-6">
          <h3 className="text-lg font-semibold mb-3 text-teal-50">Vision</h3>
          <p className="text-xl font-medium text-white">
            A world where leaders live authentically aligned with their deepest values and highest potential
          </p>
        </div>

        <div className="border-t border-teal-300 pt-6">
          <h3 className="text-lg font-semibold mb-3 text-teal-50">Mission / I Am Statement</h3>
          <p className="text-xl font-medium text-white">
            I am a catalyst for transformation, guiding leaders to clarity, impact, and sustainable excellence
          </p>
        </div>
      </div>

      {/* FUNNEL MIDDLE: Coaching Business Priorities (MAIN REAL ESTATE) */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold">Coaching Priorities</h3>
          <button
            onClick={() => setShowAllActions(true)}
            className="text-sm px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 shadow"
          >
            All Actions - All Domains →
          </button>
        </div>

        {/* Urgent Coaching Actions */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 p-6 rounded-xl shadow-lg mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <h4 className="font-bold text-red-900">Urgent - Today</h4>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => onOpenT15 && onOpenT15(marcusClient)}
              className="w-full text-left p-4 bg-white rounded-lg hover:shadow-md transition border border-red-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">T-15 Prep - Marcus Williams</div>
                  <div className="text-sm text-gray-600 mt-1">Session in 30 minutes at 10:00 AM</div>
                </div>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Prepare</span>
              </div>
            </button>

            <button
              onClick={() => onOpenSession && onOpenSession(1, sarahClient)}
              className="w-full text-left p-4 bg-white rounded-lg hover:shadow-md transition border border-red-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Review draft notes - Sarah Chen</div>
                  <div className="text-sm text-gray-600 mt-1">Session from Jan 8 ready for your review</div>
                </div>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Draft Ready</span>
              </div>
            </button>
          </div>
        </div>

        {/* This Week Coaching Actions */}
        <div className="bg-white border-2 border-blue-300 p-6 rounded-xl shadow-lg mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h4 className="font-bold text-blue-900">This Week</h4>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="font-medium text-gray-900">Follow up with Jennifer Martinez</div>
              <div className="text-sm text-gray-600 mt-1">Check in on career pivot decision</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="font-medium text-gray-900">Send resources to Lisa Patel</div>
              <div className="text-sm text-gray-600 mt-1">Executive team building frameworks</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="font-medium text-gray-900">Schedule next session - David Park</div>
              <div className="text-sm text-gray-600 mt-1">Last session was Jan 11</div>
            </div>
          </div>
        </div>

        {/* Waiting On (Coaching) */}
        <div className="bg-white border border-gray-300 p-6 rounded-xl shadow">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <h4 className="font-bold text-gray-700">Waiting On</h4>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-gray-700">→ Client feedback from James Rodriguez (sent 2 days ago)</div>
            <div className="text-gray-700">→ Contract renewal decision - Emily Thompson</div>
            <div className="text-gray-700">→ Referral intro from Marcus Williams</div>
          </div>
        </div>
      </div>

      {/* UF-12: WHOLE LIFE DASHBOARD - Non-coaching to-dos with equal prominence */}
      <div className="border-t-2 border-gray-300 pt-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Your Whole Life</h3>
            <p className="text-gray-600 text-sm">ReGenesis supports ALL of you, not just your coaching practice</p>
          </div>
          <button className="text-sm px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 font-medium">
            + Add Life Task
          </button>
        </div>

        {/* Urgent Life Tasks - Same visual weight as coaching */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl shadow-lg mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <h4 className="font-bold text-purple-900">Urgent Life Actions - Today</h4>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200 hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">Pick up birthday gift for Oana</div>
                  <div className="text-sm text-gray-600">Birthday is tomorrow!</div>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-pink-100 text-pink-800 rounded-full">Family</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200 hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 rounded text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">Book dermatology checkup</div>
                  <div className="text-sm text-gray-600">Been putting this off — time to do it</div>
                </div>
              </div>
              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Wellbeing</span>
            </div>
          </div>
        </div>

        {/* Life Areas Grid - More visual prominence */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Personal Wellbeing */}
          <div className="bg-white border-2 border-purple-200 p-5 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧘</span>
                <h4 className="font-bold text-purple-900">Personal Wellbeing</h4>
              </div>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">3 tasks</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                <input type="checkbox" className="rounded text-purple-600" />
                <span className="text-sm text-gray-700">Morning stillness routine</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                <input type="checkbox" className="rounded text-purple-600" />
                <span className="text-sm text-gray-700">Gym 3x this week</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg">
                <input type="checkbox" className="rounded text-purple-600" />
                <span className="text-sm text-gray-700">Sleep by 10:30pm</span>
              </div>
            </div>
            <button className="mt-3 text-xs text-purple-600 hover:underline">+ Add task</button>
          </div>

          {/* Family */}
          <div className="bg-white border-2 border-pink-200 p-5 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👨‍👩‍👧</span>
                <h4 className="font-bold text-pink-900">Family</h4>
              </div>
              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">4 tasks</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-pink-50 rounded-lg">
                <input type="checkbox" className="rounded text-pink-600" />
                <span className="text-sm text-gray-700">Plan family weekend trip</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-pink-50 rounded-lg">
                <input type="checkbox" className="rounded text-pink-600" />
                <span className="text-sm text-gray-700">Date night Saturday</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-pink-50 rounded-lg">
                <input type="checkbox" className="rounded text-pink-600" />
                <span className="text-sm text-gray-700">Call mom Sunday</span>
              </div>
            </div>
            <button className="mt-3 text-xs text-pink-600 hover:underline">+ Add task</button>
          </div>

          {/* Financial & Business */}
          <div className="bg-white border-2 border-green-200 p-5 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <h4 className="font-bold text-green-900">Financial & Business</h4>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">5 tasks</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                <input type="checkbox" className="rounded text-green-600" />
                <span className="text-sm text-gray-700">Invoice 3 clients (overdue)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                <input type="checkbox" className="rounded text-green-600" />
                <span className="text-sm text-gray-700">Review Q1 finances</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                <input type="checkbox" className="rounded text-green-600" />
                <span className="text-sm text-gray-700">Update website testimonials</span>
              </div>
            </div>
            <button className="mt-3 text-xs text-green-600 hover:underline">+ Add task</button>
          </div>

          {/* Community & Relationships */}
          <div className="bg-white border-2 border-blue-200 p-5 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                <h4 className="font-bold text-blue-900">Community</h4>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">3 tasks</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">Call old mentor</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">Volunteer event planning</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-sm text-gray-700">Coffee with Dave</span>
              </div>
            </div>
            <button className="mt-3 text-xs text-blue-600 hover:underline">+ Add task</button>
          </div>

          {/* Legacy & Impact */}
          <div className="bg-white border-2 border-orange-200 p-5 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                <h4 className="font-bold text-orange-900">Legacy & Impact</h4>
              </div>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">4 tasks</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                <input type="checkbox" className="rounded text-orange-600" />
                <span className="text-sm text-gray-700">Draft book chapter 3</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                <input type="checkbox" className="rounded text-orange-600" />
                <span className="text-sm text-gray-700">Update scholarship fund</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                <input type="checkbox" className="rounded text-orange-600" />
                <span className="text-sm text-gray-700">Record podcast episode</span>
              </div>
            </div>
            <button className="mt-3 text-xs text-orange-600 hover:underline">+ Add task</button>
          </div>

          {/* Creativity & Learning */}
          <div className="bg-white border-2 border-indigo-200 p-5 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <h4 className="font-bold text-indigo-900">Creativity & Learning</h4>
              </div>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">2 tasks</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-indigo-50 rounded-lg">
                <input type="checkbox" className="rounded text-indigo-600" />
                <span className="text-sm text-gray-700">Read 30 min daily</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-indigo-50 rounded-lg">
                <input type="checkbox" className="rounded text-indigo-600" />
                <span className="text-sm text-gray-700">Guitar practice</span>
              </div>
            </div>
            <button className="mt-3 text-xs text-indigo-600 hover:underline">+ Add task</button>
          </div>
        </div>

        {/* AI Quick Capture Bar */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center gap-4 group relative">
          <span className="text-2xl">💭</span>
          <input
            type="text"
            placeholder="Just talk to me... tell me a task, when you want it done, where to put it—I'll figure it out"
            className="flex-1 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm" title="Optional: manually categorize">
            <option value="">Auto-categorize</option>
            <option>Coaching</option>
            <option>Wellbeing</option>
            <option>Family</option>
            <option>Financial</option>
            <option>Community</option>
            <option>Legacy</option>
            <option>Learning</option>
          </select>
          {/* Tooltip on hover */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Speak naturally—I'll capture it and put it in the right place. For now or later, coaching or personal.
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ ALL ACTIONS - ALL DOMAINS PAGE ============
function AllActionsAllDomainsPage({ onBack }) {
  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to Dashboard
            </button>
            <div className="text-sm text-gray-600">
              Complete GTD View · All Life Areas
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">All Actions - All Domains</h1>
          <p className="text-gray-600">Complete project management view across all areas of life</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">

        {/* Coaching Business */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Coaching Business</h2>

          {/* Next Actions */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Next Actions
            </h3>
            <div className="space-y-2 ml-5">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-900">T-15 Prep - Marcus Williams</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Today</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-900">Review draft notes - Sarah Chen</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Today</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Follow up with Jennifer Martinez</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Week</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Send resources to Lisa Patel</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Week</span>
              </div>
            </div>
          </div>

          {/* Waiting For */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              Waiting For
            </h3>
            <div className="space-y-2 ml-5">
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-gray-900">
                Client feedback from James Rodriguez (sent 2 days ago)
              </div>
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200 text-gray-900">
                Contract renewal decision - Emily Thompson
              </div>
            </div>
          </div>

          {/* Someday/Maybe */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              Someday/Maybe
            </h3>
            <div className="space-y-2 ml-5">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                Explore group coaching program
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                Create online course
              </div>
            </div>
          </div>
        </div>

        {/* Personal Wellbeing */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
          <h2 className="text-2xl font-bold mb-6 text-purple-900">Personal Wellbeing</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Next Actions
            </h3>
            <div className="space-y-2 ml-5">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-900">Book dermatology checkup</span>
                <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Urgent</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Morning stillness routine (daily)</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Ongoing</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Schedule annual physical</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Month</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              Someday/Maybe
            </h3>
            <div className="space-y-2 ml-5">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                Research meditation retreat
              </div>
            </div>
          </div>
        </div>

        {/* Family */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
          <h2 className="text-2xl font-bold mb-6 text-pink-900">Family</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Next Actions
            </h3>
            <div className="space-y-2 ml-5">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-900">Pick up birthday gift for Oana</span>
                <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Urgent</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Plan family weekend trip</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Week</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Schedule date night with Oana</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Financial/Business (non-coaching) */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
          <h2 className="text-2xl font-bold mb-6 text-green-900">Financial/Business</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Next Actions
            </h3>
            <div className="space-y-2 ml-5">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="text-gray-900">Invoice 3 clients</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Today</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Review Q1 finances</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Week</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Update website testimonials</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Month</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              Someday/Maybe
            </h3>
            <div className="space-y-2 ml-5">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                Explore passive income streams
              </div>
            </div>
          </div>
        </div>

        {/* Community & Relationships */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Community & Relationships</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Next Actions
            </h3>
            <div className="space-y-2 ml-5">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Call old mentor</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Week</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Volunteer event planning</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy & Impact */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
          <h2 className="text-2xl font-bold mb-6 text-orange-900">Legacy & Impact</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Next Actions
            </h3>
            <div className="space-y-2 ml-5">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Draft book chapter 3</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Week</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">Update scholarship fund</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">This Month</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
              Someday/Maybe
            </h3>
            <div className="space-y-2 ml-5">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                Launch podcast series
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
                Establish foundation
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ============ CLIENTS PAGE (Master-Detail) ============
function ClientsPage({ selectedClient, setSelectedClient, onOpenT15, onOpenSession }) {
  const [activeTab, setActiveTab] = React.useState("Profile");

  const tabs = ["Profile", "Goals & Progress", "Session Notes", "T-15 Prep", "24/7 Companion", "Client Resources"];

  return (
    <div className="flex h-full">
      {/* Client List Sidebar */}
      <aside className="w-80 bg-white border-r overflow-auto">
        <div className="p-4 border-b">
          <h3 className="font-semibold mb-3">Clients</h3>
          <div className="flex gap-2 text-sm">
            <button className="px-3 py-1 bg-gray-900 text-white rounded">
              All ({mockClients.length})
            </button>
            <button className="px-3 py-1 bg-gray-100 rounded">
              Active ({mockClients.filter(c => c.status === "active").length})
            </button>
            <button className="px-3 py-1 bg-gray-100 rounded">
              Paused ({mockClients.filter(c => c.status === "paused").length})
            </button>
          </div>
        </div>

        <div className="divide-y">
          {mockClients.map(client => (
            <button
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className={[
                "w-full text-left p-4 hover:bg-gray-50 transition",
                selectedClient.id === client.id ? "bg-blue-50" : ""
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                  {client.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{client.name}</div>
                  <div className="text-sm text-gray-600 truncate">{client.company}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={[
                      "text-xs px-2 py-0.5 rounded-full",
                      client.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                    ].join(" ")}>
                      {client.phase}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Client Detail with Tabs */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Client Header */}
        <div className="p-6 border-b bg-white">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold">{selectedClient.name}</h2>
              <p className="text-gray-600">{selectedClient.role} at {selectedClient.company}</p>
            </div>
            <span className={[
              "px-3 py-1 rounded-full text-sm font-medium",
              selectedClient.status === "active"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-600"
            ].join(" ")}>
              {selectedClient.status}
            </span>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 border-b -mb-px">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={[
                  "px-4 py-2 font-medium border-b-2 transition",
                  activeTab === tab
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                ].join(" ")}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-auto p-8">
          {activeTab === "Profile" && <ClientProfileTab client={selectedClient} />}
          {activeTab === "Goals & Progress" && <ClientGoalsTab client={selectedClient} />}
          {activeTab === "Session Notes" && <ClientSessionNotesTab client={selectedClient} onOpenSession={onOpenSession} />}
          {activeTab === "T-15 Prep" && <ClientT15PrepTab client={selectedClient} onOpenT15={onOpenT15} />}
          {activeTab === "24/7 Companion" && <ClientCompanionTab client={selectedClient} />}
          {activeTab === "Client Resources" && <ClientResourcesTab client={selectedClient} />}
        </div>
      </div>
    </div>
  );
}

// ============ CLIENT TAB COMPONENTS ============

function ClientProfileTab({ client }) {
  const [showLaunchQuestionnaire, setShowLaunchQuestionnaire] = React.useState(false);

  return (
    <div className="space-y-6">
      {/* Client Intake Form Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Client Profile</h2>
        <button
          onClick={() => setShowLaunchQuestionnaire(true)}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow flex items-center gap-2"
        >
          <span>📋</span> View Launch Questionnaire
        </button>
      </div>

      {/* Launch Questionnaire Modal */}
      {showLaunchQuestionnaire && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold">Launch Questionnaire - {client.name}</h2>
              <button onClick={() => setShowLaunchQuestionnaire(false)} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="text-sm text-teal-800 font-medium mb-1">Completed on March 1, 2025</div>
                <div className="text-xs text-teal-600">This questionnaire captures {client.name}'s vision, values, and goals at the start of our engagement.</div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2">Part 1: Life Vision & Purpose</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2">What does a deeply fulfilling life look like for you 5-10 years from now?</div>
                  <p className="text-sm text-gray-700">I see myself leading a mid-sized technology company that genuinely improves people's lives—not just creating shareholder value but real impact. I'm spending meaningful time with my kids during their formative years, present and not distracted by work anxiety. My relationship with Alex is stronger than ever because we've maintained our commitment to each other. I'm physically healthy, mentally sharp, and have the energy to show up fully in all areas of life.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2">What are your core values—the principles you refuse to compromise?</div>
                  <p className="text-sm text-gray-700">Integrity, authenticity, growth, family, and service to others. I believe in leading by example and creating environments where people can do their best work and be their full selves.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2">Part 2: Current Situation</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2">What's working well in your life right now?</div>
                  <p className="text-sm text-gray-700">My career trajectory is strong—I've proven I can lead at scale and people seem to respect my leadership style. My kids are healthy and happy. Alex and I are committed to making our marriage work even when it's hard. I have financial security which allows me to focus on meaning rather than survival.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2">What's not working or causing you stress?</div>
                  <p className="text-sm text-gray-700">I'm chronically overcommitted and struggling to say no. I feel like I'm always running behind, never fully present anywhere. My health has slipped—I haven't exercised consistently in months and my sleep is terrible. I'm also avoiding some difficult conversations at work that need to happen.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2">Part 3: Goals for Coaching</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2">What do you most want to achieve through our coaching engagement?</div>
                  <p className="text-sm text-gray-700">I want to become a more grounded, present leader who doesn't sacrifice personal wellbeing for professional success. I want to learn to say no without guilt, have difficult conversations with confidence, and create sustainable rhythms that let me show up fully at work AND at home.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xs text-gray-500 mb-2">How will you know we've been successful?</div>
                  <p className="text-sm text-gray-700">I'll be sleeping 7+ hours consistently. I'll have addressed the performance issues on my team. I'll be exercising at least 3x/week. My direct reports will report higher trust and clarity. And when I'm with my kids, I won't be mentally at work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social & Professional Links */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4 text-lg border-b pb-2">Social & Professional Profiles</h3>
        <div className="flex flex-wrap gap-3">
          <a href="https://linkedin.com/in/jessetorrence" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            <span className="text-xs">Not shared yet</span>
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 rounded-lg text-sm">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span className="text-xs">Not shared yet</span>
          </span>
        </div>
      </div>

      {/* Professional Information */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4 text-lg border-b pb-2">Professional</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <div className="text-gray-500 text-xs mb-1">Current Position</div>
            <div className="font-medium">{client.role}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Company</div>
            <div className="font-medium">{client.company}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Years in Current Role</div>
            <div className="font-medium">3 years</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Industry</div>
            <div className="font-medium">Technology / SaaS</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Direct Reports</div>
            <div className="font-medium">12 (5 directors, 7 senior managers)</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Total Org Size</div>
            <div className="font-medium">~85 employees</div>
          </div>
          <div className="col-span-2">
            <div className="text-gray-500 text-xs mb-1">Professional Summary</div>
            <div className="text-gray-700 text-sm leading-relaxed">
              Seasoned executive with 15+ years experience scaling technology companies. Previously VP of Product at TechCorp, led team of 50+ through Series B growth. Known for strategic thinking and people development.
            </div>
          </div>
          <div className="col-span-2 border-t pt-4 mt-2">
            <div className="text-gray-500 text-xs mb-2">Previous Roles</div>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">VP of Product, TechCorp</span>
                <span className="text-gray-500">2019-2022</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Director of Engineering, StartupCo</span>
                <span className="text-gray-500">2016-2019</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Senior Engineer, BigTech Inc</span>
                <span className="text-gray-500">2012-2016</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personality Assessments */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4 text-lg border-b pb-2">Personality & Assessments</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-gray-500 text-xs mb-1">Enneagram</div>
            <a href="#" className="font-bold text-purple-700 hover:underline text-lg">Type 3w2</a>
            <div className="text-xs text-gray-600 mt-1">The Achiever with Helper wing</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-gray-500 text-xs mb-1">CliftonStrengths Top 5</div>
            <a href="#" className="font-bold text-blue-700 hover:underline">View Full Results</a>
            <div className="text-xs text-gray-600 mt-1">Strategic, Achiever, Learner, Relator, Responsibility</div>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-gray-500 text-xs mb-1">DISC Profile</div>
            <a href="#" className="font-bold text-green-700 hover:underline text-lg">Di</a>
            <div className="text-xs text-gray-600 mt-1">Dominant-Influential</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="text-gray-500 text-xs mb-1">Myers-Briggs (MBTI)</div>
            <a href="#" className="font-bold text-orange-700 hover:underline text-lg">ENTJ</a>
            <div className="text-xs text-gray-600 mt-1">The Commander</div>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg">
            <div className="text-gray-500 text-xs mb-1">Hogan Assessment</div>
            <a href="#" className="font-bold text-teal-700 hover:underline">View Full Report</a>
            <div className="text-xs text-gray-600 mt-1">Completed Feb 2025</div>
          </div>
          <div className="p-4 bg-pink-50 rounded-lg">
            <div className="text-gray-500 text-xs mb-1">EQ-i 2.0</div>
            <a href="#" className="font-bold text-pink-700 hover:underline">View Full Report</a>
            <div className="text-xs text-gray-600 mt-1">Overall: 108 (High Average)</div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4 text-lg border-b pb-2">Personal</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <div className="text-gray-500 text-xs mb-1">Date of Birth</div>
            <div className="font-medium">March 15, 1985 (age 40)</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Preferred Pronouns</div>
            <div className="font-medium">They/Them</div>
          </div>
          <div className="col-span-2">
            <div className="text-gray-500 text-xs mb-1">Home Address</div>
            <div className="font-medium">123 Main Street, Apt 4B<br/>San Francisco, CA 94110</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Cell Phone</div>
            <div className="font-medium">(415) 555-1234</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Home Phone</div>
            <div className="font-medium">(415) 555-5678</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Email</div>
            <div className="font-medium">{client.name.toLowerCase().replace(' ', '.')}@{client.company.toLowerCase().replace(' ', '')}.com</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Personal Email</div>
            <div className="font-medium">{client.name.toLowerCase().replace(' ', '.')}@gmail.com</div>
          </div>
        </div>
      </div>

      {/* Family Structure */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4 text-lg border-b pb-2">Family</h3>
        <div className="space-y-4 text-sm">
          <div>
            <div className="text-gray-500 text-xs mb-1">Marital Status</div>
            <div className="font-medium">Married</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-2">Spouse/Partner</div>
            <div className="font-medium mb-1">Alex Chen</div>
            <div className="text-gray-600 text-xs">Occupation: Architect | Birthday: July 22</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-2">Children</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">Maya Chen</div>
                  <div className="text-xs text-gray-600">Age 10 | Birthday: April 12, 2015</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">Lucas Chen</div>
                  <div className="text-xs text-gray-600">Age 7 | Birthday: September 8, 2018</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Extended Family Notes</div>
            <div className="text-gray-700 text-xs leading-relaxed">
              Mother lives nearby, health concerns (mention in check-ins). Siblings on East Coast, visits quarterly.
            </div>
          </div>
        </div>
      </div>

      {/* Coaching Engagement */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4 text-lg border-b pb-2">Coaching Engagement</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <div className="text-gray-500 text-xs mb-1">Start Date</div>
            <div className="font-medium">March 1, 2025</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Contract Term</div>
            <div className="font-medium">12 months (renews Sept 2026)</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Session Frequency</div>
            <div className="font-medium">Bi-weekly (every other Wednesday)</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Total Sessions</div>
            <div className="font-medium">{client.notes} completed</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Coaching Phase</div>
            <div className="font-medium">{client.phase}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs mb-1">Status</div>
            <div className="font-medium">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{client.status}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientGoalsTab({ client }) {
  const [showAllGoals, setShowAllGoals] = React.useState(false);
  const [expandedGoals, setExpandedGoals] = React.useState({});

  // Toggle individual goal accordion
  const toggleGoal = (areaIdx, goalIdx) => {
    const key = `${areaIdx}-${goalIdx}`;
    setExpandedGoals(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Get progress color based on percentage
  const getProgressColor = (progress) => {
    if (progress >= 70) return { bg: 'bg-green-500', text: 'text-green-700', light: 'bg-green-100' };
    if (progress >= 40) return { bg: 'bg-yellow-500', text: 'text-yellow-700', light: 'bg-yellow-100' };
    return { bg: 'bg-red-500', text: 'text-red-700', light: 'bg-red-100' };
  };

  // Rich goal data with nested objectives and actions
  const lifeAreas = [
    {
      name: "Professional Growth & Leadership",
      icon: "💼",
      color: "blue",
      progress: 65,
      goals: [
        {
          title: "Become a more effective delegator",
          progress: 70,
          dueDate: "Q2 2026",
          objectives: [
            {
              title: "Delegate 3 key decisions per week",
              progress: 80,
              actions: [
                { text: "Identify tasks that don't require my direct input", done: true },
                { text: "Create delegation tracking spreadsheet", done: true },
                { text: "Hold weekly delegation retrospective", done: false }
              ]
            },
            {
              title: "Build team capability through coaching",
              progress: 60,
              actions: [
                { text: "Schedule bi-weekly development 1:1s", done: true },
                { text: "Create skill development roadmaps for each report", done: false },
                { text: "Document delegation playbook", done: false }
              ]
            }
          ]
        },
        {
          title: "Strengthen executive presence",
          progress: 55,
          dueDate: "Q3 2026",
          objectives: [
            {
              title: "Improve board presentation skills",
              progress: 65,
              actions: [
                { text: "Practice with executive coach monthly", done: true },
                { text: "Record and review presentations", done: true },
                { text: "Get feedback from 3 board members", done: false }
              ]
            },
            {
              title: "Develop authentic leadership voice",
              progress: 45,
              actions: [
                { text: "Complete leadership assessment", done: true },
                { text: "Journal weekly on leadership moments", done: false },
                { text: "Shadow 2 admired executives", done: false }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Health & Wellbeing",
      icon: "🏃",
      color: "green",
      progress: 40,
      goals: [
        {
          title: "Establish sustainable morning routine",
          progress: 50,
          dueDate: "Feb 2026",
          objectives: [
            {
              title: "Wake up at 6 AM consistently",
              progress: 60,
              actions: [
                { text: "Set phone to grayscale after 9 PM", done: true },
                { text: "Prepare clothes night before", done: true },
                { text: "No screens in bedroom", done: false }
              ]
            },
            {
              title: "20 min mindfulness practice",
              progress: 30,
              actions: [
                { text: "Download meditation app", done: true },
                { text: "Complete 10-day intro course", done: false },
                { text: "Set calendar reminder", done: false }
              ]
            }
          ]
        },
        {
          title: "Exercise 4x per week",
          progress: 35,
          dueDate: "Ongoing",
          objectives: [
            {
              title: "Strength training 2x/week",
              progress: 40,
              actions: [
                { text: "Book personal trainer session", done: true },
                { text: "Set up home gym basics", done: false },
                { text: "Block calendar for workouts", done: false }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Relationships & Family",
      icon: "❤️",
      color: "pink",
      progress: 75,
      goals: [
        {
          title: "Deepen connection with spouse",
          progress: 80,
          dueDate: "Ongoing",
          objectives: [
            {
              title: "Weekly date nights",
              progress: 90,
              actions: [
                { text: "Block Friday evenings on calendar", done: true },
                { text: "Create list of 20 date ideas", done: true },
                { text: "Plan quarterly getaways", done: true }
              ]
            },
            {
              title: "Daily check-in ritual",
              progress: 70,
              actions: [
                { text: "10 min morning coffee together", done: true },
                { text: "Phone-free dinner time", done: false }
              ]
            }
          ]
        },
        {
          title: "Be more present with kids",
          progress: 65,
          dueDate: "Ongoing",
          objectives: [
            {
              title: "Individual time with each child",
              progress: 60,
              actions: [
                { text: "Monthly 'special day' with each kid", done: true },
                { text: "Attend school events", done: true },
                { text: "Learn their interests deeply", done: false }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Financial Security",
      icon: "💰",
      color: "emerald",
      progress: 55,
      goals: [
        {
          title: "Build 6-month emergency fund",
          progress: 60,
          dueDate: "Jun 2026",
          objectives: [
            {
              title: "Auto-transfer $2k/month to savings",
              progress: 80,
              actions: [
                { text: "Set up automatic transfer", done: true },
                { text: "Review budget for additional savings", done: true },
                { text: "Track progress monthly", done: false }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Personal Growth & Learning",
      icon: "📚",
      color: "purple",
      progress: 30,
      goals: [
        {
          title: "Read 2 books per month",
          progress: 40,
          dueDate: "Ongoing",
          objectives: [
            {
              title: "30 min reading before bed",
              progress: 40,
              actions: [
                { text: "Create reading list", done: true },
                { text: "Replace phone with book on nightstand", done: false }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Community & Impact",
      icon: "🌍",
      color: "orange",
      progress: 50,
      goals: [
        {
          title: "Mentor 2 junior leaders",
          progress: 70,
          dueDate: "Ongoing",
          objectives: [
            {
              title: "Bi-weekly mentoring sessions",
              progress: 75,
              actions: [
                { text: "Identify mentees from network", done: true },
                { text: "Create mentoring framework", done: true },
                { text: "Schedule recurring meetings", done: true }
              ]
            }
          ]
        },
        {
          title: "Volunteer monthly",
          progress: 30,
          dueDate: "Ongoing",
          objectives: [
            {
              title: "Find meaningful volunteer opportunity",
              progress: 30,
              actions: [
                { text: "Research local nonprofits", done: false },
                { text: "Sign up for board service training", done: false }
              ]
            }
          ]
        }
      ]
    }
  ];

  // View All Goals Dashboard
  if (showAllGoals) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowAllGoals(false)}
            className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
          >
            ← Back to Goals Overview
          </button>
          <h2 className="text-xl font-bold">All Goals at a Glance</h2>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-3xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-500">Total Goals</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg shadow text-center border border-green-200">
            <div className="text-3xl font-bold text-green-700">4</div>
            <div className="text-sm text-green-600">On Track</div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow text-center border border-yellow-200">
            <div className="text-3xl font-bold text-yellow-700">5</div>
            <div className="text-sm text-yellow-600">Needs Attention</div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow text-center border border-red-200">
            <div className="text-3xl font-bold text-red-700">3</div>
            <div className="text-sm text-red-600">At Risk</div>
          </div>
        </div>

        {/* Goals Grid with Color-Coded Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-6 gap-4">
            {lifeAreas.map((area, areaIdx) => (
              <div key={areaIdx} className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl mb-1">{area.icon}</div>
                  <div className="text-xs font-semibold text-gray-600 leading-tight">{area.name}</div>
                </div>
                {area.goals.map((goal, goalIdx) => {
                  const progressColor = getProgressColor(goal.progress);
                  return (
                    <div
                      key={goalIdx}
                      className={`p-3 rounded-lg border-2 ${progressColor.light} cursor-pointer hover:shadow-md transition`}
                      title={goal.title}
                    >
                      <div className="text-xs font-medium text-gray-700 mb-2 line-clamp-2">{goal.title}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className={`${progressColor.bg} h-2 rounded-full`} style={{ width: `${goal.progress}%` }}></div>
                        </div>
                        <span className={`text-xs font-bold ${progressColor.text}`}>{goal.progress}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">On Track (70%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600">Needs Attention (40-69%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600">At Risk (&lt;40%)</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Actions */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Goals & Progress</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow flex items-center gap-2">
            <span>📋</span> View Launch Questionnaire
          </button>
          <button
            onClick={() => setShowAllGoals(true)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 shadow flex items-center gap-2"
          >
            <span>📊</span> View All Goals →
          </button>
        </div>
      </div>

      {/* Client's Values, Vision, Mission */}
      <div className="bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
        <div className="text-center mb-4">
          <h3 className="text-sm font-semibold mb-2 text-teal-50">Core Values</h3>
          <p className="text-2xl font-bold mb-4">Authenticity · Growth · Impact</p>
        </div>

        <div className="border-t border-teal-300 pt-4 mb-4">
          <h3 className="text-sm font-semibold mb-2 text-teal-50">Vision</h3>
          <p className="text-base font-medium text-white">
            Lead with courage and compassion, building teams and systems that empower people to do their best work
          </p>
        </div>

        <div className="border-t border-teal-300 pt-4">
          <h3 className="text-sm font-semibold mb-2 text-teal-50">Mission / I Am Statement</h3>
          <p className="text-base font-medium text-white">
            I am a transformational leader who creates space for others to grow while staying grounded in my values
          </p>
        </div>
      </div>

      {/* Vertical Columns Layout - Goals by Life Area */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Goals by Life Area</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifeAreas.map((area, areaIdx) => (
            <div key={areaIdx} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Column Header */}
              <div className={`bg-gradient-to-r from-${area.color}-500 to-${area.color}-600 p-4 text-white`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{area.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{area.name}</h4>
                    <div className="text-xs opacity-80">{area.goals.length} goals · {area.progress}% overall</div>
                  </div>
                </div>
                {/* Overall progress bar */}
                <div className="mt-3 bg-white/30 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full transition-all" style={{ width: `${area.progress}%` }}></div>
                </div>
              </div>

              {/* Goals List (Vertical) */}
              <div className="p-4 space-y-3">
                {area.goals.map((goal, goalIdx) => {
                  const isExpanded = expandedGoals[`${areaIdx}-${goalIdx}`];
                  const progressColor = getProgressColor(goal.progress);

                  return (
                    <div key={goalIdx} className="border rounded-lg overflow-hidden">
                      {/* Goal Header - Clickable Accordion */}
                      <button
                        onClick={() => toggleGoal(areaIdx, goalIdx)}
                        className="w-full p-3 text-left hover:bg-gray-50 transition flex items-start gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 ${progressColor.bg}`}></div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">{goal.title}</div>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                              <div className={`${progressColor.bg} h-1.5 rounded-full`} style={{ width: `${goal.progress}%` }}></div>
                            </div>
                            <span className={`text-xs font-bold ${progressColor.text}`}>{goal.progress}%</span>
                          </div>
                          <div className="text-xs text-gray-400 mt-1">Due: {goal.dueDate}</div>
                        </div>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Expanded Content - Objectives & Actions */}
                      {isExpanded && (
                        <div className="border-t bg-gray-50 p-3 space-y-3">
                          {goal.objectives.map((objective, objIdx) => (
                            <div key={objIdx} className="bg-white rounded-lg p-3 border">
                              <div className="flex items-center justify-between mb-2">
                                <div className="font-medium text-xs text-gray-700">{objective.title}</div>
                                <span className="text-xs text-gray-500">{objective.progress}%</span>
                              </div>
                              <div className="bg-gray-100 rounded-full h-1 mb-3">
                                <div className={`${getProgressColor(objective.progress).bg} h-1 rounded-full`} style={{ width: `${objective.progress}%` }}></div>
                              </div>
                              {/* Actions List */}
                              <div className="space-y-1.5">
                                {objective.actions.map((action, actIdx) => (
                                  <div key={actIdx} className="flex items-start gap-2 text-xs">
                                    <span className={action.done ? 'text-green-500' : 'text-gray-300'}>
                                      {action.done ? '✓' : '○'}
                                    </span>
                                    <span className={action.done ? 'text-gray-500 line-through' : 'text-gray-700'}>
                                      {action.text}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientSessionNotesTab({ client, onOpenSession }) {
  const sessions = [
    { id: 8, status: "Draft ready", theme: "Navigating team conflict while maintaining authentic leadership", date: new Date(client.lastSession) },
    { id: 7, status: "Sent", theme: "Delegation breakthrough - releasing control with confidence", date: new Date(new Date(client.lastSession).setDate(new Date(client.lastSession).getDate() - 7)) },
    { id: 6, status: "Sent", theme: "Work-life integration: setting boundaries that honor both", date: new Date(new Date(client.lastSession).setDate(new Date(client.lastSession).getDate() - 14)) },
    { id: 5, status: "Draft generating", theme: "Exploring identity shift from doer to leader", date: new Date(new Date(client.lastSession).setDate(new Date(client.lastSession).getDate() - 21)) },
    { id: 4, status: "Waiting for transcript", theme: "Strategy session: scaling without losing soul", date: new Date(new Date(client.lastSession).setDate(new Date(client.lastSession).getDate() - 28)) }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Session Notes ({client.notes})</h3>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow">
          + New Note
        </button>
      </div>

      {/* Table Header */}
      <div className="bg-gray-100 px-4 py-2 rounded-t-lg grid grid-cols-12 gap-4 text-sm font-semibold text-gray-700">
        <div className="col-span-1">Session</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-6">Theme</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-1">Actions</div>
      </div>

      {/* Session Rows */}
      <div className="space-y-2">
        {sessions.map((session) => (
          <button
            key={session.id}
            onClick={() => onOpenSession && onOpenSession(`${client.id}-${session.id}`)}
            className="w-full bg-white px-4 py-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer text-left border border-gray-200 hover:border-teal-400"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Session Number */}
              <div className="col-span-1">
                <div className="font-bold text-gray-900">#{session.id}</div>
              </div>

              {/* Date */}
              <div className="col-span-2">
                <div className="text-sm text-gray-600">{session.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
              </div>

              {/* Theme */}
              <div className="col-span-6">
                <div className="text-sm font-medium text-gray-900 leading-tight">{session.theme}</div>
              </div>

              {/* Status */}
              <div className="col-span-2">
                <span className={[
                  "text-xs px-3 py-1 rounded-full font-medium inline-block",
                  session.status === "Draft ready" ? "bg-yellow-100 text-yellow-800" :
                  session.status === "Sent" ? "bg-green-100 text-green-800" :
                  session.status === "Draft generating" ? "bg-blue-100 text-blue-800" :
                  "bg-gray-100 text-gray-600"
                ].join(" ")}>
                  {session.status}
                </span>
              </div>

              {/* Actions */}
              <div className="col-span-1 text-right">
                {session.status === "Draft ready" && (
                  <span className="text-teal-600 text-xs font-medium">Review →</span>
                )}
                {session.status === "Sent" && (
                  <span className="text-gray-400 text-xs">View</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Notes about the interactive features */}
      <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 p-4 rounded-lg">
        <div className="text-xs font-semibold text-teal-900 mb-2">💡 Interactive Features</div>
        <div className="text-xs text-gray-700 space-y-1">
          <div>• Click any session to view full notes with 6 sections (Summary, Insights, Inquiries, Invitations, Resources, Next Steps)</div>
          <div>• "Draft ready" sessions open editor with AI modify options</div>
          <div>• Use Sage to: shorten notes, change tone, draft conversations (NVC style), modify template</div>
          <div>• "View Transcript" button shows original recording</div>
        </div>
      </div>
    </div>
  );
}

function ClientT15PrepTab({ client, onOpenT15 }) {
  return (
    <div className="space-y-6">
      <button
        onClick={() => onOpenT15 && onOpenT15(client)}
        className="w-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 p-6 rounded-xl hover:shadow-lg transition text-left"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-blue-900 mb-2 text-lg">Pre-Session Preparation</h3>
            <p className="text-sm text-gray-700 mb-3">
              Complete this 15 minutes before your session with {client.name}. Your responses will inform the AI-generated session notes.
            </p>
            <div className="text-sm font-medium text-blue-700">→ Click to open full T-15 Prep</div>
          </div>
          <div className="text-4xl">📋</div>
        </div>
      </button>

      {client.nextSession && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Next Session: {new Date(client.nextSession).toLocaleDateString()}</h4>
            <div className="text-sm text-gray-600">
              at {new Date(client.nextSession).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">What do you want to focus on in this session?</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Key topics, questions, or areas to explore..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Review from last session</label>
              <div className="p-3 bg-gray-50 rounded border text-sm text-gray-600">
                Last session: Discussed {client.goals[0].toLowerCase()}. Client committed to taking action on leadership development.
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Client's current context</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="What's happening in their world right now..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Questions to explore</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Powerful questions you might ask..."
              ></textarea>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
                Save Prep
              </button>
              <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
                Generate AI Suggestions
              </button>
            </div>
          </div>
        </div>
      )}

      {!client.nextSession && (
        <div className="bg-white p-6 rounded-lg shadow text-center text-gray-600">
          No upcoming session scheduled. Schedule a session to prepare.
        </div>
      )}
    </div>
  );
}

// 24/7 Companion Chat Log Tab
function ClientCompanionTab({ client }) {
  const companionSessions = [
    {
      date: "Jan 18, 2026",
      summary: "Processed anxiety about upcoming board presentation",
      mood: "anxious → calm",
      duration: "12 min",
      sharedWithCoach: true,
      messages: [
        { role: "client", text: "I'm really nervous about the board presentation next week. I keep catastrophizing about all the ways it could go wrong." },
        { role: "companion", text: "I hear that this presentation is weighing heavily on you. Let's explore what specifically feels most daunting. What scenario keeps coming up when you imagine it going wrong?" },
        { role: "client", text: "That they'll ask about Q3 numbers and I won't have a good answer for why we missed the target." },
        { role: "companion", text: "That's a concrete fear we can work with. What IS your current thinking on the Q3 miss? And what might be a way to frame it that's both honest and forward-looking?" }
      ]
    },
    {
      date: "Jan 15, 2026",
      summary: "Worked through difficult conversation with direct report",
      mood: "frustrated → resolved",
      duration: "18 min",
      sharedWithCoach: true,
      messages: []
    },
    {
      date: "Jan 12, 2026",
      summary: "Reflected on work-life balance commitments",
      mood: "reflective",
      duration: "8 min",
      sharedWithCoach: false,
      messages: []
    },
    {
      date: "Jan 10, 2026",
      summary: "Prepared for coaching session - reviewed goals",
      mood: "focused",
      duration: "15 min",
      sharedWithCoach: true,
      messages: []
    },
    {
      date: "Jan 7, 2026",
      summary: "Late night thoughts on career direction",
      mood: "contemplative",
      duration: "22 min",
      sharedWithCoach: false,
      messages: []
    }
  ];

  const [expandedSession, setExpandedSession] = React.useState(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">24/7 Companion Chat Log</h2>
          <p className="text-sm text-gray-500 mt-1">Conversations {client.name} has chosen to share with you</p>
        </div>
        <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">
          {companionSessions.filter(s => s.sharedWithCoach).length} shared · {companionSessions.filter(s => !s.sharedWithCoach).length} private
        </div>
      </div>

      <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🔒</span>
          <div className="text-sm text-teal-800">
            <span className="font-medium">Privacy Protected:</span> {client.name} controls what conversations are shared with you.
            Private conversations are counted but never visible. This builds trust and encourages authentic engagement.
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {companionSessions.map((session, i) => (
          <div
            key={i}
            className={`bg-white rounded-lg shadow overflow-hidden ${!session.sharedWithCoach ? 'opacity-50' : ''}`}
          >
            <button
              onClick={() => session.sharedWithCoach && setExpandedSession(expandedSession === i ? null : i)}
              className="w-full p-4 text-left hover:bg-gray-50 transition"
              disabled={!session.sharedWithCoach}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-medium text-gray-900">{session.date}</span>
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full">{session.duration}</span>
                    {!session.sharedWithCoach && (
                      <span className="text-xs px-2 py-0.5 bg-gray-200 text-gray-500 rounded-full">Private</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{session.summary}</p>
                  <p className="text-xs text-gray-500 mt-1">Mood: {session.mood}</p>
                </div>
                {session.sharedWithCoach && session.messages.length > 0 && (
                  <span className="text-gray-400">{expandedSession === i ? '▼' : '▶'}</span>
                )}
              </div>
            </button>

            {expandedSession === i && session.messages.length > 0 && (
              <div className="border-t bg-gray-50 p-4 space-y-3">
                {session.messages.map((msg, j) => (
                  <div key={j} className={`flex ${msg.role === 'client' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.role === 'client'
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-white border text-gray-700'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                <p className="text-xs text-center text-gray-400 mt-4">Showing excerpt · Full conversation available</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientResourcesTab({ client }) {
  const sharedResources = [
    { name: "Leadership Assessment Framework", sharedDate: "2026-01-05", type: "Framework" },
    { name: "Goal Setting Template", sharedDate: "2025-12-15", type: "Template" },
    { name: "Executive Presence Checklist", sharedDate: "2025-11-20", type: "Worksheet" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Shared Resources</h3>
        <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
          + Share Resource
        </button>
      </div>

      {sharedResources.length > 0 ? (
        <div className="space-y-3">
          {sharedResources.map((resource, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium">{resource.name}</div>
                  <div className="text-sm text-gray-600">
                    Shared on {new Date(resource.sharedDate).toLocaleDateString()} • {resource.type}
                  </div>
                </div>
                <button className="text-sm text-blue-600 hover:underline">View</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow text-center text-gray-600">
          No resources shared yet. Share resources from the Resource Library.
        </div>
      )}
    </div>
  );
}

// ============ SCHEDULE PAGE ============
function SchedulePage() {
  const [view, setView] = React.useState('week'); // day, week, month, year
  const today = new Date();
  const weekDays = Array.from({length: 7}, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return date;
  });

  // Life Areas: Personal Wellbeing, Family, Financial/Business, Community, Legacy
  const scheduleItems = [
    // Monday
    { area: 'Personal Wellbeing', title: 'Morning Stillness', day: 0, time: '6:00 AM', duration: '1h', color: 'purple' },
    { area: 'Financial/Business', title: 'Content Creation (Coaching Business)', day: 0, time: '9:00 AM', duration: '2h', color: 'teal' },
    { area: 'Financial/Business', title: 'Session: Sarah Chen', day: 0, time: '2:00 PM', duration: '1h', color: 'teal' },
    { area: 'Family', title: 'Just Dance with Kids', day: 0, time: '6:00 PM', duration: '30m', color: 'pink' },

    // Tuesday
    { area: 'Personal Wellbeing', title: 'Morning Stillness', day: 1, time: '6:00 AM', duration: '1h', color: 'purple' },
    { area: 'Financial/Business', title: 'Session: Marcus Williams', day: 1, time: '10:00 AM', duration: '1h', color: 'teal' },
    { area: 'Financial/Business', title: 'Invoice Clients', day: 1, time: '12:00 PM', duration: '30m', color: 'teal' },
    { area: 'Family', title: 'Swimming with Kids', day: 1, time: '4:00 PM', duration: '1h', color: 'pink' },
    { area: 'Personal Wellbeing', title: 'Couples Therapy', day: 1, time: '7:00 PM', duration: '1h', color: 'purple' },

    // Wednesday
    { area: 'Personal Wellbeing', title: 'Morning Stillness', day: 2, time: '6:00 AM', duration: '1h', color: 'purple' },
    { area: 'Legacy & Impact', title: 'Course Development', day: 2, time: '9:00 AM', duration: '3h', color: 'orange' },
    { area: 'Financial/Business', title: 'Session: Jennifer Martinez', day: 2, time: '3:30 PM', duration: '1h', color: 'teal' },
    { area: 'Family', title: 'Music Practice', day: 2, time: '6:00 PM', duration: '30m', color: 'pink' },

    // Thursday
    { area: 'Personal Wellbeing', title: 'Morning Stillness', day: 3, time: '6:00 AM', duration: '1h', color: 'purple' },
    { area: 'Financial/Business', title: 'Session: David Park', day: 3, time: '9:00 AM', duration: '1h', color: 'teal' },
    { area: 'Financial/Business', title: 'Session: James Rodriguez', day: 3, time: '11:00 AM', duration: '1h', color: 'teal' },
    { area: 'Personal Wellbeing', title: 'Dermatology Checkup', day: 3, time: '2:00 PM', duration: '1h', color: 'purple' },
    { area: 'Family', title: 'Board Games Night', day: 3, time: '7:00 PM', duration: '1h', color: 'pink' },

    // Friday
    { area: 'Personal Wellbeing', title: 'Morning Stillness', day: 4, time: '6:00 AM', duration: '1h', color: 'purple' },
    { area: 'Financial/Business', title: 'Session: Lisa Patel', day: 4, time: '2:30 PM', duration: '1h', color: 'teal' },
    { area: 'Financial/Business', title: 'Week Review & Planning', day: 4, time: '4:00 PM', duration: '1h', color: 'teal' },
    { area: 'Family', title: 'Family Movie Night', day: 4, time: '7:00 PM', duration: '2h', color: 'pink' },

    // Saturday
    { area: 'Family', title: 'Nature Walk & Exploration', day: 5, time: '10:00 AM', duration: '3h', color: 'pink' },
    { area: 'Family', title: 'Birthday Gift Shopping', day: 5, time: '3:00 PM', duration: '1h', color: 'pink' },
    { area: 'Family', title: 'Date Night with Oana', day: 5, time: '7:00 PM', duration: '3h', color: 'pink' },

    // Sunday
    { area: 'Family', title: 'Family Videos & Gratitude', day: 6, time: '10:00 AM', duration: '2h', color: 'pink' },
    { area: 'Financial/Business', title: 'Session: Michael O\'Brien', day: 6, time: '10:30 AM', duration: '1h', color: 'teal' },
    { area: 'Legacy & Impact', title: 'Strategic Planning', day: 6, time: '2:00 PM', duration: '2h', color: 'orange' },
    { area: 'Community & Relationships', title: 'Call old mentor', day: 6, time: '4:00 PM', duration: '30m', color: 'blue' },
  ];

  const getColorClasses = (color) => {
    const colors = {
      teal: 'bg-teal-100 border-teal-400 text-teal-900',
      purple: 'bg-purple-100 border-purple-400 text-purple-900',
      pink: 'bg-pink-100 border-pink-400 text-pink-900',
      blue: 'bg-blue-100 border-blue-400 text-blue-900',
      orange: 'bg-orange-100 border-orange-400 text-orange-900',
    };
    return colors[color] || colors.teal;
  };

  const getAreaIcon = (area) => {
    const icons = {
      'Financial/Business': '💼',
      'Personal Wellbeing': '🧘',
      'Family': '👨‍👩‍👧‍👦',
      'Community & Relationships': '🤝',
      'Legacy & Impact': '🌟',
    };
    return icons[area] || '📅';
  };

  return (
    <div className="p-8 overflow-auto h-full bg-gray-50">
      {/* AI Scheduling Prompt Bar */}
      <div className="mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🤖</div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Tell me what you want to schedule and I'll automatically find time that works for you both..."
              className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <div className="text-xs text-teal-50 mt-2">
              Sage can propose times, send calendar invites, or email suggestions with one command
            </div>
          </div>
          <button className="px-6 py-2 bg-white text-teal-900 rounded-lg hover:bg-teal-50 font-semibold">
            Schedule
          </button>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Schedule</h2>
          <p className="text-gray-600">Your integrated calendar - all life areas color-coded</p>
        </div>
        <div className="flex gap-3">
          {/* View Toggles */}
          <div className="flex gap-1 border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setView('day')}
              className={`px-3 py-2 text-sm font-medium ${view === 'day' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Day
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-3 py-2 text-sm font-medium ${view === 'week' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Week
            </button>
            <button
              onClick={() => setView('month')}
              className={`px-3 py-2 text-sm font-medium ${view === 'month' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Month
            </button>
            <button
              onClick={() => setView('year')}
              className={`px-3 py-2 text-sm font-medium ${view === 'year' ? 'bg-teal-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Year
            </button>
          </div>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow">
            + Add Event
          </button>
        </div>
      </div>

      {/* Legend - Life Areas */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <div className="flex gap-4 flex-wrap items-center text-sm">
          <div className="font-semibold text-gray-600">Life Areas:</div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-teal-100 border border-teal-400 rounded"></div>
            <span>Financial/Business</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-100 border border-purple-400 rounded"></div>
            <span>Personal Wellbeing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pink-100 border border-pink-400 rounded"></div>
            <span>Family</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 border border-blue-400 rounded"></div>
            <span>Community & Relationships</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-100 border border-orange-400 rounded"></div>
            <span>Legacy & Impact</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="grid grid-cols-7 border-b bg-gray-50">
          {weekDays.map(date => {
            const isToday = date.toDateString() === today.toDateString();
            return (
              <div key={date.toISOString()} className={`p-4 text-center border-r last:border-r-0 ${isToday ? 'bg-blue-50' : ''}`}>
                <div className="text-sm text-gray-600 font-medium">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div className={`text-2xl font-bold mt-1 ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
                  {date.getDate()}
                </div>
                {isToday && <div className="text-xs text-blue-600 font-semibold mt-1">Today</div>}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-7">
          {weekDays.map((date, dayIndex) => {
            const dayItems = scheduleItems.filter(item => item.day === dayIndex);
            const isToday = date.toDateString() === today.toDateString();

            return (
              <div key={date.toISOString()} className={`min-h-[400px] p-3 border-r last:border-r-0 ${isToday ? 'bg-blue-50/30' : ''}`}>
                <div className="space-y-2">
                  {dayItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`${getColorClasses(item.color)} border-l-4 rounded p-2 text-xs hover:shadow-md transition cursor-pointer`}
                    >
                      <div className="flex items-start gap-1">
                        <span>{getAreaIcon(item.area)}</span>
                        <div className="flex-1">
                          <div className="font-semibold leading-tight">{item.title}</div>
                          <div className="text-xs opacity-75 mt-0.5">{item.time}</div>
                          <div className="text-xs opacity-60">{item.duration}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Summary Stats */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-blue-600">8</div>
          <div className="text-sm text-gray-600">Coaching Sessions</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-indigo-600">7h</div>
          <div className="text-sm text-gray-600">Deep Work Blocks</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-pink-600">12h</div>
          <div className="text-sm text-gray-600">Family Time</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold text-purple-600">7h</div>
          <div className="text-sm text-gray-600">Stillness & Self-Care</div>
        </div>
      </div>
    </div>
  );
}

// ============ RESOURCE LIBRARY PAGE ============
function ResourceLibraryPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedType, setSelectedType] = React.useState('all');
  const [selectedTheme, setSelectedTheme] = React.useState('all');
  const [dateFilter, setDateFilter] = React.useState('all');

  const categories = [
    { name: "Frameworks", count: 12 },
    { name: "Templates", count: 8 },
    { name: "Articles", count: 24 },
    { name: "Tools", count: 6 }
  ];

  const resources = [
    { title: "Leadership Assessment Framework", type: "Frameworks", theme: "Leadership", date: "2024-01-15", keywords: ["leadership", "assessment", "feedback"] },
    { title: "Goal Setting Template", type: "Templates", theme: "Goals", date: "2024-01-10", keywords: ["goals", "planning", "objectives"] },
    { title: "Transition Planning Guide", type: "Articles", theme: "Career Transitions", date: "2024-01-08", keywords: ["transition", "career", "change"] },
    { title: "Executive Presence Checklist", type: "Tools", theme: "Leadership", date: "2024-01-05", keywords: ["executive", "presence", "leadership"] },
    { title: "Values Clarification Exercise", type: "Frameworks", theme: "Values", date: "2023-12-20", keywords: ["values", "clarity", "purpose"] },
    { title: "Stakeholder Mapping Tool", type: "Tools", theme: "Communication", date: "2023-12-15", keywords: ["stakeholders", "relationships", "mapping"] },
    { title: "Feedback Conversation Script", type: "Templates", theme: "Communication", date: "2023-12-10", keywords: ["feedback", "conversation", "communication"] },
    { title: "Work-Life Integration Model", type: "Articles", theme: "Balance", date: "2023-12-01", keywords: ["balance", "integration", "wellbeing"] }
  ];

  // Filter resources based on search and filters
  const filteredResources = resources.filter(resource => {
    const matchesSearch = searchQuery === '' ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.keywords.some(kw => kw.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesTheme = selectedTheme === 'all' || resource.theme === selectedTheme;

    let matchesDate = true;
    if (dateFilter !== 'all') {
      const resourceDate = new Date(resource.date);
      const now = new Date();
      if (dateFilter === 'week') {
        matchesDate = (now - resourceDate) / (1000 * 60 * 60 * 24) <= 7;
      } else if (dateFilter === 'month') {
        matchesDate = (now - resourceDate) / (1000 * 60 * 60 * 24) <= 30;
      } else if (dateFilter === 'year') {
        matchesDate = (now - resourceDate) / (1000 * 60 * 60 * 24) <= 365;
      }
    }

    return matchesSearch && matchesType && matchesTheme && matchesDate;
  });

  return (
    <div className="p-8 overflow-auto h-full bg-gray-50">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Resource Library</h2>
          <p className="text-gray-600">Frameworks, templates, articles, and tools for your coaching practice</p>
        </div>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow">
          + Add Resource
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6 bg-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🔍</div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, keywords, or themes..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 bg-white p-4 rounded-xl shadow">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="font-semibold text-gray-700">Filters:</div>

          {/* Resource Type Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Type:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">All Types</option>
              <option value="Frameworks">Frameworks</option>
              <option value="Templates">Templates</option>
              <option value="Articles">Articles</option>
              <option value="Tools">Tools</option>
            </select>
          </div>

          {/* Theme Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Theme:</label>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">All Themes</option>
              <option value="Leadership">Leadership</option>
              <option value="Goals">Goals</option>
              <option value="Communication">Communication</option>
              <option value="Career Transitions">Career Transitions</option>
              <option value="Values">Values</option>
              <option value="Balance">Balance</option>
            </select>
          </div>

          {/* Date Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Date:</label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">All Time</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
            </select>
          </div>

          {/* Clear All Filters */}
          {(selectedType !== 'all' || selectedTheme !== 'all' || dateFilter !== 'all') && (
            <button
              onClick={() => {
                setSelectedType('all');
                setSelectedTheme('all');
                setDateFilter('all');
              }}
              className="text-sm text-teal-600 hover:text-teal-700 font-medium"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {categories.map(cat => (
          <div
            key={cat.name}
            onClick={() => setSelectedType(cat.name)}
            className={`bg-white p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer ${
              selectedType === cat.name ? 'ring-2 ring-teal-500 bg-teal-50' : ''
            }`}
          >
            <h3 className="font-semibold mb-2">{cat.name}</h3>
            <p className="text-2xl font-bold text-gray-600">{cat.count}</p>
          </div>
        ))}
      </div>

      {/* Resources List */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">
            {searchQuery || selectedType !== 'all' || selectedTheme !== 'all' || dateFilter !== 'all'
              ? `Filtered Resources (${filteredResources.length})`
              : 'All Resources'}
          </h3>
          <div className="text-sm text-gray-500">
            Showing {filteredResources.length} of {resources.length} resources
          </div>
        </div>

        <div className="space-y-3">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, idx) => (
              <div key={idx} className="flex items-center justify-between border-b pb-3 hover:bg-gray-50 p-2 rounded transition">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{resource.title}</div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded">{resource.type}</span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded">{resource.theme}</span>
                    <span>{new Date(resource.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {resource.keywords.map((kw, i) => (
                      <span key={i} className="text-xs text-gray-400">#{kw}</span>
                    ))}
                  </div>
                </div>
                <button className="px-4 py-2 text-sm text-teal-600 hover:bg-teal-50 rounded-lg font-medium">View</button>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl mb-2">🔍</div>
              <div>No resources match your filters</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('all');
                  setSelectedTheme('all');
                  setDateFilter('all');
                }}
                className="mt-3 text-teal-600 hover:underline text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============ AI COMPANION PAGE ============
function AICompanionPage() {
  return (
    <div className="p-8 overflow-auto h-full">
      <h2 className="text-2xl font-semibold mb-6">Sage</h2>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="text-sm text-gray-600 mb-4">
          Your Sage is context-aware and capable of handling tasks across all aspects of your client's AND your life and work, from mundane logistics to existential pondering.
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <div className="font-semibold mb-2">Session Prep</div>
            <p className="text-sm text-gray-600">Review client history, suggest questions</p>
          </div>
          <div className="p-4 bg-blue-50 rounded">
            <div className="font-semibold mb-2">Note Drafting</div>
            <p className="text-sm text-gray-600">Auto-generate session summaries</p>
          </div>
          <div className="p-4 bg-blue-50 rounded">
            <div className="font-semibold mb-2">Insights</div>
            <p className="text-sm text-gray-600">Pattern recognition across clients</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold mb-4">Conversation</h3>
        <div className="mb-4 p-4 bg-gray-50 rounded">
          <div className="text-sm font-medium text-gray-600 mb-1">Sage</div>
          <p>How can I assist you today? I have context on your upcoming sessions and recent client work.</p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="What do you need right now?"
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// ============ BUSINESS MANAGEMENT PAGE ============
function BusinessManagementPage({ selectedTab, setSelectedTab }) {
  const [drillDownView, setDrillDownView] = React.useState(null);

  const tabs = [
    "Client Impact & Outcomes",
    "Business Performance",
    "Contracts & Legal",
    "Billing & Invoicing",
    "Growth Hub"
  ];

  // Drill-down view for detailed charts
  if (drillDownView) {
    return (
      <div className="p-8 overflow-auto h-full bg-gray-50">
        <button
          onClick={() => setDrillDownView(null)}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
        >
          ← Back to {selectedTab}
        </button>

        {drillDownView === 'engagement' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Client Engagement Deep Dive</h2>

            {/* Visual Chart: Engagement Over Time */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold mb-4">Engagement Trend (Last 12 Months)</h3>
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {[65, 72, 68, 78, 82, 75, 88, 85, 90, 87, 92, 94].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-gradient-to-t from-teal-600 to-teal-400 rounded-t-lg transition-all hover:from-teal-500 hover:to-teal-300"
                      style={{ height: `${val * 2.5}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                <span className="font-semibold text-teal-600">+44%</span> improvement in engagement over the year
              </div>
            </div>

            {/* Engagement by Client Type */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold mb-4">Engagement by Client Type</h3>
                <div className="space-y-4">
                  {[
                    { type: 'Executive', pct: 96, color: 'bg-purple-500' },
                    { type: 'Leadership Development', pct: 92, color: 'bg-blue-500' },
                    { type: 'Career Transition', pct: 88, color: 'bg-teal-500' },
                    { type: 'New Managers', pct: 85, color: 'bg-green-500' }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{item.type}</span>
                        <span className="font-semibold">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className={`${item.color} h-3 rounded-full`} style={{ width: `${item.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Donut Chart: Session Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold mb-4">Session Distribution</h3>
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Donut chart using CSS gradients */}
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        background: 'conic-gradient(#14b8a6 0% 40%, #8b5cf6 40% 70%, #f59e0b 70% 85%, #ef4444 85% 100%)'
                      }}
                    ></div>
                    <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold">128</div>
                        <div className="text-xs text-gray-500">Total Sessions</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-teal-500 rounded"></div> 1:1 Coaching (40%)</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded"></div> Group (30%)</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded"></div> Follow-up (15%)</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded"></div> Intro (15%)</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {drillDownView === 'goals' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Goal Attainment Analytics</h2>

            {/* Goal Completion Funnel */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold mb-4">Goal Achievement Funnel</h3>
              <div className="flex flex-col items-center space-y-2">
                {[
                  { stage: 'Goals Set', count: 156, pct: 100, color: 'bg-gray-400' },
                  { stage: 'In Progress', count: 142, pct: 91, color: 'bg-blue-400' },
                  { stage: 'On Track', count: 118, pct: 76, color: 'bg-teal-400' },
                  { stage: 'Achieved', count: 98, pct: 63, color: 'bg-green-500' }
                ].map((item, idx) => (
                  <div key={idx} className="w-full flex items-center gap-4">
                    <div className="w-24 text-right text-sm text-gray-600">{item.stage}</div>
                    <div className="flex-1 h-12 bg-gray-100 rounded-lg overflow-hidden">
                      <div
                        className={`h-full ${item.color} flex items-center justify-end px-4 transition-all`}
                        style={{ width: `${item.pct}%` }}
                      >
                        <span className="text-white font-bold">{item.count}</span>
                      </div>
                    </div>
                    <div className="w-16 text-sm font-semibold">{item.pct}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals by Life Area */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold mb-4">Goal Progress by Life Area</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { area: 'Professional', icon: '💼', achieved: 42, total: 56, color: 'blue' },
                  { area: 'Health', icon: '🏃', achieved: 18, total: 32, color: 'green' },
                  { area: 'Relationships', icon: '❤️', achieved: 22, total: 28, color: 'pink' },
                  { area: 'Financial', icon: '💰', achieved: 8, total: 15, color: 'emerald' },
                  { area: 'Learning', icon: '📚', achieved: 5, total: 18, color: 'purple' },
                  { area: 'Community', icon: '🌍', achieved: 3, total: 7, color: 'orange' }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-gray-800">{item.area}</div>
                    <div className="text-2xl font-bold text-teal-600 my-2">{Math.round(item.achieved / item.total * 100)}%</div>
                    <div className="text-xs text-gray-500">{item.achieved} of {item.total} achieved</div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-${item.color}-500 h-2 rounded-full`} style={{ width: `${item.achieved / item.total * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {drillDownView === 'revenue' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Revenue Analytics</h2>

            {/* Revenue Trend Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold mb-4">Monthly Revenue (Last 12 Months)</h3>
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {[8.2, 9.1, 8.8, 10.2, 11.5, 10.8, 12.1, 11.8, 13.2, 12.5, 14.1, 12.8].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="text-xs font-semibold text-gray-600 mb-1">${val}K</div>
                    <div
                      className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all hover:from-green-500 hover:to-green-300"
                      style={{ height: `${val * 15}px` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-2">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-8 text-sm">
                <div><span className="font-semibold text-green-600">$135.1K</span> Total Revenue</div>
                <div><span className="font-semibold text-green-600">+56%</span> YoY Growth</div>
                <div><span className="font-semibold text-gray-600">$11.3K</span> Monthly Average</div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold mb-4">Revenue by Service Type</h3>
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        background: 'conic-gradient(#14b8a6 0% 55%, #8b5cf6 55% 80%, #f59e0b 80% 95%, #6b7280 95% 100%)'
                      }}
                    ></div>
                    <div className="absolute inset-5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="flex items-center gap-2"><div className="w-3 h-3 bg-teal-500 rounded"></div> 1:1 Coaching</span><span className="font-semibold">$74.3K (55%)</span></div>
                  <div className="flex justify-between"><span className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded"></div> Group Programs</span><span className="font-semibold">$33.8K (25%)</span></div>
                  <div className="flex justify-between"><span className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded"></div> Workshops</span><span className="font-semibold">$20.3K (15%)</span></div>
                  <div className="flex justify-between"><span className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-500 rounded"></div> Other</span><span className="font-semibold">$6.8K (5%)</span></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold mb-4">Top Clients by Revenue</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Marcus Williams', revenue: '$24,000', sessions: 24 },
                    { name: 'Sarah Chen', revenue: '$18,000', sessions: 18 },
                    { name: 'Elena Rodriguez', revenue: '$15,000', sessions: 15 },
                    { name: 'James O\'Brien', revenue: '$12,000', sessions: 12 },
                    { name: 'Priya Patel', revenue: '$9,600', sessions: 8 }
                  ].map((client, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">{client.name}</div>
                        <div className="text-xs text-gray-500">{client.sessions} sessions</div>
                      </div>
                      <div className="text-lg font-bold text-green-600">{client.revenue}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {drillDownView === 'retention' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Client Retention Analytics</h2>

            {/* Retention Cohort Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold mb-4">Retention by Cohort (Month Started)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-2 text-left">Cohort</th>
                      <th className="p-2 text-center">M1</th>
                      <th className="p-2 text-center">M2</th>
                      <th className="p-2 text-center">M3</th>
                      <th className="p-2 text-center">M4</th>
                      <th className="p-2 text-center">M5</th>
                      <th className="p-2 text-center">M6</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cohort: 'Jul 2025', data: [100, 95, 92, 88, 85, 82] },
                      { cohort: 'Aug 2025', data: [100, 97, 94, 91, 88, null] },
                      { cohort: 'Sep 2025', data: [100, 96, 93, 90, null, null] },
                      { cohort: 'Oct 2025', data: [100, 98, 95, null, null, null] },
                      { cohort: 'Nov 2025', data: [100, 97, null, null, null, null] },
                      { cohort: 'Dec 2025', data: [100, null, null, null, null, null] }
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="p-2 font-medium">{row.cohort}</td>
                        {row.data.map((val, vidx) => (
                          <td key={vidx} className="p-2 text-center">
                            {val !== null ? (
                              <span
                                className={`px-2 py-1 rounded text-white text-xs font-bold ${
                                  val >= 95 ? 'bg-green-500' : val >= 85 ? 'bg-teal-500' : val >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                              >
                                {val}%
                              </span>
                            ) : (
                              <span className="text-gray-300">-</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Churn Analysis */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold mb-4">Reasons for Client Departure</h3>
                <div className="space-y-3">
                  {[
                    { reason: 'Achieved Goals', pct: 45, color: 'bg-green-500' },
                    { reason: 'Budget Constraints', pct: 25, color: 'bg-yellow-500' },
                    { reason: 'Schedule Conflicts', pct: 15, color: 'bg-blue-500' },
                    { reason: 'Changed Roles', pct: 10, color: 'bg-purple-500' },
                    { reason: 'Other', pct: 5, color: 'bg-gray-400' }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.reason}</span>
                        <span className="font-semibold">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold mb-4">Client Lifetime Value</h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-teal-600 mb-2">$8,400</div>
                  <div className="text-gray-500 mb-6">Average LTV per client</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">14</div>
                      <div className="text-gray-500">Avg. months engaged</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">$600</div>
                      <div className="text-gray-500">Avg. monthly value</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-8 overflow-auto h-full">
      <h2 className="text-2xl font-semibold mb-6">Business Management</h2>

      <div className="flex gap-2 mb-6 border-b overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={[
              "px-4 py-2 font-medium border-b-2 transition whitespace-nowrap",
              selectedTab === tab
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-600 hover:text-gray-900"
            ].join(" ")}
          >
            {tab}
          </button>
        ))}
      </div>

      {selectedTab === "Client Impact & Outcomes" && (
        <div className="space-y-6">
          {/* Clickable Metric Cards */}
          <div className="grid grid-cols-3 gap-6">
            <button
              onClick={() => setDrillDownView('engagement')}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2 text-gray-600">Engagement Metrics</h3>
                <span className="text-gray-400 group-hover:text-teal-600 transition">📊 →</span>
              </div>
              <div className="text-3xl font-bold mb-1">{mockClients.filter(c => c.status === "active").length}</div>
              <p className="text-sm text-gray-600">Active engagements</p>
              <div className="mt-2 text-xs text-teal-600 opacity-0 group-hover:opacity-100 transition">Click for detailed analytics</div>
            </button>
            <button
              onClick={() => setDrillDownView('engagement')}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2 text-gray-600">Session Frequency</h3>
                <span className="text-gray-400 group-hover:text-teal-600 transition">📊 →</span>
              </div>
              <div className="text-3xl font-bold mb-1">3.2</div>
              <p className="text-sm text-gray-600">Sessions/client/month</p>
              <div className="mt-2 text-xs text-teal-600 opacity-0 group-hover:opacity-100 transition">Click for detailed analytics</div>
            </button>
            <button
              onClick={() => setDrillDownView('retention')}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2 text-gray-600">Retention</h3>
                <span className="text-gray-400 group-hover:text-teal-600 transition">📊 →</span>
              </div>
              <div className="text-3xl font-bold mb-1">94%</div>
              <p className="text-sm text-gray-600">Client retention rate</p>
              <div className="mt-2 text-xs text-teal-600 opacity-0 group-hover:opacity-100 transition">Click for detailed analytics</div>
            </button>
          </div>

          {/* Clickable Progress Card */}
          <button
            onClick={() => setDrillDownView('goals')}
            className="w-full bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Progress Markers</h3>
              <span className="text-gray-400 group-hover:text-teal-600 transition">📊 View Charts →</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-sm">Clients achieving goals</span>
                <span className="font-semibold">78%</span>
              </div>
              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-sm">Avg goal completion rate</span>
                <span className="font-semibold">67%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Client satisfaction</span>
                <span className="font-semibold">4.8/5.0</span>
              </div>
            </div>
          </button>
        </div>
      )}

      {selectedTab === "Business Performance" && (
        <div className="space-y-6">
          {/* Clickable Metric Cards */}
          <div className="grid grid-cols-4 gap-6">
            <button
              onClick={() => setDrillDownView('engagement')}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2 text-gray-600">This Month</h3>
                <span className="text-gray-400 group-hover:text-teal-600 transition">📊</span>
              </div>
              <div className="text-3xl font-bold mb-1">32</div>
              <p className="text-sm text-gray-600">Sessions delivered</p>
            </button>
            <button
              onClick={() => setDrillDownView('revenue')}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2 text-gray-600">Revenue</h3>
                <span className="text-gray-400 group-hover:text-green-600 transition">💰</span>
              </div>
              <div className="text-3xl font-bold mb-1">$12.8K</div>
              <p className="text-sm text-gray-600">Monthly revenue</p>
            </button>
            <button
              onClick={() => setDrillDownView('revenue')}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-left group"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold mb-2 text-gray-600">Avg Session Value</h3>
                <span className="text-gray-400 group-hover:text-green-600 transition">💵</span>
              </div>
              <div className="text-3xl font-bold mb-1">$400</div>
              <p className="text-sm text-gray-600">Per session</p>
            </button>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-600">Growth</h3>
              <div className="text-3xl font-bold mb-1 text-green-600">+18%</div>
              <p className="text-sm text-gray-600">vs last month</p>
            </div>
          </div>

          {/* Client Mix with Visual Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Client Mix</h3>
            <div className="flex items-center gap-8">
              {/* Mini Donut Chart */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'conic-gradient(#8b5cf6 0% 60%, #14b8a6 60% 90%, #f59e0b 90% 100%)'
                  }}
                ></div>
                <div className="absolute inset-4 bg-white rounded-full"></div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500 rounded"></div> Executive Coaching</span>
                  <span className="font-medium">60%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 bg-teal-500 rounded"></div> Leadership Development</span>
                  <span className="font-medium">30%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500 rounded"></div> Career Transition</span>
                  <span className="font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === "Contracts & Legal" && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Client Agreements</h3>
            <div className="space-y-3">
              {mockClients.filter(c => c.status === "active").slice(0, 5).map(client => (
                <div key={client.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <div className="font-medium">{client.name}</div>
                    <div className="text-sm text-gray-600">Signed: Jan 2025</div>
                  </div>
                  <button className="text-sm text-blue-600 hover:underline">View Agreement</button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Waivers & Consents</h3>
              <p className="text-sm text-gray-600">All active clients have signed required forms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-3">Data & AI Consent</h3>
              <p className="text-sm text-gray-600">AI usage consent: 100% of clients</p>
            </div>
          </div>
        </div>
      )}

      {selectedTab === "Billing & Invoicing" && (
        <div className="space-y-6">
          {/* Financial Summary Cards */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="font-semibold mb-2 text-gray-600 text-sm">Paid This Month</h3>
              <div className="text-3xl font-bold mb-1 text-green-600">$11.6K</div>
              <p className="text-xs text-gray-500">From 29 sessions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold mb-2 text-gray-600 text-sm">Pending</h3>
              <div className="text-3xl font-bold mb-1 text-yellow-600">$2.8K</div>
              <p className="text-xs text-gray-500">4 invoices sent</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <h3 className="font-semibold mb-2 text-gray-600 text-sm">Overdue</h3>
              <div className="text-3xl font-bold mb-1 text-red-600">$1.4K</div>
              <p className="text-xs text-gray-500">2 invoices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-500">
              <h3 className="font-semibold mb-2 text-gray-600 text-sm">Recurring</h3>
              <div className="text-3xl font-bold mb-1 text-teal-600">6</div>
              <p className="text-xs text-gray-500">Active subscriptions</p>
            </div>
          </div>

          {/* Add Financial Info Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">Financial Information</h3>
                <p className="text-sm text-gray-600">Bank account, tax ID, payment processor settings</p>
              </div>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                Edit Financial Info
              </button>
            </div>
          </div>

          {/* Invoices Table - Square-style */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">Invoices</h3>
                  <p className="text-sm text-gray-600">Manage and track all client invoices</p>
                </div>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow">
                  + Create Invoice
                </button>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b text-xs font-semibold text-gray-600 uppercase">
              <div className="col-span-1">Invoice #</div>
              <div className="col-span-3">Client</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-2">Amount</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-2">Actions</div>
            </div>

            {/* Invoice Rows - Clickable */}
            <div className="divide-y">
              {[
                { id: "INV-2024-012", client: "Sarah Chen", date: "Jan 15, 2024", amount: "$1,600", status: "Paid", statusColor: "green", sessions: "4 sessions" },
                { id: "INV-2024-011", client: "Marcus Williams", date: "Jan 12, 2024", amount: "$800", status: "Pending", statusColor: "yellow", sessions: "2 sessions" },
                { id: "INV-2024-010", client: "Jennifer Martinez", date: "Jan 10, 2024", amount: "$400", status: "Sent", statusColor: "blue", sessions: "1 session" },
                { id: "INV-2024-009", client: "David Park", date: "Jan 8, 2024", amount: "$1,200", status: "Paid", statusColor: "green", sessions: "3 sessions" },
                { id: "INV-2024-008", client: "Lisa Patel", date: "Jan 5, 2024", amount: "$800", status: "Pending", statusColor: "yellow", sessions: "2 sessions" },
                { id: "INV-2024-007", client: "James Rodriguez", date: "Dec 28, 2023", amount: "$600", status: "Overdue", statusColor: "red", sessions: "1.5 sessions" },
                { id: "INV-2024-006", client: "Emma Thompson", date: "Dec 20, 2023", amount: "$1,200", status: "Paid", statusColor: "green", sessions: "3 sessions" },
                { id: "INV-2024-005", client: "Michael O'Brien", date: "Dec 18, 2023", amount: "$800", status: "Overdue", statusColor: "red", sessions: "2 sessions" },
                { id: "DRAFT-001", client: "Alex Rivera", date: "-", amount: "$400", status: "Draft", statusColor: "gray", sessions: "1 session" }
              ].map((invoice, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition items-center"
                >
                  <div className="col-span-1 font-mono text-sm text-gray-900">{invoice.id}</div>
                  <div className="col-span-3">
                    <div className="font-medium text-gray-900">{invoice.client}</div>
                    <div className="text-xs text-gray-500">{invoice.sessions}</div>
                  </div>
                  <div className="col-span-2 text-sm text-gray-600">{invoice.date}</div>
                  <div className="col-span-2 text-sm font-semibold text-gray-900">{invoice.amount}</div>
                  <div className="col-span-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        invoice.statusColor === 'green' ? 'bg-green-100 text-green-700 border border-green-300' :
                        invoice.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-700 border border-yellow-300' :
                        invoice.statusColor === 'red' ? 'bg-red-100 text-red-700 border border-red-300' :
                        invoice.statusColor === 'blue' ? 'bg-blue-100 text-blue-700 border border-blue-300' :
                        'bg-gray-100 text-gray-700 border border-gray-300'
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </div>
                  <div className="col-span-2 flex gap-2">
                    <button className="text-xs text-teal-600 hover:text-teal-700 font-medium">View</button>
                    {invoice.status === "Overdue" && (
                      <button className="text-xs text-red-600 hover:text-red-700 font-medium">Send Reminder</button>
                    )}
                    {invoice.status === "Pending" && (
                      <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">Mark Paid</button>
                    )}
                    {invoice.status === "Draft" && (
                      <button className="text-xs text-teal-600 hover:text-teal-700 font-medium">Edit</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-4">Connected Payment Processors</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-white font-bold">
                  $
                </div>
                <div>
                  <div className="font-medium">Square</div>
                  <div className="text-xs text-green-600">✓ Connected</div>
                </div>
              </div>
              <div className="border rounded-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <div className="font-medium">Stripe</div>
                  <div className="text-xs text-green-600">✓ Connected</div>
                </div>
              </div>
              <div className="border rounded-lg p-4 flex items-center gap-3 opacity-50">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded flex items-center justify-center text-white font-bold">
                  PP
                </div>
                <div>
                  <div className="font-medium">PayPal</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === "Growth Hub" && (
        <div className="space-y-6">
          {/* Section Toggle: Professional vs Personal */}
          <div className="flex gap-2 bg-gray-100 p-2 rounded-lg w-fit">
            <button className="px-6 py-2 bg-white rounded-lg font-medium shadow">Professional Growth</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium">Personal Growth</button>
          </div>

          {/* ICF Certification Tracking */}
          <div className="bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">🎓 ICF Certification Progress</h3>
                <p className="text-sm text-teal-50">Track your journey to the next credential level</p>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg">
                <div className="text-xs text-teal-50">Current Level</div>
                <div className="text-lg font-bold">ACC</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-xs text-teal-50 mb-1">Paid Client Hours</div>
                <div className="text-2xl font-bold mb-1">127 / 500</div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{width: '25.4%'}}></div>
                </div>
                <div className="text-xs text-teal-50 mt-1">For PCC Level</div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-xs text-teal-50 mb-1">Mentor Coaching</div>
                <div className="text-2xl font-bold mb-1">3 / 10</div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{width: '30%'}}></div>
                </div>
                <div className="text-xs text-teal-50 mt-1">Hours completed</div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <div className="text-xs text-teal-50 mb-1">CCE Credits</div>
                <div className="text-2xl font-bold mb-1">28 / 40</div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2" style={{width: '70%'}}></div>
                </div>
                <div className="text-xs text-teal-50 mt-1">For renewal</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-sm font-semibold mb-2">Next Steps for PCC:</div>
              <ul className="space-y-1 text-sm text-teal-50">
                <li>✓ ACC credential obtained</li>
                <li>✓ 60+ hours training completed</li>
                <li className="opacity-70">○ Complete 373 more paid client hours</li>
                <li className="opacity-70">○ Complete 7 more mentor coaching hours</li>
                <li className="opacity-70">○ Submit performance evaluation</li>
              </ul>
            </div>
          </div>

          {/* Session Metrics & ICF Competencies */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">📊 Session Metrics & ICF Competencies</h3>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <div className="text-xs text-teal-700 mb-1">Avg Talk Time</div>
                <div className="text-2xl font-bold text-teal-900">23%</div>
                <div className="text-xs text-teal-600 mt-1">↓ 3% this month</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-xs text-blue-700 mb-1">Powerful Questions</div>
                <div className="text-2xl font-bold text-blue-900">18/session</div>
                <div className="text-xs text-blue-600 mt-1">↑ 2 vs last month</div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="text-xs text-purple-700 mb-1">Pauses (3+ sec)</div>
                <div className="text-2xl font-bold text-purple-900">12</div>
                <div className="text-xs text-purple-600 mt-1">Per session avg</div>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                <div className="text-xs text-pink-700 mb-1">Client Talk Time</div>
                <div className="text-2xl font-bold text-pink-900">77%</div>
                <div className="text-xs text-pink-600 mt-1">↑ 5% this month</div>
              </div>
            </div>

            {/* ICF Competency Breakdown */}
            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3 text-sm text-gray-700">ICF Core Competencies - Last 10 Sessions</h4>
              <div className="space-y-2">
                {[
                  { name: "Demonstrates Ethical Practice", score: 92 },
                  { name: "Embodies a Coaching Mindset", score: 88 },
                  { name: "Establishes and Maintains Agreements", score: 85 },
                  { name: "Cultivates Trust and Safety", score: 94 },
                  { name: "Maintains Presence", score: 87 },
                  { name: "Listens Actively", score: 90 },
                  { name: "Evokes Awareness", score: 83 },
                  { name: "Facilitates Client Growth", score: 86 }
                ].map((comp, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-700">{comp.name}</span>
                      <span className="font-semibold text-gray-900">{comp.score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`rounded-full h-1.5 ${
                          comp.score >= 90 ? 'bg-green-500' :
                          comp.score >= 80 ? 'bg-teal-500' :
                          'bg-yellow-500'
                        }`}
                        style={{width: `${comp.score}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Client Feedback & Surveys */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">📝 Client Feedback & Surveys</h3>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm">
                Send Survey
              </button>
            </div>

            {/* Overall Satisfaction Score */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Overall Satisfaction</div>
                  <div className="text-5xl font-bold text-teal-900">4.8</div>
                  <div className="text-sm text-gray-500 mt-1">out of 5.0</div>
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600 mb-2">Based on 47 survey responses (Last 6 months)</div>
                  {[
                    { stars: 5, count: 38, percent: 81 },
                    { stars: 4, count: 7, percent: 15 },
                    { stars: 3, count: 2, percent: 4 },
                    { stars: 2, count: 0, percent: 0 },
                    { stars: 1, count: 0, percent: 0 }
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-2 text-xs mb-1">
                      <span className="w-12">{rating.stars} stars</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 rounded-full h-2" style={{width: `${rating.percent}%`}}></div>
                      </div>
                      <span className="w-8 text-right text-gray-500">{rating.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Survey Questions Performance */}
            <div>
              <h4 className="font-semibold mb-3 text-sm text-gray-700">Post-Session Survey Results (Sample Questions)</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { q: "I felt heard and understood", score: 4.9 },
                  { q: "The session helped me gain new insights", score: 4.7 },
                  { q: "I have clear actions to take", score: 4.6 },
                  { q: "My coach asked powerful questions", score: 4.8 },
                  { q: "I felt comfortable being vulnerable", score: 4.9 },
                  { q: "The session was well-paced", score: 4.7 },
                  { q: "I'm making progress toward my goals", score: 4.5 },
                  { q: "I would recommend my coach to others", score: 4.9 }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3 border">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-xs text-gray-700 flex-1">{item.q}</div>
                      <div className="text-lg font-bold text-gray-900 ml-2">{item.score}</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-teal-500 rounded-full h-1.5" style={{width: `${(item.score/5)*100}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth Areas Identified */}
            <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-purple-900">🎯 Growth Areas Identified by Sage</h4>
              <ul className="space-y-2 text-sm text-purple-800">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">Increase client talk time</span> - Consider asking more open-ended questions and allowing longer pauses
                    <a href="#" className="text-purple-600 underline ml-1 text-xs">View training resources</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">Strengthen "Evokes Awareness"</span> - Practice reframing and using metaphors
                    <a href="#" className="text-purple-600 underline ml-1 text-xs">View training resources</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">Action accountability</span> - Follow up on client commitments more consistently
                    <a href="#" className="text-purple-600 underline ml-1 text-xs">View training resources</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Practice Building (reduced priority) */}
          <div className="bg-gray-50 border rounded-lg p-4">
            <h3 className="font-semibold mb-2 text-gray-700">📈 Practice Building & Marketing</h3>
            <p className="text-sm text-gray-600">Referral tracking, brand assets, and marketing tools coming soon</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ T-15 PREP FULL PAGE ============
function T15PrepFullPage({ client, onClose }) {
  if (!client) return null;

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back to Clients
            </button>
            <div className="text-sm text-gray-500">
              Est. read time: 5-15 minutes
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">T-15 Session Brief</h1>
          <p className="text-gray-600">
            {client.name} · {client.nextSession && new Date(client.nextSession).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {client.nextSession && new Date(client.nextSession).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto p-8 space-y-6">
        {/* Purpose Banner */}
        <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h2 className="font-bold text-xl mb-2">📋 Session Prep Brief</h2>
          <p className="text-white text-sm leading-relaxed">
            Ground yourself, review who this person is, where they're at in their journey, what you covered last time, and what's alive for them TODAY. Everything you need to show up fully present and prepared for a powerful session.
          </p>
        </div>

        {/* Section 1: Client Overview & Journey */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-teal-900 flex items-center gap-2">
            <span className="text-2xl">👤</span> Who {client.name} Is
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500 text-xs mb-1">Core Identity</div>
              <div className="font-medium text-gray-900">{client.role} at {client.company}</div>
              <div className="text-gray-600 mt-1">Coaching Phase: {client.phase}</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Values & Vision</div>
              <div className="text-gray-700 text-xs leading-relaxed">Living into courage, authenticity, and purposeful leadership. Committed to building sustainable success while maintaining family priorities.</div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200">
            <div className="text-xs font-semibold text-teal-900 mb-2">MAIN GOALS ({client.goals.length})</div>
            <ul className="space-y-1 text-xs text-gray-700">
              {client.goals.map((goal, idx) => <li key={idx}>• {goal}</li>)}
            </ul>
          </div>
        </div>

        {/* Section 2: Last Session Recap */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-blue-900 flex items-center gap-2">
            <span className="text-2xl">📝</span> Last Session Recap
            <span className="text-xs font-normal text-gray-500">({client.lastSession && new Date(client.lastSession).toLocaleDateString()})</span>
          </h3>

          <div className="space-y-4 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Session Summary</div>
              <p className="text-gray-700 leading-relaxed">
                Explored challenges around {client.goals[0].toLowerCase()}. Client expressed feeling overwhelmed by pace of growth while simultaneously energized by new possibilities. Discussed delegation patterns and underlying perfectionism creating bottlenecks.
              </p>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">Key Insights & Breakthroughs</div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Realized that by "saving time" doing it themselves, they're losing time long-term</li>
                <li>• Connected fear of being seen as incompetent to micromanagement patterns</li>
                <li>• Question "What would it look like if this was working beautifully?" opened new perspective</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">Commitments Made</div>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• Schedule 1-on-1s with each direct report this week</li>
                <li>• Identify 3 decisions to delegate completely</li>
                <li>• Read Chapter 3 of "Crucial Conversations"</li>
                <li>• Journal on: "What am I afraid will happen if I let go?"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: What's Alive TODAY - From Sage */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-purple-900 flex items-center gap-2">
            <span className="text-2xl">✨</span> What's Alive for {client.name} TODAY
            <span className="text-xs font-normal text-gray-500">(from Sage)</span>
          </h3>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 mb-4">
            <div className="text-xs font-semibold text-purple-900 mb-3">PRE-SESSION CHECK-IN (sent 1 hour ago)</div>
            <div className="space-y-3 text-sm text-gray-800">
              <div>
                <span className="font-semibold text-purple-900">Celebration:</span> "Successfully had difficult conversation with board. Felt heard even in disagreement."
              </div>
              <div>
                <span className="font-semibold text-purple-900">Gratitude:</span> "For my team stepping up during last week's crisis. Reminded me I don't have to do it all alone."
              </div>
              <div>
                <span className="font-semibold text-purple-900">On mind/heart:</span> "Tension between wanting to grow quickly vs. maintaining quality/culture. Worried I'm deciding from fear not vision."
              </div>
              <div>
                <span className="font-semibold text-purple-900">Desired outcome:</span> "Clarity on growth pace. Want to feel grounded in my choice rather than second-guessing."
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            <div className="text-xs font-semibold text-teal-900 mb-2">SAGE ACTIVITY (since last session)</div>
            <div className="text-xs text-teal-800 space-y-1">
              <div>→ 7 check-ins about team dynamics and decision-making</div>
              <div>→ Expressed feeling "stuck" between priorities 3 times</div>
              <div>→ Leadership assessment completed - high vision, needs work on execution systems</div>
              <div>→ Asked for resources on "managing rapid growth" and "culture during scale"</div>
            </div>
          </div>
        </div>

        {/* Section 4: Check-ins & Reminders */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-orange-900 flex items-center gap-2">
            <span className="text-2xl">🔔</span> Check In On
          </h3>

          <div className="space-y-4 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-2">Previous Commitments</div>
              <ul className="space-y-1 ml-4 text-gray-700">
                <li>✓ Did they schedule 1-on-1s with direct reports?</li>
                <li>✓ How did delegating 3 decisions go?</li>
                <li>✓ Did they read Chapter 3 of "Crucial Conversations"?</li>
                <li>✓ What came up journaling about "letting go"?</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2">Personal/Life Events</div>
              <ul className="space-y-1 ml-4 text-gray-700">
                <li>→ Daughter's 10th birthday last weekend - ask how it went</li>
                <li>→ Anniversary trip to Mexico next month</li>
                <li>→ Mother's health scare - check on family</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2">Resources Shared</div>
              <ul className="space-y-1 ml-4 text-gray-700">
                <li>→ Leadership Assessment Framework (2 weeks ago)</li>
                <li>→ "Crucial Conversations" book</li>
                <li>→ Delegation worksheet</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5: Opening & Powerful Questions */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold mb-4 text-indigo-900 flex items-center gap-2">
            <span className="text-2xl">💬</span> How to Open & Where to Go
          </h3>

          <div className="space-y-4">
            <div>
              <div className="font-semibold text-gray-900 mb-2 text-sm">Suggested Openers</div>
              <div className="space-y-2">
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-gray-800">
                  <span className="font-semibold text-indigo-900">Direct:</span> "Last time we explored your perfectionism around delegation. You committed to 3 decisions to hand off - how'd that go?"
                </div>
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-gray-800">
                  <span className="font-semibold text-indigo-900">Open:</span> "You mentioned wanting clarity on growth pace today. Before we dive in, what's most alive for you right now?"
                </div>
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-gray-800">
                  <span className="font-semibold text-indigo-900">Personal:</span> "Your daughter's birthday was last weekend - how was that? How are you feeling heading into today?"
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-2 text-sm">Powerful Questions</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="p-2 bg-purple-50 border-l-4 border-purple-400 rounded">→ "If you trusted your intuition completely about this growth decision, what would it tell you?"</li>
                <li className="p-2 bg-purple-50 border-l-4 border-purple-400 rounded">→ "What would making this decision from vision (not fear) look like?"</li>
                <li className="p-2 bg-purple-50 border-l-4 border-purple-400 rounded">→ "What are you not saying that needs to be said?"</li>
                <li className="p-2 bg-purple-50 border-l-4 border-purple-400 rounded">→ "If your future self could speak to you right now, what would they say?"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 6: Frameworks & Resources */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold mb-4 text-green-900 flex items-center gap-2">
            <span className="text-2xl">📚</span> Frameworks Ready
          </h3>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-xs font-semibold text-green-900 mb-3">SAGE RECOMMENDATIONS (based on: growth pace decisions)</div>
            <div className="space-y-3 text-xs text-gray-800">
              <div>
                <div className="font-semibold text-green-900">Values-Based Decision Framework</div>
                <div className="text-gray-600 mt-1">Making decisions aligned with core values when facing competing priorities</div>
              </div>
              <div>
                <div className="font-semibold text-green-900">Polarity Thinking</div>
                <div className="text-gray-600 mt-1">Both/and not either/or - managing tension between growth speed vs. sustainable culture</div>
              </div>
              <div>
                <div className="font-semibold text-green-900">Fear vs. Vision Compass</div>
                <div className="text-gray-600 mt-1">Distinguishing decisions from scarcity/fear vs. abundance/vision</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ SESSION NOTES EDITOR PAGE ============
function SessionNotesEditorPage({ sessionId, client, onClose }) {
  const [showModifyTooltip, setShowModifyTooltip] = React.useState(false);
  const [showAIOptions, setShowAIOptions] = React.useState(false);

  return (
    <div className="h-full overflow-auto bg-gray-100">
      {/* Header */}
      <div className="bg-gray-900 border-b shadow-lg sticky top-0 z-10">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              ← Back to {client.name}
            </button>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">Auto-saved 2 min ago</span>
              <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-800">
                Save Draft
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 shadow font-medium">
                Send to Client
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-1">
              <h1 className="text-xl font-bold text-white">Session {sessionId} - Coaching Session Summary</h1>
              <p className="text-gray-400 text-sm">{client.name} · {new Date(client.lastSession).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded">Draft</span>
              <span className="text-gray-500">|</span>
              <button className="text-gray-400 hover:text-white">View Transcript</button>
            </div>
          </div>

          {/* Word Processor-Style Toolbar */}
          <div className="bg-gray-800 rounded-lg p-2 flex items-center gap-1 flex-wrap">
            <select className="bg-gray-700 text-white text-sm px-2 py-1 rounded border-none">
              <option>Normal</option>
              <option>Heading 1</option>
              <option>Heading 2</option>
            </select>
            <div className="w-px h-6 bg-gray-600 mx-1"></div>
            <button className="p-1.5 hover:bg-gray-700 rounded text-white font-bold" title="Bold">B</button>
            <button className="p-1.5 hover:bg-gray-700 rounded text-white italic" title="Italic">I</button>
            <button className="p-1.5 hover:bg-gray-700 rounded text-white underline" title="Underline">U</button>
            <div className="w-px h-6 bg-gray-600 mx-1"></div>
            <button className="p-1.5 hover:bg-gray-700 rounded text-white" title="Bulleted List">• List</button>
            <button className="p-1.5 hover:bg-gray-700 rounded text-white" title="Numbered List">1. List</button>
            <div className="w-px h-6 bg-gray-600 mx-1"></div>
            <button className="p-1.5 hover:bg-gray-700 rounded text-white" title="Insert Link">🔗</button>
            <button className="p-1.5 hover:bg-gray-700 rounded text-white" title="Undo">↶</button>
            <button className="p-1.5 hover:bg-gray-700 rounded text-white" title="Redo">↷</button>
            <div className="w-px h-6 bg-gray-600 mx-2"></div>
            {/* AI Assist Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowAIOptions(!showAIOptions)}
                className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm flex items-center gap-2"
              >
                ✨ AI Assist
                <svg className={`w-4 h-4 transition-transform ${showAIOptions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showAIOptions && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50">
                  <div className="p-2 border-b border-gray-700 text-xs text-gray-400 uppercase">AI Writing Assistance</div>
                  <button className="w-full px-4 py-3 text-left text-sm text-white hover:bg-gray-800 flex items-start gap-3">
                    <span className="text-lg">📝</span>
                    <div>
                      <div className="font-medium">Make it shorter</div>
                      <div className="text-xs text-gray-400">Condense while preserving key insights</div>
                    </div>
                  </button>
                  <button className="w-full px-4 py-3 text-left text-sm text-white hover:bg-gray-800 flex items-start gap-3">
                    <span className="text-lg">🎨</span>
                    <div>
                      <div className="font-medium">Change tone</div>
                      <div className="text-xs text-gray-400">More formal, casual, warm, or direct</div>
                    </div>
                  </button>
                  <button className="w-full px-4 py-3 text-left text-sm text-white hover:bg-gray-800 flex items-start gap-3">
                    <span className="text-lg">💬</span>
                    <div>
                      <div className="font-medium">Draft difficult conversation</div>
                      <div className="text-xs text-gray-400">NVC-style scripts for sensitive topics</div>
                    </div>
                  </button>
                  <button className="w-full px-4 py-3 text-left text-sm text-white hover:bg-gray-800 flex items-start gap-3">
                    <span className="text-lg">🔄</span>
                    <div>
                      <div className="font-medium">Regenerate from transcript</div>
                      <div className="text-xs text-gray-400">Create a fresh draft from scratch</div>
                    </div>
                  </button>
                  <div className="p-2 border-t border-gray-700">
                    <button className="w-full px-3 py-2 text-left text-sm text-purple-400 hover:text-purple-300 flex items-center gap-2">
                      <span>⚙️</span> Modify default template...
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Editor Content - Full width editing experience */}
      <div className="max-w-5xl mx-auto p-6">
        {/* Editing Instructions Banner */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6 flex items-center gap-4">
          <div className="text-2xl">✏️</div>
          <div className="flex-1">
            <div className="font-medium text-teal-900">Edit directly in the fields below</div>
            <div className="text-sm text-teal-700">Click any text to edit. Use the toolbar for formatting. Your changes auto-save.</div>
          </div>
          <button className="px-3 py-1 text-sm border border-teal-300 text-teal-700 rounded hover:bg-teal-100">
            Hide tip
          </button>
        </div>

        {/* Main Editor Card */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* AI Source Badge */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-3 border-b flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">AI</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-700">Draft generated from </span>
                <button className="text-purple-600 hover:underline font-medium">T-15 prep</button>
                <span className="text-gray-700"> + </span>
                <button className="text-purple-600 hover:underline font-medium">session transcript</button>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Generated Jan 15, 2026 at 3:42 PM
            </div>
          </div>

          {/* Session Summary */}
          <div className="border-b border-gray-100">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Session Summary</h3>
              <button className="text-xs text-purple-600 hover:text-purple-700 flex items-center gap-1">
                ✨ Improve with AI
              </button>
            </div>
            <div className="p-6">
              <textarea
                className="w-full text-lg leading-relaxed border-2 border-transparent hover:border-gray-200 focus:border-teal-400 rounded-lg p-3 -m-3 focus:outline-none resize-none transition-colors"
                rows="4"
                defaultValue="We explored your challenges with delegation and team building. You shared that you're feeling overwhelmed by the pace of growth and struggling to let go of control. Through our conversation, you recognized that your perfectionism is creating a bottleneck and preventing your team from developing."
              />
            </div>
          </div>

          {/* Key Insights */}
          <div className="border-b border-gray-100">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Key Insights & Breakthroughs</h3>
              <button className="text-xs text-purple-600 hover:text-purple-700 flex items-center gap-1">
                ✨ Improve with AI
              </button>
            </div>
            <div className="p-6">
              <textarea
                className="w-full leading-relaxed border-2 border-transparent hover:border-gray-200 focus:border-teal-400 rounded-lg p-3 -m-3 focus:outline-none resize-none transition-colors"
                rows="6"
                defaultValue={`• You realized that by "saving time" doing it yourself, you're actually losing time in the long run\n• Your fear of being seen as incompetent is driving micromanagement\n• The question "What would it look like if this was working beautifully?" helped you envision a different way\n• You connected your leadership challenges to deeper patterns around trust and control`}
              />
            </div>
          </div>

          {/* Commitments & Next Steps */}
          <div className="border-b border-gray-100">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Your Commitments & Next Steps</h3>
              <button className="text-xs text-purple-600 hover:text-purple-700 flex items-center gap-1">
                ✨ Improve with AI
              </button>
            </div>
            <div className="p-6">
              <textarea
                className="w-full leading-relaxed border-2 border-transparent hover:border-gray-200 focus:border-teal-400 rounded-lg p-3 -m-3 focus:outline-none resize-none transition-colors"
                rows="5"
                defaultValue={`1. Schedule 1-on-1s with each direct report this week\n2. Identify 3 decisions you can delegate completely\n3. Practice the "5-minute rule" - if something takes < 5 min to explain, delegate it\n4. Read Chapter 3 of "Crucial Conversations"\n5. Journal on the question: "What am I afraid will happen if I let go?"`}
              />
            </div>
          </div>

          {/* Inquiries for Reflection */}
          <div className="border-b border-gray-100">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Inquiries for Reflection</h3>
              <button className="text-xs text-purple-600 hover:text-purple-700 flex items-center gap-1">
                ✨ Improve with AI
              </button>
            </div>
            <div className="p-6">
              <textarea
                className="w-full leading-relaxed border-2 border-transparent hover:border-gray-200 focus:border-teal-400 rounded-lg p-3 -m-3 focus:outline-none resize-none transition-colors"
                rows="4"
                defaultValue={`• What would change if you fully trusted your team's capabilities?\n• How might delegation become an act of generosity rather than loss of control?\n• What story are you telling yourself about what it means to need help?`}
              />
            </div>
          </div>

          {/* Resources Shared */}
          <div className="border-b border-gray-100">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Resources Shared</h3>
              <button className="text-xs text-gray-500 hover:text-gray-700 flex items-center gap-1">
                + Add resource
              </button>
            </div>
            <div className="p-6">
              <textarea
                className="w-full leading-relaxed border-2 border-transparent hover:border-gray-200 focus:border-teal-400 rounded-lg p-3 -m-3 focus:outline-none resize-none transition-colors"
                rows="3"
                defaultValue={`• Leadership Assessment Framework (attached)\n• "Crucial Conversations" by Patterson et al.\n• Article: "The Art of Delegation for Perfectionists"`}
              />
            </div>
          </div>

          {/* Coach's Private Notes */}
          <div className="bg-amber-50/50">
            <div className="px-6 py-4 bg-amber-100/50 border-b border-amber-200/50 flex items-center gap-3">
              <span className="text-lg">🔒</span>
              <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wide">Coach's Private Notes</h3>
              <span className="text-xs px-2 py-0.5 bg-amber-200 text-amber-800 rounded">Not sent to client</span>
            </div>
            <div className="p-6">
              <textarea
                className="w-full leading-relaxed bg-white border-2 border-amber-200 hover:border-amber-300 focus:border-amber-400 rounded-lg p-4 focus:outline-none resize-none transition-colors"
                rows="4"
                placeholder="Your private observations, patterns you're noticing, things to explore in future sessions..."
                defaultValue="Client is making real progress but still intellectualizing. May need more somatic/embodied work. Consider introducing mindfulness practices. Watch for defensive patterns when discussing vulnerability."
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6 pb-8">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-medium shadow"
          >
            Save & Close
          </button>
          <div className="flex-1"></div>
          <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-medium shadow flex items-center gap-2">
            👁️ Preview as Client
          </button>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold shadow-lg flex items-center gap-2">
            Send to Client →
          </button>
        </div>
      </div>
    </div>
  );
}

// ============ SETTINGS PAGE ============
function SettingsPage() {
  return (
    <div className="p-8 overflow-auto h-full bg-gray-50">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Settings & Integrations</h2>
        <p className="text-gray-600">Connect your tools and customize your coaching platform</p>
      </div>

      <div className="space-y-6">
        {/* Video Conferencing */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
            <span>📹</span> Video Conferencing
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  Z
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Zoom</div>
                  <div className="text-xs text-green-600 font-medium">✓ Connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
                Manage
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Google Meet</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Microsoft Teams</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Integration */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
            <span>📅</span> Calendar
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Google Calendar</div>
                  <div className="text-xs text-green-600 font-medium">✓ Connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
                Manage
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  O
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Outlook</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold">

                </div>
                <div className="flex-1">
                  <div className="font-semibold">Apple Calendar</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Email Integration */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
            <span>📧</span> Email
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-red-500 rounded-lg p-4 bg-red-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Gmail</div>
                  <div className="text-xs text-green-600 font-medium">✓ Connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
                Manage
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  O
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Outlook</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold">
                  @
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Custom SMTP</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Payment Processors */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
            <span>💳</span> Payment Processors
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  $
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Square</div>
                  <div className="text-xs text-green-600 font-medium">✓ Connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
                Manage
              </button>
            </div>

            <div className="border-2 border-purple-500 rounded-lg p-4 bg-purple-50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Stripe</div>
                  <div className="text-xs text-green-600 font-medium">✓ Connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded text-sm hover:bg-gray-50">
                Manage
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  PP
                </div>
                <div className="flex-1">
                  <div className="font-semibold">PayPal</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* File Storage */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
            <span>☁️</span> File Storage
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Google Drive</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  DB
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Dropbox</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:border-gray-400 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                  OD
                </div>
                <div className="flex-1">
                  <div className="font-semibold">OneDrive</div>
                  <div className="text-xs text-gray-500">Not connected</div>
                </div>
              </div>
              <button className="w-full px-3 py-1.5 bg-teal-600 text-white rounded text-sm hover:bg-teal-700">
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Sage AI Settings */}
        <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 border-2 border-teal-300 p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
            <span>🧙‍♂️</span> Sage AI Settings
          </h3>
          <div className="space-y-4 bg-white/70 backdrop-blur p-4 rounded-lg">
            <div>
              <h4 className="font-medium mb-2 text-sm">AI Preferences</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Auto-generate T-15 prep briefs</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Auto-draft session notes after meetings</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Enable pattern recognition across clients</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Weekly coaching insights summary</span>
                </label>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-2 text-sm">In-Session AI Presence</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Real-time coaching competency tracking</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Live powerful question suggestions</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Talk time monitoring alerts</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
            <span>🔔</span> Notifications
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Session reminders (15 minutes before)</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Draft notes ready for review</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm">Overdue invoice reminders</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Weekly practice summary</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">Client milestone achievements</span>
            </label>
          </div>
        </div>

        {/* Account & Security */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
            <span>🔐</span> Account & Security
          </h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-sm">
              Change password
            </button>
            <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-sm">
              Two-factor authentication
            </button>
            <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-left text-sm">
              Data export & privacy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ LANDING PAGE ============
// First encounter - natural, organic feel inspired by jessetorrence.com
function LandingPage({ onSelectUserType }) {
  const [showLogin, setShowLogin] = React.useState(false);
  const [loginUserType, setLoginUserType] = React.useState(null);
  const [showVideo, setShowVideo] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home'); // home, enterprise, pricing
  const [showUserTypeModal, setShowUserTypeModal] = React.useState(false);
  const [pendingAction, setPendingAction] = React.useState(null);
  const [scrollY, setScrollY] = React.useState(0);

  // Parallax scroll effect
  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Universal CTA handler - always asks user type first
  const handleCTA = (action) => {
    setPendingAction(action);
    setShowUserTypeModal(true);
  };

  // After user selects type in modal
  const handleUserTypeSelection = (type) => {
    setShowUserTypeModal(false);
    if (pendingAction === 'signup') {
      onSelectUserType(type);
    } else if (pendingAction === 'login') {
      setLoginUserType(type);
      setShowLogin(true);
    }
    setPendingAction(null);
  };

  // Feature cards for "What Changes in Practice" - REORDERED: Before → During → After → Between
  const featureCategories = [
    {
      title: "Before Sessions",
      icon: "📋",
      color: "from-teal-500/20 to-emerald-500/10",
      features: [
        "T-15 prep briefs delivered automatically with full context",
        "Client pulse: emotional state, commitment tracking, pattern alerts",
        "Suggested openers tailored to what's alive for them right now"
      ]
    },
    {
      title: "During Sessions",
      icon: "🎯",
      color: "from-violet-500/20 to-purple-500/10",
      features: [
        "Stay fully present—no note-taking, no mental bookmarking",
        "Real-time AI co-pilot surfaces patterns, frameworks, and questions",
        "Adjustable intervention levels: quiet support to active guidance"
      ]
    },
    {
      title: "After Sessions",
      icon: "✨",
      color: "from-amber-500/20 to-orange-500/10",
      features: [
        "Structured notes appear in 5 minutes, written in your voice",
        "Six-section format: Recap, Insights, Inquiries, Actions, Resources, Next Steps",
        "Edit with natural language: \"make warmer\" or \"shorten the actions\""
      ]
    },
    {
      title: "Between Sessions",
      icon: "🌙",
      color: "from-blue-500/20 to-indigo-500/10",
      features: [
        "24/7 AI companion for your clients (with privacy tiers they control)",
        "Clients process challenges, track commitments, prepare for sessions",
        "You see summaries of their journey—only what they choose to share"
      ]
    },
    {
      title: "Your Practice",
      icon: "📊",
      color: "from-rose-500/20 to-pink-500/10",
      features: [
        "Business dashboard: revenue, client progress, ICF credential hours",
        "Invoicing, scheduling, and admin handled automatically",
        "Pattern recognition across all clients, surfaced when relevant"
      ]
    },
    {
      title: "Your Whole Life",
      icon: "🌟",
      color: "from-cyan-500/20 to-sky-500/10",
      features: [
        "Personal goals alongside professional—health, relationships, growth",
        "Non-coaching to-dos: \"Pick up birthday gift\" lives next to \"Send framework\"",
        "AI helps with ALL of life, not just your practice—except for the unique wisdom and presence only you can bring"
      ]
    }
  ];

  // Comprehensive "What Becomes Possible" list
  const possibilities = [
    { text: "You remember everything without trying", category: "Memory" },
    { text: "Patterns emerge across months and years", category: "Insight" },
    { text: "Clients feel continuously held, not reset every session", category: "Relationship" },
    { text: "Insights stop evaporating between sessions", category: "Continuity" },
    { text: "Follow-ups feel thoughtful, personalized, and timely", category: "Care" },
    { text: "Your evenings return to you", category: "Freedom" },
    { text: "Your best work compounds over time", category: "Growth" },
    { text: "Admin disappears—invoicing, scheduling, credential tracking", category: "Admin" },
    { text: "Clients prepare better and arrive ready to go deeper", category: "Sessions" },
    { text: "Your voice is preserved in every communication", category: "Voice" },
    { text: "Nothing is sent without your approval", category: "Control" },
    { text: "You focus on presence, intuition, and human connection", category: "Essence" }
  ];

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">

      {/* ===== SUPERHUMAN-STYLE HEADER - Left-aligned like Superhuman ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-lg border-b border-stone-800/50">
        <div className="w-full px-4 py-3 flex justify-between items-center">
          {/* Left side: Logo + Nav together */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-end gap-2 group"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <img
                  src="/src/assets/ouroboros-logo.png"
                  alt="ReGenesis"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <span className="text-xs font-light tracking-widest text-stone-400 group-hover:text-stone-200 transition-colors mb-0.5">ReGenesis</span>
            </button>

            {/* Navigation - V6 aligned: Home / Product / Pricing / Security / Login */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-white' : 'text-stone-400 hover:text-white'}`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('enterprise')}
                className={`text-sm font-medium transition-colors ${currentPage === 'enterprise' ? 'text-white' : 'text-stone-400 hover:text-white'}`}
              >
                Product
              </button>
              <button
                onClick={() => setCurrentPage('pricing')}
                className={`text-sm font-medium transition-colors ${currentPage === 'pricing' ? 'text-white' : 'text-stone-400 hover:text-white'}`}
              >
                Pricing
              </button>
              <button
                onClick={() => setCurrentPage('security')}
                className={`text-sm font-medium transition-colors ${currentPage === 'security' ? 'text-white' : 'text-stone-400 hover:text-white'}`}
              >
                Security
              </button>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 pr-2">
            <button
              onClick={() => handleCTA('login')}
              className="text-stone-400 hover:text-white font-medium transition-colors text-sm"
            >
              Log in
            </button>
            <button
              onClick={() => {
                // Smart CTA - go directly to appropriate onboarding based on page
                if (currentPage === 'enterprise') {
                  onSelectUserType('admin');
                } else {
                  onSelectUserType('coach');
                }
              }}
              className="px-4 py-2 bg-white text-stone-900 rounded-lg font-medium text-sm hover:bg-stone-100 transition-colors"
            >
              Get ReGenesis
            </button>
          </div>
        </div>
      </header>

      {/* ===== PAGE ROUTING ===== */}
      {currentPage === 'enterprise' ? (
        <EnterprisePage
          onGetStarted={() => handleCTA('signup')}
          setCurrentPage={setCurrentPage}
          scrollY={scrollY}
        />
      ) : currentPage === 'pricing' ? (
        <PricingPage
          onGetStarted={() => handleCTA('signup')}
          setCurrentPage={setCurrentPage}
        />
      ) : (
      <>
      {/* ===== HERO SECTION - Animated Nature Background with Parallax ===== */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Animated nature gradient background - mountains/valleys feel */}
        <div className="absolute inset-0">
          {/* Base gradient - earth tones with violet */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-100 via-stone-50 to-violet-50/30"></div>

          {/* Parallax mountain layers */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-stone-300/40 via-stone-200/20 to-transparent"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-violet-200/30 via-violet-100/10 to-transparent"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-stone-400/20 via-stone-300/10 to-transparent"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>

          {/* Subtle animated gradient orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-300/10 to-purple-200/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '8s', transform: `translateY(${scrollY * 0.05}px)` }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-amber-200/10 to-orange-100/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '2s', transform: `translateY(${scrollY * 0.08}px)` }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-teal-200/10 to-emerald-100/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: '12s', animationDelay: '4s', transform: `translateY(${scrollY * 0.03}px)` }}
          ></div>
        </div>

        {/* Hero imagery placeholder - two humans connecting */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <div className="text-[400px] leading-none">🤝</div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">

          {/* V6 Primary headline - Coach-centric "embedded coaching partner" direction */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-6 leading-tight tracking-tight">
            An Embedded Coaching Partner
            <br />
            <span className="text-stone-900 font-normal">That Never Forgets</span>
          </h1>

          {/* V6 Subheadline - The promise */}
          <p className="text-xl md:text-2xl text-stone-600 font-light mb-6 max-w-2xl mx-auto">
            {LOCKED_PHRASES.coachPromise}
          </p>

          {/* Micro-proof row - small, crisp credibility */}
          <div className="flex items-center justify-center gap-6 mb-8 text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              SOC 2 Ready
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              HIPAA Ready
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              GDPR Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              ICF Aligned
            </span>
          </div>

          {/* V6 Dual CTAs - Primary: Start guided demo, Secondary: See how it works */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => handleCTA('signup')}
              className="px-8 py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 hover:shadow-xl transition-all"
            >
              Start Guided Demo
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="group inline-flex items-center gap-3 px-6 py-3 text-stone-700 hover:text-stone-900 transition-all border border-stone-300 rounded-xl hover:border-stone-400 bg-white/50 backdrop-blur-sm"
            >
              <span className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-all">
                <svg className="w-4 h-4 ml-0.5 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </span>
              <span className="font-medium">See How It Works</span>
            </button>
          </div>

          {/* V6 Fork CTAs - "Here for your organization?" / "Here as a coaching client?" */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <button
              onClick={() => setCurrentPage('enterprise')}
              className="text-stone-500 hover:text-violet-700 underline underline-offset-4 transition-colors"
            >
              Here for your organization?
            </button>
            <span className="text-stone-300">|</span>
            <button
              onClick={() => onSelectUserType('coachee')}
              className="text-stone-500 hover:text-violet-700 underline underline-offset-4 transition-colors"
            >
              Here as a coaching client?
            </button>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* ===== V6 TRUST STRIP - Early trust by architecture ===== */}
      <section className="py-8 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-8">
          <TrustStrip />
        </div>
      </section>

      {/* ===== V6 DEMO SPINE CARDS - 4 micro-clip placeholders ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-stone-800 mb-3">
              Four Ways {PRODUCT_NAME} Transforms Your Practice
            </h2>
            <p className="text-stone-500">Click to explore each capability</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Demo Spine Card 1: Agent + Command Bar */}
            <div className="group relative bg-white rounded-2xl p-6 border border-stone-200 hover:border-violet-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-stone-800 mb-2">Do Anything Agent</h3>
              <p className="text-sm text-stone-500 mb-4">Command bar that pulls up any view and executes tasks</p>
              <div className="aspect-video bg-stone-100 rounded-lg flex items-center justify-center text-stone-400 text-xs">
                Video placeholder
              </div>
            </div>

            {/* Demo Spine Card 2: Post-Session Notes */}
            <div className="group relative bg-white rounded-2xl p-6 border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-stone-800 mb-2">Post-Session Notes</h3>
              <p className="text-sm text-stone-500 mb-4">The "tears moment" — AI drafts that truly see your client</p>
              <div className="aspect-video bg-stone-100 rounded-lg flex items-center justify-center text-stone-400 text-xs">
                Video placeholder
              </div>
            </div>

            {/* Demo Spine Card 3: In-Session Support */}
            <div className="group relative bg-white rounded-2xl p-6 border border-stone-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium text-stone-800 mb-2">In-Session Support</h3>
              <p className="text-sm text-stone-500 mb-4">Gentle prompts right below your camera line</p>
              <div className="aspect-video bg-stone-100 rounded-lg flex items-center justify-center text-stone-400 text-xs">
                Video placeholder
              </div>
            </div>

            {/* Demo Spine Card 4: 24/7 Companion */}
            <div className="group relative bg-white rounded-2xl p-6 border border-stone-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-medium text-stone-800 mb-2">24/7 Companion</h3>
              <p className="text-sm text-stone-500 mb-4">Support between sessions, private by default</p>
              <div className="aspect-video bg-stone-100 rounded-lg flex items-center justify-center text-stone-400 text-xs">
                Video placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RECOGNITION SECTION ===== */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Decorative side element */}
        <div className="absolute right-0 top-0 bottom-0 w-1/5 bg-gradient-to-l from-violet-50/50 to-transparent"></div>

        <div className="relative max-w-3xl mx-auto px-8 text-center">

          <p className="text-2xl md:text-3xl font-light text-stone-700 leading-relaxed mb-12">
            <span className="text-stone-900 font-normal">Coaching was never meant to be atomized.</span>
          </p>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8">
            Each session is part of a longer arc—of patterns of hopes and fears, yearnings and wounds,
            realizations and commitments, being and becoming. But much of that arc is quietly lost to
            the limits of our memory, the burden of administrative tasks, and the exhaustion of
            holding everything alone.
          </p>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
            <span className="text-violet-700 font-medium">ReGenesis</span> exists so nothing essential disappears—so insights compound over time,
            so clients feel deeply and continuously held, and so you are freed to do the work
            only a human being can do.
          </p>

        </div>
      </section>

      {/* ===== TRUTH STATEMENTS - Visual treatment ===== */}
      <section className="relative py-28 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-stone-50"></div>

        <div className="relative max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { statement: "Care compounds when cognitive load is removed.", icon: "💜" },
              { statement: "Insight deepens when larger patterns are revealed.", icon: "🔮" },
              { statement: "Transformation accelerates when eloquence and continuity combine.", icon: "✨" },
              { statement: "Wisdom expands when attention is liberated.", icon: "🌟" }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-violet-100/50"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-lg text-stone-700 font-light leading-relaxed">
                  {item.statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE REFRAME - "This Is Not AI Coaching" ===== */}
      <section className="relative py-32 bg-stone-900 text-white overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-amber-900/10"></div>

        {/* Placeholder for imagery */}
        <div className="absolute left-0 top-1/4 w-1/4 h-1/2 bg-gradient-to-r from-violet-500/10 to-transparent rounded-r-full blur-2xl"></div>

        <div className="relative max-w-3xl mx-auto px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-light text-white mb-12">
            This Is Not AI Coaching
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-stone-300">
              ReGenesis does not replace your insight, intuition, or care.
            </p>
            <p className="text-stone-300">
              It replaces everything that should never have required your attention in the first place.
            </p>
            <p className="text-stone-400">
              It holds perfect memory. It tracks patterns. It ensures continuity.
              It takes care of anything and everything you want it to.
            </p>
            <p className="text-white font-medium text-2xl mt-12">
              You remain the human in the room.
            </p>
          </div>

        </div>
      </section>

      {/* ===== WHAT CHANGES IN PRACTICE - Comprehensive ===== */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              What Actually Changes in Practice
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Every aspect of your coaching practice, transformed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCategories.map((category, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl bg-gradient-to-br border border-stone-100 hover:shadow-lg transition-shadow"
                style={{ background: `linear-gradient(135deg, ${category.color.includes('violet') ? 'rgba(139,92,246,0.08)' : category.color.includes('amber') ? 'rgba(245,158,11,0.08)' : category.color.includes('teal') ? 'rgba(20,184,166,0.08)' : category.color.includes('blue') ? 'rgba(59,130,246,0.08)' : category.color.includes('rose') ? 'rgba(244,63,94,0.08)' : 'rgba(6,182,212,0.08)'} 0%, transparent 100%)` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-medium text-stone-800">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                      <span className="text-violet-500 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== WHAT BECOMES POSSIBLE - Visual grid ===== */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/20 to-violet-50/30"></div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-1/3 w-1/4 h-1/3 bg-gradient-to-l from-amber-200/20 to-transparent rounded-l-full blur-2xl"></div>

        <div className="relative max-w-5xl mx-auto px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
              What Becomes Possible
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {possibilities.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-stone-100 hover:border-violet-200 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex-shrink-0"></div>
                <p className="text-stone-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-32 bg-stone-50">
        {/* Placeholder for background imagery */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-100/30 to-transparent"></div>

        <div className="relative max-w-3xl mx-auto px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
            Experience it with real clients
          </h2>
          <p className="text-lg text-stone-500 mb-12">
            No setup theatre. No data loss. You can stop anytime.
          </p>

          <button
            onClick={() => onSelectUserType('coach')}
            className="px-12 py-4 bg-stone-900 text-white rounded-xl font-medium text-lg hover:bg-stone-800 hover:shadow-2xl transition-all"
          >
            Try it free
          </button>

          {/* Secondary pathways - visible but not dominant */}
          <div className="mt-16 pt-8 border-t border-stone-200">
            <p className="text-sm text-stone-500 mb-4">Not a coach?</p>
            <div className="flex justify-center gap-8 text-sm">
              <button
                onClick={() => onSelectUserType('coachee')}
                className="text-stone-600 hover:text-violet-600 transition-colors font-medium"
              >
                I'm a coaching client—recommend this to my coach →
              </button>
              <button
                onClick={() => onSelectUserType('admin')}
                className="text-stone-600 hover:text-violet-600 transition-colors font-medium"
              >
                I'm evaluating for my organization →
              </button>
            </div>
          </div>

        </div>
      </section>
      </>
      )}

      {/* ===== COMPREHENSIVE FOOTER - Superhuman-style ===== */}
      <footer className="bg-stone-900 text-stone-400 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-8">
          {/* Main footer grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-end gap-2 mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/src/assets/ouroboros-logo.png"
                    alt="ReGenesis"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-light tracking-widest text-stone-500 mb-0.5">ReGenesis</span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">
                Augmented Intelligence for Human Becoming
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">For Coaches</button></li>
                <li><button onClick={() => setCurrentPage('enterprise')} className="hover:text-white transition-colors">Enterprise</button></li>
                <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => setShowVideo(true)} className="hover:text-white transition-colors">Demo</button></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-medium text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-500">© 2026 ReGenesis. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <span className="flex items-center gap-1.5 text-stone-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                SOC 2 Type II
              </span>
              <span className="flex items-center gap-1.5 text-stone-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                HIPAA Compliant
              </span>
              <span className="flex items-center gap-1.5 text-stone-500">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                GDPR Ready
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== LOGIN MODAL ===== */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium text-stone-800">
                  {loginUserType ? 'Sign In' : 'Welcome back'}
                </h2>
                <button
                  onClick={() => {
                    setShowLogin(false);
                    setLoginUserType(null);
                  }}
                  className="text-stone-400 hover:text-stone-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {!loginUserType ? (
                <div className="space-y-3">
                  <p className="text-sm text-stone-500 mb-4">How do you use ReGenesis?</p>

                  <button
                    onClick={() => setLoginUserType('coach')}
                    className="w-full p-4 text-left border border-stone-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition-colors"
                  >
                    <div className="font-medium text-stone-800">I'm a Coach</div>
                    <div className="text-sm text-stone-500">Access your coaching dashboard</div>
                  </button>

                  <button
                    onClick={() => setLoginUserType('coachee')}
                    className="w-full p-4 text-left border border-stone-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition-colors"
                  >
                    <div className="font-medium text-stone-800">I'm a Coaching Client</div>
                    <div className="text-sm text-stone-500">Access your growth companion</div>
                  </button>

                  <button
                    onClick={() => setLoginUserType('admin')}
                    className="w-full p-4 text-left border border-stone-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition-colors"
                  >
                    <div className="font-medium text-stone-800">I'm an Organization Admin</div>
                    <div className="text-sm text-stone-500">Access program administration</div>
                  </button>

                  <p className="text-center text-sm text-stone-500 mt-6">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setShowLogin(false)}
                      className="text-violet-600 hover:underline font-medium"
                    >
                      Get started
                    </button>
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={() => setLoginUserType(null)}
                    className="text-sm text-stone-500 hover:text-stone-700 flex items-center gap-1"
                  >
                    ← Back
                  </button>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-violet-400 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                  <button className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg font-medium transition-colors">
                    Sign In
                  </button>
                  <p className="text-center text-sm text-stone-500">
                    <a href="#" className="hover:underline">Forgot password?</a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===== HELP CHAT BUTTON ===== */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {/* Would open chat widget */}}
          className="group w-14 h-14 bg-stone-900 hover:bg-stone-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        {/* Tooltip on hover */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-stone-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden group-hover:block">
          Chat with us or connect with a human
        </div>
      </div>

      {/* ===== VIDEO MODAL ===== */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-lg"
            >
              Close ×
            </button>
            <div className="bg-stone-900 rounded-2xl aspect-video flex items-center justify-center border border-stone-700">
              <div className="text-center text-white/60">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 ml-1 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-xl text-white/80 mb-2">Demo Video</p>
                <p className="text-sm text-white/40 mt-2">Walk through the coach experience, client experience, and admin experience</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== UNIVERSAL USER TYPE MODAL ===== */}
      {showUserTypeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium text-stone-800">
                  {pendingAction === 'signup' ? 'Get Started' : 'Welcome Back'}
                </h2>
                <button
                  onClick={() => {
                    setShowUserTypeModal(false);
                    setPendingAction(null);
                  }}
                  className="text-stone-400 hover:text-stone-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-sm text-stone-500 mb-6">How will you use ReGenesis?</p>

              <div className="space-y-3">
                <button
                  onClick={() => handleUserTypeSelection('coach')}
                  className="w-full p-4 text-left border border-stone-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-medium text-stone-800 group-hover:text-violet-700">I'm a Coach</div>
                      <div className="text-sm text-stone-500">Individual practitioner or coaching professional</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleUserTypeSelection('coachee')}
                  className="w-full p-4 text-left border border-stone-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🌱</span>
                    <div>
                      <div className="font-medium text-stone-800 group-hover:text-violet-700">I'm a Coaching Client</div>
                      <div className="text-sm text-stone-500">My coach invited me to ReGenesis</div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleUserTypeSelection('admin')}
                  className="w-full p-4 text-left border border-stone-200 rounded-xl hover:border-violet-300 hover:bg-violet-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏢</span>
                    <div>
                      <div className="font-medium text-stone-800 group-hover:text-violet-700">I'm Evaluating for My Organization</div>
                      <div className="text-sm text-stone-500">Enterprise, HR, or L&D decision maker</div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// ============ ENTERPRISE PAGE ============
function EnterprisePage({ onGetStarted, setCurrentPage, scrollY }) {
  const enterpriseFeatures = [
    {
      title: "Scale Development Across Your Organization",
      description: "Whether you have 50 internal coaches or 5,000 employees receiving coaching, ReGenesis grows with you seamlessly.",
      icon: "📈"
    },
    {
      title: "Unified Analytics & Reporting",
      description: "Track coaching engagement, measure outcomes, and demonstrate ROI across your entire program with real-time dashboards.",
      icon: "📊"
    },
    {
      title: "Centralized Administration",
      description: "Manage coach assignments, monitor program health, and oversee budgets from a single admin console.",
      icon: "🎛️"
    },
    {
      title: "Privacy-First Architecture",
      description: "Coachees trust the platform because their conversations stay private. You get the anonymized insights and patterns you need to understand engagement, without compromising individual confidentiality.",
      icon: "🔒"
    },
    {
      title: "Custom Integrations",
      description: "Connect with your HRIS, SSO provider, learning management system, and existing tech stack via API.",
      icon: "🔗"
    },
    {
      title: "Dedicated Success Team",
      description: "White-glove onboarding, training, and ongoing support from our enterprise customer success team.",
      icon: "🤝"
    },
    {
      title: "24/7 AI Companion for Every Coachee",
      description: "Between sessions, your employees have access to an always-available AI that extends the coaching relationship—driving higher engagement and better outcomes.",
      icon: "🌙"
    },
    {
      title: "Automated Session Intelligence",
      description: "T-15 prep briefs, AI-drafted notes, commitment tracking, and pattern recognition—all working behind the scenes so coaches can focus on presence.",
      icon: "✨"
    },
    {
      title: "Full Audit Trails & Access Controls",
      description: "Role-based permissions, complete audit logging, data residency options, and compliance reporting for your security and legal teams.",
      icon: "📋"
    }
  ];

  const outcomes = [
    { stat: "40%", label: "reduction in coach admin time" },
    { stat: "3x", label: "improvement in session continuity" },
    { stat: "89%", label: "coachee engagement rate" },
    { stat: "78%", label: "goal attainment rate" },
    { stat: "60%", label: "faster time-to-insight" }
  ];

  const useCases = [
    {
      title: "Leadership Development Programs",
      description: "Scale executive coaching across your leadership pipeline without scaling costs proportionally.",
      examples: [
        "Fortune 500 company coaches 500 high-potential leaders with 25 internal coaches on one platform",
        "Unified visibility into leadership development progress across all business units",
        "Measurable 360° improvement scores tracked automatically",
        "Succession planning informed by real coaching insights"
      ]
    },
    {
      title: "Manager Effectiveness",
      description: "Give every people manager access to coaching support, not just the C-suite.",
      examples: [
        "Deploy ReGenesis to 2,000 managers with AI companion support between sessions",
        "First-time managers get structured guidance during critical transition period",
        "Reduced manager-related attrition through early intervention insights",
        "Scalable coaching for distributed and remote leadership teams"
      ]
    },
    {
      title: "Coaching Firms & Practices",
      description: "Run your entire coaching business—multiple coaches, hundreds of clients—with unified operations. For-profit, nonprofit, or anything in between.",
      examples: [
        "50-coach firm consolidates scheduling, notes, billing, and client management",
        "Consistent client experience across all coaches in the practice",
        "Associate coaches onboarded in days, not weeks",
        "Cross-client pattern insights shared (anonymized) to improve methodology",
        "Boutique practice with 3 coaches operates with the same power as large firms"
      ]
    },
    {
      title: "HR & L&D Transformation",
      description: "Modernize your people development infrastructure with AI-augmented coaching at scale. Connect coaching outcomes directly to HR metrics like retention, engagement scores, and performance ratings.",
      examples: [
        "HR team measures coaching impact with real-time analytics dashboards",
        "Direct correlation tracking between coaching engagement and retention rates",
        "Learning & development programs enhanced with personalized coaching pathways",
        "Anonymized trend data informs company-wide training priorities",
        "Government agency brings coaching to 10,000 employees cost-effectively"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-violet-900"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(139,92,246,0.3) 0%, transparent 50%),
                             radial-gradient(circle at 70% 80%, rgba(245,158,11,0.2) 0%, transparent 40%)`,
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        ></div>

        <div className="relative max-w-5xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Empowering organizations that invest in their people
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
            Coaching at Scale,
            <br />
            <span className="text-violet-300">Without Compromise</span>
          </h1>

          <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            ReGenesis gives organizations the infrastructure to deliver world-class coaching
            to every employee who needs it—at a fraction of traditional costs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-white text-stone-900 rounded-xl font-medium hover:bg-stone-100 transition-all"
            >
              Schedule a Demo
            </button>
            <button
              onClick={() => setCurrentPage('pricing')}
              className="px-8 py-4 border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-all"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-stone-800 mb-4">Measurable Impact</h2>
            <p className="text-stone-500">Results from organizations using ReGenesis</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {outcomes.map((outcome, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-light text-violet-600 mb-2">{outcome.stat}</div>
                <div className="text-sm text-stone-600">{outcome.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-stone-800 mb-4">Built for Enterprise Scale</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Everything you need to run a world-class coaching program
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-stone-100 hover:shadow-lg transition-shadow">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-lg font-medium text-stone-800 mb-2">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-stone-800 mb-4">How Organizations Use ReGenesis</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-stone-50 to-violet-50/30 border border-stone-100">
                <h3 className="text-xl font-medium text-stone-800 mb-3">{useCase.title}</h3>
                <p className="text-stone-600 mb-4">{useCase.description}</p>
                <div className="p-4 bg-white/80 rounded-xl border border-stone-100">
                  <ul className="space-y-2">
                    {useCase.examples.map((example, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-stone-600">
                        <span className="text-violet-500 mt-0.5">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-light mb-6">Enterprise-Grade Security</h2>
          <p className="text-stone-300 max-w-3xl mx-auto mb-6">
            Your employees trust ReGenesis because their coaching conversations remain confidential.
            You get the visibility you need—anonymized trends, engagement metrics, program health—without
            compromising individual privacy. This firewall creates a virtuous cycle: higher trust means
            higher adoption, which means better outcomes for everyone.
          </p>
          <p className="text-stone-400 max-w-2xl mx-auto mb-12">
            And we believe the best security shouldn't be reserved for those who pay the most.
            Every ReGenesis user—individual or enterprise—gets the same world-class protection.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 px-6 py-3 bg-stone-800 rounded-xl">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-stone-800 rounded-xl">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-stone-800 rounded-xl">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-stone-800 rounded-xl">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
              <span>SSO / SAML</span>
            </div>
          </div>

          <p className="text-sm text-stone-500">
            Full audit trails • Encryption at rest and in transit • Role-based access controls • Data residency options
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-violet-50 to-stone-50">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-stone-800 mb-6">
            Ready to transform your coaching program?
          </h2>
          <p className="text-stone-600 mb-8">
            Let's talk about how ReGenesis can help you scale development across your organization.
          </p>

          <button
            onClick={onGetStarted}
            className="px-12 py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-all"
          >
            Schedule a Demo
          </button>

          <p className="text-sm text-stone-500 mt-6">
            Or email us at <span className="text-violet-600">enterprise@regenesis.ai</span>
          </p>
        </div>
      </section>
    </div>
  );
}

// ============ PRICING PAGE ============
function PricingPage({ onGetStarted, setCurrentPage }) {
  const [billingCycle, setBillingCycle] = React.useState('monthly'); // monthly or annual

  const individualPrice = billingCycle === 'annual' ? 32 : 39;
  const orgPrice = billingCycle === 'annual' ? 7 : 9;
  const annualDiscount = '17% off';

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-violet-50/20 to-white"></div>

        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
            Simple pricing. Full access. No games.
          </h1>

          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8">
            We believe coaching should be accessible to everyone. That's why we keep our pricing
            transparent, simple, and radically affordable.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-stone-100 rounded-xl mb-12">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              Annual
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{annualDiscount}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Individual Plan */}
            <div className="relative p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-violet-300 transition-colors">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-stone-800 mb-2">Individual</h3>
                <p className="text-stone-500">For coaches paying out of pocket</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-light text-stone-900">${individualPrice}</span>
                  <span className="text-stone-500">/month</span>
                </div>
                <p className="text-sm text-stone-500 mt-1">Up to 25 clients included</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Full platform access
                </li>
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  AI session notes & prep briefs
                </li>
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  24/7 AI companion for clients
                </li>
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Scheduling, invoicing, admin
                </li>
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  SOC 2, HIPAA, GDPR compliant
                </li>
              </ul>

              <button
                onClick={onGetStarted}
                className="w-full py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors"
              >
                Start Free Trial
              </button>
            </div>

            {/* Organization Plan */}
            <div className="relative p-8 rounded-2xl border-2 border-violet-300 bg-gradient-to-br from-violet-50/50 to-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1 bg-violet-600 text-white text-sm font-medium rounded-full">
                  Best for teams
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-medium text-stone-800 mb-2">Enterprise</h3>
                <p className="text-stone-500">For companies, coaching firms, nonprofits, government—any organization</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-light text-stone-900">${orgPrice}</span>
                  <span className="text-stone-500">/coachee/month</span>
                </div>
                <p className="text-sm text-stone-500 mt-1">Coach seats always free</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Everything in Individual, plus:
                </li>
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Unlimited coach seats
                </li>
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Admin dashboard & analytics
                </li>
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  SSO / SAML integration
                </li>
                <li className="flex items-start gap-3 text-stone-600">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  Priority support
                </li>
              </ul>

              <button
                onClick={onGetStarted}
                className="w-full py-4 bg-violet-600 text-white rounded-xl font-medium hover:bg-violet-700 transition-colors"
              >
                Talk to Sales
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* The "What's the Catch" Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-light mb-8">
            You're probably thinking... what's the catch?
          </h2>

          <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
            <p>There isn't one.</p>

            <p>
              We are coaches ourselves. We built ReGenesis because we believe coaching is one of the most powerful forces
              for human and planetary flourishing—and it's been locked behind prices that only a few can afford.
            </p>

            <p>
              We're not cheap. We're <span className="text-white font-medium">honest</span>. We don't gate security
              behind enterprise tiers. We don't charge per feature. We don't play games with "contact sales" buttons.
            </p>

            <p className="text-white text-xl font-medium pt-4">
              Our metric isn't revenue per customer. It's human lives touched.
            </p>

            <p className="text-stone-400">
              The more people use ReGenesis, the better off our families, communities, organizations, and ecosystems.
              That's the business we're in.
            </p>
          </div>
        </div>
      </section>

      {/* Anti-Bullshit Callouts */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-stone-50 rounded-2xl text-center">
              <div className="text-3xl mb-3">🚫</div>
              <h4 className="font-medium text-stone-800 mb-1">No per-client fees</h4>
              <p className="text-sm text-stone-500">for individuals</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-2xl text-center">
              <div className="text-3xl mb-3">♾️</div>
              <h4 className="font-medium text-stone-800 mb-1">No usage caps</h4>
              <p className="text-sm text-stone-500">Use it as much as you need</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-2xl text-center">
              <div className="text-3xl mb-3">🔓</div>
              <h4 className="font-medium text-stone-800 mb-1">No feature gates</h4>
              <p className="text-sm text-stone-500">Everyone gets everything</p>
            </div>
            <div className="p-6 bg-stone-50 rounded-2xl text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-medium text-stone-800 mb-1">Same security</h4>
              <p className="text-sm text-stone-500">At every tier</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-light text-stone-800 mb-12 text-center">Common Questions</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-stone-100">
              <h4 className="font-medium text-stone-800 mb-2">What if I have more than 25 clients?</h4>
              <p className="text-stone-600 text-sm">
                If you're an individual coach with more than 25 active clients, reach out and we'll work with you.
                You're probably running a thriving practice, and we want to support that growth—not penalize it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-100">
              <h4 className="font-medium text-stone-800 mb-2">Why are coach seats free for organizations?</h4>
              <p className="text-stone-600 text-sm">
                Coaches are the ones delivering the transformation. Coachees are where our AI provides the most value
                (24/7 companion, session prep, etc.). Charging per-coachee aligns our revenue with the value we create.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-100">
              <h4 className="font-medium text-stone-800 mb-2">Is the security really the same at every tier?</h4>
              <p className="text-stone-600 text-sm">
                Yes. We believe your clients' privacy and security shouldn't depend on your budget. SOC 2, HIPAA, GDPR—everyone
                gets the same protection. No exceptions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-100">
              <h4 className="font-medium text-stone-800 mb-2">Can I try it before committing?</h4>
              <p className="text-stone-600 text-sm">
                Absolutely. Start with a free trial—no credit card required. Use it with real clients and see if it
                transforms your practice the way we think it will.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-stone-50">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-light text-stone-800 mb-6">
            Ready to transform your coaching practice?
          </h2>

          <button
            onClick={onGetStarted}
            className="px-12 py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-all"
          >
            Try it for free
          </button>
        </div>
      </section>
    </div>
  );
}

// ============ COACH ONBOARDING FLOW ============
// UF-1: Multi-select throughout, UF-2: Privacy tooltips, UF-3: Exhaustive tools, UF-4: Progressive trust, UF-5: Deep questions, UF-6: Client invitation
function CoachOnboardingFlow({ step, setStep, onComplete, onBack }) {
  const totalSteps = 10;

  // UF-2: Privacy reassurance tooltip component
  const WhyWeAsk = ({ reason }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    return (
      <span className="relative inline-block ml-1">
        <button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="text-teal-600 hover:text-teal-700 text-xs underline cursor-help"
        >
          Why we ask
        </button>
        {showTooltip && (
          <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-stone-900 text-white text-xs rounded-lg shadow-lg z-10">
            {reason}
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-stone-900"></div>
          </div>
        )}
      </span>
    );
  };

  // UF-2: Privacy shield component
  const PrivacyShield = ({ level, explanation }) => (
    <div className="flex items-start gap-2 p-3 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-800 mt-4">
      <span className="text-lg">🔒</span>
      <div>
        <span className="font-semibold">Privacy: {level}</span>
        <p className="text-teal-700 mt-1">{explanation}</p>
      </div>
    </div>
  );

  const stepContent = {
    1: { title: "Create your account", subtitle: "Let's get you set up in ReGenesis" },
    2: { title: "Let's learn about you", subtitle: "We'll search public sources to save you time" },
    3: { title: "Confirm what we found", subtitle: "Review and correct the information we gathered" },
    4: { title: "Your coaching practice", subtitle: "Help us understand how you work" },
    5: { title: "Your coaching philosophy", subtitle: "ReGenesis will learn to sound like you" },
    6: { title: "Deep questions", subtitle: "Help ReGenesis understand your worldview" },
    7: { title: "Connect your tools", subtitle: "Integrate with your existing workflow" },
    8: { title: "Invite your clients", subtitle: "Import existing clients or invite new ones" },
    9: { title: "Upload your wisdom", subtitle: "Help ReGenesis learn your frameworks" },
    10: { title: "You're all set!", subtitle: "Welcome to ReGenesis" }
  };

  // UF-3: Exhaustive tool integrations by category
  const toolCategories = {
    "Video Conferencing": [
      { name: "Zoom", icon: "📹", desc: "Auto-join, transcribe, extract insights", connected: false },
      { name: "Google Meet", icon: "🎥", desc: "Native integration with transcription", connected: false },
      { name: "Microsoft Teams", icon: "💜", desc: "Enterprise video with transcription", connected: false },
      { name: "Webex", icon: "🌐", desc: "Cisco video platform", connected: false },
      { name: "Riverside", icon: "🎙️", desc: "High-quality recording & transcription", connected: false }
    ],
    "Calendar & Scheduling": [
      { name: "Google Calendar", icon: "📅", desc: "Sync sessions and availability", connected: true },
      { name: "Outlook Calendar", icon: "📆", desc: "Microsoft calendar integration", connected: false },
      { name: "Apple Calendar", icon: "🗓️", desc: "iCloud calendar sync", connected: false },
      { name: "Calendly", icon: "⏰", desc: "Scheduling automation", connected: false },
      { name: "Acuity", icon: "📋", desc: "Appointment scheduling", connected: false },
      { name: "SavvyCal", icon: "✨", desc: "Smart scheduling links", connected: false }
    ],
    "Email & Communication": [
      { name: "Gmail", icon: "📧", desc: "Email and client communication", connected: false },
      { name: "Outlook", icon: "💼", desc: "Microsoft email integration", connected: false },
      { name: "Apple Mail", icon: "✉️", desc: "iCloud email sync", connected: false },
      { name: "Superhuman", icon: "⚡", desc: "Fast email client", connected: false }
    ],
    "Note-Taking & Documents": [
      { name: "Google Drive", icon: "📁", desc: "Store session notes and documents", connected: false },
      { name: "Notion", icon: "📝", desc: "All-in-one workspace", connected: false },
      { name: "Evernote", icon: "🐘", desc: "Note organization", connected: false },
      { name: "Dropbox", icon: "📦", desc: "File storage and sharing", connected: false },
      { name: "OneDrive", icon: "☁️", desc: "Microsoft cloud storage", connected: false },
      { name: "Obsidian", icon: "💎", desc: "Markdown knowledge base", connected: false }
    ],
    "Payments & Billing": [
      { name: "Stripe", icon: "💳", desc: "Payment processing", connected: false },
      { name: "Square", icon: "⬛", desc: "Invoicing and payments", connected: false },
      { name: "PayPal", icon: "🅿️", desc: "Online payments", connected: false },
      { name: "QuickBooks", icon: "📊", desc: "Accounting and invoicing", connected: false },
      { name: "FreshBooks", icon: "📗", desc: "Small business accounting", connected: false },
      { name: "Wave", icon: "🌊", desc: "Free invoicing", connected: false }
    ],
    "CRM & Client Management": [
      { name: "HubSpot", icon: "🟠", desc: "CRM and client tracking", connected: false },
      { name: "Salesforce", icon: "☁️", desc: "Enterprise CRM", connected: false },
      { name: "Pipedrive", icon: "🔵", desc: "Sales pipeline CRM", connected: false },
      { name: "Practice Better", icon: "💚", desc: "Practice management for coaches", connected: false },
      { name: "CoachAccountable", icon: "✅", desc: "Coaching-specific CRM", connected: false },
      { name: "Paperbell", icon: "🔔", desc: "All-in-one coaching platform", connected: false }
    ],
    "Social & Professional": [
      { name: "LinkedIn", icon: "🔗", desc: "Professional network & client research", connected: false },
      { name: "Twitter/X", icon: "🐦", desc: "Social insights", connected: false },
      { name: "Instagram", icon: "📸", desc: "Visual social presence", connected: false }
    ],
    "Wellness & Health": [
      { name: "Apple Health", icon: "❤️", desc: "Health metrics (with client consent)", connected: false },
      { name: "Oura", icon: "💍", desc: "Sleep and recovery data", connected: false },
      { name: "Whoop", icon: "🟢", desc: "Strain and recovery tracking", connected: false },
      { name: "Fitbit", icon: "⌚", desc: "Activity and wellness data", connected: false }
    ]
  };

  // UF-5: Deep personal questions
  const deepQuestions = [
    {
      id: "life_vision",
      question: "When you imagine your life 10 years from now at its absolute best, what does it look like?",
      placeholder: "Describe your ideal life — where you live, how you spend your days, who you're with, what impact you're having...",
      whyWeAsk: "Understanding your personal vision helps ReGenesis align coaching suggestions with YOUR definition of success, not generic advice."
    },
    {
      id: "core_values",
      question: "What 3-5 values are non-negotiable in how you live and work?",
      placeholder: "Examples: Integrity, growth, family, adventure, authenticity, service...",
      whyWeAsk: "Your values become the lens through which ReGenesis filters all suggestions. We'll never recommend something that violates your core values."
    },
    {
      id: "meaning_of_coaching",
      question: "What does coaching mean to you? Why did you become a coach?",
      placeholder: "Share the deeper purpose behind your work...",
      whyWeAsk: "This becomes part of your 'voice' in ReGenesis. Session notes and suggestions will reflect your philosophy of coaching."
    },
    {
      id: "shadows",
      question: "What are your growing edges as a coach? Where do you get triggered or stuck?",
      placeholder: "Be honest — this is private to you. Examples: impatience with slow progress, over-identifying with clients...",
      whyWeAsk: "ReGenesis can gently flag when these patterns might be showing up. Private to you — never shared."
    },
    {
      id: "life_beyond_work",
      question: "What matters to you outside of coaching? Family, hobbies, causes, dreams?",
      placeholder: "Your whole life, not just work...",
      whyWeAsk: "ReGenesis supports your WHOLE life. We'll help protect time for what matters beyond work."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-teal-50 to-stone-100 flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            R
          </div>
          <span className="text-2xl font-light tracking-wide text-stone-800">ReGenesis</span>
        </div>
        <button onClick={onBack} className="text-stone-500 hover:text-stone-700">
          ← Exit Setup
        </button>
      </header>

      {/* Progress Bar with Step Labels */}
      <div className="px-8 mb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-stone-500">Step {step} of {totalSteps}</span>
            <span className="text-sm text-stone-500">{Math.round((step / totalSteps) * 100)}% complete</span>
          </div>
          <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-600 to-emerald-600 transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-stone-400">
            <span className={step >= 1 ? 'text-teal-600' : ''}>Account</span>
            <span className={step >= 4 ? 'text-teal-600' : ''}>Practice</span>
            <span className={step >= 7 ? 'text-teal-600' : ''}>Tools</span>
            <span className={step >= 8 ? 'text-teal-600' : ''}>Clients</span>
            <span className={step >= 10 ? 'text-teal-600' : ''}>Done</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 flex items-start justify-center px-8 pb-8 overflow-auto">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-stone-800 mb-2">{stepContent[step]?.title}</h1>
            <p className="text-stone-600">{stepContent[step]?.subtitle}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
            {/* Step 1: Account Creation */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="Jesse Torrence" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="jesse@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Password</label>
                  <input type="password" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" placeholder="••••••••" />
                </div>

                {/* UF-4: Social login for trust building - scour first */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-stone-500">or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors">
                    <span className="text-xl">🔗</span>
                    <span className="font-medium">LinkedIn</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors">
                    <span className="text-xl">G</span>
                    <span className="font-medium">Google</span>
                  </button>
                </div>

                <p className="text-xs text-stone-500 text-center mt-4">
                  By continuing, you agree to our Terms of Service and Privacy Policy.
                  We'll use your profile to save you time in the next steps.
                </p>

                <PrivacyShield
                  level="Account Only"
                  explanation="Your credentials are encrypted and never shared. We only use connected accounts to gather PUBLIC information about you."
                />
              </div>
            )}

            {/* Step 2: UF-4 Progressive Trust - Let Us Scour */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center py-6">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Let us do the work</h3>
                  <p className="text-stone-600 max-w-md mx-auto">
                    Before asking you a bunch of questions, we'll search public sources to learn about you.
                    You'll review and correct anything we get wrong.
                  </p>
                </div>

                <div className="bg-stone-50 rounded-xl p-6 space-y-4">
                  <h4 className="font-medium text-stone-800">We'll search for:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: "🔗", text: "Your LinkedIn profile" },
                      { icon: "🌐", text: "Your coaching website" },
                      { icon: "📰", text: "Articles you've written" },
                      { icon: "🎙️", text: "Podcasts you've appeared on" },
                      { icon: "📚", text: "Books you've published" },
                      { icon: "🎓", text: "Certifications & credentials" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-stone-600">
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <span className="text-2xl">⚡</span>
                  <div className="text-sm text-amber-800">
                    <strong>This saves you time.</strong> Instead of filling out 20 fields, you just confirm or correct what we find.
                  </div>
                </div>

                <PrivacyShield
                  level="Public Info Only"
                  explanation="We ONLY access publicly available information. Nothing from private accounts or behind logins. You control what gets saved."
                />
              </div>
            )}

            {/* Step 3: Review Found Information */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <span className="text-2xl">✨</span>
                  <div className="text-sm text-green-800">
                    <strong>Found 12 data points!</strong> Review and correct below.
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-stone-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-stone-700">Current Role</label>
                      <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded">From LinkedIn</span>
                    </div>
                    <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg" defaultValue="Executive Coach & Leadership Consultant" />
                  </div>

                  <div className="border border-stone-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-stone-700">Company/Practice</label>
                      <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded">From LinkedIn</span>
                    </div>
                    <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg" defaultValue="Torrence Coaching Group" />
                  </div>

                  <div className="border border-stone-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-stone-700">Website</label>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">From Google</span>
                    </div>
                    <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg" defaultValue="jessetorrence.com" />
                  </div>

                  <div className="border border-stone-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-stone-700">Certifications</label>
                      <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded">From LinkedIn</span>
                    </div>
                    <div className="space-y-2">
                      {["ICF Professional Certified Coach (PCC)", "Conscious Leadership Group Certified", "Team Diagnostic Survey Certified"].map((cert, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">{cert}</span>
                        </div>
                      ))}
                      <button className="text-sm text-teal-600 hover:underline mt-2">+ Add certification</button>
                    </div>
                  </div>

                  <div className="border border-stone-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-medium text-stone-700">Bio Summary</label>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">From Website</span>
                    </div>
                    <textarea className="w-full px-4 py-2 border border-stone-300 rounded-lg h-24" defaultValue="Jesse partners with executives and emerging leaders to develop self-awareness, build high-trust teams, and create sustainable success. Drawing from 15 years of experience..." />
                  </div>
                </div>

                <button className="text-sm text-stone-500 hover:text-stone-700 underline">
                  Something wrong? Tell us what to correct
                </button>
              </div>
            )}

            {/* Step 4: UF-1 Multi-select for Practice Details */}
            {step === 4 && (
              <div className="space-y-6">
                {/* UF-1: Multi-select for coaching types */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">What types of coaching do you practice?</label>
                    <span className="text-xs text-stone-500">(Select all that apply)</span>
                    <WhyWeAsk reason="We customize your AI assistant based on your coaching specialties. Different types of coaching have different frameworks, language, and approaches." />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Executive Coaching",
                      "Leadership Development",
                      "Life Coaching",
                      "Career Coaching",
                      "Team Coaching",
                      "Health & Wellness",
                      "Business/Startup",
                      "Relationship/Couples",
                      "Performance Coaching",
                      "Transition Coaching",
                      "Spiritual/Integral",
                      "Other"
                    ].map(type => (
                      <label key={type} className="flex items-center gap-2 p-3 border border-stone-200 rounded-lg hover:bg-teal-50 hover:border-teal-300 cursor-pointer transition-colors">
                        <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                        <span className="text-sm text-stone-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* UF-1: Multi-select for client demographics */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">Who do you typically work with?</label>
                    <span className="text-xs text-stone-500">(Select all that apply)</span>
                    <WhyWeAsk reason="Different client types have different contexts. ReGenesis adjusts its suggestions based on who you're coaching." />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "C-Suite Executives",
                      "Senior Leaders",
                      "Mid-Level Managers",
                      "Emerging Leaders",
                      "Entrepreneurs",
                      "Founders/CEOs",
                      "Individual Contributors",
                      "Career Changers",
                      "New Graduates",
                      "Parents/Families"
                    ].map(type => (
                      <label key={type} className="flex items-center gap-2 p-3 border border-stone-200 rounded-lg hover:bg-teal-50 hover:border-teal-300 cursor-pointer transition-colors">
                        <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                        <span className="text-sm text-stone-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">How many active clients do you typically have?</label>
                    <WhyWeAsk reason="This helps us set appropriate defaults for dashboard views and scheduling features." />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {["1-5", "6-15", "16-30", "30+"].map(range => (
                      <label key={range} className="flex items-center justify-center p-3 border border-stone-200 rounded-lg hover:bg-teal-50 hover:border-teal-300 cursor-pointer transition-colors">
                        <input type="radio" name="clientCount" className="sr-only" />
                        <span className="text-sm font-medium text-stone-700">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <PrivacyShield
                  level="Coach Profile"
                  explanation="This information helps personalize your experience. It's never shared with clients unless you choose to display it on your profile."
                />
              </div>
            )}

            {/* Step 5: UF-1 Multi-select for Philosophy & Frameworks */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">What frameworks inform your coaching?</label>
                    <span className="text-xs text-stone-500">(Select all that apply)</span>
                    <WhyWeAsk reason="ReGenesis uses these to suggest relevant frameworks during sessions and to speak in terminology you and your clients understand." />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Conscious Leadership (CLG)",
                      "Internal Family Systems (IFS)",
                      "Nonviolent Communication (NVC)",
                      "Drama Triangle/Empowerment Dynamic",
                      "Polyvagal Theory",
                      "Attachment Theory",
                      "Enneagram",
                      "MBTI/Personality Types",
                      "Strengths-Based (CliftonStrengths)",
                      "Emotional Intelligence (EQ)",
                      "Positive Psychology",
                      "ACT (Acceptance & Commitment)",
                      "CBT/Cognitive Approaches",
                      "Somatic/Body-Based",
                      "Mindfulness-Based",
                      "Spiral Dynamics/Integral",
                      "Systems Thinking",
                      "Design Thinking",
                      "GTD/Productivity",
                      "Other"
                    ].map(fw => (
                      <label key={fw} className="flex items-center gap-2 p-3 border border-stone-200 rounded-lg hover:bg-teal-50 hover:border-teal-300 cursor-pointer transition-colors">
                        <input type="checkbox" className="rounded text-teal-600 focus:ring-teal-500" />
                        <span className="text-sm text-stone-700">{fw}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">Describe your coaching style and voice</label>
                    <WhyWeAsk reason="This becomes the foundation of your AI's 'voice.' Session notes and suggestions will be written in YOUR style, not generic coach-speak." />
                  </div>
                  <textarea
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 h-32"
                    placeholder="Example: I'm direct but compassionate. I believe in meeting clients where they are while gently challenging them to see their blind spots. I use humor when appropriate and always bring it back to values and what matters most..."
                  />
                  <p className="text-xs text-stone-500 mt-2">Don't worry about perfection — you can refine this later.</p>
                </div>

                <PrivacyShield
                  level="Voice Training"
                  explanation="This text trains your personal AI voice model. It's used only to generate content that sounds like YOU."
                />
              </div>
            )}

            {/* Step 6: UF-5 Deep Personal Questions */}
            {step === 6 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg mb-6">
                  <span className="text-2xl">💜</span>
                  <div className="text-sm text-purple-800">
                    <strong>These questions are optional but powerful.</strong> The more ReGenesis understands about YOU as a whole person, the better it can support your coaching and your life.
                  </div>
                </div>

                {deepQuestions.map((q, i) => (
                  <div key={q.id} className="border border-stone-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <label className="text-sm font-medium text-stone-800">{q.question}</label>
                      <WhyWeAsk reason={q.whyWeAsk} />
                    </div>
                    <textarea
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 h-24"
                      placeholder={q.placeholder}
                    />
                  </div>
                ))}

                <PrivacyShield
                  level="Private to You"
                  explanation="These deep questions are NEVER shared with anyone — not clients, not employers, not even our team. They exist only to help YOUR AI understand YOU."
                />
              </div>
            )}

            {/* Step 7: UF-3 Exhaustive Tool Integrations */}
            {step === 7 && (
              <div className="space-y-6">
                <p className="text-sm text-stone-600">
                  Connect your existing tools so ReGenesis works seamlessly with your workflow. You can always add more later.
                </p>

                {Object.entries(toolCategories).map(([category, tools]) => (
                  <div key={category} className="border border-stone-200 rounded-lg overflow-hidden">
                    <div className="bg-stone-50 px-4 py-3 border-b border-stone-200">
                      <h4 className="font-medium text-stone-800">{category}</h4>
                    </div>
                    <div className="divide-y divide-stone-100">
                      {tools.map(tool => (
                        <div key={tool.name} className="flex items-center justify-between p-4 hover:bg-stone-50">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{tool.icon}</span>
                            <div>
                              <div className="font-medium text-stone-800 text-sm">{tool.name}</div>
                              <div className="text-xs text-stone-500">{tool.desc}</div>
                            </div>
                          </div>
                          {tool.connected ? (
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">✓ Connected</span>
                          ) : (
                            <button className="px-4 py-1.5 text-sm border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                              Connect
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <PrivacyShield
                  level="Integration Data"
                  explanation="We only read data needed for coaching features. Calendar reads your schedule; video platforms provide transcripts. We never access personal messages or files unrelated to coaching."
                />
              </div>
            )}

            {/* Step 8: UF-6 Client Invitation Flow */}
            {step === 8 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Option 1: Import from existing tool */}
                  <div className="border border-stone-200 rounded-xl p-6 hover:border-teal-300 cursor-pointer transition-colors">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">📥</span>
                    </div>
                    <h4 className="font-semibold text-stone-800 mb-2">Import Clients</h4>
                    <p className="text-sm text-stone-600 mb-4">
                      Import from your existing CRM, spreadsheet, or coaching platform.
                    </p>
                    <button className="text-sm text-teal-600 font-medium hover:underline">
                      Import from CSV →
                    </button>
                  </div>

                  {/* Option 2: Manual invite */}
                  <div className="border border-stone-200 rounded-xl p-6 hover:border-teal-300 cursor-pointer transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <h4 className="font-semibold text-stone-800 mb-2">Invite by Email</h4>
                    <p className="text-sm text-stone-600 mb-4">
                      Send personalized invitation emails to your clients.
                    </p>
                    <button className="text-sm text-teal-600 font-medium hover:underline">
                      Create invitations →
                    </button>
                  </div>
                </div>

                {/* Quick add form */}
                <div className="bg-stone-50 rounded-xl p-6">
                  <h4 className="font-semibold text-stone-800 mb-4">Quick Add Clients</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Client name" className="px-4 py-2 border border-stone-300 rounded-lg" />
                    <input type="email" placeholder="Email address" className="px-4 py-2 border border-stone-300 rounded-lg" />
                  </div>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700">
                    + Add Client
                  </button>
                </div>

                {/* Draft invitation preview - UF-6 */}
                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  <div className="bg-stone-50 px-4 py-3 border-b border-stone-200 flex items-center justify-between">
                    <h4 className="font-medium text-stone-800">Invitation Email Preview</h4>
                    <button className="text-xs text-teal-600 hover:underline">Customize template</button>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="text-sm text-stone-600 space-y-2">
                      <p><strong>Subject:</strong> Join me on ReGenesis for our coaching journey</p>
                      <hr className="my-2" />
                      <p>Hi [Client Name],</p>
                      <p>I'm excited to share a new tool that will enhance our coaching work together. ReGenesis is an AI-powered companion that helps you stay connected to your growth between our sessions.</p>
                      <p>With ReGenesis, you'll be able to:</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Chat with an AI that knows your full coaching context</li>
                        <li>Track your commitments and celebrate progress</li>
                        <li>Prepare for our sessions with guided reflection</li>
                        <li>Access resources I share, organized in one place</li>
                      </ul>
                      <p><strong>Your privacy is protected.</strong> You control exactly what I can see. Private reflections stay private.</p>
                      <p>Click below to create your account:</p>
                      <div className="my-4">
                        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm">
                          Accept Invitation
                        </button>
                      </div>
                      <p>Looking forward to continuing our work together,<br />[Your Name]</p>
                    </div>
                  </div>
                </div>

                <PrivacyShield
                  level="Client Privacy"
                  explanation="Clients have FULL control over their privacy settings. They can keep content private, share with you, or (if applicable) share anonymized themes with their organization."
                />
              </div>
            )}

            {/* Step 9: Upload Wisdom Corpus */}
            {step === 9 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <span className="text-2xl">📚</span>
                  <div className="text-sm text-amber-800">
                    <strong>This is how ReGenesis learns YOUR system.</strong> Upload your books, frameworks, notes, and templates. The more you share, the more ReGenesis sounds like you.
                  </div>
                </div>

                <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 text-center hover:border-teal-400 transition-colors cursor-pointer">
                  <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📁</span>
                  </div>
                  <h4 className="font-semibold text-stone-800 mb-2">Drag files here or click to upload</h4>
                  <p className="text-sm text-stone-500 mb-4">
                    PDFs, Word docs, text files, or even links to online content
                  </p>
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm hover:bg-teal-700">
                    Choose Files
                  </button>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-stone-800">Suggested content to upload:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: "📖", text: "Books you've written or reference often" },
                      { icon: "📋", text: "Your coaching frameworks & models" },
                      { icon: "📝", text: "Sample session notes (for voice training)" },
                      { icon: "📑", text: "Intake questionnaires & assessments" },
                      { icon: "🎓", text: "Training materials & certifications" },
                      { icon: "💬", text: "Powerful questions you love to ask" },
                      { icon: "📄", text: "Client agreements & templates" },
                      { icon: "🔗", text: "Articles or blog posts you've written" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg text-sm text-stone-600">
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full py-3 border border-stone-300 rounded-lg text-stone-600 hover:bg-stone-50">
                  I'll do this later →
                </button>

                <PrivacyShield
                  level="Wisdom Corpus"
                  explanation="Your uploaded content is used ONLY to train your personal AI. It's never shared, never used to train our general models, and never accessible to other users."
                />
              </div>
            )}

            {/* Step 10: Welcome Complete */}
            {step === 10 && (
              <div className="text-center py-8">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-2xl font-semibold text-stone-800 mb-4">Welcome to ReGenesis, Jesse!</h2>
                <p className="text-stone-600 mb-8">
                  Your AI-powered coaching companion is ready. Here's what you can do next:
                </p>

                <div className="grid grid-cols-1 gap-4 text-left mb-8">
                  <div className="flex items-start gap-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-teal-900">Schedule your first AI-assisted session</h4>
                      <p className="text-sm text-teal-700">Get a T-15 prep brief 15 minutes before your session</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Explore the dashboard</h4>
                      <p className="text-sm text-blue-700">See your clients, calendar, and AI companion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-purple-900">Add your wisdom corpus</h4>
                      <p className="text-sm text-purple-700">Upload your books, frameworks, and notes</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg text-sm text-stone-600">
                  <strong>Pro tip:</strong> The more sessions you run with ReGenesis, the better it learns your voice. Your first few session notes might need some editing — that's how it learns!
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 text-stone-600 hover:text-stone-800 font-medium"
                >
                  ← Back
                </button>
              )}
              <div className="flex-1" />
              {step < totalSteps ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={onComplete}
                  className="px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Go to Dashboard →
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ============ COACHEE ONBOARDING FLOW ============
// UF-9: Much deeper coachee journey with personal context, goals, values, and preferences
function CoacheeOnboardingFlow({ step, setStep, onComplete, onBack }) {
  const totalSteps = 8;

  // Privacy tooltip component
  const WhyWeAsk = ({ reason }) => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    return (
      <span className="relative inline-block ml-1">
        <button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="text-blue-600 hover:text-blue-700 text-xs underline cursor-help"
        >
          Why we ask
        </button>
        {showTooltip && (
          <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-stone-900 text-white text-xs rounded-lg shadow-lg z-10">
            {reason}
            <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-stone-900"></div>
          </div>
        )}
      </span>
    );
  };

  const PrivacyShield = ({ level, explanation }) => (
    <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-800 mt-4">
      <span className="text-lg">🔒</span>
      <div>
        <span className="font-semibold">Privacy: {level}</span>
        <p className="text-blue-700 mt-1">{explanation}</p>
      </div>
    </div>
  );

  const stepContent = {
    1: { title: "Welcome to your growth journey", subtitle: "Create your account to get started" },
    2: { title: "Your privacy comes first", subtitle: "You control what's shared — always" },
    3: { title: "Tell us about yourself", subtitle: "Help ReGenesis understand your context" },
    4: { title: "What brings you to coaching?", subtitle: "Share what you're working on" },
    5: { title: "Your values & vision", subtitle: "What matters most to you?" },
    6: { title: "How can we support you?", subtitle: "Customize your experience" },
    7: { title: "Connect with your coach", subtitle: "Confirm your coaching relationship" },
    8: { title: "You're all set!", subtitle: "Your growth companion is ready" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-50 to-stone-100 flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            R
          </div>
          <span className="text-2xl font-light tracking-wide text-stone-800">ReGenesis</span>
        </div>
        <button onClick={onBack} className="text-stone-500 hover:text-stone-700">
          ← Exit
        </button>
      </header>

      {/* Progress Bar */}
      <div className="px-8 mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-stone-500">Step {step} of {totalSteps}</span>
            <span className="text-sm text-stone-500">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 flex items-start justify-center px-8 pb-8 overflow-auto">
        <div className="max-w-xl w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-light text-stone-800 mb-2">{stepContent[step]?.title}</h1>
            <p className="text-stone-600">{stepContent[step]?.subtitle}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
            {/* Step 1: Account Creation */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="How would you like to be called?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Password</label>
                  <input type="password" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Invite Code
                    <span className="text-stone-400 font-normal ml-1">(from your coach or organization)</span>
                  </label>
                  <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="ABC123" />
                </div>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-stone-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-stone-500">or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-3 border border-stone-300 rounded-lg hover:bg-stone-50">
                    <span>G</span>
                    <span className="font-medium">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 border border-stone-300 rounded-lg hover:bg-stone-50">
                    <span>🔗</span>
                    <span className="font-medium">LinkedIn</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Privacy Deep Dive */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🔐</span>
                  </div>
                  <p className="text-stone-600 max-w-md mx-auto">
                    Before we go further, we want you to understand exactly how your privacy is protected.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center gap-2 font-semibold text-green-800 mb-2">
                      <span>🟢</span> Private (Only You)
                    </div>
                    <p className="text-sm text-green-700">
                      Personal journal entries, private reflections, things you're not ready to share.
                      <strong> No one else can ever see this — not your coach, not your employer, not even us.</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <div className="flex items-center gap-2 font-semibold text-blue-800 mb-2">
                      <span>🔵</span> Coach-Shared
                    </div>
                    <p className="text-sm text-blue-700">
                      Session prep, goals, challenges you want to discuss. Your coach can see this to better support you.
                      <strong> Your employer cannot see this content.</strong>
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                    <div className="flex items-center gap-2 font-semibold text-purple-800 mb-2">
                      <span>🟣</span> Company-Visible (Aggregated Only)
                    </div>
                    <p className="text-sm text-purple-700">
                      If your employer sponsors your coaching, they see ONLY aggregate themes like "leadership development" — never specific content, never your private thoughts, never session details.
                    </p>
                  </div>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-800 mb-2">You're always in control:</h4>
                  <ul className="text-sm text-stone-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      Change privacy settings on any message, anytime
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      Redact specific content even after sharing
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      See exactly what your coach & employer can access
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">✓</span>
                      Export or delete ALL your data at any time
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <input type="checkbox" className="w-5 h-5 rounded text-blue-600" />
                  <p className="text-sm text-amber-800">
                    I understand my privacy rights and how my data is protected.
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Personal Context */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">What's your current role?</label>
                    <WhyWeAsk reason="Understanding your professional context helps your AI companion provide more relevant support and suggestions." />
                  </div>
                  <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg" placeholder="e.g., VP of Engineering, Entrepreneur, Team Lead" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">Company/Organization</label>
                    <span className="text-xs text-stone-400">(Optional)</span>
                  </div>
                  <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg" placeholder="Where do you work?" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">What's your life stage right now?</label>
                    <WhyWeAsk reason="Life stage affects the kinds of challenges and opportunities you're navigating. This helps us personalize support." />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Early career",
                      "Building career",
                      "Leadership transition",
                      "Mid-career pivot",
                      "Executive level",
                      "Entrepreneur/Founder",
                      "Career break",
                      "Pre-retirement"
                    ].map(stage => (
                      <label key={stage} className="flex items-center gap-2 p-3 border border-stone-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer">
                        <input type="radio" name="lifeStage" className="text-blue-600" />
                        <span className="text-sm">{stage}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">What else is important in your life right now?</label>
                    <span className="text-xs text-stone-400">(Select all that apply)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Partner/Relationship",
                      "Young children",
                      "Teenage kids",
                      "Aging parents",
                      "Health focus",
                      "Creative pursuits",
                      "Community/Volunteering",
                      "Spiritual growth"
                    ].map(item => (
                      <label key={item} className="flex items-center gap-2 p-3 border border-stone-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer">
                        <input type="checkbox" className="rounded text-blue-600" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <PrivacyShield
                  level="Coach-Shared (Default)"
                  explanation="This context helps your coach understand your life. You can change this to Private if you prefer."
                />
              </div>
            )}

            {/* Step 4: Coaching Goals */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">What areas are you focusing on in coaching?</label>
                    <span className="text-xs text-stone-400">(Select all that apply)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Leadership presence",
                      "Managing up",
                      "Building team",
                      "Difficult conversations",
                      "Work-life balance",
                      "Career direction",
                      "Confidence/Imposter syndrome",
                      "Stress/Burnout",
                      "Communication skills",
                      "Strategic thinking",
                      "Relationship dynamics",
                      "Personal growth"
                    ].map(area => (
                      <label key={area} className="flex items-center gap-2 p-3 border border-stone-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer">
                        <input type="checkbox" className="rounded text-blue-600" />
                        <span className="text-sm">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">What would make this coaching engagement a success?</label>
                    <WhyWeAsk reason="Clear success criteria help both you and your coach stay aligned on what matters most." />
                  </div>
                  <textarea
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg h-24"
                    placeholder="In 6 months, I'd know this was successful if..."
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">What's the biggest challenge you're facing right now?</label>
                  </div>
                  <textarea
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg h-24"
                    placeholder="What's keeping you up at night? What feels stuck?"
                  />
                </div>

                <PrivacyShield
                  level="Coach-Shared"
                  explanation="This helps your coach prepare for sessions. They'll see this before your first meeting."
                />
              </div>
            )}

            {/* Step 5: Values & Vision */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl mb-4">
                  <div className="flex items-center gap-2 text-purple-800 mb-2">
                    <span className="text-xl">💜</span>
                    <span className="font-semibold">These questions go deeper</span>
                  </div>
                  <p className="text-sm text-purple-700">
                    The more ReGenesis understands about what matters to you, the better it can support your growth. Take your time.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">What values are non-negotiable for you?</label>
                    <WhyWeAsk reason="Your values become the compass for all suggestions. We'll never recommend something that conflicts with your core values." />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {[
                      "Integrity", "Growth", "Family", "Freedom", "Excellence",
                      "Creativity", "Service", "Adventure", "Security", "Authenticity",
                      "Connection", "Impact", "Balance", "Learning", "Courage"
                    ].map(value => (
                      <label key={value} className="flex items-center gap-2 p-2 border border-stone-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 cursor-pointer text-center justify-center">
                        <input type="checkbox" className="sr-only" />
                        <span className="text-sm">{value}</span>
                      </label>
                    ))}
                  </div>
                  <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-lg text-sm" placeholder="Add your own values..." />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">When you imagine your life at its best 5 years from now, what does it look like?</label>
                  </div>
                  <textarea
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg h-32"
                    placeholder="Describe your ideal life — your work, relationships, health, impact, how you spend your time..."
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-stone-700">What's one thing you'd change about yourself if you could?</label>
                  </div>
                  <textarea
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg h-20"
                    placeholder="Be honest — this is private unless you choose to share it"
                  />
                </div>

                <PrivacyShield
                  level="Private (Only You)"
                  explanation="This deep personal content is PRIVATE by default. Only share with your coach when you're ready."
                />
              </div>
            )}

            {/* Step 6: Preferences */}
            {step === 6 && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">How often would you like ReGenesis to check in?</label>
                    <WhyWeAsk reason="Your AI companion can send gentle nudges to help you stay connected to your growth. You control the frequency." />
                  </div>
                  <div className="space-y-2">
                    {[
                      { value: "daily", label: "Daily gentle nudges", desc: "Quick check-ins to start your day" },
                      { value: "few", label: "A few times per week", desc: "Regular touchpoints without overwhelm" },
                      { value: "weekly", label: "Weekly reflection prompts", desc: "Deeper weekly check-ins" },
                      { value: "manual", label: "Only when I reach out", desc: "I'll initiate conversations" }
                    ].map(opt => (
                      <label key={opt.value} className="flex items-start gap-3 p-4 border border-stone-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer">
                        <input type="radio" name="frequency" className="mt-1 text-blue-600" />
                        <div>
                          <div className="font-medium text-stone-800">{opt.label}</div>
                          <div className="text-sm text-stone-500">{opt.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">When are the best times to reach you?</label>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { time: "Morning", icon: "🌅", desc: "6am-12pm" },
                      { time: "Afternoon", icon: "☀️", desc: "12pm-6pm" },
                      { time: "Evening", icon: "🌙", desc: "6pm-10pm" }
                    ].map(opt => (
                      <label key={opt.time} className="flex flex-col items-center gap-2 p-4 border border-stone-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer">
                        <input type="checkbox" className="sr-only" />
                        <span className="text-2xl">{opt.icon}</span>
                        <span className="font-medium text-sm">{opt.time}</span>
                        <span className="text-xs text-stone-500">{opt.desc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <label className="text-sm font-medium text-stone-700">What kind of support feels most helpful?</label>
                    <span className="text-xs text-stone-400">(Select all that apply)</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { id: "questions", label: "Thought-provoking questions", desc: "Help me explore and reflect" },
                      { id: "reminders", label: "Gentle accountability reminders", desc: "Help me follow through on commitments" },
                      { id: "celebrate", label: "Celebration of wins", desc: "Acknowledge my progress and successes" },
                      { id: "challenge", label: "Gentle challenges", desc: "Push me out of my comfort zone" },
                      { id: "resources", label: "Relevant resources", desc: "Articles, exercises, and tools" }
                    ].map(opt => (
                      <label key={opt.id} className="flex items-start gap-3 p-3 border border-stone-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer">
                        <input type="checkbox" className="mt-1 rounded text-blue-600" />
                        <div>
                          <div className="font-medium text-sm text-stone-800">{opt.label}</div>
                          <div className="text-xs text-stone-500">{opt.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Coach Connection */}
            {step === 7 && (
              <div className="space-y-6">
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-900 text-lg">Jesse Torrence</h3>
                      <p className="text-sm text-teal-700">Executive Coach & Leadership Consultant</p>
                      <p className="text-xs text-teal-600 mt-1">ICF Professional Certified Coach (PCC)</p>
                    </div>
                  </div>
                  <p className="text-sm text-teal-800">
                    "I'm excited to work with you! ReGenesis will help us stay connected between sessions and deepen our coaching work together."
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-stone-800">Confirm your coaching arrangement:</h4>

                  <div className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg">
                    <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                    <div className="text-sm text-stone-700">
                      I confirm Jesse Torrence is my coach
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg">
                    <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                    <div className="text-sm text-stone-700">
                      I consent to sharing Coach-Shared content with my coach
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <div className="text-sm text-stone-700">
                      My coaching is sponsored by my employer (optional — enables aggregate reporting)
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-800 mb-2">Your next session:</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📅</span>
                    </div>
                    <div>
                      <div className="font-medium text-stone-800">Thursday, January 23rd at 2:00 PM</div>
                      <div className="text-sm text-stone-500">60 minutes · Zoom</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: Complete */}
            {step === 8 && (
              <div className="text-center py-6">
                <div className="text-6xl mb-6">🌱</div>
                <h2 className="text-2xl font-semibold text-stone-800 mb-4">Welcome to your growth journey!</h2>
                <p className="text-stone-600 mb-8">
                  Your personal growth companion is ready. ReGenesis will help you stay connected to your coaching journey between sessions.
                </p>

                <div className="grid grid-cols-1 gap-4 text-left mb-8">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-2xl">💬</span>
                    <div>
                      <h4 className="font-semibold text-blue-900">Chat anytime</h4>
                      <p className="text-sm text-blue-700">Your AI companion knows your context and is available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-purple-900">Track your commitments</h4>
                      <p className="text-sm text-purple-700">Stay accountable to the goals you set with your coach</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-2xl">📝</span>
                    <div>
                      <h4 className="font-semibold text-green-900">Prepare for sessions</h4>
                      <p className="text-sm text-green-700">Get prompts to help you arrive prepared and focused</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg text-sm text-amber-800 text-left">
                  <strong>Before your first session:</strong> Take a few minutes to chat with ReGenesis about what's on your mind. It helps your coach prepare.
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button onClick={() => setStep(step - 1)} className="px-6 py-2 text-stone-600 hover:text-stone-800 font-medium">
                  ← Back
                </button>
              )}
              <div className="flex-1" />
              {step < totalSteps ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium shadow-lg"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={onComplete}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium shadow-lg"
                >
                  Start My Journey →
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ============ ADMIN ONBOARDING FLOW ============
// UF-9: Much deeper admin/organizational decision maker journey
function AdminOnboardingFlow({ step, setStep, onComplete, onBack }) {
  const totalSteps = 7;

  const stepContent = {
    1: { title: "Set up your organization", subtitle: "Create your corporate coaching program" },
    2: { title: "Your role", subtitle: "Help us understand your responsibilities" },
    3: { title: "Program goals", subtitle: "What does success look like?" },
    4: { title: "Privacy architecture", subtitle: "How employee data is protected" },
    5: { title: "Coach management", subtitle: "Bring your coaches or use our network" },
    6: { title: "Employee onboarding", subtitle: "How employees will join the program" },
    7: { title: "You're all set!", subtitle: "Your program is ready to launch" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-purple-50 to-stone-100 flex flex-col">
      {/* Header */}
      <header className="px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            R
          </div>
          <span className="text-2xl font-light tracking-wide text-stone-800">ReGenesis</span>
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium">Enterprise</span>
        </div>
        <button onClick={onBack} className="text-stone-500 hover:text-stone-700">
          ← Exit Setup
        </button>
      </header>

      {/* Progress Bar */}
      <div className="px-8 mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-stone-500">Step {step} of {totalSteps}</span>
            <span className="text-sm text-stone-500">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-violet-600 transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 flex items-start justify-center px-8 pb-8 overflow-auto">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-light text-stone-800 mb-2">{stepContent[step]?.title}</h1>
            <p className="text-stone-600">{stepContent[step]?.subtitle}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
            {/* Step 1: Organization Setup */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Organization Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500" placeholder="Acme Corp" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Your Title</label>
                    <input type="text" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500" placeholder="VP of People" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Password</label>
                  <input type="password" className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Organization Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {["1-50", "51-200", "201-1000", "1000+"].map(size => (
                      <label key={size} className="flex items-center justify-center p-3 border border-stone-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 cursor-pointer">
                        <input type="radio" name="orgSize" className="sr-only" />
                        <span className="text-sm font-medium">{size}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Industry</label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Technology</option>
                    <option>Financial Services</option>
                    <option>Healthcare</option>
                    <option>Manufacturing</option>
                    <option>Professional Services</option>
                    <option>Retail</option>
                    <option>Non-Profit</option>
                    <option>Government</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Your Role */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">What's your primary role in the coaching program?</label>
                  <div className="space-y-2">
                    {[
                      { id: "sponsor", title: "Executive Sponsor", desc: "I'm funding/championing the program" },
                      { id: "admin", title: "Program Administrator", desc: "I manage day-to-day operations" },
                      { id: "hr", title: "HR/People Leader", desc: "Coaching is part of our talent strategy" },
                      { id: "ld", title: "L&D Leader", desc: "Coaching is part of our development programs" },
                      { id: "both", title: "Multiple roles", desc: "I wear several hats" }
                    ].map(role => (
                      <label key={role.id} className="flex items-start gap-3 p-4 border border-stone-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 cursor-pointer">
                        <input type="radio" name="role" className="mt-1 text-purple-600" />
                        <div>
                          <div className="font-medium text-stone-800">{role.title}</div>
                          <div className="text-sm text-stone-500">{role.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">Who else needs admin access?</label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input type="email" className="flex-1 px-4 py-2 border border-stone-300 rounded-lg" placeholder="colleague@company.com" />
                      <select className="px-3 py-2 border border-stone-300 rounded-lg">
                        <option>Full Admin</option>
                        <option>View Only</option>
                        <option>Coach Manager</option>
                      </select>
                      <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200">
                        + Add
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-stone-500 mt-2">You can add more admins later in Settings.</p>
                </div>
              </div>
            )}

            {/* Step 3: Program Goals */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">What are your primary goals for this coaching program?</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Leadership development",
                      "Executive coaching",
                      "High-potential acceleration",
                      "New manager support",
                      "Retention & engagement",
                      "Performance improvement",
                      "DEI leadership",
                      "Transition support",
                      "Team effectiveness",
                      "Culture transformation"
                    ].map(goal => (
                      <label key={goal} className="flex items-center gap-2 p-3 border border-stone-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 cursor-pointer">
                        <input type="checkbox" className="rounded text-purple-600" />
                        <span className="text-sm">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">How many employees will be in this program?</label>
                  <div className="grid grid-cols-4 gap-2">
                    {["1-10", "11-50", "51-200", "200+"].map(count => (
                      <label key={count} className="flex items-center justify-center p-3 border border-stone-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 cursor-pointer">
                        <input type="radio" name="employeeCount" className="sr-only" />
                        <span className="text-sm font-medium">{count}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">What does success look like for this program?</label>
                  <textarea
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg h-24"
                    placeholder="In 12 months, we'd consider this program successful if..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">What metrics matter most to you?</label>
                  <div className="space-y-2">
                    {[
                      { id: "engagement", label: "Engagement rates", desc: "How actively employees use coaching" },
                      { id: "satisfaction", label: "Satisfaction scores", desc: "How happy employees are with coaching" },
                      { id: "retention", label: "Retention impact", desc: "Effect on employee retention" },
                      { id: "promotion", label: "Promotion rates", desc: "Career progression of coached employees" },
                      { id: "performance", label: "Performance ratings", desc: "Performance improvement over time" },
                      { id: "roi", label: "ROI calculation", desc: "Financial return on coaching investment" }
                    ].map(metric => (
                      <label key={metric.id} className="flex items-start gap-3 p-3 border border-stone-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 cursor-pointer">
                        <input type="checkbox" className="mt-1 rounded text-purple-600" />
                        <div>
                          <div className="font-medium text-sm text-stone-800">{metric.label}</div>
                          <div className="text-xs text-stone-500">{metric.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Privacy Architecture */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🔐</span>
                    <div>
                      <h3 className="font-semibold text-purple-900">Privacy by Architecture</h3>
                      <p className="text-sm text-purple-700">This isn't just policy — it's how the system is built.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <span>✓</span> What you CAN see:
                    </div>
                    <ul className="text-sm text-green-700 space-y-1 ml-6">
                      <li>• Aggregate engagement metrics (% of employees using coaching)</li>
                      <li>• Program-level themes (e.g., "34% focusing on leadership")</li>
                      <li>• Satisfaction and NPS scores</li>
                      <li>• Session completion rates</li>
                      <li>• ROI indicators and business impact metrics</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <span>✕</span> What you CANNOT see:
                    </div>
                    <ul className="text-sm text-red-700 space-y-1 ml-6">
                      <li>• Individual session content or notes</li>
                      <li>• Personal goals, challenges, or struggles</li>
                      <li>• Specific coach-client conversations</li>
                      <li>• Any data marked Private by employees</li>
                      <li>• Who is discussing what topics (de-identified only)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-800 mb-3">Why this matters:</h4>
                  <ul className="text-sm text-stone-600 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">→</span>
                      <span><strong>Psychological safety:</strong> Employees will be more honest when they know leadership can't see specifics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">→</span>
                      <span><strong>Legal protection:</strong> You're protected from knowing things you shouldn't</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-0.5">→</span>
                      <span><strong>Trust building:</strong> Clear boundaries build trust in the program</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <input type="checkbox" className="w-5 h-5 rounded text-purple-600" />
                  <p className="text-sm text-amber-800">
                    I understand and accept the privacy architecture. I will not attempt to circumvent these protections.
                  </p>
                </div>

                <div className="text-center">
                  <button className="text-sm text-purple-600 hover:underline">
                    Download Privacy Architecture Document (PDF)
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Coach Management */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">How will you source coaches?</label>
                  <div className="space-y-2">
                    {[
                      { id: "internal", title: "Internal coaches", desc: "We have our own coaching staff", icon: "🏢" },
                      { id: "external", title: "External coaches", desc: "We work with independent coaches", icon: "🌐" },
                      { id: "network", title: "ReGenesis network", desc: "Help us find qualified coaches", icon: "✨" },
                      { id: "mixed", title: "Mixed approach", desc: "Combination of the above", icon: "🔄" }
                    ].map(option => (
                      <label key={option.id} className="flex items-start gap-3 p-4 border border-stone-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 cursor-pointer">
                        <input type="radio" name="coachSource" className="mt-1 text-purple-600" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span>{option.icon}</span>
                            <span className="font-medium text-stone-800">{option.title}</span>
                          </div>
                          <div className="text-sm text-stone-500">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  <div className="bg-stone-50 px-4 py-3 border-b border-stone-200">
                    <h4 className="font-medium text-stone-800">Invite Coaches</h4>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex gap-2">
                      <input type="email" className="flex-1 px-4 py-2 border border-stone-300 rounded-lg" placeholder="coach@email.com" />
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                        Invite
                      </button>
                    </div>
                    <p className="text-xs text-stone-500">
                      Coaches will receive an invitation to join your organization on ReGenesis.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">Coach requirements (optional)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "ICF Credential (ACC/PCC/MCC)",
                      "Executive coaching experience",
                      "Industry expertise",
                      "Specific methodology training",
                      "Background check completed",
                      "Insurance/liability coverage"
                    ].map(req => (
                      <label key={req} className="flex items-center gap-2 p-3 border border-stone-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                        <input type="checkbox" className="rounded text-purple-600" />
                        <span className="text-sm">{req}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Employee Onboarding */}
            {step === 6 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-3">How will employees join the program?</label>
                  <div className="space-y-2">
                    {[
                      { id: "invite", title: "Admin invites employees", desc: "You send invitations to specific employees", icon: "📧" },
                      { id: "selfserve", title: "Self-service enrollment", desc: "Employees can request coaching access", icon: "🙋" },
                      { id: "sso", title: "SSO auto-enrollment", desc: "Employees automatically get access via SSO", icon: "🔑" },
                      { id: "manager", title: "Manager nomination", desc: "Managers nominate direct reports", icon: "👥" }
                    ].map(option => (
                      <label key={option.id} className="flex items-start gap-3 p-4 border border-stone-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 cursor-pointer">
                        <input type="checkbox" className="mt-1 rounded text-purple-600" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span>{option.icon}</span>
                            <span className="font-medium text-stone-800">{option.title}</span>
                          </div>
                          <div className="text-sm text-stone-500">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  <div className="bg-stone-50 px-4 py-3 border-b border-stone-200 flex items-center justify-between">
                    <h4 className="font-medium text-stone-800">Invitation Email Preview</h4>
                    <button className="text-xs text-purple-600 hover:underline">Customize</button>
                  </div>
                  <div className="p-4 bg-white text-sm text-stone-600 space-y-2">
                    <p><strong>Subject:</strong> You've been invited to ReGenesis coaching</p>
                    <hr className="my-2" />
                    <p>Hi [Employee Name],</p>
                    <p>Great news! [Company] is providing you access to executive coaching through ReGenesis.</p>
                    <p>ReGenesis pairs you with a professional coach and gives you an AI companion to support your growth between sessions.</p>
                    <p><strong>Your privacy is protected:</strong> Your coaching content is confidential. [Company] only sees aggregate program metrics — never your personal goals or session content.</p>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm mt-2">
                      Accept Invitation
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">SSO Configuration (optional)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: "Okta", icon: "🔐" },
                      { name: "Azure AD", icon: "☁️" },
                      { name: "Google Workspace", icon: "G" }
                    ].map(sso => (
                      <button key={sso.name} className="p-4 border border-stone-200 rounded-lg hover:border-purple-300 text-center">
                        <span className="text-2xl mb-2 block">{sso.icon}</span>
                        <span className="text-sm font-medium">{sso.name}</span>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mt-2">SSO setup can be completed later with your IT team.</p>
                </div>
              </div>
            )}

            {/* Step 7: Complete */}
            {step === 7 && (
              <div className="text-center py-6">
                <div className="text-6xl mb-6">🏛️</div>
                <h2 className="text-2xl font-semibold text-stone-800 mb-4">Your program is ready to launch!</h2>
                <p className="text-stone-600 mb-8">
                  You can now invite coaches, enroll employees, and start tracking program impact.
                </p>

                <div className="grid grid-cols-1 gap-4 text-left mb-8">
                  <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <span className="text-2xl">👥</span>
                    <div>
                      <h4 className="font-semibold text-purple-900">Invite your first employees</h4>
                      <p className="text-sm text-purple-700">Start with a pilot group to test the program</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-blue-900">Set up your dashboard</h4>
                      <p className="text-sm text-blue-700">Configure the metrics that matter most to you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h4 className="font-semibold text-green-900">Schedule a success review</h4>
                      <p className="text-sm text-green-700">We'll check in after 30 days to optimize your program</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg text-sm text-amber-800 text-left">
                  <strong>Need help?</strong> Your dedicated success manager will reach out within 24 hours to help with rollout.
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button onClick={() => setStep(step - 1)} className="px-6 py-2 text-stone-600 hover:text-stone-800 font-medium">
                  ← Back
                </button>
              )}
              <div className="flex-1" />
              {step < totalSteps ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-lg font-medium shadow-lg"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={onComplete}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white rounded-lg font-medium shadow-lg"
                >
                  Launch Program →
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ============ COACHEE DASHBOARD SHELL ============
// UF-9: Expanded Coachee Dashboard with much more depth
function CoacheeDashboardShell({ onLogout }) {
  const [activePage, setActivePage] = React.useState("Home");
  const [privacyLevel, setPrivacyLevel] = React.useState("coach-shared");
  const [showPrivacyModal, setShowPrivacyModal] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-blue-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="text-xl font-light text-stone-800">ReGenesis</span>
            </div>
            <nav className="flex gap-4">
              {["Home", "Companion", "Journal", "Progress", "Resources", "Privacy", "Settings"].map(page => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activePage === page
                      ? "bg-blue-100 text-blue-700"
                      : "text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-lg text-xs text-green-700"
            >
              <span>🔒</span>
              Privacy: {privacyLevel === 'private' ? 'Private' : privacyLevel === 'coach-shared' ? 'Coach-Shared' : 'Company-Visible'}
            </button>
            <button onClick={onLogout} className="text-stone-500 hover:text-stone-700 text-sm">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-8">
        {activePage === "Home" && (
          <div className="max-w-5xl mx-auto">
            {/* Welcome Section with Context */}
            <div className="mb-8">
              <h1 className="text-3xl font-light text-stone-800 mb-2">Welcome back, Sarah</h1>
              <p className="text-stone-600">Your next session is in 3 days with Jesse.</p>
            </div>

            {/* Daily Check-in Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Daily Check-in</h2>
                  <p className="text-blue-100 text-sm mb-4">How are you showing up today?</p>
                </div>
                <span className="text-3xl">🌅</span>
              </div>
              <div className="flex gap-3 mb-4">
                {["😔", "😐", "🙂", "😊", "🤩"].map((emoji, i) => (
                  <button key={i} className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl text-2xl transition-colors">
                    {emoji}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="What's on your mind this morning?"
                className="w-full px-4 py-3 bg-white/20 rounded-xl text-white placeholder-blue-200 border border-white/30"
              />
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-blue-200">This check-in is Private by default</span>
                <button className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium">
                  Submit
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Quick Chat */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                  <span>💬</span> Chat with ReGenesis
                </h2>
                <p className="text-sm text-stone-600 mb-4">
                  Continue your growth journey between sessions. I'm here 24/7 and I remember everything we've discussed.
                </p>
                <div className="bg-stone-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-stone-600 italic">
                    "Last time we talked, you were working through the boundary conversation with your manager. How did that go?"
                  </p>
                </div>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                  Continue Conversation
                </button>
              </div>

              {/* Upcoming Session with Prep */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                  <span>📅</span> Upcoming Session
                </h2>
                <div className="p-4 bg-stone-50 rounded-lg mb-4">
                  <div className="font-medium">Thursday, Jan 23 at 2:00 PM</div>
                  <div className="text-sm text-stone-600">with Jesse Torrence</div>
                  <div className="text-xs text-stone-500 mt-1">60 minutes · Zoom</div>
                </div>
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-stone-700">Session Prep Prompts:</h4>
                  <div className="text-sm text-stone-600 space-y-1">
                    <p>• What wins do you want to celebrate?</p>
                    <p>• What's feeling stuck or challenging?</p>
                    <p>• What do you most want from this session?</p>
                  </div>
                </div>
                <button className="w-full py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-lg text-sm font-medium">
                  Start Session Prep →
                </button>
              </div>

              {/* Active Commitments */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-stone-800 flex items-center gap-2">
                    <span>🎯</span> Active Commitments
                  </h2>
                  <span className="text-xs text-stone-500">3 active</span>
                </div>
                <div className="space-y-3">
                  {[
                    { text: "Have boundary conversation with manager", due: "This week", status: "urgent", progress: 0 },
                    { text: "Journal for 10 minutes daily", due: "Ongoing", status: "on_track", progress: 5 },
                    { text: "Practice NVC response before reacting", due: "Ongoing", status: "on_track", progress: 3 }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-stone-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" className="rounded text-blue-600" />
                          <span className="text-sm text-stone-800">{item.text}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'urgent' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                        }`}>
                          {item.due}
                        </span>
                      </div>
                      {item.progress > 0 && (
                        <div className="ml-7 text-xs text-stone-500">
                          {item.progress} of 7 days this week
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button className="mt-4 text-sm text-blue-600 hover:underline">+ Add a commitment</button>
              </div>

              {/* Recent Insights */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                  <span>💡</span> Recent Insights
                </h2>
                <div className="space-y-4">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-xs text-purple-600 mb-1">From your last session</div>
                    <p className="text-sm text-purple-800">
                      "The pattern I notice is that I tend to over-explain when I'm feeling defensive."
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-xs text-blue-600 mb-1">ReGenesis noticed</div>
                    <p className="text-sm text-blue-800">
                      You've mentioned feeling "unseen" at work 4 times in the last 2 weeks.
                    </p>
                  </div>
                </div>
                <button className="mt-4 text-sm text-blue-600 hover:underline">View all insights →</button>
              </div>
            </div>

            {/* Your Journey Timeline */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <h2 className="font-semibold text-stone-800 mb-6 flex items-center gap-2">
                <span>🛤️</span> Your Journey
              </h2>
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {[
                  { date: "Started", label: "Coaching began", icon: "🌱" },
                  { date: "Week 2", label: "Identified core values", icon: "💎" },
                  { date: "Week 4", label: "First boundary conversation", icon: "🚧" },
                  { date: "Week 6", label: "Manager feedback improved", icon: "📈" },
                  { date: "Now", label: "Building on wins", icon: "⭐" },
                  { date: "Goal", label: "Lead with confidence", icon: "🎯" }
                ].map((milestone, i) => (
                  <div key={i} className="flex-shrink-0 text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl mb-2 ${
                      i === 4 ? 'bg-blue-100 border-2 border-blue-500' : 'bg-stone-100'
                    }`}>
                      {milestone.icon}
                    </div>
                    <div className="text-xs font-medium text-stone-800">{milestone.date}</div>
                    <div className="text-xs text-stone-500 max-w-[80px]">{milestone.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === "Companion" && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 h-[650px] flex flex-col">
              <div className="p-4 border-b border-stone-200 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-stone-800">Chat with ReGenesis</h2>
                  <p className="text-sm text-stone-500">Your 24/7 growth companion · Knows your full context</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 text-xs bg-stone-100 rounded-lg hover:bg-stone-200">
                    Voice Mode
                  </button>
                </div>
              </div>
              <div className="flex-1 p-4 overflow-auto space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">🌱</div>
                  <div className="bg-stone-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hi Sarah! How are you feeling today? I noticed you had that boundary conversation on your list — how did it go?</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">It actually went better than I expected! My manager was more receptive than I thought.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-sm flex-shrink-0">🌱</div>
                  <div className="bg-stone-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">That's wonderful! What do you think made the difference? I remember you were worried about being seen as "difficult" — did that come up?</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-stone-200">
                {/* Quick prompts */}
                <div className="flex gap-2 mb-3 overflow-x-auto">
                  {["I'm feeling stuck", "Help me process something", "Remind me of my values", "Session prep"].map(prompt => (
                    <button key={prompt} className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 whitespace-nowrap">
                      {prompt}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <input type="text" className="flex-1 px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="Type a message..." />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send</button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-4 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Coach-Shared
                    </span>
                    <button className="text-blue-600 hover:underline">Change privacy</button>
                  </div>
                  <button className="text-xs text-stone-400 hover:text-stone-600">Export conversation</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "Journal" && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-light text-stone-800">Your Journal</h1>
                <p className="text-stone-600">Private reflections — only you can see these</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                + New Entry
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-5 text-white">
                <div className="text-3xl mb-2">📝</div>
                <div className="text-2xl font-bold">23</div>
                <div className="text-purple-200 text-sm">Journal entries</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl p-5 text-white">
                <div className="text-3xl mb-2">🔥</div>
                <div className="text-2xl font-bold">7</div>
                <div className="text-pink-200 text-sm">Day streak</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-5 text-white">
                <div className="text-3xl mb-2">💡</div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-amber-200 text-sm">Insights captured</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              <div className="p-4 border-b border-stone-200 bg-stone-50">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-stone-800">Recent Entries</h2>
                  <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
                    <span>🔒</span> All entries are Private
                  </div>
                </div>
              </div>
              <div className="divide-y divide-stone-100">
                {[
                  { date: "Today", title: "Morning reflection", preview: "Feeling more confident about the conversation yesterday. Jesse was right that...", mood: "😊" },
                  { date: "Yesterday", title: "Processing the feedback", preview: "Got some tough feedback in the meeting. Need to sit with this before reacting...", mood: "😐" },
                  { date: "Jan 18", title: "Breakthrough moment", preview: "I finally understand what Jesse meant about my pattern of over-explaining...", mood: "🤩" },
                  { date: "Jan 16", title: "Evening check-in", preview: "Tired but satisfied. Made progress on the boundary conversation prep...", mood: "🙂" }
                ].map((entry, i) => (
                  <div key={i} className="p-4 hover:bg-stone-50 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">{entry.mood}</span>
                          <span className="font-medium text-stone-800">{entry.title}</span>
                        </div>
                        <p className="text-sm text-stone-600 line-clamp-1">{entry.preview}</p>
                      </div>
                      <span className="text-xs text-stone-500">{entry.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === "Progress" && (
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-8">Your Progress</h1>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Sessions Completed", value: "12", icon: "📅" },
                { label: "Commitments Done", value: "18", icon: "✅" },
                { label: "Avg Satisfaction", value: "4.7", icon: "⭐" },
                { label: "Weeks in Program", value: "8", icon: "📆" }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-stone-200 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-stone-800">{stat.value}</div>
                  <div className="text-sm text-stone-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4">Themes You're Working On</h2>
                <div className="space-y-3">
                  {[
                    { theme: "Boundaries & Assertiveness", sessions: 5, progress: 70 },
                    { theme: "Leadership Presence", sessions: 4, progress: 55 },
                    { theme: "Work-Life Balance", sessions: 3, progress: 40 },
                    { theme: "Managing Up", sessions: 2, progress: 25 }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-700">{item.theme}</span>
                        <span className="text-stone-500">{item.sessions} sessions</span>
                      </div>
                      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4">Mood Trend</h2>
                <div className="flex items-end justify-between h-32 px-4">
                  {[3, 4, 3, 4, 5, 4, 5, 4, 4, 5].map((mood, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t"
                        style={{ height: `${mood * 20}px` }}
                      />
                      <span className="text-xs text-stone-400">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-stone-500 mt-4">Last 10 check-ins · Trending up!</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 md:col-span-2">
                <h2 className="font-semibold text-stone-800 mb-4">Completed Commitments</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "Set clearer expectations with team",
                    "Daily morning reflection",
                    "Weekly 1:1 with manager",
                    "Said no to one request",
                    "Delegated a project",
                    "Took lunch break every day",
                    "Shared feedback in meeting",
                    "Asked for help"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg text-sm text-green-800">
                      <span>✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "Resources" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-8">Your Resources</h1>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                  <span>📚</span> From Your Coach
                </h2>
                <div className="space-y-3">
                  {[
                    { title: "Conscious Leadership Commitments", type: "PDF", date: "Shared Jan 15" },
                    { title: "NVC Communication Framework", type: "Article", date: "Shared Jan 10" },
                    { title: "Boundaries Worksheet", type: "PDF", date: "Shared Jan 5" },
                    { title: "Values Clarification Exercise", type: "Exercise", date: "Shared Dec 20" }
                  ].map((resource, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-stone-50 rounded-lg hover:bg-stone-100 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">📄</span>
                        <div>
                          <div className="font-medium text-stone-800">{resource.title}</div>
                          <div className="text-xs text-stone-500">{resource.type} · {resource.date}</div>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:underline text-sm">Open</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                  <span>🎧</span> Recommended by ReGenesis
                </h2>
                <p className="text-sm text-stone-600 mb-4">Based on themes from your recent sessions</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "The Power of Vulnerability", author: "Brené Brown", type: "TED Talk" },
                    { title: "Difficult Conversations", author: "Stone, Patton, Heen", type: "Book" },
                    { title: "Radical Candor", author: "Kim Scott", type: "Book" },
                    { title: "Setting Boundaries", author: "Nedra Tawwab", type: "Article" }
                  ].map((resource, i) => (
                    <div key={i} className="p-4 border border-stone-200 rounded-lg hover:border-blue-300 cursor-pointer">
                      <div className="font-medium text-stone-800 mb-1">{resource.title}</div>
                      <div className="text-sm text-stone-600">{resource.author}</div>
                      <div className="text-xs text-blue-600 mt-2">{resource.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "Privacy" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-2">Privacy & Data Transparency</h1>
            <p className="text-stone-600 mb-8">See exactly what's shared and with whom</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="text-3xl mb-3">🟢</div>
                <h3 className="font-semibold text-green-800 mb-2">Private</h3>
                <p className="text-sm text-green-700 mb-4">Only you can see</p>
                <div className="text-2xl font-bold text-green-800">23 items</div>
                <p className="text-xs text-green-600 mt-1">Journal entries, private reflections</p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="text-3xl mb-3">🔵</div>
                <h3 className="font-semibold text-blue-800 mb-2">Coach-Shared</h3>
                <p className="text-sm text-blue-700 mb-4">You + your coach</p>
                <div className="text-2xl font-bold text-blue-800">47 items</div>
                <p className="text-xs text-blue-600 mt-1">Session prep, goals, conversations</p>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                <div className="text-3xl mb-3">🟣</div>
                <h3 className="font-semibold text-purple-800 mb-2">Company-Visible</h3>
                <p className="text-sm text-purple-700 mb-4">Anonymized themes only</p>
                <div className="text-2xl font-bold text-purple-800">3 themes</div>
                <p className="text-xs text-purple-600 mt-1">Leadership, Boundaries, Balance</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 mb-6">
              <h2 className="font-semibold text-stone-800 mb-4">What Your Employer Can See</h2>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-800 mb-3">
                  Acme Corp sees ONLY these aggregate, anonymized data points:
                </p>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• That you are actively engaged in coaching (yes/no)</li>
                  <li>• Your satisfaction rating (if you choose to share)</li>
                  <li>• General themes: "Leadership", "Work-Life Balance" (anonymized with others)</li>
                </ul>
                <p className="text-xs text-purple-600 mt-3">
                  They CANNOT see: session content, specific goals, private reflections, or any personal details.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <h2 className="font-semibold text-stone-800 mb-4">Your Data Rights</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border border-stone-200 rounded-lg hover:bg-stone-50 text-left">
                  <div className="font-medium text-stone-800 mb-1">Export All Data</div>
                  <p className="text-sm text-stone-600">Download everything we have</p>
                </button>
                <button className="p-4 border border-stone-200 rounded-lg hover:bg-stone-50 text-left">
                  <div className="font-medium text-stone-800 mb-1">Audit Log</div>
                  <p className="text-sm text-stone-600">See who accessed what</p>
                </button>
                <button className="p-4 border border-stone-200 rounded-lg hover:bg-stone-50 text-left">
                  <div className="font-medium text-stone-800 mb-1">Redact Content</div>
                  <p className="text-sm text-stone-600">Remove specific items</p>
                </button>
                <button className="p-4 border border-red-200 rounded-lg hover:bg-red-50 text-left">
                  <div className="font-medium text-red-800 mb-1">Delete Account</div>
                  <p className="text-sm text-red-600">Remove all data permanently</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {activePage === "Settings" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-8">Settings</h1>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    { label: "Daily check-in reminders", enabled: true },
                    { label: "Session prep reminders", enabled: true },
                    { label: "Commitment reminders", enabled: true },
                    { label: "Weekly progress summary", enabled: false }
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-stone-700">{pref.label}</span>
                      <button className={`w-12 h-6 rounded-full transition-colors ${
                        pref.enabled ? 'bg-blue-600' : 'bg-stone-300'
                      }`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          pref.enabled ? 'translate-x-6' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4">Communication Preferences</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Check-in frequency</label>
                    <select className="w-full px-4 py-2 border border-stone-300 rounded-lg">
                      <option>Daily</option>
                      <option>A few times per week</option>
                      <option>Weekly</option>
                      <option>Only when I reach out</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Best times to reach me</label>
                    <div className="flex gap-2">
                      {["Morning", "Afternoon", "Evening"].map(time => (
                        <label key={time} className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-50">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">{time}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4">Account</h2>
                <div className="space-y-3">
                  <button className="text-blue-600 hover:underline text-sm block">Change password</button>
                  <button className="text-blue-600 hover:underline text-sm block">Update email</button>
                  <button className="text-blue-600 hover:underline text-sm block">Manage connected accounts</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-stone-800">Set Default Privacy</h3>
              <button onClick={() => setShowPrivacyModal(false)} className="text-stone-400 hover:text-stone-600 text-2xl">×</button>
            </div>
            <p className="text-sm text-stone-600 mb-4">New conversations will use this privacy level by default.</p>
            <div className="space-y-2">
              {[
                { id: 'private', label: 'Private', desc: 'Only you can see', color: 'green' },
                { id: 'coach-shared', label: 'Coach-Shared', desc: 'You and your coach', color: 'blue' },
                { id: 'company-visible', label: 'Company-Visible', desc: 'Anonymized themes shared', color: 'purple' }
              ].map(level => (
                <label key={level.id} className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer ${
                  privacyLevel === level.id ? `border-${level.color}-500 bg-${level.color}-50` : 'border-stone-200 hover:bg-stone-50'
                }`}>
                  <input
                    type="radio"
                    name="privacy"
                    checked={privacyLevel === level.id}
                    onChange={() => setPrivacyLevel(level.id)}
                    className={`text-${level.color}-600`}
                  />
                  <div>
                    <div className="font-medium text-stone-800">{level.label}</div>
                    <div className="text-sm text-stone-500">{level.desc}</div>
                  </div>
                </label>
              ))}
            </div>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Save Default
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ ADMIN DASHBOARD SHELL ============
function AdminDashboardShell({ onLogout }) {
  const [activePage, setActivePage] = React.useState("Overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="text-xl font-light text-stone-800">ReGenesis</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Admin</span>
            </div>
            <nav className="flex gap-4">
              {["Overview", "Coaches", "Employees", "Reports", "Settings"].map(page => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activePage === page
                      ? "bg-purple-100 text-purple-700"
                      : "text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
          <button onClick={onLogout} className="text-stone-500 hover:text-stone-700 text-sm">
            Sign Out
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="p-8">
        {activePage === "Overview" && (
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-2">Program Overview</h1>
            <p className="text-stone-600 mb-8">Acme Corp Coaching Program</p>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Active Seats", value: "47/50", trend: "+3 this month" },
                { label: "Sessions This Month", value: "128", trend: "+12% vs last month" },
                { label: "Avg Satisfaction", value: "4.8/5", trend: "Stable" },
                { label: "Engagement Rate", value: "89%", trend: "+5% vs last month" }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                  <div className="text-sm text-stone-500 mb-1">{stat.label}</div>
                  <div className="text-2xl font-semibold text-stone-800">{stat.value}</div>
                  <div className="text-xs text-green-600 mt-1">{stat.trend}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4">Program Themes (Anonymized)</h2>
                <div className="space-y-3">
                  {[
                    { theme: "Leadership Development", pct: 34 },
                    { theme: "Work-Life Balance", pct: 28 },
                    { theme: "Communication Skills", pct: 22 },
                    { theme: "Career Transitions", pct: 16 }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-stone-700">{item.theme}</span>
                        <span className="text-stone-500">{item.pct}%</span>
                      </div>
                      <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <h2 className="font-semibold text-stone-800 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full py-3 text-left px-4 bg-stone-50 hover:bg-stone-100 rounded-lg">
                    📊 Export Monthly Report
                  </button>
                  <button className="w-full py-3 text-left px-4 bg-stone-50 hover:bg-stone-100 rounded-lg">
                    👥 Manage Seat Allocations
                  </button>
                  <button className="w-full py-3 text-left px-4 bg-stone-50 hover:bg-stone-100 rounded-lg">
                    🎯 View ROI Dashboard
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-xl">🔒</span>
                <div>
                  <div className="font-medium text-purple-800">Privacy Notice</div>
                  <p className="text-sm text-purple-700">
                    All data shown is aggregated and anonymized. Individual session content,
                    personal goals, and coach-client conversations are never visible to administrators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activePage === "Coaches" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-8">Coaches</h1>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <p className="text-stone-600">[Coach roster management — add, remove, view aggregate metrics per coach]</p>
            </div>
          </div>
        )}

        {activePage === "Employees" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-8">Employee Seats</h1>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <p className="text-stone-600">[Seat allocation — assign coaching seats, view engagement (not content)]</p>
            </div>
          </div>
        )}

        {activePage === "Reports" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-8">Reports</h1>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <p className="text-stone-600">[Report generation — ROI, engagement, satisfaction, aggregate themes]</p>
            </div>
          </div>
        )}

        {activePage === "Settings" && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-light text-stone-800 mb-8">Settings</h1>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
              <p className="text-stone-600">[Organization settings — billing, SSO, compliance, data retention]</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

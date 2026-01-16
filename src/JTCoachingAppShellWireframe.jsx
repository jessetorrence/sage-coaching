import React from "react";
import { mockClients } from "./data/mockClients";
import logo from "./assets/logo.jpg";

export default function JTCoachingAppShellWireframe() {
  const [activePage, setActivePage] = React.useState("Dashboard");
  const [selectedClient, setSelectedClient] = React.useState(mockClients[0]);
  const [selectedBusinessTab, setSelectedBusinessTab] = React.useState("Client Impact & Outcomes");
  const [selectedSessionId, setSelectedSessionId] = React.useState(null);
  const [showT15Prep, setShowT15Prep] = React.useState(false);
  const [t15Client, setT15Client] = React.useState(null);
  const [showSageTooltip, setShowSageTooltip] = React.useState(false);

  const navItems = [
    { key: "Dashboard", label: "Dashboard" },
    { key: "Clients", label: "Clients" },
    { key: "Schedule", label: "Schedule" },
    { key: "Resources", label: "Resource Library" },
    { key: "Business", label: "Business Management" },
    { key: "Settings", label: "Settings" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-900">

      {/* TOP HORIZONTAL NAVIGATION */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="flex items-center justify-between px-8 py-3">
          {/* Logo and Brand */}
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo" className="h-10 rounded-lg" />

            {/* Sage - AI Intelligence Feature */}
            <div className="relative">
              <button
                onClick={() => setActivePage("AI")}
                onMouseEnter={() => setShowSageTooltip(true)}
                onMouseLeave={() => setShowSageTooltip(false)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all"
              >
                <span className="text-xl">🧙‍♂️</span>
                <span className="font-semibold">Sage</span>
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

      {/* FUNNEL BOTTOM: Life Balance Snapshot - 5 Areas (Unobtrusive) */}
      <div className="border-t-2 border-gray-300 pt-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-600">Life Balance Snapshot</h3>
        <div className="grid grid-cols-5 gap-4">
          {/* Personal Wellbeing */}
          <div className="bg-white border border-purple-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <h4 className="font-semibold text-purple-900 text-sm">Personal Wellbeing</h4>
            </div>
            <div className="space-y-2 text-xs text-gray-700">
              <div>→ Book dermatology checkup</div>
              <div>→ Morning stillness routine</div>
            </div>
          </div>

          {/* Family */}
          <div className="bg-white border border-pink-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <h4 className="font-semibold text-pink-900 text-sm">Family</h4>
            </div>
            <div className="space-y-2 text-xs text-gray-700">
              <div>→ Pick up birthday gift for Oana</div>
              <div>→ Plan family weekend trip</div>
            </div>
          </div>

          {/* Financial/Business (non-coaching) */}
          <div className="bg-white border border-green-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <h4 className="font-semibold text-green-900 text-sm">Financial/Business</h4>
            </div>
            <div className="space-y-2 text-xs text-gray-700">
              <div>→ Invoice 3 clients</div>
              <div>→ Review Q1 finances</div>
            </div>
          </div>

          {/* Community & Relationships */}
          <div className="bg-white border border-blue-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <h4 className="font-semibold text-blue-900 text-sm">Community & Relationships</h4>
            </div>
            <div className="space-y-2 text-xs text-gray-700">
              <div>→ Call old mentor</div>
              <div>→ Volunteer event planning</div>
            </div>
          </div>

          {/* Legacy & Impact */}
          <div className="bg-white border border-orange-200 p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <h4 className="font-semibold text-orange-900 text-sm">Legacy & Impact</h4>
            </div>
            <div className="space-y-2 text-xs text-gray-700">
              <div>→ Draft book chapter 3</div>
              <div>→ Update scholarship fund</div>
            </div>
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

  const tabs = ["Profile", "Goals & Progress", "Session Notes", "T-15 Prep", "Client Resources"];

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
          {activeTab === "Client Resources" && <ClientResourcesTab client={selectedClient} />}
        </div>
      </div>
    </div>
  );
}

// ============ CLIENT TAB COMPONENTS ============

function ClientProfileTab({ client }) {
  return (
    <div className="space-y-6">
      {/* Client Intake Form Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Client Profile</h2>
        <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow flex items-center gap-2">
          <span>📋</span> View Launch Questionnaire
        </button>
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
  const [showAllActions, setShowAllActions] = React.useState(false);
  const [expandedArea, setExpandedArea] = React.useState(null);

  const lifeAreas = [
    { name: "Professional Growth & Leadership", color: "blue", goals: client.goals, progress: 65 },
    { name: "Health & Wellbeing", color: "green", goals: ["Establish morning routine", "Exercise 4x/week"], progress: 40 },
    { name: "Relationships & Family", color: "pink", goals: ["Weekly date nights", "Be present with kids"], progress: 75 },
    { name: "Financial Security", color: "emerald", goals: ["Save 6-month emergency fund", "Review investments quarterly"], progress: 55 },
    { name: "Personal Growth & Learning", color: "purple", goals: ["Read 2 books/month", "Learn Spanish"], progress: 30 },
    { name: "Community & Impact", color: "orange", goals: ["Mentor 2 junior leaders", "Volunteer monthly"], progress: 50 }
  ];

  if (showAllActions) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setShowAllActions(false)}
          className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
        >
          ← Back to Goals Overview
        </button>
        {/* Full GTD view would go here - simplified for wireframe */}
        <div className="text-center py-12 text-gray-500">
          Full project management view across all life areas would display here
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Button to Launch Questionnaire */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Goals & Progress</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow flex items-center gap-2">
            <span>📋</span> View Launch Questionnaire
          </button>
          <button
            onClick={() => setShowAllActions(true)}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 shadow"
          >
            All Actions - All Domains →
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

      {/* Goals by Life Area */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Goals by Life Area</h3>
        {lifeAreas.map((area, idx) => (
          <div key={idx} className={`bg-white p-5 rounded-lg shadow border-l-4 border-${area.color}-500`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{area.name}</h4>
                <div className="text-xs text-gray-500 mt-1">{area.goals.length} active goals</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{area.progress}%</div>
                  <div className="text-xs text-gray-500">Overall Progress</div>
                </div>
                <button
                  onClick={() => setExpandedArea(expandedArea === idx ? null : idx)}
                  className={`px-3 py-1 text-sm rounded bg-${area.color}-100 text-${area.color}-800 hover:bg-${area.color}-200`}
                >
                  {expandedArea === idx ? "Collapse" : "View"}
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className={`bg-${area.color}-600 h-2 rounded-full transition-all`}
                style={{width: `${area.progress}%`}}
              ></div>
            </div>

            {/* Expanded view */}
            {expandedArea === idx && (
              <div className="mt-4 pt-4 border-t space-y-3">
                {area.goals.map((goal, gidx) => (
                  <div key={gidx} className="p-3 bg-gray-50 rounded border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-medium text-sm text-gray-900">{goal}</div>
                      <span className={`text-xs px-2 py-1 bg-${area.color}-100 text-${area.color}-800 rounded-full`}>
                        Active
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>→ Next: Schedule 1-on-1 with team lead</div>
                      <div>→ Waiting on: Budget approval</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
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
  const tabs = [
    "Client Impact & Outcomes",
    "Business Performance",
    "Contracts & Legal",
    "Billing & Invoicing",
    "Growth Hub"
  ];

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
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-600">Engagement Metrics</h3>
              <div className="text-3xl font-bold mb-1">{mockClients.filter(c => c.status === "active").length}</div>
              <p className="text-sm text-gray-600">Active engagements</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-600">Session Frequency</h3>
              <div className="text-3xl font-bold mb-1">3.2</div>
              <p className="text-sm text-gray-600">Sessions/client/month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-600">Retention</h3>
              <div className="text-3xl font-bold mb-1">94%</div>
              <p className="text-sm text-gray-600">Client retention rate</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Progress Markers</h3>
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
          </div>
        </div>
      )}

      {selectedTab === "Business Performance" && (
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-600">This Month</h3>
              <div className="text-3xl font-bold mb-1">32</div>
              <p className="text-sm text-gray-600">Sessions delivered</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-600">Revenue</h3>
              <div className="text-3xl font-bold mb-1">$12.8K</div>
              <p className="text-sm text-gray-600">Monthly revenue</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-600">Avg Session Value</h3>
              <div className="text-3xl font-bold mb-1">$400</div>
              <p className="text-sm text-gray-600">Per session</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2 text-gray-600">Growth</h3>
              <div className="text-3xl font-bold mb-1 text-green-600">+18%</div>
              <p className="text-sm text-gray-600">vs last month</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Client Mix</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Executive Coaching</span>
                <span className="font-medium">60%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Leadership Development</span>
                <span className="font-medium">30%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Career Transition</span>
                <span className="font-medium">10%</span>
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

  return (
    <div className="h-full overflow-auto bg-white">
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
            <div className="flex gap-3">
              <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-800">
                Save Draft
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 shadow">
                Save and Send
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div>
              <h1 className="text-xl font-bold text-white">Session {sessionId} - Coaching Session Summary</h1>
              <p className="text-gray-400 text-sm">{client.name} · {new Date(client.lastSession).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
          </div>

          {/* Word Processor-Style Toolbar */}
          <div className="bg-gray-800 rounded-lg p-2 flex items-center gap-1">
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
          </div>
        </div>
      </div>

      {/* Floating Modify Template Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          <button
            onMouseEnter={() => setShowModifyTooltip(true)}
            onMouseLeave={() => setShowModifyTooltip(false)}
            className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-2xl font-medium flex items-center gap-2"
          >
            <span>⚙️</span> Modify Template
          </button>

          {showModifyTooltip && (
            <div className="absolute bottom-full right-0 mb-2 w-72 bg-gray-900 text-white rounded-lg shadow-2xl p-4 text-sm">
              <div className="font-semibold mb-2">Customize Your Notes Template</div>
              <div className="text-gray-300 text-xs leading-relaxed">
                Modify the entire structure, style, tone, and personality of your session notes. Change sections, reorder content, adjust language formality, or completely redesign how your notes are drafted.
              </div>
              <div className="mt-2 text-xs text-purple-400">Click to open template editor</div>
            </div>
          )}
        </div>
      </div>

      {/* Editor Content */}
      <div className="max-w-4xl mx-auto p-8">
        {/* AI Draft Banner */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-bold">
              AI
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-yellow-900 mb-2">AI-Generated Draft Ready for Review</h3>
              <p className="text-sm text-yellow-800 mb-3">
                This draft was generated from your T-15 prep and the Google Meet transcript. Review, edit, and personalize before sending.
              </p>
              <div className="flex gap-2">
                <button className="text-sm px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                  View Transcript
                </button>
                <button className="text-sm px-4 py-2 border border-yellow-600 text-yellow-900 rounded-lg hover:bg-yellow-100">
                  Regenerate with AI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Editable Notes */}
        <div className="bg-white rounded-xl border-2 border-gray-200 shadow-lg">
          {/* Session Summary */}
          <div className="border-b-2 border-gray-200 p-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Session Summary</h3>
            <textarea
              className="w-full text-lg leading-relaxed border-none focus:outline-none resize-none"
              rows="4"
              defaultValue="We explored your challenges with delegation and team building. You shared that you're feeling overwhelmed by the pace of growth and struggling to let go of control. Through our conversation, you recognized that your perfectionism is creating a bottleneck and preventing your team from developing."
            />
          </div>

          {/* Key Insights */}
          <div className="border-b-2 border-gray-200 p-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Key Insights & Breakthroughs</h3>
            <textarea
              className="w-full leading-relaxed border-none focus:outline-none resize-none"
              rows="6"
              defaultValue={`• You realized that by "saving time" doing it yourself, you're actually losing time in the long run\n• Your fear of being seen as incompetent is driving micromanagement\n• The question "What would it look like if this was working beautifully?" helped you envision a different way\n• You connected your leadership challenges to deeper patterns around trust and control`}
            />
          </div>

          {/* Commitments & Next Steps */}
          <div className="border-b-2 border-gray-200 p-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Your Commitments & Next Steps</h3>
            <textarea
              className="w-full leading-relaxed border-none focus:outline-none resize-none"
              rows="5"
              defaultValue={`1. Schedule 1-on-1s with each direct report this week\n2. Identify 3 decisions you can delegate completely\n3. Practice the "5-minute rule" - if something takes < 5 min to explain, delegate it\n4. Read Chapter 3 of "Crucial Conversations"\n5. Journal on the question: "What am I afraid will happen if I let go?"`}
            />
          </div>

          {/* Resources Shared */}
          <div className="border-b-2 border-gray-200 p-8">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Resources Shared</h3>
            <textarea
              className="w-full leading-relaxed border-none focus:outline-none resize-none"
              rows="3"
              defaultValue={`• Leadership Assessment Framework (attached)\n• "Crucial Conversations" by Patterson et al.\n• Article: "The Art of Delegation for Perfectionists"`}
            />
          </div>

          {/* Coach's Private Notes */}
          <div className="bg-gray-50 p-8">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide">Coach's Private Notes</h3>
              <span className="text-xs px-2 py-1 bg-gray-200 text-gray-600 rounded">Not sent to client</span>
            </div>
            <textarea
              className="w-full leading-relaxed bg-gray-50 border-2 border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Your private observations, patterns you're noticing, things to explore in future sessions..."
              defaultValue="Client is making real progress but still intellectualizing. May need more somatic/embodied work. Consider introducing mindfulness practices. Watch for defensive patterns when discussing vulnerability."
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 pb-8">
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
          >
            Save & Close
          </button>
          <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
            Save Draft
          </button>
          <button className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold shadow-lg">
            Send to Client
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

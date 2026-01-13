import React, { useMemo, useState } from "react";
import { LeftRail, TopBar, PlaceholderPage } from "./components/ui";
import DashboardPage from "./pages/Dashboard";
import SchedulePage from "./pages/Schedule";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "clients", label: "Clients" },
  { key: "schedule", label: "Schedule" },
  { key: "library", label: "Resource Library" },
  { key: "admin", label: "Admin" },
  { key: "search", label: "Search" },
];

export default function JTWireframeApp() {
  const [nav, setNav] = useState("dashboard");

  const page = useMemo(() => {
    switch (nav) {
      case "dashboard":
        return <DashboardPage onNavigate={(key) => setNav(key)} />;

      case "schedule":
        return <SchedulePage onNavigate={(key) => setNav(key)} />;

      case "clients":
        return (
          <PlaceholderPage
            title="Clients"
            bullets={[
              "Client list (left) appears only on this page (contextual)",
              "Client workspace (right) with tabs: Profile / Progress / Notes / AI / Resources",
              "Entry points: Intake form, Assessments, Goals, Notes",
              "T-15 Prep is a first-class action inside each client workspace",
            ]}
          />
        );

      case "library":
        return (
          <PlaceholderPage
            title="Resource Library"
            bullets={[
              "Coach-curated resources (tagged by theme, client, modality)",
              "AI-suggested resources surfaced from sessions and companion logs",
              "Share-to-client actions + templates",
            ]}
          />
        );

      case "admin":
        return (
          <PlaceholderPage
            title="Admin"
            bullets={[
              "Billing / invoices",
              "Templates",
              "Integrations",
              "Branding (logo + palette)",
              "Data export",
            ]}
          />
        );

      case "search":
        return (
          <PlaceholderPage
            title="Search"
            bullets={[
              "Global search across clients, sessions, notes, resources",
              "Natural language query (future)",
              "Saved searches",
            ]}
          />
        );

      default:
        return <div className="text-white">Unknown page</div>;
    }
  }, [nav]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0b0b0b] text-white">
      <TopBar nav={nav} setNav={setNav} navItems={NAV_ITEMS} />
      <div className="mx-auto flex max-w-[1400px]">
        <LeftRail nav={nav} setNav={setNav} navItems={NAV_ITEMS} />
        <main className="flex-1 px-4 py-6">{page}</main>
      </div>
    </div>
  );
}

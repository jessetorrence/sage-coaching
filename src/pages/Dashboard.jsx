import React, { useRef, useState } from "react";
import { Badge, Card, cn } from "../components/ui";

export default function DashboardPage({ onNavigate }) {
  const [prepLens, setPrepLens] = useState("snapshot");
  const [showNorthStar, setShowNorthStar] = useState(false);
  const [showAllActions, setShowAllActions] = useState(false);
  const prepRef = useRef(null);

  const jumpToPrep = () => {
    setPrepLens("snapshot");
    requestAnimationFrame(() => prepRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const lenses = [
    { key: "snapshot", label: "Client Snapshot" },
    { key: "last", label: "Last Session" },
    { key: "between", label: "AI Companion Summary" },
    { key: "events", label: "Key Events" },
    { key: "clientprep", label: "Client’s Prep" },
    { key: "openings", label: "Suggested Openings" },
    { key: "resources", label: "Resources & Support" },
  ];

  return (
    <div className="space-y-4">
      <div className="-mt-1">
        <div className="text-xs italic tracking-wide text-white/60">Orient → Decide → Act</div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="grid gap-3 lg:grid-cols-12">
          {/* Next Actions */}
          <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-white">Next Actions</div>
                <div className="mt-1 text-sm text-white/65">What matters right now (keep to 3–4).</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10">
                  Coaching Practice
                </button>
                <button className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 hover:bg-white/10">
                  All Areas
                </button>
                <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
                  Create task
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <button onClick={jumpToPrep} className="group w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-left hover:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-base font-semibold text-white underline-offset-4 group-hover:underline">
                    Prep for session — Michael B. (3:00 PM)
                  </div>
                  <div className="text-sm font-medium text-white/70 group-hover:text-white">Jump to prep ↓</div>
                </div>
                <div className="mt-1 text-sm text-white/60">Use quick prep lenses or open full T-15.</div>
              </button>

              <button onClick={() => onNavigate?.("clients")} className="group w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-left hover:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-base font-semibold text-white underline-offset-4 group-hover:underline">
                    Nudge Tania — reschedule missed session
                  </div>
                  <div className="text-sm font-medium text-white/70 group-hover:text-white">Open client →</div>
                </div>
                <div className="mt-1 text-sm text-white/60">Last contact: 6 days ago • Proposed times: Tue/Thu</div>
              </button>

              <button onClick={() => onNavigate?.("admin")} className="group w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-left hover:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-base font-semibold text-white underline-offset-4 group-hover:underline">
                    Invoice: 3 clients — end of month
                  </div>
                  <div className="text-sm font-medium text-white/70 group-hover:text-white">Open invoicing →</div>
                </div>
                <div className="mt-1 text-sm text-white/60">Estimated billables pending: $2,450</div>
              </button>

              <button onClick={() => {}} className="group w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-left hover:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-base font-semibold text-white underline-offset-4 group-hover:underline">
                    Sign up for Somatic Therapy Training
                  </div>
                  <div className="text-sm font-medium text-white/70 group-hover:text-white">Review options →</div>
                </div>
                <div className="mt-1 text-sm text-white/60">Set aside 20 minutes to choose cohort + schedule.</div>
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs text-white/55">Tip: keep this list short for clarity.</div>
              <button
                onClick={() => setShowAllActions((s) => !s)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
              >
                {showAllActions ? "Hide all actions" : "View all actions"}
              </button>
            </div>
          </div>

          {/* North Star */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-white">Your North Star</div>
                <div className="mt-1 text-sm text-white/65">Light-touch orientation.</div>
              </div>
              <button
                onClick={() => setShowNorthStar((s) => !s)}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
              >
                {showNorthStar ? "Collapse" : "Expand"}
              </button>
            </div>

            {!showNorthStar ? (
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-semibold text-white">This week’s focus</div>
                  <div className="mt-1 text-sm text-white/70">Tighten openings • deepen somatic tracking</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-semibold text-white">Practice trajectory</div>
                  <div className="mt-1 text-sm text-white/70">12 active clients • 90% retention</div>
                </div>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-semibold text-white">Vision</div>
                  <div className="mt-1 text-sm text-white/70">World-class coaching through presence + precision.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-sm font-semibold text-white">Quarter goals</div>
                  <div className="mt-1 space-y-1 text-sm text-white/70">
                    <div>• 12–15 active clients (steady capacity)</div>
                    <div>• Improve follow-through</div>
                    <div>• Complete advanced somatics module</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Prepare */}
      <div ref={prepRef} className="scroll-mt-24">
        <Card
          title="Prepare for next session"
          subtitle="Choose a prep lens (quick) or open the full T-15 (deep)."
          right={<Badge tone="warn">Michael B. • 3:00 PM</Badge>}
        >
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onNavigate?.("schedule")}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Open T-15 Prep
            </button>
            <div className="text-xs text-white/60">(Deep: Snapshot • Last • AI • Events • Client prep • Openings • Resources)</div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {lenses.map((l) => {
              const active = prepLens === l.key;
              return (
                <button
                  key={l.key}
                  onClick={() => setPrepLens(l.key)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    active ? "bg-white text-black" : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                  )}
                >
                  {l.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/75">
            <div className="font-semibold text-white">Preview</div>
            <div className="mt-1">This panel changes by lens (kept short in the demo file so previews stay stable).</div>
          </div>
        </Card>
      </div>

      {/* All Actions (kept lean in-file; we’ll expand in separate file later) */}
      {showAllActions && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={() => setShowAllActions(false)} />
          <div className="relative mx-auto h-full max-w-[1500px] p-4 md:p-6">
            <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-black/80">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 md:p-5">
                <div>
                  <div className="text-xl font-semibold text-white">All Actions</div>
                  <div className="mt-1 text-sm text-white/60">Outcomes → Objectives → Actions</div>
                </div>
                <button onClick={() => setShowAllActions(false)} className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90">
                  Close
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 md:p-6">
                <div className="grid gap-4 lg:grid-cols-5">
                  {[
                    { t: "Wellbeing", o: "Rested, regulated, energized.", a: ["Lights out by 10:15", "10-min grounding"] },
                    { t: "Family", o: "Connected and present.", a: ["Plan Sunday family meal", "Date night booking"] },
                    { t: "Practice", o: "Sustainable & values-aligned.", a: ["Prep for Michael", "Invoice 3 clients"] },
                    { t: "Growth", o: "Deepen craft + somatics.", a: ["Enroll in training", "Weekly learning hour"] },
                    { t: "Legacy", o: "Serve meaningfully.", a: ["Review giving plan", "Write mission draft"] },
                  ].map((col) => (
                    <div key={col.t} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="text-sm font-semibold text-white">{col.t}</div>
                      <div className="mt-2 text-xs text-white/60">Outcome</div>
                      <div className="mt-1 text-sm text-white/75">{col.o}</div>
                      <div className="mt-3 text-xs font-semibold text-white/60">Next Actions</div>
                      <ul className="mt-1 space-y-1 text-sm text-white/80">
                        {col.a.map((x) => (
                          <li key={x} className="cursor-pointer hover:underline underline-offset-4">→ {x}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm font-semibold text-white">Waiting On</div>
                    <div className="mt-2 text-sm text-white/70">• Tania reply re: reschedule</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm font-semibold text-white">Someday / Maybe</div>
                    <div className="mt-2 text-sm text-white/70">• Retreat design concept</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="text-sm font-semibold text-white">Calendar</div>
                    <div className="mt-2 text-sm text-white/70">• Michael B. — 3:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 p-4 md:p-5 flex items-center justify-between">
                <div className="text-xs text-white/50">Lean demo modal. Full detail goes in a separate file.</div>
                <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">
                  Add action
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Practice Health */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { k: "Active clients", v: "12" },
          { k: "Sessions this week", v: "9" },
          { k: "Drafts pending", v: "2" },
          { k: "Invoices due", v: "3 ($1,800)" },
          { k: "Billables pending", v: "$2,450" },
        ].map((m) => (
          <div key={m.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs text-white/60">{m.k}</div>
            <div className="mt-2 text-2xl font-semibold text-white">{m.v}</div>
            <div className="mt-2 text-xs text-white/55">Click to drill in (placeholder)</div>
          </div>
        ))}
      </div>
    </div>
  );
}

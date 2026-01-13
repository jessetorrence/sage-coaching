import React from "react";
import { Badge, PageHeader } from "../components/ui";

export default function SchedulePage({ onNavigate }) {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Schedule"
        subtitle="Your time map — see what’s next, what’s prepared, and where to focus."
        right={
          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">
              Today
            </button>
            <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">
              Week
            </button>
            <button
              onClick={() => onNavigate?.("dashboard")}
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              title="Jump to Dashboard prep section"
            >
              Open T-15
            </button>
          </div>
        }
      />

      <div className="grid gap-4 lg:grid-cols-12">
        {/* Left: time orientation */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Today</div>
              <div className="mt-1 text-xs text-white/60">Tuesday, Mar 12</div>
            </div>
            <Badge>Agenda</Badge>
          </div>

          <div className="mt-4 space-y-2">
            {[
              { t: "9:00 AM", note: "Admin" },
              { t: "10:30 AM", note: "Client follow-ups" },
              { t: "12:00 PM", note: "Lunch" },
              { t: "1:30 PM", note: "Deep work" },
              { t: "3:00 PM", note: "Michael B." },
              { t: "4:30 PM", note: "Pranay M." },
            ].map((row) => (
              <div
                key={row.t}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-3 py-2"
              >
                <div className="text-sm text-white/80">{row.t}</div>
                <div className="text-xs text-white/50">{row.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-3">
            <div className="text-xs font-semibold text-white/70">Quick filters</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">
                Needs prep
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">
                Prepared
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10">
                Follow-up
              </button>
            </div>
          </div>
        </div>

        {/* Center: agenda */}
        <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Agenda</div>
              <div className="mt-1 text-xs text-white/60">Every session is actionable: prep → client → notes.</div>
            </div>
            <Badge tone="accent">Today</Badge>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-white">Deep Work</div>
                  <div className="mt-0.5 text-sm text-white/60">1:30–2:30 PM • Writing / prep</div>
                </div>
                <Badge>Focus</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                  Open plan
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                  Start timer
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-white">Michael B.</div>
                  <div className="mt-0.5 text-sm text-white/60">3:00–4:00 PM • Coaching Session</div>
                </div>
                <Badge tone="warn">Needs prep</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => onNavigate?.("dashboard")}
                  className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-black hover:opacity-90"
                >
                  T-15 Prep
                </button>
                <button
                  onClick={() => onNavigate?.("clients")}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                >
                  Open Client
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                  Draft Notes
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-white">Pranay M.</div>
                  <div className="mt-0.5 text-sm text-white/60">4:30–5:15 PM • Coaching Session</div>
                </div>
                <Badge tone="good">Prepared</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => onNavigate?.("clients")}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                >
                  Open Client
                </button>
                <button className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10">
                  Notes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: readiness */}
        <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Up Next</div>
              <div className="mt-1 text-xs text-white/60">Context + one-tap prep.</div>
            </div>
            <Badge tone="warn">Needs prep</Badge>
          </div>

          <div className="mt-3 rounded-2xl border border-white/10 bg-black/30 p-4">
            <div className="text-base font-semibold text-white">Michael B.</div>
            <div className="mt-0.5 text-sm text-white/60">3:00 PM • 60 min</div>

            <div className="mt-3 space-y-2 text-sm text-white/75">
              <div className="flex items-center justify-between">
                <span>Prep status</span>
                <span className="text-white/60">Incomplete</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last session</span>
                <span className="text-white/60">7 days ago</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
                AI signal: anxiety + boundary loop. Start by naming what’s most alive, then anchor to one concrete boundary move.
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => onNavigate?.("dashboard")}
                className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
              >
                Open T-15 Prep
              </button>
              <button
                onClick={() => onNavigate?.("clients")}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
              >
                Open Client Workspace
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

/** Utility: minimal className joiner */
export function cn(...vals) {
  return vals.filter(Boolean).join(" ");
}

export function Badge({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Card({ title, children, className = "" }) {
  return (
    <div className={cn("rounded-xl border bg-white p-4 shadow-sm", className)}>
      {title ? <div className="mb-2 text-sm font-semibold">{title}</div> : null}
      {children}
    </div>
  );
}

export function PageHeader({ title, subtitle, right }) {
  return (
    <div className="mb-4 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-xl font-semibold leading-tight">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm opacity-70">{subtitle}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

/** App shell pieces referenced by JTCoachingAppShellWireframe.jsx */
export function TopBar({ title = "Regenesis" }) {
  return (
    <div className="flex items-center justify-between border-b bg-white px-4 py-3">
      <div className="font-semibold">{title}</div>
      <div className="text-sm opacity-60">Wireframe</div>
    </div>
  );
}

export function LeftRail({ items = [], active, onSelect }) {
  return (
    <div className="w-60 border-r bg-white p-3">
      <div className="mb-2 text-xs font-medium uppercase tracking-wide opacity-60">
        Navigation
      </div>

      <div className="flex flex-col gap-2">
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <button
              key={it.key}
              onClick={() => onSelect?.(it.key)}
              className={cn(
                "w-full rounded-lg border px-3 py-2 text-left text-sm",
                isActive ? "bg-gray-100" : "bg-white hover:bg-gray-50"
              )}
            >
              <div className="font-medium">{it.label}</div>
              {it.hint ? <div className="text-xs opacity-60">{it.hint}</div> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PlaceholderPage({ title = "Coming soon", children }) {
  return (
    <div className="p-6">
      <h2 className="m-0 mb-2 text-lg font-semibold">{title}</h2>
      <div className="opacity-80">{children || "Placeholder content"}</div>
    </div>
  );
}

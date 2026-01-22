import React from "react";
import { TRUST_BULLETS } from "../lib/regenesisV6Copy";

/**
 * TrustStrip - Compact 4-bullet strip showing trust-by-architecture principles
 *
 * Use on: Landing page, Client Overview, Companion, Settings
 */
export default function TrustStrip({ variant = "horizontal", className = "" }) {
  const icons = {
    "own-data": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    "consent-first": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    "delete-anytime": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    "no-surprises": (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  };

  if (variant === "vertical") {
    return (
      <div className={`space-y-3 ${className}`}>
        {TRUST_BULLETS.map((bullet) => (
          <div key={bullet.key} className="flex items-start gap-3">
            <div className="text-teal-600 mt-0.5">{icons[bullet.key]}</div>
            <div>
              <p className="font-medium text-stone-800">{bullet.title}</p>
              <p className="text-sm text-stone-600">{bullet.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Horizontal (default) - compact strip
  return (
    <div className={`flex flex-wrap items-center justify-center gap-6 py-4 px-6 bg-stone-50 rounded-lg border border-stone-200 ${className}`}>
      {TRUST_BULLETS.map((bullet) => (
        <div key={bullet.key} className="flex items-center gap-2 text-sm">
          <span className="text-teal-600">{icons[bullet.key]}</span>
          <span className="text-stone-700 font-medium">{bullet.title}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * TrustBlock - Larger trust explanation block for landing pages
 */
export function TrustBlock({ className = "" }) {
  return (
    <div className={`bg-gradient-to-br from-teal-50 to-stone-50 rounded-2xl p-8 border border-teal-100 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-stone-800 mb-2">Trust by Architecture</h3>
        <p className="text-stone-600">We don't just promise privacy — we build it into every layer.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {TRUST_BULLETS.map((bullet) => (
          <div key={bullet.key} className="bg-white/70 rounded-lg p-4 border border-stone-200">
            <p className="font-medium text-stone-800 mb-1">{bullet.title}</p>
            <p className="text-sm text-stone-600">{bullet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

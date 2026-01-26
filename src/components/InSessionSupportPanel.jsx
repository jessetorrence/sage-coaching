import React from "react";
import { AGENT_NAME } from "../lib/regenesisV6Copy";

/**
 * InSessionSupportPanel - Camera-line prompt zone for live coaching sessions
 *
 * V6 Demo Spine piece: "Gentle prompts right below your camera line"
 * - Mode toggle: observe-only / light / help
 * - Quick actions: propose question / propose framework / draft snippet
 * - "Paste into Zoom chat" flow
 */
export default function InSessionSupportPanel({ isOpen, onClose, client }) {
  const [mode, setMode] = React.useState("light"); // observe | light | help
  const [showCopiedToast, setShowCopiedToast] = React.useState(false);
  const [copiedText, setCopiedText] = React.useState("");

  // Demo suggested prompts based on mode
  const suggestedPrompts = {
    observe: [], // No prompts in observe mode
    light: [
      {
        type: "question",
        text: "What's underneath that feeling?",
        context: "Follow-up to client's mention of frustration",
      },
      {
        type: "observation",
        text: "I notice you've mentioned 'control' three times in the last few minutes.",
        context: "Pattern recognition",
      },
    ],
    help: [
      {
        type: "question",
        text: "What would it look like if this was working beautifully?",
        context: "Generative question to shift perspective",
      },
      {
        type: "question",
        text: "What story are you telling yourself about this situation?",
        context: "Exploring beliefs and assumptions",
      },
      {
        type: "framework",
        text: "The Drama Triangle: Are you in Victim, Persecutor, or Rescuer right now?",
        context: "Karpman framework for relationship dynamics",
      },
      {
        type: "observation",
        text: "I'm noticing a pattern: this mirrors what you shared about your relationship with your father.",
        context: "Historical pattern connection",
      },
      {
        type: "snippet",
        text: "It sounds like you're carrying a lot right now. Would it help to pause and just breathe for a moment?",
        context: "Somatic/grounding invitation",
      },
    ],
  };

  const currentPrompts = suggestedPrompts[mode] || [];

  // Framework suggestions for "propose framework" action
  const frameworks = [
    { name: "Drama Triangle", description: "Victim-Persecutor-Rescuer dynamics" },
    { name: "Immunity to Change", description: "Hidden competing commitments" },
    { name: "GROW Model", description: "Goal-Reality-Options-Will structure" },
    { name: "Wheel of Life", description: "Balance assessment across domains" },
    { name: "Values Clarification", description: "Core values prioritization" },
  ];

  const handleCopyToClipboard = (text) => {
    // Simulate copy to clipboard
    setCopiedText(text);
    setShowCopiedToast(true);
    setTimeout(() => setShowCopiedToast(false), 2000);
  };

  const modeDescriptions = {
    observe: "Silent mode — no prompts, just watching",
    light: "Occasional prompts when patterns emerge",
    help: "Active assistance with questions and frameworks",
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Panel - positioned at bottom for "camera line" placement */}
      <div className="fixed bottom-0 left-0 right-0 z-50 max-h-[60vh] bg-white rounded-t-2xl shadow-2xl border-t border-stone-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 px-6 py-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">In-Session Copilot</h3>
                <p className="text-sm text-teal-100">
                  {client ? `Session with ${client.name}` : "Live session mode"}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mode Toggle */}
          <div className="flex items-center gap-2 bg-white/10 rounded-xl p-1">
            {["observe", "light", "help"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  mode === m
                    ? "bg-white text-teal-700 shadow"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {m === "observe" ? "👁️ Observe" : m === "light" ? "💡 Light" : "🤝 Help"}
              </button>
            ))}
          </div>
          <p className="text-xs text-teal-100 mt-2 text-center">
            {modeDescriptions[mode]}
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {mode === "observe" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👁️</span>
              </div>
              <h4 className="text-lg font-medium text-stone-800 mb-2">
                Observe Mode Active
              </h4>
              <p className="text-stone-600 max-w-md mx-auto">
                {AGENT_NAME} is listening and learning, but won't suggest anything.
                Your full presence is the focus.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Suggested Prompts */}
              {currentPrompts.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                    {AGENT_NAME}'s Suggestions
                  </h4>
                  <div className="space-y-3">
                    {currentPrompts.map((prompt, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">
                                {prompt.type === "question" ? "❓" : prompt.type === "framework" ? "📐" : prompt.type === "observation" ? "👁️" : "💬"}
                              </span>
                              <span className="text-xs font-medium text-teal-700 uppercase">
                                {prompt.type}
                              </span>
                            </div>
                            <p className="text-stone-800 font-medium mb-1">
                              "{prompt.text}"
                            </p>
                            <p className="text-sm text-stone-500">
                              {prompt.context}
                            </p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => handleCopyToClipboard(prompt.text)}
                              className="px-3 py-1.5 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-colors flex items-center gap-1"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                              </svg>
                              Paste to Zoom
                            </button>
                            <button className="px-3 py-1.5 border border-stone-300 rounded-lg text-sm text-stone-600 hover:bg-stone-50 transition-colors">
                              Dismiss
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div>
                <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <button className="p-4 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 transition-colors text-left">
                    <span className="text-2xl mb-2 block">❓</span>
                    <span className="font-medium text-stone-800 text-sm">Propose Question</span>
                    <p className="text-xs text-stone-500 mt-1">Generate a powerful question</p>
                  </button>
                  <button className="p-4 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 transition-colors text-left">
                    <span className="text-2xl mb-2 block">📐</span>
                    <span className="font-medium text-stone-800 text-sm">Propose Framework</span>
                    <p className="text-xs text-stone-500 mt-1">Suggest a coaching model</p>
                  </button>
                  <button className="p-4 bg-stone-50 hover:bg-stone-100 rounded-xl border border-stone-200 transition-colors text-left">
                    <span className="text-2xl mb-2 block">💬</span>
                    <span className="font-medium text-stone-800 text-sm">Draft Snippet</span>
                    <p className="text-xs text-stone-500 mt-1">Craft something to say</p>
                  </button>
                </div>
              </div>

              {/* Frameworks Library */}
              {mode === "help" && (
                <div>
                  <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                    Frameworks Library
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {frameworks.map((fw, i) => (
                      <button
                        key={i}
                        className="p-3 bg-white hover:bg-violet-50 rounded-lg border border-stone-200 hover:border-violet-300 transition-colors text-left"
                      >
                        <span className="font-medium text-stone-800 text-sm">{fw.name}</span>
                        <p className="text-xs text-stone-500">{fw.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Session Context */}
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
                <h4 className="text-sm font-semibold text-stone-600 mb-2 flex items-center gap-2">
                  <span>📝</span> Session Context
                </h4>
                <div className="space-y-2 text-sm text-stone-600">
                  <p>
                    <span className="font-medium">Duration:</span> 23 minutes
                  </p>
                  <p>
                    <span className="font-medium">Topics touched:</span> delegation, trust, control patterns
                  </p>
                  <p>
                    <span className="font-medium">Energy:</span> Client opened reflective, now more animated
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-stone-200 px-6 py-4 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live session • Recording active</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-white transition-colors text-sm"
            >
              Minimize
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium">
              End Session
            </button>
          </div>
        </div>
      </div>

      {/* Copied Toast */}
      {showCopiedToast && (
        <div className="fixed bottom-[65vh] left-1/2 transform -translate-x-1/2 z-[60]">
          <div className="bg-stone-900 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Copied to clipboard — paste into Zoom chat</span>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * InSessionSupportButton - Floating button to open in-session support
 */
export function InSessionSupportButton({ onClick, isSessionActive = false }) {
  if (!isSessionActive) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-3 bg-teal-600 text-white rounded-xl shadow-lg hover:bg-teal-700 transition-colors"
    >
      <span className="text-lg">🎯</span>
      <span className="font-medium">Session Support</span>
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
    </button>
  );
}

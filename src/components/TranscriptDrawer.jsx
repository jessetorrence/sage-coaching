import React from "react";
import { AGENT_NAME } from "../lib/regenesisV6Copy";

/**
 * TranscriptDrawer - Sliding drawer showing source transcript for a note section
 *
 * The "tears moment" drilldown: coach clicks "Source" and sees the exact
 * transcript moment that generated the insight, with timestamp.
 */
export default function TranscriptDrawer({ isOpen, onClose, section, transcriptData }) {
  // Demo transcript snippets for different sections
  const demoTranscripts = {
    recap: {
      timestamp: "00:03:24",
      speaker: "Client",
      text: "I've been feeling overwhelmed lately. The team is growing, and I just can't seem to let go of things. I keep thinking if I don't do it myself, it won't get done right.",
      context: "Opening reflection"
    },
    insights: {
      timestamp: "00:18:47",
      speaker: "Client",
      text: "Oh... I never thought about it that way. By trying to save time doing it myself, I'm actually costing myself more time in the long run. And I'm not letting my team grow.",
      context: "Key breakthrough moment"
    },
    inquiries: {
      timestamp: "00:24:15",
      speaker: "Coach",
      text: "What would it look like if this was working beautifully? If you fully trusted your team's capabilities?",
      context: "Generative question"
    },
    invitations: {
      timestamp: "00:38:22",
      speaker: "Client",
      text: "I think I could start with the smaller decisions. Like... what if I identified three things this week that I could fully hand off?",
      context: "Client-generated commitment"
    },
    resources: {
      timestamp: "00:42:10",
      speaker: "Coach",
      text: "There's a book I often recommend for this - Crucial Conversations. Specifically Chapter 3 on creating safety.",
      context: "Resource recommendation"
    },
    nextSteps: {
      timestamp: "00:45:30",
      speaker: "Client",
      text: "So by our next session, I'll have done the 1-on-1s, identified those three decisions, and started the journaling.",
      context: "Commitment summary"
    }
  };

  const transcript = transcriptData || demoTranscripts[section] || demoTranscripts.insights;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Transcript Source</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-violet-200">
            See exactly where this insight came from
          </p>
        </div>

        {/* Transcript Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Timestamp Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-mono font-medium">
              {transcript.timestamp}
            </span>
            <span className="text-sm text-stone-500">{transcript.context}</span>
          </div>

          {/* Transcript Block */}
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                transcript.speaker === "Coach"
                  ? "bg-teal-100 text-teal-700"
                  : "bg-blue-100 text-blue-700"
              }`}>
                {transcript.speaker === "Coach" ? "C" : "Cl"}
              </div>
              <span className="font-medium text-stone-800">{transcript.speaker}</span>
            </div>
            <p className="text-stone-700 leading-relaxed italic">
              "{transcript.text}"
            </p>
          </div>

          {/* Context Before/After */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
              Surrounding Context
            </h4>

            <div className="bg-stone-50/50 rounded-lg p-4 border border-stone-100">
              <div className="flex items-center gap-2 mb-2 text-xs text-stone-400">
                <span className="font-mono">00:03:10</span>
                <span>Coach</span>
              </div>
              <p className="text-sm text-stone-600">
                "Tell me more about what's been on your mind since our last session."
              </p>
            </div>

            <div className="bg-violet-50 rounded-lg p-4 border-2 border-violet-200">
              <div className="flex items-center gap-2 mb-2 text-xs text-violet-600 font-medium">
                <span className="font-mono">{transcript.timestamp}</span>
                <span>{transcript.speaker}</span>
                <span className="px-1.5 py-0.5 bg-violet-200 rounded text-xs">Source</span>
              </div>
              <p className="text-sm text-stone-700">
                "{transcript.text}"
              </p>
            </div>

            <div className="bg-stone-50/50 rounded-lg p-4 border border-stone-100">
              <div className="flex items-center gap-2 mb-2 text-xs text-stone-400">
                <span className="font-mono">00:03:45</span>
                <span>Coach</span>
              </div>
              <p className="text-sm text-stone-600">
                "That sounds really challenging. What feels most pressing right now?"
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-stone-200 p-4 bg-stone-50">
          <div className="flex items-center gap-3">
            <button className="flex-1 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium">
              Jump to Full Transcript
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-white transition-colors text-sm"
            >
              Close
            </button>
          </div>
          <p className="text-xs text-stone-500 mt-3 text-center">
            {AGENT_NAME} identified this as the source for the generated note section
          </p>
        </div>
      </div>
    </>
  );
}

/**
 * SourceButton - Small button to open transcript drawer
 */
export function SourceButton({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-2 py-1 text-xs text-violet-600 hover:text-violet-700 hover:bg-violet-50 rounded transition-colors ${className}`}
      title="View source in transcript"
    >
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      Source
    </button>
  );
}

/**
 * HighlightEditPopover - Appears when text is selected, offers rewrite options
 */
export function HighlightEditPopover({ isVisible, position, onRewrite, onClose }) {
  if (!isVisible) return null;

  const rewriteOptions = [
    { key: "softer", label: "Softer", icon: "💫", description: "Gentler language" },
    { key: "shorter", label: "Shorter", icon: "✂️", description: "More concise" },
    { key: "evidence", label: "Add evidence", icon: "📊", description: "Include specifics" },
    { key: "options", label: "Give options", icon: "🔀", description: "Alternative phrasings" },
  ];

  return (
    <div
      className="absolute z-50 bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden"
      style={{ top: position.y, left: position.x }}
    >
      <div className="px-3 py-2 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
        <span className="text-xs font-medium text-stone-600">Rewrite with AI</span>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-stone-600"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-1">
        {rewriteOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => onRewrite(option.key)}
            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-violet-50 rounded-lg transition-colors text-left"
          >
            <span className="text-lg">{option.icon}</span>
            <div>
              <span className="text-sm font-medium text-stone-800">{option.label}</span>
              <span className="text-xs text-stone-500 ml-2">{option.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/**
 * EditStatusIndicator - Shows the edit state of a note section
 */
export function EditStatusIndicator({ status }) {
  const statusConfig = {
    "ai-drafted": {
      label: "AI drafted",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      icon: "✨"
    },
    "coach-edited": {
      label: "Coach edited",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
      icon: "✓"
    },
    "sent": {
      label: "Sent to client",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
      icon: "📤"
    }
  };

  const config = statusConfig[status] || statusConfig["ai-drafted"];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 ${config.bgColor} ${config.textColor} border ${config.borderColor} rounded-full text-xs font-medium`}>
      <span>{config.icon}</span>
      {config.label}
    </span>
  );
}

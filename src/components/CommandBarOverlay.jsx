import React from "react";
import { AGENT_NAME } from "../lib/regenesisV6Copy";

/**
 * CommandBarOverlay - "Do Anything" Agent command bar
 *
 * Opens on Cmd/Ctrl+K. Shows input + suggested commands.
 * Selecting a command triggers simulated "Agent working..." toast.
 */
export default function CommandBarOverlay({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = React.useState("");
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");
  const inputRef = React.useRef(null);

  // Focus input when opened
  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Close on Escape
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const suggestedCommands = [
    {
      label: "What's my day look like?",
      icon: "📅",
      action: "dashboard",
      description: "View today's schedule and priorities",
    },
    {
      label: "Pull up Marcus's T-15 prep",
      icon: "📋",
      action: "t15",
      description: "Open pre-session brief for Marcus",
    },
    {
      label: "Start in-session support",
      icon: "🎯",
      action: "insession",
      description: "Open live session support panel",
    },
    {
      label: "Draft a follow-up email for Sarah...",
      icon: "✉️",
      action: "draft",
      description: "Compose a personalized follow-up",
    },
    {
      label: "Bill Jennifer for January",
      icon: "💳",
      action: "billing",
      description: "Generate and send invoice",
    },
    {
      label: "Show me Sarah's progress",
      icon: "📈",
      action: "client",
      description: "View client journey and goals",
    },
    {
      label: "What did Marcus commit to last session?",
      icon: "🎯",
      action: "commitments",
      description: "Review recent commitments",
    },
  ];

  const filteredCommands = query
    ? suggestedCommands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(query.toLowerCase()) ||
          cmd.description.toLowerCase().includes(query.toLowerCase())
      )
    : suggestedCommands;

  const handleCommandSelect = (command) => {
    setToastMessage(`${AGENT_NAME} is working on: "${command.label}"`);
    setShowToast(true);
    setQuery("");

    // Hide toast after 2 seconds
    setTimeout(() => {
      setShowToast(false);
      onClose();
      // Optional: navigate to relevant view
      if (onNavigate && command.action) {
        onNavigate(command.action);
      }
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Command Bar Modal */}
      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-xl z-50">
        <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-stone-100">
            <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-violet-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Ask ${AGENT_NAME} anything...`}
              className="flex-1 text-lg text-stone-800 placeholder-stone-400 outline-none"
            />
            <kbd className="px-2 py-1 bg-stone-100 rounded text-xs text-stone-500 font-mono">
              esc
            </kbd>
          </div>

          {/* Suggested Commands */}
          <div className="max-h-80 overflow-y-auto">
            {filteredCommands.length > 0 ? (
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-medium text-stone-400 uppercase tracking-wider">
                  Suggested
                </div>
                {filteredCommands.map((command, i) => (
                  <button
                    key={i}
                    onClick={() => handleCommandSelect(command)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-stone-50 transition-colors text-left"
                  >
                    <span className="text-xl">{command.icon}</span>
                    <div className="flex-1">
                      <p className="text-stone-800 font-medium">
                        {command.label}
                      </p>
                      <p className="text-sm text-stone-500">
                        {command.description}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-stone-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-8 text-center text-stone-500">
                No matching commands. Try typing something else.
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="px-4 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span>
              Press{" "}
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-stone-200 font-mono">
                ↵
              </kbd>{" "}
              to select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-stone-200 font-mono">
                ↑↓
              </kbd>{" "}
              to navigate
            </span>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-stone-900 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * CommandBarHint - Small hint showing keyboard shortcut
 * Use in header or dashboard
 */
export function CommandBarHint({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors text-sm text-stone-600 ${className}`}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span>Ask {AGENT_NAME}</span>
      <kbd className="px-1.5 py-0.5 bg-white rounded border border-stone-200 text-xs font-mono">
        ⌘K
      </kbd>
    </button>
  );
}

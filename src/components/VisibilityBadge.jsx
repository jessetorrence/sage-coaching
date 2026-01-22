import React from "react";

/**
 * VisibilityBadge - Pill-style badge showing data visibility/privacy state
 *
 * Props:
 * - label: string (e.g., "Client-private", "Shared summary", "Approval required")
 * - variant: "default" | "private" | "shared" | "approval" | "status"
 * - size: "sm" | "md"
 */
export default function VisibilityBadge({
  label,
  variant = "default",
  size = "sm",
  className = "",
}) {
  const baseClasses = "inline-flex items-center gap-1.5 rounded-full font-medium";

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  const variantClasses = {
    default: "bg-stone-100 text-stone-700 border border-stone-200",
    private: "bg-purple-50 text-purple-700 border border-purple-200",
    shared: "bg-teal-50 text-teal-700 border border-teal-200",
    approval: "bg-amber-50 text-amber-700 border border-amber-200",
    status: "bg-blue-50 text-blue-700 border border-blue-200",
    success: "bg-green-50 text-green-700 border border-green-200",
    warning: "bg-orange-50 text-orange-700 border border-orange-200",
    danger: "bg-red-50 text-red-700 border border-red-200",
  };

  const icons = {
    private: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
      </svg>
    ),
    shared: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
    ),
    approval: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    status: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
    success: (
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {icons[variant] && icons[variant]}
      {label}
    </span>
  );
}

/**
 * Pre-configured badge variants for common use cases
 */
export function ClientPrivateBadge({ size = "sm" }) {
  return <VisibilityBadge label="Client-private" variant="private" size={size} />;
}

export function SharedSummaryBadge({ size = "sm" }) {
  return <VisibilityBadge label="Shared summary" variant="shared" size={size} />;
}

export function SharedWithCoachBadge({ size = "sm" }) {
  return <VisibilityBadge label="Shared with coach" variant="shared" size={size} />;
}

export function ApprovalRequiredBadge({ size = "sm" }) {
  return <VisibilityBadge label="Approval required" variant="approval" size={size} />;
}

export function AIDraftedBadge({ size = "sm" }) {
  return <VisibilityBadge label="AI drafted" variant="status" size={size} />;
}

export function CoachEditedBadge({ size = "sm" }) {
  return <VisibilityBadge label="Coach edited" variant="success" size={size} />;
}

export function SentToClientBadge({ size = "sm" }) {
  return <VisibilityBadge label="Sent to client" variant="success" size={size} />;
}

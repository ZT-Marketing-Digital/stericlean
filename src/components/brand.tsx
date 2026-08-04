export function DropMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path
        d="M24 4C24 4 12 18.4 12 27a12 12 0 0 0 24 0C36 18.4 24 4 24 4Z"
        fill="currentColor"
      />
      <path
        d="M24 4C24 4 12 18.4 12 27a12 12 0 0 0 24 0C36 18.4 24 4 24 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.35"
        transform="translate(0 6) scale(1.18) translate(-3.6 -4)"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <DropMark className="h-7 w-7 text-accent" />
      <span className="font-display text-xl font-bold tracking-tight">
        Steri<span className="text-primary">Clean</span>
      </span>
    </span>
  );
}

const logoGreen = "/images/logo_stericlean.png";
const logoWhite = "/images/logo_stericlean_branco.png";

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

export function Wordmark({
  className,
  variant = "color",
}: {
  className?: string;
  variant?: "color" | "white";
}) {
  return (
    <img
      src={variant === "white" ? logoWhite : logoGreen}
      alt="SteriClean"
      className={`h-9 w-auto object-contain md:h-10 ${className ?? ""}`}
    />
  );
}

import { ReactNode } from "react";

export default function Eyebrow({
  children,
  color = "violet",
}: {
  children: ReactNode;
  color?: "violet" | "pink" | "green" | "lavender";
}) {
  const colors: Record<string, string> = {
    violet: "bg-[var(--color-violet)]/10 text-[var(--color-violet)]",
    pink: "bg-[var(--color-pink)]/40 text-[var(--color-violet)]",
    green: "bg-[var(--color-green)]/40 text-[var(--color-violet)]",
    lavender: "bg-[var(--color-lavender)]/40 text-[var(--color-violet)]",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase ${colors[color]}`}
    >
      {children}
    </span>
  );
}

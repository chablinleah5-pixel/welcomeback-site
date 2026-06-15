import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2";

  const styles =
    variant === "primary"
      ? "bg-[var(--color-violet)] text-white hover:scale-[1.03] hover:shadow-lg hover:shadow-[var(--color-violet)]/20"
      : "bg-white text-[var(--color-violet)] border border-[var(--color-violet)]/20 hover:border-[var(--color-violet)]/40 hover:bg-[var(--color-violet)]/5";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

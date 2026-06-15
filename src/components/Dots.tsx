type Dot = {
  top: string;
  left: string;
  size: number;
  color: string;
  opacity?: number;
  delay?: string;
  blur?: boolean;
};

const COLORS = [
  "var(--color-yellow)",
  "var(--color-pink)",
  "var(--color-green)",
  "var(--color-lavender)",
];

// Deterministic pseudo-random scatter so server/client markup matches.
function generateDots(seed: number, count: number): Dot[] {
  const dots: Dot[] = [];
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = 0; i < count; i++) {
    dots.push({
      top: `${Math.round(rand() * 100)}%`,
      left: `${Math.round(rand() * 100)}%`,
      size: Math.round(8 + rand() * 34),
      color: COLORS[Math.floor(rand() * COLORS.length)],
      opacity: 0.35 + rand() * 0.4,
      delay: `${(rand() * 5).toFixed(1)}s`,
      blur: rand() > 0.7,
    });
  }
  return dots;
}

export default function Dots({
  seed = 1,
  count = 10,
  className = "",
}: {
  seed?: number;
  count?: number;
  className?: string;
}) {
  const dots = generateDots(seed, count);
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {dots.map((dot, i) => (
        <span
          key={i}
          className="dot-float absolute rounded-full"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            filter: dot.blur ? "blur(2px)" : undefined,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

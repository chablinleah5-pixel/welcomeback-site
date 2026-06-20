import Container from "./Container";
import Dots from "./Dots";
import Eyebrow from "./Eyebrow";

const BG_COLORS: Record<string, string> = {
  violet: "var(--color-violet)",
  pink: "var(--color-pink)",
  green: "var(--color-green)",
  lavender: "var(--color-lavender)",
  yellow: "var(--color-yellow)",
};

export default function PageHeader({
  eyebrow,
  eyebrowColor = "violet",
  bgColor = "lavender",
  title,
  subtitle,
  seed = 2,
}: {
  eyebrow: string;
  eyebrowColor?: "violet" | "pink" | "green" | "lavender";
  bgColor?: "violet" | "pink" | "green" | "lavender" | "yellow";
  title: string;
  subtitle: string;
  seed?: number;
}) {
  return (
    <section
      className="relative overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-12"
      style={{
        backgroundColor: `color-mix(in srgb, ${BG_COLORS[bgColor]} 35%, white)`,
      }}
    >
      <Dots seed={seed} count={9} />
      <Container className="relative">
        <div className="max-w-2xl">
          <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg font-light leading-relaxed text-[var(--foreground)]/70">
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}

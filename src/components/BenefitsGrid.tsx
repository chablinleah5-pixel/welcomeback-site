import { LucideIcon } from "lucide-react";
import Container from "./Container";

export type Benefit = {
  icon: LucideIcon;
  title: string;
  text: string;
  color: string;
};

export default function BenefitsGrid({ benefits }: { benefits: Benefit[] }) {
  return (
    <section className="pt-4 pb-20 sm:pt-6 sm:pb-28">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-black/5 bg-white p-8"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${benefit.color}45` }}
                >
                  <Icon size={22} className="text-[var(--color-violet)]" />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-[var(--foreground)]">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-sm font-light leading-relaxed text-[var(--foreground)]/65">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

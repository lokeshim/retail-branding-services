import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formats } from "@/lib/site-content";
import { AnimatedReveal } from "../ui/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";

export function FormatsSection() {
  return (
    <section id="formats" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Formats"
          title="Choose the canvas by the objective."
          description="Each format shows verified dimensions, visibility strengths, limitations, current availability and a genuine execution example."
          align="center"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {formats.map((f, i) => (
            <AnimatedReveal key={f.id} delay={i * 0.08}>
              <article className="bg-white border border-border p-8 h-full hover:shadow-md transition-shadow">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{f.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-wider text-muted mb-1">Best suited for</p>
                  <p className="text-sm text-foreground">{f.suited}</p>
                </div>
                <Link
                  href={`/formats#${f.id}`}
                  className="inline-flex items-center gap-1 mt-6 text-sm text-brand hover:underline"
                >
                  View format logic <ArrowUpRight size={14} />
                </Link>
              </article>
            </AnimatedReveal>
          ))}
        </div>
        <AnimatedReveal className="text-center mt-10">
          <Link href="/formats" className="inline-flex items-center gap-2 text-sm border-b border-foreground pb-1">
            Explore all formats <ArrowUpRight size={14} />
          </Link>
        </AnimatedReveal>
      </div>
    </section>
  );
}

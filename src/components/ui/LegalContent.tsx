interface LegalSection {
  title: string;
  content: string[];
}

interface LegalContentProps {
  sections: LegalSection[];
  lastUpdated: string;
}

export function LegalContent({ sections, lastUpdated }: LegalContentProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-muted text-sm mb-10 text-center md:text-left">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-2xl font-medium text-foreground mb-4">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted text-sm leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { blogPosts } from "@/lib/blog-posts";
import { images } from "@/lib/images";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Aurelia Brand Studio",
  description:
    "Insights on branding, retail promotion, airport marketing, and corporate identity from Aurelia Brand Studio.",
};

export default function BlogPage() {
  return (
    <PageLayout>
      <main>
        <PageHero
          label="Blog"
          title="Insights & ideas on branding"
          description="Expert perspectives on brand promotion for airports, retail stores, parks, and corporate holdings."
          image={images.cta}
          imageAlt="Branding insights blog"
        />

        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              label="Latest Articles"
              title="From our branding experts"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <AnimatedReveal key={post.slug} delay={i * 0.1}>
                  <article className="group border border-border h-full flex flex-col hover:shadow-lg transition-shadow">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-muted mb-3">
                        <span className="uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-foreground/70 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-muted text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm mt-6 tracking-wide hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

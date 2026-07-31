import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-posts";
import { ArrowLeft, Clock, User } from "lucide-react";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Aurelia Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const morePosts =
    relatedPosts.length > 0
      ? relatedPosts
      : blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <PageLayout>
      <main>
        {/* Hero image */}
        <section className="relative pt-32 pb-0">
          <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </section>

        {/* Article */}
        <article className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted mb-6">
              <span className="uppercase tracking-wider bg-surface px-3 py-1 border border-border">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground leading-[1.15] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 mt-8 pt-8 border-t border-border">
              <div className="w-10 h-10 bg-foreground text-white flex items-center justify-center">
                <User size={18} />
              </div>
              <div>
                <div className="text-sm font-medium">{post.author}</div>
                <div className="text-xs text-muted">{post.authorRole}</div>
              </div>
            </div>

            <div className="mt-12 space-y-10">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className="text-muted leading-relaxed mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="py-16 md:py-20 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-10">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {morePosts.map((related, i) => (
                <AnimatedReveal key={related.slug} delay={i * 0.1}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group flex gap-6 bg-white border border-border p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="relative w-32 h-24 shrink-0 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="128px"
                      />
                    </div>
                    <div>
                      <span className="text-xs text-muted uppercase tracking-wider">
                        {related.category}
                      </span>
                      <h3 className="font-serif text-lg font-medium text-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-muted text-xs mt-2">{related.date}</p>
                    </div>
                  </Link>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

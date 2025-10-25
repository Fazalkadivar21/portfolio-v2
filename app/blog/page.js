export const metadata = {
  title: "Blog | Fazal Kadivar - Web Development Insights",
  description: "Read articles and insights about MERN development, full-stack development, backend optimization, real-time communication, and web development best practices.",
  keywords: "web development blog, MERN development, full stack tutorial, backend development, React, Node.js, Express, MongoDB",
  openGraph: {
    title: "Blog | Fazal Kadivar - Web Development Insights",
    description: "Read articles and insights about MERN development, full-stack development, and web development best practices.",
    url: "https://fazalkadivar.com/blog",
    type: "website",
    images: [
      {
        url: "https://fazalkadivar.com/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Fazal Kadivar Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Fazal Kadivar - Web Development Insights",
    description: "Read articles and insights about MERN development and web development.",
    image: "https://fazalkadivar.com/images/blog-og.jpg",
    creator: "@fazalkadivar21",
  },
  canonical: "https://fazalkadivar.com/blog",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Development Blog</h1>
          <p className="text-lg text-gray-600">
            Articles and insights about MERN development, full-stack engineering, and modern web technologies.
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <section>
            <h2>Coming Soon</h2>
            <p>
              Check back soon for insightful articles about web development, MERN stack, backend optimization,
              and best practices in full-stack development.
            </p>
          </section>
        </article>
      </div>

      {/* JSON-LD Schema for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Fazal Kadivar's Web Development Blog",
            "description": "Articles about MERN development, full-stack development, and web technologies",
            "url": "https://fazalkadivar.com/blog",
            "author": {
              "@type": "Person",
              "name": "Fazal Kadivar",
              "url": "https://fazalkadivar.com"
            }
          }),
        }}
      />
    </main>
  );
}

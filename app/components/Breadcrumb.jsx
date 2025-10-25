"use client";

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap gap-2 text-sm md:text-base">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-gray-400" aria-hidden="true">/</span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-600" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.label,
              "item": item.href || "https://fazalkadivar.com"
            }))
          }),
        }}
      />
    </nav>
  );
}

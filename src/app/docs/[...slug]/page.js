import { notFound } from "next/navigation";
import { docsPages, getPageBySlug } from "@/data/docsContent";

// Breadcrumb component
function Breadcrumb({ breadcrumb = [] }) {
  if (breadcrumb.length <= 1) return null;

  return (
    <div className="text-sm breadcrumbs mb-6">
      <ul>
        {breadcrumb.map((crumb, index) => (
          <li
            key={index}
            className={index === breadcrumb.length - 1 ? "font-semibold" : ""}
          >
            {crumb}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function DocsPage({ params }) {
  const { slug = [] } = await params;
  const pageData = getPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  const { title, description, component: Component, breadcrumb } = pageData;

  return (
    <div className="max-w-6xl pt-20">
      <Breadcrumb breadcrumb={breadcrumb} />

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {description && (
          <p className="text-base-content/70 text-lg">{description}</p>
        )}
      </div>

      <Component />
    </div>
  );
}

// Generate static params for all known docs pages
export function generateStaticParams() {
  return Object.keys(docsPages).map((slug) => ({
    slug: slug.split("/"),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug = [] } = await params;
  const pageData = getPageBySlug(slug);

  if (!pageData) {
    return {
      title: "Page Not Found",
      description: "The requested documentation page could not be found.",
    };
  }

  return {
    title: `${pageData.title} | Scrollr Docs`,
    description: pageData.description,
  };
}

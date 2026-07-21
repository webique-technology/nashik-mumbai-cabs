import React from "react";
import { getTourBySlug, getAllSlugs } from "@/lib/data";
import Link from "next/link";
import { DetailPage1 } from "@/components/sections/DetailPageComp";
import { generatePageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllSlugs() || [];
}

// Dynamic SEO Metadata Generator Function
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const tour = getTourBySlug(slug);

  if (!tour) {
    return generatePageMetadata({
      staticData: {
        title: "Tour Package Not Found | Nashik Mumbai Cabs",
        description: "The requested tour package or route details could not be found.",
      },
      path: `/cities/${slug || ""}`,
    });
  }

  // Calls your central SEO helper to build complete OpenGraph & Twitter tags
  return generatePageMetadata({
    data: tour,
    path: `/cities/${slug}`,
  });
}

export default async function CityDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const tour = getTourBySlug(slug);

  if (!tour) return <NotFoundError />;

  return <DetailPage1 dataObject={tour} />;
}

function NotFoundError() {
  return (
    <div className="container my-5 py-5 text-center bg-light rounded-3 border">
      <h1 className="display-6 fw-bold text-dark mb-3">Package Not Found</h1>
      <p className="text-muted mb-4">
        We couldn't find the specific city tour package you are looking for.
      </p>
      <Link
        href="/"
        className="btn btn-warning px-4 py-2 fw-semibold text-dark shadow-sm"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
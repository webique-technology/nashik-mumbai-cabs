import React from "react";
// Point directly to the specific railway helper functions in your data file
import { getRailwayTourBySlug, getAllRailwaySlugs } from "@/lib/railwayData";
import { DetailPage1 } from "@/components/sections/DetailPageComp";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const slugs = getAllRailwaySlugs();
  return slugs || [];
}

// Dynamic SEO Metadata Generator Function
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const tour = getRailwayTourBySlug(slug);

  if (!tour) {
    return generatePageMetadata({
      staticData: {
        title: "Railway Station Route Not Found | Nashik Mumbai Cabs",
        description: "The requested railway station taxi route could not be found.",
      },
      path: `/railway-station/${slug || ""}`,
    });
  }

  // Connects to central SEO helper to build complete OpenGraph & Twitter tags
  return generatePageMetadata({
    data: tour,
    path: `/railway-station/${slug}`,
  });
}

export default async function RailwayStationDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const tour = getRailwayTourBySlug(slug);

  if (!tour) return <NotFoundError />;

  return <DetailPage1 dataObject={tour} />;
}

function NotFoundError() {
  return (
    <div className="container my-5 py-5 text-center bg-light rounded-3 border">
      <h1 className="display-6 fw-bold text-dark mb-3">
        Railway Station Route Not Found
      </h1>
      <p className="text-muted mb-4">
        We couldn't find the specific railway station taxi route you are looking for.
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
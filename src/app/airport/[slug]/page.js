import React from "react";
// Ensure this path matches where your airport helper functions are defined
import { getAirportTourBySlug } from "@/lib/airportData"; 
import { DetailPage1 } from "@/components/sections/DetailPageComp";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

// 1. Dynamic SEO Metadata Generator
export async function generateMetadata({ params }) {
  // Await params safely
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const airportTour = getAirportTourBySlug(slug);

  if (!airportTour) {
    return generatePageMetadata({
      staticData: { 
        title: "Airport Route Not Found | Nashik Mumbai Cabs",
        description: "The requested airport taxi route could not be located."
      },
      path: `/airport/${slug || ""}`,
    });
  }

  return generatePageMetadata({
    data: airportTour,
    path: `/airport/${slug}`,
  });
}

// 2. Server Component Default Export
export default async function AirportDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const tour = getAirportTourBySlug(slug);

  if (!tour) return <NotFoundError />;

  return <DetailPage1 dataObject={tour} />;
}

function NotFoundError() {
  return (
    <div className="container my-5 py-5 text-center bg-light rounded-3 border">
      <h1 className="display-6 fw-bold text-dark mb-3">
        Airport Route Not Found
      </h1>
      <p className="text-muted mb-4">
        We couldn't find the specific airport transfer route you are looking for.
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
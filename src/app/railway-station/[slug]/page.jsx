import React from "react";
// Corrected: Point directly to the specific railway helper functions in your single data file
import { getRailwayTourBySlug, getAllRailwaySlugs } from "@/lib/railwayData";
import { DetailPage1 } from "@/components/sections/DetailPageComp";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllRailwaySlugs();
  return slugs || [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getRailwayTourBySlug(slug);

  if (!tour) return { title: "Railway Station Route Not Found" };

  return {
    title: tour.meta?.title || tour.title,
    description: tour.meta?.description || tour.intro,
  };
}

export default async function RailwayStationDetailPage({ params }) {
  const { slug } = await params;
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
      <Link
        href="/"
        className="btn btn-warning px-4 py-2 fw-semibold text-dark shadow-sm"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
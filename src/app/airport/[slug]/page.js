import React from "react";
// Corrected: Point directly to the specific airport helper functions in your single data file
import { getAirportTourBySlug, getAllAirportSlugs } from "@/lib/airportData";
import { DetailPage1 } from "@/components/sections/DetailPageComp";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllAirportSlugs();
  return slugs || [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tour = getAirportTourBySlug(slug);

  if (!tour) return { title: "Airport Route Not Found" };

  return {
    title: tour.meta?.title || tour.title,
    description: tour.meta?.description || tour.intro,
  };
}

export default async function AirportDetailPage({ params }) {
  const { slug } = await params;
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
      <Link
        href="/"
        className="btn btn-warning px-4 py-2 fw-semibold text-dark shadow-sm"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
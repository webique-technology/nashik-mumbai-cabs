import React from "react";
import Link from "next/link";
import { getTourBySlug, getAllSlugs } from "@/lib/data";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs || [];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const tour = getTourBySlug(slug);

  if (!tour) return { title: "Tour Not Found" };

  return {
    title: tour.meta?.title || tour.title,
    description: tour.meta?.description || tour.intro,
  };
}

export default async function TourDetailPage({ params }) {
  // Safe handling across Next.js 14 and 15
  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams || {};
  const tour = getTourBySlug(slug);

  if (!tour) {
    return (
      <div className="container my-5 py-5 text-center bg-light rounded-3 border">
        <h1 className="display-6 fw-bold text-dark mb-3">
          Tour Package Not Found
        </h1>
        <p className="text-muted mb-4 max-w-sm mx-auto">
          The taxi service route or pilgrim package you are looking for is
          currently unavailable.
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

  return (
    <main className="py-5 bg-white text-dark">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Main Layout Area */}
          <div className="col-12 col-lg-9">
            <article className="tour-details-page px-2">
              {/* 1. Dynamic Header Image Banner */}
              {tour.image && (
                <div className="w-100 overflow-hidden rounded-3 shadow-sm mb-4">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="img-fluid w-100 rounded-3"
                    style={{ maxHeight: "460px", objectFit: "cover" }}
                  />
                </div>
              )}

              {/* 2. Primary Hero Header */}
              <header className="mb-4">
                {tour.tagline && (
                  <h1 className="detail-h1">
                    {tour.title}
                  </h1>
                )}
                <div className="text-secondary lh-base fs-6">
                  {tour.intro && <p className="mb-3">{tour.intro}</p>}
                  {tour.fleetDescription && (
                    <p className="mb-0">{tour.fleetDescription}</p>
                  )}
                </div>
              </header>

              {/* 3. DYNAMIC CONTENT BLOCK ENGINE */}
              {tour.contentBlocks &&
                tour.contentBlocks.map((block, index) => {
                  // Renders standard layout sections (like About, Divine Experience, etc.)
                  if (block.type === "text") {
                    return (
                      <section key={index} className="mb-4 pt-3 border-top">
                        {block.heading && (
                          <h2 className="h3 fw-bold text-dark mb-3">
                            {block.heading}
                          </h2>
                        )}
                        <p className="text-secondary lh-base fs-6">
                          {block.content}
                        </p>
                      </section>
                    );
                  }

                  // Renders the highlighted alert callout sections (like Fares/Pricing)
                  if (block.type === "callout") {
                    return (
                      <section
                        key={index}
                        className="mb-4 p-4 bg-light rounded-3 border-start border-warning border-4 shadow-sm"
                      >
                        {block.heading && (
                          <h2 className="h4 fw-bold text-dark mb-2">
                            📍 {block.heading}
                          </h2>
                        )}
                        <p className="text-secondary lh-base mb-0">
                          {block.content}
                        </p>
                      </section>
                    );
                  }

                  // Renders lists automatically (like Why Choose Us or Nearby Places)
                  if (block.type === "list") {
                    return (
                      <section key={index} className="mb-4 pt-3 border-top">
                        {block.heading && (
                          <h2 className="h3 fw-bold text-dark mb-3">
                            {block.heading}
                          </h2>
                        )}
                        {block.intro && (
                          <p className="text-secondary fw-medium mb-3">
                            {block.intro}
                          </p>
                        )}

                        <div className="row g-2 mb-3">
                          {block.items &&
                            block.items.map((item, listIdx) => (
                              <div key={listIdx} className="col-12 col-md-6">
                                <div className="d-flex align-items-start p-2 bg-light rounded border border-light-subtle h-100">
                                  <span className="text-success fw-bold me-2 px-1">
                                    ✓
                                  </span>
                                  <span className="text-secondary small fw-medium">
                                    {item}
                                  </span>
                                </div>
                              </div>
                            ))}
                        </div>

                        {block.closing && (
                          <p className="text-secondary lh-base mt-2">
                            {block.closing}
                          </p>
                        )}
                      </section>
                    );
                  }

                  return null;
                })}

              {/* 4. Bottom High-Conversion Conversion Banner */}
              {tour.longDistance && (
                <section className="">
                  {Array.isArray(tour.longDistance.content) ? (
                    tour.longDistance.content.map((value, i) => (
                      <p
                        key={i}
                        className="text-light-subtle fs-6 mb-3 opacity-75 lh-base"
                      >
                        {value}
                      </p>
                    ))
                  ) : (
                    <p className="text-light-subtle fs-6 mb-4 opacity-75 lh-base">
                      {tour.longDistance.content}
                    </p>
                  )}

                  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 pt-4 border-top border-secondary">
                    <span className="fw-bold text-uppercase tracking-wide text-warning small mb-2 mb-sm-0">
                      {tour.longDistance.closing}
                    </span>
                    <a
                      href="tel:+919822393852"
                      className="w-100 w-sm-auto btn btn-warning px-4 py-2 fw-bold text-dark text-uppercase tracking-wider shadow"
                    >
                      📞 Call & Book Cab
                    </a>
                  </div>
                </section>
              )}
            </article>
          </div>
          <div className="col-12 col-lg-3"></div>
        </div>
      </div>
    </main>
  );
}

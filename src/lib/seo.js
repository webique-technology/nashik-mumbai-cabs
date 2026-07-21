// src/lib/seo.js

const DEFAULT_SITE_CONFIG = {
  siteName: "Nashik Mumbai Cabs",
  defaultTitle:
    "Nashik Mumbai Cabs | Premium Taxi & Car Rentals in Maharashtra",
  defaultDescription:
    "Book reliable, affordable, and safe outstation taxis, cabs, and buses from Nashik to Mumbai, Pune, Shirdi, and across Maharashtra. 24/7 service.",
  defaultKeywords: [
    "Nashik Mumbai Cabs",
    "Taxi service Nashik",
    "Outstation cab booking",
    "Cab rental Nashik to Mumbai",
    "Car hire Nashik",
  ],
  siteUrl: "https://www.nashikmumbaicabs.com", // Replace with your actual domain
  defaultOgImage: "/images/og-default.jpg",
};

/**
 * Generates standardized Next.js Metadata objects dynamically
 * @param {Object} options Configuration parameters
 * @param {Object} [options.data] Dynamic data object (cab, tour, airport, railway, etc.)
 * @param {Object} [options.staticData] Manual overrides or static page details
 * @param {string} [options.path] Current page path or slug (e.g., '/cabs/maruti-ertiga')
 * @returns {import('next').Metadata} Formatted Next.js Metadata configuration object
 */
export function generatePageMetadata({
  data = null,
  staticData = {},
  path = "",
} = {}) {
  // 1. Extract dynamic meta properties from various dataset structures
  const dynamicTitle = data?.meta?.title || data?.title || data?.name || null;

  const dynamicDescription =
    data?.meta?.description ||
    data?.description ||
    data?.intro ||
    data?.routesSubtitle ||
    null;

  const dynamicImage = data?.imageSrc || data?.image || null;

  // 2. Resolve final parameters (Static overrides take priority over Dynamic data, which fallback to Default Site Config)
  const title =
    staticData.title ||
    (dynamicTitle
      ? `${dynamicTitle} | ${DEFAULT_SITE_CONFIG.siteName}`
      : DEFAULT_SITE_CONFIG.defaultTitle);

  // Clean description string to prevent cut-offs (max 160 chars)
  const rawDesc =
    staticData.description ||
    dynamicDescription ||
    DEFAULT_SITE_CONFIG.defaultDescription;
  const description =
    rawDesc.length > 160 ? `${rawDesc.slice(0, 157)}...` : rawDesc;

  // Resolve absolute canonical and image URLs
  const canonicalUrl = `${DEFAULT_SITE_CONFIG.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

  const rawImage =
    staticData.image || dynamicImage || DEFAULT_SITE_CONFIG.defaultOgImage;
  const imageUrl = rawImage.startsWith("http")
    ? rawImage
    : `${DEFAULT_SITE_CONFIG.siteUrl}${rawImage}`;

  // Combine keywords if provided as array or string
  const keywords = Array.isArray(staticData.keywords)
    ? staticData.keywords
    : data?.notes
      ? data.notes.split(",").map((k) => k.trim())
      : DEFAULT_SITE_CONFIG.defaultKeywords;

  // 3. Construct and return the full Next.js Metadata object
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: DEFAULT_SITE_CONFIG.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

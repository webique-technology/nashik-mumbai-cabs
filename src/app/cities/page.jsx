// src/app/cities/page.jsx
import ServicesGridCardSection from "@/components/sections/ServicesGridSec";
import { CommonBanner } from "@/components/ui/cards";
// 🔴 Import ONLY originalStaticTours for this page grid
import { originalStaticTours } from "@/lib/cityData";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "City Transportation | Leading Cab Service Provider in Nashik",
    description:
      "Learn more about Nashik Mumbai Pune Shirdi Cha. Sambhajinagar Airport Cabs, our vision, vetted professional drivers, and fleet quality standards.",
    image: "/images/about-banner.jpg",
  },
  path: "/cities",
});

const CitiesPage = () => {
  const breadcrumbPaths = [
    { label: "Home", url: "/" },
    { label: "Cities", url: "/cities" },
  ];

  // Maps ONLY originalStaticTours to include redirect paths
  const staticCityServices = originalStaticTours.map((tour) => ({
    ...tour,
    redirectUrl: `/cities/${tour.slug}`,
  }));

  return (
    <main>
      <CommonBanner
        title="Cities Services"
        breadcrumbs={breadcrumbPaths}
        bgImage={"/images/common-banner.avif"}
        overlayOpacity={0.6}
        textAlign="center"
      />
      {/* Renders Grid with ONLY Original Static Tour Cards */}
      <ServicesGridCardSection data={staticCityServices} />
    </main>
  );
};

export default CitiesPage;

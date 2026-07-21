import ServicesGridCardSection from "@/components/sections/ServicesGridSec";
import { CommonBanner } from "@/components/ui/cards";
import { NashikAirportTaxiServices } from "@/lib/airportData";

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "Airport Transportation | Leading Taxi Service Provider in Nashik",
    description:
      "Learn more about Nashik Mumbai Cabs, our vision, vetted professional drivers, and fleet quality standards.",
    image: "/images/about-banner.jpg",
  },
  path: "/airport",
});

const AirportPage = () => {
  const breadcrumbPaths = [
    { label: "Home", url: "/" },
    { label: "Airport", url: "/airport" },
  ];
  return (
    <main>
      <CommonBanner
        title="Airport Services"
        breadcrumbs={breadcrumbPaths}
        bgImage={"/images/common-banner.avif"} // Can be static object image frame or direct hotlink string paths
        overlayOpacity={0.6}
        textAlign="center"
      />
      <ServicesGridCardSection data={NashikAirportTaxiServices} />
    </main>
  );
};

export default AirportPage;

import ServicesGridCardSection from "@/components/sections/ServicesGridSec";
import { CommonBanner } from "@/components/ui/cards";
import { NashikRailwayTaxiServices } from "@/lib/railwayData";

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "Railway Pickup - Drop Services | Leading Taxi Service Provider in Nashik",
    description:
      "Learn more about Nashik Mumbai Cabs, our vision, vetted professional drivers, and fleet quality standards.",
    image: "/images/about-banner.jpg",
  },
  path: "/cities",
});

const RailwayStationPage = () => {
  const breadcrumbPaths = [
    { label: "Home", url: "/" },
    { label: "Railway Station", url: "/railway-station" },
  ];
  return (
    <main>
      <CommonBanner
        title="Railway Station Services"
        breadcrumbs={breadcrumbPaths}
        bgImage={"/images/common-banner.avif"} // Can be static object image frame or direct hotlink string paths
        overlayOpacity={0.6}
        textAlign="center"
      />
      <ServicesGridCardSection data={NashikRailwayTaxiServices} />
    </main>
  );
};

export default RailwayStationPage;

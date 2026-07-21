import { PilgrimStandard } from "@/components/sections/CommonSec";
import { ServiceTabsSection } from "@/components/sections/ServicesTabSec";
import { CommonBanner } from "@/components/ui/cards";

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "Cabs - Car - Taxi Service in Nashik | Leading Taxi Service Provider in Nashik",
    description:
      "Learn more about Nashik Mumbai Cabs, our vision, vetted professional drivers, and fleet quality standards.",
    image: "/images/about-banner.jpg",
  },
  path: "/cabs",
});

const CabsPage = () => {
  const breadcrumbPaths = [
    { label: "Home", url: "/" },
    { label: "Cabs", url: "/cabs" },
  ];
  return (
    <main>
      <CommonBanner
        title="Cabs Services"
        breadcrumbs={breadcrumbPaths}
        bgImage={"/images/common-banner.avif"} // Can be static object image frame or direct hotlink string paths
        overlayOpacity={0.6}
        textAlign="center"
      />
      <ServiceTabsSection title="Choose Your" highlightWord="Cab" page="cabs" />
      <PilgrimStandard />
    </main>
  );
};

export default CabsPage;

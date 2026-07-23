import { PilgrimStandard } from "@/components/sections/CommonSec";
import { ServiceTabsSection } from "@/components/sections/ServicesTabSec";
import { CommonBanner } from "@/components/ui/cards";

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "Car Rental Service in Nashik | Outstation Cabs, Airport Taxi & Local Travel",
    description:
      "Book affordable cabs from Nashik to Shirdi, Mumbai, Pune & all Maharashtra. Reliable drivers, AC cabs & on-time service guaranteed.",
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

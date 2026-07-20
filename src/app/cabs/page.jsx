import { PilgrimStandard } from "@/components/sections/CommonSec";
import { ServiceTabsSection } from "@/components/sections/ServicesTabSec";
import { CommonBanner } from "@/components/ui/cards";

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

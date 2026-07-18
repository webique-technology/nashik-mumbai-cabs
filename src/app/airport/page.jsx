import ServicesGridCardSection from "@/components/sections/ServicesGridSec";
import { CommonBanner } from "@/components/ui/cards";
import { NashikAirportTaxiServices } from "@/lib/airportData";

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

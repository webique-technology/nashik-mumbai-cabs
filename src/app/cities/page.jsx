import ServicesGridCardSection from "@/components/sections/ServicesGridSec";
import { CommonBanner } from "@/components/ui/cards";
import { TaxiServicesCityToCity } from "@/lib/data";

const CitiesPage = () => {
  const breadcrumbPaths = [
    { label: "Home", url: "/" },
    { label: "Cities", url: "/cities" },
  ];
  return (
    <main>
      <CommonBanner
        title="Cities Services"
        breadcrumbs={breadcrumbPaths}
        bgImage={"/images/common-banner.avif"} // Can be static object image frame or direct hotlink string paths
        overlayOpacity={0.6}
        textAlign="center"
      />
      <ServicesGridCardSection data={TaxiServicesCityToCity} />
    </main>
  );
};

export default CitiesPage;

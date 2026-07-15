import { ServiceTabsSection } from "@/components/sections/ServicesTabSec";
import { CommonBanner } from "@/components/ui/cards";

const BusPage = () => {
    const breadcrumbPaths = [
        { label: "Home", url: "/" },
        { label: "Bus", url: "/bus" }
    ];
    return (
        <main>
            <CommonBanner
                title="Bus Services"
                breadcrumbs={breadcrumbPaths}
                bgImage={"/images/common-banner.avif"} // Can be static object image frame or direct hotlink string paths
                overlayOpacity={0.6}
                textAlign="center"
            />
        </main>
    )
}

export default BusPage;
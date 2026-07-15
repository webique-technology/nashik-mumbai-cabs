import { CommonBanner } from "@/components/ui/cards";

const RailwayStationPage = () => {
    const breadcrumbPaths = [
        { label: "Home", url: "/" },
        { label: "Railway Station", url: "/railway-station" }
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
        </main>
    )
}

export default RailwayStationPage;
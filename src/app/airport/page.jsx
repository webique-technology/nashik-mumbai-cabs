import { CommonBanner } from "@/components/ui/cards";

const AirportPage = () => {
    const breadcrumbPaths = [
        { label: "Home", url: "/" },
        { label: "Airport", url: "/airport" }
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
        </main>
    )
}

export default AirportPage;
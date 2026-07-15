import { CommonBanner } from "@/components/ui/cards";

const CitiesPage = () => {
    const breadcrumbPaths = [
        { label: "Home", url: "/" },
        { label: "Cities", url: "/cities" }
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
        </main>
    )
}

export default CitiesPage;
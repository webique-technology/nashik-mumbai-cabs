import { notFound } from "next/navigation";
import { CabsData } from "@/lib/data";
import CabDetail from "@/components/sections/CabDetail"; // We will create this next

// Dynamic Title Generation for SEO Optimization
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const cab = CabsData.find((item) => item.slug === slug);

    if (!cab) return { title: "Vehicle Not Found | Nashik Mumbai Cabs" };

    return {
        title: `${cab.name} Rental | Reliable Taxi & Car Rentals`,
        description: cab.description.slice(0, 160),
    };
}

export default async function CabDetailPage({ params }) {
    const { slug } = await params;

    // Filter array to locate the selected item by slug key
    const cab = CabsData.find((item) => item.slug === slug);

    if (!cab) {
        notFound();
    }

    return <CabDetail cab={cab} />;
}
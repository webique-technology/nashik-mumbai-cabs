import { notFound } from "next/navigation";
import { CabsData } from "@/lib/data";
import CabDetail from "@/components/sections/CabDetail"; // We will create this next

// Dynamic Title Generation for SEO Optimization
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const bus = CabsData.find((item) => item.slug === slug);

  if (!bus) return { title: "Vehicle Not Found | Nashik Mumbai Cabs" };

  return {
    title: `${bus.name} Rental | Reliable Taxi & Car Rentals`,
    description: bus.description.slice(0, 160),
  };
}

export default async function BusDetailPage({ params }) {
  const { slug } = await params;

  // Filter array to locate the selected item by slug key
  const bus = CabsData.find((item) => item.slug === slug);

  if (!bus) {
    notFound();
  }

  return <CabDetail cab={bus} />;
}

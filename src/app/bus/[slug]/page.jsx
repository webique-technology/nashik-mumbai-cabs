import { notFound } from "next/navigation";
import { CabsData } from "@/lib/data";
import CabDetail from "@/components/sections/CabDetail";
import { generatePageMetadata } from "@/lib/seo";

// Dynamic Metadata Generation for SEO Optimization
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const bus = CabsData.find((item) => item.slug === slug);

  if (!bus) {
    return generatePageMetadata({
      staticData: {
        title: "Vehicle Not Found | Nashik Mumbai Cabs",
        description: "The requested bus or vehicle details could not be found.",
      },
      path: `/bus/${slug || ""}`,
    });
  }

  // Uses your centralized SEO helper to build complete OpenGraph & Twitter tags
  return generatePageMetadata({
    data: bus,
    path: `/bus/${slug}`,
  });
}

export default async function BusDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  // Filter array to locate the selected item by slug key
  const bus = CabsData.find((item) => item.slug === slug);

  if (!bus) {
    notFound();
  }

  return <CabDetail cab={bus} />;
}
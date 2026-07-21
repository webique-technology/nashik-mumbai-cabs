import { notFound } from "next/navigation";
import { CabsData } from "@/lib/data";
import CabDetail from "@/components/sections/CabDetail"; // We will create this next
import { generatePageMetadata } from "@/lib/seo";
// Dynamic Title Generation for SEO Optimization
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cab = CabsData.find((item) => item.slug === slug);

  if (!cab) {
    return generatePageMetadata({
      staticData: { title: "Vehicle Not Found | Nashik Mumbai Cabs" },
      path: `/cabs/${slug}`,
    });
  }

  // Uses data array object directly with dynamic prefixing
  return generatePageMetadata({
    data: cab,
    path: `/cabs/${slug}`,
  });
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
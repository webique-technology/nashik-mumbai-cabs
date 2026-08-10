import ContactPageComp from "./ContactPage";

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "Contact Us 24/7 available | Leading Cab Service Provider in Nashik",
    description:
      "Contact Nashik Mumbai Pune Shirdi Cabs, available 24/7 for Cab services in Nashik, Mumbai, and throughout Maharashtra.",
    image: "/images/about-banner.jpg",
  },
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      <ContactPageComp />
    </>
  );
}

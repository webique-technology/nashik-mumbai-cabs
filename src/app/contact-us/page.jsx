import ContactPageComp from "./ContactPage";

import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "Contact Us 24/7 available | Leading Taxi Service Provider in Nashik",
    description:
      "Contact Nashik Mumbai Cabs, available 24/7 for taxi services in Nashik, Mumbai, and throughout Maharashtra.",
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

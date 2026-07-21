import React from "react";
import { CommonBanner } from "@/components/ui/cards";
import innerPageBg from "../../../public/images/common-banner.avif"; // Import your static layout graphics
import { AppDownloadBanner } from "@/components/sections/PromoSection";

import mobileImg from "../../../public/images/promo-mobiles.png";
import appDBgImage from "../../../public/images/promo-banner-2.jpg";
import { FaqSec } from "@/components/sections/FaqSec";
import { LeftTextRightImageCommnSec } from "@/components/sections/LTRI_CommonSec";
import {
  BookingForm,
  PilgrimStandard,
  SpecialOffer,
} from "@/components/sections/CommonSec";
import CounterSection from "@/components/sections/CounterSection";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  staticData: {
    title: "About Us | Leading Taxi Service Provider in Nashik",
    description:
      "Learn more about Nashik Mumbai Cabs, our vision, vetted professional drivers, and fleet quality standards.",
    image: "/images/about-banner.jpg",
  },
  path: "/about",
});

export default function AboutPage() {
  const breadcrumbPaths = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
  ];

  const ExplorationSec = {
    heading: "10 Years of Delivering Reliable ",
    highlightWord: "Cab Journeys",
    imageSrc: "/images/about-sec-img.jpg", // Replace with your image asset
    badgeText: {
      normalText: "Looking for an ,",
      highlightedText: "exciting way to explore Nashik’s hidden gems.",
    },
    features: [
      {
        id: 1,
        icon: "/images/transportation.png",
        title: "Outstation & City Cabs",
        description:
          "A diverse fleet of sanitized sedans, SUVs, and tempo travellers tailored for seamless intercity runs, family tours, and local sightseeing.",
      },
      {
        id: 2,
        icon: "/images/airplane.png",
        title: "Airport Pickups & Drops",
        description:
          "Prompt and stress-free airport transfers connecting Nashik directly to Mumbai (CSMIA), Pune, Shirdi, and Ozar terminals 24/7.",
      },
      {
        id: 3,
        icon: "/images/travel-bag.png",
        title: "Pilgrimage & Corporate Tours",
        description:
          "Trusted, hassle-free travel packages for major shrines like Trimbakeshwar, Shirdi, and Bhimashankar, alongside corporate fleet logistics.",
      },
    ],
  };

  const downloadSectionData = {
    titlePrefix: "Ever wondered how smooth your journey can be? At ",
    titleHighlight: "Nashik Mumbai Cabs",
    titleSuffix: "We Make It Happen.",
    iosLink: "tel:+919225899899",
    androidLink:
      "https://wa.me/919225899899?text=Hello%2C%20I%20would%20like%20to%20book%20a%20cab.%20Please%20provide%20more%20details.",
    mockupImageSrc: mobileImg,
    // Can accept imported static object 'dualPhonesMockup' or normal string route paths
  };

  return (
    <main>
      {/* CASE 1: Using a Background Image with 60% Dark Overlay (Matches image layout exactly) */}
      <CommonBanner
        title="About Us"
        breadcrumbs={breadcrumbPaths}
        bgImage={innerPageBg} // Can be static object image frame or direct hotlink string paths
        overlayOpacity={0.6}
        textAlign="center"
      />
      <LeftTextRightImageCommnSec
        heading={ExplorationSec.heading}
        highlightWord={ExplorationSec.highlightWord}
        features={ExplorationSec.features}
        imageSrc={ExplorationSec.imageSrc}
        badgeText={ExplorationSec.badgeText}
      />
      <CounterSection />
      <PilgrimStandard />
      <FaqSec />
      <AppDownloadBanner
        titlePrefix={downloadSectionData.titlePrefix}
        titleHighlight={downloadSectionData.titleHighlight}
        titleSuffix={downloadSectionData.titleSuffix}
        iosLink={downloadSectionData.iosLink}
        androidLink={downloadSectionData.androidLink}
        mockupImageSrc={downloadSectionData.mockupImageSrc}
        bgImage={appDBgImage}
        rightComponent={<BookingForm titleClass={"d-none"} />}
      />
    </main>
  );
}

import React from "react";
import { CommonBanner } from "@/components/ui/cards";
import innerPageBg from "../../../public/images/common-banner.avif"; // Import your static layout graphics
import TestimonialSec from "@/components/sections/TestimonialSec";
import { AppDownloadBanner } from "@/components/sections/PromoSection";

import mobileImg from "../../../public/images/promo-mobiles.png";
import appDBgImage from "../../../public/images/promo-banner-2.jpg";
import { FaqSec } from "@/components/sections/FaqSec";
import { LeftTextRightImageCommnSec } from "@/components/sections/LTRI_CommonSec";
import tourGuide from "../../../public/images/tour-guide.png";
import calendar from "../../../public/images/calendar.png";
import tags from "../../../public/images/tags.png";
import { PilgrimStandard, SpecialOffer } from "@/components/sections/CommonSec";

export default function AboutPage() {
  const breadcrumbPaths = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
  ];

  const ExplorationSec = {
    heading: "Your Effortless Path to World ",
    highlightWord: "Exploration",
    imageSrc: "/images/about-sec-img.jpg", // Replace with your image asset
    badgeText: {
      normalText: "Capture memories",
      highlightedText: "but also savor the Present Moment.",
    },
    features: [
      {
        id: 1,
        icon: "/images/transportation.png",
        title: "Transportation",
        description:
          "A diverse fleet of reliable vehicles, from luxury sedans to spacious vans, tailored perfectly for solo travelers, families, and corporate groups.",
      },
      {
        id: 2,
        icon: "/images/airplane.png",
        title: "Tours & Excursions",
        description:
          "Expertly guided, curated travel packages exploring scenic wonders and cultural landmarks to ensure an unforgettable destination experience.",
      },
      {
        id: 3,
        icon: "/images/travel-bag.png",
        title: "Corporate Travel",
        description:
          "Streamlined corporate logistics and efficient group transportation solutions customized to simplify high-level business travel needs.",
      },
    ],
  };

  const downloadSectionData = {
    titlePrefix: "Your First Booking Discount -",
    titleHighlight: "Get 25% Off",
    titleSuffix: "on Your Next Adventure with Us!",
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
      />
    </main>
  );
}

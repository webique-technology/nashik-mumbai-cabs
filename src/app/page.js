import CounterSection from "@/components/sections/CounterSection";
import HeroHeader from "@/components/sections/HeroHeader";
import { LeftTextRightImageCommnSec } from "@/components/sections/LTRI_CommonSec";
import PopularDestinations from "@/components/sections/PopularDestination";
import { PromoBanner } from "@/components/sections/PromoSection";
import { ServiceTabsSection } from "@/components/sections/ServicesTabSec";
import WhyChooseUs from "@/components/sections/WhyChooseUsSec";
import TestimonialSec from "@/components/sections/TestimonialSec";

import tourGuide from "../../public/images/transportation.png"
import calendar from "../../public/images/airplane.png"
import tags from "../../public/images/travel-bag.png"
import { CarBlock } from "@/components/sections/CommonSec";


export default function Home() {

  const ExplorationSec = {
    heading: "Your Effortless Path to World Exploration",
    imageSrc: "/images/about-sec-img.jpg", // Replace with your image asset
    badgeText: {
      normalText: "Capture memories",
      highlightedText: "but also savor the Present Moment."
    },
    features: [
      {
        id: 1,
        icon: tourGuide.src,
        title: "Transportation",
        description: "A diverse fleet of reliable vehicles, from luxury sedans to spacious vans, tailored perfectly for solo travelers, families, and corporate groups."
      },
      {
        id: 2,
        icon: calendar.src,
        title: "Tours & Excursions",
        description: "Expertly guided, curated travel packages exploring scenic wonders and cultural landmarks to ensure an unforgettable destination experience."
      },
      {
        id: 3,
        icon: tags.src,
        title: "Corporate Travel",
        description: "Streamlined corporate logistics and efficient group transportation solutions customized to simplify high-level business travel needs."
      }
    ]
  };

  const PromoData = {
    highlightText: "",
    mainTitleNormal: "",
    mainTitleBold: "Our Premium Travel Solutions.",
    mainTitleSuffix: "",
    buttonText: "",
    desc: [],
    features: [
      {
        id: 1,
        icon: "Car",
        title: "Hire Cabs in Nashik",
        description: "A diverse fleet of reliable vehicles, from luxury sedans to spacious vans, tailored perfectly for solo travelers, families, and corporate groups."
      },
      {
        id: 2,
        icon: "Plane",
        title: "Airport Pickup / Drop Taxi Services",
        description: "Reliable and punctual transfers to and from all major airports including CSMIA Mumbai. Professional chauffeurs ensure you never miss a flight."
      },
      {
        id: 3,
        icon: "Bus",
        title: "Bus Services from Nashik",
        description: "Spacious and comfortable bus rentals for group pilgrimages and corporate tours in Nashik and surrounding areas, equipped with modern amenities."
      }
    ],
    // Replace with your image source path matching image_d1d2a0.jpg
    bgImage: "/images/services-img.webp"
  };

  const whyChooseUsData = {
    title: "Why Choose Us",
    features: [
      {
        id: 1,
        iconName: "UserCheck", // Maps to <UserCheck /> icon component
        title: "Tour Guide",
        description: "Professional, well-mannered drivers who double as local travel guides throughout Maharashtra."
      },
      {
        id: 2,
        iconName: "Coins", // Maps to <Coins /> icon component
        title: "Friendly Price",
        description: "Transparent, budget-friendly outstation taxi rates with no hidden tolls or surprise surcharges."
      },
      {
        id: 3,
        iconName: "CalendarDays", // Maps to <CalendarDays /> icon component
        title: "Instant Booking",
        description: "Seamless 24/7 digital reservations with instant ride allocation and quick vehicle dispatch."
      },
      {
        id: 4,
        iconName: "FileText", // Maps to <FileText /> icon component
        title: "Custom Strategy",
        description: "Tailored transit logistics carefully planned for corporate events, family trips, and pilgrimages."
      }
    ]
  };

  return (
    <main>
      <HeroHeader />
      <CarBlock />
      <LeftTextRightImageCommnSec
        heading={ExplorationSec.heading}
        features={ExplorationSec.features}
        imageSrc={ExplorationSec.imageSrc}
        badgeText={ExplorationSec.badgeText}
      />
      <CounterSection />
      <PromoBanner
        content={{
          highlightText: PromoData.highlightText,
          mainTitleNormal: PromoData.mainTitleNormal,
          mainTitleBold: PromoData.mainTitleBold,
          mainTitleSuffix: PromoData.mainTitleSuffix,
          buttonText: PromoData.buttonText,
          // onBtnClick: () => console.log("Navigating to travel booking page...")
        }}
        desc={PromoData.desc}
        features={PromoData.features} // FIXED: Added this missing line to render your services list!
        bgImage={PromoData.bgImage}
      />
      <WhyChooseUs
        title={whyChooseUsData.title}
        features={whyChooseUsData.features}
      />
      <ServiceTabsSection
        title="Your Next Trip Plan"
        highlightWord="Book"
      />
      <PopularDestinations />
      <TestimonialSec />
    </main>
  );
}

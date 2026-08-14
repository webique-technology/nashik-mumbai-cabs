// src/lib/cityData.js — Master Route Engine & Rich Dynamic Content

export const slugify = (text = "") => {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
};

// Recursive helper to safely swap {origin} & {destination} across strings, arrays, and objects
function replacePlaceholders(val, origin, destination) {
  if (typeof val === "string") {
    return val
      .replace(/\{origin\}/g, origin)
      .replace(/\{destination\}/g, destination);
  }
  if (Array.isArray(val)) {
    return val.map((item) => replacePlaceholders(item, origin, destination));
  }
  if (typeof val === "object" && val !== null) {
    const res = {};
    for (const key in val) {
      res[key] = replacePlaceholders(val[key], origin, destination);
    }
    return res;
  }
  return val;
}

// ─── 1. RICH BASE TEMPLATES FOR DYNAMIC CITY PAIRS ─────────────────────────
const baseDynamicTours = [
  // ─── 1. NASHIK <-> MUMBAI ────────────────────────────────────────────────
  {
    id: "dyn-nashik-mumbai",
    baseOrigin: "Nashik",
    baseDestination: "Mumbai",
    distanceKm: 165,
    estimatedTime: "3.5 - 4 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-mumbai.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "At Nashik Mumbai Pune Shirdi Airport Cab, we offer premium, budget-friendly cab rentals for your journey between {origin} and {destination}. Whether you are traveling for business, family vacations, or direct airport drops at Chhatrapati Shivaji Maharaj International Airport (CSMIA), our reliable 24/7 service guarantees comfortable transit.",
    fleetDescription:
      "Our expansive fleet features a variety of clean, well-maintained AC vehicles including Swift Dzire, Toyota Etios, Maruti Ertiga, Toyota Innova Crysta, and 17-26 seater Tempo Travellers. Every vehicle undergoes regular safety checks and sanitization before every trip.",
    contentBlocks: [
      {
        type: "text",
        heading:
          "Comfortable Highway Travel Between {origin} and {destination}",
        content:
          "The 165 km highway distance via the Mumbai-Nashik Expressway and Samruddhi Mahamarg is covered smoothly by our trained drivers. Booking a private cab gives you complete control over your schedule—eliminating train wait times and crowded bus rides. Enjoy doorstep pickup from any locality and a smooth drive handled by professional highway drivers.",
      },
      {
        type: "list",
        heading: "Why Choose Our {origin} to {destination} Cab Service?",
        intro:
          "We take pride in providing top-rated intercity travel experiences. Here is why thousands of travelers trust us:",
        items: [
          "Transparent pricing with clear toll, driver allowance, and GST breakdowns",
          "Clean, odor-free, fully air-conditioned cabs for maximum highway comfort",
          "Experienced, polite, and verified drivers familiar with expressways and city routes",
          "24/7 customer assistance with instant booking confirmations",
          "Flexible one-way drops, same-day roundtrips, and customized multi-day packages",
        ],
        closing:
          "Book your ride online or via WhatsApp today for instant confirmation and stress-free travel!",
      },
      {
        type: "text",
        heading: "Vehicle Fleet & Pricing Guidance",
        content:
          "Choose a vehicle that fits your budget and travel group size. Sedans (Dzire/Etios) are ideal for 1-4 passengers seeking budget transfers. SUVs (Ertiga/Innova Crysta) offer extra legroom and luggage space for families up to 7 passengers. Larger corporate or pilgrim groups can select our Tempo Travellers.",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Nashik Mumbai Cabs",
    baseMetaDesc:
      "Book reliable and affordable cab service between {origin} and {destination}. Swift Dzire, Ertiga, Innova Crysta available 24/7.",
  },

  // ─── 2. NASHIK <-> PUNE ──────────────────────────────────────────────────
  {
    id: "dyn-nashik-pune",
    baseOrigin: "Nashik",
    baseDestination: "Pune",
    distanceKm: 210,
    estimatedTime: "4.5 - 5 Hours",
    image: "/images/nashik-pune.jpg",
    baseDestinationImage: "/images/nashik-pune.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Connect between {origin} and {destination} with our dedicated outstation cab rental services. Designed for corporate commuters, college students, and family travelers, our direct service offers seamless pickup and drop across all major industrial and residential hubs.",
    fleetDescription:
      "Select from budget sedans (Dzire/Etios), comfortable MPVs (Ertiga), executive SUVs (Innova Crysta), or group Tempo Travellers.",
    contentBlocks: [
      {
        type: "text",
        heading: "{origin} to {destination} Route Information",
        content:
          "Covering 210 km via National Highway 60 (NH60), our experienced drivers ensure a smooth journey between {origin} and {destination} without public transport hassles. Sit back and relax while our skilled drivers manage highway traffic.",
      },
      {
        type: "list",
        heading: "Service Highlights for {origin} - {destination} Transfers",
        intro:
          "Our service guarantees high standards of safety and convenience:",
        items: [
          "Guaranteed on-time pickups from your doorstep or airport terminal",
          "Zero hidden fees—transparent fare structures provided before booking",
          "Highway-trained drivers skilled at navigating ghat sections and bypasses",
          "Customizable sightseeing stops along the route upon request",
        ],
        closing: "Contact our booking team anytime for tailored travel quotes.",
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab Service | Direct Intercity Taxi",
    baseMetaDesc:
      "Book comfortable cab service between {origin} and {destination}. 24/7 service, experienced drivers, and lowest rates.",
  },

  // ─── 3. MAIN HUBS <-> TRIMBAKESHWAR DARSHAN ─────────────────────────────
  {
    id: "dyn-hub-trimbakeshwar",
    baseOrigin: "Nashik",
    baseDestination: "Trimbakeshwar Darshan",
    distanceKm: 30,
    estimatedTime: "45 Minutes",
    image: "/images/nashik-trimbakeshwar.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Experience a peaceful spiritual journey between {origin} and {destination} Temple. We provide door-to-door pilgrimage cab services for families, senior citizens, and groups visiting one of the twelve sacred Jyotirlinga shrines.",
    fleetDescription:
      "Clean AC sedans, 7-seater Innova Crystas, and spacious Tempo Travellers equipped for pilgrim travel with ample luggage room.",
    contentBlocks: [
      {
        type: "text",
        heading: "Pilgrimage To {destination}",
        content:
          "Trimbakeshwar houses one of the 12 sacred Jyotirlingas of Lord Shiva, renowned for its three-faced linga embodying Brahma, Vishnu, and Mahesh. Our knowledgeable drivers assist you with optimal routes, parking locations, and timing guidance for a hassle-free darshan.",
      },
      {
        type: "list",
        heading: "Why Devotees Choose Our Pilgrimage Cabs?",
        intro:
          "We tailor our pilgrimage transfers specifically for family and senior citizen comfort:",
        items: [
          "Doorstep pick-up from any residential locality, hotel, or station in {origin}",
          "Flexible waiting times included for temple darshan and pooja rituals",
          "Sanitized, smooth-riding AC vehicles with polite and respectful drivers",
          "Option to combine your trip with nearby holy sites like Kushavarta Tirtha and Brahmagiri hills",
        ],
        closing:
          "Book your Trimbakeshwar Darshan cab today for a blessed journey!",
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab Service | Holy Jyotirlinga Package",
    baseMetaDesc:
      "Book direct pilgrimage cabs from {origin} to {destination}. Clean AC cars, polite drivers, and instant online booking.",
  },

  // ─── 4. MAIN HUBS <-> SHANI SHINGNAPUR ───────────────────────────────────
  {
    id: "dyn-hub-shani-shingnapur",
    baseOrigin: "Nashik",
    baseDestination: "Shani Shingnapur",
    distanceKm: 150,
    estimatedTime: "3.5 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/shani-shingnapur.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Plan your sacred trip between {origin} and {destination} with our affordable roundtrip and one-way cab packages. Visit the famous doorless village and Lord Shanidev shrine in comfort.",
    fleetDescription:
      "Sedans (Dzire/Etios), Ertigas, Innova Crystas, and Tempo Travellers tailored for families and pilgrim groups.",
    contentBlocks: [
      {
        type: "text",
        heading: "Sacred Journey To Shani Shingnapur From {origin}",
        content:
          "Located in Ahmednagar district, Shani Shingnapur is world-famous for its open-air temple of Lord Shanidev and the village's unique tradition of doorless homes. Our private cabs provide a peaceful highway journey from {origin} straight to the shrine premises.",
      },
      {
        type: "list",
        heading: "Service Benefits for Devotees",
        intro: "Key features of our Shani Shingnapur packages:",
        items: [
          "Doorstep pick-up and drop anywhere across {origin}",
          "Driver support for local parking and temple entrance points",
          "All-inclusive fixed fares covering fuel, toll fees, and driver allowances",
          "Customizable combination packages with Shirdi Sai Baba Temple",
        ],
        closing: "Reserve your sacred journey cab today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Pilgrimage Taxi",
    baseMetaDesc:
      "Book comfortable pilgrimage cabs between {origin} and {destination}. Fares from transparent pricing with zero surge.",
  },

  // ─── 5. MAIN HUBS <-> SHIRDI ─────────────────────────────────────────────
  {
    id: "dyn-hub-shirdi",
    baseOrigin: "Nashik",
    baseDestination: "Shirdi",
    distanceKm: 90,
    estimatedTime: "2 Hours",
    image: "/images/kopargaon-shirdi-cab.jpg",
    baseDestinationImage: "/images/to-shirdi.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Embark on a divine journey between {origin} and {destination} Sai Baba Temple. Our punctual, door-to-door pilgrimage cab transfers ensure smooth travel for devotees, senior citizens, and family groups.",
    fleetDescription:
      "Clean AC sedans, spacious Ertigas, luxury Innova Crystas, and Tempo Travellers available 24/7.",
    contentBlocks: [
      {
        type: "text",
        heading: "Shirdi Sai Baba Temple Highway Route",
        content:
          "Enjoy a smooth highway drive from {origin} directly to Shirdi temple complex hotels and shrines. Our drivers are well-versed with temple entry gates, parking spots, and Aarti schedules to make your visit effortless.",
      },
      {
        type: "list",
        heading: "Why Book Our {origin} to {destination} Cab?",
        intro: "Dedicated features for Sai Baba devotees:",
        items: [
          "Prompt doorstep pickup from any address or transit terminal in {origin}",
          "Comfortable reclining seats and clean air-conditioned interiors",
          "Flexible one-way drops and same-day or multi-day return options",
          "24/7 customer helpline for instant booking and schedule changes",
        ],
        closing:
          "Book your Sai Baba Darshan cab now for a serene travel experience!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Sai Baba Darshan",
    baseMetaDesc:
      "Book budget-friendly cab service between {origin} and {destination} Sai Baba Temple. On-time pickup and polite drivers.",
  },

  // ─── 6. MAIN HUBS <-> CHHATRAPATI SAMBHAJINAGAR / AJANTA ELLORA ──────────
  {
    id: "dyn-hub-sambhajinagar-ajanta",
    baseOrigin: "Nashik",
    baseDestination: "Chhatrapati Sambhajinagar Ajanta Ellora Caves",
    distanceKm: 180,
    estimatedTime: "3.5 Hours",
    image: "/images/nashik-aurangabad.jpg",
    baseDestinationImage: "/images/nashik-ajanta.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Explore UNESCO World Heritage sites with our outstation tour cab service connecting {origin} and {destination}. Enjoy fast, comfortable expressway transit to ancient rock-cut cave monuments and historical landmarks.",
    fleetDescription:
      "High-speed expressway ready vehicles including Dzire, Etios, Ertiga, Innova Crysta, and executive Tempo Travellers.",
    contentBlocks: [
      {
        type: "text",
        heading: "Heritage Route via Samruddhi Mahamarg",
        content:
          "Travel seamlessly between {origin} and {destination} via the Samruddhi Mahamarg expressway corridor. Our drivers handle the highway drive while you enjoy scenic landscapes and plan your heritage cave explorations.",
      },
      {
        type: "list",
        heading: "Highlights of Our Heritage Sightseeing Package",
        intro: "What makes our tour package ideal for tourists and families:",
        items: [
          "Direct door-to-door transfers to Ajanta Caves, Ellora Caves, and Bibi Ka Maqbara",
          "Expressway-certified vehicles with high safety standards and air conditioning",
          "Transparent all-inclusive rates with toll charges and driver allowances covered",
          "Flexible 1-day express tours or comprehensive 2-day weekend packages",
        ],
        closing:
          "Reserve your heritage tour cab today for an unforgettable trip!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab | Heritage Tour",
    baseMetaDesc:
      "Book fast heritage tour cabs between {origin} and {destination} via Samruddhi Mahamarg. Best rates guaranteed.",
  },

  // ─── 7. MAIN HUBS <-> BHIMASHANKAR DARSHAN ──────────────────────────────
  {
    id: "dyn-hub-bhimashankar",
    baseOrigin: "Nashik",
    baseDestination: "Bhimashankar Darshan",
    distanceKm: 210,
    estimatedTime: "4.5 Hours",
    image: "/images/nashik-bhimashankar.jpg",
    baseDestinationImage: "/images/nashik-bhimashankar.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Travel comfortably through Sahyadri ghats between {origin} and {destination} Shrine. Our specialized mountain-certified cabs and expert drivers guarantee a safe pilgrimage to the holy Jyotirlinga temple.",
    fleetDescription:
      "Well-maintained, hill-tested sedans, SUVs (Ertiga/Innova Crysta), and group Tempo Travellers with experienced ghat drivers.",
    contentBlocks: [
      {
        type: "text",
        heading: "Ghat Route & Bhimashankar Jyotirlinga Visit",
        content:
          "Located in the Ghat region of the Sahyadri hills near Pune, Bhimashankar is both a revered Jyotirlinga shrine and the source of the Bhima River. Our drivers navigate scenic mountain roads effortlessly, allowing your family to travel stress-free.",
      },
      {
        type: "list",
        heading: "Pilgrimage Package Advantages",
        intro: "Why passengers trust us for hill pilgrimage journeys:",
        items: [
          "Experienced mountain drivers skilled in negotiating ghat curves and monsoon routes",
          "Clean, regularly serviced vehicles with reliable brakes and comfortable seating",
          "Doorstep pick-up from any location in {origin} with flexible departure schedules",
          "Customizable packages including stopovers at nearby scenic and religious spots",
        ],
        closing: "Book your Bhimashankar pilgrimage cab today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab | Jyotirlinga Special",
    baseMetaDesc:
      "Book expert hill drivers for {origin} to {destination} trips. Safe AC cabs and transparent fares.",
  },

  // ─── 8. MAIN HUBS <-> KOPARGAON ──────────────────────────────────────────
  {
    id: "dyn-hub-kopargaon",
    baseOrigin: "Nashik",
    baseDestination: "Kopargaon",
    distanceKm: 85,
    estimatedTime: "1.5 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/kopargaon-railway.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Enjoy quick, dependable railway station and city transfers connecting {origin} and {destination}. We provide 24/7 pick-up for train passengers, business travelers, and local commuters.",
    fleetDescription:
      "Fuel-efficient Sedans (Dzire/Etios) and spacious MPVs (Ertiga) for fast station transfers.",
    contentBlocks: [
      {
        type: "text",
        heading: "Railway Station Pickup & City Transfer",
        content:
          "Kopargaon Railway Station is a key rail transit hub in Ahmednagar district. Our direct door-to-door cab pickups ensure you never have to wait for local autos or deal with luggage hassle after a long train journey.",
      },
      {
        type: "list",
        heading: "Transfer Highlights",
        intro: "Guaranteed travel convenience:",
        items: [
          "24/7 pickup synchronized with train arrival and departure times",
          "Affordable fixed fares with zero hidden night surges",
          "Clean AC cars with courteous drivers ready to assist with luggage",
        ],
        closing: "Book your Kopargaon station cab in advance!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Station Transfer",
    baseMetaDesc:
      "Quick railway station and city transfers between {origin} and {destination}. Book 24/7 at low rates.",
  },

  // ─── 9. MAIN HUBS <-> MANMAD ─────────────────────────────────────────────
  {
    id: "dyn-hub-manmad",
    baseOrigin: "Nashik",
    baseDestination: "Manmad",
    distanceKm: 90,
    estimatedTime: "2 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-manmad.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Book affordable outstation cab services connecting {origin} and {destination} Railway Junction. Enjoy reliable door-to-door pick-up for comfortable onward travel across Maharashtra.",
    fleetDescription:
      "Sedans, Ertigas, Innovas, and Tempo Travellers for individual or group station drops.",
    contentBlocks: [
      {
        type: "text",
        heading: "Manmad Junction Route Details",
        content:
          "Manmad Junction is one of the busiest railway hubs under the Bhusawal division. Our private cab service connects {origin} directly with Manmad station, ensuring on-time arrivals for important train connections.",
      },
      {
        type: "list",
        heading: "Service Benefits",
        intro: "Why choose our station transfer cabs:",
        items: [
          "On-time pick-up guaranteed to ensure you never miss a train",
          "Clean vehicles with dedicated luggage space",
          "Transparent, fixed rates with toll and allowance details included",
        ],
        closing: "Call us now for instant Manmad cab bookings!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Railway Transfer",
    baseMetaDesc:
      "Book station transfer cabs between {origin} and {destination}. On-time pickup and transparent rates.",
  },

  // ─── 10. MAIN HUBS <-> AHMEDNAGAR ────────────────────────────────────────
  {
    id: "dyn-hub-ahmednagar",
    baseOrigin: "Nashik",
    baseDestination: "Ahmednagar",
    distanceKm: 150,
    estimatedTime: "3 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-ahmednagar.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Budget-friendly intercity car rentals connecting {origin} and {destination}. Whether traveling for commercial work, official visits, or family trips, our 24/7 cab service guarantees smooth highway transit.",
    fleetDescription:
      "Clean AC sedans and MPVs tailored for business and family journeys.",
    contentBlocks: [
      {
        type: "text",
        heading: "Intercity Route Details",
        content:
          "Covering 150 kilometers, the road trip between {origin} and {destination} is a major commercial corridor. Our drivers ensure smooth driving, clean rest stops, and punctual drops to any city address.",
      },
      {
        type: "list",
        heading: "Why Travel With Us?",
        intro: "Key features of our intercity cab service:",
        items: [
          "Fixed pricing with clear fare estimates before booking",
          "Well-maintained AC cars sanitized before every journey",
          "Experienced drivers who know city bypasses and short routes",
        ],
        closing: "Book your Ahmednagar cab service today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Intercity Taxi",
    baseMetaDesc:
      "Reliable intercity cab service between {origin} and {destination}. Book online at low rates.",
  },

  // ─── 11. MAIN HUBS <-> VERUL (ELLORA) ────────────────────────────────────
  {
    id: "dyn-hub-verul",
    baseOrigin: "Nashik",
    baseDestination: "Verul Ellora",
    distanceKm: 170,
    estimatedTime: "3.5 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-verul.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Dedicated heritage tour cab rentals between {origin} and {destination} Caves. Visit the magnificent Kailasa Temple and rock-cut cave architecture in absolute comfort.",
    fleetDescription:
      "Comfortable touring sedans, 7-seater MPVs, and group Tempo Travellers.",
    contentBlocks: [
      {
        type: "text",
        heading: "Verul Kailasa Temple & Ellora Sightseeing",
        content:
          "Verul (Ellora) is world-famous for its monolithic rock-cut cave temples, culminating in the awe-inspiring Cave 16 (Kailasa Temple). Our sightseeing cab packages from {origin} give you complete freedom to explore at your own pace.",
      },
      {
        type: "list",
        heading: "Heritage Package Highlights",
        intro: "Special inclusions for tourists:",
        items: [
          "Doorstep pick-up from any address or hotel in {origin}",
          "Flexible waiting time included for cave exploration and photography",
          "Polite drivers who know local tourist routes and food plazas",
        ],
        closing: "Book your Verul Ellora heritage cab package today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab | Ellora Caves Tour",
    baseMetaDesc:
      "Book sightseeing cabs to {destination} from {origin}. Clean AC cars and fixed rates.",
  },

  // ─── 12. MAIN HUBS <-> AJANTA ELLORA COMBINED ────────────────────────────
  {
    id: "dyn-hub-ajanta-ellora",
    baseOrigin: "Nashik",
    baseDestination: "Ajanta Ellora",
    distanceKm: 200,
    estimatedTime: "4 Hours",
    image: "/images/nashik-ajanta.jpg",
    baseDestinationImage: "/images/ajanta-nashik.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Complete 2-day heritage cave tour packages connecting {origin} and {destination}. Explore ancient Buddhist paintings and monolithic cave temples with our private, air-conditioned cabs.",
    fleetDescription:
      "Spacious SUVs (Ertiga/Innova Crysta) and Tempo Travellers for tourist groups.",
    contentBlocks: [
      {
        type: "text",
        heading: "Complete Ajanta & Ellora Heritage Circuit",
        content:
          "Combine both UNESCO World Heritage sites in a single seamless trip. Our private cabs handle all local transfers between Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, and your hotel in Chhatrapati Sambhajinagar.",
      },
      {
        type: "list",
        heading: "Tour Features",
        intro: "Why tourists choose our combined package:",
        items: [
          "Customizable multi-day itinerary starting directly from {origin}",
          "Comfortable AC vehicles with extra legroom for long sightseeing days",
          "Driver lodging and allowances fully transparent and included",
        ],
        closing: "Plan your weekend heritage tour with us now!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Package | Heritage Circuit",
    baseMetaDesc:
      "Combined Ajanta Ellora cave tour packages from {origin}. Book online for best rates.",
  },

  // ─── 13. MAIN HUBS <-> CITY LOCAL TOUR ───────────────────────────────────
  {
    id: "dyn-hub-city-local",
    baseOrigin: "Nashik",
    baseDestination: "City Local Sightseeing",
    distanceKm: 80,
    estimatedTime: "8 Hours / 80 Km",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-city.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Full-day local city rental cabs for sightseeing, temple visits, shopping, and business meetings in {origin}. Enjoy flexible hourly packages with a dedicated private car and driver.",
    fleetDescription:
      "Hourly package cabs: Dzire, Etios, Ertiga, Innova Crysta.",
    contentBlocks: [
      {
        type: "text",
        heading: "Full Day Local City Package in {origin}",
        content:
          "Explore major attractions, sacred ghats, shopping markets, or business parks in {origin} without booking multiple rides. Our hourly packages give you a private car at your disposal all day.",
      },
      {
        type: "list",
        heading: "Local Package Features",
        intro: "Convenient local rental benefits:",
        items: [
          "Standard packages of 8 Hours / 80 Km with flexible extra hour/km add-ons",
          "Doorstep pick-up and drop anywhere within city limits",
          "Polite local drivers familiar with all city shortcuts and parking zones",
        ],
        closing: "Book your local city cab rental today!",
      },
    ],
    baseMetaTitle: "Local Cab Rental in {origin} | Hourly Packages",
    baseMetaDesc:
      "Book local hourly sightseeing cabs in {origin}. Clean AC cars and polite drivers.",
  },

  // ─── 14. MAIN HUBS <-> LONAVALA ──────────────────────────────────────────
  {
    id: "dyn-hub-lonavala",
    baseOrigin: "Mumbai",
    baseDestination: "Lonavala Khandala",
    distanceKm: 85,
    estimatedTime: "2 Hours",
    image: "/images/nashik-mumbai.jpg",
    baseDestinationImage: "/images/nashik-lonavala.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Escape to the Western Ghats with our scenic hill station getaway cabs connecting {origin} and {destination}. Ideal for weekend family vacations, resort stays, and nature sightseeing.",
    fleetDescription:
      "Comfortable sedans, spacious MPVs (Ertiga), and executive SUVs.",
    contentBlocks: [
      {
        type: "text",
        heading: "Hill Station Getaway To Lonavala & Khandala",
        content:
          "Famous for lush green valleys, Tiger Point, Bhushi Dam, and chikki markets, Lonavala is the perfect mountain escape from {origin}. Enjoy smooth expressway and ghat driving handled by expert highway drivers.",
      },
      {
        type: "list",
        heading: "Weekend Getaway Highlights",
        intro: "What you get with our Lonavala cab package:",
        items: [
          "Direct resort pick-up and drop options",
          "Customizable sightseeing stopovers at lakes, forts, and viewpoints",
          "All-inclusive fixed fares with no unexpected surge prices",
        ],
        closing: "Book your hill station trip today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Hill Station Taxi",
    baseMetaDesc:
      "Book hill station weekend cabs between {origin} and {destination}. Instant online rates.",
  },

  // ─── 15. MAIN HUBS <-> MAHABALESHWAR ─────────────────────────────────────
  {
    id: "dyn-hub-mahabaleshwar",
    baseOrigin: "Pune",
    baseDestination: "Mahabaleshwar",
    distanceKm: 120,
    estimatedTime: "3 Hours",
    image: "/images/nashik-pune.jpg",
    baseDestinationImage: "/images/nashik-mahabaleshwar.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Strawberry farm and hill station tour packages connecting {origin} and {destination}. Enjoy scenic mountain drives through Pasrani Ghat with our safe outstation cabs.",
    fleetDescription:
      "Clean AC sedans, Ertigas, Innova Crystas, and Tempo Travellers with mountain drivers.",
    contentBlocks: [
      {
        type: "text",
        heading: "Hill Station Tour To Mahabaleshwar & Panchgani",
        content:
          "Visit Venna Lake, Arthur's Seat, Mapro Garden strawberry farms, and Table Land with our private cabs from {origin}. We offer flexible 2-day or multi-day holiday packages tailored to your schedule.",
      },
      {
        type: "list",
        heading: "Holiday Package Inclusions",
        intro: "Key features for vacationers:",
        items: [
          "Doorstep pickup in {origin} and direct hotel drop in Mahabaleshwar",
          "Hill-experienced drivers familiar with Pasrani Ghat and local points",
          "Customizable sightseeing itineraries for families and groups",
        ],
        closing: "Plan your Mahabaleshwar holiday with us today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Holiday Package",
    baseMetaDesc:
      "Book holiday tour cabs between {origin} and {destination}. Scenic mountain drivers.",
  },

  // ─── 16. MAIN HUBS <-> GOA ───────────────────────────────────────────────
  {
    id: "dyn-hub-goa",
    baseOrigin: "Pune",
    baseDestination: "Goa",
    distanceKm: 450,
    estimatedTime: "9 Hours",
    image: "/images/nashik-pune.jpg",
    baseDestinationImage: "/images/nashik-goa.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Experience the ultimate coastal road trip connecting {origin} and {destination}. Our long-distance outstation cab service guarantees a smooth, safe, and scenic journey straight to North or South Goa beaches.",
    fleetDescription:
      "Spacious Ertigas, Innova Crystas, and 17-seater Tempo Travellers designed for long highway trips.",
    contentBlocks: [
      {
        type: "text",
        heading: "Long-Distance Coastal Road Trip",
        content:
          "Travel in luxury across state lines without train waiting lists or crowded flight connections. Our long-distance highway drivers ensure safe overnight or daytime travel straight to your beach resort in Goa.",
      },
      {
        type: "list",
        heading: "Outstation Trip Highlights",
        intro: "Why travel long-distance with us:",
        items: [
          "Commercial All-India tourist permit vehicles with all tax paperwork handled",
          "Spacious legroom and ample luggage capacity for group holidays",
          "Clean highway meal stops at verified restaurants along the route",
        ],
        closing: "Book your Goa road trip package now!",
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab Service | Outstation Road Trip",
    baseMetaDesc:
      "Long distance outstation cabs between {origin} and {destination}. All-India permit vehicles.",
  },

  // ─── 17. MAIN HUBS <-> KONKAN ────────────────────────────────────────────
  {
    id: "dyn-hub-konkan",
    baseOrigin: "Mumbai",
    baseDestination: "Konkan Beach Tour",
    distanceKm: 320,
    estimatedTime: "7 Hours",
    image: "/images/nashik-mumbai.jpg",
    baseDestinationImage: "/images/nashik-konkan.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Beach holiday tour packages connecting {origin} with Ganpatipule, Ratnagiri, Malvan, and Tarkarli along the breathtaking Konkan coastline.",
    fleetDescription: "Comfortable long-distance touring sedans and SUVs.",
    contentBlocks: [
      {
        type: "text",
        heading: "Coastal Konkan Beach Vacation",
        content:
          "Discover pristine beaches, coastal forts, and authentic Malvani cuisine with private cab tours starting from {origin}. Enjoy flexible travel schedules through coastal highways.",
      },
      {
        type: "list",
        heading: "Konkan Package Highlights",
        intro: "Inclusions for family beach holidays:",
        items: [
          "Customizable itineraries covering Ganpatipule temple, Alibaug, and Tarkarli water sports",
          "Spacious AC vehicles equipped for long coastal drives",
          "Experienced drivers who know coastal routes and ferry points",
        ],
        closing: "Book your Konkan beach escape today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Package | Coastal Vacation",
    baseMetaDesc:
      "Coastal beach tour cabs connecting {origin} and {destination}. Instant booking.",
  },

  // ─── 18. MAIN HUBS <-> NAGPUR ────────────────────────────────────────────
  {
    id: "dyn-hub-nagpur",
    baseOrigin: "Nashik",
    baseDestination: "Nagpur",
    distanceKm: 530,
    estimatedTime: "7 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-nagpur.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Superfast expressway transfers connecting {origin} and {destination} via the Samruddhi Mahamarg. Experience smooth, high-speed travel across Maharashtra in private AC cabs.",
    fleetDescription:
      "Expressway-certified sedans (Dzire/Etios) and executive SUVs (Innova Crysta).",
    contentBlocks: [
      {
        type: "text",
        heading: "Samruddhi Mahamarg Express Corridor",
        content:
          "Travel seamlessly between {origin} and the Vidarbha region. Thanks to the Samruddhi Mahamarg expressway, long-distance road travel is now fast, safe, and remarkably smooth.",
      },
      {
        type: "list",
        heading: "Expressway Service Advantages",
        intro: "Why choose our express highway cabs:",
        items: [
          "Expressway-tested vehicles maintained for high-speed cruising",
          "Professional drivers trained for long expressway corridors",
          "Fixed all-inclusive pricing covering expressway tolls",
        ],
        closing: "Book your fast Samruddhi Mahamarg cab now!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Express Corridor",
    baseMetaDesc:
      "Book fast Samruddhi Mahamarg cabs between {origin} and {destination}. Best rates.",
  },

  // ─── 19. MAIN HUBS <-> INDORE ────────────────────────────────────────────
  {
    id: "dyn-hub-indore",
    baseOrigin: "Nashik",
    baseDestination: "Indore",
    distanceKm: 410,
    estimatedTime: "8 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-indore.webp",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Inter-state outstation cab services connecting Maharashtra ({origin}) with Madhya Pradesh ({destination}). Perfect for business drops, family trips, and pilgrimage extensions to Mahakaleshwar Ujjain.",
    fleetDescription:
      "All-India tourist permit cabs with expert inter-state highway drivers.",
    contentBlocks: [
      {
        type: "text",
        heading: "Inter-State Highway Journey To Indore & Ujjain",
        content:
          "Connect between {origin} and Indore via NH52. We offer direct door-to-door cab services with all border taxes, toll permits, and driver allowances pre-calculated for transparent billing.",
      },
      {
        type: "list",
        heading: "Inter-State Service Highlights",
        intro: "Key benefits of our long-distance transfers:",
        items: [
          "Commercial All-India tourist permit vehicles for smooth border crossing",
          "Punctual doorstep pickup and direct hotel drops",
          "Optional temple tour add-ons for Mahakaleshwar Jyotirlinga in Ujjain",
        ],
        closing: "Book your inter-state cab package today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Inter-State Taxi",
    baseMetaDesc:
      "Inter-state outstation cabs between {origin} and {destination}. All-India permit vehicles.",
  },

  // ─── 20. MAIN HUBS <-> JALNA ─────────────────────────────────────────────
  {
    id: "dyn-hub-jalna",
    baseOrigin: "Nashik",
    baseDestination: "Jalna",
    distanceKm: 240,
    estimatedTime: "4 Hours",
    image: "/images/nashik-jalna.webp",
    baseDestinationImage: "/images/jalna.webp",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    introTemplate:
      "Direct Samruddhi Mahamarg expressway transfers connecting {origin} and {destination}. Reliable intercity cabs for commercial trips, steel hub visits, and family travel.",
    fleetDescription: "Clean AC sedans, Ertigas, and Innova Crystas.",
    contentBlocks: [
      {
        type: "text",
        heading: "Expressway Transit To Jalna",
        content:
          "Travel quickly between {origin} and Jalna via the direct Samruddhi Mahamarg expressway corridor. Our service provides door-to-door pickups with fixed, transparent pricing.",
      },
      {
        type: "list",
        heading: "Service Highlights",
        intro: "Guaranteed comfort and speed:",
        items: [
          "Fast expressway routing with minimal travel time",
          "Clean vehicles equipped with air conditioning and luggage space",
          "24/7 customer support for early morning or late night pickups",
        ],
        closing: "Book your Jalna cab service today!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Express Route",
    baseMetaDesc:
      "Expressway cab transfers between {origin} and {destination}. Instant booking.",
  },

  // ─── 21. MAIN HUBS <-> IGATPURI ──────────────────────────────────────────
  {
    id: "dyn-hub-igatpuri",
    baseOrigin: "Mumbai",
    baseDestination: "Igatpuri Hill Station",
    distanceKm: 120,
    estimatedTime: "2.5 Hours",
    image: "/images/nashik-mumbai.jpg",
    baseDestinationImage: "/images/nashik-igatpuri.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Monsoon getaway and resort pickup/drop cabs connecting {origin} and {destination}. Escape to the serene Western Ghats and Vipassana center with our comfortable private cabs.",
    fleetDescription: "Hill-certified AC sedans, SUVs, and Tempo Travellers.",
    contentBlocks: [
      {
        type: "text",
        heading: "Kasara Ghat Road Trip To Igatpuri",
        content:
          "Located along the Kasara Ghats, Igatpuri is famous for Dhammagiri Vipassana Academy, waterfalls, and luxury nature resorts. Enjoy a scenic hill drive handled by experienced drivers.",
      },
      {
        type: "list",
        heading: "Hill Getaway Advantages",
        intro: "Why travellers book our Igatpuri cabs:",
        items: [
          "Direct transfers to all top Igatpuri resorts and wellness retreats",
          "Ghat-experienced drivers skilled in rainy and foggy conditions",
          "All-inclusive fixed fares with no hidden mountain surcharges",
        ],
        closing: "Plan your Igatpuri hill retreat with us!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Resort Drops",
    baseMetaDesc:
      "Book resort drops and weekend cabs between {origin} and {destination}. Low fares.",
  },

  // ─── 22. MAIN HUBS <-> THANE ─────────────────────────────────────────────
  {
    id: "dyn-hub-thane",
    baseOrigin: "Nashik",
    baseDestination: "Thane",
    distanceKm: 140,
    estimatedTime: "3 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-thane.jpg",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    introTemplate:
      "Direct door-to-door expressway transfers connecting {origin} with Thane Metropolitan Region. Enjoy comfortable cab drops to Ghodbunder Road, Majiwada, Thane Station, and Eastern Express Highway.",
    fleetDescription:
      "Comfortable sedans (Dzire/Etios) and spacious MPVs (Ertiga/Innova Crysta).",
    contentBlocks: [
      {
        type: "text",
        heading: "MMR Expressway Connection",
        content:
          "Thane serves as the gateway to the Mumbai Metropolitan Region. Our private cab service connects {origin} directly with all major Thane residential and corporate hubs without public transit transfers.",
      },
      {
        type: "list",
        heading: "Service Benefits",
        intro: "Key features of our Thane transfers:",
        items: [
          "Doorstep pick-up and drop across all Thane localities",
          "Clean AC vehicles with toll fees included",
          "Drivers familiar with suburban Mumbai traffic and bypasses",
        ],
        closing: "Book your Thane expressway cab now!",
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Service | Expressway Taxi",
    baseMetaDesc:
      "Direct expressway cabs connecting {origin} and {destination}. On-time door pickups.",
  },
];

// static city packages
export const originalStaticTours = [
  // ─── TOUR 01 ───────────────────────────────────────────────────────────────
  {
    id: "tour-01",
    title: "Shani Shingnapur Car Rental Packages",
    slug: "shani-shingnapur-car-rental",
    image: "/images/shani-shingnapur.jpg",
    tagline: "Shani Shingnapur Cab Services",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Shani Shingnapur",
    intro:
      "At Nashik Mumbai Pune Shirdi Airport Cab, we offer budget-friendly Cab rentals for your journey to Shani Shingnapur. Whether you're planning a roundtrip or a one-way ride, we provide the most reliable and affordable Cab services for this sacred journey.",
    fleetDescription:
      "Our fleet includes a variety of cars like Swift Dzire, Tempo Traveller, and Innova, ensuring that you find the perfect vehicle to suit your needs. With our easy online booking system, friendly drivers, and well-maintained cabs, we guarantee a smooth and hassle-free experience as you travel to Shani Shingnapur.",
    contentBlocks: [
      {
        type: "text",
        heading: "About Shani Shingnapur",
        content:
          "Shani Shingnapur, located in the Ahmednagar District of Maharashtra, is about 70 kilometers from Nashik. Known for its temple dedicated to Lord Shaneshwara, the town draws thousands of devotees daily, especially on Saturdays, which is considered an auspicious day to seek the Lord's blessings. The unique aspect of this temple is that it has no traditional structure; the deity is enshrined on an open platform, showcasing the awe-inspiring black stone idol of Lord Shanidev, the embodiment of the planet Saturn.",
      },
      {
        type: "callout",
        heading: "Distance and Fare",
        content:
          "The roundtrip distance to Shani Shingnapur is approximately 150 km. Our Cab services provide the most convenient travel option for this route. Cab fares range between ₹1300 and ₹2500, depending on your vehicle choice and any shared ride arrangements. For larger groups, we offer Tempo Traveller services on a per-seat basis.",
      },
      {
        type: "list",
        heading: "Why Choose Us?",
        intro:
          "At Nashik Mumbai Pune Shirdi Airport Cab, we prioritize your safety, comfort, and satisfaction. Our services include:",
        items: [
          "Safe, punctual, and dependable rides",
          "Competitive pricing",
          "Clean and well-maintained vehicles",
          "Friendly and courteous drivers",
          "Stress-free travel with customizable packages",
        ],
        closing:
          "We are available 24/7, offering round-the-clock support to ensure that your journey is seamless and enjoyable. Whether you're a solo traveler or with family, book with us for a memorable trip.",
      },
      {
        type: "text",
        heading: "A Divine Experience",
        content:
          "Shani Shingnapur is a unique destination, not just for its spiritual significance but also for its unconventional architecture. The village is renowned for the absence of doors and locks, symbolizing a place of ultimate faith and safety. Every day, around 30,000 devotees visit the temple, with numbers soaring to over 300,000 on Saturdays and Shani Trayodashi.",
      },
      {
        type: "list",
        heading: "Places to Visit Near Shani Shingnapur",
        intro:
          "While visiting Shani Shingnapur, you can also plan a family outing to these nearby attractions:",
        items: [
          "Mula Dam (located along the Shani Shingnapur road)",
          "Temple of Goddess Laxmi",
          "Sant Shri Udasi Baba's Samadhi",
          "Temple of Shri Dattatraya",
        ],
        closing:
          "For a comfortable and smooth journey to Shani Shingnapur, book your Cab with Nashik Mumbai Pune Shirdi Airport Cab today!",
      },
    ],
    longDistance: {
      heading: "",
      content: "",
      closing: "Call us today for easy bookings and stress-free travel!",
    },
    meta: {
      title: "Shani Shingnapur Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Book affordable Cab to Shani Shingnapur. Swift Dzire, Innova, Tempo Traveller available. Fares from ₹1300. 24/7 service.",
    },
  },

  // ─── TOUR 02 ───────────────────────────────────────────────────────────────
  {
    id: "tour-02",
    title: "Trimbakeshwar Darshan",
    slug: "trimbakeshwar-darshan-cab",
    image: "/images/nashik-trimbakeshwar.jpg",
    tagline: "Trimbakeshwar Cab Services",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    intro: "",
    popularCity: true,
    popularCityTitle: "Trimbakeshwar",
    fleetDescription: "",
    longDistance: {
      heading: "",
      content: [
        "Trimbakeshwar is a religious center having one of the twelve Jyotirlingas. The extraordinary feature of the Jyotirlinga located here is its three faces embodying Lord Brahma, Lord Vishnu, and Lord Rudra. Due to the excessive use of water, the linga has started to erode. It is said that this erosion symbolizes the eroding nature of human society. The Lingas are covered by a jeweled crown which is placed over the Gold Mask of Tridev (Brahma Vishnu Mahesh).",
        "Planning a quick trip to Trimbakeshwar? Have you thought about how you’re going to commute with your entire family in a convenient and comfortable way? We can help. How? With the best of car rental services to Trimbakeshwar.",
        "We provide Trimbakeshwar Cab services at awesome offers. Hire a cab to Trimbakeshwar from us with best car services. Experience our online Cab booking services to Trimbakeshwar with reliable and polite drivers. Nashik Mumbai Pune Shirdi Airport Cabs, the leading car rental services in Nashik has all the variety fleet of cars like Swift Dzire, Tempo Traveller, Innova to get for a Trimbakeshwar tour package at affordable fare.",
      ],
      closing: "Call us to book your Trimbakeshwar Darshan cab today!",
    },
    meta: {
      title: "Trimbakeshwar Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Book comfortable Cab to Trimbakeshwar Jyotirlinga. Fares from ₹2000. AC cabs, experienced drivers.",
    },
  },

  // ─── TOUR 03 ───────────────────────────────────────────────────────────────
  {
    id: "tour-03",
    title: "Kopargaon Cab Service",
    slug: "kopargaon-cab",
    image: "/images/kopargaon-shirdi-cab.jpg",
    tagline: "Kopargaon to Nashik Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Need Onward Travel from Nashik?",
      content: [
        "Planning a quick trip from Kopargaon to Nashik? Wondering how to ensure a comfortable and convenient journey for your entire family? We’ve got you covered with top-notch car rental services! The distance from Kopargaon Railway Station to the Nashik Sai Baba Temple is approximately 18 kilometers, taking about 26 to 30 minutes by Cab. Renting a cab from Kopargaon to Nashik ensures a smooth, fast, and comfortable ride. Our cars are well-maintained and easy to drive, with professional drivers who are familiar with the route and ensure a pleasant travel experience.",
        "Kopargaon Railway Station, located in Ahmednagar district, Maharashtra, serves the town of Kopargaon and operates under the Solapur railway division of the Central Railway Zone. Sitting at an elevation of 508 meters, the station has two platforms and is part of an electrified single broad gauge line. With 74 trains stopping here, it’s a busy hub. We offer affordable and reliable Cab services from Kopargaon to Nashik, ensuring a stress-free journey.",
        "Hire a cab from Kopargaon to Nashik with us, enjoying the best car services in the region. Our online booking platform provides access to a variety of vehicles such as Swift Dzire, Tempo Travellers, and Innovas, all at competitive rates. Nashik Mumbai Pune Shirdi Airport Cabs is dedicated to delivering high-quality service, both to our customers and our hardworking drivers, who strive to ensure a pleasant experience for every passenger.",
        "Depending on your travel needs and group size, we offer a range of vehicle options to choose from. Whether you need a one-way trip from Kopargaon to Nashik or a round trip back, our exceptional Cab services ensure a reliable and enjoyable journey.",
        "Nashik Mumbai Pune Shirdi Airport Cabs, based in Nashik, Maharashtra, also offers online booking for Cabs to Kopargaon. Check out our Kopargaon to Nashik Cab fares, and let us make your travel easy and hassle-free.",
      ],
      closing: "Call us now for instant cab booking!",
    },
    meta: {
      title: "Kopargaon to Nashik Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Quick cab from Kopargaon Railway Station to Nashik Sai Baba Temple. Fares from ₹300. 24/7 service.",
    },
  },

  // ─── TOUR 04 ───────────────────────────────────────────────────────────────
  {
    id: "tour-04",
    title: "Manmad Cab Service",
    slug: "manmad-cab-service",
    image: "/images/nashik-manmad.jpg",
    tagline: "Manmad Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Long Distance Travel?",
      content: [
        "Planning a quick trip to Manmad? Wondering how to ensure a comfortable and convenient journey for your entire family? We’ve got you covered with top-notch car rental services! The distance to Manmad is approximately 90 kilometers, taking about 2 hours by Cab. Renting a cab to Manmad ensures a smooth, fast, and comfortable ride. Our cars are well-maintained and easy to drive, with professional drivers who are familiar with the route and ensure a pleasant travel experience.",
        "Manmad Railway Station, located in the Nashik district of Maharashtra, is a crucial railway junction operating under the Bhusawal railway division of the Central Railway Zone. Serving as a major transit hub connecting various parts of the country, it handles a massive volume of daily passengers. We offer affordable and reliable Cab services to Manmad, ensuring a stress-free journey.",
        "Hire a cab to Manmad with us, enjoying the best car services in the region. Our online booking platform provides access to a variety of vehicles such as Swift Dzire, Tempo Travellers, and Innovas, all at competitive rates. Nashik Mumbai Pune Shirdi Airport Cab is dedicated to delivering high-quality service, both to our customers and our hardworking drivers, who strive to ensure a pleasant experience for every passenger.",
        "Depending on your travel needs and group size, we offer a range of vehicle options to choose from. Whether you need a one-way trip to Manmad or a round trip back, our exceptional Cab services ensure a reliable and enjoyable journey.",
        "Nashik Mumbai Pune Shirdi Airport Cabs offers seamless online booking for Cabs to Manmad and back. Check out our Manmad Cab fares, and let us make your travel easy and hassle-free.",
      ],
      closing: "Call us for bookings!",
    },
    meta: {
      title: "Manmad Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description: "Affordable cab to Manmad. Fares from ₹1800. 24/7 pickup.",
    },
  },

  // ─── TOUR 05 ───────────────────────────────────────────────────────────────
  {
    id: "tour-05",
    title: "Bhimashankar Darshan",
    slug: "bhimashankar-darshan-cab",
    image: "/images/nashik-bhimashankar.jpg",
    tagline: "Bhimashankar Jyotirlinga Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Bhimashankar",
    longDistance: {
      heading: "Combine with Pune Trip",
      content: [
        "We provide Bhimashankar Cab services at awesome offers. Hire a cab to Bhimashankar from us with the best car services. Experience our online cab booking services to Bhimashankar with reliable and polite drivers. Nashik Mumbai Pune Shirdi Airport Cabs, the leading car rental services in Nashik has all the variety fleet of cars like Swift Dzire, Tempo Traveller, Innova to hire for a Cab to Bhimashankar at affordable rates.",
        "Bhimashankar Temple is a Jyotirlinga shrine located 50 km northwest of Khed, near Pune, in India. It is located 127 km from Shivaji Nagar (Pune) in the Ghat region of the Sahyadri hills. Bhimashankar is also the source of the river Bhima, which flows southeast and merges with the Krishna river near Raichur. The other Jyotirlinga shrines in Maharashtra are Vaidyanath near Parli Dist Beed, Trimbakeshwara near Nashik, Grishneshwar near Aurangabad and Aundha Nagnath Temple in Hingoli, Nagnaath in Aundh built by Pandav brothers in one night during their exile.",
      ],
      closing: "Ask us about combo packages!",
    },
    meta: {
      title: "Bhimashankar Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Cab to Bhimashankar Jyotirlinga. Expert hill drivers. Fares from ₹3500.",
    },
  },

  // ─── TOUR 06 ───────────────────────────────────────────────────────────────
  {
    id: "tour-06",
    title: "Ahmednagar Cab Service",
    slug: "ahmednagar-cab-service",
    image: "/images/nashik-ahmednagar.jpg",
    tagline: "Ahmednagar Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "More Destinations from Ahmednagar",
      content: [
        "Nashik Mumbai Pune Shirdi Airport Cabs provides Budget Cabs & Cab on Rent to Ahmednagar with roundtrip journeys.",
        "We provide Ahmednagar Cab services with the lowest fare. Hire a cab to Ahmednagar from us with the best local car services. Experience our online cab booking services to Ahmednagar with reliable and polite drivers. Nashik Mumbai Pune Shirdi Airport Cabs, the leading car rental travel services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Ahmednagar at affordable rates. Located in Maharashtra, the Ahmednagar District is at a distance of approximately 120 km from Nashik.",
      ],
      closing: "Call us for all your travel needs!",
    },
    meta: {
      title: "Ahmednagar Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description: "Reliable cab to Ahmednagar. Fares from ₹1200. Book now.",
    },
  },

  // ─── TOUR 07 ───────────────────────────────────────────────────────────────
  {
    id: "tour-07",
    title: "Chhatrapati Sambhajinagar Ajanta Ellora Caves",
    slug: "chhatrapati-sambhajinagar-ajanta-ellora-cab",
    image: "/images/nashik-aurangabad.jpg",
    tagline: "Chhatrapati Sambhajinagar Ajanta Ellora Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Perfect for a 2-Day Tour",
      content: [
        "The Ajanta Caves in the Chhatrapati Sambhajinagar (Aurangabad) district of Maharashtra state of India are about 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 or 650 CE. The caves include paintings and sculptures described by the government Archaeological Survey of India as “the finest surviving examples of Indian art, particularly painting”, which are masterpieces of Buddhist religious art, with figures of the Buddha and depictions of the Jataka tales.",
        "A few of the world heritage sites in Maharashtra are located at Chhatrapati Sambhajinagar (Aurangabad), including Ajanta-Ellora and Bibi ka Maqbara. It is just a 4-5 hour journey. If your weekend tour is planned on a Saturday, we recommend an excellent extended tour to Ajanta-Ellora. How to travel? Booking a full day car for a quick, convenient, comfortable, and affordable Ajanta-Ellora Caves tour is the best option you can choose over bus and train.",
        "Nashik Mumbai Pune Shirdi Airport Cabs provides Cab services for local and outstation destinations. Book budget Cabs or hire Cab rental services at a very affordable rate from the most trusted leading car rental service provider in the region at a very economical fare. We offer one of the most affordable and comfortable cab services in the city, with multiple tour packages available as per your budget so you can plan your ride accordingly.",
        "Our drivers appreciate and enjoy the journey with each of our customers, keeping a primary responsibility for a safer journey & scheduled arrival at nearby places, or pickup/drop-off services to nearby airports, railway stations, or tourist places with transparent prices.",
      ],
      closing: "Ask about our 2-day package deals!",
    },
    meta: {
      title:
        "Chhatrapati Sambhajinagar Ajanta Ellora Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Cab to Ajanta Ellora Caves Aurangabad. Heritage day tour. Fares from ₹2500.",
    },
  },

  // ─── TOUR 08 ───────────────────────────────────────────────────────────────
  {
    id: "tour-08",
    title: "Verul Car Rental / Cab Service",
    slug: "verul-car-rental-cab",
    image: "/images/nashik-verul.jpg",
    tagline: "Verul Car Rental",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Verul",
    longDistance: {
      heading: "Why Choose Nashik Mumbai Pune Shirdi Airport Cab?",
      content: [
        "We provide Verul Cab services at awesome offers. Hire a cab to Verul from us with the best local car services. Experience our online cab booking services to Verul with reliable and polite drivers. Nashik Mumbai Pune Shirdi Airport Cabs, the leading car rental services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Verul at affordable rates.",
        "Nashik Mumbai Pune Shirdi Airport Cabs is the premier provider of outstation & local car rental offerings, featuring specialized Verul car rentals. We offer highly customized & transparent service at a lower rate in comparison with traditional tour operators. We leverage modern booking systems to ensure you get the absolute best value-to-cost equation.",
        "Offering premium touring options, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
      ],
      closing: "Call us now for instant cab booking!",
    },
    meta: {
      title: "Verul Ellora Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description: "Cab to Verul Ellora Caves. Day trip fares from ₹2500.",
    },
  },

  // ─── TOUR 09 ───────────────────────────────────────────────────────────────
  {
    id: "tour-09",
    title: "Ajanta Ellora Cab Service",
    slug: "ajanta-ellora-cab-service",
    image: "/images/nashik-ajanta.jpg",
    tagline: "Ajanta & Ellora Combined Tour",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Perfect Weekend Getaway",
      content: [
        "We provide Ajanta Ellora Car Rental services at awesome offers. Hire a cab to Ajanta Ellora from us with the best local car services. Experience our online cab booking services to Ajanta Ellora with reliable and polite drivers. Nashik Mumbai Pune Shirdi Airport Cabs, the leading car rental services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Ajanta Ellora at affordable rates.",
        "For Ajanta and Ellora Caves outstation (roundtrip) bookings, travelers can secure the best deals on our online cab/Cab booking platform, alongside transparent updates on cab fares and comprehensive tour package details. Nashik Mumbai Pune Shirdi Airport Cabs provides both economy and luxurious cab options to Ajanta and Ellora Caves, which are ideal for small family weekend trips, corporate outings, and long weekend getaways.",
      ],
      closing: "Book your heritage weekend now!",
    },
    meta: {
      title: "Ajanta Ellora Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description: "Combined Ajanta Ellora cave tour. Fares from ₹4500.",
    },
  },

  // ─── TOUR 10 ───────────────────────────────────────────────────────────────
  {
    id: "tour-10",
    title: "City Car Rental / Cab Service",
    slug: "city-car-rental-cab",
    image: "/images/nashik-city.jpg",
    tagline: "City Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Mumbai Package",
      content: [
        "We provide premium City Car Rental services at awesome offers. Hire a local or outstation cab from us to experience the best car rental services. Enjoy our seamless online cab booking system with highly reliable, professional, and polite drivers. Nashik Mumbai Pune Shirdi Airport Cabs, the leading vehicle rental service in the region, boasts a diverse fleet of well-maintained cars—including Swift Dzire, Tempo Traveller, and Innova—available to hire at incredibly affordable rates.",
        "Whether you need a local city ride or an outstation roundtrip, travelers can get the best deals right here on our online Cab booking platform. Check our competitive cab fares, transparent pricing structures, and customizable tour packages. Nashik Mumbai Pune Shirdi Airport Cabs provides both economy and luxurious vehicle options, making us the ideal choice for small family weekend getaways, corporate outings, airport transfers, and long weekend trips.",
      ],
      closing: "Ask about our combo packages!",
    },
    meta: {
      title: "City Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Comfortable city cab. Fares from ₹1800. Trimbakeshwar stop available.",
    },
  },

  // ─── TOUR 11 ───────────────────────────────────────────────────────────────
  {
    id: "tour-11",
    title: "Mumbai Car Rental / Cab Service",
    slug: "mumbai-car-rental-cab",
    image: "/images/nashik-mumbai.jpg",
    tagline: "Mumbai Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Gateway of India, Mumbai",
    longDistance: {
      heading: "Airport Drop Available",
      content: [
        "The route to Mumbai is an important outstation route for both pilgrims and tourists, covering approximately 165 km via the Mumbai Nashik Expressway. Travelers can book Swift Dzire, Ertiga, Innova, or Tempo Traveller vehicles with experienced drivers for smooth transfers to Mumbai Airport (CSMIA) or any Mumbai location. Toll charges, GST, and driver allowances are included in our transparent pricing—no hidden costs.",
        "Our Mumbai Cab service operates 24x7 with flexible drop-off and round-trip options. For pilgrims, we offer one-day darshan trips including Trimbakeshwar and other temples along the route. Corporate and family groups can choose sedan, SUV, or tempo traveller vehicles based on seating requirements. All vehicles are regularly serviced and sanitized for passenger safety on the highway. Book online or via WhatsApp with instant confirmation.",
      ],
      closing: "Book your Mumbai cab now!",
    },
    meta: {
      title: "Mumbai Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Outstation cab to Mumbai. Expressway route. Fares from ₹3500.",
    },
  },

  // ─── TOUR 12 ───────────────────────────────────────────────────────────────
  {
    id: "tour-12",
    title: "Pune Car Rental / Cab Service",
    slug: "pune-car-rental-cab",
    image: "/images/nashik-pune.jpg",
    tagline: "Pune Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Shaniwar Wada, Pune",
    longDistance: {
      heading: "Pune Airport Drop",
      content: [
        "Nashik Mumbai Pune Shirdi Airport Cabs is the premier provider of outstation & local car rental offerings, featuring specialized Pune Cab and cab services. We offer affordable car rental options to the Pune Airport, as well as general city-to-city transfers to Pune. We offer a highly customized & transparent service at a lower rate in comparison with traditional tour operators, leveraging modern booking systems to ensure you get the absolute best value-to-cost equation.",
        "Offering versatile touring options, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
      ],
      closing: "Call us to plan your trip!",
    },
    meta: {
      title: "Pune Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Outstation cab to Pune. Via Shani Shingnapur option. Fares from ₹3200.",
    },
  },

  // ─── TOUR 13 ───────────────────────────────────────────────────────────────
  {
    id: "tour-13",
    title: "Lonavala Car Rental / Cab Service",
    slug: "lonavala-car-rental-cab",
    image: "/images/nashik-lonavala.jpg",
    tagline: "Lonavala Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Lonavala & Khandala",
    longDistance: {
      heading: "Combine with Pune",
      content: [
        "We provide premium Lonavala Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Lonavala from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who know the routes perfectly. Nashik Mumbai Pune Shirdi Airport Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Lonavala outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Lonavala tour packages.",
      ],
      closing: "Ask us about Lonavala-Pune combo!",
    },
    meta: {
      title: "Lonavala Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description: "Cab to Lonavala hill station. Fares from ₹4500.",
    },
  },

  // ─── TOUR 14 ───────────────────────────────────────────────────────────────
  {
    id: "tour-14",
    title: "Mahabaleshwar Car Rental / Cab Service",
    slug: "mahabaleshwar-car-rental-cab",
    image: "/images/nashik-mahabaleshwar.jpg",
    tagline: "Mahabaleshwar Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Mahabaleshwar",
    longDistance: {
      heading: "2-Day Mahabaleshwar Package",
      content: [
        "We provide premium Mahabaleshwar Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Mahabaleshwar from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth journey through the scenic ghats. Nashik Mumbai Pune Shirdi Airport Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Ertigas, premium Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Mahabaleshwar outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Mahabaleshwar tour packages. Nashik Mumbai Pune Shirdi Airport Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family weekend getaways to the strawberry farms, office or corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your holiday to Mahabaleshwar completely stress-free.",
      ],
      closing: "Enquire about our holiday packages!",
    },
    meta: {
      title: "Mahabaleshwar Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Scenic cab to Mahabaleshwar hill station. Fares from ₹4200.",
    },
  },

  // ─── TOUR 15 ───────────────────────────────────────────────────────────────
  {
    id: "tour-15",
    title: "Goa Car Rental / Cab Service",
    slug: "goa-car-rental-cab",
    image: "/images/nashik-goa.jpg",
    tagline: "Goa Long-Distance Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Goa",
    longDistance: {
      heading: "The Ultimate Maharashtra-Goa Road Trip",
      content: [
        "We provide premium Goa Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Goa from us to experience the finest long-distance intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Nashik Mumbai Pune Shirdi Airport Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Goa outstation roundtrip or long-distance drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Goa tour packages. Nashik Mumbai Pune Shirdi Airport Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family vacations, extended coastal road trips, and group holidays. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Goa completely stress-free.",
      ],
      closing: "Book our Goa package now!",
    },
    meta: {
      title: "Goa Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Long-distance cab to Goa. Fares from ₹7500. Overnight option.",
    },
  },

  // ─── TOUR 16 ───────────────────────────────────────────────────────────────
  {
    id: "tour-16",
    title: "Konkan Car Rental / Cab Service",
    slug: "konkan-car-rental-cab",
    image: "/images/nashik-konkan.jpg",
    tagline: "Konkan Coast Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Konkan Weekend Package",
      content: [
        "We provide premium Konkan Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Konkan from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth journey down to the beautiful coastal belt. Nashik Mumbai Pune Shirdi Airport Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Konkan outstation roundtrip, beach holiday, or coastal tour, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Konkan tour packages. Nashik Mumbai Pune Shirdi Airport Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for family beach vacations, nature weekend getaways, and extended coastal road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Konkan completely stress-free.",
      ],
      closing: "Book your Konkan escape!",
    },
    meta: {
      title: "Konkan Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Cab to Konkan coast. Ganpatipule, Ratnagiri, Tarkarli. Fares from ₹5500.",
    },
  },

  // ─── TOUR 17 ───────────────────────────────────────────────────────────────
  {
    id: "tour-17",
    title: "Nagpur Car Rental / Cab Service",
    slug: "nagpur-car-rental-cab",
    image: "/images/nashik-nagpur.jpg",
    tagline: "Nagpur Long-Distance Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Vidarbha Extension Package",
      content: [
        "We provide premium Nagpur Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Nagpur from us to experience the finest long-distance intercity travel services in the region, taking full advantage of the fast Samruddhi Mahamarg route. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth, quick, and safe long-distance journey. Nashik Mumbai Pune Shirdi Airport Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Nagpur outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nagpur tour packages. Nashik Mumbai Pune Shirdi Airport Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family travel, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Nagpur completely stress-free.",
      ],
      closing: "Plan your Vidarbha tour with us!",
    },
    meta: {
      title: "Nagpur Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Long-distance cab to Nagpur. Fares from ₹7000. Night travel available.",
    },
  },

  // ─── TOUR 18 ───────────────────────────────────────────────────────────────
  {
    id: "tour-18",
    title: "Indore Car Rental / Cab Service",
    slug: "indore-car-rental-cab",
    image: "/images/nashik-indore.webp",
    tagline: "Indore Inter-State Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Ujjain Extension",
      content: [
        "We provide premium Indore Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Indore from us to experience the finest long-distance intercity travel services across state lines. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Nashik Mumbai Pune Shirdi Airport Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Indore outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Indore tour packages. Nashik Mumbai Pune Shirdi Airport Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family vacations, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Indore completely stress-free.",
      ],
      closing: "Book your Indore-Ujjain package!",
    },
    meta: {
      title: "Indore Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Inter-state cab to Indore MP. All-India permit. Fares from ₹7500.",
    },
  },

  // ─── TOUR 19 ───────────────────────────────────────────────────────────────
  {
    id: "tour-19",
    title: "Jalna Car Rental / Cab Service",
    slug: "jalna-car-rental-cab",
    image: "/images/jalna.webp",
    tagline: "Jalna Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: false,
    longDistance: {
      heading: "Connect via Samruddhi Mahamarg",
      content: [
        "We provide premium Jalna Car Rental services packed with unbeatable offers and budget-friendly packages. Hire a reliable cab to Jalna from us to experience smooth and comfortable travel via the direct Samruddhi Mahamarg expressway corridor. Enjoy our seamless online cab booking platform with polite, skilled drivers who ensure on-time pick-ups and safe highway transit. Nashik Mumbai Pune Shirdi Airport Cabs offers a wide fleet including Swift Dzire, Ertiga, Innova Crysta, and Tempo Travellers for groups of all sizes.",
        "Located in the Marathwada region adjacent to Chhatrapati Sambhajinagar, Jalna is a key commercial center known for its steel industry and agricultural trade. Whether you need a one-way transfer, roundtrip ride, or an extended Marathwada heritage tour combined with Shirdi and Ajanta-Ellora, we provide transparent fares with no hidden costs.",
      ],
      closing: "Book your Jalna cab service today!",
    },
    meta: {
      title: "Jalna Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Reliable cab service to Jalna via Samruddhi Mahamarg. Fares from ₹3200. 24/7 service.",
    },
  },

  // ─── TOUR 20 ───────────────────────────────────────────────────────────────
  {
    id: "tour-20",
    title: "Igatpuri Hill Station Cab Service",
    slug: "igatpuri-hill-station-cab",
    image: "/images/nashik-igatpuri.jpg",
    tagline: "Igatpuri Getaway Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Igatpuri",
    longDistance: {
      heading: "Kasara Ghat & Monsoon Getaway",
      content: [
        "Escape to the serene hills with our specialized Igatpuri Car Rental services. Located along the Western Ghats between Mumbai and Nashik, Igatpuri is famous for the Vipassana International Academy (Dhammagiri), Bhatsa River Valley, Kalsubai Peak, and ancient forts like Tringalwadi. We offer flexible local sightseeing, resort pickup/drop, and outstation roundtrips at competitive prices.",
        "Whether you are traveling from Mumbai, Pune, or Nashik for a weekend retreat or monsoon getaway, Nashik Mumbai Pune Shirdi Airport Cabs ensures a safe, comfortable drive through the Kasara Ghats with experienced mountain drivers. Choose from sedan models, spacious SUVs, or Tempo Travellers for group weekend tours.",
      ],
      closing: "Plan your Igatpuri hill retreat with us!",
    },
    meta: {
      title: "Igatpuri Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Book scenic hill station cab to Igatpuri. Resort drops & sightseeing packages from ₹1500.",
    },
  },

  // ─── TOUR 21 ───────────────────────────────────────────────────────────────
  {
    id: "tour-21",
    title: "Thane Car Rental / Cab Service",
    slug: "thane-car-rental-cab",
    image: "/images/nashik-thane.jpg",
    tagline: "Thane Expressway Cab Service",
    company: "Nashik Mumbai Pune Shirdi Airport Cab",
    popularCity: true,
    popularCityTitle: "Thane Junction",
    longDistance: {
      heading: "Gateway to Mumbai & MMR Region",
      content: [
        "Nashik Mumbai Pune Shirdi Airport Cabs offers dedicated Thane Car Rental services connecting Nashik, Pune, Shirdi, and the Mumbai Metropolitan Region. Situated at the crossroads of major national highways and the Samruddhi Mahamarg entrance corridor, Thane is a key transit destination for corporate travelers, commuters, and pilgrims.",
        "Enjoy door-to-door cab drops to all major Thane localities including Ghodbunder Road, Majiwada, Thane Railway Station, and Eastern Express Highway connectors. We offer clean AC cabs, 24/7 customer support, transparent toll/fare structures, and professional drivers experienced in suburban traffic management.",
      ],
      closing: "Call us now to book your Thane cab!",
    },
    meta: {
      title: "Thane Cab | Nashik Mumbai Pune Shirdi Airport Cabs",
      description:
        "Direct cab to Thane from Nashik, Pune, or Shirdi. Fast highway connectivity. Fares from ₹2800.",
    },
  },
];

// Major Hubs List
const primaryHubs = [
  "Nashik",
  "Mumbai",
  "Pune",
  "Shirdi",
  "Chhatrapati Sambhajinagar",
];

// Map hub destinations to existing image paths in public/images/
const hubImageMap = {
  Nashik: "/images/nashik-city.jpg",
  Mumbai: "/images/nashik-mumbai.jpg", // Correct existing file path
  Pune: "/images/nashik-pune.jpg",
  Shirdi: "/images/to-shirdi.jpg",
  "Chhatrapati Sambhajinagar": "/images/nashik-ajanta.jpg",
};

function createRouteObject(base, origin, destination) {
  const originSlug = slugify(origin);
  const destSlug = slugify(destination);
  const slug = `${originSlug}-to-${destSlug}-cab`;
  const title = `${origin} to ${destination} Cab Service`;
  const tagline = `${origin} to ${destination} Direct Cab`;

  // Safely resolve existing destination image file path
  const routeImage =
    destination === base.baseDestination
      ? base.baseDestinationImage || base.image
      : hubImageMap[destination] || base.image || "/images/nashik-mumbai.jpg";

  return {
    id: `${base.id}-${slug}`,
    title: title,
    slug: slug,
    origin: origin,
    destination: destination,
    distanceKm: base.distanceKm,
    estimatedTime: base.estimatedTime,
    image: routeImage,
    routeImg: routeImage,
    tagline: tagline,
    company: base.company,
    popularCity: base.popularCity,

    intro: replacePlaceholders(base.introTemplate, origin, destination),
    fleetDescription: base.fleetDescription,

    contentBlocks: base.contentBlocks.map((block) =>
      replacePlaceholders(block, origin, destination),
    ),

    meta: {
      title: replacePlaceholders(base.baseMetaTitle, origin, destination),
      description: replacePlaceholders(base.baseMetaDesc, origin, destination),
    },
  };
}

// Generate complete matrix: Every Hub connected to all 22 card destinations (Forward & Reverse)
const generatedDynamicRoutes = baseDynamicTours.flatMap((base) => {
  const routes = [];

  primaryHubs.forEach((hub) => {
    if (slugify(hub) !== slugify(base.baseDestination)) {
      // Forward: Hub -> Destination (Image = baseDestinationImage)
      routes.push(createRouteObject(base, hub, base.baseDestination));
      // Reverse: Destination -> Hub (Image = Hub Image)
      routes.push(createRouteObject(base, base.baseDestination, hub));
    }
  });

  return routes;
});

// Combine Generated Dynamic Routes + Original Static Tour Packages
export const toursData = [...generatedDynamicRoutes, ...originalStaticTours];

export function getStaticTourBySlug(rawSlug) {
  if (!rawSlug) return null;
  const clean = String(rawSlug).toLowerCase().trim().replace(/\/$/, "");
  return originalStaticTours.find((t) => t.slug === clean) || null;
}

export function getDynamicTourBySlug(rawSlug) {
  if (!rawSlug) return null;
  const clean = String(rawSlug).toLowerCase().trim().replace(/\/$/, "");

  let found = generatedDynamicRoutes.find((t) => t.slug === clean);
  if (found) return found;

  const withoutCab = clean.replace(/-cab$/, "");
  found = generatedDynamicRoutes.find(
    (t) => t.slug.replace(/-cab$/, "") === withoutCab,
  );
  if (found) return found;

  const parts = clean.replace(/-cab$/, "").split("-to-");
  if (parts.length === 2) {
    const [orig, dest] = parts;
    found = generatedDynamicRoutes.find(
      (t) => slugify(t.origin) === orig && slugify(t.destination) === dest,
    );
  }

  return found || null;
}

export function getTourBySlug(rawSlug) {
  return getStaticTourBySlug(rawSlug) || getDynamicTourBySlug(rawSlug);
}

export function getAllSlugs() {
  const staticSlugs = originalStaticTours.map((t) => ({ slug: t.slug }));
  const dynamicSlugs = generatedDynamicRoutes.map((t) => ({ slug: t.slug }));
  return [...staticSlugs, ...dynamicSlugs];
}

// ─── 4. PILL GRID DATA (MATCHING YOUR DEMO IMAGE) ─────────────────────────
export const routePillGridData = [
  {
    name: "Nashik to Trimbakeshwar Darshan",
    href: "/cities/nashik-to-trimbakeshwar-darshan-cab",
  },
  {
    name: "Nashik to Shani Shingnapur",
    href: "/cities/nashik-to-shani-shingnapur-cab",
  },
  { name: "Nashik to Mumbai", href: "/cities/nashik-to-mumbai-cab" },
  { name: "Nashik to Pune", href: "/cities/nashik-to-pune-cab" },
  { name: "Nashik to Shirdi", href: "/cities/nashik-to-shirdi-cab" },
  {
    name: "Nashik to Chhatrapati Sambhajinagar",
    href: "/cities/nashik-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
  },
  {
    name: "Nashik to Bhimashankar Darshan",
    href: "/cities/nashik-to-bhimashankar-darshan-cab",
  },
  {
    name: "Nashik to Igatpuri",
    href: "/cities/nashik-to-igatpuri-hill-station-cab",
  },
  {
    name: "Mumbai to Trimbakeshwar Darshan",
    href: "/cities/mumbai-to-trimbakeshwar-darshan-cab",
  },
  {
    name: "Mumbai to Shani Shingnapur",
    href: "/cities/mumbai-to-shani-shingnapur-cab",
  },
  { name: "Mumbai to Nashik", href: "/cities/mumbai-to-nashik-cab" },
  { name: "Mumbai to Pune", href: "/cities/mumbai-to-pune-cab" },
  { name: "Mumbai to Shirdi", href: "/cities/mumbai-to-shirdi-cab" },
  {
    name: "Mumbai to Chhatrapati Sambhajinagar",
    href: "/cities/mumbai-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
  },
  {
    name: "Mumbai to Lonavala",
    href: "/cities/mumbai-to-lonavala-khandala-cab",
  },
  {
    name: "Mumbai to Mahabaleshwar",
    href: "/cities/mumbai-to-mahabaleshwar-cab",
  },
  {
    name: "Pune to Trimbakeshwar Darshan",
    href: "/cities/pune-to-trimbakeshwar-darshan-cab",
  },
  {
    name: "Pune to Shani Shingnapur",
    href: "/cities/pune-to-shani-shingnapur-cab",
  },
  { name: "Pune to Nashik", href: "/cities/pune-to-nashik-cab" },
  { name: "Pune to Mumbai", href: "/cities/pune-to-mumbai-cab" },
  { name: "Pune to Shirdi", href: "/cities/pune-to-shirdi-cab" },
  {
    name: "Pune to Chhatrapati Sambhajinagar",
    href: "/cities/pune-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
  },
  { name: "Pune to Goa", href: "/cities/pune-to-goa-cab" },
  {
    name: "Pune to Mahabaleshwar",
    href: "/cities/pune-to-mahabaleshwar-cab",
  },
  {
    name: "Shirdi to Trimbakeshwar Darshan",
    href: "/cities/shirdi-to-trimbakeshwar-darshan-cab",
  },
  {
    name: "Shirdi to Shani Shingnapur",
    href: "/cities/shirdi-to-shani-shingnapur-cab",
  },
  { name: "Shirdi to Nashik", href: "/cities/shirdi-to-nashik-cab" },
  { name: "Shirdi to Mumbai", href: "/cities/shirdi-to-mumbai-cab" },
  { name: "Shirdi to Pune", href: "/cities/shirdi-to-pune-cab" },
  { name: "Shirdi to Kopargaon", href: "/cities/shirdi-to-kopargaon-cab" },
  { name: "Shirdi to Manmad", href: "/cities/shirdi-to-manmad-cab" },
  {
    name: "Chhatrapati Sambhajinagar to Trimbakeshwar Darshan",
    href: "/cities/chhatrapati-sambhajinagar-to-trimbakeshwar-darshan-cab",
  },
  {
    name: "Chhatrapati Sambhajinagar to Shani Shingnapur",
    href: "/cities/chhatrapati-sambhajinagar-to-shani-shingnapur-cab",
  },
  {
    name: "Chhatrapati Sambhajinagar to Nashik",
    href: "/cities/chhatrapati-sambhajinagar-to-nashik-cab",
  },
  {
    name: "Chhatrapati Sambhajinagar to Mumbai",
    href: "/cities/chhatrapati-sambhajinagar-to-mumbai-cab",
  },
  {
    name: "Chhatrapati Sambhajinagar to Pune",
    href: "/cities/chhatrapati-sambhajinagar-to-pune-cab",
  },
  {
    name: "Chhatrapati Sambhajinagar to Verul",
    href: "/cities/chhatrapati-sambhajinagar-to-verul-ellora-cab",
  },
  {
    name: "Chhatrapati Sambhajinagar to Jalna",
    href: "/cities/chhatrapati-sambhajinagar-to-jalna-cab",
  },
];

// ─── 5. FOOTER LINK DATA ───────────────────────────────────────────────────
export const footerLinksData = [
  {
    id: "nashik-hub-routes",
    title: "Nashik Routes",
    links: [
      {
        name: "Nashik to Trimbakeshwar Darshan",
        href: "/cities/nashik-to-trimbakeshwar-darshan-cab",
      },
      {
        name: "Nashik to Shani Shingnapur",
        href: "/cities/nashik-to-shani-shingnapur-cab",
      },
      { name: "Nashik to Mumbai", href: "/cities/nashik-to-mumbai-cab" },
      { name: "Nashik to Pune", href: "/cities/nashik-to-pune-cab" },
      { name: "Nashik to Shirdi", href: "/cities/nashik-to-shirdi-cab" },
      {
        name: "Nashik to Cha. Sambhajinagar",
        href: "/cities/nashik-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
      },
      {
        name: "Nashik to Bhimashankar Darshan",
        href: "/cities/nashik-to-bhimashankar-darshan-cab",
      },
      {
        name: "Nashik to Igatpuri",
        href: "/cities/nashik-to-igatpuri-hill-station-cab",
      },
    ],
  },
  {
    id: "mumbai-hub-routes",
    title: "Mumbai Routes",
    links: [
      {
        name: "Mumbai to Trimbakeshwar Darshan",
        href: "/cities/mumbai-to-trimbakeshwar-darshan-cab",
      },
      {
        name: "Mumbai to Shani Shingnapur",
        href: "/cities/mumbai-to-shani-shingnapur-cab",
      },
      { name: "Mumbai to Nashik", href: "/cities/mumbai-to-nashik-cab" },
      { name: "Mumbai to Pune", href: "/cities/mumbai-to-pune-cab" },
      { name: "Mumbai to Shirdi", href: "/cities/mumbai-to-shirdi-cab" },
      {
        name: "Mumbai to Cha. Sambhajinagar",
        href: "/cities/mumbai-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
      },
      {
        name: "Mumbai to Lonavala",
        href: "/cities/mumbai-to-lonavala-khandala-cab",
      },
      {
        name: "Mumbai to Mahabaleshwar",
        href: "/cities/mumbai-to-mahabaleshwar-cab",
      },
    ],
  },
  {
    id: "pune-hub-routes",
    title: "Pune Routes",
    links: [
      {
        name: "Pune to Trimbakeshwar Darshan",
        href: "/cities/pune-to-trimbakeshwar-darshan-cab",
      },
      {
        name: "Pune to Shani Shingnapur",
        href: "/cities/pune-to-shani-shingnapur-cab",
      },
      { name: "Pune to Nashik", href: "/cities/pune-to-nashik-cab" },
      { name: "Pune to Mumbai", href: "/cities/pune-to-mumbai-cab" },
      { name: "Pune to Shirdi", href: "/cities/pune-to-shirdi-cab" },
      {
        name: "Pune to Cha. Sambhajinagar",
        href: "/cities/pune-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
      },
      { name: "Pune to Goa", href: "/cities/pune-to-goa-cab" },
      {
        name: "Pune to Mahabaleshwar",
        href: "/cities/pune-to-mahabaleshwar-cab",
      },
    ],
  },
  {
    id: "shirdi-hub-routes",
    title: "Shirdi Routes",
    links: [
      {
        name: "Shirdi to Trimbakeshwar Darshan",
        href: "/cities/shirdi-to-trimbakeshwar-darshan-cab",
      },
      {
        name: "Shirdi to Shani Shingnapur",
        href: "/cities/shirdi-to-shani-shingnapur-cab",
      },
      { name: "Shirdi to Nashik", href: "/cities/shirdi-to-nashik-cab" },
      { name: "Shirdi to Mumbai", href: "/cities/shirdi-to-mumbai-cab" },
      { name: "Shirdi to Pune", href: "/cities/shirdi-to-pune-cab" },
      { name: "Shirdi to Kopargaon", href: "/cities/shirdi-to-kopargaon-cab" },
      { name: "Shirdi to Manmad", href: "/cities/shirdi-to-manmad-cab" },
    ],
  },
  {
    id: "sambhajinagar-hub-routes",
    title: "Cha. Sambhajinagar Routes",
    links: [
      {
        name: "Cha. Sambhajinagar to Trimbakeshwar Darshan",
        href: "/cities/chhatrapati-sambhajinagar-to-trimbakeshwar-darshan-cab",
      },
      {
        name: "Cha. Sambhajinagar to Shani Shingnapur",
        href: "/cities/chhatrapati-sambhajinagar-to-shani-shingnapur-cab",
      },
      {
        name: "Cha. Sambhajinagar to Nagpur",
        href: "/cities/chhatrapati-sambhajinagar-to-nagpur-cab",
      },
      {
        name: "Cha. Sambhajinagar to Mumbai",
        href: "/cities/chhatrapati-sambhajinagar-to-mumbai-cab",
      },
      {
        name: "Cha. Sambhajinagar to Pune",
        href: "/cities/chhatrapati-sambhajinagar-to-pune-cab",
      },
      {
        name: "Cha. Sambhajinagar to Verul",
        href: "/cities/chhatrapati-sambhajinagar-to-verul-ellora-cab",
      },
      {
        name: "Cha. Sambhajinagar to Jalna",
        href: "/cities/chhatrapati-sambhajinagar-to-jalna-cab",
      },
    ],
  },
];

// {
//   id: "nashik-cabs",
//   title: "NASHIK CAB SERVICES",
//   links: [
//     { text: "Nashik to Mumbai Cab", href: "/cities/nashik-to-mumbai-cab" },
//     { text: "Nashik to Pune Cab", href: "/cities/nashik-to-pune-cab" },
//     { text: "Nashik to Shirdi Cab", href: "/cities/nashik-to-shirdi-cab" },
//     {
//       text: "Nashik to Chhatrapati Sambhajinagar Cab",
//       href: "/cities/nashik-to-chhatrapati-sambhajinagar-cab",
//     },
//     {
//       text: "Nashik to Shani Shingnapur",
//       href: "/cities/shani-shingnapur-car-rental",
//     },
//   ],
// },
// {
//   id: "mumbai-cabs",
//   title: "MUMBAI CAB SERVICE",
//   links: [
//     { text: "Mumbai to Nashik Cab", href: "/cities/mumbai-to-nashik-cab" },
//     { text: "Mumbai to Pune Cab", href: "/cities/mumbai-to-pune-cab" },
//     { text: "Mumbai to Shirdi Cab", href: "/cities/mumbai-to-shirdi-cab" },
//     {
//       text: "Mumbai to Chhatrapati Sambhajinagar Cab",
//       href: "/cities/mumbai-to-chhatrapati-sambhajinagar-cab",
//     },
//     {
//       text: "Mumbai to Trimbakeshwar Cab",
//       href: "/cities/mumbai-to-trimbakeshwar-cab",
//     },
//   ],
// },
// {
//   id: "pune-cabs",
//   title: "PUNE CAB SERVICE",
//   links: [
//     { text: "Pune to Nashik Cab", href: "/cities/pune-to-nashik-cab" },
//     { text: "Pune to Mumbai Cab", href: "/cities/pune-to-mumbai-cab" },
//     { text: "Pune to Shirdi Cab", href: "/cities/pune-to-shirdi-cab" },
//     {
//       text: "Pune to Chhatrapati Sambhajinagar Cab",
//       href: "/cities/pune-to-chhatrapati-sambhajinagar-cab",
//     },
//     { text: "Pune to Goa Cab Service", href: "/cities/pune-to-goa-cab" },
//   ],
// },
// {
//   id: "bus-services",
//   title: "NASHIK BUS SERVICES",
//   links: [
//     {
//       text: "Best Bus Service in Nashik",
//       href: "/bus/best-bus-service-in-nashik",
//     },
//     {
//       text: "25 Seater Bus on Rent in Nashik",
//       href: "/bus/25-seater-bus-on-rent-in-nashik",
//     },
//     {
//       text: "32 Seater Bus on Rent in Nashik",
//       href: "/bus/32-seater-bus-on-rent-in-nashik",
//     },
//     {
//       text: "35 Seater Bus on Rent in Nashik",
//       href: "/bus/35-seater-bus-on-rent-in-nashik",
//     },
//     {
//       text: "45 Seater Bus on Rent in Nashik",
//       href: "/bus/45-seater-bus-on-rent-in-nashik",
//     },
//     {
//       text: "50-Seater Bus on Rent in Nashik",
//       href: "/bus/50-seater-bus-on-rent-in-nashik",
//     },
//     {
//       text: "Mini Bus on Rent in Nashik",
//       href: "/bus/mini-bus-on-rent-in-nashik",
//     },
//     {
//       text: "Ac bus booking in nashik",
//       href: "/bus/ac-bus-booking-in-nashik",
//     },
//   ],
// },

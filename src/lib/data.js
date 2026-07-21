export const slugify = (text = "") => {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
};

// Cabs cars data
export const rawCabsData = [
  {
    id: "cab-01",
    name: "Mahindra Xylo",
    title: "Xylo / Scorpio",
    routesSubtitle:
      "Premium Cab Services between Nashik, Mumbai, Pune, Shani Shingnapur, Manmad, Trimbakeshwar, and Nashik Airport.",
    description:
      "We provide Budget Mahindra Xylo/Scorpio Cab rentals ensuring premium comfort and spacious legroom. Highly ideal for family packages, outstation tours, and business transit, our vehicles come fully equipped with modern amenities. Get clean taxis accompanied by our highly experienced local drivers-cum-guides.",
    imageSrc: "/images/mahindra-xylo.avif",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "Mahindra Xylo/Scorpio Online Booking, Luxury Car Hire for Family Tours, Outstation Online Cab Booking all over Maharashtra, Best Economical Car Rental Services.",
    category: "SUV",
    features: [
      "6-7 Passengers",
      "Spacious Legroom",
      "Carrier Available",
      "Dual AC",
      "Music System",
    ],
    pricingTable: [
      {
        vehicle: "Mahindra Xylo",
        ratePerKm: "₹14/km",
        minKm: "250 km/day",
        driverAllowance: "₹300/day",
      },
    ],
  },
  {
    id: "cab-02",
    name: "Toyota Innova",
    title: "Toyota Innova",
    routesSubtitle:
      "Premium Cab Services between Nashik, Mumbai, Pune, Shani Shingnapur, Manmad, Trimbakeshwar, and Nashik Airport.",
    description:
      "Experience premium class travel with our spotless Toyota Innova fleet. Recognized across Maharashtra for elite comfort and unmatched highway safety, it is the top choice for long-distance outstation journeys, corporate transits, and multicity holiday itineraries.",
    imageSrc: "/images/toyota-innova.avif",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "Toyota Innova Car Rental, Premium SUV Hire for Long Trips, Nashik Mumbai Airport Drop Taxi, Affordable Innova Tour Packages.",
    category: "SUV",
    features: [
      "6-7 Passengers",
      "Elite Highway Safety",
      "Plush Pushback Seats",
      "Dual Air Conditioning",
      "Ample Boot Space",
    ],
    pricingTable: [
      {
        vehicle: "Toyota Innova",
        ratePerKm: "₹16/km",
        minKm: "250 km/day",
        driverAllowance: "₹300/day",
      },
    ],
  },
  {
    id: "cab-03",
    name: "Chevrolet Tavera / Enjoy",
    title: "Chevrolet Tavera / Enjoy",
    routesSubtitle:
      "Affordable Multi-Utility Vehicle Rental Services across Maharashtra.",
    description:
      "Perfect for larger families and pilgrimage groups looking for budget-friendly alternatives without compromising structural seating space. Our Chevrolet fleet handles rough routes effortlessly, delivering a reliable commute to central tourist locations.",
    imageSrc: "/images/chevrolet-tavera-enjoy.avif",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "Budget Multi-Utility Vehicle Booking, Chevrolet Tavera Rental for Pilgrimages, Large Group Cab Booking, Economical Outstation Taxi.",
    category: "SUV",
    features: [
      "8-9 Passengers",
      "Deep Cabin Space",
      "Robust Suspension",
      "Powerful AC Grid",
      "Pilgrimage Optimized",
    ],
    pricingTable: [
      {
        vehicle: "Chevrolet Tavera",
        ratePerKm: "₹13/km",
        minKm: "250 km/day",
        driverAllowance: "₹300/day",
      },
    ],
  },
  {
    id: "cab-04",
    name: "Maruti Ertiga",
    title: "Maruti Ertiga",
    routesSubtitle:
      "Smart 7-Seater Cab Services between Nashik, Mumbai, and Nashik.",
    description:
      "The ideal modern 7-seater choice combining ultimate fuel efficiency with urban comfort. Perfect for mid-sized families traveling across busy city centers or taking swift intercity airport highway runs between Nashik and Mumbai.",
    imageSrc: "/images/maruti-ertiga.avif",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "Maruti Ertiga Rental Online, Cheap 7 Seater Taxi Booking, Intercity Hybrid Cab Hire, Affordable Family Tour Vehicle.",
    category: "SUV",
    features: [
      "6 Passengers",
      "Hybrid Fuel Efficiency",
      "Compact Structural Profile",
      "Air Conditioning",
      "Flexible Folding Rear Seats",
    ],
    pricingTable: [
      {
        vehicle: "Maruti Ertiga",
        ratePerKm: "₹12/km",
        minKm: "250 km/day",
        driverAllowance: "₹300/day",
      },
    ],
  },
  {
    id: "cab-05",
    name: "Hyundai Verna",
    title: "Hyundai Verna",
    routesSubtitle:
      "Premium Executive Sedan Rental for Stylish City Travel and Outstation Journeys.",
    description:
      "Our luxury sedan selection delivers powerful performance, sleek aerodynamics, and an ultra-modern cabin space. Perfect for executive business trips, airport drops, and couples seeking premium high-speed highway comfort.",
    imageSrc: "/images/hyundai-verna.webp",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "Hyundai Verna Sedan Booking, Premium Luxury Cab Rental, Outstation Executive Sedan Taxi, Local Corporate Tour Packages.",
    category: "Sedan",
    features: [
      "4 Passengers",
      "Executive Styling",
      "Premium Cabin Insulation",
      "Climate Control AC",
      "Deep Boot Space",
    ],
    pricingTable: [
      {
        vehicle: "Hyundai Verna",
        ratePerKm: "₹12/km",
        minKm: "250 km/day",
        driverAllowance: "₹300/day",
      },
    ],
  },
  {
    id: "cab-06",
    name: "Swift Dzire",
    title: "Swift Dzire",
    routesSubtitle:
      "Most Popular Compact Sedan Service for Economical Highway Travels.",
    description:
      "Maharashtra's favorite choice for economic travel. Enjoy fully air-conditioned, well-maintained Swift Dzire cars perfect for dynamic solo tracking, swift couple getaways, and dynamic airport point-to-point transfers.",
    imageSrc: "/images/swift-dzire.avif",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "Swift Dzire Online Booking, Budget Sedan Taxi Hire, Fast Airport Pick & Drop, Economical One-Way Cab Services.",
    category: "Sedan",
    features: [
      "4 Passengers",
      "Highly Economical",
      "Excellent Air Conditioning",
      "Compact Design",
      "Station Transfer Ready",
    ],
    pricingTable: [
      {
        vehicle: "Swift Dzire",
        ratePerKm: "₹11/km",
        minKm: "250 km/day",
        driverAllowance: "₹300/day",
      },
    ],
  },
  {
    id: "cab-07",
    name: "Hyundai Aura",
    title: "Hyundai Aura",
    routesSubtitle:
      "Modern and Stylish Compact Sedan for Smart City Rides and Regional Tours.",
    description:
      "A highly practical and tech-loaded compact sedan that perfectly balances fuel efficiency with contemporary styling. Featuring excellent cabin cooling, smart storage spaces, and an economical fare structure ideal for comfortable point-to-point transfers and airport drops.",
    imageSrc: "/images/hyundai-aura.webp",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "Hyundai Aura Taxi Services, Affordable Compact Sedan Rentals, Railway Station Connection Cab, Lowest Fare Premium Sedan.",
    category: "Sedan",
    features: [
      "4 Passengers",
      "Tech-Loaded Interiors",
      "Contemporary Look",
      "Responsive AC Grid",
      "Smart Travel Storage",
    ],
    pricingTable: [
      {
        vehicle: "Hyundai Aura",
        ratePerKm: "₹11/km",
        minKm: "250 km/day",
        driverAllowance: "₹300/day",
      },
    ],
  },
  {
    id: "cab-08",
    name: "Indica Vista",
    title: "Indica Vista",
    routesSubtitle:
      "Pocket-Friendly Compact Hatchback for Daily Point-to-Point Runs.",
    description:
      "The ultimate compact travel option optimized for city navigation and short-distance outstation runs. An exceptionally priced solution offering complete maneuverability for tight schedules.",
    imageSrc: "/images/indica-vista.jpg",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "Indica Vista Hatchback Hire, Cheapest Local Car Booking, Small Family Tour Taxi, Short Distance Economical Ride.",
    category: "Sedan",
    features: [
      "4 Passengers",
      "Pocket Friendly",
      "City Driving Optimization",
      "Air Conditioning",
      "Maneuverable Footprint",
    ],
    pricingTable: [
      {
        vehicle: "Indica Vista",
        ratePerKm: "₹10/km",
        minKm: "200 km/day",
        driverAllowance: "₹300/day",
      },
    ],
  },
  {
    id: "cab-09",
    name: "Tempo Traveller 10 Seater",
    title: "10 Seater Tempo Traveller",
    routesSubtitle:
      "Luxury Group Mini-Bus Services for Pilgrimages and Family Outings.",
    description:
      "Travel together with your family without crowding. Our premium 10-seater Tempo Traveller offers pushback luxury seating, powerful dual air conditioning, and deep luggage hold areas for high-end comfort during religious tours.",
    imageSrc: "/images/tempo-traveller-10.jpg",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "10 Seater Tempo Traveller Booking, Luxury Mini Van Hire, Family Pilgrimage Transport, Premium Group Travel Service.",
    category: "Tempo Traveller",
    features: [
      "10 Passengers",
      "Pushback Luxury Seats",
      "Dual Zone AC",
      "Ample Cargo Space",
      "Entertainment Screens Built-In",
    ],
    pricingTable: [
      {
        vehicle: "10 Str Tempo Traveller",
        ratePerKm: "₹20/km",
        minKm: "300 km/day",
        driverAllowance: "₹500/day",
      },
    ],
  },
  {
    id: "cab-10",
    name: "Tempo Traveller 20 Seater",
    title: "20 Seater Tempo Traveller",
    routesSubtitle:
      "Spacious Group Logistics for Corporate Retreats and Grand Family Events.",
    description:
      "Streamline transportation logistics for massive corporate groups or wedding functions. Features customized wide aisles, premium entertainment set systems, and customized shock suspension for maximum travel ease.",
    imageSrc: "/images/tempo-traveller-20.jpg",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "20 Seater Bus Rental Online, Corporate Event Logistics, Large Tempo Traveller Rental, Group Tour Packages Maharashtra.",
    category: "Tempo Traveller",
    features: [
      "20 Passengers",
      "Wide Center Aisles",
      "Premium Audio-Visual Unit",
      "Shock Absorber Suspension",
      "Event Transport Ready",
    ],
    pricingTable: [
      {
        vehicle: "20 Str Tempo Traveller",
        ratePerKm: "₹24/km",
        minKm: "300 km/day",
        driverAllowance: "₹500/day",
      },
    ],
  },
  {
    id: "cab-11",
    name: "Tempo Traveller 25 Seater",
    title: "25 Seater Tempo Traveller",
    routesSubtitle:
      "Heavy Duty Group Transport for Corporate and Tourism Sectors.",
    description:
      "Our largest mini-bus configuration optimized for peak stability and long highway operations. Features comfortable seating arrangements perfect for keeping big tourist circles together comfortably on interstate trips.",
    imageSrc: "/images/tempo-traveller-25.jpg",
    providerFallback: "Nashik Mumbai Cabs",
    notes:
      "25 Seater Tempo Traveller Hire, Heavy Group Tour Logistics, Corporate Shuttle Services, Intercity Heavy Group Transit.",
    category: "Tempo Traveller",
    features: [
      "25 Passengers",
      "Heavy-Duty Highway Chassis",
      "Extended Wheelbase Stability",
      "Roof Carrier Integration",
      "Long Distance Optimized",
    ],
    pricingTable: [
      {
        vehicle: "25 Str Tempo Traveller",
        ratePerKm: "₹26/km",
        minKm: "300 km/day",
        driverAllowance: "₹500/day",
      },
    ],
  },

  // ─── ADDED NEW BUS SPECIFIC FLEET CORES ────────────────────────────────────

  {
    id: "bus-01",
    name: "Best Bus Service in Nashik",
    title: "Best Bus Service in Nashik | Luxury Commercial Fleet",
    routesSubtitle:
      "Reliable Passenger Bus Operations Across Core Maharashtra Pilgrim Tracks.",
    description:
      "We are recognized as a premier transport provider offering dependable coach options directly out of Nashik. Our vehicles are meticulously inspected to guarantee prompt departures, high performance across toll highways, and smooth passenger transport for large tour packages.",
    imageSrc: "/images/nashik-best-bus.png",
    providerFallback: "Nashik Tour Coaches",
    notes:
      "Top Rated Nashik Bus Service, Hire Commercial Coaches Nashik, Pilgrimage Group Bus Fleet, Best Maharashtra Sightseeing Bus.",
    category: "Bus",
    features: [
      "Fully Customizable Capacities",
      "Immaculate Cabins",
      "Regulated Driving Speed Monitors",
      "All-India Tourist Permits",
      "AC & Non-AC Fleet Arrays",
    ],
    pricingTable: [
      {
        vehicle: "Standard Nashik Coach",
        ratePerKm: "By Quotation",
        minKm: "Included",
        driverAllowance: "Included",
      },
    ],
  },
  {
    id: "bus-02",
    name: "25 Seater Bus on Rent in Nashik",
    title: "25 Seater Bus on Rent in Nashik | Midi Coach Rental",
    routesSubtitle:
      "Optimal Group Transport for Medium Sized Pilgrim Circles and Family Tours.",
    description:
      "Our 25-seater luxury midi-bus bridges the gap between smaller mini-vans and full-scale commercial coaches. It provides maximum interior cooling capability and ample headroom, ensuring your family or corporate tier arrives at central shrines fully refreshed.",
    imageSrc: "/images/bus-25-seater.png",
    providerFallback: "Nashik Tour Coaches",
    notes:
      "25 Seater Bus Hire Nashik, Midi Commercial Bus Booking, Medium Family Tour Coach, Affordable Nashik Shani Shingnapur Bus.",
    category: "Bus",
    features: [
      "25 Premium Pushback Seats",
      "Hi-Cool Air Conditioning",
      "Integrated LCD Entertainment Systems",
      "Individual Reading Lights",
      "Rear Luggage Boots",
    ],
    pricingTable: [
      {
        vehicle: "25 Seater Luxury Bus",
        ratePerKm: "₹26/km",
        minKm: "300 km/day",
        driverAllowance: "₹500/day",
      },
    ],
  },
  {
    id: "bus-03",
    name: "32 Seater Bus on Rent in Nashik",
    title: "32 Seater Bus on Rent in Nashik | Luxury Passenger Bus",
    routesSubtitle:
      "Spacious Multi-Row Seating Configurations for Marriage Events and Regional Transfers.",
    description:
      "Streamline transportation logistics for marriage functions or large family pilgrimage packages. Built on an advanced commercial chassis with customized shock suspensions, this 32-seater keeps medium-to-large circles traveling together safely and comfortably.",
    imageSrc: "/images/bus-32-seater.png",
    providerFallback: "Nashik Tour Coaches",
    notes:
      "32 Seater Coach Booking Nashik, Marriage Fleet Logistics Maharashtra, 32 Seat AC Bus Rental, Nashik to Pune Group Bus.",
    category: "Bus",
    features: [
      "32 Ergonomic Reclining Seats",
      "Plush Wide Center Aisles",
      "Premium Bass Audio System",
      "Advanced Air Braking Systems",
      "Tinted UV Protection Windows",
    ],
    pricingTable: [
      {
        vehicle: "32 Seater Luxury Bus",
        ratePerKm: "₹30/km",
        minKm: "300 km/day",
        driverAllowance: "₹500/day",
      },
    ],
  },
  {
    id: "bus-04",
    name: "35 Seater Bus on Rent in Nashik",
    title: "35 Seater Bus on Rent in Nashik | Mid-Large Luxury Coach",
    routesSubtitle:
      "Heavy Duty Outstation Inter-City Commutes for Academic Tours and Corporate Retreats.",
    description:
      "Optimized for extended highway routes throughout central Maharashtra. Features wide panoramic structural window framing, comfortable seating rows, and maximum under-floor luggage hold areas overseen by veteran long-distance heavy vehicle captains.",
    imageSrc: "/images/bus-35-seater.jpg",
    providerFallback: "Nashik Tour Coaches",
    notes:
      "35 Seater Bus Rental Nashik, Corporate Outstation Coach Hire, Academic Tour Transport Nashik, Heavy Duty Passenger Bus.",
    category: "Bus",
    features: [
      "35 Luxury Recliners",
      "Panoramic Visual Glass Profiles",
      "Under-Floor Large Luggage Holds",
      "Digital Cockpit GPS System",
      "Emergency Exit Protocols Installed",
    ],
    pricingTable: [
      {
        vehicle: "35 Seater Luxury Bus",
        ratePerKm: "₹32/km",
        minKm: "300 km/day",
        driverAllowance: "₹500/day",
      },
    ],
  },
  {
    id: "bus-05",
    name: "45 Seater Bus on Rent in Nashik",
    title: "45 Seater Bus on Rent in Nashik | Premium Commercial Coach",
    routesSubtitle:
      "High-Capacity Executive Coaches for Large Scale Events and Holiday Itineraries.",
    description:
      "Designed for heavy group transit management requirements. Includes fully automated premium dual-zone climate controllers, comfortable multi-row configurations, and exceptional vehicle durability, protecting your travel timeline from roadside complications.",
    imageSrc: "/images/bus-45-seater.png",
    providerFallback: "Nashik Tour Coaches",
    notes:
      "45 Seater Bus Hire Nashik, Large Scale Event Fleet Logistics, High Capacity Pilgrimage Transport, Premium AC Coach Rental.",
    category: "Bus",
    features: [
      "45 Reclining Passenger Seats",
      "Dual Zone Climate Controllers",
      "Pneumatic Automatic Sliding Doors",
      "Heavy Trunk Cargo Layouts",
      "Night Vision Driving Assist Cameras",
    ],
    pricingTable: [
      {
        vehicle: "45 Seater Premium Coach",
        ratePerKm: "₹36/km",
        minKm: "300 km/day",
        driverAllowance: "₹600/day",
      },
    ],
  },
  {
    id: "bus-06",
    name: "50-Seater Bus on Rent in Nashik",
    title: "50-Seater Bus on Rent in Nashik | Maxi Coach Fleet",
    routesSubtitle:
      "Our Largest Passenger Bus Layout Structured for Grand Logistics and Massive Group Travel.",
    description:
      "The ultimate solution for high-capacity transportation rules. Engineered explicitly to keep large groups unified on extended outstation journeys, this bus guarantees high structural stability and an easier, smooth highway cruise over multiple hours.",
    imageSrc: "/images/bus-50-seater.png",
    providerFallback: "Nashik Tour Coaches",
    notes:
      "50 Seater Bus Rental Nashik, Maximum Capacity Tour Coach, Large Wedding Guest Transport, Nashik to Mumbai 50 Seat Bus.",
    category: "Bus",
    features: [
      "50 Full-Comfort Passenger Layouts",
      "Extended Wheelbase Highway Stability",
      "High-Volume Belly Cargo Shells",
      "Individual Overhead AC Vents",
      "Integrated Charging Points",
    ],
    pricingTable: [
      {
        vehicle: "50 Seater Maxi Coach",
        ratePerKm: "₹40/km",
        minKm: "300 km/day",
        driverAllowance: "₹600/day",
      },
    ],
  },
  {
    id: "bus-07",
    name: "Mini Bus on Rent in Nashik",
    title: "Mini Bus on Rent in Nashik | Urban Micro Bus Rentals",
    routesSubtitle:
      "Compact Passenger Form Factors for Swift Local Sightseeing and Urban Transfers.",
    description:
      "The ideal modern minibus choice combining great fuel parameters with excellent urban maneuverability. Perfect for navigating congested temple town crossroads or managing immediate point-to-point train station transfers safely.",
    imageSrc: "/images/mini-bus.png",
    providerFallback: "Nashik Tour Coaches",
    notes:
      "Mini Bus Rental Nashik, Local Sightseeing Mini Bus Hire, Cheap Micro Bus Booking, Station Drop Mini Bus.",
    category: "Bus",
    features: [
      "15-21 Compact Passenger Capacities",
      "Urban Crossroad Maneuverability",
      "Responsive Roof AC System",
      "Low Ground Clearance Step Entry",
      "Sleek Aerodynamic Outer Shell",
    ],
    pricingTable: [
      {
        vehicle: "Premium Local Mini Bus",
        ratePerKm: "₹22/km",
        minKm: "250 km/day",
        driverAllowance: "₹400/day",
      },
    ],
  },
  {
    id: "bus-08",
    name: "Ac bus booking in Nashik",
    title: "AC Bus Booking in Nashik | Online Luxury Coach Rentals",
    routesSubtitle:
      "Instant Premium AC Coach Deployments with Fixed Outstation Rate Cards.",
    description:
      "Secure immediate air-conditioned commercial coach placements via our online booking engine. Avoid hot travel seasons entirely with automated interior climate cooling arrays and professional heavy vehicle operations.",
    imageSrc: "/images/hire-bus.jpg",
    providerFallback: "Nashik Tour Coaches",
    notes:
      "Online AC Bus Booking Nashik, Hire Luxury AC Coaches, Fixed Tariff Bus Rental, Air Conditioned Group Transit Maharashtra.",
    category: "Bus",
    features: [
      "Advanced Climate Control Filtering",
      "Guaranteed Air Conditioned Cleanliness",
      "Punctual Terminal Placements",
      "Vetted Heavy Route Highway Captains",
      "Transparent Pricing Matrices",
    ],
    pricingTable: [
      {
        vehicle: "Luxury AC Tour Bus",
        ratePerKm: "₹35/km",
        minKm: "300 km/day",
        driverAllowance: "₹600/day",
      },
    ],
  },
];

export const CabsData = rawCabsData.map((cab) => ({
  ...cab,
  slug: slugify(cab.name),
}));

// Map over the single array to dynamically inject functional cross-page target links using slugs
const rawCityRoutes = [
  { id: "route-01", label: "Nashik to Panchavati" },
  { id: "route-02", label: "Nashik to Nashik" },
  { id: "route-03", label: "Nashik to Mumbai" },
  { id: "route-04", label: "Nashik to Chhatrapati Sambhajinagar" },
  { id: "route-05", label: "Nashik to Thane" },
  { id: "route-06", label: "Nashik to Ahmedabad" },
  { id: "route-07", label: "Nashik to Malegaon" },
  { id: "route-08", label: "Nashik to Nagpur" },
  { id: "route-09", label: "Nashik to Saputara" },
  { id: "route-10", label: "Nashik Shingnapur to Shani Shingnapur" },
  { id: "route-11", label: "Nashik to Bhimashankar" },
  { id: "route-12", label: "Nashik to Kalyan" },
  { id: "route-13", label: "Nashik to Ahmednagar" },
  { id: "route-14", label: "Nashik to Jalna" },
  { id: "route-15", label: "Nashik to Indore" },
  { id: "route-16", label: "Nashik to Goa Velha" },
  { id: "route-17", label: "Nashik to Nandurbar" },
  { id: "route-18", label: "Nashik to Ratnagiri" },
  { id: "route-19", label: "Nashik to Mahabaleshwar" },
  { id: "route-20", label: "Nashik to Tuljapur" },
  { id: "route-21", label: "Nashik to Pandharpur" },
  { id: "route-22", label: "Nashik to Solapur" },
  { id: "route-23", label: "Nashik to Chinchwad" },
  { id: "route-24", label: "Nashik to Mumbai Airport" },
  { id: "route-25", label: "Nashik to Satara" },
  { id: "route-26", label: "Nashik to Vadodara" },
  { id: "route-27", label: "Nashik to Navi Mumbai" },
  { id: "route-28", label: "Nashik to Trimbak" },
  { id: "route-29", label: "Nashik to Dhule" },
  { id: "route-30", label: "Nashik to Jalgaon" },
  { id: "route-31", label: "Nashik to Saptashrungi" },
  { id: "route-32", label: "Nashik to Igatpuri" },
  { id: "route-33", label: "Nashik to Lonavala" },
  { id: "route-34", label: "Nashik to Khandala" },
  { id: "route-35", label: "Nashik to Sambhaji Nagar" },
  { id: "route-36", label: "Nashik to Surat" },
];

export const CityServicesRoute = rawCityRoutes.map((route) => ({
  ...route,
  url: `/cities/${slugify(route.label)}`,
}));

// tourData.js — Complete dynamic tour data
export const toursData = [
  // ─── TOUR 01 ───────────────────────────────────────────────────────────────
  {
    id: "tour-01",
    title: "Shani Shingnapur Car Rental Packages",
    slug: "shani-shingnapur-car-rental",
    image: "/images/shani-shingnapur.jpg",
    tagline: "Nashik to Shani Shingnapur Taxi Services",
    company: "Nashik Mumbai Cab",
    popularCity: true,
    popularCityTitle: "Shani Shingnapur",
    intro:
      "At Nashik Mumbai Cab, we offer budget-friendly taxi rentals for your journey from Nashik to Shani Shingnapur. Whether you're planning a roundtrip or a one-way ride, we provide the most reliable and affordable taxi services for this sacred journey.",
    fleetDescription:
      "Our fleet includes a variety of cars like Swift Dzire, Tempo Traveller, and Innova, ensuring that you find the perfect vehicle to suit your needs. With our easy online booking system, friendly drivers, and well-maintained cabs, we guarantee a smooth and hassle-free experience as you travel from Nashik to Shani Shingnapur.",
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
          "The roundtrip distance from Nashik to Shani Shingnapur is approximately 150 km. Our taxi services provide the most convenient travel option for this route. Taxi fares range between ₹1300 and ₹2500, depending on your vehicle choice and any shared ride arrangements. For larger groups, we offer Tempo Traveller services on a per-seat basis.",
      },
      {
        type: "list",
        heading: "Why Choose Us?",
        intro:
          "At Nashik Mumbai Cab, we prioritize your safety, comfort, and satisfaction. Our services include:",
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
          "Mula Dam (located along the Nashik to Shani Shingnapur road)",
          "Temple of Goddess Laxmi",
          "Sant Shri Udasi Baba's Samadhi",
          "Temple of Shri Dattatraya",
        ],
        closing:
          "For a comfortable and smooth journey from Nashik to Shani Shingnapur, book your taxi with Nashik Mumbai Cab today!",
      },
    ],
    longDistance: {
      heading: "",
      content: "",
      closing: "Call us today for easy bookings and stress-free travel!",
    },
    meta: {
      title: "Nashik to Shani Shingnapur Taxi | Nashik Mumbai Cabs",
      description:
        "Book affordable taxi from Nashik to Shani Shingnapur. Swift Dzire, Innova, Tempo Traveller available. Fares from ₹1300. 24/7 service.",
    },
  },

  // ─── TOUR 02 ───────────────────────────────────────────────────────────────
  {
    id: "tour-02",
    title: "Nashik Trimbakeshwar Darshan",
    slug: "nashik-trimbakeshwar-darshan",
    image: "/images/nashik-trimbakeshwar.jpg",
    tagline: "Nashik to Nashik Trimbakeshwar Taxi Services",
    company: "Nashik Mumbai Cab",
    intro: "",
    popularCity: true,
    popularCityTitle: "Trimbakeshwar",
    fleetDescription: "",
    longDistance: {
      heading: "",
      content: [
        "Trimbakeshwar is a religious center having one of the twelve Jyotirlingas. The extraordinary feature of the Jyotirlinga located here is its three faces embodying Lord Brahma, Lord Vishnu, and Lord Rudra. Due to the excessive use of water, the linga has started to erode. It is said that this erosion symbolizes the eroding nature of human society. The Lingas are covered by a jeweled crown which is placed over the Gold Mask of Tridev (Brahma Vishnu Mahesh).",
        "Planning a quick trip to Trimbakeshwar from Nashik? Have you thought about how you’re going to commute with your entire family in a convenient and comfortable way? We can help. How? With the best of car rental services from Nashik to Nasik Trimbakeshwar.",
        "We provide Nashik to nasik trimbakeshwar taxi services at awesome offers. Hire a cab from Nashik to nasik trimbakeshwar from us with best Nashik car services. experience our online taxi booking services from Nashik to nasik trimbakeshwar with reliable and polite drivers.Nashik Mumbai Cabs, the leading car rental services in Nashik has all the variety fleet of cars like swift dzire, tempo traveller, innova to get for a Nashik to nasik trimbakeshwar tour package at affordable fare.",
      ],
      closing: "Call us to book your Trimbakeshwar Darshan cab today!",
    },
    meta: {
      title: "Nashik to Trimbakeshwar Taxi | Nashik Mumbai Cabs",
      description:
        "Book comfortable taxi from Nashik to Nashik Trimbakeshwar Jyotirlinga. Fares from ₹2000. AC cabs, experienced drivers.",
    },
  },

  // ─── TOUR 03 ───────────────────────────────────────────────────────────────
  {
    id: "tour-03",
    title: "Kopargaon to Nashik Taxi Service",
    slug: "kopargaon-nashik-taxi",
    image: "/images/kopargaon-shirdi-taxi.jpg",
    tagline: "Kopargaon to Nashik Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "Need Onward Travel from Nashik?",
      content: [
        "Planning a quick trip from Kopargaon to Nashik? Wondering how to ensure a comfortable and convenient journey for your entire family? We’ve got you covered with top-notch car rental services! The distance from Kopargaon Railway Station to the Nashik Sai Baba Temple is approximately 18 kilometers, taking about 26 to 30 minutes by taxi. Renting a cab from Kopargaon to Nashik ensures a smooth, fast, and comfortable ride. Our cars are well-maintained and easy to drive, with professional drivers who are familiar with the route and ensure a pleasant travel experience.",
        "Kopargaon Railway Station, located in Ahmednagar district, Maharashtra, serves the town of Kopargaon and operates under the Solapur railway division of the Central Railway Zone. Sitting at an elevation of 508 meters, the station has two platforms and is part of an electrified single broad gauge line. With 74 trains stopping here, it’s a busy hub. We offer affordable and reliable taxi services from Kopargaon to Nashik, ensuring a stress-free journey.",
        "Hire a cab from Kopargaon to Nashik with us, enjoying the best car services in the region. Our online booking platform provides access to a variety of vehicles such as Swift Dzire, Tempo Travellers, and Innovas, all at competitive rates. Nashik Sai Yatra Cabs is dedicated to delivering high-quality service, both to our customers and our hardworking drivers, who strive to ensure a pleasant experience for every passenger.",
        "Depending on your travel needs and group size, we offer a range of vehicle options to choose from. Whether you need a one-way trip from Kopargaon to Nashik or a round trip back, our exceptional taxi services ensure a reliable and enjoyable journey.",
        "Nashik Mumbai Cabs, based in Nashik, Maharashtra, also offers online booking for taxis from Nashik to Kopargaon. Check out our Kopargaon to Nashik taxi fares, and let us make your travel easy and hassle-free.",
      ],
      closing: "Call us now for instant cab booking!",
    },
    meta: {
      title: "Kopargaon to Nashik Taxi | Nashik Mumbai Cabs",
      description:
        "Quick cab from Kopargaon Railway Station to Nashik Sai Baba Temple. Fares from ₹300. 24/7 service.",
    },
  },

  // ─── TOUR 04 ───────────────────────────────────────────────────────────────
  {
    id: "tour-04",
    title: "Nashik to Manmad Taxi Service",
    slug: "nashik-manmad-taxi",
    image: "/images/nashik-manmad.jpg",
    tagline: "Nashik to Manmad Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "Long Distance from Nashik?",
      content: [
        "Planning a quick trip from Nashik to Manmad? Wondering how to ensure a comfortable and convenient journey for your entire family? We’ve got you covered with top-notch car rental services! The distance from Nashik to Manmad is approximately 90 kilometers, taking about 2 hours by taxi. Renting a cab from Nashik to Manmad ensures a smooth, fast, and comfortable ride. Our cars are well-maintained and easy to drive, with professional drivers who are familiar with the route and ensure a pleasant travel experience.",
        "Manmad Railway Station, located in the Nashik district of Maharashtra, is a crucial railway junction operating under the Bhusawal railway division of the Central Railway Zone. Serving as a major transit hub connecting various parts of the country, it handles a massive volume of daily passengers. We offer affordable and reliable taxi services from Nashik to Manmad, ensuring a stress-free journey.",
        "Hire a cab from Nashik to Manmad with us, enjoying the best car services in the region. Our online booking platform provides access to a variety of vehicles such as Swift Dzire, Tempo Travellers, and Innovas, all at competitive rates. Nashik Mumbai Cab is dedicated to delivering high-quality service, both to our customers and our hardworking drivers, who strive to ensure a pleasant experience for every passenger.",
        "Depending on your travel needs and group size, we offer a range of vehicle options to choose from. Whether you need a one-way trip from Nashik to Manmad or a round trip back, our exceptional taxi services ensure a reliable and enjoyable journey.",
        "Nashik Mumbai Cabs, based in Nashik, Maharashtra, offers seamless online booking for taxis from Nashik to Manmad and back. Check out our Nashik to Manmad taxi fares, and let us make your travel easy and hassle-free.",
      ],
      closing: "Call us for bookings!",
    },
    meta: {
      title: "Nashik to Manmad Taxi | Nashik Mumbai Cabs",
      description:
        "Affordable cab from Nashik to Manmad. Fares from ₹1800. 24/7 pickup.",
    },
  },

  // ─── TOUR 05 ───────────────────────────────────────────────────────────────
  {
    id: "tour-05",
    title: "Nashik to Bhimashankar Darshan",
    slug: "Nashik-bhimashankar-taxi",
    image: "/images/nashik-bhimashankar.jpg",
    tagline: "Nashik to Bhimashankar Jyotirlinga Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: true,
    popularCityTitle: "Bhimashankar",
    longDistance: {
      heading: "Combine with Pune Trip",
      content: [
        "We provide Nashik to Bhimashankar taxi services at awesome offers. Hire a cab from Nashik to Bhimashankar from us with the best Nashik car services. experience our online cab booking services from Nashik to Bhimashankar with reliable and polite drivers. Nashik Sai Yatra Cabs, the leading car rental services in Nashik has all the variety fleet of cars like Swift Dzire, tempo traveler, Innova to hire for a taxi from Nashik to Bhimashankar at affordable rates",
        "Bhimashankar Temple is a Jyotirlinga shrine located 50 km northwest of Khed, near Pune, in India. It is located 127 km from Shivaji Nagar (Pune) in the Ghat region of the Sahyadri hills. Bhimashankar is also the source of the river Bhima, which flows southeast and merges with the Krishna river near Raichur. The other Jyotirlinga shrines in Maharashtra are Vaidyanath near Parli Dist Beed, Trimbakeshwara near Nashik, Grishneshwar near Aurangabad and Aundha Nagnath Temple in Hingoli, Nagnaath in Aundh built by Pandav brothers in one night during their exile",
      ],
      closing: "Ask us about combo packages!",
    },
    meta: {
      title: "Nashik to Bhimashankar Taxi | Nashik Mumbai Cabs",
      description:
        "Cab from Nashik to Bhimashankar Jyotirlinga. Expert hill drivers. Fares from ₹3500.",
    },
  },

  // ─── TOUR 06 ───────────────────────────────────────────────────────────────
  {
    id: "tour-06",
    title: "Nashik to Ahmednagar Taxi Service",
    slug: "nashik-ahmednagar-taxi",
    image: "/images/nashik-ahmednagar.jpg",
    tagline: "Nashik to Ahmednagar Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "More Destinations from Ahmednagar",
      content: [
        "Nashik Mumbai Cabs provides Budget Cabs & Taxi on Rent from Nashik to Ahmednagar with roundtrip journey from Nashik.",
        "We provide Nashik to Ahmednagar taxi services with the lowest fare. Hire a cab from Nashik to Ahmednagar from us with the best local car services. Experience our online cab booking services from Nashik to Ahmednagar with reliable and polite drivers. Nashik Mumbai Cabs, the leading car rental travel services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a taxi from Nashik to Ahmednagar at affordable rates. Located in Maharashtra, the Ahmednagar District is at a distance of approximately 120 km from Nashik.",
      ],
      closing: "Call us for all your travel needs!",
    },
    meta: {
      title: "Ahmednagar to Nashik Taxi | Nashik Mumbai Cabs",
      description:
        "Reliable cab from Ahmednagar to Nashik. Fares from ₹1200. Book now.",
    },
  },

  // ─── TOUR 07 ───────────────────────────────────────────────────────────────
  {
    id: "tour-07",
    title: "Nashik to Chhatrapati Sambhajinagar Ajanta Ellora Caves",
    slug: "nashik-chhatrapati-sambhajinagar-ajanta-ellora",
    image: "/images/nashik-aurangabad.jpg",
    tagline: "Nashik to Chhatrapati Sambhajinagar Ajanta Ellora Taxi Service",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "Perfect for a 2-Day Tour",
      content: [
        "The Ajanta Caves in the Chhatrapati Sambhajinagar (Aurangabad) district of Maharashtra state of India are about 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 or 650 CE. The caves include paintings and sculptures described by the government Archaeological Survey of India as “the finest surviving examples of Indian art, particularly painting”, which are masterpieces of Buddhist religious art, with figures of the Buddha and depictions of the Jataka tales.",
        "A few of the world heritage sites in Maharashtra are located at Chhatrapati Sambhajinagar (Aurangabad), including Ajanta-Ellora and Bibi ka Maqbara. It is just a 4-5 hour journey from Nashik. If your weekend tour from Nashik is planned on a Saturday, we recommend an excellent extended tour to Ajanta-Ellora. How to travel? Booking a full day car for a quick, convenient, comfortable, and affordable Nashik to Ajanta-Ellora Cab caves tour is the best option you can choose over bus and train.",
        "Nashik Mumbai Cabs provides Nashik taxi and Nashik cab services for local and outstation destinations. Book budget Cabs in Nashik or hire taxi rental services at a very affordable rate from the most trusted leading car rental service provider in Nashik and surrounding areas at a very economical fare. We offer one of the most affordable and comfortable cab services in the city, with multiple tour packages available as per your budget so you can plan your ride accordingly.",
        "Our drivers appreciate and enjoy the journey with each of our customers, keeping a primary responsibility for a safer journey & scheduled arrival at nearby places around Nashik, or pickup/drop-off services to nearby airports, railway stations, or tourist places with transparent prices.",
      ],
      closing: "Ask about our 2-day package deals!",
    },
    meta: {
      title:
        "Nashik to Chhatrapati Sambhajinagar Ajanta Ellora Taxi | Nashik Mumbai Cabs",
      description:
        "Cab from Nashik to Ajanta Ellora Caves Aurangabad. Heritage day tour. Fares from ₹2500.",
    },
  },

  // ─── TOUR 08 ───────────────────────────────────────────────────────────────
  {
    id: "tour-08",
    title: "Nashik to Verul Car Rental / Taxi Service",
    slug: "nashik-verul-taxi",
    image: "/images/nashik-verul.jpg",
    tagline: "Verul Car Rental",
    company: "Nashik Mumbai Cab",
    popularCity: true,
    popularCityTitle: "Verul",
    longDistance: {
      heading: "Why Choose Nashik Mumbai Cab?",
      content: [
        "We provide Nashik to Verul taxi services at awesome offers. Hire a cab from Nashik to Verul from us with the best local car services. Experience our online cab booking services from Nashik to Verul with reliable and polite drivers. Nashik Mumbai Cabs, the leading car rental services in Nashik, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a taxi from Nashik to Verul at affordable rates.",
        "Nashik Mumbai Cabs is the premier provider of outstation & local car rental offerings, featuring specialized Nashik to Verul car rentals. We offer highly customized & transparent service at a lower rate in comparison with traditional tour operators. We leverage modern booking systems to ensure you get the absolute best value-to-cost equation.",
        "Offering premium touring options from Nashik, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
      ],
      closing: "Call us now for instant cab booking!",
    },
    meta: {
      title: "Nashik to Verul Ellora Taxi | Nashik Mumbai Cabs",
      description:
        "Cab from Nashik to Verul Ellora Caves. Day trip fares from ₹2500.",
    },
  },

  // ─── TOUR 09 ───────────────────────────────────────────────────────────────
  {
    id: "tour-09",
    title: "Nashik to Ajanta Ellora Taxi Service",
    slug: "nashik-ajanta-ellora-taxi",
    image: "/images/nashik-ajanta.jpg",
    tagline: "Nashik to Ajanta & Ellora Combined Tour",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "Perfect Weekend Getaway from Nashik",
      content: [
        "We provide Nashik to Ajanta Ellora Car Rental services at awesome offers. Hire a cab from Nashik to Ajanta Ellora from us with the best local car services. Experience our online cab booking services from Nashik to Ajanta Ellora with reliable and polite drivers. Nashik Mumbai Cabs, the leading car rental services in Nashik, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a taxi from Nashik to Ajanta Ellora at affordable rates.",
        "For Nashik to Ajanta and Ellora Caves outstation (roundtrip) bookings, travelers can secure the best deals on our online cab/taxi booking platform, alongside transparent updates on cab fares and comprehensive tour package details. Nashik Mumbai Cabs provides both economy and luxurious cab options from Nashik to Ajanta and Ellora Caves, which are ideal for small family weekend trips, corporate outings, and long weekend getaways.",
      ],
      closing: "Book your heritage weekend now!",
    },
    meta: {
      title: "Nashik to Ajanta Ellora Taxi | Nashik Mumbai Cabs",
      description:
        "Combined Ajanta Ellora cave tour from Nashik. Fares from ₹4500.",
    },
  },

  // ─── TOUR 10 ───────────────────────────────────────────────────────────────
  {
    id: "tour-10",
    title: "Nashik City Car Rental / Taxi Service",
    slug: "nashik-city-taxi",
    image: "/images/nashik-city.jpg",
    tagline: "Nashik to Nashik Taxi Service",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "Mumbai via Nashik Package",
      content: [
        "We provide premium Nashik City Car Rental services at awesome offers. Hire a local or outstation cab from us to experience the best Nashik car rental services. Enjoy our seamless online cab booking system with highly reliable, professional, and polite drivers. Nashik Mumbai Cabs, the leading vehicle rental service in the region, boasts a diverse fleet of well-maintained cars—including Swift Dzire, Tempo Traveller, and Innova—available to hire at incredibly affordable rates.",
        "Whether you need a local city ride or an outstation roundtrip from Nashik, travelers can get the best deals right here on our online taxi booking platform. Check our competitive cab fares, transparent pricing structures, and customizable Nashik tour packages. Nashik Mumbai Cabs provides both economy and luxurious vehicle options, making us the ideal choice for small family weekend getaways, corporate outings, airport transfers, and long weekend trips.",
      ],
      closing: "Ask about our combo packages!",
    },
    meta: {
      title: "Nashik to Nashik Taxi | Nashik Mumbai Cabs",
      description:
        "Comfortable cab from Nashik to Nashik. Fares from ₹1800. Trimbakeshwar stop available.",
    },
  },

  // ─── TOUR 11 ───────────────────────────────────────────────────────────────
  {
    id: "tour-11",
    title: "Nashik to Mumbai Car Rental / Taxi Service",
    slug: "nashik-mumbai-taxi",
    image: "/images/nashik-mumbai.jpg",
    tagline: "Nashik to Mumbai Taxi Service",
    company: "Nashik Mumbai Cab",
    popularCity: true,
    popularCityTitle: "Gateway of India, Mumbai",
    longDistance: {
      heading: "Airport Drop Available",
      content: [
        "Nashik to Mumbai Cab is an important outstation route for both pilgrims and tourists, covering approximately 165 km via the Mumbai Nashik Expressway. Travelers can book Swift Dzire, Ertiga, Innova, or Tempo Traveller vehicles with experienced drivers for smooth transfers to Mumbai Airport (CSMIA) or any Mumbai location. Toll charges, GST, and driver allowances are included in our transparent pricing—no hidden costs.",
        "Our Nashik to Mumbai taxi service operates 24x7 with flexible drop-off and round-trip options. For pilgrims, we offer one-day darshan trips including Nashik, Trimbakeshwar, and other temples along the route. Corporate and family groups can choose sedan, SUV, or tempo traveller vehicles based on seating requirements. All vehicles are regularly serviced and sanitized for passenger safety on the highway. Book online or via WhatsApp with instant confirmation.",
      ],
      closing: "Book your Mumbai cab from Nashik now!",
    },
    meta: {
      title: "Nashik to Mumbai Taxi | Nashik Mumbai Cabs",
      description:
        "Outstation cab from Nashik to Mumbai. Expressway route. Fares from ₹3500.",
    },
  },

  // ─── TOUR 12 ───────────────────────────────────────────────────────────────
  {
    id: "tour-12",
    title: "Nashik to Pune Car Rental / Taxi Service",
    slug: "nashik-pune-taxi",
    image: "/images/nashik-pune.jpg",
    tagline: "Nashik to Pune Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: true,
    popularCityTitle: "Shaniwar Wada, Pune",
    longDistance: {
      heading: "Pune Airport Drop",
      content: [
        "Nashik Mumbai Cabs is the premier provider of outstation & local car rental offerings, featuring specialized Nashik to Pune taxi and cab services. We offer affordable car rental options from Nashik to the Pune Airport, as well as general city-to-city transfers between Nashik and Pune. We offer a highly customized & transparent service at a lower rate in comparison with traditional tour operators, leveraging modern booking systems to ensure you get the absolute best value-to-cost equation.",
        "Offering versatile touring options from Nashik, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
      ],
      closing: "Call us to plan your trip!",
    },
    meta: {
      title: "Nashik to Pune Taxi | Nashik Mumbai Cabs",
      description:
        "Outstation cab Nashik to Pune. Via Shani Shingnapur option. Fares from ₹3200.",
    },
  },

  // ─── TOUR 13 ───────────────────────────────────────────────────────────────
  {
    id: "tour-13",
    title: "Nashik to Lonavala Car Rental / Taxi Service",
    slug: "nashik-lonavala-taxi",
    image: "/images/nashik-lonavala.jpg",
    tagline: "Nashik to Lonavala Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: true,
    popularCityTitle: "Lonavala & Khandala",
    longDistance: {
      heading: "Combine with Pune",
      content: [
        "We provide premium Nashik to Lonavala Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab from Nashik to Lonavala from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who know the routes perfectly. Nashik Mumbai Cabs, the leading vehicle rental service provider in Nashik, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Nashik to Lonavala outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nashik to Lonavala tour packages.",
      ],
      closing: "Ask us about Lonavala-Pune combo!",
    },
    meta: {
      title: "Nashik to Lonavala Taxi | Nashik Mumbai Cabs",
      description:
        "Cab from Nashik to Lonavala hill station. Fares from ₹4500.",
    },
  },

  // ─── TOUR 14 ───────────────────────────────────────────────────────────────
  {
    id: "tour-14",
    title: "Nashik to Mahabaleshwar Car Rental / Taxi Service",
    slug: "nashik-mahabaleshwar-taxi",
    image: "/images/nashik-mahabaleshwar.jpg",
    tagline: "Nashik to Mahabaleshwar Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: true,
    popularCityTitle: "Mahabaleshwar",
    longDistance: {
      heading: "2-Day Mahabaleshwar Package",
      content: [
        "We provide premium Nashik to Mahabaleshwar Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab from Nashik to Mahabaleshwar from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth journey through the scenic ghats. Nashik Mumbai Cabs, the leading vehicle rental service provider in Nashik, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Ertigas, premium Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Nashik to Mahabaleshwar outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nashik to Mahabaleshwar tour packages. Nashik Mumbai Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family weekend getaways to the strawberry farms, office or corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your holiday from Nashik to Mahabaleshwar completely stress-free.",
      ],
      closing: "Enquire about our holiday packages!",
    },
    meta: {
      title: "Nashik to Mahabaleshwar Taxi | Nashik Mumbai Cabs",
      description:
        "Scenic cab from Nashik to Mahabaleshwar hill station. Fares from ₹4200.",
    },
  },

  // ─── TOUR 15 ───────────────────────────────────────────────────────────────
  {
    id: "tour-15",
    title: "Nashik to Goa Car Rental / Taxi Service",
    slug: "nashik-goa-taxi",
    image: "/images/nashik-goa.jpg",
    tagline: "Nashik to Goa Long-Distance Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: true,
    popularCityTitle: "Goa",
    longDistance: {
      heading: "The Ultimate Maharashtra-Goa Road Trip",
      content: [
        "We provide premium Nashik to Goa Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab from Nashik to Goa from us to experience the finest long-distance intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Nashik Mumbai Cabs, the leading vehicle rental service provider in Nashik, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Nashik to Goa outstation roundtrip or long-distance drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nashik to Goa tour packages. Nashik Mumbai Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family vacations, extended coastal road trips, and group holidays. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey from Nashik to Goa completely stress-free.",
      ],
      closing: "Book our Goa package now!",
    },
    meta: {
      title: "Nashik to Goa Taxi | Nashik Mumbai Cabs",
      description:
        "Long-distance cab from Nashik to Goa. Fares from ₹7500. Overnight option.",
    },
  },

  // ─── TOUR 16 ───────────────────────────────────────────────────────────────
  {
    id: "tour-16",
    title: "Nashik to Konkan Car Rental / Taxi Service",
    slug: "nashik-konkan-taxi",
    image: "/images/nashik-konkan.jpg",
    tagline: "Nashik to Konkan Coast Taxi Service",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "Konkan Weekend Package",
      content: [
        "We provide premium Nashik to Konkan Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab from Nashik to Konkan from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth journey down to the beautiful coastal belt. Nashik Mumbai Cabs, the leading vehicle rental service provider in Nashik, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Nashik to Konkan outstation roundtrip, beach holiday, or coastal tour, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nashik to Konkan tour packages. Nashik Mumbai Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for family beach vacations, nature weekend getaways, and extended coastal road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey from Nashik to Konkan completely stress-free.",
      ],
      closing: "Book your Konkan escape!",
    },
    meta: {
      title: "Nashik to Konkan Taxi | Nashik Mumbai Cabs",
      description:
        "Cab from Nashik to Konkan coast. Ganpatipule, Ratnagiri, Tarkarli. Fares from ₹5500.",
    },
  },

  // ─── TOUR 17 ───────────────────────────────────────────────────────────────
  {
    id: "tour-17",
    title: "Nashik to Nagpur Car Rental / Taxi Service",
    slug: "nashik-nagpur-taxi",
    image: "/images/nashik-nagpur.jpg",
    tagline: "Nashik to Nagpur Long-Distance Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "Vidarbha Extension Package",
      content: [
        "We provide premium Nashik to Nagpur Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab from Nashik to Nagpur from us to experience the finest long-distance intercity travel services in the region, taking full advantage of the fast Samruddhi Mahamarg route. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth, quick, and safe long-distance journey. Nashik Mumbai Cabs, the leading vehicle rental service provider in Nashik, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Nashik to Nagpur outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nashik to Nagpur tour packages. Nashik Mumbai Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family travel, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey from Nashik to Nagpur completely stress-free.",
      ],
      closing: "Plan your Vidarbha tour with us!",
    },
    meta: {
      title: "Nashik to Nagpur Taxi | Nashik Mumbai Cabs",
      description:
        "Long-distance cab from Nashik to Nagpur. Fares from ₹7000. Night travel available.",
    },
  },

  // ─── TOUR 18 ───────────────────────────────────────────────────────────────
  {
    id: "tour-18",
    title: "Nashik to Indore Car Rental / Taxi Service",
    slug: "nashik-indore-taxi",
    image: "/images/nashik-indore.webp",
    tagline: "Nashik to Indore Inter-State Cab Service",
    company: "Nashik Mumbai Cab",
    popularCity: false,
    longDistance: {
      heading: "Ujjain Extension",
      content: [
        "We provide premium Nashik to Indore Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab from Nashik to Indore from us to experience the finest long-distance intercity travel services across state lines. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Nashik Mumbai Cabs, the leading vehicle rental service provider in Nashik, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Nashik to Indore outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nashik to Indore tour packages. Nashik Mumbai Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family vacations, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey from Nashik to Indore completely stress-free.",
      ],
      closing: "Book your Nashik to Indore-Ujjain package!",
    },
    meta: {
      title: "Nashik to Indore Taxi | Nashik Mumbai Cabs",
      description:
        "Inter-state cab from Nashik to Indore MP. All-India permit. Fares from ₹7500.",
    },
  },
];

// Helper: Find a single tour object by its unique ID string (e.g., 'tour-01')
export function getTourById(id) {
  if (!id) return null;
  return toursData.find((t) => t.id === id) || null;
}

// Helper: Find a single tour object by its URL slug (used in Next.js dynamic routing components)
export function getTourBySlug(slug) {
  if (!slug) return null;
  return toursData.find((t) => t.slug === slug) || null;
}

// Helper: Extracts all available slugs for Next.js build-time pre-rendering configurations
export function getAllSlugs() {
  return toursData.map((t) => ({ slug: t.slug }));
}

// Utility Export: Maps your array to include absolute routing paths.
export const TaxiServicesCityToCity = toursData.map((tour) => ({
  ...tour,
  redirectUrl: `/cities/${tour.slug}`,
}));

export const footerLinksData = [
  {
    id: "taxi-services",
    title: "NASHIK TAXI SERVICES",
    links: [
      {
        text: "Nashik Airport Pickup Drop",
        href: "/airport/nashik-airport-local-taxi",
      },
      {
        text: "Nashik to Kopargaon Pickup Drop",
        href: "/cities/kopargaon-nashik-taxi",
      },
      {
        text: "Nashik to Manmad Taxi Service",
        href: "/cities/nashik-manmad-taxi",
      },
      {
        text: "Nashik to Bhimashankar Pickup Drop",
        href: "/cities/Nashik-bhimashankar-taxi",
      },
      {
        text: "Nashik To Shanishingnapur Pickup Drop",
        href: "/cities/shani-shingnapur-car-rental",
      },
    ],
  },
  {
    id: "local-services",
    title: "NASHIK TO NASHIK SERVICE",
    links: [
      {
        text: "Nashik Centeral Taxi Service",
        href: "/cities/nashik-city-taxi",
      },
      {
        text: "Nashik to Trimbakeshwar Taxi Service",
        href: "/cities/nashik-trimbakeshwar-darshan",
      },
      {
        text: "Nashik to Shirdi Airport Pickup Drop",
        href: "/airport/nashik-to-shirdi-airport-taxi",
      },
      {
        text: "Nashik to Manmad Pickup Drop",
        href: "/cities/nashik-manmad-taxi",
      },
    ],
  },
  {
    id: "outstation-cabs",
    title: "NASHIK TO OUTSTATION CABS",
    links: [
      {
        text: "Nashik to Mumbai Taxi Service",
        href: "/cities/nashik-mumbai-taxi",
      },
      {
        text: "Nashik to Pune Taxi Service",
        href: "/cities/nashik-pune-taxi",
      },
      {
        text: "Nashik to Chhatrapati Sambhajinagar Taxi Service",
        href: "/cities/nashik-chhatrapati-sambhajinagar-ajanta-ellora",
      },
      {
        text: "Nashik to Indore Taxi Service",
        href: "/cities/nashik-indore-taxi",
      },
    ],
  },
  {
    id: "bus-services",
    title: "NASHIK BUS SERVICES",
    links: [
      { text: "Best Bus Service in Nashik", href: "/bus/best-bus-service-in-nashik" },
      { text: "25 Seater Bus on Rent in Nashik", href: "/bus/25-seater-bus-on-rent-in-nashik" },
      { text: "32 Seater Bus on Rent in Nashik", href: "/bus/32-seater-bus-on-rent-in-nashik" },
      { text: "35 Seater Bus on Rent in Nashik", href: "/bus/35-seater-bus-on-rent-in-nashik" },
      { text: "45 Seater Bus on Rent in Nashik", href: "/bus/45-seater-bus-on-rent-in-nashik" },
      { text: "50-Seater Bus on Rent in Nashik", href: "/bus/50-seater-bus-on-rent-in-nashik" },
      { text: "Mini Bus on Rent in Nashik", href: "/bus/mini-bus-on-rent-in-nashik" },
      { text: "Ac bus booking in nashik", href: "/bus/ac-bus-booking-in-nashik" },
    ],
  },
];

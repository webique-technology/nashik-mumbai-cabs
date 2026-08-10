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
      "We provide Budget Mahindra Xylo/Scorpio Cab rentals ensuring premium comfort and spacious legroom. Highly ideal for family packages, outstation tours, and business transit, our vehicles come fully equipped with modern amenities. Get clean Cabs accompanied by our highly experienced local drivers-cum-guides.",
    imageSrc: "/images/mahindra-xylo.avif",
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
    notes:
      "Toyota Innova Car Rental, Premium SUV Hire for Long Trips, Nashik Mumbai Pune Shirdi Airport Drop Cab, Affordable Innova Tour Packages.",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
    notes:
      "Budget Multi-Utility Vehicle Booking, Chevrolet Tavera Rental for Pilgrimages, Large Group Cab Booking, Economical Outstation Cab.",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
    notes:
      "Maruti Ertiga Rental Online, Cheap 7 Seater Cab Booking, Intercity Hybrid Cab Hire, Affordable Family Tour Vehicle.",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
    notes:
      "Hyundai Verna Sedan Booking, Premium Luxury Cab Rental, Outstation Executive Sedan Cab, Local Corporate Tour Packages.",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
    notes:
      "Swift Dzire Online Booking, Budget Sedan Cab Hire, Fast Airport Pick & Drop, Economical One-Way Cab Services.",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
    notes:
      "Hyundai Aura Cab Services, Affordable Compact Sedan Rentals, Railway Station Connection Cab, Lowest Fare Premium Sedan.",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
    notes:
      "Indica Vista Hatchback Hire, Cheapest Local Car Booking, Small Family Tour Cab, Short Distance Economical Ride.",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
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
    providerFallback: "Nashik Mumbai Pune Shirdi Cabs",
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
// tourData.js — Complete dynamic tour data
// tourData.js — Complete dynamic tour data
export const toursData = [
  // ─── TOUR 01 ───────────────────────────────────────────────────────────────
  {
    id: "tour-01",
    title: "Shani Shingnapur Car Rental Packages",
    slug: "shani-shingnapur-car-rental",
    image: "/images/shani-shingnapur.jpg",
    tagline: "Shani Shingnapur Cab Services",
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Shani Shingnapur",
    intro:
      "At Nashik Mumbai Pune Shirdi Cab, we offer budget-friendly Cab rentals for your journey to Shani Shingnapur. Whether you're planning a roundtrip or a one-way ride, we provide the most reliable and affordable Cab services for this sacred journey.",
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
          "At Nashik Mumbai Pune Shirdi Cab, we prioritize your safety, comfort, and satisfaction. Our services include:",
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
          "For a comfortable and smooth journey to Shani Shingnapur, book your Cab with Nashik Mumbai Pune Shirdi Cab today!",
      },
    ],
    longDistance: {
      heading: "",
      content: "",
      closing: "Call us today for easy bookings and stress-free travel!",
    },
    meta: {
      title: "Shani Shingnapur Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    intro: "",
    popularCity: true,
    popularCityTitle: "Trimbakeshwar",
    fleetDescription: "",
    longDistance: {
      heading: "",
      content: [
        "Trimbakeshwar is a religious center having one of the twelve Jyotirlingas. The extraordinary feature of the Jyotirlinga located here is its three faces embodying Lord Brahma, Lord Vishnu, and Lord Rudra. Due to the excessive use of water, the linga has started to erode. It is said that this erosion symbolizes the eroding nature of human society. The Lingas are covered by a jeweled crown which is placed over the Gold Mask of Tridev (Brahma Vishnu Mahesh).",
        "Planning a quick trip to Trimbakeshwar? Have you thought about how you’re going to commute with your entire family in a convenient and comfortable way? We can help. How? With the best of car rental services to Trimbakeshwar.",
        "We provide Trimbakeshwar Cab services at awesome offers. Hire a cab to Trimbakeshwar from us with best car services. Experience our online Cab booking services to Trimbakeshwar with reliable and polite drivers. Nashik Mumbai Pune Shirdi Cabs, the leading car rental services in Nashik has all the variety fleet of cars like Swift Dzire, Tempo Traveller, Innova to get for a Trimbakeshwar tour package at affordable fare.",
      ],
      closing: "Call us to book your Trimbakeshwar Darshan cab today!",
    },
    meta: {
      title: "Trimbakeshwar Cab | Nashik Mumbai Pune Shirdi Cabs",
      description:
        "Book comfortable Cab to Trimbakeshwar Jyotirlinga. Fares from ₹2000. AC cabs, experienced drivers.",
    },
  },

  // ─── TOUR 03 ───────────────────────────────────────────────────────────────
  {
    id: "tour-03",
    title: "Kopargaon Cab Service",
    slug: "kopargaon-cab",
    image: "/images/kopargaon-shirdi-Cab.jpg",
    tagline: "Kopargaon to Nashik Cab Service",
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Need Onward Travel from Nashik?",
      content: [
        "Planning a quick trip from Kopargaon to Nashik? Wondering how to ensure a comfortable and convenient journey for your entire family? We’ve got you covered with top-notch car rental services! The distance from Kopargaon Railway Station to the Nashik Sai Baba Temple is approximately 18 kilometers, taking about 26 to 30 minutes by Cab. Renting a cab from Kopargaon to Nashik ensures a smooth, fast, and comfortable ride. Our cars are well-maintained and easy to drive, with professional drivers who are familiar with the route and ensure a pleasant travel experience.",
        "Kopargaon Railway Station, located in Ahmednagar district, Maharashtra, serves the town of Kopargaon and operates under the Solapur railway division of the Central Railway Zone. Sitting at an elevation of 508 meters, the station has two platforms and is part of an electrified single broad gauge line. With 74 trains stopping here, it’s a busy hub. We offer affordable and reliable Cab services from Kopargaon to Nashik, ensuring a stress-free journey.",
        "Hire a cab from Kopargaon to Nashik with us, enjoying the best car services in the region. Our online booking platform provides access to a variety of vehicles such as Swift Dzire, Tempo Travellers, and Innovas, all at competitive rates. Nashik Mumbai Pune Shirdi Cabs is dedicated to delivering high-quality service, both to our customers and our hardworking drivers, who strive to ensure a pleasant experience for every passenger.",
        "Depending on your travel needs and group size, we offer a range of vehicle options to choose from. Whether you need a one-way trip from Kopargaon to Nashik or a round trip back, our exceptional Cab services ensure a reliable and enjoyable journey.",
        "Nashik Mumbai Pune Shirdi Cabs, based in Nashik, Maharashtra, also offers online booking for Cabs to Kopargaon. Check out our Kopargaon to Nashik Cab fares, and let us make your travel easy and hassle-free.",
      ],
      closing: "Call us now for instant cab booking!",
    },
    meta: {
      title: "Kopargaon to Nashik Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Long Distance Travel?",
      content: [
        "Planning a quick trip to Manmad? Wondering how to ensure a comfortable and convenient journey for your entire family? We’ve got you covered with top-notch car rental services! The distance to Manmad is approximately 90 kilometers, taking about 2 hours by Cab. Renting a cab to Manmad ensures a smooth, fast, and comfortable ride. Our cars are well-maintained and easy to drive, with professional drivers who are familiar with the route and ensure a pleasant travel experience.",
        "Manmad Railway Station, located in the Nashik district of Maharashtra, is a crucial railway junction operating under the Bhusawal railway division of the Central Railway Zone. Serving as a major transit hub connecting various parts of the country, it handles a massive volume of daily passengers. We offer affordable and reliable Cab services to Manmad, ensuring a stress-free journey.",
        "Hire a cab to Manmad with us, enjoying the best car services in the region. Our online booking platform provides access to a variety of vehicles such as Swift Dzire, Tempo Travellers, and Innovas, all at competitive rates. Nashik Mumbai Pune Shirdi Cab is dedicated to delivering high-quality service, both to our customers and our hardworking drivers, who strive to ensure a pleasant experience for every passenger.",
        "Depending on your travel needs and group size, we offer a range of vehicle options to choose from. Whether you need a one-way trip to Manmad or a round trip back, our exceptional Cab services ensure a reliable and enjoyable journey.",
        "Nashik Mumbai Pune Shirdi Cabs offers seamless online booking for Cabs to Manmad and back. Check out our Manmad Cab fares, and let us make your travel easy and hassle-free.",
      ],
      closing: "Call us for bookings!",
    },
    meta: {
      title: "Manmad Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Bhimashankar",
    longDistance: {
      heading: "Combine with Pune Trip",
      content: [
        "We provide Bhimashankar Cab services at awesome offers. Hire a cab to Bhimashankar from us with the best car services. Experience our online cab booking services to Bhimashankar with reliable and polite drivers. Nashik Mumbai Pune Shirdi Cabs, the leading car rental services in Nashik has all the variety fleet of cars like Swift Dzire, Tempo Traveller, Innova to hire for a Cab to Bhimashankar at affordable rates.",
        "Bhimashankar Temple is a Jyotirlinga shrine located 50 km northwest of Khed, near Pune, in India. It is located 127 km from Shivaji Nagar (Pune) in the Ghat region of the Sahyadri hills. Bhimashankar is also the source of the river Bhima, which flows southeast and merges with the Krishna river near Raichur. The other Jyotirlinga shrines in Maharashtra are Vaidyanath near Parli Dist Beed, Trimbakeshwara near Nashik, Grishneshwar near Aurangabad and Aundha Nagnath Temple in Hingoli, Nagnaath in Aundh built by Pandav brothers in one night during their exile.",
      ],
      closing: "Ask us about combo packages!",
    },
    meta: {
      title: "Bhimashankar Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "More Destinations from Ahmednagar",
      content: [
        "Nashik Mumbai Pune Shirdi Cabs provides Budget Cabs & Cab on Rent to Ahmednagar with roundtrip journeys.",
        "We provide Ahmednagar Cab services with the lowest fare. Hire a cab to Ahmednagar from us with the best local car services. Experience our online cab booking services to Ahmednagar with reliable and polite drivers. Nashik Mumbai Pune Shirdi Cabs, the leading car rental travel services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Ahmednagar at affordable rates. Located in Maharashtra, the Ahmednagar District is at a distance of approximately 120 km from Nashik.",
      ],
      closing: "Call us for all your travel needs!",
    },
    meta: {
      title: "Ahmednagar Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Perfect for a 2-Day Tour",
      content: [
        "The Ajanta Caves in the Chhatrapati Sambhajinagar (Aurangabad) district of Maharashtra state of India are about 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 or 650 CE. The caves include paintings and sculptures described by the government Archaeological Survey of India as “the finest surviving examples of Indian art, particularly painting”, which are masterpieces of Buddhist religious art, with figures of the Buddha and depictions of the Jataka tales.",
        "A few of the world heritage sites in Maharashtra are located at Chhatrapati Sambhajinagar (Aurangabad), including Ajanta-Ellora and Bibi ka Maqbara. It is just a 4-5 hour journey. If your weekend tour is planned on a Saturday, we recommend an excellent extended tour to Ajanta-Ellora. How to travel? Booking a full day car for a quick, convenient, comfortable, and affordable Ajanta-Ellora Caves tour is the best option you can choose over bus and train.",
        "Nashik Mumbai Pune Shirdi Cabs provides Cab services for local and outstation destinations. Book budget Cabs or hire Cab rental services at a very affordable rate from the most trusted leading car rental service provider in the region at a very economical fare. We offer one of the most affordable and comfortable cab services in the city, with multiple tour packages available as per your budget so you can plan your ride accordingly.",
        "Our drivers appreciate and enjoy the journey with each of our customers, keeping a primary responsibility for a safer journey & scheduled arrival at nearby places, or pickup/drop-off services to nearby airports, railway stations, or tourist places with transparent prices.",
      ],
      closing: "Ask about our 2-day package deals!",
    },
    meta: {
      title:
        "Chhatrapati Sambhajinagar Ajanta Ellora Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Verul",
    longDistance: {
      heading: "Why Choose Nashik Mumbai Pune Shirdi Cab?",
      content: [
        "We provide Verul Cab services at awesome offers. Hire a cab to Verul from us with the best local car services. Experience our online cab booking services to Verul with reliable and polite drivers. Nashik Mumbai Pune Shirdi Cabs, the leading car rental services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Verul at affordable rates.",
        "Nashik Mumbai Pune Shirdi Cabs is the premier provider of outstation & local car rental offerings, featuring specialized Verul car rentals. We offer highly customized & transparent service at a lower rate in comparison with traditional tour operators. We leverage modern booking systems to ensure you get the absolute best value-to-cost equation.",
        "Offering premium touring options, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
      ],
      closing: "Call us now for instant cab booking!",
    },
    meta: {
      title: "Verul Ellora Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Perfect Weekend Getaway",
      content: [
        "We provide Ajanta Ellora Car Rental services at awesome offers. Hire a cab to Ajanta Ellora from us with the best local car services. Experience our online cab booking services to Ajanta Ellora with reliable and polite drivers. Nashik Mumbai Pune Shirdi Cabs, the leading car rental services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Ajanta Ellora at affordable rates.",
        "For Ajanta and Ellora Caves outstation (roundtrip) bookings, travelers can secure the best deals on our online cab/Cab booking platform, alongside transparent updates on cab fares and comprehensive tour package details. Nashik Mumbai Pune Shirdi Cabs provides both economy and luxurious cab options to Ajanta and Ellora Caves, which are ideal for small family weekend trips, corporate outings, and long weekend getaways.",
      ],
      closing: "Book your heritage weekend now!",
    },
    meta: {
      title: "Ajanta Ellora Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Mumbai Package",
      content: [
        "We provide premium City Car Rental services at awesome offers. Hire a local or outstation cab from us to experience the best car rental services. Enjoy our seamless online cab booking system with highly reliable, professional, and polite drivers. Nashik Mumbai Pune Shirdi Cabs, the leading vehicle rental service in the region, boasts a diverse fleet of well-maintained cars—including Swift Dzire, Tempo Traveller, and Innova—available to hire at incredibly affordable rates.",
        "Whether you need a local city ride or an outstation roundtrip, travelers can get the best deals right here on our online Cab booking platform. Check our competitive cab fares, transparent pricing structures, and customizable tour packages. Nashik Mumbai Pune Shirdi Cabs provides both economy and luxurious vehicle options, making us the ideal choice for small family weekend getaways, corporate outings, airport transfers, and long weekend trips.",
      ],
      closing: "Ask about our combo packages!",
    },
    meta: {
      title: "City Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
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
      title: "Mumbai Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Shaniwar Wada, Pune",
    longDistance: {
      heading: "Pune Airport Drop",
      content: [
        "Nashik Mumbai Pune Shirdi Cabs is the premier provider of outstation & local car rental offerings, featuring specialized Pune Cab and cab services. We offer affordable car rental options to the Pune Airport, as well as general city-to-city transfers to Pune. We offer a highly customized & transparent service at a lower rate in comparison with traditional tour operators, leveraging modern booking systems to ensure you get the absolute best value-to-cost equation.",
        "Offering versatile touring options, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
      ],
      closing: "Call us to plan your trip!",
    },
    meta: {
      title: "Pune Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Lonavala & Khandala",
    longDistance: {
      heading: "Combine with Pune",
      content: [
        "We provide premium Lonavala Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Lonavala from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who know the routes perfectly. Nashik Mumbai Pune Shirdi Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Lonavala outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Lonavala tour packages.",
      ],
      closing: "Ask us about Lonavala-Pune combo!",
    },
    meta: {
      title: "Lonavala Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Mahabaleshwar",
    longDistance: {
      heading: "2-Day Mahabaleshwar Package",
      content: [
        "We provide premium Mahabaleshwar Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Mahabaleshwar from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth journey through the scenic ghats. Nashik Mumbai Pune Shirdi Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Ertigas, premium Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Mahabaleshwar outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Mahabaleshwar tour packages. Nashik Mumbai Pune Shirdi Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family weekend getaways to the strawberry farms, office or corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your holiday to Mahabaleshwar completely stress-free.",
      ],
      closing: "Enquire about our holiday packages!",
    },
    meta: {
      title: "Mahabaleshwar Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Goa",
    longDistance: {
      heading: "The Ultimate Maharashtra-Goa Road Trip",
      content: [
        "We provide premium Goa Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Goa from us to experience the finest long-distance intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Nashik Mumbai Pune Shirdi Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Goa outstation roundtrip or long-distance drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Goa tour packages. Nashik Mumbai Pune Shirdi Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family vacations, extended coastal road trips, and group holidays. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Goa completely stress-free.",
      ],
      closing: "Book our Goa package now!",
    },
    meta: {
      title: "Goa Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Konkan Weekend Package",
      content: [
        "We provide premium Konkan Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Konkan from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth journey down to the beautiful coastal belt. Nashik Mumbai Pune Shirdi Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Konkan outstation roundtrip, beach holiday, or coastal tour, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Konkan tour packages. Nashik Mumbai Pune Shirdi Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for family beach vacations, nature weekend getaways, and extended coastal road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Konkan completely stress-free.",
      ],
      closing: "Book your Konkan escape!",
    },
    meta: {
      title: "Konkan Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Vidarbha Extension Package",
      content: [
        "We provide premium Nagpur Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Nagpur from us to experience the finest long-distance intercity travel services in the region, taking full advantage of the fast Samruddhi Mahamarg route. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth, quick, and safe long-distance journey. Nashik Mumbai Pune Shirdi Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Nagpur outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nagpur tour packages. Nashik Mumbai Pune Shirdi Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family travel, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Nagpur completely stress-free.",
      ],
      closing: "Plan your Vidarbha tour with us!",
    },
    meta: {
      title: "Nagpur Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Ujjain Extension",
      content: [
        "We provide premium Indore Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Indore from us to experience the finest long-distance intercity travel services across state lines. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Nashik Mumbai Pune Shirdi Cabs, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
        "For your next Indore outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Indore tour packages. Nashik Mumbai Pune Shirdi Cabs provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family vacations, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Indore completely stress-free.",
      ],
      closing: "Book your Indore-Ujjain package!",
    },
    meta: {
      title: "Indore Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: false,
    longDistance: {
      heading: "Connect via Samruddhi Mahamarg",
      content: [
        "We provide premium Jalna Car Rental services packed with unbeatable offers and budget-friendly packages. Hire a reliable cab to Jalna from us to experience smooth and comfortable travel via the direct Samruddhi Mahamarg expressway corridor. Enjoy our seamless online cab booking platform with polite, skilled drivers who ensure on-time pick-ups and safe highway transit. Nashik Mumbai Pune Shirdi Cabs offers a wide fleet including Swift Dzire, Ertiga, Innova Crysta, and Tempo Travellers for groups of all sizes.",
        "Located in the Marathwada region adjacent to Chhatrapati Sambhajinagar, Jalna is a key commercial center known for its steel industry and agricultural trade. Whether you need a one-way transfer, roundtrip ride, or an extended Marathwada heritage tour combined with Shirdi and Ajanta-Ellora, we provide transparent fares with no hidden costs.",
      ],
      closing: "Book your Jalna cab service today!",
    },
    meta: {
      title: "Jalna Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Igatpuri",
    longDistance: {
      heading: "Kasara Ghat & Monsoon Getaway",
      content: [
        "Escape to the serene hills with our specialized Igatpuri Car Rental services. Located along the Western Ghats between Mumbai and Nashik, Igatpuri is famous for the Vipassana International Academy (Dhammagiri), Bhatsa River Valley, Kalsubai Peak, and ancient forts like Tringalwadi. We offer flexible local sightseeing, resort pickup/drop, and outstation roundtrips at competitive prices.",
        "Whether you are traveling from Mumbai, Pune, or Nashik for a weekend retreat or monsoon getaway, Nashik Mumbai Pune Shirdi Cabs ensures a safe, comfortable drive through the Kasara Ghats with experienced mountain drivers. Choose from sedan models, spacious SUVs, or Tempo Travellers for group weekend tours.",
      ],
      closing: "Plan your Igatpuri hill retreat with us!",
    },
    meta: {
      title: "Igatpuri Cab | Nashik Mumbai Pune Shirdi Cabs",
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
    company: "Nashik Mumbai Pune Shirdi Cab",
    popularCity: true,
    popularCityTitle: "Thane Junction",
    longDistance: {
      heading: "Gateway to Mumbai & MMR Region",
      content: [
        "Nashik Mumbai Pune Shirdi Cabs offers dedicated Thane Car Rental services connecting Nashik, Pune, Shirdi, and the Mumbai Metropolitan Region. Situated at the crossroads of major national highways and the Samruddhi Mahamarg entrance corridor, Thane is a key transit destination for corporate travelers, commuters, and pilgrims.",
        "Enjoy door-to-door cab drops to all major Thane localities including Ghodbunder Road, Majiwada, Thane Railway Station, and Eastern Express Highway connectors. We offer clean AC cabs, 24/7 customer support, transparent toll/fare structures, and professional drivers experienced in suburban traffic management.",
      ],
      closing: "Call us now to book your Thane cab!",
    },
    meta: {
      title: "Thane Cab | Nashik Mumbai Pune Shirdi Cabs",
      description:
        "Direct cab to Thane from Nashik, Pune, or Shirdi. Fast highway connectivity. Fares from ₹2800.",
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
export const CabServicesCityToCity = toursData.map((tour) => ({
  ...tour,
  redirectUrl: `/cities/${tour.slug}`,
}));

export const footerLinksData = [
  {
    id: "Cab-services",
    title: "NASHIK Cab SERVICES",
    links: [
      {
        text: "Nashik Airport Pickup Drop",
        href: "/airport/nashik-airport-cab",
      },
      {
        text: "Nashik to Kopargaon Pickup Drop",
        href: "/cities/kopargaon-cab",
      },
      {
        text: "Nashik to Manmad Cab Service",
        href: "/cities/manmad-cab-service",
      },
      {
        text: "Nashik to Bhimashankar Pickup Drop",
        href: "/cities/bhimashankar-darshan-cab",
      },
      {
        text: "Nashik To Shanishingnapur Pickup Drop",
        href: "/cities/shani-shingnapur-car-rental",
      },
    ],
  },
  {
    id: "local-services",
    title: "Mumbai Cab SERVICE",
    links: [
      {
        text: "Mumbai to Igatpuri Cab Service",
        href: "/cities/igatpuri-hill-station-cab",
      },
      {
        text: "Mumbai to Trimbakeshwar Cab Service",
        href: "/cities/trimbakeshwar-darshan-cab",
      },
      {
        text: "Mumbai to Shirdi Airport Pickup Drop",
        href: "/airport/shirdi-airport-cab",
      },
      {
        text: "Mumbai to Manmad Pickup Drop",
        href: "/cities/manmad-cab-service",
      },
    ],
  },
  {
    id: "outstation-cabs",
    title: "Pune Cab SERVICE",
    links: [
      {
        text: "Pune to Mumbai Cab Service",
        href: "/cities/mumbai-car-rental-cab",
      },
      {
        text: "Pune to Goa Cab Service",
        href: "/cities/goa-car-rental-cab",
      },
      {
        text: "Pune to Chhatrapati Sambhajinagar Cab Service",
        href: "/cities/chhatrapati-sambhajinagar-ajanta-ellora-cab",
      },
      {
        text: "Pune to Indore Cab Service",
        href: "/cities/indore-car-rental-cab",
      },
    ],
  },
  {
    id: "bus-services",
    title: "NASHIK BUS SERVICES",
    links: [
      {
        text: "Best Bus Service in Nashik",
        href: "/bus/best-bus-service-in-nashik",
      },
      {
        text: "25 Seater Bus on Rent in Nashik",
        href: "/bus/25-seater-bus-on-rent-in-nashik",
      },
      {
        text: "32 Seater Bus on Rent in Nashik",
        href: "/bus/32-seater-bus-on-rent-in-nashik",
      },
      {
        text: "35 Seater Bus on Rent in Nashik",
        href: "/bus/35-seater-bus-on-rent-in-nashik",
      },
      {
        text: "45 Seater Bus on Rent in Nashik",
        href: "/bus/45-seater-bus-on-rent-in-nashik",
      },
      {
        text: "50-Seater Bus on Rent in Nashik",
        href: "/bus/50-seater-bus-on-rent-in-nashik",
      },
      {
        text: "Mini Bus on Rent in Nashik",
        href: "/bus/mini-bus-on-rent-in-nashik",
      },
      {
        text: "Ac bus booking in nashik",
        href: "/bus/ac-bus-booking-in-nashik",
      },
    ],
  },
];

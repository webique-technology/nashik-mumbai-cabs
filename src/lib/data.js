export const slugify = (text = "") => {
    return String(text)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")     // Replace spaces with -
        .replace(/[^\w-]+/g, "")  // Remove all non-word chars
        .replace(/--+/g, "-")     // Replace multiple - with single -
        .replace(/^-+/, "")       // Trim - from start
        .replace(/-+$/, "");      // Trim - from end
};

const rawCabsData = [
    {
        id: "cab-01",
        name: "Mahindra Xylo",
        title: "Book / Hire Xylo / Scorpio",
        routesSubtitle: "Premium Cab Services between Nashik, Mumbai, Shirdi, Pune, Shani Shingnapur, Manmad, Trimbakeshwar, and Shirdi Airport.",
        description: "We provide Budget Mahindra Xylo/Scorpio Cab rentals ensuring premium comfort and spacious legroom. Highly ideal for family packages, outstation tours, and business transit, our vehicles come fully equipped with modern amenities. Get clean taxis accompanied by our highly experienced local drivers-cum-guides.",
        imageSrc: "/images/mahindra-xylo.avif",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Mahindra Xylo/Scorpio Online Booking, Luxury Car Hire for Family Tours, Outstation Online Cab Booking all over Maharashtra, Best Economical Car Rental Services.",
        category: "SUV"
    },
    {
        id: "cab-02",
        name: "Toyota Innova",
        title: "Book / Hire Toyota Innova",
        routesSubtitle: "Premium Cab Services between Nashik, Mumbai, Shirdi, Pune, Shani Shingnapur, Manmad, Trimbakeshwar, and Shirdi Airport.",
        description: "Experience premium class travel with our spotless Toyota Innova fleet. Recognized across Maharashtra for elite comfort and unmatched highway safety, it is the top choice for long-distance outstation journeys, corporate transits, and multicity holiday itineraries.",
        imageSrc: "/images/toyota-innova.avif",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Toyota Innova Car Rental, Premium SUV Hire for Long Trips, Nashik Mumbai Airport Drop Taxi, Affordable Innova Tour Packages.",
        category: "SUV"
    },
    {
        id: "cab-03",
        name: "Chevrolet Tavera / Enjoy",
        title: "Book / Hire Chevrolet Tavera / Enjoy",
        routesSubtitle: "Affordable Multi-Utility Vehicle Rental Services across Maharashtra.",
        description: "Perfect for larger families and pilgrimage groups looking for budget-friendly alternatives without compromising structural seating space. Our Chevrolet fleet handles rough routes effortlessly, delivering a reliable commute to central tourist locations.",
        imageSrc: "/images/chevrolet-tavera-enjoy.avif",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Budget Multi-Utility Vehicle Booking, Chevrolet Tavera Rental for Pilgrimages, Large Group Cab Booking, Economical Outstation Taxi.",
        category: "Suv"
    },
    {
        id: "cab-04",
        name: "Maruti Ertiga",
        title: "Book / Hire Maruti Ertiga",
        routesSubtitle: "Smart 7-Seater Cab Services between Nashik, Mumbai, and Shirdi.",
        description: "The ideal modern 7-seater choice combining ultimate fuel efficiency with urban comfort. Perfect for mid-sized families traveling across busy city centers or taking swift intercity airport highway runs between Nashik and Mumbai.",
        imageSrc: "/images/maruti-ertiga.avif",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Maruti Ertiga Rental Online, Cheap 7 Seater Taxi Booking, Intercity Hybrid Cab Hire, Affordable Family Tour Vehicle.",
        category: "SUV"
    },
    {
        id: "cab-05",
        name: "Toyota Etios",
        title: "Book / Hire Toyota Etios",
        routesSubtitle: "Dependable Sedan Rental for Local Sightseeing and Outstation Tours.",
        description: "Our premier sedan selection offers exceptional trunk boot-space and unmatched cabin silence. It provides premium luxury aesthetics at highly competitive hatchback pricing for corporate travelers and couples.",
        imageSrc: "/images/toyota-etios.avif",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Toyota Etios Sedan Booking, Affordable Corporate Cab Rental, Outstation Executive Sedan Taxi, Local City Tour Packages.",
        category: "Sedan"
    },
    {
        id: "cab-06",
        name: "Swift Dzire",
        title: "Book / Hire Swift Dzire",
        routesSubtitle: "Most Popular Compact Sedan Service for Economical Highway Travels.",
        description: "Maharashtra's favorite choice for economic travel. Enjoy fully air-conditioned, well-maintained Swift Dzire cars perfect for dynamic solo tracking, swift couple getaways, and dynamic airport point-to-point transfers.",
        imageSrc: "/images/swift-dzire.avif",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Swift Dzire Online Booking, Budget Sedan Taxi Hire, Fast Airport Pick & Drop, Economical One-Way Cab Services.",
        category: "Sedan"
    },
    {
        id: "cab-07",
        name: "Indigo Ecs",
        title: "Book / Hire Indigo Ecs",
        routesSubtitle: "Highly Cost-Effective Sedan Alternatives for Regional Travel.",
        description: "A highly practical compact sedan built for straightforward regional transit. Features full air conditioning and an ultra-economical fare structure designed explicitly for standard point-to-point railway station connections.",
        imageSrc: "/images/indigo-ecs.avif",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Indigo Ecs Taxi Services, Super Budget Car Rentals, Railway Station Connection Cab, Lowest Fare Executive Sedan.",
        category: "Sedan"
    },
    {
        id: "cab-08",
        name: "Indica Vista",
        title: "Book / Hire Indica Vista",
        routesSubtitle: "Pocket-Friendly Compact Hatchback for Daily Point-to-Point Runs.",
        description: "The ultimate compact travel option optimized for city navigation and short-distance outstation runs. An exceptionally priced solution offering complete maneuverability for tight schedules.",
        imageSrc: "/images/indica-vista.jpg",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Indica Vista Hatchback Hire, Cheapest Local Car Booking, Small Family Tour Taxi, Short Distance Economical Ride.",
        category: "Sedan"
    },
    {
        id: "cab-09",
        name: "Tempo Traveller 10 Seater",
        title: "Book / Hire 10 Seater Tempo Traveller",
        routesSubtitle: "Luxury Group Mini-Bus Services for Pilgrimages and Family Outings.",
        description: "Travel together with your family without crowding. Our premium 10-seater Tempo Traveller offers pushback luxury seating, powerful dual air conditioning, and deep luggage hold areas for high-end comfort during religious tours.",
        imageSrc: "/images/tempo-traveller-10.jpg",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "10 Seater Tempo Traveller Booking, Luxury Mini Van Hire, Family Pilgrimage Transport, Premium Group Travel Service.",
        category: "Tempo Traveller"
    },
    {
        id: "cab-10",
        name: "Tempo Traveller 20 Seater",
        title: "Book / Hire 20 Seater Tempo Traveller",
        routesSubtitle: "Spacious Group Logistics for Corporate Retreats and Grand Family Events.",
        description: "Streamline transportation logistics for massive corporate groups or wedding functions. Features customized wide aisles, premium entertainment set systems, and customized shock suspension for maximum travel ease.",
        imageSrc: "/images/tempo-traveller-20.jpg",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "20 Seater Bus Rental Online, Corporate Event Logistics, Large Tempo Traveller Rental, Group Tour Packages Maharashtra.",
        category: "Tempo Traveller"
    },
    {
        id: "cab-11",
        name: "Tempo Traveller 25 Seater",
        title: "Book / Hire 25 Seater Tempo Traveller",
        routesSubtitle: "Heavy Duty Group Transport for Corporate and Tourism Sectors.",
        description: "Our largest mini-bus configuration optimized for peak stability and long highway operations. Features comfortable seating arrangements perfect for keeping big tourist circles together comfortably on interstate trips.",
        imageSrc: "/images/tempo-traveller-25.jpg",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "25 Seater Tempo Traveller Hire, Heavy Group Tour Logistics, Corporate Shuttle Services, Intercity Heavy Group Transit.",
        category: "Tempo Traveller"
    },
    {
        id: "cab-12",
        name: "Hire AC Bus",
        title: "Book / Hire Premium AC Bus Luxury Rentals",
        routesSubtitle: "Grand Commercial Bus Fleet for Corporate Excursions and Large Pilgrimage Tours.",
        description: "Large capacity luxury transport coaches for extensive events. Includes premium fully automated dual zone climate controllers, wide visual glass structures, and maximum luggage capacities overseen by veteran heavy vehicle captains.",
        imageSrc: "/images/hire-bus.jpg",
        providerFallback: "Nashik Mumbai Cabs",
        notes: "Luxury AC Bus Booking, Premium Coach Rentals Online, High Capacity Group Tourism, Marriage Event Fleet Logistics.",
        category: "Bus"
    }
];

export const CabsData = rawCabsData.map(cab => ({
    ...cab,
    slug: slugify(cab.name)
}));


const rawCityRoutes = [
    { id: "route-01", label: "Nashik to Panchavati" },
    { id: "route-02", label: "Nashik to Shirdi" },
    { id: "route-03", label: "Nashik to Mumbai" },
    { id: "route-04", label: "Nashik to Aurangabad" },
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
    { id: "route-36", label: "Nashik to Surat" }
];

// Map over the single array to dynamically inject functional cross-page target links using slugs
export const CityServicesRoute = rawCityRoutes.map(route => ({
    ...route,
    url: `/cities/${slugify(route.label)}`
}));


// mpost popular destination in maharashtra
const rawDestinations = [
    {
        id: "dest-01",
        title: "Panchavati, Nashik",
        count: 15,
        image: "/images/panchavati-nashik.webp"
    },
    {
        id: "dest-02",
        title: "Trimbakeshwar, Nashik",
        count: 5,
        image: "/images/trimbakeshwar.jpg"
    },
    {
        id: "dest-03",
        title: "Shirdi, Ahmednagar",
        count: 10,
        image: "/images/shirdi.jpg"
    },
    {
        id: "dest-04",
        title: "Igatpuri, Western Ghats",
        count: 25,
        image: "/images/igatpuri.jpg"
    },
    {
        id: "dest-05",
        title: "Lonavala & Khandala",
        count: 32,
        image: "/images/lonavala.jpg"
    },
    {
        id: "dest-06",
        title: "Mahabaleshwar, Satara",
        count: 19,
        image: "/images/mahabaleshwar.jpg"
    },
    {
        id: "dest-07",
        title: "Chhatrapati Sambhaji Nagar",
        count: 17,
        image: "/images/aurangabad.jpg"
    },
    {
        id: "dest-08",
        title: "Shani Shingnapur",
        count: 7,
        image: "/images/shani-shingnapur.jpg"
    },
    {
        id: "dest-09",
        title: "Gateway of India, Mumbai",
        count: 5,
        image: "/images/mumbai-gateway.jpg"
    }
];

// Automatically attach an isolated slug path to each destination entity dynamically
export const PopularDestinationsData = rawDestinations.map(dest => ({
    ...dest,
    slugPath: `/${slugify(dest.title)}`
}));
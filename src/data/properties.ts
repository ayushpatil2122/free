export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  description: string;
  imageUrl: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in Koregaon Park",
    address: "123 North Main Road, Koregaon Park, Pune 411001",
    price: 15000000,
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 1500,
    description: "Luxurious apartment in the heart of Koregaon Park, featuring high-end finishes and a beautiful view of the Mula-Mutha River.",
    imageUrl: "/Wagholi.jpeg"
  },
  {
    id: "2",
    title: "Spacious Villa in Kalyani Nagar",
    address: "456 Kalyani Nagar, Pune 411006",
    price: 45000000,
    bedrooms: 4,
    bathrooms: 4.5,
    squareFootage: 3500,
    description: "Elegant villa with a private garden, swimming pool, and modern amenities in the upscale Kalyani Nagar area.",
    imageUrl: "/Bavdhan.jpeg"
  },
  {
    id: "3",
    title: "Penthouse in Viman Nagar",
    address: "789 Viman Nagar Road, Pune 411014",
    price: 30000000,
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 2800,
    description: "Stunning penthouse with a terrace garden, offering panoramic views of the city skyline and the airport.",
    imageUrl: "/Baner.jpeg"
  },
  {
    id: "4",
    title: "Cozy Flat in Kothrud",
    address: "101 Paud Road, Kothrud, Pune 411038",
    price: 8000000,
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 1000,
    description: "Comfortable flat in a family-friendly neighborhood, close to parks, schools, and shopping centers.",
    imageUrl: "/Hadapsar.jpeg"
  },
  {
    id: "5",
    title: "Bungalow in Baner",
    address: "202 Baner Road, Pune 411045",
    price: 35000000,
    bedrooms: 5,
    bathrooms: 4,
    squareFootage: 4000,
    description: "Spacious bungalow with a large lawn, perfect for families looking for a suburban lifestyle with easy access to IT hubs.",
    imageUrl: "/Kothrud.jpeg"
  },
  {
    id: "6",
    title: "Studio Apartment in Hinjewadi",
    address: "303 Phase 1, Hinjewadi, Pune 411057",
    price: 4500000,
    bedrooms: 1,
    bathrooms: 1,
    squareFootage: 500,
    description: "Modern studio apartment ideal for young professionals working in the Hinjewadi IT Park, with excellent amenities.",
    imageUrl: "/Bibwewadi.jpeg"
  },
  {
    id: "7",
    title: "Heritage Home in Camp",
    address: "404 M.G. Road, Camp, Pune 411001",
    price: 25000000,
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 2200,
    description: "Beautifully restored heritage home in the historic Camp area, blending old-world charm with modern comforts.",
    imageUrl: "/Bavdhan.jpeg"
  },
  {
    id: "8",
    title: "Eco-Friendly Apartment in Aundh",
    address: "505 D.P. Road, Aundh, Pune 411007",
    price: 12000000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFootage: 1800,
    description: "Sustainable living space with solar panels, rainwater harvesting, and energy-efficient design in the green locality of Aundh.",
    imageUrl: "/Baner.jpeg"
  },
  {
    id: "9",
    title: "Farmhouse in Sinhagad Road",
    address: "606 Sinhagad Road, Pune 411041",
    price: 40000000,
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 3500,
    description: "Luxurious farmhouse on a spacious plot, offering a serene environment with easy access to the city center.",
    imageUrl: "/Hadapsar.jpeg"
  },
  {
    id: "10",
    title: "High-Rise Apartment in Magarpatta City",
    address: "707 Magarpatta City, Hadapsar, Pune 411028",
    price: 18000000,
    bedrooms: 3,
    bathrooms: 3,
    squareFootage: 1600,
    description: "Modern apartment in the self-contained township of Magarpatta City, with excellent amenities and security.",
    imageUrl: "/Wagholi.jpeg"
  }
];


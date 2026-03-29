const sampleListings = [

  // 1–10
  {
    title: "Cozy Beach House",
    description: "Peaceful stay near the sea.",
    category: "Beach",
    image: { filename: "listingimage1", url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=60&auto=format&fit=crop" },
    price: 2500, location: "Goa", country: "India",
    geometry: { type: "Point", coordinates: [73.8278, 15.4909] }
  },
  {
    title: "Modern Apartment",
    description: "City center fully furnished home.",
    category: "City",
    image: { filename: "listingimage2", url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=60&auto=format&fit=crop" },
    price: 1800, location: "Mumbai", country: "India",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
  },
  {
    title: "Mountain Cabin",
    description: "Quiet retreat with scenic views.",
    category: "Mountain",
    image: { filename: "listingimage3", url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=60&auto=format&fit=crop" },
    price: 2200, location: "Manali", country: "India",
    geometry: { type: "Point", coordinates: [77.1892, 32.2432] }
  },
  {
    title: "Luxury Villa",
    description: "Private pool and spacious rooms.",
    category: "Hotels",
    image: { filename: "listingimage4", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&q=60&auto=format&fit=crop" },
    price: 5000, location: "Bangalore", country: "India",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] }
  },
  {
    title: "Budget Room",
    description: "Simple and affordable stay.",
    category: "Hotels",
    image: { filename: "listingimage5", url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&q=60&auto=format&fit=crop" },
    price: 800, location: "Pune", country: "India",
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Lake Cottage",
    description: "Relax by the lake.",
    category: "Lake",
    image: { filename: "listingimage6", url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&q=60&auto=format&fit=crop" },
    price: 3000, location: "Udaipur", country: "India",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] }
  },
  {
    title: "Studio Flat",
    description: "Compact and modern.",
    category: "City",
    image: { filename: "listingimage7", url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=60&auto=format&fit=crop" },
    price: 1200, location: "Delhi", country: "India",
    geometry: { type: "Point", coordinates: [77.1025, 28.7041] }
  },
  {
    title: "Heritage Stay",
    description: "Traditional home experience.",
    category: "Historical",
    image: { filename: "listingimage8", url: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&q=60&auto=format&fit=crop" },
    price: 2700, location: "Jaipur", country: "India",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] }
  },
  {
    title: "Farmhouse",
    description: "Nature and calm surroundings.",
    category: "Forest",
    image: { filename: "listingimage9", url: "https://images.unsplash.com/photo-1472220625704-91e1462799b2?w=500&q=60&auto=format&fit=crop" },
    price: 2000, location: "Nashik", country: "India",
    geometry: { type: "Point", coordinates: [73.7898, 19.9975] }
  },
  {
    title: "Beach Villa",
    description: "Direct beach access.",
    category: "Beach",
    image: { filename: "listingimage10", url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500&q=60&auto=format&fit=crop" },
    price: 4500, location: "Kerala", country: "India",
    geometry: { type: "Point", coordinates: [76.2711, 10.8505] }
  },
  
{
  title: "Hill Retreat",
  description: "Top hill peaceful stay.",
  category: "Mountain",
  image: { filename: "listingimage11", url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=500&q=60&auto=format&fit=crop" },
  price: 3200, location: "Shimla", country: "India",
  geometry: { type: "Point", coordinates: [77.1734, 31.1048] }
},
{
  title: "Urban Loft",
  description: "Stylish modern loft.",
  category: "City",
  image: { filename: "listingimage12", url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&q=60&auto=format&fit=crop" },
  price: 2100, location: "Hyderabad", country: "India",
  geometry: { type: "Point", coordinates: [78.4867, 17.3850] }
},
{
  title: "Desert Camp",
  description: "Stay under the stars.",
  category: "Camping",
  image: { filename: "listingimage13", url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&q=60&auto=format&fit=crop" },
  price: 3500, location: "Jaisalmer", country: "India",
  geometry: { type: "Point", coordinates: [70.9083, 26.9157] }
},
{
  title: "Eco Stay",
  description: "Green and sustainable stay.",
  category: "Forest",
  image: { filename: "listingimage14", url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=500&q=60&auto=format&fit=crop" },
  price: 2600, location: "Coorg", country: "India",
  geometry: { type: "Point", coordinates: [75.8069, 12.3375] }
},
{
  title: "Serviced Apartment",
  description: "Hotel-like services.",
  category: "Hotels",
  image: { filename: "listingimage15", url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500&q=60&auto=format&fit=crop" },
  price: 2300, location: "Chennai", country: "India",
  geometry: { type: "Point", coordinates: [80.2707, 13.0827] }
},
{
  title: "Backpacker Hostel",
  description: "Affordable shared stay.",
  category: "Hotels",
  image: { filename: "listingimage16", url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=60&auto=format&fit=crop" },
  price: 600, location: "Rishikesh", country: "India",
  geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
},
{
  title: "Luxury Penthouse",
  description: "Top floor skyline view.",
  category: "City",
  image: { filename: "listingimage17", url: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=500&q=60&auto=format&fit=crop" },
  price: 6000, location: "Mumbai", country: "India",
  geometry: { type: "Point", coordinates: [72.8777, 19.0760] }
},
{
  title: "Forest Cabin",
  description: "Stay surrounded by greenery.",
  category: "Forest",
  image: { filename: "listingimage18", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=60&auto=format&fit=crop" },
  price: 2800, location: "Ooty", country: "India",
  geometry: { type: "Point", coordinates: [76.6950, 11.4064] }
},
{
  title: "Minimal Home",
  description: "Clean and simple design.",
  category: "City",
  image: { filename: "listingimage19", url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&q=60&auto=format&fit=crop" },
  price: 1500, location: "Ahmedabad", country: "India",
  geometry: { type: "Point", coordinates: [72.5714, 23.0225] }
},
{
  title: "Riverside Stay",
  description: "Calm river view.",
  category: "Lake",
  image: { filename: "listingimage20", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&q=60&auto=format&fit=crop" },
  price: 2400, location: "Haridwar", country: "India",
  geometry: { type: "Point", coordinates: [78.1642, 29.9457] }
},

// --- CAFES ---
{
  title: "Riverside Cafe Stay",
  description: "Coffee with river view.",
  category: "Cafes",
  image: { filename: "listingimage21", url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&q=60&auto=format&fit=crop" },
  price: 1300, location: "Rishikesh", country: "India",
  geometry: { type: "Point", coordinates: [78.2676, 30.0869] }
},
{
  title: "Mountain Cafe",
  description: "Cafe in hills.",
  category: "Cafes",
  image: { filename: "listingimage22", url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500&q=60&auto=format&fit=crop" },
  price: 1500, location: "Manali", country: "India",
  geometry: { type: "Point", coordinates: [77.1892, 32.2432] }
},

// --- BOATING ---
{
  title: "Boathouse Stay",
  description: "Stay on water.",
  category: "Boating",
  image: { filename: "listingimage23", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&q=60&auto=format&fit=crop" },
  price: 3200, location: "Kerala", country: "India",
  geometry: { type: "Point", coordinates: [76.2711, 10.8505] }
},

// --- RELAX ---
{
  title: "Spa Retreat",
  description: "Relaxing spa stay.",
  category: "Relax",
  image: { filename: "listingimage24", url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=60&auto=format&fit=crop" },
  price: 4000, location: "Kerala", country: "India",
  geometry: { type: "Point", coordinates: [76.2711, 10.8505] }
},

// --- HIKING ---
{
  title: "Hiking Camp",
  description: "Perfect trekking base.",
  category: "Hiking",
  image: { filename: "listingimage25", url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&q=60&auto=format&fit=crop" },
  price: 1800, location: "Manali", country: "India",
  geometry: { type: "Point", coordinates: [77.1892, 32.2432] }
},


];

module.exports = { data: sampleListings };
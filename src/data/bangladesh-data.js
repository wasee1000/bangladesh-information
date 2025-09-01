export const divisions = [
  {
    id: 'dhaka',
    name: 'Dhaka Division',
    districts: [
      'dhaka', 'faridpur', 'gazipur', 'gopalganj',
      'kishoreganj', 'madaripur', 'manikganj',
      'munshiganj', 'narayanganj', 'narsingdi',
      'rajbari', 'shariatpur', 'tangail'
    ],
    description: 'The capital division housing Dhaka, the vibrant heart of Bangladesh'
  },
  {
    id: 'chattogram',
    name: 'Chattogram Division',
    districts: [
      'bandarban', 'brahmanbaria', 'chandpur', 'chattogram',
      'comilla', 'coxsbazar', 'feni', 'khagrachhari',
      'lakshmipur', 'noakhali', 'rangamati'
    ],
    description: 'The commercial hub with the largest seaport and beautiful hill districts'
  },
  {
    id: 'rajshahi',
    name: 'Rajshahi Division',
    districts: [
      'bogura', 'joypurhat', 'naogaon', 'natore',
      'nawabganj', 'pabna', 'rajshahi', 'sirajganj'
    ],
    description: 'Known for silk production, archaeological sites, and rich cultural heritage'
  },
  {
    id: 'khulna',
    name: 'Khulna Division',
    districts: [
      'bagerhat', 'chuadanga', 'jessore', 'jhenaidah',
      'khulna', 'kushtia', 'magura', 'meherpur',
      'narail', 'satkhira'
    ],
    description: 'Gateway to the Sundarbans, the largest mangrove forest in the world'
  },
  {
    id: 'barishal',
    name: 'Barishal Division',
    districts: ['barguna', 'barishal', 'bhola', 'jhalokati', 'patuakhali', 'pirojpur'],
    description: 'The Venice of Bengal with numerous rivers and waterways'
  },
  {
    id: 'sylhet',
    name: 'Sylhet Division',
    districts: ['habiganj', 'moulvibazar', 'sunamganj', 'sylhet'],
    description: 'Famous for tea gardens, natural beauty, and spiritual heritage'
  },
  {
    id: 'rangpur',
    name: 'Rangpur Division',
    districts: [
      'dinajpur', 'gaibandha', 'kurigram', 'lalmonirhat',
      'nilphamari', 'panchagarh', 'rangpur', 'thakurgaon'
    ],
    description: 'Northern region known for agriculture and archaeological significance'
  },
  {
    id: 'mymensingh',
    name: 'Mymensingh Division',
    districts: ['jamalpur', 'mymensingh', 'netrokona', 'sherpur'],
    description: 'Rich in folk culture, agriculture, and educational institutions'
  }
];

export const districts = [
  {
    id: 'dhaka',
    name: 'Dhaka',
    division: 'dhaka',
    history: 'Dhaka, founded in the 7th century, became the Mughal capital of Bengal in 1608. Known as the "City of Mosques," it has been a center of trade, culture, and politics for centuries. The city played a crucial role during the Bengal Renaissance and the independence movement.',
    population: {
      current: 9500000,
      growth: '4.2% annually',
      urban: 8550000,
      rural: 950000
    },
    geography: {
      area: 1463.6,
      rivers: ['Buriganga', 'Turag', 'Dhaleshwari', 'Balu'],
      climate: 'Tropical monsoon climate with hot, humid summers and mild winters',
      coordinates: { lat: 23.8103, lng: 90.4125 }
    },
    economy: {
      industries: ['Textiles', 'Pharmaceuticals', 'Information Technology', 'Banking & Finance'],
      agriculture: ['Rice', 'Jute', 'Vegetables'],
      literacyRate: 74.6
    },
    tourism: {
      attractions: ['Lalbagh Fort', 'Ahsan Manzil', 'National Museum', 'Liberation War Museum', 'Sadarghat'],
      localFood: ['Biryani', 'Kacchi', 'Fuchka', 'Hilsa Curry'],
      festivals: ['Pohela Boishakh', 'Durga Puja', 'Eid celebrations']
    },
    landmarks: ['Lalbagh Fort', 'Ahsan Manzil', 'Jatiyo Sangsad Bhaban', 'Curzon Hall'],
    contacts: {
      dc: '+880-2-7169069',
      sp: '+880-2-9661688',
      hospital: '+880-2-8616804',
      tourist: '+880-2-8322950'
    }
  },
  {
    id: 'chattogram',
    name: 'Chattogram',
    division: 'chattogram',
    history: 'Chattogram, formerly Chittagong, is an ancient port city mentioned in 4th century Gupta inscriptions. It has been a major trading hub connecting Bengal with Southeast Asia. The city played a significant role during British colonial period and the 1971 Liberation War.',
    population: {
      current: 5200000,
      growth: '2.8% annually',
      urban: 4160000,
      rural: 1040000
    },
    geography: {
      area: 5282.9,
      rivers: ['Karnaphuli', 'Halda', 'Sangu'],
      climate: 'Tropical climate with heavy monsoon rainfall',
      coordinates: { lat: 22.3569, lng: 91.7832 }
    },
    economy: {
      industries: ['Shipping', 'Steel', 'Textiles', 'Shipbuilding'],
      agriculture: ['Rice', 'Tobacco', 'Cotton'],
      literacyRate: 71.5
    },
    tourism: {
      attractions: ['Chattogram Port', 'Foys Lake', 'Patenga Beach', 'Ethnological Museum'],
      localFood: ['Mezban', 'Shutki', 'Beef Rezala'],
      festivals: ['Boishabi', 'Buddha Purnima', 'Kali Puja']
    },
    landmarks: ['Chattogram Port', 'Shah Amanat Bridge', 'Court Building'],
    contacts: {
      dc: '+880-31-619101',
      sp: '+880-31-619191',
      hospital: '+880-31-626863',
      tourist: '+880-31-610522'
    }
  },
  {
    id: 'rajshahi',
    name: 'Rajshahi',
    division: 'rajshahi',
    history: 'Rajshahi, known as the Silk City, has a rich history dating back to ancient times. It was an important center during the Pala and Sena dynasties. The region is famous for its archaeological sites and was a major silk trading center during the British period.',
    population: {
      current: 850000,
      growth: '1.5% annually',
      urban: 680000,
      rural: 170000
    },
    geography: {
      area: 2407.0,
      rivers: ['Padma', 'Mahananda', 'Barnai'],
      climate: 'Semi-arid climate with less rainfall than other regions',
      coordinates: { lat: 24.3745, lng: 88.6042 }
    },
    economy: {
      industries: ['Silk', 'Textiles', 'Pharmaceuticals', 'Education'],
      agriculture: ['Mango', 'Rice', 'Sugarcane'],
      literacyRate: 78.2
    },
    tourism: {
      attractions: ['Paharpur', 'Varendra Research Museum', 'Rajshahi University', 'Podma Garden'],
      localFood: ['Silk Route Sweets', 'Mango Varieties', 'Doi'],
      festivals: ['Poila Boishakh', 'Kali Puja', 'Saraswati Puja']
    },
    landmarks: ['Paharpur Buddhist Monastery', 'Rajshahi University', 'Podma River'],
    contacts: {
      dc: '+880-721-772105',
      sp: '+880-721-772444',
      hospital: '+880-721-772170',
      tourist: '+880-721-750335'
    }
  },
  {
    id: 'sylhet',
    name: 'Sylhet',
    division: 'sylhet',
    history: 'Sylhet has a rich Islamic heritage, with the famous saint Hazrat Shah Jalal arriving in the 14th century. The region was known for its strategic importance and natural beauty. It became part of Assam during British rule before joining East Bengal.',
    population: {
      current: 500000,
      growth: '1.8% annually',
      urban: 400000,
      rural: 100000
    },
    geography: {
      area: 3490.4,
      rivers: ['Surma', 'Kushiyara', 'Manu'],
      climate: 'Subtropical highland climate with heavy monsoon',
      coordinates: { lat: 24.8949, lng: 91.8687 }
    },
    economy: {
      industries: ['Tea', 'Natural Gas', 'Tourism', 'Remittance'],
      agriculture: ['Tea', 'Rice', 'Betel Nut'],
      literacyRate: 56.6
    },
    tourism: {
      attractions: ['Ratargul Swamp Forest', 'Jaflong', 'Shrine of Hazrat Shah Jalal', 'Tea Gardens'],
      localFood: ['Seven Layer Tea', 'Shatkora', 'Doi-Chira'],
      festivals: ['Urs of Shah Jalal', 'Tea Festival', 'Poila Boishakh']
    },
    landmarks: ['Hazrat Shah Jalal Mazar', 'Ali Amjad Clock Tower', 'Keane Bridge'],
    contacts: {
      dc: '+880-821-717174',
      sp: '+880-821-710088',
      hospital: '+880-821-713620',
      tourist: '+880-821-725268'
    }
  }
];

// Sample districts for other divisions
export const sampleDistricts = [
  {
    id: 'coxsbazar',
    name: "Cox's Bazar",
    division: 'chattogram',
    history: "Named after Captain Hiram Cox, this coastal district is famous for having the world's longest natural sea beach. It has been a fishing community for centuries and is now Bangladesh's premier tourist destination.",
    population: {
      current: 2300000,
      growth: '1.9% annually',
      urban: 690000,
      rural: 1610000
    },
    geography: {
      area: 2491.9,
      rivers: ['Matamuhuri', 'Bakkhali', 'Reju Khal'],
      climate: 'Tropical monsoon climate with sea breeze',
      coordinates: { lat: 21.4272, lng: 92.0058 }
    },
    economy: {
      industries: ['Tourism', 'Fishing', 'Salt Production', 'Dried Fish'],
      agriculture: ['Rice', 'Betel Nut', 'Coconut'],
      literacyRate: 62.8
    },
    tourism: {
      attractions: ["Cox's Bazar Beach", 'Himchari', 'Inani Beach', 'Maheshkhali Island'],
      localFood: ['Shutki', 'Sea Fish Curry', 'Coconut Sweets'],
      festivals: ['Rash Mela', 'Poila Boishakh', 'Beach Festival']
    },
    landmarks: ["World's Longest Beach", 'Himchari Waterfall', 'Aggmeda Khyang'],
    contacts: {
      dc: '+880-341-62121',
      sp: '+880-341-62224',
      hospital: '+880-341-62319',
      tourist: '+880-341-62737'
    }
  }
];

export interface Property {
    id: string;
    title: string;
    type: 'Buy' | 'Rent' | 'New Project';
    price: string;
    location: string;
    beds: number;
    baths: number;
    area: string;
    description: string;
    images: string[];
    amenities: string[];
    featured: boolean;
    agent: {
        name: string;
        phone: string;
        email: string;
        whatsapp: string;
        image: string;
        title?: string;
    };
    details: {
        purpose: string;
        referenceNo: string;
        completionStatus: string;
        furnishing: string;
        developer: string;
        ownership: string;
        usage: string;
        balconySize?: string;
        parkingSpaces?: string;
        addedOn?: string;
        serviceCharges?: string;
    };
    building?: {
        name: string;
        parking: string;
        yearOfCompletion: string;
        totalFloors: string;
        elevators: string;
        swimmingPools: string;
    };
}

export const properties: Property[] = [
    {
        id: 'prop-1',
        title: '5242 Tower 1, Dubai Marina',
        type: 'Buy',
        price: '₹9,40,91,324',
        location: 'Dubai Marina, Dubai',
        beds: 2,
        baths: 2,
        area: '1,135',
        description: 'Aventa Realty is proud to offer this incredible property for sale, located in the most sought-after residential area, the Dubai Marina. This 5242 property is spacious, showcasing breath-taking scenery with floor-to-ceiling windows, allowing plenty of light — ideal for both relaxation and entertaining.',
        images: [
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
        ],
        amenities: ['Infinity Pool', 'Smart Home System', 'Wine Cellar', 'Ocean View', 'Private Garage', 'Security System', 'Balcony or Terrace', 'Gym', 'Sauna'],
        featured: true,
        agent: {
            name: 'Victor Figueiredo',
            phone: '+971 50 123 4567',
            email: 'victor.f@housen.com',
            whatsapp: '971501234567',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
            title: 'Quality Lister | Responsive Broker',
        },
        details: {
            purpose: 'For Sale',
            referenceNo: 'HSN-2025-001',
            completionStatus: 'Ready',
            furnishing: 'Furnished',
            developer: 'EMAAR DEVELOPMENT P.J.S.C.',
            ownership: 'Freehold',
            usage: 'Residential',
            balconySize: '108 sqft',
            parkingSpaces: '1',
            addedOn: '26 January 2026',
            serviceCharges: '₹518.63 / sqft',
        },
        building: {
            name: '5242 Tower 1',
            parking: '379',
            yearOfCompletion: '2021',
            totalFloors: '52',
            elevators: '6',
            swimmingPools: '1',
        },
    },
    {
        id: 'prop-2',
        title: 'Luxury Downtown Penthouse, Manhattan',
        type: 'Rent',
        price: '$8,500 / mo',
        location: 'Manhattan, New York',
        beds: 3,
        baths: 3,
        area: '2,800',
        description: 'A spectacular penthouse in the heart of downtown Manhattan. Enjoy 360-degree city views from your private wrap-around terrace. This highly sought-after building offers 24/7 concierge service, a private fitness center, and valet parking.',
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?q=80&w=2080&auto=format&fit=crop',
        ],
        amenities: ['City View', 'Private Terrace', '24/7 Concierge', 'Fitness Center', 'Valet Parking'],
        featured: true,
        agent: {
            name: 'Michael Chang',
            phone: '+1 (555) 987-6543',
            email: 'michael.c@housen.com',
            whatsapp: '15559876543',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        },
        details: {
            purpose: 'For Rent',
            referenceNo: 'HSN-2025-002',
            completionStatus: 'Ready',
            furnishing: 'Fully Furnished',
            developer: 'Related Companies',
            ownership: 'Leasehold',
            usage: 'Residential',
            balconySize: '200 sqft',
            parkingSpaces: '2',
            addedOn: '10 February 2026',
        },
    },
    {
        id: 'prop-3',
        title: 'Palm Jumeirah Beachfront Villa',
        type: 'Buy',
        price: '₹19,50,00,000',
        location: 'Palm Jumeirah, Dubai',
        beds: 5,
        baths: 6,
        area: '6,200',
        description: 'An extraordinary beachfront villa on the iconic Palm Jumeirah with direct private beach access, a stunning infinity pool overlooking the Arabian Gulf, and bespoke finishes throughout. This is luxury living redefined.',
        images: [
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
        ],
        amenities: ['Private Beach', 'Infinity Pool', 'Home Cinema', 'Smart Home', 'Maids Room', 'Gym', 'Sauna', 'Landscaped Garden'],
        featured: true,
        agent: {
            name: 'Priya Sharma',
            phone: '+971 55 234 5678',
            email: 'priya.s@housen.com',
            whatsapp: '971552345678',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
            title: 'Luxury Property Specialist',
        },
        details: {
            purpose: 'For Sale',
            referenceNo: 'HSN-2025-003',
            completionStatus: 'Ready',
            furnishing: 'Furnished',
            developer: 'Nakheel Properties',
            ownership: 'Freehold',
            usage: 'Residential',
            parkingSpaces: '4',
            addedOn: '05 January 2026',
            serviceCharges: '₹620 / sqft',
        },
    },
    {
        id: 'prop-4',
        title: 'Modern Studio, Business Bay',
        type: 'Rent',
        price: '₹1,20,000 / mo',
        location: 'Business Bay, Dubai',
        beds: 0,
        baths: 1,
        area: '490',
        description: 'A sleek, fully furnished studio in the heart of Business Bay. Floor-to-ceiling glass walls offer stunning canal and skyline views. Walk to DIFC, Dubai Mall, and Metro in minutes — perfect for professionals.',
        images: [
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?q=80&w=2080&auto=format&fit=crop',
        ],
        amenities: ['Canal View', 'High-Speed WiFi', 'Gym', 'Rooftop Pool', 'Concierge', 'Security'],
        featured: false,
        agent: {
            name: 'James Okonkwo',
            phone: '+971 56 345 6789',
            email: 'james.o@housen.com',
            whatsapp: '971563456789',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        },
        details: {
            purpose: 'For Rent',
            referenceNo: 'HSN-2025-004',
            completionStatus: 'Ready',
            furnishing: 'Fully Furnished',
            developer: 'Damac Properties',
            ownership: 'Freehold',
            usage: 'Residential',
            parkingSpaces: '1',
            addedOn: '15 February 2026',
        },
    },
    {
        id: 'prop-5',
        title: 'Creek Harbour Waterfront Apartment',
        type: 'New Project',
        price: '₹7,80,00,000',
        location: 'Dubai Creek Harbour',
        beds: 3,
        baths: 3,
        area: '1,850',
        description: 'Positioned in the vibrant Dubai Creek Harbour, this off-plan 3-bedroom apartment offers panoramic views of the Creek Tower and lagoon. Handover scheduled for Q4 2026 with payment plans available.',
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
        ],
        amenities: ['Creek View', 'Smart Home', 'Rooftop Infinity Pool', 'Kids Play Area', 'Retail Podium', 'Gym'],
        featured: false,
        agent: {
            name: 'Sophia Reeves',
            phone: '+971 54 456 7890',
            email: 'sophia.r@housen.com',
            whatsapp: '971544567890',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
            title: 'Off-Plan Expert',
        },
        details: {
            purpose: 'For Sale (Off-Plan)',
            referenceNo: 'HSN-2025-005',
            completionStatus: 'Off-Plan (Q4 2026)',
            furnishing: 'Unfurnished',
            developer: 'Emaar Properties',
            ownership: 'Freehold',
            usage: 'Residential',
            balconySize: '160 sqft',
            parkingSpaces: '2',
            addedOn: '20 January 2026',
        },
    },
    {
        id: 'prop-6',
        title: 'Elegant Townhouse, Jumeirah Village',
        type: 'Buy',
        price: '₹4,25,00,000',
        location: 'Jumeirah Village Circle, Dubai',
        beds: 4,
        baths: 4,
        area: '3,100',
        description: 'A beautifully designed 4-bedroom townhouse in the family-friendly community of JVC. Features a private garden, rooftop terrace, and high-end German kitchen. Close to top schools, parks, and retail.',
        images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
        ],
        amenities: ['Private Garden', 'Rooftop Terrace', 'German Kitchen', 'Maid\'s Room', 'Covered Parking', 'Community Pool'],
        featured: false,
        agent: {
            name: 'Victor Figueiredo',
            phone: '+971 50 123 4567',
            email: 'victor.f@housen.com',
            whatsapp: '971501234567',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        },
        details: {
            purpose: 'For Sale',
            referenceNo: 'HSN-2025-006',
            completionStatus: 'Ready',
            furnishing: 'Semi-Furnished',
            developer: 'Nshama',
            ownership: 'Freehold',
            usage: 'Residential',
            parkingSpaces: '2',
            addedOn: '01 February 2026',
        },
    },
    {
        id: 'prop-7',
        title: 'Downtown Loft, Burj Khalifa District',
        type: 'Rent',
        price: '₹3,50,000 / mo',
        location: 'Downtown Dubai',
        beds: 1,
        baths: 2,
        area: '920',
        description: 'A stunning high-floor loft with direct Burj Khalifa views. This architect-designed 1-bedroom+study features exposed concrete ceilings, custom joinery, and a wraparound balcony — steps from Dubai Fountain and Dubai Mall.',
        images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop',
        ],
        amenities: ['Burj Khalifa View', 'Wraparound Balcony', 'Pool', 'Gym', 'Valet Parking', 'Concierge'],
        featured: false,
        agent: {
            name: 'Michael Chang',
            phone: '+1 (555) 987-6543',
            email: 'michael.c@housen.com',
            whatsapp: '15559876543',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        },
        details: {
            purpose: 'For Rent',
            referenceNo: 'HSN-2025-007',
            completionStatus: 'Ready',
            furnishing: 'Fully Furnished',
            developer: 'Emaar Properties',
            ownership: 'Freehold',
            usage: 'Residential',
            balconySize: '90 sqft',
            parkingSpaces: '1',
            addedOn: '18 February 2026',
        },
    },
    {
        id: 'prop-8',
        title: 'Waterfront Residences, Sobha Hartland',
        type: 'New Project',
        price: '₹6,10,00,000',
        location: 'Sobha Hartland, Dubai',
        beds: 2,
        baths: 2,
        area: '1,280',
        description: 'Premium 2-bedroom apartments in the lush gated community of Sobha Hartland. Surrounded by 2.4M sq ft of greenery, lagoons, and world-class amenities. An unmatched lifestyle for nature-lovers inside the city.',
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
        ],
        amenities: ['Lagoon View', 'Private Beach', 'Organic Farm', 'Tennis Court', 'Yoga Studio', 'Kids Club'],
        featured: false,
        agent: {
            name: 'Sophia Reeves',
            phone: '+971 54 456 7890',
            email: 'sophia.r@housen.com',
            whatsapp: '971544567890',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
        },
        details: {
            purpose: 'For Sale (Off-Plan)',
            referenceNo: 'HSN-2025-008',
            completionStatus: 'Off-Plan (Q2 2027)',
            furnishing: 'Unfurnished',
            developer: 'Sobha Realty',
            ownership: 'Freehold',
            usage: 'Residential',
            balconySize: '130 sqft',
            parkingSpaces: '1',
            addedOn: '12 February 2026',
        },
    },
];

export const getFeaturedProperties = () => properties.filter(p => p.featured);
export const getPropertyById = (id: string) => properties.find(p => p.id === id);
export const searchProperties = (query: string, type?: string) => {
    return properties.filter(p => {
        const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.location.toLowerCase().includes(query.toLowerCase());
        const matchesType = type ? p.type === type : true;
        return matchesQuery && matchesType;
    });
};

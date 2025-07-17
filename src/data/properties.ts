import { Property } from '../types';

// Datos mock para las propiedades
export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Finca El Paraíso Verde',
    type: 'finca',
    description: 'Una hermosa finca rodeada de montañas y naturaleza exuberante. Perfecta para desconectarse y disfrutar de la tranquilidad del campo colombiano. Cuenta con amplios espacios verdes, piscina natural y múltiples actividades al aire libre.',
    shortDescription: 'Finca rodeada de montañas con piscina natural',
    location: {
      city: 'Guatapé',
      region: 'Antioquia',
      coordinates: { lat: 6.2308, lng: -75.1584 }
    },
    capacity: {
      maxGuests: 12,
      rooms: 4,
      bathrooms: 3
    },
    pricing: {
      basePrice: 450000,
      currency: 'COP',
      period: 'night'
    },
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Wi-Fi', 'Piscina', 'Cocina completa', 'Parrilla', 'Estacionamiento'],
    features: ['Vista a montañas', 'Jardín privado', 'Senderos ecológicos', 'Río cercano'],
    rating: 4.8,
    reviews: 24,
    availability: true,
    host: {
      name: 'Carlos Mendoza',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  },
  {
    id: '2',
    name: 'Glamping Bosque Encantado',
    type: 'glamping',
    description: 'Experiencia única de glamping en el corazón del bosque. Domos ecológicos con todas las comodidades modernas mientras te conectas con la naturaleza. Perfecto para parejas y familias que buscan aventura con confort.',
    shortDescription: 'Domos ecológicos en el corazón del bosque',
    location: {
      city: 'San Gil',
      region: 'Santander',
      coordinates: { lat: 6.5574, lng: -73.1375 }
    },
    capacity: {
      maxGuests: 4,
      rooms: 1,
      bathrooms: 1
    },
    pricing: {
      basePrice: 280000,
      currency: 'COP',
      period: 'night'
    },
    images: [
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Electricidad', 'Agua caliente', 'Camas cómodas', 'Fogata', 'Observación de estrellas'],
    features: ['Domo transparente', 'Baño privado', 'Terraza', 'Actividades nocturnas'],
    rating: 4.9,
    reviews: 18,
    availability: true,
    host: {
      name: 'Ana Sofía Ruiz',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  },
  {
    id: '3',
    name: 'Finca Las Palmas',
    type: 'finca',
    description: 'Finca tradicional con arquitectura colonial y amplios espacios para disfrutar en familia. Rodeada de cultivos de café y con vista panorámica al valle. Ideal para grupos grandes y celebraciones especiales.',
    shortDescription: 'Finca tradicional con cultivos de café',
    location: {
      city: 'Salento',
      region: 'Quindío',
      coordinates: { lat: 4.6389, lng: -75.5708 }
    },
    capacity: {
      maxGuests: 16,
      rooms: 6,
      bathrooms: 4
    },
    pricing: {
      basePrice: 650000,
      currency: 'COP',
      period: 'night'
    },
    images: [
      'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1022384/pexels-photo-1022384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Piscina', 'Zona de juegos', 'Cocina industrial', 'Salón de eventos', 'Parqueadero'],
    features: ['Arquitectura colonial', 'Cultivos de café', 'Vista al valle', 'Zona de camping'],
    rating: 4.7,
    reviews: 31,
    availability: true,
    host: {
      name: 'Roberto Castillo',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  },
  {
    id: '4',
    name: 'Glamping Ecopark',
    type: 'glamping',
    description: 'Experiencia glamping premium con cabañas elevadas sobre el bosque. Cada cabaña está diseñada para maximizar la conexión con la naturaleza mientras ofrece lujo y comodidad. Incluye actividades de aventura.',
    shortDescription: 'Cabañas elevadas sobre el bosque',
    location: {
      city: 'Jardín',
      region: 'Antioquia',
      coordinates: { lat: 5.5989, lng: -75.8217 }
    },
    capacity: {
      maxGuests: 6,
      rooms: 2,
      bathrooms: 2
    },
    pricing: {
      basePrice: 380000,
      currency: 'COP',
      period: 'night'
    },
    images: [
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Jacuzzi', 'Minibar', 'Aire acondicionado', 'Desayuno incluido', 'Guía turístico'],
    features: ['Cabaña elevada', 'Vista panorámica', 'Canopy', 'Spa natural'],
    rating: 4.9,
    reviews: 22,
    availability: false,
    host: {
      name: 'María Elena Vargas',
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  },
  {
    id: '5',
    name: 'Finca Aventura Extrema',
    type: 'finca',
    description: 'Finca especializada en turismo de aventura con múltiples actividades extremas. Perfecta para grupos que buscan adrenalina y diversión. Incluye equipos para deportes extremos y guías especializados.',
    shortDescription: 'Finca especializada en turismo de aventura',
    location: {
      city: 'San Rafael',
      region: 'Antioquia',
      coordinates: { lat: 6.0833, lng: -75.0333 }
    },
    capacity: {
      maxGuests: 20,
      rooms: 8,
      bathrooms: 6
    },
    pricing: {
      basePrice: 750000,
      currency: 'COP',
      period: 'night'
    },
    images: [
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Rafting', 'Canopy', 'Rappel', 'Paintball', 'Piscina olímpica'],
    features: ['Río para rafting', 'Montañas para escalada', 'Senderos extremos', 'Zona de camping'],
    rating: 4.6,
    reviews: 15,
    availability: true,
    host: {
      name: 'Alejandro Morales',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  },
  {
    id: '6',
    name: 'Glamping Serenidad',
    type: 'glamping',
    description: 'Glamping enfocado en bienestar y relajación. Tiendas de lujo con vistas al lago y acceso a actividades de spa y meditación. Perfecto para desconectar del estrés y reconectar contigo mismo.',
    shortDescription: 'Glamping de bienestar con vistas al lago',
    location: {
      city: 'Guasca',
      region: 'Cundinamarca',
      coordinates: { lat: 4.8667, lng: -73.8833 }
    },
    capacity: {
      maxGuests: 2,
      rooms: 1,
      bathrooms: 1
    },
    pricing: {
      basePrice: 320000,
      currency: 'COP',
      period: 'night'
    },
    images: [
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    amenities: ['Spa', 'Yoga', 'Meditación', 'Masajes', 'Alimentación orgánica'],
    features: ['Vista al lago', 'Tienda de lujo', 'Zona de meditación', 'Senderos contemplativos'],
    rating: 4.8,
    reviews: 28,
    availability: true,
    host: {
      name: 'Luz Marina Pérez',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  }
];
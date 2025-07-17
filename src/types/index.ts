// Tipos principales para la aplicación de turismo
export interface Property {
  id: string;
  name: string;
  type: 'finca' | 'glamping';
  description: string;
  shortDescription: string;
  location: {
    city: string;
    region: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  capacity: {
    maxGuests: number;
    rooms: number;
    bathrooms: number;
  };
  pricing: {
    basePrice: number;
    currency: 'COP' | 'USD';
    period: 'night' | 'person';
  };
  images: string[];
  amenities: string[];
  features: string[];
  rating: number;
  reviews: number;
  availability: boolean;
  host: {
    name: string;
    avatar: string;
    verified: boolean;
  };
}

export interface FilterOptions {
  type: 'all' | 'finca' | 'glamping';
  minPrice: number;
  maxPrice: number;
  guests: number;
  location: string;
}

export interface SearchParams {
  query: string;
  filters: FilterOptions;
}
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Star, Heart, Wifi, Car } from 'lucide-react';
import { Property } from '../../types';
import LazyImage from '../common/LazyImage';

interface PropertyCardProps {
  property: Property;
}

/**
 * Componente de tarjeta de propiedad con diseño moderno
 */
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const typeColors = {
    finca: 'bg-amber-100 text-amber-800',
    glamping: 'bg-emerald-100 text-emerald-800'
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Imagen principal */}
      <div className="relative h-64 overflow-hidden">
        <LazyImage
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full"
        />
        
        {/* Badge de tipo */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${typeColors[property.type]}`}>
          {property.type === 'finca' ? 'Finca' : 'Glamping'}
        </div>
        
        {/* Botón de favorito */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>
        
        {/* Indicador de disponibilidad */}
        <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
          property.availability 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {property.availability ? 'Disponible' : 'No disponible'}
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        {/* Título y ubicación */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {property.name}
          </h3>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location.city}, {property.location.region}</span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {property.shortDescription}
        </p>

        {/* Información de capacidad */}
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{property.capacity.maxGuests} huéspedes</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-1"></span>
            <span>{property.capacity.rooms} habitaciones</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-1"></span>
            <span>{property.capacity.bathrooms} baños</span>
          </div>
        </div>

        {/* Amenidades destacadas */}
        <div className="flex items-center space-x-3 mb-4">
          {property.amenities.includes('Wi-Fi') && (
            <div className="flex items-center text-gray-600">
              <Wifi className="h-4 w-4" />
            </div>
          )}
          {property.amenities.includes('Estacionamiento') && (
            <div className="flex items-center text-gray-600">
              <Car className="h-4 w-4" />
            </div>
          )}
          {property.amenities.length > 2 && (
            <span className="text-sm text-gray-500">
              +{property.amenities.length - 2} más
            </span>
          )}
        </div>

        {/* Rating y precio */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-900">
              {property.rating}
            </span>
            <span className="ml-1 text-sm text-gray-600">
              ({property.reviews} reseñas)
            </span>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(property.pricing.basePrice)}
            </div>
            <div className="text-sm text-gray-600">
              por noche
            </div>
          </div>
        </div>

        {/* Botón de ver más */}
        <Link
          to={`/propiedad/${property.id}`}
          className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 text-center block"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
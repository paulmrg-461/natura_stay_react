import React from 'react';
import { Property } from '../../types';
import PropertyCard from './PropertyCard';
import { Loader2 } from 'lucide-react';

interface PropertyListProps {
  properties: Property[];
  loading: boolean;
}

/**
 * Componente de lista de propiedades con estados de carga
 */
const PropertyList: React.FC<PropertyListProps> = ({ properties, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-12 w-12 animate-spin text-emerald-600" />
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-400 text-6xl mb-4">🏡</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          No se encontraron propiedades
        </h3>
        <p className="text-gray-600">
          Intenta ajustar los filtros de búsqueda para encontrar más opciones
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
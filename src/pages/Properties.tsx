import React from 'react';
import PropertyList from '../components/properties/PropertyList';
import PropertyFilters from '../components/properties/PropertyFilters';
import { useProperties } from '../hooks/useProperties';

/**
 * Página de listado de propiedades con filtros
 */
const Properties: React.FC = () => {
  const { properties, loading, filters, updateFilters, resetFilters } = useProperties();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Todas las Propiedades
          </h1>
          <p className="text-xl text-gray-600">
            Encuentra tu refugio perfecto entre nuestras {properties.length} propiedades disponibles
          </p>
        </div>

        {/* Filtros */}
        <PropertyFilters
          filters={filters}
          onFiltersChange={updateFilters}
          onReset={resetFilters}
        />

        {/* Lista de propiedades */}
        <PropertyList properties={properties} loading={loading} />
      </div>
    </div>
  );
};

export default Properties;
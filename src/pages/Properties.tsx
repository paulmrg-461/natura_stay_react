import React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyList from '../components/properties/PropertyList';
import PropertyFilters from '../components/properties/PropertyFilters';
import { useProperties } from '../hooks/useProperties';

/**
 * Página de listado de propiedades con filtros
 */
const Properties: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { properties, loading, filters, updateFilters, resetFilters } = useProperties();

  // Mostrar información de búsqueda activa
  const searchQuery = searchParams.get('search');
  const hasActiveSearch = searchQuery || filters.location;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {hasActiveSearch ? 'Resultados de Búsqueda' : 'Todas las Propiedades'}
          </h1>
          <div className="text-xl text-gray-600">
            {hasActiveSearch && (
              <div className="mb-2">
                <span className="font-medium">Buscando:</span> "{searchQuery || filters.location}"
              </div>
            )}
            <p>
              {properties.length > 0 
                ? `${properties.length} ${properties.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}`
                : 'No se encontraron propiedades con los criterios actuales'
              }
            </p>
          </div>
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
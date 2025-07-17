import React from 'react';
import { Filter, RefreshCw, Home, TreePine } from 'lucide-react';
import { FilterOptions } from '../../types';

interface PropertyFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: Partial<FilterOptions>) => void;
  onReset: () => void;
}

/**
 * Componente de filtros para propiedades
 */
const PropertyFilters: React.FC<PropertyFiltersProps> = ({ 
  filters, 
  onFiltersChange, 
  onReset 
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-emerald-600" />
          <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
        </div>
        <button
          onClick={onReset}
          className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Limpiar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* Tipo de propiedad */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de propiedad
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="all"
                checked={filters.type === 'all'}
                onChange={(e) => onFiltersChange({ type: e.target.value as any })}
                className="mr-2 text-emerald-600"
              />
              <span className="text-sm">Todas</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="finca"
                checked={filters.type === 'finca'}
                onChange={(e) => onFiltersChange({ type: e.target.value as any })}
                className="mr-2 text-emerald-600"
              />
              <Home className="h-4 w-4 mr-1" />
              <span className="text-sm">Fincas</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="type"
                value="glamping"
                checked={filters.type === 'glamping'}
                onChange={(e) => onFiltersChange({ type: e.target.value as any })}
                className="mr-2 text-emerald-600"
              />
              <TreePine className="h-4 w-4 mr-1" />
              <span className="text-sm">Glamping</span>
            </label>
          </div>
        </div>

        {/* Precio mínimo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio mínimo
          </label>
          <input
            type="range"
            min="0"
            max="1000000"
            step="50000"
            value={filters.minPrice}
            onChange={(e) => onFiltersChange({ minPrice: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-sm text-gray-600 mt-1">
            {formatPrice(filters.minPrice)}
          </div>
        </div>

        {/* Precio máximo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Precio máximo
          </label>
          <input
            type="range"
            min="0"
            max="1000000"
            step="50000"
            value={filters.maxPrice}
            onChange={(e) => onFiltersChange({ maxPrice: parseInt(e.target.value) })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-sm text-gray-600 mt-1">
            {formatPrice(filters.maxPrice)}
          </div>
        </div>

        {/* Número de huéspedes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Huéspedes
          </label>
          <select
            value={filters.guests}
            onChange={(e) => onFiltersChange({ guests: parseInt(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value={1}>1 huésped</option>
            <option value={2}>2 huéspedes</option>
            <option value={4}>4 huéspedes</option>
            <option value={6}>6 huéspedes</option>
            <option value={8}>8 huéspedes</option>
            <option value={10}>10+ huéspedes</option>
          </select>
        </div>

        {/* Ubicación */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buscar por nombre o ubicación
          </label>
          <input
            type="text"
            placeholder="Nombre de finca, ciudad o región..."
            value={filters.location}
            onChange={(e) => onFiltersChange({ location: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
          {filters.location && (
            <div className="text-xs text-gray-500 mt-1">
              Buscando en nombres de fincas, ciudades y regiones
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
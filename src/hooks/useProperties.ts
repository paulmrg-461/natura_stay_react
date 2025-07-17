import { useState, useEffect, useMemo } from 'react';
import { Property, FilterOptions } from '../types';
import { mockProperties } from '../data/properties';

/**
 * Hook personalizado para manejo de propiedades
 * Preparado para futuras integraciones con APIs externas
 */
export const useProperties = (initialFilters?: Partial<FilterOptions>) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    type: 'all',
    minPrice: 0,
    maxPrice: 1000000,
    guests: 1,
    location: '',
    ...initialFilters
  });

  // Simulación de carga de datos (preparado para API)
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProperties(mockProperties);
      } catch (err) {
        setError('Error al cargar las propiedades');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Propiedades filtradas
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesType = filters.type === 'all' || property.type === filters.type;
      const matchesPrice = property.pricing.basePrice >= filters.minPrice && 
                          property.pricing.basePrice <= filters.maxPrice;
      const matchesGuests = property.capacity.maxGuests >= filters.guests;
      const matchesLocation = !filters.location || 
                             property.location.city.toLowerCase().includes(filters.location.toLowerCase()) ||
                             property.location.region.toLowerCase().includes(filters.location.toLowerCase());

      return matchesType && matchesPrice && matchesGuests && matchesLocation;
    });
  }, [properties, filters]);

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      type: 'all',
      minPrice: 0,
      maxPrice: 1000000,
      guests: 1,
      location: ''
    });
  };

  return {
    properties: filteredProperties,
    allProperties: properties,
    loading,
    error,
    filters,
    updateFilters,
    resetFilters
  };
};
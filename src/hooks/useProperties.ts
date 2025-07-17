import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Property, FilterOptions } from '../types';
import { mockProperties } from '../data/properties';

/**
 * Hook personalizado para manejo de propiedades
 * Preparado para futuras integraciones con APIs externas
 */
export const useProperties = (initialFilters?: Partial<FilterOptions>) => {
  const [searchParams, setSearchParams] = useSearchParams();
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

  // Inicializar filtros desde URL params
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    const guestsParam = searchParams.get('guests');
    const checkinParam = searchParams.get('checkin');
    
    if (searchQuery || guestsParam || checkinParam) {
      setFilters(prev => ({
        ...prev,
        location: searchQuery || prev.location,
        guests: guestsParam ? parseInt(guestsParam) : prev.guests
      }));
    }
  }, [searchParams]);

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
      
      // Búsqueda mejorada: por nombre de finca, ciudad o región
      const searchTerm = filters.location.toLowerCase();
      const matchesLocation = !filters.location || 
                             property.name.toLowerCase().includes(searchTerm) ||
                             property.location.city.toLowerCase().includes(searchTerm) ||
                             property.location.region.toLowerCase().includes(searchTerm);

      return matchesType && matchesPrice && matchesGuests && matchesLocation;
    });
  }, [properties, filters]);

  const updateFilters = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    
    // Actualizar URL params si es necesario
    if (newFilters.location !== undefined) {
      const newSearchParams = new URLSearchParams(searchParams);
      if (newFilters.location) {
        newSearchParams.set('search', newFilters.location);
      } else {
        newSearchParams.delete('search');
      }
      setSearchParams(newSearchParams);
    }
  };

  const resetFilters = () => {
    setFilters({
      type: 'all',
      minPrice: 0,
      maxPrice: 1000000,
      guests: 1,
      location: ''
    });
    
    // Limpiar URL params
    setSearchParams({});
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
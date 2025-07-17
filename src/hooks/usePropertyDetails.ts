import { useState, useEffect } from 'react';
import { Property } from '../types';
import { mockProperties } from '../data/properties';

/**
 * Hook para obtener detalles de una propiedad específica
 */
export const usePropertyDetails = (propertyId: string) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        // Simular delay de API
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundProperty = mockProperties.find(p => p.id === propertyId);
        if (foundProperty) {
          setProperty(foundProperty);
        } else {
          setError('Propiedad no encontrada');
        }
      } catch (err) {
        setError('Error al cargar la propiedad');
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchProperty();
    }
  }, [propertyId]);

  return { property, loading, error };
};
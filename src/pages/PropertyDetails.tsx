import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePropertyDetails } from '../hooks/usePropertyDetails';
import { 
  MapPin, 
  Users, 
  Star, 
  Heart, 
  Share2, 
  Wifi, 
  Car, 
  Coffee,
  ArrowLeft,
  Calendar,
  MessageCircle,
  Shield,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import LazyImage from '../components/common/LazyImage';

/**
 * Página de detalles de propiedad
 */
const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { property, loading, error } = usePropertyDetails(id || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando detalles...</p>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏠</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Propiedad no encontrada
          </h2>
          <p className="text-gray-600 mb-6">
            La propiedad que buscas no existe o ha sido eliminada
          </p>
          <Link
            to="/propiedades"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Ver todas las propiedades
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navegación */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/propiedades"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a propiedades
        </Link>
      </div>

      {/* Galería de imágenes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
          <LazyImage
            src={property.images[currentImageIndex]}
            alt={property.name}
            className="w-full h-full"
          />
          
          {/* Controles de navegación */}
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>
            </>
          )}

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Acciones */}
          <div className="absolute top-4 right-4 flex space-x-3">
            <button className="p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors">
              <Share2 className="h-5 w-5 text-gray-800" />
            </button>
            <button className="p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-colors">
              <Heart className="h-5 w-5 text-gray-800 hover:text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Información principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.type === 'finca' 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {property.type === 'finca' ? 'Finca' : 'Glamping'}
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {property.name}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{property.location.city}, {property.location.region}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-gray-600 ml-1">({property.reviews} reseñas)</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {formatPrice(property.pricing.basePrice)}
                  </div>
                  <div className="text-gray-600">por noche</div>
                </div>
              </div>

              {/* Información de capacidad */}
              <div className="flex items-center space-x-6 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-gray-900">{property.capacity.maxGuests} huéspedes</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  <span className="text-gray-900">{property.capacity.rooms} habitaciones</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  <span className="text-gray-900">{property.capacity.bathrooms} baños</span>
                </div>
              </div>

              {/* Descripción */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenidades */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenidades</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Características especiales */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Características especiales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Información del anfitrión */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu anfitrión</h2>
              <div className="flex items-center space-x-4">
                <img
                  src={property.host.avatar}
                  alt={property.host.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {property.host.name}
                    </h3>
                    {property.host.verified && (
                      <Shield className="h-5 w-5 text-emerald-500" />
                    )}
                  </div>
                  <p className="text-gray-600">Anfitrión verificado</p>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>Enviar mensaje</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar de reserva */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {formatPrice(property.pricing.basePrice)}
                </div>
                <div className="text-gray-600">por noche</div>
              </div>

              {/* Disponibilidad */}
              <div className={`text-center mb-6 p-3 rounded-lg ${
                property.availability 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-red-50 text-red-800'
              }`}>
                {property.availability ? 'Disponible' : 'No disponible'}
              </div>

              {/* Formulario de reserva */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de entrada
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de salida
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Número de huéspedes
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>1 huésped</option>
                    <option>2 huéspedes</option>
                    <option>3 huéspedes</option>
                    <option>4 huéspedes</option>
                    <option>5+ huéspedes</option>
                  </select>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3">
                <button 
                  disabled={!property.availability}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:cursor-not-allowed"
                >
                  {property.availability ? 'Reservar ahora' : 'No disponible'}
                </button>
                
                <button className="w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Consultar disponibilidad
                </button>
              </div>

              {/* Nota informativa */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Esta propiedad está preparada para integraciones futuras con sistemas de reserva y pagos en línea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
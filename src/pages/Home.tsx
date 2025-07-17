import React from 'react';
import Hero from '../components/common/Hero';
import PropertyList from '../components/properties/PropertyList';
import { useProperties } from '../hooks/useProperties';
import { MapPin, Shield, Headphones, Award } from 'lucide-react';

/**
 * Página principal con hero y propiedades destacadas
 */
const Home: React.FC = () => {
  const { properties, loading } = useProperties();
  
  // Mostrar solo las primeras 6 propiedades en la página principal
  const featuredProperties = properties.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Sección de propiedades destacadas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Propiedades Destacadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestras mejores fincas y experiencias de glamping, 
              seleccionadas especialmente para ofrecerte momentos inolvidables
            </p>
          </div>
          
          <PropertyList properties={featuredProperties} loading={loading} />
          
          {/* Botón para ver más */}
          <div className="text-center mt-12">
            <a
              href="/propiedades"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Ver todas las propiedades
            </a>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir NaturaStay?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos especializamos en crear experiencias únicas que conectan 
              a nuestros huéspedes con la belleza natural de Colombia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition-colors">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ubicaciones Únicas
              </h3>
              <p className="text-gray-600">
                Propiedades en los destinos más hermosos y exclusivos de Colombia
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-colors">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Seguridad Garantizada
              </h3>
              <p className="text-gray-600">
                Todas nuestras propiedades son verificadas y cumplen con estándares de seguridad
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Soporte 24/7
              </h3>
              <p className="text-gray-600">
                Nuestro equipo está disponible las 24 horas para ayudarte en tu experiencia
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Calidad Premium
              </h3>
              <p className="text-gray-600">
                Experiencias cuidadosamente seleccionadas para garantizar tu satisfacción
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de testimonios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros huéspedes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonios reales de personas que han vivido experiencias únicas con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60"
                  alt="Usuario"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">María González</h4>
                  <p className="text-gray-600 text-sm">Bogotá</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Una experiencia increíble en la finca Las Palmas. La atención fue excepcional 
                y el lugar superó todas nuestras expectativas. Definitivamente volveremos."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=60"
                  alt="Usuario"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Carlos Rodríguez</h4>
                  <p className="text-gray-600 text-sm">Medellín</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "El glamping fue perfecto para nuestra luna de miel. La conexión con la naturaleza 
                y las comodidades modernas crearon la combinación perfecta."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60"
                  alt="Usuario"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Ana Martínez</h4>
                  <p className="text-gray-600 text-sm">Cali</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Excelente servicio y propiedades de alta calidad. La plataforma es muy fácil 
                de usar y el proceso de reserva fue muy sencillo."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
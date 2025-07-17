import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

/**
 * Componente Hero principal con búsqueda
 */
const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Paisaje natural colombiano"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Descubre la 
          <span className="text-emerald-400"> Magia</span>
          <br />
          de la Naturaleza
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Fincas exclusivas y experiencias de glamping en los destinos más hermosos de Colombia. 
          Conecta con la tranquilidad del campo.
        </p>

        {/* Formulario de búsqueda */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destino */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destino
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="¿A dónde quieres ir?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                />
              </div>
            </div>

            {/* Fecha */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                />
              </div>
            </div>

            {/* Huéspedes */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Huéspedes
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900">
                  <option>1 huésped</option>
                  <option>2 huéspedes</option>
                  <option>3 huéspedes</option>
                  <option>4 huéspedes</option>
                  <option>5+ huéspedes</option>
                </select>
              </div>
            </div>

            {/* Botón de búsqueda */}
            <div className="flex items-end">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <Search className="h-5 w-5" />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-gray-200">Propiedades Exclusivas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">1000+</div>
            <div className="text-gray-200">Huéspedes Satisfechos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
            <div className="text-gray-200">Destinos Únicos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
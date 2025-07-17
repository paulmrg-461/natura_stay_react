# NaturaStay - Landing Page de Turismo Rural

Una plataforma web moderna para el alquiler de fincas y experiencias de glamping en Colombia, desarrollada con React, TypeScript y Tailwind CSS.

## 🌟 Características Principales

### Funcionalidades Implementadas
- **Catálogo de Propiedades**: Visualización completa de fincas y glampings
- **Filtros Avanzados**: Búsqueda por tipo, precio, ubicación y capacidad
- **Detalles Detallados**: Información completa de cada propiedad
- **Galería de Imágenes**: Visualización con lazy loading optimizado
- **Responsive Design**: Adaptación perfecta a todos los dispositivos
- **SEO Optimizado**: Meta tags y estructura semántica

### Arquitectura Técnica
- **React 18** con TypeScript para type safety
- **React Router** para navegación SPA
- **Hooks Personalizados** para manejo de estado
- **Tailwind CSS** para estilos modernos y responsivos
- **Lazy Loading** para optimización de imágenes
- **Componentes Modulares** para fácil mantenimiento

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── common/
│   │   ├── Header.tsx          # Navegación principal
│   │   ├── Footer.tsx          # Footer con información
│   │   ├── Hero.tsx            # Sección hero con búsqueda
│   │   └── LazyImage.tsx       # Componente de imagen optimizada
│   └── properties/
│       ├── PropertyCard.tsx    # Tarjeta de propiedad
│       ├── PropertyList.tsx    # Lista de propiedades
│       └── PropertyFilters.tsx # Filtros de búsqueda
├── pages/
│   ├── Home.tsx               # Página principal
│   ├── Properties.tsx         # Listado de propiedades
│   └── PropertyDetails.tsx    # Detalles de propiedad
├── hooks/
│   ├── useProperties.ts       # Hook para manejo de propiedades
│   └── usePropertyDetails.ts  # Hook para detalles específicos
├── data/
│   └── properties.ts          # Datos mock para desarrollo
├── types/
│   └── index.ts              # Definiciones TypeScript
└── App.tsx                   # Componente principal
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Emerald (#059669) - Conexión con naturaleza
- **Secundario**: Amber (#D97706) - Calidez y tierra
- **Acentos**: Grises neutros para legibilidad
- **Estados**: Verde para éxito, rojo para alertas

### Principios de Diseño
- **Inspiración Natural**: Colores tierra y formas orgánicas
- **Micro-interacciones**: Hover states y transiciones fluidas
- **Jerarquía Visual**: Tipografía clara y espaciado consistente
- **Accesibilidad**: Contraste adecuado y navegación keyboard-friendly

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

### Scripts Disponibles
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run lint` - Linter de código
- `npm run preview` - Preview de la construcción

## 🔧 Preparación para Integraciones Futuras

### Estructura para API
Los hooks están preparados para integración con APIs reales:

```typescript
// useProperties.ts - Listo para reemplazar datos mock
const fetchProperties = async () => {
  try {
    setLoading(true);
    // Aquí se integrará la API real
    const response = await fetch('/api/properties');
    const data = await response.json();
    setProperties(data);
  } catch (err) {
    setError('Error al cargar propiedades');
  } finally {
    setLoading(false);
  }
};
```

### Integración de Chatbot
Estructura preparada para chatbot en componentes:

```tsx
// Área designada para widget de chatbot
<div id="chatbot-widget" className="fixed bottom-4 right-4 z-50">
  {/* Chatbot component will be mounted here */}
</div>
```

### Sistema de Reservas
Formularios preparados para integración con pasarelas de pago:

```tsx
// PropertyDetails.tsx - Botones de reserva listos
<button 
  onClick={() => handleBookingIntegration()}
  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg"
>
  Reservar ahora
</button>
```

## 🔐 Seguridad y Performance

### Optimizaciones Implementadas
- **Lazy Loading**: Imágenes se cargan solo cuando son visibles
- **Code Splitting**: Preparado para división de código
- **Type Safety**: TypeScript previene errores en tiempo de ejecución
- **SEO**: Meta tags optimizados para motores de búsqueda

### Mejores Prácticas
- **Componentes Modulares**: Fácil mantenimiento y testing
- **Hooks Personalizados**: Lógica reutilizable y separación de responsabilidades
- **Responsive Design**: Mobile-first approach
- **Accesibilidad**: Etiquetas semánticas y navegación keyboard

## 📱 Responsive Design

### Breakpoints Implementados
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Características Responsive
- Navegación adaptativa (hamburger menu en móvil)
- Grid layouts que se ajustan automáticamente
- Imágenes optimizadas para cada dispositivo
- Formularios amigables para touch

## 🌍 SEO y Accesibilidad

### SEO Optimizado
- Meta tags dinámicos por página
- Estructura semántica HTML5
- URLs amigables
- Sitemap preparado

### Accesibilidad
- Navegación keyboard-friendly
- Contraste de colores adecuado
- Alt text en todas las imágenes
- ARIA labels donde es necesario

## 🚀 Próximos Pasos

### Integraciones Planificadas
1. **API Backend**: Conexión con base de datos real
2. **Sistema de Autenticación**: Login de usuarios
3. **Pasarela de Pagos**: Stripe/PayPal integration
4. **Chatbot**: Soporte al cliente automatizado
5. **Mapas Interactivos**: Google Maps integration
6. **Sistema de Reseñas**: Comentarios y ratings de usuarios

### Mejoras Futuras
- Progressive Web App (PWA)
- Notificaciones push
- Modo offline
- Analytics integrados
- A/B testing capabilities

## 💡 Notas Técnicas

### Preparación para Escalabilidad
- Arquitectura modular permite fácil extensión
- Hooks personalizados facilitan manejo de estado complejo
- Componentes reutilizables reducen duplicación de código
- TypeScript garantiza consistency en grandes equipos

### Mantenimiento
- Código bien documentado con comentarios explicativos
- Estructura de carpetas intuitiva
- Convenciones de naming consistentes
- Preparado para testing unitario e integración

---

**Desarrollado con 💚 para conectar personas con la naturaleza colombiana**
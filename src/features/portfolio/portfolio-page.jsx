import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { Play, X, Skull, Zap, Shield, Droplet, Flame, Snowflake, Sparkles } from "lucide-react";

// Array de proyectos de video (Intros)
const introProjects = [
  {
    id: "gang-intro-11",
    title: "GANG INTRO #11",
    tagline: "Urban Warfare. No Rules.",
    description: "Una intro cargada de tensión y estilo urbano. Con una edición frenética, efectos de glitch y una paleta de colores fría, este video establece el tono perfecto para una facción callejera dominante. Cada fotograma está diseñado para transmitir poder y peligro inminente.",
    youtubeId: "r_YEzA9cPt4",
    features: [
      "Estilo Visual Único y Agresivo",
      "Efectos de Glitch y Distorsión",
      "Edición de Alto Impacto",
      "Paleta de Colores Fría y Cinemática",
      "Ritmo Perfecto para Gang RP"
    ],
    category: "intro"
  },
  {
    id: "gang-intro-6",
    title: "GANG INTRO | #6",
    tagline: "El Poder de la Oscuridad.",
    description: "Una pieza cinematográfica que sumerge al espectador en la atmósfera de las bandas callejeras. Con tomas que destacan el lujo y el peligro, y una banda sonora que retumba en el pecho, esta intro es una declaración de intenciones. Ideal para el líder de una facción que no conoce la derrota.",
    youtubeId: "zeZVU112w8A",
    features: [
      "Atmósfera Cinematográfica Oscura",
      "Tomas Dinámicas y de Alto Contraste",
      "Transiciones Fluidas y Poderosas",
      "Diseño de Sonido Inmersivo",
      "Lista para Usar en tu Servidor"
    ],
    category: "intro"
  }
];

// Datos para las skins de armas (usando imágenes de placeholder y descripciones épicas)
const weaponProjects = [
  {
    id: "666-skin",
    title: "SKIN 'DEMON'S MARK'",
    image: "/api/placeholder/400/300", // Placeholder, idealmente subirías las imágenes a tu proyecto
    description: "Forjada en las profundidades. La skin '666' no es para almas débiles. Un patrón de llama infernal recorre el cañón, marcando a tus enemigos con un sello de perdición antes de su caída. Perfecta para el miembro más temido de tu banda.",
    features: ["Efecto de Llamas Infernales", "Acabado Metálico Oscuro", "Detalles Satánicos", "Brillo en la Oscuridad"],
    icon: <Flame className="w-5 h-5" />
  },
  {
    id: "crystal-skin",
    title: "SKIN 'CRYSTAL CORE'",
    image: "/api/placeholder/400/300",
    description: "Pura y letal. Esta skin transforma tu arma en un artefacto de energía cristalina. Con un acabado translúcido y reflejos de luz cegadores, cada disparo parece liberar el poder de un geoda inestable. Exclusividad y poder adquisitivo.",
    features: ["Efecto de Cristal Translúcido", "Reflejos Dinámicos", "Brillo Místico", "Aspecto de Gema Preciosa"],
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: "tmf-micro",
    title: "SKIN 'TMF URBAN'",
    image: "/api/placeholder/400/300",
    description: "Diseño táctico para operaciones encubiertas. La skin TMF Micro combina un patrón de camuflaje urbano con detalles de fibra de carbono. Pasa desapercibido entre las sombras de la ciudad, pero cuando atacas, la precisión es quirúrgica.",
    features: ["Patrón de Camuflaje Urbano", "Detalles en Fibra de Carbono", "Acabado Mate Táctico", "Ergonomía Visual Mejorada"],
    icon: <Shield className="w-5 h-5" />
  },
  {
    id: "new-drop-prev1",
    title: "SKIN 'DIGITAL DROP #1'",
    image: "/api/placeholder/400/300",
    description: "La primera entrega de nuestra nueva colección 'Digital Drop'. Un estilo neo-acero con patrones geométricos que recuerdan a un fallo en la matriz. Tu arma no solo dispara, desestabiliza la realidad de tu oponente.",
    features: ["Patrón Geométrico Digital", "Efecto de Glitch Sutil", "Aspecto de Acero Líquido", "Edición Limitada"],
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: "mini1-skin",
    title: "SKIN 'SHADOW MINI'",
    image: "/api/placeholder/400/300",
    description: "Pequeña pero mortal. La versión compacta de nuestras skins de élite. Un acabado negro mate que absorbe la luz, perfecto para asesinatos sigilosos en los callejones más oscuros de Los Santos. Nadie te verá venir.",
    features: ["Acabado Negro Mate Absorbente", "Diseño Compacto y Letal", "Sin Reflejos", "Máximo Sigilo"],
    icon: <Droplet className="w-5 h-5" />
  },
  {
    id: "crystal-skin-2",
    title: "SKIN 'FROST CRYSTAL'",
    image: "/api/placeholder/400/300",
    description: "La variante gélida de nuestra línea 'Crystal'. Un frío que quema. El acabado de hielo permanente no solo es estético, sino que congela el alma de tus rivales antes de que la bala impacte. Un icono de estatus para los que dominan el frío del negocio.",
    features: ["Efecto de Hielo Permanente", "Brillo Polar", "Textura de Escarcha", "Edición Invernal"],
    icon: <Snowflake className="w-5 h-5" />
  }
];

// Componente para la cuadrícula de proyectos (reutilizable)
const ProjectCard = ({ project, onClick, type }) => {
  const IconComponent = type === 'intro' ? Play : project.icon;
  const isIntro = type === 'intro';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="relative w-full h-full min-h-[320px] overflow-hidden">
        {isIntro ? (
          // Si es intro, mostrar thumbnail de YouTube
          <>
            <img
              src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              </div>
            </div>
          </>
        ) : (
          // Si es skin, mostrar imagen de placeholder con overlay de gradiente
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-black/80" />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full border border-purple-500/30">
              {React.cloneElement(project.icon, { className: "w-5 h-5 text-purple-400" })}
            </div>
          </>
        )}
        
        {/* Contenido de la tarjeta (siempre visible) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
            {project.title}
          </h3>
          {isIntro && <p className="text-sm text-gray-300 italic mb-2">{project.tagline}</p>}
          <p className="text-xs text-gray-400 line-clamp-2">{project.description.substring(0, 100)}...</p>
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

// Modal para mostrar el detalle del proyecto (video o skin)
const ProjectModal = ({ project, onClose, type }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClose}
          className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24" onClick={(e) => e.stopPropagation()}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-purple-900/30 border border-purple-500/20"
          >
            {type === 'intro' ? (
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">{project.title}</h2>
              {type === 'intro' && (
                <p className="text-purple-400/80 italic text-lg">{project.tagline}</p>
              )}
              <p className="text-gray-300 text-base leading-relaxed">{project.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 space-y-4"
            >
              <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
                {type === 'intro' ? 'Características Clave' : 'Detalles de la Skin'}
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 text-xs">✦</span>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Componente principal de la página de portafolio
export const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleProjectClick = (project, type) => {
    setSelectedProject(project);
    setSelectedType(type);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Elementos de fondo atmosféricos */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-900/5 to-pink-900/5 rounded-full blur-[150px]" />
      </div>

      <main className="pt-20 pb-20 relative z-10">
        {/* Hero Section del Portafolio */}
        <section className="container px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"
              />
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-4">
                Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Arsenal</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
              >
                Explora nuestras intros cinematográficas y skins de armas exclusivas. Diseñadas para dominar FiveM.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Sección: Cinematic Intros */}
        <section className="container px-4 py-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <Play className="w-5 h-5 text-white" fill="white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Cinematic Intros</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {introProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                type="intro"
                onClick={() => handleProjectClick(project, 'intro')}
              />
            ))}
          </div>
        </section>

        {/* Separador Visual */}
        <div className="container px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          </div>
        </div>

        {/* Sección: Weapon Skin Collections */}
        <section className="container px-4 py-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
              <Skull className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Weapon Skin Collections</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weaponProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                type="weapon"
                onClick={() => handleProjectClick(project, 'weapon')}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Modal para ver el detalle */}
      <ProjectModal 
        project={selectedProject} 
        type={selectedType}
        onClose={() => {
          setSelectedProject(null);
          setSelectedType(null);
        }} 
      />
    </div>
  );
};
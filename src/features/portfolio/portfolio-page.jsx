import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { Play, X, Skull, Zap, Shield, Droplet, Flame, Snowflake, Sparkles, Gem } from "lucide-react";

// Array de proyectos de video (Intros)
const introProjects = [
  {
    id: "gang-intro-11",
    title: "GANG INTRO #1",
    tagline: "Urban Warfare. No Rules.",
    description: "A high-energy intro packed with tension and urban style. With frenetic editing, glitch effects, and a cold color palette, this video sets the perfect tone for a dominant street faction. Every frame is designed to convey power and imminent danger.",
    youtubeId: "r_YEzA9cPt4",
    features: [
      "Unique Aggressive Visual Style",
      "Glitch & Distortion Effects",
      "High-Impact Editing",
      "Cold Cinematic Color Palette",
      "Perfect Rhythm for Gang RP"
    ],
    category: "intro"
  },
  {
    id: "gang-intro-6",
    title: "GANG INTRO | #2",
    tagline: "The Power of Darkness.",
    description: "A cinematic piece that immerses the viewer in the atmosphere of street gangs. With shots highlighting luxury and danger, and a soundtrack that rumbles in your chest, this intro is a statement of intent. Ideal for the leader of a faction that knows no defeat.",
    youtubeId: "zeZVU112w8A",
    features: [
      "Dark Cinematic Atmosphere",
      "Dynamic High-Contrast Shots",
      "Smooth & Powerful Transitions",
      "Immersive Sound Design",
      "Ready to Use in Your Server"
    ],
    category: "intro"
  }
];

// Datos para las skins de armas - CON TUS IMÁGENES LOCALES
const weaponProjects = [
  {
    id: "gold-666",
    name: "GOLD 666",
    title: "GOLD 666",
    image: "/images/portfolio/gold-666.png",
    description: "Forged in the depths. The 'GOLD 666' skin isn't for the weak. An infernal flame pattern runs down the barrel, marking your enemies with a damnation seal before their fall. Perfect for the most feared member of your gang.",
    features: ["Infernal Flame Effect", "Dark Metallic Finish", "Demonic Details", "Glows in Darkness"],
    icon: <Flame className="w-5 h-5" />,
    color: "from-orange-600 to-red-600"
  },
  {
    id: "crystal",
    name: "CRYSTAL",
    title: "CRYSTAL",
    image: "/images/portfolio/crystal.png",
    description: "Pure and lethal. This skin transforms your weapon into a crystalline energy artifact. With a translucent finish and blinding light reflections, every shot seems to release the power of an unstable geode. Exclusivity and purchasing power.",
    features: ["Translucent Crystal Effect", "Dynamic Reflections", "Mystical Glow", "Precious Gem Aspect"],
    icon: <Gem className="w-5 h-5" />,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "tmf",
    name: "TMF",
    title: "TMF",
    image: "/images/portfolio/tmh.png",
    description: "Tactical design for covert operations. The TMF skin combines urban camouflage patterns with carbon fiber details. Go unnoticed in the city shadows, but when you strike, the precision is surgical.",
    features: ["Urban Camo Pattern", "Carbon Fiber Details", "Tactical Matte Finish", "Enhanced Visual Ergonomics"],
    icon: <Shield className="w-5 h-5" />,
    color: "from-gray-700 to-gray-900"
  },
  {
    id: "bandana",
    name: "BANDANA",
    title: "BANDANA",
    image: "/images/portfolio/bandana.png",
    description: "Street style meets firepower. The BANDANA skin features graffiti-inspired patterns and urban textures that represent the heart of gang culture. Bold, unapologetic, and instantly recognizable.",
    features: ["Graffiti-Inspired Pattern", "Urban Textures", "Bold Color Scheme", "Instant Recognition"],
    icon: <Sparkles className="w-5 h-5" />,
    color: "from-red-600 to-yellow-600"
  },
  {
    id: "bluegem",
    name: "BLUEGEM",
    title: "BLUEGEM",
    image: "/images/portfolio/bluegem.png",
    description: "Rare as a precious stone. The BLUEGEM skin gives your weapon a deep sapphire finish with reflective properties that catch the light. A status symbol for those who appreciate the finer things in life — and in crime.",
    features: ["Deep Sapphire Finish", "Light Reflective Properties", "Precious Stone Aesthetic", "Rarity Status Symbol"],
    icon: <Droplet className="w-5 h-5" />,
    color: "from-blue-600 to-indigo-900"
  }
];

// Componente para la cuadrícula de proyectos
const ProjectCard = ({ project, onClick, type }) => {
  const isIntro = type === 'intro';
  const [imageError, setImageError] = useState(false);
  
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
      <div className="relative w-full h-64 md:h-72 overflow-hidden">
        {isIntro ? (
          // Thumbnail de YouTube
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
          // Imagen de skin - AHORA USA TUS IMÁGENES LOCALES
          <>
            {!imageError ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-6xl mb-2 text-white/50">
                    {project.icon}
                  </div>
                  <p className="text-white/30 text-xs">{project.name}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-black/80" />
            <div className={`absolute top-4 right-4 bg-gradient-to-r ${project.color} p-2 rounded-full`}>
              {React.cloneElement(project.icon, { className: "w-5 h-5 text-white" })}
            </div>
          </>
        )}
        
        {/* Contenido de la tarjeta */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
            {isIntro ? project.title : project.name}
          </h3>
          {isIntro && <p className="text-sm text-gray-300 italic mb-2">{project.tagline}</p>}
          <p className="text-xs text-gray-400 line-clamp-2">
            {project.description.substring(0, 100)}...
          </p>
        </div>
        
        <motion.div
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${isIntro ? 'from-purple-500 to-pink-500' : project.color || 'from-purple-500 to-pink-500'}`}
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

// Modal para el detalle
const ProjectModal = ({ project, onClose, type }) => {
  if (!project) return null;
  const [imageError, setImageError] = useState(false);

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
              <>
                {!imageError ? (
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-contain bg-black"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="text-8xl mb-4 text-white/30">
                        {project.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.name}</h3>
                      <p className="text-gray-400">{project.name}</p>
                    </div>
                  </div>
                )}
              </>
            )}
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                {type === 'intro' ? project.title : project.name}
              </h2>
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
                {type === 'intro' ? 'Key Features' : 'Skin Details'}
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

// Página principal
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
      
      {/* Elementos de fondo */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-pink-600/5 rounded-full blur-[100px]" />
      </div>

      <main className="pt-20 pb-20 relative z-10">
        {/* Hero Section - Título CORREGIDO con estilo MUY VISIBLE */}
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
              
              {/* Título con estilo SUPER VISIBLE */}
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
                <span className="text-white">Our </span>
                <span className="text-white font-black" style={{ 
                  textShadow: '0 0 20px rgba(168, 85, 247, 1), 0 0 40px rgba(236, 72, 153, 1)'
                }}>
                  Arsenal
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
              >
                Explore our cinematic intros and exclusive weapon skins. Built to dominate FiveM.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Sección: Intros */}
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

        {/* Separador */}
        <div className="container px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          </div>
        </div>

        {/* Sección: Skins */}
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
      
      {/* Modal */}
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
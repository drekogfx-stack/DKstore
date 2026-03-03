import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { Play, X } from "lucide-react";

const projects = [
  {
    id: "treches-wl",
    title: "Treches WL Loading Screen",
    tagline: "Cinematic entry. Unforgettable first impression.",
    description: "A fully custom Blender rendered loading screen built for Treches WL FiveM server. Features two characters across two dynamically lit scenes, with smooth camera transitions and atmospheric VFX. Designed to immerse players from the very first frame.",
    youtubeId: "tPed8y9NxnE",
    features: ["2 Custom 3D Characters", "2 Cinematic Scenes", "Blender Rendered", "60fps Smooth Playback", "Custom Lighting & VFX"],
    size: "tall"
  },
  {
    id: "restrict-rp",
    title: "Restrict RP Intro",
    tagline: "High Quality Custom Loading Screen",
    description: "A high energy Blender animation crafted for a 100k die FiveM server. Dynamic VFX elements and fluid camera work create a broadcast ready intro that sets the tone for every play.",
    youtubeId: "zpxFhY2z7mQ",
    features: ["Custom Character Animation", "Dynamic Camera Work", "Custom Assets & VFX", "Custom Color Grading"],
    size: "wide"
  },
  {
    id: "MotionWorldRP",
    title: "Motion World RP Loading Screen",
    tagline: "Seamless. Professional.",
    description: "A premium FiveM Blender loading screen with a fully custom character and one meticulously crafted scene. Smooth transitions, volumetric lighting, and cinematic depth make this a standout piece for any serious server.",
    youtubeId: "Zw9qeW1_H2g",
    features: ["1 Custom Character", "Volumetric Lighting", "Cinematic Camera Work", "Performance Optimized"],
    size: "large"
  },
  {
    id: "youtube-promo",
    title: "DK YouTube Promo",
    tagline: "Your brand, amplified.",
    description: "A dynamic promotional video created for the DK YouTube channel. Combines high quality Blender animation with custom VFX and a professional edit to create a compelling showcase of the channel's content and style.",
    youtubeId: "sBm2Ip0WN1o",
    features: ["3D Animations & VFX", "Particle Effects", "Dramatic Lighting"],
    size: "normal"
  },
  {
    id: "christmas-promo2",
    title: "Five Star RP Server Christmas Loading Screen",
    tagline: "A cinematic trailer for FiveM servers.",
    description: "A cinematic trailer created for the Five Star RP server. Features custom Blender animations, dynamic VFX, and professional editing to create an engaging promotional video that highlights the server's unique features and community.",
    youtubeId: "e2NGc1GzFiY",
    features: ["Fully Custom Blender Animation", "Custom VFX Overlays", "Professional Color Grading", "Sound Design Included"],
    size: "large"
  },
  {
    id: "christmas-promo",
    title: "Limit RP Christmas Promo",
    tagline: "A festive promotional video for Limit RP.",
    description: "A holiday-themed promotional video created for the Limit RP server. Combines festive Blender animations, custom VFX, and a cheerful soundtrack to capture the spirit of the season and promote the server's holiday events.",
    youtubeId: "UcO6FMZPC9k",
    features: ["In-Game Footage Integration", "Custom VFX Overlays", "Professional Color Grading", "Sound Design Included"],
    size: "tall"
  }
];

const sizeClasses = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  large: "md:col-span-2 md:row-span-2",
  normal: ""
};

const ProjectCard = ({ project, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`group relative cursor-pointer overflow-hidden rounded-2xl ${sizeClasses[project.size]}`}
    onClick={onClick}
  >
    <div className="relative w-full h-full min-h-[260px] overflow-hidden bg-secondary">
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
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-white/60 italic">{project.tagline}</p>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-transparent"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
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
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/50"
          >
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">{project.title}</h2>
              <p className="text-primary/80 italic text-lg">{project.tagline}</p>
              <p className="text-muted-foreground text-base leading-relaxed">{project.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 space-y-4"
            >
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
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

export const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      <main className="pt-20">
        <section className="container px-4 py-24 md:py-32">
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
                className="w-12 h-[2px] bg-primary mx-auto mb-8"
              />
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-4">
                Our Work<span className="text-primary">.</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
              >
                Built for elite FiveM servers.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="container px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4 md:gap-5 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
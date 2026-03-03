import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { Testimonials } from "./components/testimonials";
import { PriceEstimatorModal } from "../../components/shared/price-estimator-modal";

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Custom-Built Effects",
      description: "Every asset is hand-crafted in Blender — no templates, no shortcuts."
    },
    {
      icon: "🛡️",
      title: "Server Optimized",
      description: "Built to run smoothly on FiveM without impacting server performance."
    },
    {
      icon: "📊",
      title: "High Performance",
      description: "Optimized file sizes and render quality for seamless in-game playback."
    },
    {
      icon: "⏱️",
      title: "Fast Delivery",
      description: "Quick turnaround without compromising on quality or detail."
    }
  ];

  return (
    <section className="container px-4 py-28" id="features">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-16"
      >
        <div className="w-8 h-[1px] bg-white/50 mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          What We <span className="text-gradient">Do</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Premium VFX services built for serious FiveM communities.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-colors duration-200"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
              <span className="text-xl">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Stats = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const stats = [
    { value: 1074, label: "Products Delivered", suffix: "+" },
    { value: 102, label: "Active Clients", suffix: "+" },
    { value: 1000, label: "Hours Rendered", suffix: "+" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = end;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(start);
                  return newCounts;
                });
              }
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="container px-4 py-28" ref={statsRef}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-colors duration-200"
          >
            <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
              {counts[index]}{stat.suffix}
            </div>
            <div className="text-gray-400 text-sm tracking-wide">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Comparison = () => {
  const features = [
    { feature: "Custom Blender Renders", us: true, them: false },
    { feature: "Server Optimized Assets", us: true, them: false },
    { feature: "Dedicated Support", us: true, them: false },
    { feature: "Fast Turnaround", us: true, them: false },
    { feature: "Source Files Included", us: true, them: false }
  ];

  return (
    <section className="container px-4 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center mb-16"
      >
        <div className="w-8 h-[1px] bg-white/50 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Why <span className="text-gradient">DK</span>?
        </h2>
        <p className="text-gray-400 text-lg">
          See how we compare to generic sellers.
        </p>
      </motion.div>
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 gap-4 mb-4 px-4"
        >
          <div></div>
          <div className="text-center text-sm font-semibold text-white">DK</div>
          <div className="text-center text-sm font-semibold text-gray-400">Generic</div>
        </motion.div>
        
        <div className="space-y-2">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="grid grid-cols-3 gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 items-center border border-white/10"
            >
              <span className="text-sm text-white">{item.feature}</span>
              <div className="flex justify-center">
                {item.us && (
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {item.them ? (
                  <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-500/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = ({ openEstimator }) => {
  return (
    <section className="container px-4 py-24" id="pricing">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="w-8 h-[1px] bg-white/50 mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          Get Your <span className="text-gradient">Custom Quote</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          Use our price calculator to get an instant quote for your project
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={openEstimator}
          className="button-gradient px-8 py-3.5 rounded-full font-medium cursor-pointer"
        >
          Calculate Price
        </motion.button>
      </motion.div>
    </section>
  );
};

export const HomePage = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.8 }}
            className="w-10 h-[1px] bg-white/60 mb-8"
          />
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Where Your Vision <br />
            <span className="text-gradient">Becomes Reality.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-base md:text-lg max-w-lg mb-10"
          >
            Premium Blender animations, loading screens & graphics for your communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => navigate("/portfolio")}
              className="button-gradient px-6 py-3"
            >
              Explore Our Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => navigate("/shop")}
              className="border border-white/20 px-6 py-3 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 text-white/50 hover:text-white/70 transition-colors duration-200"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </motion.button>
      </section>

      {/* Content Sections */}
      <div ref={contentRef}>
        <Features />
        <Stats />
        <Comparison />
        <Testimonials />
        <CTASection openEstimator={() => setIsEstimatorOpen(true)} />
      </div>

      <Footer />
      
      {/* Modal */}
      <PriceEstimatorModal 
        isOpen={isEstimatorOpen} 
        onClose={() => setIsEstimatorOpen(false)} 
      />
    </div>
  );
};
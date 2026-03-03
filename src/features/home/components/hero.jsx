import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = ({ onExplore }) => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-10 h-[1px] bg-primary/60 mb-8"
        />
        
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] mb-6"
        >
          Where Your Vision <br />
          <span className="text-gradient">Becomes Reality.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-muted-foreground text-base md:text-lg max-w-lg mb-10"
        >
          Premium Blender animations, loading screens & graphics for your communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            variant="gradient"
            size="lg"
            onClick={() => navigate("/portfolio")}
            className="cursor-pointer"
          >
            Explore Our Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/shop")}
            className="bg-white/5 backdrop-blur-sm border-white/15 text-white hover:bg-white/20 cursor-pointer"
          >
            Shop Now
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        onClick={onExplore}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
};
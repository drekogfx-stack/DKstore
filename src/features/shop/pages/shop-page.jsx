import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../../../components/layout/navbar";
import { Footer } from "../../../components/layout/footer";
import { CategoryFilter } from "../components/category-filter";
import { ProductGrid } from "../components/product-grid";
import { categories } from "../data/products";

export const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("services");
  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], opacity: [0.04, 0.08, 0.03, 0.04] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-[15%] left-[20%] h-[600px] w-[600px] rounded-full bg-primary blur-[180px]"
        />
        <motion.div
          animate={{ x: [0, -30, 50, 0], y: [0, 40, -20, 0], opacity: [0.03, 0.06, 0.02, 0.03] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-[20%] right-[15%] h-[500px] w-[500px] rounded-full bg-primary blur-[160px]"
        />
      </div>

      <Navbar />

      <section className="container px-4 pt-32 pb-16 text-center relative">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 40, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-10 h-[1px] bg-primary/50 mx-auto mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-5"
        >
          Shop <span className="text-gradient">Now</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-xl text-lg text-muted-foreground"
        >
          Explore our curated collection of services, products, and exclusive offerings — built for creators who demand excellence.
        </motion.p>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="container px-4 mb-6"
      >
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </motion.div>

      <section className="container px-4 mb-12 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-muted-foreground"
          >
            {currentCategory.description}
          </motion.p>
        </AnimatePresence>
      </section>

      <div className="container px-4 mb-8">
        <div className="mx-auto max-w-xs h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      </div>

      <AnimatePresence mode="wait">
        <ProductGrid key={activeCategory} category={currentCategory} />
      </AnimatePresence>

      <Footer />
    </div>
  );
};
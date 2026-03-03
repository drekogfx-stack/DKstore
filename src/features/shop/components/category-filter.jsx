import { motion } from "framer-motion";

export const CategoryFilter = ({ categories, activeCategory, onChange }) => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-full border border-border/40 bg-secondary/40 p-1 backdrop-blur-md">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            className="relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300"
          >
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${
              activeCategory === category.id 
                ? "text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            }`}>
              {category.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
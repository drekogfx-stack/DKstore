import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const iconMap = {
  "🎨": "text-purple-400",
  "🎬": "text-blue-400",
  "💻": "text-green-400",
  "📦": "text-yellow-400",
  "🎧": "text-cyan-400",
  "⭐": "text-yellow-500",
  "🎁": "text-pink-400"
};

const ServiceCard = ({ item, index, onClick }) => {
  const iconColor = iconMap[item.icon] || "text-primary";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative h-full cursor-pointer"
      onClick={onClick}
    >
      <div className={`relative h-full rounded-2xl border bg-card/60 backdrop-blur-md p-6 flex flex-col transition-all duration-500 hover:bg-card/80 ${
        item.popular 
          ? "border-primary/40 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.15)]" 
          : "border-border/40 hover:border-border/70"
      }`}>
        {item.badge && (
          <div className="absolute -top-3 left-6">
            <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {item.badge}
            </span>
          </div>
        )}
        
        <div className="mb-5 flex items-start gap-4">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors duration-500 text-2xl ${iconColor}`}>
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </div>

        <div className="mb-6">
          {item.priceNote && (
            <span className="text-xs text-muted-foreground uppercase tracking-wide">{item.priceNote}</span>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-foreground">{item.price}</span>
          </div>
        </div>

        <ul className="mb-8 flex-grow space-y-2.5">
          {item.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <button className={`w-full rounded-full py-3 text-sm font-medium transition-all duration-300 ${
          item.popular 
            ? "bg-primary text-primary-foreground hover:opacity-90 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]" 
            : "border border-border bg-secondary text-foreground hover:bg-accent"
        }`}>
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const ProductCard = ({ item, index, onClick }) => {
  const iconColor = iconMap[item.icon] || "text-primary";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="group relative flex flex-col rounded-2xl border border-border/30 bg-card/60 backdrop-blur-md overflow-hidden cursor-pointer transition-colors duration-500 hover:border-border/50"
    >
      <div className="relative h-44 bg-secondary/40 overflow-hidden">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-background/60 backdrop-blur-sm text-4xl">
              {item.icon}
            </div>
          </div>
        )}
        
        {item.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
            {item.badge}
          </span>
        )}
        
        {item.originalPrice && (
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: -12 }}
            className="absolute top-3 right-3 flex flex-col items-center justify-center h-12 w-12 rounded-full bg-red-500 shadow-lg shadow-red-500/30"
          >
            <span className="text-[10px] font-bold text-white leading-none">SAVE</span>
            <span className="text-sm font-black text-white leading-none">
              {Math.round((parseFloat(item.originalPrice.replace(/[^0-9.]/g,"")) - parseFloat(item.price.replace(/[^0-9.]/g,""))) / parseFloat(item.originalPrice.replace(/[^0-9.]/g,"")) * 100)}%
            </span>
          </motion.div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 gap-4">
        <h3 className="text-lg font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-500">
          {item.name}
        </h3>
        
        {item.rating && (
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(item.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground/30"}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{item.rating} ({item.reviews})</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {item.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="rounded-lg bg-secondary px-3 py-1 text-xs text-muted-foreground">
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            {item.priceNote && (
              <span className="text-xs text-muted-foreground">{item.priceNote}</span>
            )}
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight text-foreground">{item.price}</span>
              {item.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
              )}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open("https://discord.gg/7FmWcHZucR", "_blank");
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] active:scale-95 shadow-md"
            aria-label="Buy Now"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProductGrid = ({ category }) => {
  const navigate = useNavigate();

  if (category.layout === "services") {
    return (
      <motion.div
        key={category.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="container px-4 mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pb-32"
      >
        {category.items.map((item, index) => (
          <ServiceCard
            key={item.id}
            item={item}
            index={index}
            onClick={() => navigate(`/shop/${item.id}`)}
          />
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      key={category.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="container px-4 mx-auto grid max-w-7xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6 pb-32"
    >
      {category.items.map((item, index) => (
        <ProductCard
          key={item.id}
          item={item}
          index={index}
          onClick={() => navigate(`/shop/${item.id}`)}
        />
      ))}
    </motion.div>
  );
};
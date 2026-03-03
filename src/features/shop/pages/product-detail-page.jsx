import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../../../components/layout/navbar";
import { Footer } from "../../../components/layout/footer";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { ChevronRight, ChevronLeft, ExternalLink, Play, Star } from "lucide-react";
import { categories } from "../data/products";

const findItem = (id) => {
  for (const category of categories) {
    const item = category.items.find(i => i.id === id);
    if (item) return { item, category };
  }
  return null;
};

export const ProductDetailPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const result = findItem(itemId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Item not found</h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const { item, category } = result;
  const images = item.images || (item.image ? [item.image] : []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <Navbar />

      <div className="container px-4 pt-24 pb-4">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <button onClick={() => navigate("/shop")} className="hover:text-foreground transition-colors">
            Shop
          </button>
          <ChevronRight className="h-3.5 w-3.5" />
          <button onClick={() => navigate("/shop")} className="hover:text-foreground transition-colors">
            {category.label}
          </button>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium truncate max-w-[200px]">{item.name}</span>
        </motion.nav>
      </div>

      <section className="container px-4 pb-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative space-y-4"
          >
            <div className="relative aspect-[4/3] rounded-2xl bg-secondary/40 border border-border/30 overflow-hidden">
              <AnimatePresence mode="wait">
                {images.length > 0 ? (
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    src={images[currentImageIndex]}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-7xl">{item.icon}</span>
                  </div>
                )}
              </AnimatePresence>

              {item.badge && (
                <Badge className="absolute top-4 left-4">{item.badge}</Badge>
              )}

              {item.originalPrice && (
                <motion.div
                  initial={{ scale: 0, rotate: -12 }}
                  animate={{ scale: 1, rotate: -12 }}
                  className="absolute top-4 right-4 rounded-full bg-destructive/90 px-3 py-1 text-xs font-bold text-white"
                >
                  Save {Math.round((parseFloat(item.originalPrice.replace(/[^0-9.]/g,"")) - parseFloat(item.price.replace(/[^0-9.]/g,""))) / parseFloat(item.originalPrice.replace(/[^0-9.]/g,"")) * 100)}%
                </motion.div>
              )}

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImageIndex((i) => (i - 1 + images.length) % images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground shadow-md transition-all hover:bg-background hover:scale-110"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((i) => (i + 1) % images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground shadow-md transition-all hover:bg-background hover:scale-110"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      idx === currentImageIndex 
                        ? "border-primary shadow-md shadow-primary/20" 
                        : "border-border/30 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {item.popular && (
              <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
                ⭐ Most Popular
              </Badge>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-foreground">{item.name}</h1>

            {item.rating && (
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(item.rating) 
                          ? "fill-yellow-500 text-yellow-500" 
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">{item.rating}</span>
                <span className="text-sm text-muted-foreground">({item.reviews} reviews)</span>
              </div>
            )}

            <p className="text-muted-foreground leading-relaxed text-base">
              {item.fullDescription || item.description}
            </p>

            <div className="flex items-baseline gap-3">
              {item.priceNote && (
                <span className="text-sm text-muted-foreground">{item.priceNote}</span>
              )}
              <span className="text-4xl font-bold text-foreground">{item.price}</span>
              {item.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">{item.originalPrice}</span>
              )}
            </div>

            <div className="rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm p-5">
              <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                What's Included
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-3 w-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => window.open("https://discord.gg/7FmWcHZucR", "_blank")}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-primary py-4 text-sm font-bold text-primary-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
            >
              Buy Now
              <ExternalLink className="h-4 w-4" />
            </button>

            <p className="text-center text-xs text-muted-foreground">
              You'll be redirected to our Discord to complete your order
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
import { motion } from "framer-motion";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { ExternalLink, Users, Award, Star, TrendingUp } from "lucide-react";

const partners = [
  {
    name: "Storm - Automated PC Checker",
    logo: "/images/storm-logo.png",
    description: "Advanced Methods. Automated PC Checking. International Support. All in one click. Supports FiveM, RageMP, AltV, GTA San Andreas, Roblox, and more.",
    tier: "Gold",
    projects: 1,
    specialty: "PC Checking Solutions",
    website: "https://stormss.cc/"
  }
];

const benefits = [
  {
    title: "Creative Collaboration",
    description: "Work directly with industry leaders on cutting-edge projects",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Award-Winning Work",
    description: "Our partnerships have resulted in multiple industry awards",
    icon: Award,
    color: "text-yellow-400"
  },
  {
    title: "Premium Quality",
    description: "Delivering Hollywood-grade VFX for every project",
    icon: Star,
    color: "text-purple-400"
  },
  {
    title: "Growth Together",
    description: "Building long-term relationships that drive mutual success",
    icon: TrendingUp,
    color: "text-green-400"
  }
];

const getTierColor = (tier) => {
  switch(tier) {
    case "Premium":
      return "bg-gradient-to-r from-purple-500 to-pink-500";
    case "Gold":
      return "bg-gradient-to-r from-yellow-400 to-orange-500";
    default:
      return "bg-gradient-to-r from-blue-500 to-cyan-500";
  }
};

export const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="pt-20 pb-20">
        <section className="container px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Industry <span className="text-gradient">Leaders</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Building the future of entertainment together
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <Card className="glass border-white/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl opacity-20">🏢</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className={`${getTierColor(partner.tier)} text-white px-3 py-1`}>
                          {partner.tier} Partner
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {partner.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-2">
                            {partner.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <p className="text-2xl font-bold text-primary">{partner.projects}</p>
                            <p className="text-xs text-muted-foreground">Projects</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{partner.specialty}</p>
                            <p className="text-xs text-muted-foreground">Specialty</p>
                          </div>
                        </div>

                        <Button 
                          className="w-full button-gradient hover:scale-105 transition-transform"
                          onClick={() => window.open(partner.website, "_blank")}
                        >
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="container px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Partner with <span className="text-gradient">DK</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                  >
                    <Card className="glass border-white/10 text-center h-full">
                      <CardContent className="pt-6">
                        <div className="mb-4">
                          <Icon className={`h-12 w-12 mx-auto ${benefit.color}`} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
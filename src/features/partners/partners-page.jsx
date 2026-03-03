import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Calendar, Gift, Trophy, Clock, Sparkles, Diamond } from "lucide-react";

export const PartnersPage = () => {
  const openDiscord = () => {
    window.open("https://discord.gg/tmhrp", "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="pt-20 pb-20">
        {/* Hero Section with Logo */}
        <section className="container px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-1">
                <Calendar className="w-3 h-3 mr-1" />
                OPENING MARCH 6 - 7:30 PM
              </Badge>
              
              {/* Logo de TMHRP */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <img 
                  src="/images/tmhrp.png" 
                  alt="TMHRP Logo" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                  onError={(e) => {
                    console.log("Error loading logo, using fallback");
                    e.target.style.display = 'none';
                  }}
                />
              </motion.div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                TMHRP arrives and does it big.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-lg text-purple-300">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">7:30 PM - Don't miss it</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Reward System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-12"
            >
              <Card className="glass border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-yellow-400" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      Time-Based Reward System
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                          <span className="text-green-400 text-sm">✓</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="text-green-400 font-semibold">Every minute counts:</span> The rewards you earn will be{" "}
                          <span className="text-yellow-400 font-bold">FOREVER</span>
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                          <span className="text-red-400 text-sm">!</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="text-red-400 font-semibold">ONLY 1 WEEK</span> to claim{" "}
                          <span className="text-yellow-400 font-bold">ALL</span> accumulated rewards
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4 border border-purple-500/30">
                      <h3 className="text-lg font-semibold text-purple-300 mb-2">Rewards Menu</h3>
                      <p className="text-gray-400 text-sm">
                        Based on time played in the server, unlock exclusive items that stay with you forever.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Opening Day Exclusives */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-12"
            >
              <Card className="glass border-orange-500/20 bg-gradient-to-br from-orange-900/20 to-red-900/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-8 h-8 text-orange-400" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                      OPENING DAY EXCLUSIVES
                    </h2>
                  </div>
                  
                  <p className="text-lg text-orange-200 mb-6">
                    Everyone who joins ON OPENING DAY will receive:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { icon: "🦺", title: "Shiny Vest", desc: "FREE" },
                      { icon: "🎒", title: "Shiny Backpack", desc: "FREE" },
                      { icon: "🚗", title: "SPECIAL Starter Car", desc: "Day 1 Exclusive" },
                      { icon: "🎲", title: "GIVEAWAYS", desc: "Throughout the week" }
                    ].map((item, index) => (
                      <div key={index} className="bg-black/40 rounded-xl p-4 border border-white/10 text-center hover:border-orange-400/50 transition-all duration-150">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-xs text-orange-300">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
                    <p className="text-orange-200 text-center">
                      After opening, there will be another starter car, but{" "}
                      <span className="text-yellow-300 font-bold">this one will be UNIQUE and will never be obtainable again.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Final Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mb-12"
            >
              <Card className="glass border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                <CardContent className="p-8 text-center">
                  <Diamond className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    In summary:
                  </h3>
                  
                  <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                    If you're there on opening day, you get unique, special and exclusive items{" "}
                    <span className="text-purple-300 font-bold">that only the true OG's of TMHRP will have.</span>
                  </p>
                  
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 mb-6">
                    The ones there from the start, make the difference.
                  </div>
                  
                  <Button
                    onClick={openDiscord}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg rounded-xl font-bold shadow-lg shadow-purple-600/30 transition-all duration-150 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      <img src="/discord-icon.svg" alt="Discord" className="w-5 h-5" />
                      discord.gg/tmhrp
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-center"
            >
              <p className="text-gray-500 text-sm">
                @everyone · The wait is almost over
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
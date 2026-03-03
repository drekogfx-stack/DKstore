import React, { useRef } from "react";
import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          DK <span className="text-gradient">Studios</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Premium VFX for FiveM Communities
        </p>
        <div className="flex gap-4 justify-center">
          <button className="button-gradient px-6 py-3">
            Explore Work
          </button>
          <button className="border border-white/20 px-6 py-3 rounded-md hover:bg-white/10 transition">
            Shop Now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
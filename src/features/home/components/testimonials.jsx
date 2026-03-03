import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../../lib/supabase";

export const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase
          .from("reviews")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        setReviews(data || []);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const displayReviews = reviews.length > 0 ? reviews : [
    {
      id: 1,
      name: "John Doe",
      role: "Server Owner",
      content: "Amazing work! The loading screen transformed our server completely. The quality and attention to detail are unmatched in the FiveM community.",
      image_url: null
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Community Manager",
      content: "Professional, fast, and high quality. Highly recommended! They delivered exactly what we needed ahead of schedule.",
      image_url: null
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "FiveM Developer",
      content: "The best VFX studio for FiveM. Period. Their animations are smooth and server-optimized.",
      image_url: null
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Server Admin",
      content: "Incredible attention to detail. The animations are smooth and professional. Our players love the new loading screen.",
      image_url: null
    },
    {
      id: 5,
      name: "Alex Garcia",
      role: "Community Owner",
      content: "Fast delivery and excellent communication. Will work with again! They understood our vision perfectly.",
      image_url: null
    }
  ];

  const duplicatedReviews = [...displayReviews, ...displayReviews, ...displayReviews];

  if (loading) {
    return (
      <section className="py-20 bg-black">
        <div className="container px-4 text-center">
          <p className="text-gray-400">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="w-8 h-[1px] bg-white/50 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Trusted by <span className="text-gradient">Gaming Communities</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied FiveM server owners using our premium VFX graphics
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <div 
          className="flex animate-marquee whitespace-nowrap gap-6"
          style={{ 
            animation: 'marquee 80s linear infinite'
          }}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-[350px] md:w-[380px]"
            >
              <div className="glass rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 h-[300px] flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {review.name ? review.name[0] : "U"}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-white truncate">{review.name || "Anonymous"}</h4>
                    <p className="text-sm text-gray-400 truncate">{review.role || "Client"}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed flex-1 overflow-y-auto">
                  {review.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          will-change: transform;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
        .gap-6 {
          gap: 1.5rem;
        }
      `}</style>
    </section>
  );
};
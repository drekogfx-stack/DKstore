import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Partners", href: "/partners" },
    { name: "Queue", href: "/queue" },
    { name: "Orders", href: "/orders" },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled
          ? "h-14 bg-black/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl"
          : "h-14 bg-black w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-base text-white">DK</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-gray-400 hover:text-white transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/shop">
              <button className="button-gradient px-4 py-2 text-sm">
                Shop Now
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
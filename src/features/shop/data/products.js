export const categories = [
  {
    id: "services",
    label: "Services",
    description: "Professional creative services tailored to your vision",
    layout: "services",
    items: [
      {
        id: "brand-identity",
        name: "Brand Identity",
        description: "Complete brand identity design with logo, banner, and VFX",
        fullDescription: "Transform your brand with a comprehensive identity package. We craft distinctive logos, define harmonious color palettes, establish typography systems, and deliver a complete brand guidelines document that ensures consistency across all touchpoints. Our process includes in-depth discovery sessions to understand your vision and competitive landscape.",
        price: "$150",
        features: ["Custom Logo Design", "Custom VFX", "Custom Banner", "1 to 1 Meetings", "3 Revision Rounds"],
        icon: "🎨",
        badge: "Best Value",
        rating: 5,
        reviews: 8
      },
      {
        id: "motion-vfx",
        name: "Motion & VFX",
        description: "Cinematic animations, intros, and visual effects for your content.",
        fullDescription: "Elevate your content with studio-quality motion graphics and visual effects. From cinematic intros and logo animations to complex compositing and particle effects — we bring your vision to life in stunning 4K. Every project includes custom sound design and unlimited revisions until you're 100% satisfied.",
        price: "$80-$500+",
        priceNote: "Per project",
        features: ["4K Rendering", "Custom Animations", "Sound Design", "Best in the Industry", "Best quality", "Unlimited Revisions"],
        icon: "🎬",
        popular: true,
        rating: 4.9,
        reviews: 198
      },
      {
        id: "web-dev",
        name: "Web Development",
        description: "Custom built, responsive websites with modern frameworks and clean code.",
        fullDescription: "Get a blazing fast, perfect website built. We use modern frameworks like React and Next.js to deliver responsive, SEO-optimized sites that perform flawlessly on every device. Includes CMS integration, analytics setup, and 30 days of post-launch support to ensure everything runs smoothly.",
        price: "$200-$500",
        priceNote: "Starting at",
        features: ["Responsive Design", "SEO Optimized", "Performance Tuned", "CMS Integration", "Analytics Setup", "30-Day Support"],
        icon: "💻",
        rating: 4.9,
        reviews: 4
      }
    ]
  },
  {
    id: "products",
    label: "Products",
    description: "Ready-to-use digital assets crafted with precision",
    layout: "grid",
    items: [
      {
        id: "blender-optimization-pack",
        name: "Blender Optimization Pack",
        description: "PDF with proven techniques to optimize Blender performance and workflow.",
        fullDescription: "Easy to follow PDF guide packed with proven techniques to optimize Blender performance and workflow. Learn how to speed up your projects, reduce render times, and enhance your creative process with tips on viewport optimization, render settings, asset management, and more. Perfect for artists of all levels looking to get the most out of Blender.",
        price: "$21",
        originalPrice: "$30",
        features: ["Render Time Reduction by 50-80%", "Viewport Optimization", "Cool tips and tricks", "Workflow Enhancements", "Proven Techniques"],
        icon: "📦",
        badge: "New",
        image: "/images/products/blender-pack.png",
        rating: 5,
        reviews: 2
      },
      {
        id: "ghetto-room-template",
        name: "Ghetto Room Template",
        description: "Blender File with a fully customizable 3D room scene, perfect for resellers.",
        fullDescription: "A fully customizable 3D room scene created in Blender, perfect for resellers and aspiring loading screen creators. This template includes a detailed interior with dynamic lighting, animated elements, and modular components that can be easily modified to fit your unique style. Ideal for learning the art of loading screen design or for creating high-quality assets to sell.",
        price: "$170",
        originalPrice: "$200",
        features: ["Animated Rigged Character", "High Quality", ".blend file", "Drag & Drop Ready", "Priority Support"],
        popular: true,
        icon: "⭐",
        image: "/images/products/ghetto.png",
        rating: 4.9,
        reviews: 29
      },
      {
        id: "christmas-room-template",
        name: "Christmas Room Template",
        description: "Blender File with a fully customizable 3D room scene, perfect for resellers.",
        fullDescription: "A fully customizable 3D room scene created in Blender, perfect for resellers and aspiring loading screen creators. This template includes a detailed interior with dynamic lighting, animated elements, and modular components that can be easily modified to fit your unique style.",
        price: "$200",
        features: ["Very High Demand", "High Quality", ".blend file", "Drag & Drop Ready", "Priority Support"],
        popular: true,
        icon: "⭐",
        image: "/images/products/gamingcabin.png",
        rating: 5,
        reviews: 3
      }
    ]
  },
  {
    id: "others",
    label: "Others",
    description: "Exclusive extras and special offerings",
    layout: "grid",
    items: [
      {
        id: "priority-support",
        name: "Priority Support",
        description: "Dedicated fast track support with guaranteed response times.",
        fullDescription: "Get the attention you deserve with our Priority Support plan. Enjoy guaranteed 1-hour response times, a dedicated support agent who knows your project inside out, and screen-sharing sessions for complex issues. Available 7 days a week with direct Discord access.",
        price: "$5",
        priceNote: "/month",
        features: ["1 Hour Response", "Dedicated VC Support", "Screen Sharing", "7 Day Availability", "Discord Access", "Monthly Reports"],
        icon: "🎧"
      },
      {
        id: "gift-card",
        name: "Gift Card",
        description: "Give the gift of premium creative assets to someone special.",
        fullDescription: "The perfect gift for any creator. Choose any amount from $50 and up, and we'll deliver a beautifully designed digital gift card directly to the recipient's inbox. Never expires, works on all products and services, and can be combined with other promotions.",
        price: "$50",
        priceNote: "and up",
        features: ["Custom Amount", "Digital Delivery", "Never Expires", "All Products", "Instant Delivery", "Gift Message"],
        popular: true,
        icon: "🎁",
        badge: "Popular Gift"
      }
    ]
  }
];
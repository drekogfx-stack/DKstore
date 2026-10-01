export default function DKStore() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-cyan-500/30">
      
      {/* 1. NAVEGACIÓN (HEADER) */}
      <nav className="fixed top-0 w-full z-50 pt-4 px-4 pointer-events-none">
        <div className="container mx-auto p-4 flex items-center justify-between bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative pointer-events-auto">
          
          {/* Esquinas decorativas estilo Omex */}
          <span className="absolute border-t-2 border-l-2 border-cyan-500 w-2 h-2 top-0 left-0 -mt-0.5 -ml-0.5"></span>
          <span className="absolute border-t-2 border-r-2 border-cyan-500 w-2 h-2 top-0 right-0 -mt-0.5 -mr-0.5"></span>
          <span className="absolute border-b-2 border-l-2 border-cyan-500 w-2 h-2 bottom-0 left-0 -mb-0.5 -ml-0.5"></span>
          <span className="absolute border-b-2 border-r-2 border-cyan-500 w-2 h-2 bottom-0 right-0 -mb-0.5 -mr-0.5"></span>

          {/* Logo y Enlaces */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-2xl font-black text-white tracking-widest uppercase hover:text-cyan-400 transition-colors flex items-center gap-2">
              DK<span className="text-cyan-500">STUDIOS</span>
            </a>
            <span className="w-0.5 h-6 bg-zinc-600/50"></span>
            
            <div className="flex items-center gap-6">
              <a href="#inicio" className="font-bold text-lg uppercase tracking-wider text-gray-300 hover:text-cyan-400 transition-colors">Inicio</a>
              <a href="#servicios" className="font-bold text-lg uppercase tracking-wider text-gray-300 hover:text-cyan-400 transition-colors">Servicios</a>
              <a href="#academia" className="font-bold text-lg uppercase tracking-wider text-gray-300 hover:text-cyan-400 transition-colors">Academia</a>
            </div>
          </div>

          {/* Logo Mobile */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2">
            <a href="/" className="text-xl font-black text-white tracking-widest uppercase">
              DK<span className="text-cyan-500">S</span>
            </a>
          </div>

          {/* Botón Discord */}
          <div className="flex justify-end">
            <a href="https://discord.gg/MmYPXRqTmr" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 px-4 py-1.5 transition-colors duration-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>
              <span className="font-bold text-sm tracking-wide hidden sm:block">Únete al Discord</span>
            </a>
          </div>
        </div>
      </nav>

      <main id="inicio" className="pt-24">
        {/* 2. HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-end pb-16 overflow-hidden border-b border-zinc-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          </div>
          
          <div className="w-full max-w-7xl mx-auto relative z-10 px-6 mt-32">
            <div className="flex flex-col gap-4 pb-8">
              <span className="font-mono font-bold text-cyan-500 text-lg uppercase tracking-widest">
                Estudio Profesional de VFX
              </span>
              <h1 className="font-black text-6xl lg:text-8xl text-white uppercase tracking-tighter">
                DK STUDIOS
              </h1>
              <p className="font-medium text-gray-400 text-base md:text-lg max-w-xl">
                Diseños exclusivos, intros, banners, skins y mapeados optimizados para llevar tu comunidad al siguiente nivel.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN DE SERVICIOS (Discord) */}
        <section className="py-20 md:py-32" id="servicios">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-2 mb-12 border-l-4 border-cyan-500 pl-4">
              <h2 className="font-black text-4xl md:text-6xl uppercase tracking-wide text-white">Nuestros Servicios</h2>
              <p className="text-gray-400 text-lg">Haz tu pedido directo en nuestro servidor de Discord.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Intros */}
              <a href="https://discord.gg/MmYPXRqTmr" target="_blank" rel="noreferrer" className="relative flex flex-col bg-zinc-900 border border-zinc-800 h-[350px] group transition-all duration-300 hover:border-cyan-500/50">
                <span className="absolute border-t-2 border-l-2 border-transparent group-hover:border-cyan-500 w-4 h-4 top-0 left-0 -mt-1 -ml-1 transition-all"></span>
                <span className="absolute border-t-2 border-r-2 border-transparent group-hover:border-cyan-500 w-4 h-4 top-0 right-0 -mt-1 -mr-1 transition-all"></span>
                <span className="absolute border-b-2 border-l-2 border-transparent group-hover:border-cyan-500 w-4 h-4 bottom-0 left-0 -mb-1 -ml-1 transition-all"></span>
                <span className="absolute border-b-2 border-r-2 border-transparent group-hover:border-cyan-500 w-4 h-4 bottom-0 right-0 -mb-1 -mr-1 transition-all"></span>
                
                <div className="relative overflow-hidden flex flex-col h-full w-full p-6 justify-end bg-gradient-to-t from-black via-zinc-900/40 to-transparent">
                  <span className="font-black text-2xl uppercase text-white group-hover:text-cyan-400 transition-colors">
                    Intros VFX
                  </span>
                  <p className="text-sm text-gray-400 mt-2">Animaciones de alta calidad.</p>
                </div>
              </a>

              {/* Card 2: Banners */}
              <a href="https://discord.gg/MmYPXRqTmr" target="_blank" rel="noreferrer" className="relative flex flex-col bg-zinc-900 border border-zinc-800 h-[350px] group transition-all duration-300 hover:border-cyan-500/50">
                <span className="absolute border-t-2 border-l-2 border-transparent group-hover:border-cyan-500 w-4 h-4 top-0 left-0 -mt-1 -ml-1 transition-all"></span>
                <span className="absolute border-t-2 border-r-2 border-transparent group-hover:border-cyan-500 w-4 h-4 top-0 right-0 -mt-1 -mr-1 transition-all"></span>
                <span className="absolute border-b-2 border-l-2 border-transparent group-hover:border-cyan-500 w-4 h-4 bottom-0 left-0 -mb-1 -ml-1 transition-all"></span>
                <span className="absolute border-b-2 border-r-2 border-transparent group-hover:border-cyan-500 w-4 h-4 bottom-0 right-0 -mb-1 -mr-1 transition-all"></span>
                
                <div className="relative overflow-hidden flex flex-col h-full w-full p-6 justify-end bg-gradient-to-t from-black via-zinc-900/40 to-transparent">
                  <span className="font-black text-2xl uppercase text-white group-hover:text-cyan-400 transition-colors">
                    Banners
                  </span>
                  <p className="text-sm text-gray-400 mt-2">Diseños gráficos profesionales.</p>
                </div>
              </a>

              {/* Card 3: Skins */}
              <a href="https://discord.gg/MmYPXRqTmr" target="_blank" rel="noreferrer" className="relative flex flex-col bg-zinc-900 border border-zinc-800 h-[350px] group transition-all duration-300 hover:border-cyan-500/50">
                <span className="absolute border-t-2 border-l-2 border-transparent group-hover:border-cyan-500 w-4 h-4 top-0 left-0 -mt-1 -ml-1 transition-all"></span>
                <span className="absolute border-t-2 border-r-2 border-transparent group-hover:border-cyan-500 w-4 h-4 top-0 right-0 -mt-1 -mr-1 transition-all"></span>
                <span className="absolute border-b-2 border-l-2 border-transparent group-hover:border-cyan-500 w-4 h-4 bottom-0 left-0 -mb-1 -ml-1 transition-all"></span>
                <span className="absolute border-b-2 border-r-2 border-transparent group-hover:border-cyan-500 w-4 h-4 bottom-0 right-0 -mb-1 -mr-1 transition-all"></span>
                
                <div className="relative overflow-hidden flex flex-col h-full w-full p-6 justify-end bg-gradient-to-t from-black via-zinc-900/40 to-transparent">
                  <span className="font-black text-2xl uppercase text-white group-hover:text-cyan-400 transition-colors">
                    Skins de Armas
                  </span>
                  <p className="text-sm text-gray-400 mt-2">Modelados personalizados.</p>
                </div>
              </a>

              {/* Card 4: Mapeados */}
              <a href="https://discord.gg/MmYPXRqTmr" target="_blank" rel="noreferrer" className="relative flex flex-col bg-zinc-900 border border-zinc-800 h-[350px] group transition-all duration-300 hover:border-cyan-500/50">
                <span className="absolute border-t-2 border-l-2 border-transparent group-hover:border-cyan-500 w-4 h-4 top-0 left-0 -mt-1 -ml-1 transition-all"></span>
                <span className="absolute border-t-2 border-r-2 border-transparent group-hover:border-cyan-500 w-4 h-4 top-0 right-0 -mt-1 -mr-1 transition-all"></span>
                <span className="absolute border-b-2 border-l-2 border-transparent group-hover:border-cyan-500 w-4 h-4 bottom-0 left-0 -mb-1 -ml-1 transition-all"></span>
                <span className="absolute border-b-2 border-r-2 border-transparent group-hover:border-cyan-500 w-4 h-4 bottom-0 right-0 -mb-1 -mr-1 transition-all"></span>
                
                <div className="relative overflow-hidden flex flex-col h-full w-full p-6 justify-end bg-gradient-to-t from-black via-zinc-900/40 to-transparent">
                  <span className="font-black text-2xl uppercase text-white group-hover:text-cyan-400 transition-colors">
                    Mapeados
                  </span>
                  <p className="text-sm text-gray-400 mt-2">Mapas optimizados para servidores.</p>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* 4. SECCIÓN ACADEMIA / CURSOS */}
        <section className="py-20 md:py-32 bg-zinc-900/30 border-t border-zinc-800" id="academia">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div className="flex flex-col gap-2">
                <h2 className="font-black text-4xl md:text-6xl uppercase tracking-wide text-white">ACADEMIA DK</h2>
                <p className="text-gray-400 text-lg">Aprende nuestras técnicas de diseño y VFX con tutoriales y cursos en venta.</p>
              </div>
            </div>

            {/* Tarjeta de Curso Principal */}
            <div className="w-full relative flex flex-col md:flex-row bg-zinc-900 border border-zinc-800 group transition-all hover:border-cyan-500/50">
              <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-black/40">
                <span className="text-cyan-500 font-bold uppercase tracking-widest text-sm mb-3">Tutorial / Curso en Venta</span>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">Masterclass: Animaciones y Diseño</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Domina las herramientas profesionales de diseño, creación de assets y optimización. Aprende de forma directa y eleva tus habilidades al máximo nivel.
                </p>
                <a href="AQUÍ_PON_TU_ENLACE_DE_COMPRA_O_DISCORD" className="w-fit bg-cyan-500 text-black font-black uppercase tracking-wider px-8 py-4 hover:bg-cyan-400 hover:scale-105 transition-all">
                  Adquirir Curso
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 font-medium">
        <p>© 2026 DK Studios. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
} 

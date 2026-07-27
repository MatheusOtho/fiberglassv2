import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Importações dos assets de categorias fornecidos
import Categoria1 from "../../assets/home/categorias/banco-em-fibra.jpg";
import Categoria2 from "../../assets/home/categorias/cadeira-erotica-em-fibra.jpg";
import Categoria3 from "../../assets/home/categorias/decoracao-em-fibra.jpg";
import Categoria4 from "../../assets/home/categorias/mesa-em-fibra.jpg";
import Categoria5 from "../../assets/home/categorias/poltrona-em-fibra.jpg";
import Categoria6 from "../../assets/home/categorias/projetos-em-fibra.jpg";
import Categoria7 from "../../assets/home/categorias/vasos-em-fibra.jpg";

export function Categorias() {
  const categoriasData = [
    {
      name: "Bancos",
      img: Categoria1,
      icon: "fa-chair",
      link: "/categoria-bancos",
      gridClass: "col-span-2 row-span-2", 
    },
    {
      name: "Poltronas",
      img: Categoria5,
      icon: "fa-couch",
      link: "/categoria-poltronas",
      gridClass: "col-span-2 md:col-span-1 row-span-1",
    },
    {
      name: "Vasos & Paisagismo",
      img: Categoria7,
      icon: "fa-seedling",
      link: "/categoria-paisagismo",
      gridClass: "col-span-2 md:col-span-1 row-span-1",
    },
    {
      name: "Mesas",
      img: Categoria4,
      icon: "fa-table",
      link: "/categoria-mesas",
      gridClass: "col-span-2 row-span-1",
    },
    {
      name: "Decorações",
      img: Categoria3,
      icon: "fa-wand-magic-sparkles",
      link: "/categoria-decoracoes",
      gridClass: "col-span-1 row-span-1",
    },
    {
      name: "Cadeiras Eróticas",
      img: Categoria2,
      icon: "fa-fire",
      link: "/categoria-cadeiras-eroticas",
      gridClass: "col-span-1 row-span-1",
    },
    {
      name: "Projetos Especiais",
      img: Categoria6,
      icon: "fa-gem",
      link: "/categoria-projetos-especiais",
      gridClass: "col-span-2 row-span-1",
    },
  ];

  return (
    <section id="categorias" className="py-28 md:py-36 bg-zinc-950 text-white relative overflow-hidden">
      
      {/* Fundo orgânico em SVG fluido com ondas/curvas suaves */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path d="M-100 200C300 100 500 500 800 300C1100 100 1300 600 1550 400V900H-100V200Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="725" y1="200" x2="725" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f59e0b" stopOpacity="0.15" />
              <stop offset="1" stopColor="#18181b" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Header com divisória orgânica SVG abaixo */}
        <div className="flex flex-col items-center justify-center mb-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm">
              <span>Coleções Exclusivas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Nossas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                Categorias
              </span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-md mx-auto leading-relaxed">
              Mobiliário de alta resistência e design refinado esculpido sob medida em fibra de vidro.
            </p>

            {/* Elemento gráfico SVG wave separador minimalista */}
            <div className="pt-4 flex justify-center">
              <svg className="w-32 h-3 text-amber-500/80" viewBox="0 0 100 12" fill="none">
                <path d="M0 6C25 12 75 0 100 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Dinâmico */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[150px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
        >
          {categoriasData.map((cat, index) => (
            <motion.div
              key={index}
              className={cat.gridClass}
              variants={{
                hidden: { opacity: 0, scale: 0.96, y: 20 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 16,
                  },
                },
              }}
            >
              <Link
                to={cat.link}
                className="group relative w-full h-full rounded-3xl overflow-hidden block bg-zinc-900 border border-zinc-800/80 shadow-lg hover:border-amber-500/50 transition-all duration-500"
                aria-label={`Ver categoria ${cat.name}`}
              >
                {/* Imagem de Fundo com Zoom Cinematográfico */}
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Gradiente de Mascaramento Profundo */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent transition-opacity duration-300" />

                {/* Ícone flutuante */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-white flex items-center justify-center transform -translate-y-1 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all duration-300 shadow-md">
                  <i className={`fa-solid ${cat.icon} text-xs text-amber-400 group-hover:text-zinc-950 transition-colors`}></i>
                </div>

                {/* Legenda e Detalhes Inferiores */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between z-10">
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base md:text-lg font-extrabold text-white tracking-tight drop-shadow-sm">
                      {cat.name}
                    </h3>
                    <div className="w-5 h-[2px] bg-amber-400 group-hover:w-16 transition-all duration-300 rounded-full" />
                  </div>

                  {/* Seta circular */}
                  <div className="w-9 h-9 rounded-2xl bg-zinc-900 border border-zinc-700/80 text-white flex items-center justify-center transform translate-x-1 group-hover:translate-x-0 group-hover:bg-amber-400 group-hover:text-zinc-950 group-hover:border-amber-400 transition-all duration-300 shadow-md shrink-0">
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </div>
                </div>

                {/* Contorno interno de Luxo no Hover */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-amber-400/30 transition-colors duration-300 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Categorias;
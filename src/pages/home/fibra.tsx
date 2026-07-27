import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import imgVasos from "../../assets/home/fibra/vaso-modelo-quadrado-em-fibra.jpg";
import imgPoltronas from "../../assets/home/fibra/poltrona-modelo-stone-em-fibra.jpg";
import imgMesas from "../../assets/home/fibra/mesa-modelo-cone-em-fibra.jpg";

const CATEGORIAS = [
  {
    id: 0,
    label: "Vasos Monumentais",
    img: imgVasos,
    tag: "Paisagismo & Luxo",
    desc: "Peças exclusivas desenhadas para dar destaque, imponência e sofisticação incomparável a grandes projetos.",
  },
  {
    id: 1,
    label: "Poltronas Esculturais",
    img: imgPoltronas,
    tag: "Design & Conforto",
    desc: "Linhas fluidas, orgânicas e ergonomia avançada fundidas em peças de mobiliário únicas.",
  },
  {
    id: 2,
    label: "Mesas Sob Medida",
    img: imgMesas,
    tag: "Engenharia & Funcionalidade",
    desc: "Mobiliário técnico estruturado de alta resistência e acabamento impecável para ambientes exigentes.",
  },
];

const VANTAGENS = [
  {
    icon: "fa-shield-halved",
    title: "Resistência Intempérica",
    desc: "Proteção total contra chuva, sol forte, maresia e variações térmicas extremas.",
  },
  {
    icon: "fa-feather",
    title: "Estrutura Leve",
    desc: "Imponência visual combinada com a praticidade de manuseio e transporte facilitado.",
  },
  {
    icon: "fa-star",
    title: "Acabamento Premium",
    desc: "Superfície refinada de alto padrão, baixíssima manutenção e durabilidade estendida.",
  },
];

export function Fibra() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="min-h-screen w-full bg-[#f8f9fa] text-zinc-900 relative overflow-hidden selection:bg-amber-600 selection:text-white py-24 md:py-32 flex flex-col justify-center">
      
      {/* ================= DIVISÓRIA SVG (TRANSIÇÃO DA HERO DARK) ================= */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 md:h-20 text-[#f8f9fa]"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,0 L0,0 Z"
            className="fill-zinc-950"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* ================= HEADER CENTRALIZADO ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-zinc-200/80 text-amber-700 text-xs font-bold tracking-widest uppercase rounded-full shadow-sm mb-4"
          >
            <i className="fa-solid fa-layer-group text-[10px] text-amber-600"></i>
            <span>Alta Performance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight mb-4"
          >
            Móveis em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600">
              Fibra de Vidro
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-sm sm:text-base leading-relaxed"
          >
            A escolha definitiva de arquitetos para unir leveza, durabilidade extrema e liberdade absoluta de formas em projetos de alto padrão.
          </motion.p>
        </div>

        {/* ================= GRID PRINCIPAL (IMAGEM + CARD DE DETALHES) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Lado Esquerdo: Imagem Dinâmica em Destaque */}
          <div className="lg:col-span-7 h-[380px] sm:h-[460px] relative">
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-200">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent z-10 pointer-events-none" />

                  <img
                    src={CATEGORIAS[activeTab].img}
                    alt={CATEGORIAS[activeTab].label}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  {/* Tag Flutuante sobre a Imagem */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between gap-4">
                    <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/80 shadow-xl">
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-700 block mb-0.5">
                        {CATEGORIAS[activeTab].tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-zinc-950">
                        {CATEGORIAS[activeTab].label}
                      </h3>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md text-white px-4 py-3 rounded-2xl border border-zinc-800 shadow-lg text-xs font-medium">
                      <i className="fa-solid fa-sparkles text-amber-400"></i>
                      <span>Exclusivo sob encomenda</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Lado Direito: Seletor Interativo Moderno */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <div className="mb-1">
              <span className="text-xs font-black uppercase tracking-widest text-zinc-400 block mb-1.5">
                Explore as Linhas
              </span>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                Engenharia aplicada ao design
              </h3>
            </div>

            <div className="space-y-3">
              {CATEGORIAS.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                      isActive
                        ? "bg-white border-amber-600/50 text-zinc-950 shadow-xl shadow-amber-600/5 ring-1 ring-amber-600/20"
                        : "bg-white/60 border-zinc-200 text-zinc-600 hover:bg-white hover:border-zinc-300 hover:shadow-md"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-600" />
                    )}

                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold text-base tracking-tight ${isActive ? "text-amber-700" : "text-zinc-900"}`}>
                        {item.label}
                      </span>
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-colors ${isActive ? "bg-amber-100 text-amber-700" : "bg-zinc-100 text-zinc-400 group-hover:text-zinc-700"}`}>
                        <i className={`fa-solid ${isActive ? "fa-arrow-right" : "fa-plus"} text-xs`}></i>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed pr-4">
                      {item.desc}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= CARDS DE VANTAGENS (ESTILO GRID LIMPO) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-zinc-200/80">
          {VANTAGENS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <i className={`fa-solid ${item.icon} text-base`}></i>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-zinc-950 mb-1 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Fibra;
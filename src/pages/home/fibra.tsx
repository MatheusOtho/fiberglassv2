import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sugestão de imagens focadas nos pilares do seu produto
import imgVasos from "../../assets/home/fibra/vaso-modelo-quadrado-em-fibra.jpg";
import imgPoltronas from "../../assets/home/fibra/poltrona-modelo-stone-em-fibra.jpg";
import imgMesas from "../../assets/home/fibra/mesa-modelo-cone-em-fibra.jpg";

export function Fibra() {
  // Estado para controlar a aba ativa do produto showcase
  const [activeTab, setActiveTab] = useState(0);

  const categorias = [
    { id: 0, label: "Vasos Monumentais", img: imgVasos, tag: "Paisagismo & Luxo" },
    { id: 1, label: "Poltronas Esculturais", img: imgPoltronas, tag: "Design & Conforto" },
    { id: 2, label: "Mesas Sob Medida", img: imgMesas, tag: "Engenharia & Funcionalidade" },
  ];

  const vantagens = [
  {
    icon: "fa-shield-halved",
    title: "Resistência Intempérica",
    desc: "Durabilidade contra chuva, sol, maresia e variações térmicas, ideal para ambientes internos e externos.",
  },
  {
    icon: "fa-feather",
    title: "Estrutura",
    desc: "Peças que entregam imponência visual aliada a uma leveza e praticidade no manuseio.",
  },
  {
    icon: "fa-star",
    title: "Acabamento",
    desc: "Superfície refinada, projetada para uma manutenção simples e conservação impecável.",
  },
];

  return (
    <section className="py-20 bg-[#fafafa] relative overflow-hidden border-t border-zinc-100 selection:bg-zinc-900 selection:text-white">
      
      {/* Luz de fundo tecnológica sutil centralizada */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* ================= HEADER DA SEÇÃO (FOCO SEO) ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200/60 text-zinc-500 text-[11px] font-bold tracking-wider uppercase rounded-md"
          >
            <i className="fa-solid fa-layer-group text-[10px] text-amber-600"></i>
            <span>Alta Performance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight leading-[1.15]"
          >
            Móveis em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600">
              Fibra de Vidro
            </span>
          </motion.h1>

            <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-600 text-sm md:text-base leading-relaxed"
            >
                Descubra por que arquitetos e designers escolhem a flexibilidade da fibra de vidro para 
                materializar desde linhas completas de mobiliário corporativo, comercial e residencial até peças esculturais 
                exclusivas.
            </motion.p>
        </div>

        {/* ================= SHOWCASE INTERATIVO PREMIUM ================= */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* Seletores estilo Abas Vercel */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-zinc-100/80 border border-zinc-200/50 rounded-2xl mb-8 max-w-xl mx-auto backdrop-blur-sm">
            {categorias.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeTab === tab.id ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-zinc-200/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Janela de Exibição da Imagem com Ajuste Responsivo Premium */}
            <div className="relative w-full h-[320px] sm:h-[450px] md:h-[500px]  rounded-3xl overflow-hidden border border-zinc-200/80 shadow-[0_30px_60px_rgba(0,0,0,0.05)] bg-zinc-100">
            <AnimatePresence mode="wait">
                <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full"
                >
                {/* Overlay sutil para garantir leitura do badge se necessário */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent z-10 pointer-events-none" />
                
                <img
                    src={categorias[activeTab].img}
                    alt={categorias[activeTab].label}
                    /* Ajustamos o object-cover e adicionamos object-center para não cortar as laterais dos vasos e poltronas */
                    className="w-full h-full object-cover object-center md:object-center transition-transform duration-700 hover:scale-102"
                />
                
                {/* Badge de Categoria Flutuante */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/20 shadow-lg">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-amber-700">
                    {categorias[activeTab].tag}
                    </p>
                </div>
                </motion.div>
            </AnimatePresence>
            </div>
        </div>

        {/* ================= GRID DE VANTAGENS INLINE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {vantagens.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="bg-white/60 backdrop-blur-sm border border-zinc-200/50 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.01)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:border-zinc-300/80 group"
            >
              <div className="w-10 h-10 rounded-lg bg-zinc-100 text-zinc-800 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 shadow-sm">
                <i className={`fa-solid ${item.icon} text-sm transition-transform duration-300 group-hover:scale-110`}></i>
              </div>
              <h3 className="text-sm font-bold text-zinc-950 tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Fibra;
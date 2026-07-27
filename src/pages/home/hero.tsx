import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Importação das imagens
import bannerFundo from "../../assets/home/hero/moveis-personalizados.png";
import imgLateral from "../../assets/home/hero/poltrona-modelo-stone.png";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    
    const timer: ReturnType<typeof setInterval> = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 pb-6 sm:pb-10 bg-zinc-950 overflow-hidden selection:bg-amber-500 selection:text-zinc-950">
      
      {/* ================= BACKGROUND DARK ================= */}
      <div className="absolute inset-0 z-0 select-none">
        <motion.img
          src={bannerFundo}
          alt="Móveis Personalizados em Fibra de Vidro"
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-40 lg:opacity-50"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        {/* Gradientes responsivos escuros */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent" />
      </div>

      {/* ================= IMAGEM DE DESTAQUE LATERAL (APENAS DESKTOP ≥ 1280px) ================= */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="hidden xl:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-20 max-w-[400px] xl:max-w-[460px] pointer-events-none select-none"
      >
        <motion.img
          src={imgLateral}
          alt="Poltrona Modelo Stone"
          className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
        />
      </motion.div>

      {/* ================= CONTAINER CENTRALIZADO DA HERO ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center gap-6 sm:gap-10 my-auto">
        
        {/* TOPO: BADGE E TÍTULO PRINCIPAL */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3"
          >
            <span className="h-[2px] w-5 sm:w-8 bg-amber-500" />
            <span className="text-amber-400 font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-xs">
              FiberGlass Móveis
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-light text-white tracking-tight leading-[1.12] drop-shadow-lg"
          >
            Transforme seu ambiente com <br className="hidden sm:inline" />
            <span className="font-extrabold text-amber-400 italic font-serif block sm:inline mt-1 sm:mt-0">
              elegância & durabilidade
            </span>
          </motion.h1>
        </div>

        {/* BASE: PARÁGRAFO, CONTADORES E BOTÃO */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          
          {/* Bloco de Texto e Contadores (Sem Fundo) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl w-full"
          >
            <p className="text-zinc-200 text-xs sm:text-base lg:text-lg leading-relaxed font-normal drop-shadow">
              Bancos, mesas, poltronas, cadeiras, decorações e vasos sob medida. Sofisticação e alta durabilidade para ambientes internos, externos, shoppings, condomínios e paisagismo.
            </p>
            
            {/* Contadores */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 mt-4 pt-4 border-t border-white/20 text-center sm:text-left">
              <div>
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-amber-400 block">
                  <Counter end={150} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs lg:text-base text-zinc-300 uppercase tracking-wider block font-medium">
                  Projetos
                </span>
              </div>

              <div className="border-x border-white/20 px-1 sm:border-x-0 sm:px-0">
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-amber-400 block">
                  <Counter end={10} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs lg:text-base text-zinc-300 uppercase tracking-wider block font-medium">
                  Anos Exp.
                </span>
              </div>

              <div>
                <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-amber-400 block">
                  <Counter end={110} suffix="+" />
                </span>
                <span className="text-[10px] sm:text-xs lg:text-base text-zinc-300 uppercase tracking-wider block font-medium">
                  Clientes
                </span>
              </div>
            </div>
          </motion.div>

          {/* Botão Responsivo Padronizado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-auto"
          >
            <a
              href="https://wa.me/5511999474730?text=Olá! Gostaria de conversar sobre um projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/30 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 group text-sm sm:text-base tracking-wide"
            >
              <i className="fa-brands fa-whatsapp text-emerald-400 text-lg sm:text-xl transition-transform group-hover:rotate-12"></i>
              <span>Fale com Vendedor</span>
            </a>
          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
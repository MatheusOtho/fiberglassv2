import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importações do PC (Desktop)
import carrossel1 from "../../assets/home/carrossel/pc/banco-moon-e-poltrona-living.jpg";
import carrossel2 from "../../assets/home/carrossel/pc/banco-moon-em-fibra.jpg";
import carrossel3 from "../../assets/home/carrossel/pc/banco-tablet-em-fibra.jpg";
import carrossel4 from "../../assets/home/carrossel/pc/cadeiras-eroticas-em-fibra.jpg";
import carrossel5 from "../../assets/home/carrossel/pc/decoracao-natalina-em-fibra.jpg";
import carrossel6 from "../../assets/home/carrossel/pc/decoracao-natalina-ursos-em-fibra.jpg";
import carrossel7 from "../../assets/home/carrossel/pc/escorregador-em-fibra.jpg";
import carrossel8 from "../../assets/home/carrossel/pc/letreiro-natalino-em-fibra.jpg";
import carrossel9 from "../../assets/home/carrossel/pc/mesas-em-fibra-de-vidro.jpg";
import carrossel10 from "../../assets/home/carrossel/pc/modulo-circular-em-fibra.jpg";
import carrossel11 from "../../assets/home/carrossel/pc/paisagismo-em-fibra.jpg";
import carrossel12 from "../../assets/home/carrossel/pc/poltrona-em-fibra-ball-e-quite.jpg";
import carrossel13 from "../../assets/home/carrossel/pc/poltrona-living.jpg";
import carrossel14 from "../../assets/home/carrossel/pc/poltrona-modelo-stone-em-fibra.jpg";
import carrossel15 from "../../assets/home/carrossel/pc/poltrona-quite-e-banco-tablet.jpg";
import carrossel16 from "../../assets/home/carrossel/pc/vasos-e-paisagismo-em-fibra.jpg";

// Importações do Mobile (< 1024px)
import mobile1 from "../../assets/home/carrossel/mobile/banco-safira.jpg";
import mobile2 from "../../assets/home/carrossel/mobile/bolas-natalinas.jpg";
import mobile3 from "../../assets/home/carrossel/mobile/cadeira-erotica-spicy.jpg";
import mobile4 from "../../assets/home/carrossel/mobile/escorregador.jpg";
import mobile5 from "../../assets/home/carrossel/mobile/letreiro-ho-ho-ho.jpg";
import mobile6 from "../../assets/home/carrossel/mobile/mesa-cone.jpg";
import mobile7 from "../../assets/home/carrossel/mobile/poltrona-ball.jpg";
import mobile8 from "../../assets/home/carrossel/mobile/poltrona-quite.jpg";
import mobile9 from "../../assets/home/carrossel/mobile/poltronas-stone.jpg";
import mobile10 from "../../assets/home/carrossel/mobile/urso-natalino.jpg";
import mobile11 from "../../assets/home/carrossel/mobile/vaso-quadrado.jpg";

const DESKTOP_SLIDES = [
  { id: 1, img: carrossel1, title: "Banco Moon e Poltrona Living" },
  { id: 2, img: carrossel2, title: "Banco Moon em Fibra" },
  { id: 3, img: carrossel3, title: "Banco Tablet em Fibra" },
  { id: 4, img: carrossel4, title: "Cadeiras Exclusivas em Fibra" },
  { id: 5, img: carrossel5, title: "Decoração Natalina em Fibra" },
  { id: 6, img: carrossel6, title: "Decoração Ursos de Natal" },
  { id: 7, img: carrossel7, title: "Escorregador em Fibra" },
  { id: 8, img: carrossel8, title: "Letreiro Natalino Corporativo" },
  { id: 9, img: carrossel9, title: "Mesas em Fibra de Vidro" },
  { id: 10, img: carrossel10, title: "Módulo Circular Design" },
  { id: 11, img: carrossel11, title: "Paisagismo Conceito em Fibra" },
  { id: 12, img: carrossel12, title: "Poltrona Ball e Poltrona Quite" },
  { id: 13, img: carrossel13, title: "Poltrona Living" },
  { id: 14, img: carrossel14, title: "Poltrona Modelo Stone" },
  { id: 15, img: carrossel15, title: "Poltrona Quite e Banco Tablet" },
  { id: 16, img: carrossel16, title: "Vasos de Luxo e Paisagismo" },
];

const MOBILE_SLIDES = [
  { id: 1, img: mobile1, title: "Banco Safira em Fibra" },
  { id: 2, img: mobile2, title: "Bolas Natalinas Decorativas" },
  { id: 3, img: mobile3, title: "Cadeira Erótica Spicy" },
  { id: 4, img: mobile4, title: "Escorregador Revestido" },
  { id: 5, img: mobile5, title: "Letreiro Ho Ho Ho" },
  { id: 6, img: mobile6, title: "Mesa Cone Alto Padrão" },
  { id: 7, img: mobile7, title: "Poltrona Ball Conceito" },
  { id: 8, img: mobile8, title: "Poltrona Quite Design" },
  { id: 9, img: mobile9, title: "Poltrona Stone Exclusiva" },
  { id: 10, img: mobile10, title: "Urso Natalino em Fibra" },
  { id: 11, img: mobile11, title: "Vaso Quadrado de Luxo" },
];

export function Carrossel() {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Detecta se a tela é menor que 1024px (breakpoint 'lg' do Tailwind)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Seleciona a lista de slides correta dependendo da tela
  const SLIDES = isMobileScreen ? MOBILE_SLIDES : DESKTOP_SLIDES;

  // Reseta o índice se trocar de tela para evitar erros de array out-of-bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobileScreen]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, SLIDES.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "25%" : "-25%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "25%" : "-25%",
      opacity: 0,
    }),
  };

  return (
    <section className="h-screen min-h-[600px] max-h-[1080px] w-full bg-[#f8f9fa] text-zinc-900 relative selection:bg-amber-600 selection:text-white flex flex-col justify-between py-8 md:py-12">
      
      <div className="container mx-auto px-4 max-w-6xl h-full flex flex-col justify-between">
        
        {/* ================= HEADER ================= */}
        <div className="text-center space-y-2 shrink-0">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-zinc-200 text-amber-700 text-[10px] font-bold tracking-widest uppercase rounded-md shadow-xs"
          >
            <i className="fa-solid fa-images text-[9px] text-amber-600"></i>
            <span>Galeria de Projetos</span>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight"
          >
            Portfólio de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600">
              Nossas Obras
            </span>
          </motion.h2>
        </div>

        {/* ================= FRAME PRINCIPAL DO SLIDER ================= */}
        <div className="relative flex-1 min-h-[280px] my-4 rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-200 border border-zinc-200/90 shadow-xl">
          
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={`${isMobileScreen ? 'mobile' : 'desktop'}-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  handleNext();
                } else if (info.offset.x > swipeThreshold) {
                  handlePrev();
                }
              }}
              className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
            >
              <div className="w-full h-full relative">
                <img
                  src={SLIDES[currentIndex].img}
                  alt={SLIDES[currentIndex].title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                {/* Gradiente para leitura legível dos textos */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Informações Flutuantes no Slide */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex justify-between items-end text-white z-10 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/60 shadow-md text-zinc-950">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-amber-700 block">
                    Peça Sob Medida
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold tracking-tight mt-0.5">
                    {SLIDES[currentIndex].title}
                  </h3>
                </div>

                <div className="bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-mono text-white/90 shadow-sm">
                  {(currentIndex + 1).toString().padStart(2, "0")} /{" "}
                  {SLIDES.length.toString().padStart(2, "0")}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navegação Flutuante Lateral */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 items-center justify-center text-zinc-800 hover:bg-white hover:scale-105 shadow-md transition-all duration-200 active:scale-95"
            aria-label="Slide anterior"
          >
            <i className="fa-solid fa-chevron-left text-xs"></i>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200/80 items-center justify-center text-zinc-800 hover:bg-white hover:scale-105 shadow-md transition-all duration-200 active:scale-95"
            aria-label="Próximo slide"
          >
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </button>
        </div>

        {/* ================= INDICADORES DE PAGINAÇÃO ================= */}
        <div className="flex justify-center items-center gap-1.5 overflow-x-auto py-1 px-4 max-w-full shrink-0 scrollbar-none">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 shrink-0 ${
                index === currentIndex
                  ? "w-8 bg-amber-600"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Carrossel;
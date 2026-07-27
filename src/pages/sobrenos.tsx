import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

interface Especialidade {
  icon: string;
  title: string;
  desc: string;
}

interface ValorItem {
  label: string;
  desc: string;
}

const especialidades: Especialidade[] = [
  {
    icon: "fa-flask",
    title: "Vasos Premium",
    desc: "Fabricação de vasos e pratos com acabamento automotivo impecável e altíssima durabilidade contra intempéries.",
  },
  {
    icon: "fa-monument",
    title: "Móveis Especiais",
    desc: "Criação e engenharia de bancos, mesas, poltronas e espreguiçadeiras com design ergonômico sob encomenda.",
  },
  {
    icon: "fa-gem",
    title: "Moldagem Técnica",
    desc: "Desenvolvimento técnico de moldes complexos em silicone, fibra de vidro e fundições personalizadas estruturadas.",
  },
  {
    icon: "fa-paintbrush",
    title: "Restauração",
    desc: "Serviço artesanal especializado em reparação, pintura e revitalização estrutural de peças antigas em fibra.",
  },
];

const valores: ValorItem[] = [
  { label: "Excelência", desc: "Paixão absoluta por detalhes." },
  { label: "Compromisso", desc: "Transparência técnica e prazos à risca." },
  { label: "Respeito", desc: "Valorização humana e do meio ambiente." },
  { label: "Evolução", desc: "Aperfeiçoamento e melhoria contínua." },
];

export default function SobreNos(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>FiberGlass Móveis | Sobre Nós</title>
      </Helmet>

      <div id="sobrenos" className="w-full overflow-hidden">
        
        {/* ========================================================= */}
        {/* PARTE 1: QUEM SOMOS (Fundo Amber-400 com tema vibrante e SVG) */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-32 bg-amber-400 text-zinc-950 relative overflow-hidden">
          
          {/* Elementos decorativos SVG no fundo */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0, 50 0, 100 100 Z" fill="currentColor" />
            </svg>
          </div>

          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-300 rounded-full blur-3xl pointer-events-none opacity-60" />

          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
            
            {/* Header da Seção */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-black uppercase tracking-widest text-zinc-950 bg-amber-300 px-4 py-1.5 rounded-full shadow-sm">
                Nossa Essência
              </span>
              <h1 className="text-3xl sm:text-5xl font-black mt-4 mb-4 tracking-tight">
                Quem <span className="text-white drop-shadow-sm">Somos</span>
              </h1>
              <p className="text-zinc-900 font-medium text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Descubra a história, a estrutura e a paixão por trás da FiberGlass Móveis.
              </p>
            </motion.div>

            {/* Grid de 2 Colunas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Card Empresa */}
              <motion.div 
                className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-zinc-800 flex flex-col justify-between relative overflow-hidden group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Detalhe SVG geométrico no canto */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none transform translate-x-8 -translate-y-8">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="50" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="bg-amber-400 w-12 h-12 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                      <i className="fa-solid fa-store text-lg"></i>
                    </div>
                    <h2 className="text-2xl font-black tracking-tight">
                      Nossa Empresa
                    </h2>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
                    A <span className="font-bold text-amber-400">FiberGlass Móveis</span> é uma empresa brasileira dedicada 
                    ao setor moveleiro. Nossa missão é transformar projetos em móveis únicos, unindo perfeitamente 
                    qualidade, design inovador e funcionalidade. Trabalhamos exclusivamente sob encomenda, garantindo soluções 
                    sob medida e atendimento exclusivo para cada cliente.
                  </p>
                </div>
              </motion.div>

              {/* Card O Que Fazemos */}
              <motion.div 
                className="bg-zinc-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-zinc-800 flex flex-col justify-between relative overflow-hidden group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none transform translate-x-8 -translate-y-8">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <rect width="100" height="100" rx="20" />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="bg-amber-400 w-12 h-12 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                      <i className="fa-solid fa-palette text-lg"></i>
                    </div>
                    <h2 className="text-2xl font-black tracking-tight">
                      O que Fazemos?
                    </h2>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
                    Somos especialistas no desenvolvimento e modelagem técnica de <span className="font-bold text-amber-400">móveis em fibra de vidro</span>, além de produzir <span className="font-bold text-amber-400">vasos sob medida</span> em grande escala ou personalizados. Atendemos com excelência escritórios de paisagismo, shoppings, condomínios, residências e jardins corporativos.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Divisor SVG orgânico de transição */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-white fill-current">
              <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
        </section>


        {/* ========================================================= */}
        {/* PARTE 2: NOSSAS ESPECIALIDADES (Fundo Branco Limpo) */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-32 bg-white text-zinc-900 relative">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
            
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 mb-4">
                Nossas <span className="text-amber-500">Especialidades</span>
              </h2>
              <p className="text-zinc-500 text-base max-w-lg mx-auto">
                Conheça os pilares técnicos e artesanais que entregam o mais alto padrão do mercado.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {especialidades.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="group bg-zinc-50/70 rounded-3xl border border-zinc-200/80 p-7 hover:bg-white hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
                  whileHover={{ y: -6 }}
                >
                  <div>
                    <div className="bg-amber-400/10 border border-amber-400/30 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-all duration-300 shadow-sm">
                      <i className={`fa-solid ${item.icon} text-xl`}></i>
                    </div>
                    <h3 className="font-extrabold text-zinc-950 text-lg mb-3 tracking-tight group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Divisor SVG sutil */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 text-zinc-950 fill-current">
              <path d="M0,120 L1200,120 L1200,0 C900,100 600,20 0,80 Z"></path>
            </svg>
          </div>
        </section>


        {/* ========================================================= */}
        {/* PARTE 3: PILARES (Fundo Preto com Detalhes SVG e Destaques Amarelos) */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-32 bg-zinc-950 text-white relative overflow-hidden">
          
          {/* Elementos SVG decorativos de fundo escuro */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 relative z-10">
            
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight text-white">
                Pilares da <span className="text-amber-400">FiberGlass Móveis</span>
              </h2>
              <p className="text-zinc-400 text-base max-w-md mx-auto">
                Os fundamentos que direcionam cada projeto e garantem a nossa identidade no mercado.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              
              {/* Missão Card */}
              <motion.div 
                className="bg-zinc-900/90 border border-zinc-800 p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative group hover:border-amber-400/50 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="bg-amber-400 w-12 h-12 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                      <i className="fa-solid fa-bullseye text-base"></i>
                    </div>
                    <h3 className="text-white font-extrabold text-xl tracking-tight">Missão</h3>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
                    Materializar ideias e transformar conceitos em soluções tridimensionais de excelência. Nosso compromisso é superar as expectativas dos clientes, entregando projetos sob encomenda com o mais alto padrão de acabamento.
                  </p>
                </div>
              </motion.div>

              {/* Visão Card */}
              <motion.div 
                className="bg-zinc-900/90 border border-zinc-800 p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative group hover:border-amber-400/50 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="bg-amber-400 w-12 h-12 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                      <i className="fa-solid fa-eye text-base"></i>
                    </div>
                    <h3 className="text-white font-extrabold text-xl tracking-tight">Visão</h3>
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed text-justify">
                    Ser reconhecida nacionalmente como a principal referência no mercado de fabricação de móveis e vasos personalizados de fibra, destacando-se pela fidelidade milimétrica aos projetos corporativos e residenciais.
                  </p>
                </div>
              </motion.div>

              {/* Valores Card */}
              <motion.div 
                className="bg-zinc-900/90 border border-zinc-800 p-8 rounded-3xl shadow-2xl flex flex-col justify-between relative group hover:border-amber-400/50 transition-colors"
                whileHover={{ y: -4 }}
              >
                <div className="w-full">
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="bg-amber-400 w-12 h-12 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                      <i className="fa-solid fa-heart text-base"></i>
                    </div>
                    <h3 className="text-white font-extrabold text-xl tracking-tight">Valores</h3>
                  </div>
                  
                  <div className="space-y-4 pt-1 w-full">
                    {valores.map((val, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <i className="fa-solid fa-circle-check text-amber-400 mt-1 flex-shrink-0"></i>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                          <span className="font-bold text-white">{val.label}:</span> {val.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </section>

      </div>
    </>
  );
}
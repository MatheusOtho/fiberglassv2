import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

import decoracao1 from "../../../assets/categorias/decoracoes/conjunto-bolas-natalinas-modelo-1.jpg";
import decoracao2 from "../../../assets/categorias/decoracoes/conjunto-bolas-natalinas-modelo-2.jpg";
import decoracao3 from "../../../assets/categorias/decoracoes/modulo-circular.jpg";
import decoracao4 from "../../../assets/categorias/decoracoes/quebra-nozes.jpg";
import decoracao5 from "../../../assets/categorias/decoracoes/torre-bolas-natalinas.jpg";
import decoracao6 from "../../../assets/categorias/decoracoes/urso-natalino-modelo-1.jpg";
import decoracao7 from "../../../assets/categorias/decoracoes/urso-natalino-modelo-2.jpg";
import decoracao8 from "../../../assets/categorias/decoracoes/urso-natalino-modelo-3.jpg";

import bannerDecoracoes from "../../../assets/categorias/decoracoes/bannerDecoracoes.jpg";

interface ItemDecoracao {
  name: string;
  slug: string;
  img: string;
  categoryLabel: string;
}

export function Decoracoes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itensDecoracoes: ItemDecoracao[] = [
    {
      name: "Conjunto de Bolas Natalinas Modelo 1",
      slug: "/categoria-decoracoes/conjunto-bolas-natalinas-modelo-1",
      img: decoracao1,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Conjunto de Bolas Natalinas Modelo 2",
      slug: "/categoria-decoracoes/conjunto-bolas-natalinas-modelo-2",
      img: decoracao2,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Modulo Circular",
      slug: "/categoria-decoracoes/modulo-circular",
      img: decoracao3,
      categoryLabel: "Decoração Inovadora",
    },
    {
      name: "Escultura Quebra Nozes",
      slug: "/categoria-decoracoes/quebra-nozes",
      img: decoracao4,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Torre de Bolas Natalinas",
      slug: "/categoria-decoracoes/torre-de-bolas-natalinas",
      img: decoracao5,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Urso Natalino com Balões",
      slug: "/categoria-decoracoes/urso-natalino-com-baloes",
      img: decoracao6,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Urso Natalino Sentado",
      slug: "/categoria-decoracoes/urso-natalino-sentado",
      img: decoracao7,
      categoryLabel: "Design Natalino",
    },
    {
      name: "Urso Natalino com Gorro",
      slug: "/categoria-decoracoes/urso-natalino-com-gorro",
      img: decoracao8,
      categoryLabel: "Design Natalino",
    },
  ];

  return (
    <>
      <Helmet>
        <title>FiberGlass Móveis | Decorações em Fibra de Vidro</title>
      </Helmet>
      
      <main className="min-h-screen bg-white text-zinc-950 pb-32 relative overflow-hidden selection:bg-amber-500 selection:text-white">
        
        {/* Banner Superior Executivo com Transição SVG Orgânica */}
        <section className="relative h-[48vh] sm:h-[58vh] w-full overflow-hidden bg-zinc-950 select-none flex items-center justify-center">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={bannerDecoracoes}
              alt="Banner Coleção Decorações de Alto Padrão"
              className="w-full h-full object-cover opacity-50 brightness-90 transform scale-100"
            />
            {/* Gradientes e Camadas de Profundidade */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-transparent" />
          </div>

          {/* Elementos SVG Decorativos de Fundo no Banner */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
              <path d="M-100 100C400 300 700 50 1100 250C1350 380 1500 150 1600 200V900H-100V100Z" fill="url(#banner_gradient)" />
              <defs>
                <linearGradient id="banner_gradient" x1="725" y1="100" x2="725" y2="900" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f59e0b" stopOpacity="0.25" />
                  <stop offset="1" stopColor="#09090b" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Conteúdo Centralizado do Banner */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-amber-400 text-[11px] font-black tracking-widest uppercase rounded-full backdrop-blur-md shadow-lg">
                <svg className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                <span>Decorações em Fibra</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
                Decorações
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mx-auto" />

              <p className="text-zinc-300 text-sm sm:text-base max-w-lg mx-auto font-normal leading-relaxed">
                Design exclusivo e acabamento de qualidade para compor ambientes com estilo e personalidade.
              </p>
            </motion.div>
          </div>

          {/* Divisor SVG Curvo Integrando o Banner com o Corpo da Página */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
            <svg className="relative block w-full h-10 sm:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
          </div>
        </section>

        {/* Fundo Decorativo Discreto no Corpo */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

        {/* Conteúdo Principal: Grid de Produtos */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mt-12 sm:mt-16 relative z-20">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {itensDecoracoes.map((decoracoes, idx) => (
              <motion.div
                key={decoracoes.slug}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-transparent"
              >
                {/* Imagem do Card - Proporção [4/5] */}
                <Link
                  to={decoracoes.slug}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden block bg-zinc-100 border border-zinc-200/80 shadow-sm group-hover:shadow-xl group-hover:border-amber-400/60 transition-all duration-500"
                  aria-label={`Ver detalhes de ${decoracoes.name}`}
                >
                  <img
                    src={decoracoes.img}
                    alt={decoracoes.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    loading="lazy"
                  />
                  
                  {/* Gradiente sutil overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  {/* Botão de Visualização com Ícone SVG no Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <div className="w-12 h-12 rounded-2xl bg-white text-zinc-950 flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-400">
                      <svg className="w-5 h-5 text-zinc-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    </div>
                  </div>
                </Link>

                {/* Metadados / Detalhes do Produto */}
                <div className="pt-4 px-2 pb-2 space-y-2 text-left flex flex-col items-start">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200/60 text-amber-700 text-[10px] font-black uppercase tracking-widest rounded-md">
                    <svg className="w-3 h-3 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                    <span>{decoracoes.categoryLabel}</span>
                  </div>
                  
                  <Link 
                    to={decoracoes.slug}
                    className="block group-hover:text-amber-600 transition-colors duration-200"
                  >
                    <h3 className="text-base font-black text-zinc-950 tracking-tight leading-tight">
                      {decoracoes.name}
                    </h3>
                  </Link>

                  <Link
                    to={decoracoes.slug}
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-amber-600 text-xs font-bold transition-colors duration-200 pt-1"
                  >
                    <span>Especificações Técnicas</span>
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rodapé Executivo / Chamada Final com Detalhes SVG */}
          <div className="mt-28 p-8 sm:p-12 rounded-3xl bg-zinc-50 border border-zinc-200/80 shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-3 max-w-xl mx-auto">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <h4 className="text-lg font-black text-zinc-950 uppercase tracking-tight">Precisa de um Projeto Personalizado?</h4>
              <p className="text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
                Atendemos projetos corporativos, residenciais, comerciais e áreas de grande fluxo. Entre em contato conosco para conversar sobre suas demandas sob medida.
              </p>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}

export default Decoracoes;
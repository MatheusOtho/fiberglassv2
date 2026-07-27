import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import banco1 from "../../../assets/categorias/bancos/banco-safira.jpeg";
import banco2 from "../../../assets/categorias/bancos/banco-tablet.jpeg";

interface itemBancos {
  name: string;
  slug: string;
  img: string;
  categoryLabel: string;
  complementoDescricao: string;
}

export function DetalhesBancos() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentSlug = `/categoria-bancos/${slug}`;

  const produtos: itemBancos[] = [
    {
      name: "Banco Safira",
      slug: "/categoria-bancos/banco-safira",
      img: banco1,
      categoryLabel: "Design Único",
      complementoDescricao: "combina design sofisticado, durabilidade e exclusividade, tornando-se a escolha perfeita para condomínios, áreas externas e projetos que exigem elegância e qualidade.",
    },
    {
      name: "Banco Tablet",
      slug: "/categoria-bancos/banco-tablet",
      img: banco2,
      categoryLabel: "Sofisticado",
      complementoDescricao: "é a escolha ideal para quem busca unir um design exclusivo à elegância de uma peça imponente. Perfeito para compor jardins, condomínios, áreas externas, espaços abertos e diversos outros ambientes.",
    },
  ];

  const produto = produtos.find((p) => p.slug === currentSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (produto) {
      document.title = `FiberGlass Móveis | ${produto.name}`;
    }
  }, [currentSlug, produto]);

  if (!produto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-zinc-950 px-4">
        <h2 className="text-xl font-bold mb-4">Mobiliário não encontrado</h2>
        <button onClick={() => navigate("/categoria-bancos")} className="px-6 py-3 bg-zinc-950 text-white text-xs font-bold rounded-2xl hover:bg-amber-600 transition-colors">
          Voltar para Bancos
        </button>
      </div>
    );
  }

  const numeroWhats = "5511980129528";
  const messageWhats = encodeURIComponent(`Olá, tenho interesse em saber mais sobre o produto: ${produto.name}`);
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhats}&text=${messageWhats}`;

  return (
    <main className="min-h-screen bg-white text-zinc-950 pt-28 pb-24 relative overflow-hidden selection:bg-amber-500 selection:text-white">
      
      {/* Background Decorativo SVG Refinado em tons claros no fundo de tudo */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
          <path d="M-100 200C300 100 500 500 800 300C1100 100 1300 600 1550 400V900H-100V200Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="725" y1="200" x2="725" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f59e0b" stopOpacity="0.12" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        {/* Breadcrumb Executivo com SVG */}
        <nav className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2 select-none">
          <Link to="/" className="hover:text-amber-600 transition-colors">Início</Link>
          <svg className="w-3 h-3 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          <Link to="/categoria-bancos" className="hover:text-amber-600 transition-colors">Bancos</Link>
          <svg className="w-3 h-3 text-zinc-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          <span className="text-amber-600 font-black">{produto.name}</span>
        </nav>

        {/* Layout Split Screen Moderno e Esculpido */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Foto de Destaque com Moldura Reduzida e Imagem Preenchendo (object-cover) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative h-[360px] sm:h-[420px] lg:h-[500px] w-full rounded-3xl overflow-hidden bg-zinc-50 border border-zinc-200/80 shadow-xl group"
          >
            <img 
              src={produto.img} 
              alt={produto.name} 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
            {/* Gradiente sutil overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            
          </motion.div>

          {/* Dados Técnicos e Comerciais */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Títulos e Tag de Categoria */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200/60 text-amber-700 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                <svg className="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                <span>{produto.categoryLabel}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight leading-tight">
                {produto.name}
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
            </div>

            {/* Descrição de Arquitetura */}
            <div className="space-y-2 bg-zinc-50 p-5 rounded-3xl border border-zinc-200/80 shadow-sm">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-black uppercase tracking-wider">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                <span>Descrição de Arquitetura</span>
              </div>
              <p className="text-zinc-700 text-sm md:text-base leading-relaxed font-normal">
                <strong className="text-zinc-950 font-extrabold">{produto.name}</strong> {produto.complementoDescricao}
              </p>
            </div>

            {/* Grid de Acabamentos Premium com SVG */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-black uppercase tracking-wider">
                <svg className="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 73.5l2-2m2 2l2-2"/></svg>
                <span>Detalhes de Acabamento</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: "Material de Engenharia", value: "Fibra de Vidro Alta Resistência" },
                  { title: "Acabamento Visual", value: "Pintura automotiva de alto padrão" },
                ].map((item, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-1 hover:border-amber-400 transition-colors shadow-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-amber-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      <span className="block text-xs font-bold text-zinc-950">{item.title}</span>
                    </div>
                    <span className="block text-xs text-zinc-600 pl-6 leading-normal">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ação de Contato WhatsApp */}
            <div className="pt-1">
              <a
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-3.5 px-8 rounded-2xl bg-zinc-950 text-white font-black text-xs uppercase tracking-wider hover:bg-amber-600 shadow-xl shadow-zinc-950/10 active:scale-[0.99] transition-all duration-300 group"
              >
                <svg className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.026.273 2.016.792 2.872l-.841 3.071 3.149-.825c.815.449 1.745.688 2.667.689 3.181 0 5.767-2.587 5.767-5.767 0-3.18-2.586-5.766-5.767-5.766zm3.393 8.192c-.144.407-.833.774-1.156.822-.303.045-.694.073-1.121-.061-.258-.081-.591-.194-1.02-.379-1.796-.777-2.969-2.593-3.059-2.713-.09-.12-.733-.975-.733-1.859 0-.884.464-1.319.629-1.499.165-.18.36-.225.48-.225.12 0 .24 0 .345.006.111.006.26-.042.405.311.15.359.511 1.244.556 1.334.045.09.075.195.015.315-.06.12-.09.195-.18.3-.09.105-.195.234-.285.315-.09.09-.18.189-.075.374.105.185.465.764.999 1.237.689.612 1.27.801 1.45.891.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.405-.09.165.06 1.05.495 1.23.585.18.09.3.135.345.21.045.075.045.435-.099.842z"/>
                </svg>
                <span>Verificar Disponibilidade no WhatsApp</span>
              </a>
              <span className="block text-xs text-zinc-500 font-medium mt-2.5 text-center sm:text-left">
                * Fabricação sob encomenda.
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </main>
  );
}

export default DetalhesBancos;
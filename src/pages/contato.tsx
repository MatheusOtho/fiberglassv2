import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

interface SocialLink {
  href: string;
  icon: string; // Mantido para ícones de marca (FontAwesome - Fontes corporativas de redes sociais)
  label: string;
  bgHover: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/fiberglass.moveis?igsh=MThoYXc5dXpwbmE1Yw==",
    icon: "fa-instagram",
    label: "Siga nosso Instagram",
    bgHover: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-600 hover:border-transparent",
  },
  {
    href: "https://wa.me/5511999474730",
    icon: "fa-whatsapp",
    label: "Chame no WhatsApp",
    bgHover: "hover:bg-emerald-500 hover:border-emerald-500",
  },
];

export default function Contato(): React.JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>FiberGlass Móveis | Contato</title>
      </Helmet>
      
      <section
        id="contato"
        className="py-24 md:py-36 bg-[#fafafa] border-t border-zinc-200/60 relative overflow-hidden"
      >
        {/* Elementos decorativos em SVG de fundo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] pointer-events-none opacity-40">
          <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-200/50">
            <circle cx="250" cy="250" r="240" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="250" cy="250" r="180" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="absolute -left-32 bottom-0 w-[400px] h-[400px] pointer-events-none opacity-50">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-zinc-200">
            <path d="M0 200C0 89.543 89.543 0 200 0C310.457 0 400 89.543 400 200C400 310.457 310.457 400 200 400C89.543 400 0 310.457 0 200Z" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* COLUNA 1: INSTITUCIONAL & TEXTO */}
            <motion.div
              className="lg:col-span-5 space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-extrabold tracking-widest uppercase rounded-full shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                  <span>Atendimento Exclusivo</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
                  Vamos construir algo{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-500 to-amber-600">
                    incrível juntos?
                  </span>
                </h2>
              </div>

              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                Estamos prontos para tirar seu projeto do papel com acabamento de excelência. Escolha o canal ideal e fale direto com a nossa equipe.
              </p>

              {/* Bloco de Assinatura (Desktop) com Detalhe em SVG */}
              <div className="pt-2 hidden lg:block border-l-2 border-amber-600/30 pl-5 relative">
                <div className="absolute -left-2 top-0 text-amber-600">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                    <circle cx="3" cy="3" r="3" />
                  </svg>
                </div>
                <p className="text-zinc-500 italic text-sm leading-relaxed">
                  "Design, durabilidade e elegância moldados para o seu ambiente."
                </p>
                <p className="text-zinc-950 font-bold text-sm mt-1.5">
                  — Equipe FiberGlass Móveis
                </p>
              </div>

              {/* Redes Sociais */}
              <div className="pt-6 border-t border-zinc-200/80">
                <p className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-4">
                  Siga nossas novidades
                </p>
                <div className="flex justify-center lg:justify-start gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-12 h-12 bg-white border border-zinc-200/80 rounded-2xl flex items-center justify-center text-zinc-600 hover:text-white ${social.bgHover} shadow-sm transition-all duration-300`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`fa-brands ${social.icon} text-lg`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* COLUNA 2: CARDS DE CANAIS DE CONTATO COM SVGs */}
            <address className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full not-italic">
              
              {/* CARD WHATSAPP (Destaque Principal) */}
              <motion.div
                className="sm:col-span-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.a
                  href="https://wa.me/5511999474730?text=Olá! Gostaria de conversar sobre um projeto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 sm:p-7 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white rounded-3xl shadow-xl shadow-emerald-600/15 border border-emerald-400/20 group w-full relative overflow-hidden"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Fundo SVG sutil com ondas orgânicas */}
                  <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor">
                      <path d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100Z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-14 h-14 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/25 transition-transform duration-300 group-hover:scale-105 shadow-inner">
                      {/* Ícone de WhatsApp em SVG limpo e otimizado */}
                      <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block font-extrabold text-lg sm:text-xl tracking-tight">
                        Conversar no WhatsApp
                      </span>
                      <span className="text-white/85 text-xs sm:text-sm font-medium block mt-0.5">
                        Dúvidas rápidas, catálogos e orçamentos personalizados
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center relative z-10 group-hover:translate-x-1 transition-transform">
                    <i className="fa-solid fa-arrow-right text-white"></i>
                  </div>
                </motion.a>
              </motion.div>

              {/* CARD TELEFONE */}
              <motion.a
                href="tel:11999474730"
                className="flex items-center gap-4 p-5 bg-white border border-zinc-200/80 rounded-2xl shadow-sm group text-left transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{
                  y: -4,
                  borderColor: "#d97706",
                  boxShadow: "0 10px 25px -10px rgba(0,0,0,0.06)",
                }}
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-700 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 flex-shrink-0">
                  {/* SVG de Telefone */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <span className="block font-bold text-zinc-900 text-sm sm:text-base">
                    Ligue para nós
                  </span>
                  <span className="text-zinc-500 font-semibold text-xs mt-0.5 block">
                    (11) 99947-4730
                  </span>
                </div>
              </motion.a>

              {/* CARD EMAIL */}
              <motion.a
                href="mailto:fiberglass.moveis@gmail.com"
                className="flex items-center gap-4 p-5 bg-white border border-zinc-200/80 rounded-2xl shadow-sm group text-left transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{
                  y: -4,
                  borderColor: "#d97706",
                  boxShadow: "0 10px 25px -10px rgba(0,0,0,0.06)",
                }}
              >
                <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-700 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600 flex-shrink-0">
                  {/* SVG de E-mail */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <span className="block font-bold text-zinc-900 text-sm sm:text-base">
                    E-mail corporativo
                  </span>
                  <span className="text-zinc-500 font-semibold text-xs mt-0.5 block truncate">
                    fiberglass.moveis@gmail.com
                  </span>
                </div>
              </motion.a>

            </address>
          </div>

          {/* Rodapé Interno da Seção (Mobile Only) */}
          <div className="mt-14 pt-8 border-t border-zinc-200/80 lg:hidden text-center space-y-1">
            <p className="text-zinc-500 italic text-sm">
              "Design, durabilidade e elegância moldados para o seu ambiente."
            </p>
            <p className="text-amber-600 font-bold text-sm">
              — Equipe FiberGlass Móveis
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
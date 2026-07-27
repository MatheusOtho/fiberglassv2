import { motion } from "framer-motion";

// Suas importações de imagens personalizadas
import personalizado1 from "../../assets/home/personalizado/bancos-tablet.jpg";
import personalizado2 from "../../assets/home/personalizado/poltronas-stone.jpg";

export function Personalizacao() {
  return (
    <section className="h-screen min-h-[650px] max-h-[1080px] w-full bg-amber-400 text-zinc-950 relative overflow-hidden selection:bg-zinc-950 selection:text-amber-400 flex flex-col justify-between py-12 md:py-16">
      
      {/* ================= TRANSIÇÃO SUPERIOR (Entrada vinda do Carrossel Light #f8f9fa) ================= */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 md:h-20 text-amber-400"
        >
          <path
            d="M0,0 C200,60 300,100 500,40 C700,-20 900,80 1200,20 L1200,0 L0,0 Z"
            className="fill-[#f8f9fa]"
          ></path>
        </svg>
      </div>

      {/* Brilho sutil de fundo */}
      <div className="absolute top-1/3 left-[-5%] w-[600px] h-[600px] bg-white/25 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LADO ESQUERDO: Conteúdo e Texto */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="space-y-3 flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-amber-500 text-[10px] font-bold tracking-widest uppercase rounded-lg shadow-md"
              >
                <i className="fa-solid fa-hammer text-[9px] text-amber-400"></i>
                <span>Projetos Personalizados</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-950 tracking-tight leading-tight"
              >
                Fabricamos sob <br className="hidden md:block" />
                <span className="text-white drop-shadow-sm">
                  Medida e Encomenda
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white text-xs sm:text-sm leading-relaxed max-w-md mx-auto lg:mx-0 font-semibold"
              >
                Tem um projeto específico ou precisa de dimensões exatas para o seu ambiente? Desenvolvemos peças exclusivas moldadas perfeitamente para a escala do seu projeto.
              </motion.p>
            </div>

            {/* Lista de Benefícios */}
            <div className="space-y-2.5 w-full max-w-md lg:max-w-none">
              {[
                {
                  icon: "fa-ruler-combined",
                  title: "Dimensões Sob Demanda",
                  desc: "Ajuste milimétrico para se integrar perfeitamente à sua planta.",
                },
                {
                  icon: "fa-palette",
                  title: "Paleta e Textura Exclusivas",
                  desc: "Gama completa de acabamentos e cores sob especificação técnica.",
                },
                {
                  icon: "fa-wand-magic-sparkles",
                  title: "Engenharia de Projetos Únicos",
                  desc: "Suporte completo para transformar desenhos em realidade.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center sm:items-start gap-3 p-3 rounded-2xl bg-amber-100/50 border-none shadow-sm hover:bg-white transition-all duration-300 group text-left backdrop-blur-md"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-800 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <i className={`fa-solid ${item.icon} text-xs`}></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-zinc-950 tracking-tight truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-zinc-700 leading-tight line-clamp-1 sm:line-clamp-2 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botão de Orçamento */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-1 w-full sm:w-auto text-center"
            >
              <a
                href="https://wa.me/5511980129528?text=Olá! Gostaria de fazer um pedido personalizado."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-white hover:bg-emerald-500 active:scale-[0.99] text-black px-6 py-3.5 rounded-xl font-bold text-xs tracking-wide shadow-xl shadow-zinc-950/20 transition-all duration-300"
              >
                <i className="fa-brands fa-whatsapp text-sm text-emerald-400"></i>
                <span>Solicitar Projeto Especial</span>
              </a>
            </motion.div>
          </div>

          {/* LADO DIREITO: Moodboard Assimétrico */}
          <div className="lg:col-span-7 relative h-[320px] sm:h-[400px] md:h-[460px] w-full select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 15 }}
              className="absolute left-0 top-0 w-[68%] h-[82%] rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-zinc-900 z-10"
            >
              <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
              <img
                src={personalizado1}
                alt="Bancos Tablet Personalizados"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 45, damping: 15, delay: 0.15 }}
              className="absolute right-0 bottom-0 w-[48%] h-[58%] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-zinc-900 z-20"
            >
              <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
              <img
                src={personalizado2}
                alt="Poltronas Modelo Stone em ambiente de alto padrão"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <div className="absolute -right-4 -top-4 w-32 h-32 bg-[radial-gradient(#18181b_2px,transparent_2px)] [background-size:16px_16px] opacity-25 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* ================= TRANSIÇÃO INFERIOR (Saída em ondas conectando direto com o fundo branco de Categorias) ================= */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-10 sm:h-14 md:h-20 text-amber-400"
        >
          <path
            d="M0,0 C200,60 300,100 500,40 C700,-20 900,80 1200,20 L1200,0 L0,0 Z"
            className="fill-zinc-950"
          ></path>
        </svg>
      </div>

    </section>
  );
}

export default Personalizacao;
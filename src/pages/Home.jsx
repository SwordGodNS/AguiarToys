import {
    MessageCircle,
    ShieldCheck,
    Truck,
    Smile,
    PartyPopper,
    Star,
    ThumbsUp,
    CalendarDays,
    Heart,
    Sparkles,
    ArrowRight,
    Snowflake,
    CheckCircle,
  } from "lucide-react";
  
  import { motion } from "framer-motion";
  
  export default function Home() {
    const whatsapp = "5548991057261";
  
    const brinquedos = [
      { nome: "Cama Elástica", preco: "R$ 150,00", img: "/img/cama-elastica.png" },
      { nome: "Piscina de Bolinhas", preco: "R$ 200,00", img: "/img/piscina-bolinhas.png" },
      { nome: "Pebolim", preco: "R$ 120,00", img: "/img/pebolim.png" },
      { nome: "Cavalinho Infantil", preco: "R$ 30,00", img: "/img/cavalinho.png" },
      { nome: "Combo Diversão", preco: "R$ 350,00", img: "/img/combo.png" },
    ];
  
    const beneficios = [
      { titulo: "Perfeito para eventos", texto: "Aniversários, casamentos e confraternizações.", icon: PartyPopper, cor: "text-yellow-400" },
      { titulo: "Segurança primeiro", texto: "Brinquedos revisados e higienizados.", icon: ShieldCheck, cor: "text-blue-700" },
      { titulo: "Momentos especiais", texto: "Diversão para criar lembranças incríveis.", icon: Star, cor: "text-cyan-500" },
      { titulo: "Atendimento rápido", texto: "Orçamento simples direto pelo WhatsApp.", icon: ThumbsUp, cor: "text-yellow-400" },
    ];
  
    const passos = [
      { titulo: "Faça seu pedido", texto: "Escolha o brinquedo e chame no WhatsApp.", icon: MessageCircle, cor: "text-green-500" },
      { titulo: "Agende a entrega", texto: "Combine data, horário e endereço.", icon: CalendarDays, cor: "text-blue-600" },
      { titulo: "Receba com segurança", texto: "Levamos tudo organizado para sua festa.", icon: Truck, cor: "text-green-600" },
      { titulo: "Curta o momento", texto: "Aproveite seu evento com tranquilidade.", icon: Heart, cor: "text-red-500" },
    ];
  
    return (
      <main className="overflow-hidden bg-white text-blue-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white px-5 py-12 md:px-8 md:py-20">
          <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
          <div className="absolute right-[-160px] top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
  
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-4 py-2 text-xs font-black text-blue-950 shadow sm:text-sm">
                <Sparkles size={18} />
                Aluguel de brinquedos para eventos
              </div>
  
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Diversão garantida
                <br />
                <span className="mt-2 inline-block rounded-2xl bg-blue-700 px-3 py-2 text-white shadow-xl sm:px-4">
                  para todos os eventos!
                </span>
              </h1>
  
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl lg:mx-0">
                Brinquedos higienizados, entrega rápida e atendimento profissional
                para transformar sua festa em uma experiência inesquecível.
              </p>
  
              <div className="mt-8 grid gap-4 text-sm font-bold sm:grid-cols-3">
                {[
                  ["Higienizados", ShieldCheck],
                  ["Entrega rápida", Truck],
                  ["Diversão garantida", Smile],
                ].map(([text, Icon]) => (
                  <motion.div
                    key={text}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="rounded-2xl bg-white p-4 text-left shadow-lg"
                  >
                    <Icon className="mb-2 text-blue-700" size={30} />
                    {text}
                  </motion.div>
                ))}
              </div>
  
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#brinquedos"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300"
                >
                  Ver Brinquedos
                  <ArrowRight className="transition group-hover:translate-x-1" size={20} />
                </a>
  
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
                >
                  WhatsApp
                  <MessageCircle size={20} />
                </a>
              </div>
            </motion.div>
  
            {/* MOBILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="block lg:hidden"
            >
              <div className="rounded-[2rem] bg-blue-800 p-6 shadow-2xl">
                <img
                  src="/img/combo.png"
                  alt="Brinquedos Aguiar Toys"
                  className="mx-auto h-[300px] w-full object-contain"
                />
              </div>
            </motion.div>
  
            {/* DESKTOP FLOATING IMAGES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden min-h-[560px] lg:block"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-44 -top-20 h-[650px] w-[820px] rounded-bl-[260px] bg-blue-800 shadow-2xl"
              />
  
              <motion.img animate={{ y: [0, -18, 0] }} transition={{ duration: 3.5, repeat: Infinity }} src="/img/cama-elastica.png" alt="Cama elástica" className="absolute left-0 top-0 z-20 w-[380px] object-contain drop-shadow-2xl" />
              <motion.img animate={{ y: [0, 18, 0] }} transition={{ duration: 4, repeat: Infinity }} src="/img/piscina-bolinhas.png" alt="Piscina de bolinhas" className="absolute right-0 top-16 z-20 w-[360px] object-contain drop-shadow-2xl" />
              <motion.img animate={{ y: [0, -12, 0] }} transition={{ duration: 3.8, repeat: Infinity }} src="/img/pebolim.png" alt="Pebolim" className="absolute left-24 top-[260px] z-30 w-[360px] object-contain drop-shadow-2xl" />
              <motion.img animate={{ y: [0, 14, 0] }} transition={{ duration: 4.2, repeat: Infinity }} src="/img/cavalinho.png" alt="Cavalinho" className="absolute right-8 bottom-0 z-30 w-[300px] object-contain drop-shadow-2xl" />
            </motion.div>
          </div>
        </section>
  
        {/* BENEFÍCIOS */}
        <section className="border-y border-slate-200 bg-white px-5 py-14 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl bg-white p-7 text-center shadow-lg ring-1 ring-slate-100"
                >
                  <Icon className={`mx-auto mb-4 ${item.cor}`} size={50} />
                  <h3 className="text-lg font-black">{item.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.texto}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
  
        {/* BRINQUEDOS */}
        <section id="brinquedos" className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-20">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-black text-blue-700">
            <Sparkles size={18} />
            Brinquedos disponíveis
          </p>
  
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Escolha a diversão!
          </h2>
  
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Opções perfeitas para crianças, famílias e eventos com alegria e segurança.
          </p>
  
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {brinquedos.map((item, index) => (
              <motion.div
                key={item.nome}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-xl"
              >
                <div className="flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-yellow-50 p-3">
                  <img src={item.img} alt={item.nome} className="h-full w-full object-contain drop-shadow-xl" />
                </div>
  
                <h3 className="mt-5 text-lg font-black">{item.nome}</h3>
                <p className="mt-2 text-sm text-slate-500">A partir de</p>
                <p className="text-3xl font-black text-blue-800">{item.preco}</p>
  
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 block rounded-xl bg-blue-950 py-3 text-sm font-bold text-white transition group-hover:bg-yellow-400 group-hover:text-blue-950"
                >
                  Reservar agora
                </a>
              </motion.div>
            ))}
          </div>
        </section>
  
        {/* GELO */}
        <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-blue-950 shadow-2xl"
          >
            <img
              src="/img/gelo-banner.png"
              alt="Gelo Aguiar Subzero"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
  
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/70 to-transparent md:bg-gradient-to-r" />
  
            <div className="absolute inset-x-0 bottom-8 px-6 text-center text-white md:bottom-auto md:left-10 md:top-10 md:max-w-xl md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-black backdrop-blur">
                <Snowflake size={18} />
                Aguiar Subzero
              </div>
  
              <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
                Também temos gelo para seu evento
              </h2>
  
              <div className="mt-5 space-y-3 text-sm font-bold sm:text-base md:text-lg">
                <p className="flex items-center justify-center gap-3 md:justify-start">
                  <CheckCircle className="text-yellow-400" />
                  Ideal para festas e churrascos
                </p>
                <p className="flex items-center justify-center gap-3 md:justify-start">
                  <CheckCircle className="text-yellow-400" />
                  Peça junto com os brinquedos
                </p>
              </div>
  
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-black text-blue-950 shadow-lg transition hover:bg-yellow-300"
              >
                Peça seu gelo
                <MessageCircle size={20} className="text-green-600" />
              </a>
            </div>
          </motion.div>
        </section>
  
        {/* COMO FUNCIONA */}
        <section className="bg-gradient-to-b from-white to-blue-50 px-5 py-16 text-center md:px-8 md:py-20">
          <h2 className="text-4xl font-black sm:text-5xl">
            Como <span className="text-blue-600">funciona?</span>
          </h2>
  
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Simples, rápido e organizado para você não se preocupar com nada.
          </p>
  
          <div className="mx-auto mt-12 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="relative rounded-3xl bg-white p-8 shadow-xl"
                >
                  <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-blue-950 shadow">
                    {index + 1}
                  </div>
  
                  <Icon className={`mx-auto mt-3 ${item.cor}`} size={62} />
                  <h3 className="mt-5 text-lg font-black">{item.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.texto}</p>
                </motion.div>
              );
            })}
          </div>
  
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 font-black text-white shadow-xl transition hover:scale-105"
          >
            Fazer orçamento agora
            <MessageCircle size={22} />
          </a>
        </section>
      </main>
    );
  }
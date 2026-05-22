import {
  MessageCircle,
  ShieldCheck,
  Truck,
  Smile,
  PartyPopper,
  ThumbsUp,
  CalendarDays,
  Sparkles,
  ArrowRight,
  Snowflake,
  CheckCircle,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Home() {
  const whatsapp = "5548991057261";

  const brinquedos = [
    {
      nome: "Cama Elástica",
      preco: "A partir de R$ 100,00",
      detalhe: "Pequena, média e grande",
      img: "/img/cama-elastica.png",
    },
    {
      nome: "Piscina de Bolinhas",
      preco: "A partir de R$ 100,00",
      detalhe: "Ideal para crianças pequenas",
      img: "/img/piscina-bolinhas.png",
    },
    {
      nome: "Pebolim",
      preco: "A partir de R$ 120,00",
      detalhe: "Diversão para todas as idades",
      img: "/img/pebolim.png",
    },
    {
      nome: "Ping Pong",
      preco: "A partir de R$ 120,00",
      detalhe: "Mesa oficial para eventos",
      img: "/img/pingpong.png",
    },
    {
      nome: "Basquete Duplo",
      preco: "A partir de R$ 120,00",
      detalhe: "Com placar eletrônico",
      img: "/img/basquete.png",
    },
    {
      nome: "Cavalinho Infantil",
      preco: "R$ 30,00 unidade",
      detalhe: "Seguro para crianças pequenas",
      img: "/img/cavalinho.png",
    },
  ];

  const beneficios = [
    {
      titulo: "Perfeito para eventos",
      texto: "Aniversários, casamentos, festas infantis e confraternizações.",
      icon: PartyPopper,
      cor: "text-yellow-400",
    },
    {
      titulo: "Segurança primeiro",
      texto: "Brinquedos revisados, limpos e preparados antes de cada evento.",
      icon: ShieldCheck,
      cor: "text-blue-700",
    },
    {
      titulo: "Entrega no local",
      texto: "Levamos os brinquedos até você com praticidade e pontualidade.",
      icon: Truck,
      cor: "text-green-600",
    },
    {
      titulo: "Atendimento rápido",
      texto: "Orçamento simples e direto pelo WhatsApp.",
      icon: ThumbsUp,
      cor: "text-yellow-400",
    },
  ];

  const passos = [
    {
      titulo: "Escolha os brinquedos",
      texto: "Veja as opções disponíveis para seu evento.",
      icon: Sparkles,
      cor: "text-blue-600",
    },
    {
      titulo: "Fale pelo WhatsApp",
      texto: "Envie data, local e brinquedos desejados.",
      icon: MessageCircle,
      cor: "text-green-500",
    },
    {
      titulo: "Agende a entrega",
      texto: "Combinamos horário, endereço e todos os detalhes.",
      icon: CalendarDays,
      cor: "text-blue-600",
    },
    {
      titulo: "Receba tudo pronto",
      texto: "Levamos tudo higienizado e organizado.",
      icon: Truck,
      cor: "text-green-600",
    },
  ];

  function mensagemWhatsApp(item) {
    return encodeURIComponent(
      `Olá! Tenho interesse no aluguel de: ${item.nome}.
Valor: ${item.preco}
Gostaria de consultar disponibilidade.`
    );
  }

  return (
    <main className="overflow-hidden bg-white text-blue-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-yellow-50 px-5 py-14 md:px-8 md:py-24">
        {/* LUZES DO FUNDO */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[-130px] top-[-130px] h-80 w-80 rounded-full bg-yellow-300 blur-3xl"
        />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-[-170px] top-20 h-96 w-96 rounded-full bg-blue-500 blur-3xl"
        />

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 h-32 w-32 rounded-full bg-cyan-300/40 blur-2xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 text-xs font-black text-blue-950 shadow-xl sm:text-sm"
            >
              <Sparkles size={18} />
              Aluguel de brinquedos para eventos
            </motion.div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Diversão garantida
              <br />
              <span className="mt-3 inline-block rounded-[1.5rem] bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 px-4 py-3 text-white shadow-2xl">
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
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="rounded-2xl bg-white/90 p-4 text-left shadow-xl ring-1 ring-blue-100 backdrop-blur"
                >
                  <Icon className="mb-2 text-blue-700" size={30} />
                  {text}
                </motion.div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                href="#brinquedos"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-2xl transition hover:bg-yellow-300"
              >
                Ver Brinquedos
                <ArrowRight
                  className="transition group-hover:translate-x-1"
                  size={20}
                />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                  "Olá! Quero fazer um orçamento para meu evento."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 font-black text-white shadow-2xl transition hover:bg-green-400"
              >
                WhatsApp
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* MOBILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="block lg:hidden"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 p-6 shadow-2xl">
              <motion.div
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/3 rotate-12 bg-white/20 blur-2xl"
              />

              <motion.img
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                src="/img/combo.png"
                alt="Brinquedos Aguiar Toys"
                className="relative mx-auto h-[300px] w-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* DESKTOP IMAGES PREMIUM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative hidden min-h-[580px] lg:block"
          >
            {/* PAINEL ANIMADO */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -right-28 top-4 h-[560px] w-[780px] overflow-hidden rounded-[4rem] rounded-bl-[16rem] bg-[linear-gradient(120deg,#071b6d,#0b46ff,#12b5ff,#071b6d)] bg-[length:300%_300%] shadow-[0_35px_90px_rgba(0,60,255,0.35)]"
            >
              <motion.div
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-1/3 rotate-12 bg-white/20 blur-2xl"
              />

              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute left-16 top-16 h-44 w-44 rounded-full bg-yellow-300/40 blur-3xl"
              />

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.25, 0.55, 0.25],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-10 right-20 h-56 w-56 rounded-full bg-cyan-300/40 blur-3xl"
              />

              <div className="absolute inset-6 rounded-[3rem] border border-white/20 bg-white/5 backdrop-blur-[2px]" />
            </motion.div>

            {/* BRINQUEDOS FLUTUANTES */}
            <motion.img
              animate={{ y: [0, -18, 0], rotate: [0, -1.5, 0] }}
              transition={{ duration: 3.6, repeat: Infinity }}
              src="/img/cama-elastica.png"
              alt="Cama elástica"
              className="absolute left-2 top-16 z-20 w-[390px] object-contain drop-shadow-2xl"
            />

            <motion.img
              animate={{ y: [0, 16, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              src="/img/piscina-bolinhas.png"
              alt="Piscina de bolinhas"
              className="absolute right-8 top-24 z-30 w-[390px] object-contain drop-shadow-2xl"
            />

            <motion.img
              animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 3.8, repeat: Infinity }}
              src="/img/pebolim.png"
              alt="Pebolim"
              className="absolute left-28 top-[285px] z-40 w-[350px] object-contain drop-shadow-2xl"
            />

            <motion.img
              animate={{ y: [0, 14, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 4.2, repeat: Infinity }}
              src="/img/basquete.png"
              alt="Basquete duplo"
              className="absolute right-10 bottom-16 z-50 w-[260px] object-contain drop-shadow-2xl"
            />

            {/* SELO FLUTUANTE */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-10 left-8 z-50 rounded-3xl bg-white/95 px-6 py-4 shadow-2xl ring-1 ring-blue-100"
            >
              <p className="text-xs font-black uppercase text-slate-500">
                Eventos e festas
              </p>
              <p className="text-2xl font-black text-blue-950">
                Diversão completa
              </p>
            </motion.div>
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
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.texto}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* BRINQUEDOS */}
      <section
        id="brinquedos"
        className="mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-20"
      >
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-black text-blue-700">
          <Sparkles size={18} />
          Brinquedos disponíveis
        </p>

        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Escolha a diversão!
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Opções perfeitas para crianças, famílias e eventos com alegria,
          segurança e praticidade.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
              <div className="flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-yellow-50 p-3">
                <img
                  src={item.img}
                  alt={item.nome}
                  className="h-full w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-5 text-lg font-black">{item.nome}</h3>

              <p className="mt-2 text-xs font-bold text-slate-500">
                {item.detalhe}
              </p>

              <p className="mt-3 text-xl font-black text-blue-800">
                {item.preco}
              </p>

              <a
                href={`https://wa.me/${whatsapp}?text=${mensagemWhatsApp(
                  item
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-blue-950 py-3 text-sm font-bold text-white transition group-hover:bg-yellow-400 group-hover:text-blue-950"
              >
                Reservar
                <MessageCircle size={17} />
              </a>
            </motion.div>
          ))}
        </div>

        <a
          href="/brinquedos"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300"
        >
          Ver catálogo completo
          <ArrowRight size={20} />
        </a>
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
                Ideal para festas, churrascos e comemorações
              </p>

              <p className="flex items-center justify-center gap-3 md:justify-start">
                <CheckCircle className="text-yellow-400" />
                Peça junto com os brinquedos em um só atendimento
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
                "Olá! Tenho interesse em pedir gelo para meu evento."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-7 py-4 font-black text-blue-950 shadow-lg transition hover:scale-105 hover:bg-yellow-300"
            >
              Peça seu gelo
              <MessageCircle size={20} className="text-green-600" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-gradient-to-b from-white to-blue-50 px-5 py-16 text-center md:px-8 md:py-20">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2 text-sm font-black text-blue-950">
          <Sparkles size={18} />
          Simples, rápido e seguro
        </p>

        <h2 className="text-4xl font-black sm:text-5xl">
          Como <span className="text-blue-600">funciona?</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Você escolhe, chama no WhatsApp e nós cuidamos da entrega.
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

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.texto}
                </p>
              </motion.div>
            );
          })}
        </div>

        <a
          href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
            "Olá! Quero fazer um orçamento para meu evento."
          )}`}
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
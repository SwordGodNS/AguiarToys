import {
  MessageCircle,
  Snowflake,
  ShieldCheck,
  Truck,
  Clock,
  CheckCircle,
  Sparkles,
  Star,
  PackageCheck,
  Droplets,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Gelo() {
  const whatsapp = "5548991057261";

  const vantagens = [
    {
      titulo: "Gelo de qualidade",
      texto: "Ideal para festas, churrascos, eventos e uso comercial.",
      icon: Snowflake,
    },
    {
      titulo: "Entrega rápida",
      texto: "Peça pelo WhatsApp e combine a melhor forma de entrega.",
      icon: Truck,
    },
    {
      titulo: "Perfeito para eventos",
      texto: "Combine brinquedos + gelo e facilite toda organização.",
      icon: PackageCheck,
    },
  ];

  const usos = [
    "Festas de aniversário",
    "Churrascos",
    "Eventos corporativos",
    "Casamentos",
    "Confraternizações",
    "Comércios e lanchonetes",
  ];

  return (
    <main className="overflow-hidden bg-white text-blue-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 px-5 py-16 text-white md:px-8 md:py-24">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-yellow-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-blue-950 shadow sm:text-sm">
              <Snowflake size={18} />
              Aguiar Subzero
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Gelo para deixar seu evento completo
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg lg:mx-0">
              Além dos brinquedos, também oferecemos gelo para festas,
              churrascos, eventos e comemorações. Peça tudo em um só lugar.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={`https://wa.me/${whatsapp}?text=Olá! Quero fazer um pedido de gelo.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300"
              >
                Pedir gelo agora
                <MessageCircle size={22} />
              </a>

              <a
                href="/brinquedos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/15 px-8 py-4 font-black text-white shadow-xl backdrop-blur transition hover:scale-105"
              >
                Ver brinquedos
                <Sparkles size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] bg-white/10 p-3 shadow-2xl backdrop-blur md:p-4">
              <img
                src="/img/gelo-fundo.png"
                alt="Gelo Aguiar Subzero"
                className="h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[360px] md:h-[430px]"
              />
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 text-blue-950 shadow-2xl sm:-left-5 sm:p-5"
            >
              <p className="text-xs font-bold text-slate-500 sm:text-sm">
                Pedido rápido
              </p>
              <p className="text-xl font-black sm:text-2xl">WhatsApp</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-black text-blue-700">
            <Sparkles size={18} />
            Por que pedir com a gente?
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Gelo prático para qualquer ocasião
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Atendimento simples, rápido e ideal para quem quer organizar tudo
            com facilidade.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {vantagens.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.titulo}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-[2rem] bg-white p-7 text-center shadow-xl ring-1 ring-slate-100 md:p-8"
              >
                <Icon className="mx-auto text-cyan-500" size={62} />
                <h3 className="mt-5 text-2xl font-black">{item.titulo}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.texto}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* USOS */}
      <section className="bg-blue-50 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black text-blue-700 shadow">
              <Droplets size={18} />
              Ideal para eventos
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Peça gelo junto com os brinquedos
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              Se você vai fazer uma festa, pode facilitar tudo em um único
              atendimento: brinquedos para a diversão e gelo para manter as
              bebidas no ponto.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {usos.map((uso) => (
                <motion.div
                  key={uso}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 text-left font-bold shadow"
                >
                  <CheckCircle className="shrink-0 text-green-500" />
                  {uso}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-blue-950 p-6 text-white shadow-2xl md:p-8"
          >
            <Snowflake className="text-cyan-300" size={66} />

            <h3 className="mt-5 text-4xl font-black leading-tight">
              Aguiar Subzero
            </h3>

            <p className="mt-4 text-blue-100">
              Gelo para eventos, festas, churrascos e comemorações.
            </p>

            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-3 font-bold">
                <ShieldCheck className="shrink-0 text-yellow-400" />
                Produto prático para sua festa
              </p>

              <p className="flex items-center gap-3 font-bold">
                <Clock className="shrink-0 text-yellow-400" />
                Atendimento rápido
              </p>

              <p className="flex items-center gap-3 font-bold">
                <Truck className="shrink-0 text-yellow-400" />
                Combine entrega ou retirada
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsapp}?text=Olá! Quero pedir gelo para meu evento.`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-4 font-black text-blue-950 transition hover:scale-105 hover:bg-yellow-300"
            >
              Pedir pelo WhatsApp
              <MessageCircle size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 px-5 py-20 text-center text-white md:px-8 md:py-28">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-yellow-300/20 blur-3xl" />

        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[12%] top-16 text-cyan-300/50"
        >
          <Snowflake size={70} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-16 right-[14%] text-cyan-200/40"
        >
          <Snowflake size={90} />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute right-[28%] top-20 text-yellow-300/60"
        >
          <Sparkles size={55} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 shadow-2xl ring-1 ring-white/20 backdrop-blur">
            <Star className="text-yellow-400" size={46} />
          </div>

          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-black text-cyan-100 ring-1 ring-white/20">
            <Snowflake size={18} />
            Gelo rápido para seu evento
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Vai fazer evento?
            <span className="block text-yellow-400">Peça gelo também!</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Fale agora pelo WhatsApp e consulte disponibilidade para sua região.
            Atendimento rápido, simples e direto.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { icon: Snowflake, title: "Gelo puro", text: "Ideal para festas" },
              { icon: Truck, title: "Entrega rápida", text: "Combine pelo WhatsApp" },
              { icon: ShieldCheck, title: "Prático", text: "Tudo em um só lugar" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="rounded-3xl bg-white/10 p-5 text-center shadow-xl ring-1 ring-white/15 backdrop-blur"
                >
                  <Icon className="mx-auto text-cyan-300" size={38} />
                  <h3 className="mt-3 text-lg font-black">{item.title}</h3>
                  <p className="mt-1 text-sm text-blue-100">{item.text}</p>
                </motion.div>
              );
            })}
          </div>

          <a
            href={`https://wa.me/${whatsapp}?text=Olá! Quero fazer um orçamento de gelo.`}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-9 py-4 font-black text-blue-950 shadow-2xl transition hover:scale-105 hover:bg-yellow-300 md:px-12 md:py-5"
          >
            Fazer pedido agora
            <MessageCircle size={24} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
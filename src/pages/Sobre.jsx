import {
  MessageCircle,
  Heart,
  ShieldCheck,
  Star,
  Truck,
  Smile,
  Sparkles,
  CheckCircle,
  MapPin,
  PartyPopper,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Sobre() {
  const whatsapp = "5548991057261";

  const valores = [
    {
      titulo: "Segurança",
      texto: "Brinquedos higienizados, revisados e preparados para cada evento.",
      icon: ShieldCheck,
    },
    {
      titulo: "Alegria",
      texto: "Momentos felizes e inesquecíveis para crianças e famílias.",
      icon: Smile,
    },
    {
      titulo: "Compromisso",
      texto: "Atendimento rápido, organizado e pontual.",
      icon: Truck,
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-blue-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 px-5 py-16 text-white md:px-8 md:py-24">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-blue-950 shadow sm:text-sm">
            <Sparkles size={18} />
            Conheça a Aguiar Toys
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Sobre nós
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Levamos diversão, segurança e praticidade para festas, eventos e momentos especiais.
          </p>
        </motion.div>
      </section>

      {/* HISTÓRIA */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-black text-blue-700">
            <Heart size={18} />
            Nossa missão
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Transformar eventos em momentos inesquecíveis
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            A Aguiar Toys nasceu para facilitar a organização de festas e levar mais alegria para cada comemoração.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            Nosso foco é entregar uma experiência completa: brinquedos de qualidade, atendimento pelo WhatsApp, organização na entrega e opções que deixam qualquer evento mais divertido.
          </p>

          <a
            href={`https://wa.me/${whatsapp}?text=Olá! Quero conhecer mais sobre os brinquedos da Aguiar Toys.`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300"
          >
            Falar com a gente
            <MessageCircle size={22} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-yellow-300/40 blur-2xl" />

          <div className="relative rounded-[2rem] bg-gradient-to-br from-blue-50 to-yellow-50 p-6 shadow-2xl md:p-8">
            <img
              src="/img/combo.png"
              alt="Brinquedos Aguiar Toys"
              className="h-[300px] w-full object-contain drop-shadow-2xl sm:h-[380px] md:h-[420px]"
            />
          </div>
        </motion.div>
      </section>

      {/* VALORES */}
      <section className="bg-blue-50 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-black text-blue-700 shadow">
            <Star size={18} />
            Nossos valores
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            O que move a Aguiar Toys
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Trabalhamos para entregar confiança, diversão e tranquilidade em cada atendimento.
          </p>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="rounded-[2rem] bg-white p-7 text-center shadow-xl md:p-8"
                >
                  <Icon className="mx-auto text-blue-700" size={62} />
                  <h3 className="mt-5 text-2xl font-black">{item.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {item.texto}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-blue-950 p-6 text-white shadow-2xl md:p-8"
        >
          <PartyPopper className="text-yellow-400" size={66} />

          <h2 className="mt-5 text-4xl font-black leading-tight">
            Por que escolher a Aguiar Toys?
          </h2>

          <p className="mt-4 text-blue-100">
            Porque além dos brinquedos, entregamos praticidade, confiança e suporte para seu evento acontecer com tranquilidade.
          </p>

          <div className="mt-8 space-y-4">
            <p className="flex items-center gap-3 font-bold">
              <CheckCircle className="shrink-0 text-yellow-400" />
              Atendimento direto pelo WhatsApp
            </p>

            <p className="flex items-center gap-3 font-bold">
              <CheckCircle className="shrink-0 text-yellow-400" />
              Brinquedos para diferentes tipos de eventos
            </p>

            <p className="flex items-center gap-3 font-bold">
              <CheckCircle className="shrink-0 text-yellow-400" />
              Também oferecemos venda de gelo
            </p>

            <p className="flex items-center gap-3 font-bold">
              <MapPin className="shrink-0 text-yellow-400" />
              Atendimento em Florianópolis e região
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-2 text-sm font-black text-blue-700">
            <Sparkles size={18} />
            Experiência completa
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Brinquedos, gelo e atendimento em um só lugar
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            Além do aluguel de brinquedos, também divulgamos a venda de gelo para eventos, ajudando você a resolver mais coisas com um único contato.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            Seja para uma festa pequena ou um evento maior, a Aguiar Toys está pronta para ajudar.
          </p>
        </motion.div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-950 px-5 py-16 text-center text-white md:px-8 md:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <Heart className="mx-auto mb-5 text-red-400" size={60} />

          <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Vamos fazer seu evento acontecer?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-blue-100 sm:text-lg">
            Fale agora pelo WhatsApp e solicite um orçamento para brinquedos ou gelo.
          </p>

          <a
            href={`https://wa.me/${whatsapp}?text=Olá! Quero fazer um orçamento com a Aguiar Toys.`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 md:px-10 md:py-5"
          >
            Chamar no WhatsApp
            <MessageCircle size={24} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle,
  CalendarDays,
  PartyPopper,
  Gift,
  Snowflake,
  ShieldCheck,
  Truck,
  User,
  FileText,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Contato() {
  const whatsapp = "5548991057261";

  return (
    <main className="overflow-hidden bg-white text-blue-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 px-5 py-16 text-white md:px-8 md:py-24">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[12%] top-20 text-yellow-300/40"
        >
          <Sparkles size={70} />
        </motion.div>

        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-[14%] bottom-16 text-cyan-200/40"
        >
          <MessageCircle size={80} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-blue-950 shadow sm:text-sm">
            <Sparkles size={18} />
            Fale com a Aguiar Toys
          </p>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            Contato
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Faça seu orçamento de brinquedos ou gelo pelo WhatsApp de forma
            rápida, simples e profissional.
          </p>
        </motion.div>
      </section>

      {/* CONTATO + FORM */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
        {/* CARD ESQUERDO */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-blue-950 p-6 text-white shadow-2xl md:p-8"
        >
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-yellow-300/20 blur-3xl" />

          <div className="relative">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-cyan-100 ring-1 ring-white/10">
              <MessageCircle size={18} />
              Resposta rápida
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Atendimento rápido pelo WhatsApp
            </h2>

            <p className="mt-4 text-blue-100">
              Envie data do evento, bairro, brinquedo desejado e horário. Nós
              respondemos com praticidade.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { icon: Phone, text: "(48) 99105-7261" },
                { icon: Mail, text: "contato@aguiartoys.com.br" },
                { icon: MapPin, text: "Florianópolis - SC e região" },
                { icon: Clock, text: "Atendimento todos os dias" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <p key={item.text} className="flex items-center gap-3 font-bold">
                    <Icon className="shrink-0 text-yellow-400" />
                    <span className="break-all">{item.text}</span>
                  </p>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "Seguro" },
                { icon: Truck, title: "Entrega rápida" },
                { icon: Gift, title: "Brinquedos" },
                { icon: Snowflake, title: "Gelo" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/10 backdrop-blur"
                  >
                    <Icon className="mx-auto text-yellow-400" size={30} />
                    <p className="mt-2 text-sm font-black">{item.title}</p>
                  </motion.div>
                );
              })}
            </div>

            <a
              href={`https://wa.me/${whatsapp}?text=Olá! Quero fazer um orçamento com a Aguiar Toys.`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-black text-white shadow-xl transition hover:scale-105 hover:bg-green-400"
            >
              Chamar no WhatsApp
              <MessageCircle size={22} />
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-100 md:p-8"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
            <Send size={18} />
            Orçamento online
          </p>

          <h2 className="text-4xl font-black leading-tight sm:text-5xl">
            Solicite seu orçamento
          </h2>

          <p className="mt-3 text-slate-600">
            Preencha os dados abaixo e clique para enviar pelo WhatsApp.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.currentTarget;
              const nome = form.nome.value;
              const evento = form.evento.value;
              const data = form.data.value;
              const mensagem = form.mensagem.value;

              const texto = encodeURIComponent(
                `Olá! Quero fazer um orçamento.

Nome: ${nome}
Evento: ${evento}
Data: ${data}
Mensagem: ${mensagem}`
              );

              window.open(`https://wa.me/${whatsapp}?text=${texto}`, "_blank");
            }}
            className="mt-8 space-y-5"
          >
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
              <input
                name="nome"
                type="text"
                placeholder="Seu nome"
                required
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-5 font-bold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="relative">
              <PartyPopper className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
              <input
                name="evento"
                type="text"
                placeholder="Tipo de evento"
                required
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-5 font-bold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="relative">
              <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={20} />
              <input
                name="data"
                type="date"
                required
                className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-5 font-bold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="relative">
              <FileText className="absolute left-4 top-5 text-blue-600" size={20} />
              <textarea
                name="mensagem"
                placeholder="O que você deseja alugar ou pedir?"
                rows="5"
                required
                className="w-full resize-none rounded-2xl border border-slate-200 py-4 pl-12 pr-5 font-bold outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300"
            >
              Enviar orçamento
              <Send size={22} />
            </button>
          </form>
        </motion.div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-blue-50 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Orçamento rápido pelo WhatsApp",
            "Atendimento em Florianópolis e região",
            "Brinquedos e gelo para seu evento",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl bg-white p-8 text-center font-black shadow-xl"
            >
              <CheckCircle className="mx-auto mb-4 text-green-500" size={54} />
              {item}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
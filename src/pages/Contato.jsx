import {
    MessageCircle,
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Sparkles,
    CheckCircle,
  } from "lucide-react";
  
  import { motion } from "framer-motion";
  
  export default function Contato() {
    const whatsapp = "5548991057261";
  
    return (
      <main className="overflow-hidden bg-white text-blue-950">
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
              Fale com a Aguiar Toys
            </p>
  
            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Contato
            </h1>
  
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Faça seu orçamento de brinquedos ou gelo pelo WhatsApp de forma rápida e simples.
            </p>
          </motion.div>
        </section>
  
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-blue-950 p-6 text-white shadow-2xl md:p-8"
          >
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Atendimento rápido pelo WhatsApp
            </h2>
  
            <p className="mt-4 text-blue-100">
              Envie uma mensagem informando a data do evento, bairro, brinquedo desejado e horário.
            </p>
  
            <div className="mt-8 space-y-5">
              <p className="flex items-center gap-3 font-bold">
                <Phone className="shrink-0 text-yellow-400" />
                (48) 99105-7261
              </p>
  
              <p className="flex items-center gap-3 font-bold break-all">
                <Mail className="shrink-0 text-yellow-400" />
                contato@aguiartoys.com.br
              </p>
  
              <p className="flex items-center gap-3 font-bold">
                <MapPin className="shrink-0 text-yellow-400" />
                Florianópolis - SC e região
              </p>
  
              <p className="flex items-center gap-3 font-bold">
                <Clock className="shrink-0 text-yellow-400" />
                Atendimento todos os dias
              </p>
            </div>
  
            <a
              href={`https://wa.me/${whatsapp}?text=Olá! Quero fazer um orçamento com a Aguiar Toys.`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-black text-white transition hover:scale-105"
            >
              Chamar no WhatsApp
              <MessageCircle size={22} />
            </a>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-slate-100 md:p-8"
          >
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
              <input
                name="nome"
                type="text"
                placeholder="Seu nome"
                required
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 font-bold outline-none focus:border-blue-600"
              />
  
              <input
                name="evento"
                type="text"
                placeholder="Tipo de evento"
                required
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 font-bold outline-none focus:border-blue-600"
              />
  
              <input
                name="data"
                type="date"
                required
                className="w-full rounded-2xl border border-slate-200 px-5 py-4 font-bold outline-none focus:border-blue-600"
              />
  
              <textarea
                name="mensagem"
                placeholder="O que você deseja alugar ou pedir?"
                rows="5"
                required
                className="w-full resize-none rounded-2xl border border-slate-200 px-5 py-4 font-bold outline-none focus:border-blue-600"
              />
  
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
  
        <section className="bg-blue-50 px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Orçamento rápido pelo WhatsApp",
              "Atendimento em Florianópolis e região",
              "Brinquedos e gelo para seu evento",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
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
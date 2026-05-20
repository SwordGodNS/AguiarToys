import {
    MessageCircle,
    CalendarDays,
    Truck,
    Heart,
    ShieldCheck,
    Clock,
    MapPin,
    CheckCircle,
    Sparkles,
    ArrowRight,
  } from "lucide-react";
  
  import { motion } from "framer-motion";
  
  export default function ComoFunciona() {
    const whatsapp = "5548991057261";
  
    const passos = [
      {
        numero: "01",
        titulo: "Escolha os brinquedos",
        texto: "Veja as opções disponíveis e escolha os brinquedos ideais para seu evento.",
        icon: Sparkles,
      },
      {
        numero: "02",
        titulo: "Fale pelo WhatsApp",
        texto: "Envie sua data, local do evento e os brinquedos desejados.",
        icon: MessageCircle,
      },
      {
        numero: "03",
        titulo: "Agende a entrega",
        texto: "Combinamos horário, endereço e todos os detalhes.",
        icon: CalendarDays,
      },
      {
        numero: "04",
        titulo: "Receba tudo pronto",
        texto: "Levamos os brinquedos higienizados e organizados.",
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
              Simples, rápido e seguro
            </p>
  
            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Como funciona?
            </h1>
  
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
              Em poucos passos você reserva os brinquedos e garante a diversão do seu evento.
            </p>
          </motion.div>
        </section>
  
        {/* PASSOS */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <motion.div
                  key={item.titulo}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative rounded-[2rem] bg-white p-7 text-center shadow-xl ring-1 ring-slate-100 md:p-8"
                >
                  <div className="absolute -top-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-blue-950 shadow-lg">
                    {item.numero}
                  </div>
  
                  <Icon className="mx-auto mt-8 text-blue-700" size={62} />
  
                  <h2 className="mt-6 text-xl font-black">{item.titulo}</h2>
  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.texto}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
  
        {/* INFORMAÇÕES */}
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
                <ShieldCheck size={18} />
                Atendimento profissional
              </p>
  
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Você só se preocupa em aproveitar a festa
              </h2>
  
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                A Aguiar Toys cuida da organização, entrega e suporte para que seu evento seja tranquilo do começo ao fim.
              </p>
  
              <div className="mx-auto mt-8 max-w-xl space-y-4 text-left lg:mx-0">
                <p className="flex items-center gap-3 font-bold">
                  <CheckCircle className="shrink-0 text-green-500" />
                  Brinquedos limpos e higienizados
                </p>
  
                <p className="flex items-center gap-3 font-bold">
                  <Clock className="shrink-0 text-blue-600" />
                  Entrega no horário combinado
                </p>
  
                <p className="flex items-center gap-3 font-bold">
                  <MapPin className="shrink-0 text-red-500" />
                  Atendimento em Florianópolis e região
                </p>
              </div>
  
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300"
              >
                Falar no WhatsApp
                <ArrowRight size={20} />
              </a>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-yellow-300/40 blur-2xl" />
  
              <div className="relative rounded-[2rem] bg-blue-950 p-6 text-white shadow-2xl md:p-8">
                <h3 className="text-3xl font-black leading-tight sm:text-4xl">
                  Pedido rápido pelo WhatsApp
                </h3>
  
                <p className="mt-4 text-blue-100">
                  Envie uma mensagem informando:
                </p>
  
                <ul className="mt-6 space-y-4 font-bold">
                  <li>• Data do evento</li>
                  <li>• Bairro ou endereço</li>
                  <li>• Brinquedo desejado</li>
                  <li>• Horário da entrega</li>
                </ul>
  
                <a
                  href={`https://wa.me/${whatsapp}?text=Olá! Quero fazer um orçamento para aluguel de brinquedos.`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-black text-white transition hover:scale-105"
                >
                  Chamar agora
                  <MessageCircle size={22} />
                </a>
              </div>
            </motion.div>
          </div>
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
              Pronto para deixar sua festa inesquecível?
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-base text-blue-100 sm:text-lg">
              Fale com a Aguiar Toys e reserve agora os brinquedos para seu evento.
            </p>
  
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-4 font-black text-blue-950 shadow-xl transition hover:scale-105 md:px-10 md:py-5"
            >
              Fazer orçamento
              <MessageCircle size={24} />
            </a>
          </motion.div>
        </section>
      </main>
    );
  }
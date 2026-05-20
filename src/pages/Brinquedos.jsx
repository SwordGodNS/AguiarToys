import {
    MessageCircle,
    Search,
    Star,
    ShieldCheck,
    Truck,
    CheckCircle,
    Sparkles,
  } from "lucide-react";
  
  import { motion } from "framer-motion";
  
  export default function Brinquedos() {
    const whatsapp = "5548991057261";
  
    const brinquedos = [
      {
        nome: "Cama Elástica",
        categoria: "Brinquedo Grande",
        preco: "R$ 150,00",
        descricao: "Ideal para aniversários, festas infantis e eventos com muita diversão.",
        img: "/img/cama-elastica.png",
      },
      {
        nome: "Piscina de Bolinhas",
        categoria: "Brinquedo Infantil",
        preco: "R$ 200,00",
        descricao: "Perfeita para crianças pequenas brincarem com segurança e alegria.",
        img: "/img/piscina-bolinhas.png",
      },
      {
        nome: "Pebolim",
        categoria: "Mesa de Jogo",
        preco: "R$ 120,00",
        descricao: "Diversão para crianças, jovens e adultos durante todo o evento.",
        img: "/img/pebolim.png",
      },
      {
        nome: "Cavalinho Infantil",
        categoria: "Brinquedo Infantil",
        preco: "R$ 30,00",
        descricao: "Ótimo para crianças pequenas se divertirem de forma segura.",
        img: "/img/cavalinho.png",
      },
      {
        nome: "Combo Diversão",
        categoria: "Combo Especial",
        preco: "R$ 350,00",
        descricao: "Pacote completo com brinquedos para deixar seu evento ainda melhor.",
        img: "/img/combo.png",
      },
    ];
  
    return (
      <main className="overflow-hidden bg-white text-blue-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 px-5 py-16 text-white md:px-8 md:py-24">
          <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-yellow-300/30 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
  
          <div className="relative mx-auto max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-blue-950 shadow sm:text-sm">
                <Sparkles size={18} />
                Catálogo de Brinquedos
              </p>
  
              <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Escolha a diversão perfeita
              </h1>
  
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
                Brinquedos seguros, higienizados e prontos para transformar seu evento em um momento inesquecível.
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* BUSCA */}
        <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-5 md:px-8">
          <div className="flex items-center gap-3 rounded-3xl bg-white p-4 shadow-2xl md:p-5">
            <Search className="shrink-0 text-blue-700" size={26} />
            <input
              type="text"
              placeholder="Buscar brinquedo..."
              className="w-full bg-transparent text-base font-bold outline-none placeholder:text-slate-400 md:text-lg"
            />
          </div>
        </section>
  
        {/* CARDS */}
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {brinquedos.map((item, index) => (
              <motion.div
                key={item.nome}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl"
              >
                <div className="relative flex h-60 items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50 p-5 sm:h-64 md:h-72">
                  <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-2 text-[11px] font-black text-blue-950 sm:left-5 sm:top-5 sm:px-4 sm:text-xs">
                    {item.categoria}
                  </span>
  
                  <motion.img
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    src={item.img}
                    alt={item.nome}
                    className="h-full w-full object-contain drop-shadow-2xl"
                  />
                </div>
  
                <div className="p-6 md:p-7">
                  <div className="mb-3 flex items-center gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} fill="currentColor" />
                    ))}
                  </div>
  
                  <h2 className="text-2xl font-black">{item.nome}</h2>
  
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.descricao}
                  </p>
  
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">A partir de</p>
                      <p className="text-3xl font-black text-blue-800">
                        {item.preco}
                      </p>
                    </div>
  
                    <a
                      href={`https://wa.me/${whatsapp}?text=Olá! Tenho interesse no aluguel do brinquedo: ${item.nome}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
                    >
                      <MessageCircle size={24} />
                    </a>
                  </div>
  
                  <a
                    href={`https://wa.me/${whatsapp}?text=Olá! Quero reservar: ${item.nome}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-950 py-4 font-black text-white transition group-hover:bg-yellow-400 group-hover:text-blue-950"
                  >
                    Reservar agora
                    <MessageCircle size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
  
        {/* GARANTIAS */}
        <section className="bg-blue-50 px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titulo: "Brinquedos higienizados",
                texto: "Todos os brinquedos são limpos e revisados antes de cada evento.",
                icon: ShieldCheck,
                cor: "text-blue-700",
              },
              {
                titulo: "Entrega no local",
                texto: "Levamos os brinquedos até seu evento com pontualidade.",
                icon: Truck,
                cor: "text-green-600",
              },
              {
                titulo: "Atendimento rápido",
                texto: "Orçamento simples e direto pelo WhatsApp.",
                icon: CheckCircle,
                cor: "text-yellow-500",
              },
            ].map((item) => {
              const Icon = item.icon;
  
              return (
                <motion.div
                  key={item.titulo}
                  whileHover={{ y: -8 }}
                  className="rounded-3xl bg-white p-8 text-center shadow-xl"
                >
                  <Icon className={`mx-auto ${item.cor}`} size={58} />
                  <h3 className="mt-5 text-xl font-black">{item.titulo}</h3>
                  <p className="mt-3 text-slate-600">{item.texto}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Pronto para reservar?
            </h2>
  
            <p className="mx-auto mt-5 max-w-2xl text-base text-blue-100 sm:text-lg">
              Fale agora pelo WhatsApp e garanta a diversão do seu evento.
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
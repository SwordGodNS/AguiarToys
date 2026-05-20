import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsapp = "5548991057261";

  const links = [
    { nome: "Início", path: "/" },
    { nome: "Brinquedos", path: "/brinquedos" },
    { nome: "Como Funciona", path: "/como-funciona" },
    { nome: "Gelo", path: "/gelo" },
    { nome: "Sobre Nós", path: "/sobre" },
    { nome: "Contato", path: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        {/* LOGO */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/img/logo.png"
            alt="Aguiar Toys"
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-7 text-sm font-black text-blue-950 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-yellow-400 pb-2 text-blue-700"
                  : "pb-2 transition hover:text-blue-700"
              }
            >
              {link.nome}
            </NavLink>
          ))}
        </nav>

        {/* BOTÃO DESKTOP */}
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-sm font-black text-blue-950 shadow-md transition hover:scale-105 hover:bg-yellow-300 lg:flex"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white shadow-lg lg:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* FUNDO ESCURO MOBILE */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* MENU MOBILE */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">
          <img
            src="/img/logo.png"
            alt="Aguiar Toys"
            className="h-14 w-auto object-contain"
          />

          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-950 text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-6 py-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "rounded-2xl bg-blue-950 px-5 py-4 font-black text-white"
                  : "rounded-2xl px-5 py-4 font-black text-blue-950 transition hover:bg-blue-50"
              }
            >
              {link.nome}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-6 left-0 w-full px-6">
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-black text-white shadow-xl"
          >
            <MessageCircle size={22} />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
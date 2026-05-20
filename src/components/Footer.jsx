import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-8 py-12 md:grid-cols-4">
        <div>
          <img
            src="/img/logo.png"
            alt="Aguiar Toys"
            className="h-20 w-auto object-contain"
          />

          <p className="mt-4 text-sm text-blue-100">
            Diversão, qualidade e confiança para o seu evento!
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-black">Navegação</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/brinquedos">Brinquedos</Link></li>
            <li><Link to="/como-funciona">Como Funciona</Link></li>
            <li><Link to="/gelo">Gelo</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-black">Brinquedos</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>Cama Elástica</li>
            <li>Piscina de Bolinhas</li>
            <li>Pebolim</li>
            <li>Cavalinho Infantil</li>
            <li>Combos</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-black">Contato</h3>
          <ul className="space-y-4 text-sm text-blue-100">
            <li className="flex items-center gap-3">
              <MessageCircle size={20} className="text-green-400" />
              (48) 99105-7261
            </li>

            <li className="flex items-center gap-3">
              <Mail size={20} />
              contato@aguiartoys.com.br
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={20} />
              Florianópolis - SC e região
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800 px-8 py-5 text-center text-sm text-blue-100">
        © 2024 Aguiar Toys. Todos os direitos reservados.
      </div>
    </footer>
  );
}
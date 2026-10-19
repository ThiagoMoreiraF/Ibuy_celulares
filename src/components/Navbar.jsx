import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Produtos", href: "#produtos" },
  { label: "Assistência", href: "#assistencia" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const whatsappLink =
  "https://wa.me/5567998204900?text=Olá!%20Vim%20pelo%20site%20da%20iBuy.";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="iBuy Celulares — início">
          <img src="/IBUY.png" alt="" />
          <span>iBuy<span className="brand-dot">.</span></span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="nav-cta"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Fale com a gente <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mobile-menu-cta"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

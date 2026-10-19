import { ArrowUpRight, Instagram } from "lucide-react";

const quickLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Assistência", href: "#assistencia" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#inicio">
              <img src="/IBUY.png" alt="" />
              <span>iBuy<span className="brand-dot">.</span></span>
            </a>
            <p>Reconectando você ao<br />ápice da tecnologia.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">EXPLORE</span>
            {quickLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
          </div>
          <div className="footer-social">
            <span className="footer-label">ACOMPANHE</span>
            <a href="https://instagram.com/ibuy.celulares" target="_blank" rel="noreferrer">
              <Instagram size={17} /> @ibuy.celulares <ArrowUpRight size={15} />
            </a>
            <span>Campo Grande · Mato Grosso do Sul</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} iBuy Celulares. Todos os direitos reservados.</span>
          <span>Feito para reconectar.</span>
        </div>
      </div>
    </footer>
  );
}

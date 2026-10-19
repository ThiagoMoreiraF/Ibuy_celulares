import { motion } from "framer-motion";
import { ArrowUpRight, Check, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading.jsx";

const products = [
  {
    name: "iPhone 14 Pro",
    detail: "128 GB · Roxo profundo",
    price: "R$ 3.999",
    installment: "ou 12x de R$ 333,25",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85",
    badge: "Queridinho",
    tone: "lavender",
  },
  {
    name: "iPhone 15",
    detail: "128 GB · Preto",
    price: "R$ 4.499",
    installment: "ou 12x de R$ 374,92",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
    badge: "Ótimo custo-benefício",
    tone: "graphite",
  },
  {
    name: "iPhone 16",
    detail: "128 GB · Ultramarino",
    price: "R$ 5.499",
    installment: "ou 12x de R$ 458,25",
    image:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=85",
    badge: "Novidade",
    tone: "blue",
  },
];

const whatsappLink =
  "https://wa.me/5567998204900?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20iPhones%20da%20vitrine.";

export function ProductsSection() {
  return (
    <section id="produtos" className="section products-section">
      <div className="section-container">
        <div className="products-heading-row">
          <SectionHeading
            eyebrow="ESCOLHAS QUE CONECTAM"
            title={<>Seu próximo iPhone.<br />Do seu jeito.</>}
            description="Modelos selecionados, procedência e atendimento que acompanha você."
          />
          <a className="text-link desktop-link" href={whatsappLink} target="_blank" rel="noreferrer">
            Consulte todos os modelos <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.article
              className="product-card"
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div className={`product-image product-image-${product.tone}`}>
                <span className="product-badge">{product.badge}</span>
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-image-note"><Smartphone size={13} /> IMAGEM ILUSTRATIVA</span>
              </div>
              <div className="product-details">
                <div className="product-title-row">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.detail}</p>
                  </div>
                  <span className="product-check"><Check size={13} /></span>
                </div>
                <div className="product-price-row">
                  <strong>{product.price}</strong>
                  <span>{product.installment}</span>
                </div>
                <a
                  className="product-buy"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar ${product.name} pelo WhatsApp`}
                >
                  Comprar via WhatsApp <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="price-disclaimer">
          *Preços e parcelas são exemplos ilustrativos, ainda não confirmados pela loja. Consulte valores e condições atuais pelo WhatsApp.
        </p>
      </div>
    </section>
  );
}

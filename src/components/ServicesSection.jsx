import { motion } from "framer-motion";
import { ArrowUpRight, BatteryCharging, CircuitBoard, ShieldCheck, Smartphone } from "lucide-react";
import { SectionHeading } from "./SectionHeading.jsx";

const services = [
  {
    number: "01",
    icon: Smartphone,
    title: "Troca de tela",
    description: "Seu display de volta à vida, com peças de qualidade e acabamento cuidadoso.",
  },
  {
    number: "02",
    icon: BatteryCharging,
    title: "Bateria",
    description: "Mais autonomia para o seu dia, com diagnóstico e substituição especializada.",
  },
  {
    number: "03",
    icon: CircuitBoard,
    title: "Reparo em placa",
    description: "Análise técnica precisa para reparos avançados em componentes internos.",
  },
];

const whatsappLink =
  "https://wa.me/5567998204900?text=Olá!%20Preciso%20de%20uma%20avaliação%20para%20meu%20iPhone.";

export function ServicesSection() {
  return (
    <section id="assistencia" className="section services-section">
      <div className="section-container">
        <div className="services-layout">
          <div className="services-intro">
            <SectionHeading
              eyebrow="CUIDADO DE ESPECIALISTA"
              title={<>Seu iPhone em<br />boas mãos.</>}
              description="Diagnóstico transparente, serviço feito com atenção e cuidado em cada detalhe."
              light
            />
            <a className="button-outline" href={whatsappLink} target="_blank" rel="noreferrer">
              Agende uma avaliação <ArrowUpRight size={17} />
            </a>
            <div className="service-trust"><ShieldCheck size={17} /> Atendimento especializado Apple</div>
          </div>

          <div className="service-list">
            {services.map(({ number, icon: Icon, title, description }, index) => (
              <motion.article
                className="service-card"
                key={number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="service-number">{number}</span>
                <div className="service-icon"><Icon size={23} strokeWidth={1.6} /></div>
                <div className="service-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <ArrowUpRight className="service-arrow" size={17} />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

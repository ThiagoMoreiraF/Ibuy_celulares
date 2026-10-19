import { motion } from "framer-motion";
import { ArrowUpRight, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading.jsx";

export function AboutSection() {
  return (
    <section id="sobre" className="section about-section">
      <div className="section-container about-layout">
        <div className="about-visual">
          <div className="about-image">
            <div className="about-image-glow" />
            <div className="about-image-caption"><span>IBUY CELULARES</span><span>CAMPO GRANDE · MS</span></div>
          </div>
          <motion.div
            className="about-stamp"
            initial={{ scale: 0.8, rotate: -12, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <HeartHandshake size={20} />
            <span>Feito com<br /><b>confiança</b></span>
          </motion.div>
        </div>

        <div className="about-copy">
          <SectionHeading
            eyebrow="MUITO MAIS QUE UMA LOJA"
            title={<>Tecnologia boa<br />é tecnologia<br /><span>com confiança.</span></>}
            description="A iBuy nasceu para aproximar pessoas da tecnologia que transforma o dia a dia. Em Campo Grande, unimos uma seleção cuidadosa de iPhones a uma assistência próxima, honesta e especializada."
          />
          <div className="about-facts">
            <div><Sparkles size={17} /><span>Atendimento próximo e transparente</span></div>
            <div><MapPin size={17} /><span>Orgulho de Campo Grande - MS</span></div>
          </div>
          <a className="text-link" href="#contato">
            Venha conhecer a iBuy <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

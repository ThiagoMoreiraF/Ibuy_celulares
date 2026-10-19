import { useState } from "react";
import { ArrowLeftRight, MoveRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading.jsx";

const comparisonImage =
  "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1500&q=85";

export function RepairsSection() {
  const [position, setPosition] = useState(52);

  return (
    <section className="section repairs-section">
      <div className="section-container repairs-layout">
        <div className="repairs-copy">
          <SectionHeading
            eyebrow="UM NOVO COMEÇO"
            title={<>A diferença está<br />nos detalhes.</>}
            description="Cada reparo é feito com precisão, transparência e respeito ao seu aparelho."
          />
          <div className="repair-caption">
            <span className="repair-caption-mark"><ArrowLeftRight size={18} /></span>
            <p>Arraste para ver o cuidado em cada etapa do reparo.</p>
          </div>
          <a className="text-link" href="#contato">
            Fale com um especialista <MoveRight size={17} />
          </a>
        </div>

        <div className="comparison-frame">
          <div className="comparison-image comparison-after" style={{ backgroundImage: `url("${comparisonImage}")` }} />
          <div
            className="comparison-image comparison-before"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img src={comparisonImage} alt="iPhone antes do reparo" />
            <div className="crack-overlay" aria-hidden="true">
              <svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice">
                <path d="M240 0 199 123l56 31-91 89 41 45-94 94 29 36-44 102M199 123l-81-27 29 71-67 57 92 18M255 154l88-46-32 89 61 44-81 47M205 288l-76-46-12 95-89 37M170 382l67-53 65 58-37 87" />
              </svg>
            </div>
          </div>
          <span className="comparison-label comparison-label-before">ANTES</span>
          <span className="comparison-label comparison-label-after">DEPOIS</span>
          <div className="comparison-divider" style={{ left: `${position}%` }}>
            <span><ArrowLeftRight size={17} /></span>
          </div>
          <input
            className="comparison-range"
            type="range"
            min="8"
            max="92"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Arraste para comparar antes e depois do reparo"
          />
          <p className="comparison-disclaimer">Imagem ilustrativa de demonstração</p>
        </div>
      </div>
    </section>
  );
}

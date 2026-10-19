import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const whatsappLink =
  "https://wa.me/5567998204900?text=Olá!%20Quero%20conhecer%20a%20iBuy.";

export function HeroCinematic() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const sceneScale = useTransform(scrollYProgress, [0, 0.48, 1], [1, 1.18, 1.08]);
  const phoneScale = useTransform(
    scrollYProgress,
    [0, 0.14, 0.25, 0.4],
    [0.78, 0.96, 0.96, 0.78],
  );
  const phoneY = useTransform(scrollYProgress, [0, 0.14, 0.3, 0.4], [34, 0, -8, 8]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.14, 0.4], [-7, 0, 3]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.22, 0.36, 0.42], [1, 1, 0.65, 0]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.27, 0.43, 1], [0, 0, 1, 1]);
  const copyY = useTransform(scrollYProgress, [0.27, 0.43], [24, 0]);

  const localTime = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(now);
  const localDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(now);

  return (
    <section id="inicio" ref={heroRef} className="cinematic-hero">
      <div className="cinematic-sticky">
        <motion.div
          className="hero-backdrop"
          style={reduceMotion ? undefined : { scale: sceneScale }}
        />
        <div className="hero-grain" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-topline">
          <span>CAMPO GRANDE · MS</span>
          <span><i /> IPHONES & ASSISTÊNCIA</span>
        </div>

        <div className="hero-device-stage">
          <motion.div
            className="hero-device"
            style={
              reduceMotion
                ? undefined
                : {
                    scale: phoneScale,
                    y: phoneY,
                    rotate: phoneRotate,
                    opacity: phoneOpacity,
                  }
            }
            role="img"
            aria-label={`iPhone com a data e o horário locais: ${localDate}, ${localTime}`}
          >
            <motion.div
              className="device-arrival"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.86, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            >
              <div className="device-side" />
              <div className="device-frame">
                <div className="device-screen">
                  <div className="screen-orb screen-orb-red" />
                  <div className="screen-orb screen-orb-blue" />
                  <div className="screen-glass" />
                  <div className="dynamic-island" />
                  <div className="screen-status">
                    <span>{localTime}</span>
                    <span className="screen-status-icons" aria-hidden="true">
                      <i /><i /><i />
                    </span>
                  </div>
                  <div className="screen-lock-copy">
                    <span>{localDate}</span>
                    <strong>{localTime}</strong>
                  </div>
                  <div className="screen-shortcuts" aria-hidden="true">
                    <span>◉</span><span>⌕</span>
                  </div>
                  <div className="screen-home-indicator" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="hero-copy"
          style={reduceMotion ? undefined : { opacity: copyOpacity, y: copyY }}
        >
          <div className="hero-mark hero-brand-reveal">
            <Sparkles size={17} />
            <span className="hero-mark-word">iBuy</span>
            <span>Celulares</span>
          </div>
          <p className="hero-kicker">SUA PRÓXIMA CONEXÃO COMEÇA AQUI</p>
          <h1>
            Reconectando você ao
            <br />
            <span>ápice da tecnologia.</span>
          </h1>
          <p className="hero-description">
            iPhones selecionados e assistência técnica especializada, com a
            confiança de quem entende de Apple.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Encontre seu iPhone <ArrowUpRight size={17} />
            </a>
            <a className="button-text" href="#assistencia">
              Conheça a assistência
            </a>
          </div>
        </motion.div>

        <div className="hero-bottomline">
          <span>TECNOLOGIA QUE APROXIMA.</span>
          <span className="scroll-prompt"><ArrowDown size={14} /> ROLE PARA DESCOBRIR</span>
          <span>01 — 06</span>
        </div>
      </div>
    </section>
  );
}

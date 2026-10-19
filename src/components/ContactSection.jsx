import { ArrowUpRight, Clock3, Instagram, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading.jsx";

const whatsappLink =
  "https://wa.me/5567998204900?text=Olá!%20Quero%20falar%20com%20a%20iBuy.";
const mapLink =
  "https://maps.google.com/?q=Rua+Jeribá,+325,+Chácara+Cachoeira,+Campo+Grande+-+MS";

export function ContactSection() {
  return (
    <section id="contato" className="section contact-section">
      <div className="section-container">
        <div className="contact-top">
          <SectionHeading
            eyebrow="A GENTE ESTÁ POR AQUI"
            title={<>Vamos conversar?</>}
            description="Tire suas dúvidas, agende um reparo ou venha conhecer a loja."
            light
          />
          <a className="button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> Chamar no WhatsApp
          </a>
        </div>

        <div className="contact-grid">
          <div className="contact-details">
            <a className="contact-item" href={mapLink} target="_blank" rel="noreferrer">
              <span className="contact-icon"><MapPin size={19} /></span>
              <span><small>VISITE A LOJA</small><strong>Rua Jeribá, 325, Sala 44</strong><em>Chácara Cachoeira · Campo Grande - MS</em></span>
              <ArrowUpRight size={17} />
            </a>
            <a className="contact-item" href={whatsappLink} target="_blank" rel="noreferrer">
              <span className="contact-icon"><Phone size={19} /></span>
              <span><small>WHATSAPP</small><strong>(67) 99820-4900</strong><em>Fale com nosso time</em></span>
              <ArrowUpRight size={17} />
            </a>
            <a className="contact-item" href="mailto:suporte@ibuycelulares.com.br">
              <span className="contact-icon"><Mail size={19} /></span>
              <span><small>E-MAIL</small><strong>suporte@ibuycelulares.com.br</strong><em>Estamos prontos para ajudar</em></span>
              <ArrowUpRight size={17} />
            </a>
            <a className="contact-item" href="https://instagram.com/ibuy.celulares" target="_blank" rel="noreferrer">
              <span className="contact-icon"><Instagram size={19} /></span>
              <span><small>INSTAGRAM</small><strong>@ibuy.celulares</strong><em>Acompanhe as novidades</em></span>
              <ArrowUpRight size={17} />
            </a>
          </div>

          <a className="map-card" href={mapLink} target="_blank" rel="noreferrer" aria-label="Abrir localização da iBuy no Google Maps">
            <div className="map-grid" />
            <div className="map-road map-road-one" />
            <div className="map-road map-road-two" />
            <div className="map-road map-road-three" />
            <div className="map-block map-block-one" />
            <div className="map-block map-block-two" />
            <div className="map-block map-block-three" />
            <div className="map-block map-block-four" />
            <div className="map-location"><span><MapPin size={21} fill="currentColor" /></span><b>iBuy Celulares</b></div>
            <span className="map-neighborhood">CHÁCARA CACHOEIRA</span>
            <span className="map-road-label">RUA JERIBÁ</span>
            <span className="map-open"><Navigation size={15} /> Abrir no mapa <ArrowUpRight size={15} /></span>
          </a>
        </div>

        <div className="contact-hours"><Clock3 size={15} /> Horários de atendimento sujeitos à confirmação pelo WhatsApp.</div>
      </div>
    </section>
  );
}

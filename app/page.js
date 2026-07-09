import Link from "next/link";

const CONTACTO = {
  telefono: "999 761 5135",
  whatsapp: "999 143 0314",
  correo: "promotoracva@gmail.com",
};

export default function Home() {
  return (
    <div className="landing">
      <div className="landing-inner">
        <img
          src="/logo-cva.png"
          alt="Promotora CVA Bienes & Raíces"
          className="landing-logo"
        />
        <p className="landing-tagline">Bienes &amp; Raíces en Mérida, Yucatán</p>
        <Link href="/avisodeprivacidad" className="landing-cta">
          Aviso de Privacidad
        </Link>
      </div>

      <footer className="landing-footer">
        <span>{CONTACTO.telefono}</span>
        <span>{CONTACTO.correo}</span>
      </footer>
    </div>
  );
}

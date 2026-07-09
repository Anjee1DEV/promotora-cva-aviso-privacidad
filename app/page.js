const CONTACTO = {
  telefono: "999 761 5135",
  whatsapp: "999 143 0314",
  correo: "promotoracva@gmail.com",
  direccion:
    'Calle 42 Sur N.° 555 entre 127 y 127-A, Fracc. Ampliación "La Hacienda", C.P. 97289, Mérida, Yucatán',
};

const ULTIMA_ACTUALIZACION = "9 de julio de 2026";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <img src="/logo-cva.png" alt="Promotora CVA Bienes & Raíces" />
          <div className="header-text">
            <h1>Promotora CVA</h1>
            <p>Bienes &amp; Raíces · Mérida, Yucatán</p>
          </div>
        </div>
      </header>

      <section className="hero">
        <span className="hero-eyebrow">Aviso de Privacidad</span>
        <h2>Protegemos tus datos con la misma seriedad con la que manejamos tu patrimonio.</h2>
        <p>
          Este aviso explica qué información recabamos, para qué la usamos y cómo
          puedes ejercer tus derechos, conforme a la Ley Federal de Protección de
          Datos Personales en Posesión de los Particulares.
        </p>
        <p className="hero-meta">Última actualización: {ULTIMA_ACTUALIZACION}</p>
      </section>

      <main>
        <article className="aviso">
          <section>
            <h3>1. Responsable del tratamiento de tus datos</h3>
            <p>
              <strong>Promotora CVA Bienes &amp; Raíces</strong> (en adelante,
              &quot;Promotora CVA&quot;), con domicilio en {CONTACTO.direccion}, es
              responsable del uso y protección de los datos personales que nos
              proporcionas al solicitar información sobre nuestros servicios
              inmobiliarios.
            </p>
          </section>

          <section>
            <h3>2. Datos personales que recabamos</h3>
            <p>Para brindarte asesoría y gestionar operaciones inmobiliarias, podemos solicitar:</p>
            <ul>
              <li>Datos de identificación: nombre completo, identificación oficial, RFC y CURP.</li>
              <li>Datos de contacto: teléfono, correo electrónico y domicilio.</li>
              <li>Datos patrimoniales y financieros: información sobre el inmueble de interés, comprobantes de ingresos y datos bancarios necesarios para la operación.</li>
              <li>Datos que nos compartes de forma voluntaria a través de llamadas, WhatsApp, correo electrónico o formularios de contacto.</li>
            </ul>
          </section>

          <section>
            <h3>3. Finalidades del tratamiento</h3>
            <p>Tus datos personales se utilizan para:</p>
            <ul>
              <li>Atender tus solicitudes de información sobre compra, venta o renta de inmuebles.</li>
              <li>Elaborar cotizaciones, contratos y demás documentación propia de una operación inmobiliaria.</li>
              <li>Dar seguimiento y soporte a trámites relacionados con el inmueble de tu interés.</li>
              <li>Enviarte información sobre propiedades o promociones que puedan ser de tu interés, siempre que no te hayas opuesto a ello.</li>
              <li>Cumplir con obligaciones legales, fiscales y regulatorias aplicables a la actividad inmobiliaria.</li>
            </ul>
          </section>

          <section>
            <h3>4. Transferencia de datos</h3>
            <p>
              Tus datos personales pueden ser compartidos con notarías, instituciones
              financieras, autoridades registrales o dependencias de gobierno,
              únicamente cuando sea necesario para formalizar una operación
              inmobiliaria o para cumplir con una obligación legal. Promotora CVA no
              vende ni renta tu información a terceros con fines distintos.
            </p>
          </section>

          <section>
            <h3>5. Derechos ARCO</h3>
            <p>
              Tienes derecho a acceder, rectificar y cancelar tus datos personales,
              así como a oponerte al tratamiento de los mismos o revocar el
              consentimiento que nos hayas otorgado (derechos ARCO). Para ejercerlos,
              envía tu solicitud a {CONTACTO.correo} indicando tu nombre completo,
              el derecho que deseas ejercer y un medio de contacto para darte
              respuesta. Atenderemos tu solicitud en un plazo máximo de 20 días
              hábiles.
            </p>
          </section>

          <section>
            <h3>6. Uso de cookies y tecnologías de rastreo</h3>
            <p>
              Este sitio puede utilizar cookies u otras tecnologías similares para
              mejorar tu experiencia de navegación. Puedes deshabilitarlas desde la
              configuración de tu navegador sin que esto afecte tu acceso a la
              información pública del sitio.
            </p>
          </section>

          <section>
            <h3>7. Cambios a este aviso de privacidad</h3>
            <p>
              Promotora CVA podrá actualizar este aviso de privacidad en cualquier
              momento para atender novedades legislativas, políticas internas o
              nuevos requerimientos de nuestros servicios. Cualquier modificación se
              publicará en esta misma página.
            </p>
          </section>

          <section>
            <h3>8. Contacto</h3>
            <p>
              Si tienes dudas sobre este aviso de privacidad o sobre el tratamiento
              de tus datos personales, puedes contactarnos a través de:
            </p>
            <div className="contacto-card">
              <div>
                <span>Teléfono</span>
                {CONTACTO.telefono}
              </div>
              <div>
                <span>WhatsApp</span>
                {CONTACTO.whatsapp}
              </div>
              <div>
                <span>Correo electrónico</span>
                {CONTACTO.correo}
              </div>
              <div>
                <span>Dirección</span>
                {CONTACTO.direccion}
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Promotora CVA Bienes &amp; Raíces.</span>
          <span>{CONTACTO.direccion}</span>
        </div>
      </footer>
    </>
  );
}

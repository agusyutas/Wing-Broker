import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const navegacion = [
  { texto: "Inicio", href: "/#top" },
  { texto: "Quiénes somos", href: "/#quienes-somos" },
  { texto: "Seguros", href: "/#seguros" },
  { texto: "Contacto", href: "/#contacto" },
]

const seguros = [
  { texto: "Auto", href: "/#seguros" },
  { texto: "Hogar", href: "/#seguros" },
  { texto: "Vida", href: "/#seguros" },
  { texto: "Comercial / Pyme", href: "/#seguros" },
  { texto: "Caución", href: "/#seguros" },
  { texto: "Viaje", href: "/#seguros" },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h3 className="footer-marca">Wing Broker</h3>
            <p className="footer-descripcion">
              Asesoramiento en seguros con las mejores compañías del mercado,
              pensado para tu situación particular.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h4>Navegación</h4>
            <ul className="footer-lista">
              {navegacion.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.texto}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h4>Seguros</h4>
            <ul className="footer-lista">
              {seguros.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.texto}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h4>Contacto</h4>
            <div className="footer-contacto-item">
              <MdOutlineMailOutline />
              <a href="mail:fernandoyutas@wing-broker.com.ar">fernandoyutas@wing-broker.com.ar</a>
            </div>
            <div className="footer-contacto-item">
              <BsFillTelephoneFill />
              <a href="tel:1155795545">11-5579-5545</a>
            </div>
            <div className="footer-redes">
                <a href="https://www.instagram.com/wing_broker/" target="_blank" rel="noopener noreferrer" className="footer-red-link">
                  <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/wing-broker-586b54438/" target="_blank" rel="noopener noreferrer" className="footer-red-link">
                  <BsLinkedin />
                </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Wing Broker SRL. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
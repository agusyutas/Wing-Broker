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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 6l8 6 8-6M4 6h16v12H4z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="mailto:wingbroker@gmail.com">wingbroker@gmail.com</a>
            </div>
            <div className="footer-contacto-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2a1 1 0 011-.2 11 11 0 003.5.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.4a1 1 0 011 1 11 11 0 00.6 3.5 1 1 0 01-.2 1z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="tel:1121213131">11-2121-3131</a>
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
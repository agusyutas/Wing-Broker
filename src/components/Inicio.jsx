function Inicio() {
    const logos = [
    { src: '/allianz-logo.png', alt: 'Allianz' },
    { src: '/assistance-logo.png', alt: 'Universal Assistance' },
    { src: '/federacion-logo.png', alt: 'Federación Patronal' },
    { src: '/sancor-logo.png', alt: 'Sancor Seguros' },
    { src: '/zurich-logo.png', alt: 'Zurich' },
    { src: '/holando-logo.png', alt: 'La Holando' },
    { src: '/experta-logo.png', alt: 'Experta' },
    { src: '/mapre-logo.png', alt: 'Mapfre' },
  ]

  return (
    <section id="inicio" className="inicio">

      <div className="inicio-content">
        <img
          src="/banner.png"
          alt="Equipo de Wing Broker"
          className="banner"
        />
      </div>

       <div className="logos-carousel">
        <div className="logos-track">

          <div className="logos-group">
            {logos.map((logo, index) => (
              <img
                key={`logo-1-${index}`}
                src={logo.src}
                alt={logo.alt}
                width="1000"
                height="67"
                loading="eager"
                decoding="async"
              />
            ))}
          </div>

          <div className="logos-group" aria-hidden="true">
            {logos.map((logo, index) => (
              <img
                key={`logo-2-${index}`}
                src={logo.src}
                alt={logo.alt}
                width="1000"
                height="67"
                loading="eager"
                decoding="async"
              />
            ))}
          </div>

        </div>
      </div>
      
      
    </section>
  )
}

export default Inicio
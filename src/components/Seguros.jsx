const seguros = [
  {
    icono: { src: '/coche-wing.png', alt: 'icono coche' },
    titulo: "Seguro Automotor",
    descripcion: "Coberturas contra terceros, robo o todo riesgo, con asistencia mecánica incluida.",
  },
  {
    icono: { src: '/hogar-wing.png', alt: 'icono hogar' },
    titulo: "Seguro de hogar",
    descripcion: "Protección contra incendio, robo, daños por agua y responsabilidad civil.",
  },
  {
    icono: { src: '/corazon-wing.png', alt: 'icono corazon' },
    titulo: "Seguro de vida",
    descripcion: "Tranquilidad económica para tu familia ante un imprevisto.",
  },
  {
    icono: { src: '/proteger-wing.png', alt: 'icono escudo' },
    titulo: "Caución y garantías",
    descripcion: "Pólizas de caución para alquileres, licitaciones y contratos.",
  },
  {
    icono: { src: '/avion-wing.png', alt: 'icono avion' },
    titulo: "Seguro del viajero",
    descripcion: "Cobertura para vos y tu familia durante tus viajes, en Argentina o el exterior.",
  },
  {
    icono: { src: '/tienda-wing.png', alt: 'icono tienda' },
    titulo: "Seguro comercial / Pyme",
    descripcion: "Cobertura para tu local, mercadería, maquinaria y responsabilidad civil.",
  },
]

function Seguros() {
  return (
    <section id="seguros" className="seguros">
      <div className="container">
        <h2 className="seguros-titulo">Un seguro para cada etapa</h2>
        <p className="seguros-subtitulo">
          Comparamos entre varias compañías para encontrar la cobertura que
          mejor se adapte a tu situación y presupuesto.
        </p>

        <div className="row g-4 mt-2">
          {seguros.map((seguro, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="seguro-card">
                <div className="seguro-icono">
                  <img src={seguro.icono.src} alt={seguro.icono.alt} />
                </div>
                <h3>{seguro.titulo}</h3>
                <p>{seguro.descripcion}</p>
                <a href="#contacto" className="seguro-link">Consultar →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Seguros
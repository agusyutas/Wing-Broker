const testimonios = [
  {
    imagen: {src:"/gustavo.jpg", alt: 'gustavo'},
    nombre: "Gustavo Manini",
    seguro: "Seguro de auto",
    texto: "Me asesoraron muy bien desde el primer momento y encontré una cobertura que se ajustaba a lo que necesitaba. La atención y el acompañamiento fueron excelentes.",
  },
  {
    imagen: {src:"/noelia.jpg", alt: 'noelia'},
    nombre: "Noelia Rusillio",
    seguro: "Seguro del viajero",
    texto: "Viajé mucho más tranquila sabiendo que tenía una cobertura completa. Me asesoraron desde el primer momento y resolvieron todas mis dudas antes de viajar.",
  },
  {
    imagen: {src:"/brisa.jpg", alt: 'brisa'},
    nombre: "Brisa Masini",
    seguro: "Seguro de hogar",
    texto: "Cuando tuve un problema en casa, se encargaron de acompañarme durante todo el proceso. Tener a alguien que me asesorara y gestionara el trámite hizo toda la diferencia.",
  },
]

function Testimonios() {
  return (
    <section id="testimonios" className="testimonios">
      <div className="container">
        <h2 className="testimonios-titulo">Lo que dicen nuestros clientes</h2>

        <div className="row g-4 mt-2">
          {testimonios.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="testimonio-card">
                <div className="testimonio-header">
                  <img
                    className="testimonio-avatar"
                    src={item.imagen.src}
                    alt={item.imagen.alt}
                  />
                  <div>
                    <p className="testimonio-nombre">{item.nombre}</p>
                    <p className="testimonio-seguro">{item.seguro}</p>
                  </div>
                </div>
                <p className="testimonio-texto">"{item.texto}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonios
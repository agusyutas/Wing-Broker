import { useState } from 'react'

const preguntas = [
  {
    pregunta: "¿Cómo denuncio un siniestro?",
    respuesta: "Ante un siniestro, contactanos lo antes posible. Nuestro equipo te indicará cómo proceder y te acompañará en la gestión de la denuncia ante la aseguradora, ayudándote con la documentación y los pasos necesarios según cada situación.",
  },
  {
    pregunta: "¿Qué documentación necesito para contratar un seguro?",
    respuesta: "La documentación necesaria depende del tipo de seguro, el bien o riesgo a asegurar y las características de cada cliente. En general, pueden solicitarse datos personales y de contacto, documentación que identifique al asegurado y, según el caso, información específica sobre el vehículo, inmueble, comercio, empresa o actividad que se desea proteger.",
  },
  {
    pregunta: "¿Por qué contratar mi seguro con Wing Broker?",
    respuesta: "Porque creemos que contratar un seguro no debería ser simplemente elegir una póliza. Primero entendemos qué necesitás proteger y después buscamos la cobertura adecuada. En Wing Broker brindamos asesoramiento personalizado y trabajamos con distintas alternativas del mercado para encontrar soluciones acordes a las necesidades de cada cliente. Nuestro objetivo es que conozcas qué estás contratando, qué incluye tu cobertura y cuáles son sus condiciones. Además, nuestro acompañamiento no termina con la contratación: estamos para asesorarte cuando necesitás realizar una consulta, modificar tu cobertura o atravesar un siniestro."
  },
]

function Preguntas() {
  const [abierta, setAbierta] = useState(null)

  const toggle = (index) => {
    setAbierta(abierta === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="faq-titulo">Preguntas frecuentes</h2>

        <div className="faq-lista">
          {preguntas.map((item, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-pregunta" onClick={() => toggle(index)}>
                <span>{item.pregunta}</span>
                <span className={`faq-icono ${abierta === index ? 'abierto' : ''}`}>+</span>
              </button>
              <div className={`faq-respuesta ${abierta === index ? 'visible' : ''}`}>
                <p>{item.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Preguntas
import Testimonios from './Testimonios.jsx'
import Preguntas from './Preguntas.jsx'

function TestimoniosPreguntas() {
  return (
    <div className="marca-agua-wrapper">
      <img
        src="/ala-logo.png"
        alt="ala logo"
        className="marca-agua-ala"
        aria-hidden="true"
      />
      <Testimonios />
      <Preguntas />
    </div>
  )
}

export default TestimoniosPreguntas
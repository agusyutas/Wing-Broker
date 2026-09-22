import { Link } from 'react-router-dom'

function QuienesSomos() {
  return (
    <section id="quienes-somos" className="quienes-somos">
      <div className="quienes-somos-content">
        <h1>Wing Broker SRL</h1>
        <p>
          Contamos con un equipo especializado en seguros, preparado para
          asesorarte de manera personalizada y ayudarte a encontrar la
          cobertura adecuada para cada necesidad. Trabajamos con compañías
          aseguradoras de primer nivel, buscando alternativas competitivas y
          soluciones que se adapten a tus necesidades.
        </p>

        <Link to="/historia" className="btn-leer-mas">
          Leer Más
        </Link>

      </div>
      
    </section>
  )
}

export default QuienesSomos
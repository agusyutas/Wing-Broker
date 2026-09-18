import { useEffect, useRef, useState } from 'react'

const estadisticas = [
  { valor: 35, sufijo: "+", texto: "años en el mercado" },
  { valor: 3, sufijo: "k", texto: "clientes satisfechos" },
  { valor: 8, sufijo: "", texto: "compañías asociadas" },
]

function useContador(valorFinal, activo, duracion = 1500) {
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!activo) {
      setValor(0) 
      return
    }

    let inicio = null
    let frameId

    const animar = (timestamp) => {
      if (!inicio) inicio = timestamp
      const progreso = Math.min((timestamp - inicio) / duracion, 1)
      const progresoSuave = 1 - Math.pow(1 - progreso, 3)
      setValor(Math.round(progresoSuave * valorFinal))

      if (progreso < 1) {
        frameId = requestAnimationFrame(animar)
      }
    }

    frameId = requestAnimationFrame(animar)

    return () => cancelAnimationFrame(frameId) 
  }, [activo, valorFinal, duracion])

  return valor
}

function Estadistica({ item, activo }) {
  const valorActual = useContador(item.valor, activo)

  return (
    <div className="col-4 text-center">
      <h2>{valorActual}{item.sufijo}</h2>
      <p>{item.texto}</p>
    </div>
  )
}

function Estadisticas() {
  const [activo, setActivo] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActivo(entry.isIntersecting)
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="estadisticas" ref={sectionRef}>
      <div className="container">
        <div className="row">
          {estadisticas.map((item, index) => (
            <Estadistica item={item} activo={activo} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Estadisticas
import { useEffect, useRef } from 'react'

const equipo = [
  {
    foto: { src: "/jorge.jpeg", alt: 'Jorge Klein' },
    nombre: 'Jorge Juan Klein',
    cargo: 'Co-fundador · Productor Asesor de Seguros',
    descripcion:
    [
      "La historia de Wing Broker también está atravesada por la trayectoria de Jorge Juan Klein, referente y cofundador de este proyecto, cuya vida profesional está profundamente ligada al desarrollo de la actividad aseguradora en Argentina.",
      "Su recorrido comenzó el 20 de diciembre de 1960, cuando, con apenas 15 años, ingresó como cadete a Plus Ultra, dando sus primeros pasos dentro de una actividad a la que dedicaría toda su vida profesional. Una década más tarde decidió independizarse y comenzar su camino como Productor Asesor de Seguros.",
      "A lo largo de los años desarrolló una extensa trayectoria vinculada al asesoramiento, la intermediación y el mercado de seguros y reaseguros. Participó en distintos proyectos y organizaciones del sector, incluyendo la creación de FIDESEG junto a Manuel Lamas.",
      "También desarrolló una intensa actividad institucional en AAPAS, participando en iniciativas vinculadas al crecimiento y profesionalización de la actividad aseguradora. Su experiencia estuvo además estrechamente vinculada al mercado de reaseguros, trabajando con compañías argentinas y extranjeras y participando en operaciones internacionales que incluyeron mercados de Europa y Lloyd’s de Londres.",
      "En 2015 comenzó a alejarse de la actividad cotidiana para dar paso a una nueva generación, continuando la tradición familiar a través de su hija Fernanda Mirta Klein.",
      "Hoy, toda esa experiencia forma parte de Wing Broker y representa uno de los pilares sobre los que se construye nuestra manera de entender el asesoramiento y el vínculo con nuestros clientes.",
    ],

    destacado: true,
  },
  {
    foto: { src: "/fernanda.jpeg", alt: 'Fernanda Klein' },
    nombre: 'Fernanda Mirta Klein',
    cargo: 'Socia Gerente · Fundadora',
    descripcion:
    [
      "Junto a Fernando Yutas, es una de las socias gerentes y fundadoras de Wing Broker.",
      "Su incorporación representa la continuidad de una trayectoria familiar profundamente vinculada al mercado asegurador. Desde su rol participa en la dirección y desarrollo de la empresa, aportando experiencia, conocimiento del sector y una mirada orientada a las necesidades de cada cliente.",
      "Su trabajo forma parte de una nueva etapa, en la que la experiencia acumulada a lo largo de los años se combina con una propuesta cercana, profesional y personalizada.",
    ],
  },
  {
    foto: { src: "/fernando-yutas.jpg", alt: 'Fernando Yutas' },
    nombre: 'Fernando Jorge Yutas',
    cargo: 'Socio Gerente · Fundador',
    descripcion:
    [
      "Junto a Fernanda Klein, es uno de los socios gerentes y fundadores de Wing Broker.",
      "Participa en la dirección y desarrollo de la empresa, aportando su experiencia y conocimiento para construir una propuesta basada en el asesoramiento profesional y el acompañamiento personalizado.",
      "Su rol dentro de Wing Broker combina la gestión, la atención de las necesidades de los clientes y el desarrollo de una estructura pensada para brindar soluciones de seguros de manera cercana y eficiente.",
    ],
  },
  {
    foto: { src: "/ricardo-falavigna.jpg", alt: 'Ricardo Falavigna' },
    nombre: 'Ricardo Falavigna',
    cargo: 'Encargado en Siniestros',
    descripcion:
    [
      "Es parte del equipo de Wing Broker y desarrolla sus tareas principalmente en el área de siniestros.",
      "Su función es acompañar y asistir a los clientes durante uno de los momentos más importantes de la relación con su seguro, colaborando en la gestión y seguimiento de cada caso.",
      "Su trabajo busca aportar orden, atención y acompañamiento durante todo el proceso.",
    ],
  },
  {
    foto: { src: "/dario-ponce.jpg", alt: 'Dario Ponce' },
    nombre: 'Darío Ponce',
    cargo: 'Asistente Administrativo',
    descripcion:
    [
      "Es parte del equipo administrativo de Wing Broker.",
      "Se encarga de brindar soporte en las tareas administrativas y de colaborar con la gestión diaria, contribuyendo a que cada proceso se desarrolle de manera organizada y eficiente.",
      "Su trabajo permite acompañar las distintas áreas de la empresa y facilitar una atención ágil para nuestros clientes.",
    ],
  },
]

function Info() {
  const filasRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) 
          }
        })
      },
      { threshold: 0.15 }
    )

    filasRef.current.forEach((fila) => {
      if (fila) observer.observe(fila)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="info">
      <div className="info-hero">
        <div className="container info-hero-content">
          <span className="info-hero-etiqueta">30 años de experiencia. Un nuevo camino.</span>
          <h1 className="info-titulo">Nuestra Historia</h1>
        </div>
      </div>

      <div className="container">
        <div className="info-intro">
          <h2>Un proyecto construido sobre la confianza</h2>
          <p>
            Después de más de 30 años de trayectoria en distintas compañías de seguros, 
            conociendo desde adentro sus productos, procesos y formas de trabajo, llegó el 
            momento de comenzar una nueva etapa: emprender el camino como Asesores de Seguros.
          </p>
          <p>
            Ese recorrido nos permitió conocer profundamente el funcionamiento de la actividad, 
            entender las necesidades de los clientes y, sobre todo, aprender que detrás de cada 
            póliza hay una persona, una familia, un proyecto o un patrimonio que merece ser protegido.
          </p>
          <p>
            A lo largo de estos años también fuimos construyendo vínculos profesionales y personales con 
            personas que comparten nuestra manera de entender la actividad aseguradora. Entre ellos, 
            la familia Klein, con una extensa trayectoria y reconocimiento dentro del sector.
          </p>
          <p>         
            De ese encuentro de experiencias, conocimientos y una visión compartida sobre la manera de acompañar a 
            los clientes, comenzó a tomar forma un nuevo proyecto.
          </p>
          <h3>Así nació <br/> Wing Broker</h3>
          <p>
            Una estructura creada para poner en valor todo el conocimiento y la experiencia adquiridos a lo largo de los años, 
            pero desde un nuevo lugar: el de intermediarios y asesores, construyendo un puente entre las compañías de seguros 
            y nuestros clientes.
          </p>
          <p>
            Hoy trabajamos para que ese conocimiento se transforme en algo concreto: asesoramiento, acompañamiento y soluciones 
            de seguros pensadas para cada necesidad.
          </p>
          <p>
            Porque nuestra historia no se trata solamente de los años recorridos, sino de todo lo que aprendimos en ese camino y de cómo elegimos 
            ponerlo al servicio de quienes confían en nosotros.
          </p>
        </div>

        <div className="info-equipo-intro">
          <h3>Un equipo, diferentes especialidades</h3>
          <p>
            Detrás de cada póliza, cada consulta y cada siniestro hay
            personas que trabajan para brindarte una atención personalizada.
          </p>
        </div>
      </div>

      <div className="info-equipo">
        {equipo.map((persona, index) => (
          <div
            ref={(el) => (filasRef.current[index] = el)}
            className={`info-fila ${index % 2 === 0 ? 'info-fila-azul' : 'info-fila-blanca'} ${persona.destacado ? 'info-fila-destacada' : ''}`}
            key={index}
          >
            <div className="container info-fila-content">
              <div
                className={`info-foto ${persona.destacado ? 'info-foto-grande' : ''} ${index % 2 !== 0 ? 'info-foto-derecha' : ''}`}
              >
                <img src={persona.foto.src} alt={persona.foto.alt} />
              </div>
              <div className="info-texto">
                <h3>{persona.nombre}</h3>
                <span className="info-cargo">{persona.cargo}</span>
                <div className="info-descripcion">
                    {persona.descripcion.map((descripcion, i) => (
                      <p key={i}>{descripcion}</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Info
import { useState } from 'react'
import emailjs from '@emailjs/browser'

// Solo letras (con acentos y ñ) y espacios
const soloLetras = (valor) => valor.replace(/[^a-zA-ZÁÉÍÓÚáéíóúÑñ\s]/g, '')

// Solo números, espacios, +, ( ) y guiones (formatos comunes de teléfono)
const soloTelefono = (valor) => valor.replace(/[^0-9+\s()-]/g, '')

const emailValido = (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  const [errores, setErrores] = useState({})
  const [estado, setEstado] = useState({ enviando: false, tipo: null, texto: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    let valorLimpio = value

    // Filtramos caracteres inválidos en tiempo real según el campo
    if (name === 'nombre' || name === 'apellido') {
      valorLimpio = soloLetras(value)
    }
    if (name === 'telefono') {
      valorLimpio = soloTelefono(value)
    }

    setForm({ ...form, [name]: valorLimpio })

    // Si el usuario corrige el campo, le sacamos el error en vivo
    if (errores[name]) {
      setErrores({ ...errores, [name]: null })
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const nuevosErrores = { ...errores }

    if (name === 'nombre' && value.trim().length < 2) {
      nuevosErrores.nombre = 'Ingresá tu nombre'
    }
    if (name === 'apellido' && value.trim().length < 2) {
      nuevosErrores.apellido = 'Ingresá tu apellido'
    }
    if (name === 'email' && !emailValido(value)) {
      nuevosErrores.email = 'Ingresá un email válido (ej: nombre@mail.com)'
    }
    if (name === 'telefono' && value.trim().length > 0 && value.replace(/\D/g, '').length < 8) {
      nuevosErrores.telefono = 'Ingresá un teléfono válido'
    }
    if (name === 'mensaje' && value.trim().length < 10) {
      nuevosErrores.mensaje = 'Contanos un poco más (mínimo 10 caracteres)'
    }

    setErrores(nuevosErrores)
  }

  const validarTodo = () => {
    const nuevosErrores = {}

    if (form.nombre.trim().length < 2) nuevosErrores.nombre = 'Ingresá tu nombre'
    if (form.apellido.trim().length < 2) nuevosErrores.apellido = 'Ingresá tu apellido'
    if (!emailValido(form.email)) nuevosErrores.email = 'Ingresá un email válido'
    if (form.telefono.trim().length > 0 && form.telefono.replace(/\D/g, '').length < 8) {
      nuevosErrores.telefono = 'Ingresá un teléfono válido'
    }
    if (form.mensaje.trim().length < 10) nuevosErrores.mensaje = 'Contanos un poco más (mínimo 10 caracteres)'

    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validarTodo()) {
      setEstado({ enviando: false, tipo: 'error', texto: 'Revisá los campos marcados antes de enviar.' })
      return
    }

    setEstado({ enviando: true, tipo: null, texto: '' })

    emailjs
      .send(
        'service_srxmb6d',
        'template_n1hesr7',
        {
          nombre: form.nombre,
          apellido: form.apellido,
          email: form.email,
          telefono: form.telefono,
          mensaje: form.mensaje,
        },
        '011bSbOzXdFH6DXOb'
      )
      .then(() => {
        setEstado({ enviando: false, tipo: 'exito', texto: '¡Gracias! Recibimos tu consulta, te vamos a contactar a la brevedad.' })
        setForm({ nombre: '', apellido: '', email: '', telefono: '', mensaje: '' })
        setErrores({})
      })
      .catch(() => {
        setEstado({ enviando: false, tipo: 'error', texto: 'Hubo un problema al enviar tu consulta. Probá de nuevo o escribinos por WhatsApp.' })
      })
  }

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <h2 className="contacto-titulo">Contactanos</h2>

        <form className="contacto-form" onSubmit={handleSubmit} noValidate>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errores.nombre ? 'input-error' : ''}
              />
              {errores.nombre && <span className="mensaje-error">{errores.nombre}</span>}
            </div>

            <div className="col-12 col-md-6">
              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errores.apellido ? 'input-error' : ''}
              />
              {errores.apellido && <span className="mensaje-error">{errores.apellido}</span>}
            </div>

            <div className="col-12 col-md-6">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errores.email ? 'input-error' : ''}
              />
              {errores.email && <span className="mensaje-error">{errores.email}</span>}
            </div>

            <div className="col-12 col-md-6">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                onBlur={handleBlur}
                inputMode="tel"
                className={errores.telefono ? 'input-error' : ''}
              />
              {errores.telefono && <span className="mensaje-error">{errores.telefono}</span>}
            </div>

            <div className="col-12">
              <label>Mensaje:</label>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errores.mensaje ? 'input-error' : ''}
              />
              {errores.mensaje && <span className="mensaje-error">{errores.mensaje}</span>}
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn-enviar" disabled={estado.enviando}>
                {estado.enviando ? 'Enviando...' : 'Enviar'}
              </button>

              {estado.tipo && (
                <p className={`contacto-status ${estado.tipo}`}>{estado.texto}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacto
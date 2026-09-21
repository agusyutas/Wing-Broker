import { FaWhatsapp } from 'react-icons/fa'

function WspBoton() {
  const numero = '5491155795545'

  const mensaje = encodeURIComponent(
    'Hola, quisiera hacer una consulta sobre los seguros.'
  )

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

export default WspBoton
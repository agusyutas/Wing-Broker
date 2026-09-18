import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
       <a href="/#inicio" className="navbar-logo" onClick={closeMenu}>
        <img src="/logo.png" alt="Wing Broker" />
      </a>

      <button
        className={`navbar-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <a href="/#inicio" onClick={closeMenu}>Inicio</a>
        <a href="/#quienes-somos" onClick={closeMenu}>Quiénes somos</a>
        <a href="/#seguros" onClick={closeMenu}>Seguros</a>
        <a href="/#contacto" onClick={closeMenu}>Contacto</a>
      </div>
    </nav>
  );
}

export default Nav;
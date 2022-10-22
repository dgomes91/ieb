import Link from 'next/link';
import React from 'react'
import styles from '../styles/IndexNew.module.css'

function Navbarmobile() {
  return (
    <>
      <nav className="navbar mb-3">
        <div className={styles.navbar}>
          <span className="navbar-brand mb-0 h1">IEB.app</span>
        </div>
        <Link href="#">Inicio</Link>
        <Link href="/donation">Doação</Link>
        <Link href="/apidados">API</Link>
        <div className="nav-item dropdown">
          <a clasName="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sobre
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="/about">Quem Somos</Link></li>
            <li><Link className="dropdown-item" href="/privacy">Política de Privacidade</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="/contact">Contato</Link></li>
          </ul>
        </div>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbarmobile;
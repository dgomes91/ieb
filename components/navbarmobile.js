import Link from 'next/link';
import React from 'react'
import styles from '../styles/IndexNew.module.css'

function Navbarmobile() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className={styles.navbar}>
            <span className="navbar-brand px-4 h1">IEB.app</span>
          </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <div className={styles.navbar}>
              <div className="row">
                <li className="nav-item col-3"><Link href="#">Inicio</Link></li>
                <li className="nav-item col-3"><Link href="/donation">Doação</Link></li>
                <li className="nav-item col-3"><Link href="/apidados">API</Link></li>
                <li className="nav-item dropdown col-3">
                  <a className="dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sobre</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Quem somos</a>
                    <a className="dropdown-item" href="#">Privacidade</a>
                    <a className="dropdown-item" href="#">Contato</a>
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbarmobile;
import React from 'react'
import styles from '../styles/IndexNew.module.css'

function Navbarmobile() {
  return (
    <>
      <nav class="navbar">
        <div className={styles.navbar}>
          <span class="navbar-brand mb-0 h1">IEB.app</span>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Doação</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">API</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sobre
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Quem Somos</a>
                <a class="dropdown-item" href="#">Contato</a>
                <a class="dropdown-item" href="#">Política de Privacidade</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbarmobile;
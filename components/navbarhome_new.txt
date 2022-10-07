import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Navbarhome() {
  return (
    <>
    <div class={styles.navbar}>
      <Link href="/"><a>IEB.app</a></Link>
      <Link href="/"><a>Inicio</a></Link>
      <Link href="/donation"><a>Doação</a></Link>
      <Link href="/apidados"><a>API</a></Link>
      <div class={styles.dropdown}>
        <button class={styles.dropbtn}>Sobre
        <i><FontAwesomeIcon icon={ faCaretDown} /></i>
        </button>
        <div class={styles.dropdowncontent}>
        <Link href="/contact"><a>Contato</a></Link>
        <Link href="/about"><a>Quem somos</a></Link>
        <Link href="/privacy"><a>Política de Privacidade</a></Link>
        </div>
      </div>
      <div class={styles.topnavright}>
        <SocialIcon url="https://twitter.com/SGomesDanilo" />
        <SocialIcon url="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/" />
        <SocialIcon url="https://github.com/dgomes91" />
      </div>
    </div>
    </>
  );
}

export default Navbarhome;
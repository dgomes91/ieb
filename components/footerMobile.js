import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footermobile.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
//import { Footer} from 'react-bootstrap'

function FooterMobile() {
  return (
    <>
      <footer className={styles.footer} id="footer">
        <Link href="#top"><FontAwesomeIcon icon={faChevronUp} /></Link>
        <Link href='/'>Inicio</Link>
        <Link href='/donation'>Doação</Link>
        <Link href='/apidados'>API</Link>
        <Link href='/about'>Quem Somos</Link>
        <Link href='privacy'>Política de Privacidade</Link>
        <Link href='/contact'>Contato</Link>
          <div className="col-3 mx-auto justify-content-center align-items-center">
            <Link href="https://twitter.com/SGomesDanilo"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link href="https://github.com/dgomes91"><FontAwesomeIcon icon={faGithub} /></Link>
            <Link href="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </div>
        <div className="mt-2 d-flex justify-content-center">
          <h6>Copyright @ 2022 <Link href='/index2'>ieb.app.br</Link> Todos os direitos reservados</h6>
          </div>
      </footer>
    </>
  )
}

export default FooterMobile


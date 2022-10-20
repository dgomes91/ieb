import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link'
import styles from '../styles/IndexNew.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function FooterMobile() {
  return (
    <>
      <div className={styles.footer}>
        <div className="d-flex justify-content-center"><a className={styles.a} href="#top"><FontAwesomeIcon icon={faChevronUp} /></a></div>
        <div className="mt-1 d-flex justify-content-center"><a className={styles.a} href='#'>Inicio</a></div>
        <div className="mt-1 d-flex justify-content-center"><a className={styles.a} href='/donation'>Doação</a></div>
        <div className="mt-1 d-flex justify-content-center"><a className={styles.a} href='/apidados'>API</a></div>
        <div className="mt-1 d-flex justify-content-center"><a className={styles.a} href='/about'>Quem Somos</a></div>
        <div className="mt-1 d-flex justify-content-center"><a className={styles.a} href='privacy'>Política de Privacidade</a></div>
        <div className="mt-1 d-flex justify-content-center"><a className={styles.a} href='/contact'>Contato</a></div>
        <div className="mt-1 d-flex justify-content-center">
          <div className="mt-1 col-3 justify-content-center align-items-center">
            <a className="mx-2" href="https://twitter.com/SGomesDanilo"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className="mx-2" href="https://github.com/dgomes91"><FontAwesomeIcon icon={faGithub} /></a>
            <a className="mx-2" href="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <div className={styles.copyright}><h6>Copyright @ 2022 <Link href='#'>ieb.app.br</Link> Todos os direitos reservados</h6></div>
          </div>
      </div>
    </>
  )
}

export default FooterMobile


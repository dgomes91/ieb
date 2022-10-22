import React from 'react'
import Link from 'next/link'
import styles from '../styles/IndexNew.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function FooterMobile() {
  return (
    <>
      <div className={styles.footer}>
        <div className="d-flex justify-content-center"><Link className={styles.a} href="#top"><FontAwesomeIcon icon={faChevronUp} /></Link></div>
        <div className="mt-1 d-flex justify-content-center"><Link className={styles.a} href='/'>Inicio</Link></div>
        <div className="mt-1 d-flex justify-content-center"><Link className={styles.a} href='/donation'>Doação</Link></div>
        <div className="mt-1 d-flex justify-content-center"><Link className={styles.a} href='/apidados'>API</Link></div>
        <div className="mt-1 d-flex justify-content-center"><Link className={styles.a} href='/about'>Quem Somos</Link></div>
        <div className="mt-1 d-flex justify-content-center"><Link className={styles.a} href='privacy'>Política de Privacidade</Link></div>
        <div className="mt-1 d-flex justify-content-center"><Link className={styles.a} href='/contact'>Contato</Link></div>
        <div className="mt-1 d-flex justify-content-center">
          <div className="mt-1 col-3 justify-content-center align-items-center">
            <Link className="mx-2" href="https://twitter.com/SGomesDanilo"><FontAwesomeIcon icon={faTwitter} /></Link>
            <Link className="mx-2" href="https://github.com/dgomes91"><FontAwesomeIcon icon={faGithub} /></Link>
            <Link className="mx-2" href="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/"><FontAwesomeIcon icon={faLinkedin} /></Link>
            </div>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <div className={styles.copyright}><h6>Copyright @ 2022 <Link href='/index2'>ieb.app.br</Link> Todos os direitos reservados</h6></div>
          </div>
      </div>
    </>
  )
}

export default FooterMobile


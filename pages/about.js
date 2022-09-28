import React from 'react'
import Navbarhome from '../components/navbarhome'
import Footerhome from '../components/footerhome'
import Headhome from '../components/headhome'
import { ThemeProvider, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import imgAuthor from '../public/profile-pic3.png'
import imgFramework from '../public/nextjs-bootstrap.webp'

function about() {
  return (
    <>
      <Headhome />
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs" >
        <div className={styles.body}>
          <Navbarhome />
          <div className="container d-block">
            <div className="row">
              <div className="col-12 col-md">
                <div className={styles.heroContent}>
                  <h2 className={styles.h1}>Bem vindo ao meu projeto</h2>
                  <h3 className={styles.h2}>Olá, meu nome é <a className={styles.a} href='https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/'>Danilo Gomes</a>!</h3>
                  <p className={styles.p}>Sou o criador do projeto <a className={styles.a} href='https://ieb.app.br/'>ieb.app.br</a>, que tem o duplo propósito de compilar em um só lugar os principais indicadores econômicos do Brasil de forma simples e compreensível, e desenvolver as minhas habilidades em programação</p>
                </div>
              </div>
              <div className="col-12 col-md">
                <div className={styles.center}>
                  <Image
                    priority
                    src={imgAuthor}
                    alt="Foto de rosto do autor do site"
                  />
                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md">
                <h3 className={styles.h2}>Framework</h3>
                <p className={styles.p}>A potência do framework Next.js e a versatilidade do bootstrap, uma estrutura construída na estrutura javascript mais popular e na estrutura CSS mais popular, combinadas para criar um site responsivo e escalável.</p>
              </div>
              <div className="col-12 col-md">
                <div className={styles.center}>
                  <Image
                  priority
                  src={imgFramework}
                  alt="Logo da lingaguem de programação next JS e bootstrap "
                  />
                </div>
              </div>
            </div>
          </div>
          <Footerhome />
        </div>
      </ThemeProvider>

    </>
  )
}

export default about
import React from 'react'
import Navbarhome from '../components/navbarhome'
import Footerhome from '../components/footerhome'
import Headhome from '../components/headhome'
import { ThemeProvider, Row, Container } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

function apidados() {
  return (
    <>
      <Headhome />
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs" >
        <div className={styles.body}>
          <Navbarhome />
          <div className={styles.title}>
            <h1 className={styles.h1}>API</h1>
            <p className={styles.p}> Fornecimento da API utilizada para alimentar este site</p>
          </div>
          <div>
            <h3>Conteudo</h3>
          </div>
          <Footerhome />
        </div>
      </ThemeProvider>

    </>
  )
}

export default apidados
import React from 'react'
import Navbarhome from '../components/navbarhome'
import Footerhome from '../components/footerhome'
import Headhome from '../components/headhome'
import { ThemeProvider, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'

function donation() {
  return (
    <>
      <Headhome />
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs" >
        <div className={styles.body}>
          <Navbarhome />
          <div className={styles.title}>
            <h1 className={styles.h1}>Doação</h1>
            <p className={styles.p}> Em construção</p>
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

export default donation
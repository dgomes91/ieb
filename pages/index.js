import React from 'react'
import dados from './api/dados'
import Navbarhome from '../components/navbarhome'
import Head from 'next/head'
import { ThemeProvider, Row, Container } from 'react-bootstrap'
import CardPrincipal from '../components/CardPrincipal'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'

export async function getStaticProps (){
    const staticDatastring = await dados()
    console.log('carregando dados para home')
    //console.log(staticDatastring)
    return {
        props: staticDatastring
    }
}

const Home = (props) => {
    //const data = props.dados
    console.log("carregando a página")
    const staticRetorno = props.props
    //console.log(staticRetorno)
  return (
    <>
    <Head />
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs">
        <div className={styles.body}>
            <Navbarhome />  
            <div className={styles.title}>
                <h1 className={styles.h1}>Indicadores Economicos do Brasil</h1>
                <p className={styles.p}>Principais indicadores brasileiros atualizados <b>SEMPRE!</b></p>
            </div>
            <div>
            <Container>
                <Row>
                    {staticRetorno.map((dado =>(
                        <CardPrincipal dado={dado} key={dado.id} />
                        )))}
                </Row>
            </Container>
            </div>
        </div>
        </ThemeProvider>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossOrigin="anonymous"
        />
    </>
  )
}

export default Home
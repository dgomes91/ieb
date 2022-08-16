import React from 'react'
import dados from './api/dados'
import Navbarhome from '../components/navbarhome'
import Head from 'next/head'
import { Card, Col, ThemeProvider, Row } from 'react-bootstrap'
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
        <Head></Head>
        <div className={styles.body}>
            <Navbarhome />  
            <div>
                <h1 className={styles.h1}>Indicadores Economicos do Brasil</h1>
                <p className={styles.p}>Principais indicadores brasileiros atualizados <b>SEMPRE!</b></p>
            </div>
            <div>
                <Row>
                    {staticRetorno.map((dado =>(
                            <Card key={dado.id}>
                                <Card.Body>
                                    <Card.Title>{dado.name}:</Card.Title>
                                    <Card.Subtitle>{dado.value}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                    )))}
                </Row>
            </div>
        </div>
    </>
  )
}

export default Home
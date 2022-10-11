import React from 'react'
//import dados from './api/dados'
import dados from './api/apisheetdb'
import Navbarhome from '../components/navbarhome'
import Footerhome from '../components/footerhome'
import Headhome from '../components/headhome'
import { ThemeProvider, Row, Container } from 'react-bootstrap'
import CardPrincipal from '../components/CardPrincipal'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
    const staticDatastring = await dados()
    console.log('carregando dados para home')
    return {
        props: staticDatastring, revalidate: 30}
}

const Home = (props) => {
    console.log("carregando a página")
    const staticRetorno = props.props
    return (
        <>
            <Headhome />
            <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
                <div className={styles.body}>
                    <Navbarhome />
                    <div className={styles.title}>
                        <h1 className={styles.h1}>Indicadores Economicos do Brasil</h1>
                        <h2 className={styles.h2}>Principais indicadores brasileiros atualizados <b>SEMPRE!</b></h2>
                    </div>
                    <div>
                        <Container>
                            <Row>
                                {staticRetorno.map((dado => (
                                    <CardPrincipal dado={dado} key={dado.id} />
                                )))}
                            </Row>
                        </Container>
                    </div>
                    <Footerhome />
                </div>
            </ThemeProvider>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous" />
        </>
    )
}

export default Home
import React from 'react'
import dados from './api/dados'
import Navbarhome from '../components/navbarhome'
import Footerhome from '../components/footerhome'
import Headhome from '../components/headhome'
import { ThemeProvider, Row, Container } from 'react-bootstrap'
import CardPrincipal from '../components/CardPrincipal'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export async function getStaticProps() {
    const staticDatastring = await dados()
    console.log('carregando dados para home')
    //console.log(staticDatastring)
    return {
        props: staticDatastring, revalidate: 30}
}

const Home = (props) => {
    //const data = props.dados
    console.log("carregando a página")
    const staticRetorno = props.props
    const gaid = process.env.GA_MEASUREMENT_ID
    //console.log(staticRetorno)
    return (
        <>
            <Headhome />
                <div className="container">
                    <Script
                        src="https://www.googletagmanager.com/gtag/js?id=${gaid}"
                        strategy="afterInteractive" />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${gaid}');
                            `}
                    </Script>
                </div>
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
                </ThemeProvider><link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous" />
        </>
    )
}

export default Home
import React from 'react'
import dados from './api/apisheetdb'
import Headhome from '../components/headhome'
import Navbarmobile from '../components/navbarmobile'
import FooterMobile from '../components/footerMobile'
import { ThemeProvider, Row, Container } from 'react-bootstrap'
import CardPrincipalNew from '../components/CardPrincipalNew'
import styles from '../styles/IndexNew.module.css'

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
                <Navbarmobile />
                <div className={styles.container}>
                    <Container>
                        <Row>
                            {staticRetorno.map((dado => (
                                <CardPrincipalNew dado={dado} key={dado.id} />
                            )))}
                        </Row>
                    </Container>
                </div>
                <FooterMobile/>
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
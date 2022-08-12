import React from 'react'
import dados from './api/dados'
import Navbarhome from '../components/Navbarhome'
import Head from 'next/head'
import { ThemeProvider } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export async function getStaticProps (){
    const staticDatastring = await dados()
    console.log('carregando dados para home')
    //console.log(staticDatastring)
    return {
        props: staticDatastring
    }
}

const home = (props) => {
    //const data = props.dados
    console.log("carregando a página")
    const staticRetorno = props.props
    //console.log(staticRetorno)
  return (
    <>
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}  minBreakpoint="xxs">
        <Head></Head>
        <div>
            <Navbarhome />  
            <div>
                <h1>Indicadores Economicos do Brasil</h1>
                <h2>Principais indicadores brasileiros atualizados SEMPRE!</h2>
            </div>
            <div>
                <ul>
                    {staticRetorno.map((dado =>(
                    <li key={dado.id}>{dado.name}: {dado.value}</li>)))}
                </ul>
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

export default home
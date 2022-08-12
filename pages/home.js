import React from 'react'
import dados from './api/dados'

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
    console.log(staticRetorno)
  return (
    <div>
        <nav>
            <div>
                <a>Home</a>
                <a>About</a>
                <a>Donation</a>
            </div>
        </nav>
        <div>
            <h1>Indicadores Economicos do Brasil</h1>
            <h4>Principais indicadores brasileiros atualizados SEMPRE!</h4>
        </div>
        <div>
            <ul>
                {staticRetorno.map((dado =>(<li key={dado.id}>{dado.name}: {dado.value}</li>)))}
            </ul>
        </div>
    </div>
  )
}

export default home
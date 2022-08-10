//'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'

export async function getStaticProps (){
    const res = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    const data = await res.json()
    const dolarReal = data.USDBRL
    console.log(dolarRel.bid)
    return {
        props: {
            dolarReal,
        }
    }
}

export default function moedas(req, res, dolarReal){
    res.status(200).json({
        dolar: dolarReal
    })
}
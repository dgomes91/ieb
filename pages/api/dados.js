export async function getStaticProps (){
    const res = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    const data = await res.json()
    var dolarReal = data.USDBRL
    var dolarReal = dolarReal.bid
    var euroReal = data.EURBRL
    var euroReal = euroReal.bid
    var btcReal = data.BTCBRL
    var btcReal = btcReal.bid
    console.log('carregando dados awesomeapi.com.br')
    return {
            dolarReal, euroReal, btcReal, revalidate: 30
    }
}
export default async function dados(req, res ) {
    const dynamicDate = new Date();
    const data = await getStaticProps()
    const dolar = data.dolarReal
    const bitcoin = data.btcReal
    const euro = data.euroReal
    console.log("construindo api dados")
    const staticDados = [
        { id:"1",
        name: "CDI",
        value:"13,15%",
        link:"https://ieb.app.br/   "},
        {id: "2",
        name: "IPCA Mensal",
        value: "-0,68%",
        link: "https://www.ibge.gov.br/explica/inflacao.php"},
        {id: "3",
        name: "IPCA Ano",
        value: "10,07%",
        link: "https://www.ibge.gov.br/explica/inflacao.php"},
        {id: "4",
        name: "INPC Mensal",
        value: "-0,60%",
        link: "https://www.ibge.gov.br/explica/inflacao.php"},
        {id: "5",
        name: "IGP-M",
        value: "7,63%",
        link:"https://portalibre.fgv.br/sites/default/files/2022-08/igp-m_fgv_press-release-resumido_ago22_0.pdf"},
        {id: "6",
        name: "PIB Acumulado",
        value: "R$ 8,7 trimestral",
        link:"https://www.ibge.gov.br/explica/pib.php"},
        {id: "7",
        name:"PIB Trimestral",
        value: "R$ 2,4 tri",
        link:"https://www.ibge.gov.br/explica/pib.php"},
        {id: "8",
        name: "PIB per Capita",
        value: "R$ 35.161,70",
        link:"https://www.ibge.gov.br/explica/pib.php"},
        {id: "9",
        name: "TR",
        value: "0,1805",
        link:"https://www.debit.com.br/tabelas/tabela-completa.php?indice=tr"},
        {id: "10",
        name: "IBOVESPA",
        value: "106.471.92",
        link:"https://www.google.com/finance/quote/IBOV:INDEXBVMF"},
        {id: "11",
        name: "Dolar",
        value: "R$ "+dolar,
        link:"https://www.google.com/finance/quote/USD-BRL"},
        {id: "12",
        name: "Bitcoin",
        value: "R$ "+bitcoin,
        link:"https://www.google.com/finance/quote/BTC-BRL"},
        {id: "13",
        name: "Euro",
        value: "R$ "+euro,
        link:"https://www.google.com/finance/quote/EUR-BRL"},
        {id: "14",
        name:"Salário Mínimo",
        value: "R$ 1.212",
        link:"https://ieb.app.br/"},
        {id:"15",
        name: "Atualizado em",
        value: dynamicDate.toLocaleDateString("pt-BR")+" "+dynamicDate.toLocaleTimeString("pt-BR"),
        link:"https://ieb.app.br/"},
    ]
    return {
        props: staticDados, revalidate: 30};
}
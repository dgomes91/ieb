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
            dolarReal, euroReal, btcReal
    }
}
export default async function dados(request, response ) {
    const dynamicDate = new Date();
    const data = await getStaticProps()
    const dolar = data.dolarReal
    const bitcoin = data.btcReal
    const euro = data.euroReal
    console.log("construindo api dados")
    const staticDados = [
        { id:"1",
        name: "CDI",
        value:"13,15%"},
        {id: "2",
        name: "IPCA Mensal",
        value: "0,67% ultimo mês"},
        {id: "3",
        name: "IPCA Ano",
        value: "11,89% acumulado 12 meses"},
        {id: "4",
        name: "INPC Mensal",
        value: "0,62% ultimo mês"},
        {id: "5",
        name: "IGP-M",
        value: "1,4%"},
        {id: "6",
        name: "PIB Acumulado",
        value: "R$ 8,7 tri ano"},
        {id: "7",
        name:"PIB Trimestral",
        value: "R$ 2,2 tri"},
        {id: "8",
        name: "PIB per Capita",
        value: "R$ 35.161,70"},
        {id: "9",
        name: "TR",
        value: "0,2409"},
        {id: "10",
        name: "IBOVESPA",
        value: "106.471.92"},
        {id: "11",
        name: "Dolar",
        value: "R$ "+dolar},
        {id: "12",
        name: "Bitcoin",
        value: "R$ "+bitcoin},
        {id: "13",
        name: "Euro",
        value: "R$ "+euro},
        {id: "14",
        name:"Salário Mínimo",
        value: "R$ 1.212"},
        {id:"15",
        name: "Atualizado em",
        value: dynamicDate.toGMTString()},
    ]
    return {
        props: staticDados, revalidate: 30};
}
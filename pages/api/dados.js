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
        {id:"1",
        name: "Atualizado em",
        value: dynamicDate.toGMTString()},
        { id:"2",
        name: "CDI",
        value:"13,15%"},
        {id: "3",
        name: "IPCA Mensal",
        value: "0,67% ultimo mês"},
        {id: "4",
        name: "IPCA Ano",
        value: "11,89% acumulado 12 meses"},
        {id: "5",
        name: "INPC Mensal",
        value: "0,62% ultimo mês"},
        {id: "6",
        name: "IGP-M",
        value: "1,4%"},
        {id: "7",
        name: "PIB Acumulado",
        value: "R$ 8,7 tri ano"},
        {id: "8",
        name:"PIB Trimestral",
        value: "R$ 2,2 tri"},
        {id: "9",
        name: "PIB per Capita",
        value: "R$ 35.161,70"},
        {id: "10",
        name: "TR",
        value: "0,2409"},
        {id: "11",
        name: "IBOVESPA",
        value: "106.471.92"},
        {id: "12",
        name: "Dolar",
        value: "R$ "+dolar},
        {id: "13",
        name: "Bitcoin",
        value: "R$ "+bitcoin},
        {id: "14",
        name: "Euro",
        value: "R$ "+euro},
        {id: "15",
        name:"Salário Mínimo",
        value: "R$ 1.212"},
    ]
    return {
        props:
         staticDados};
}
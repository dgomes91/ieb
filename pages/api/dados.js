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
        name: "date",
        value: dynamicDate.toGMTString()},
        { id:"2",
        name: "cdi",
        value:"13,15%"},
        {id: "3",
        name: "ipcaMes",
        value: "0,67% ultimo mês"},
        {id: "4",
        name: "ipcaAno",
        value: "11,89% acumulado 12 meses"},
        {id: "5",
        name: "inpcMes",
        value: "0,62% ultimo mês"},
        {id: "6",
        name: "igpm",
        value: "1,4%"},
        {id: "7",
        name: "pibAno",
        value: "R$ 8,7 tri ano"},
        {id: "8",
        name:"pibTri",
        value: "R$ 2,2 tri Trimestre"},
        {id: "9",
        name: "pibPCap",
        value: "R$ 35.161,70 per Capita 2019"},
        {id: "10",
        name: "tr",
        value: "0,2409"},
        {id: "11",
        name: "ibovespa",
        value: "106.471.92"},
        {id: "12",
        name: "dolar",
        value: "R$ "+dolar},
        {id: "13",
        name: "bitcoin",
        value: "R$ "+bitcoin},
        {id: "14",
        name: "euro",
        value: "R$ "+euro},
        {id: "15",
        name:"salarioMinimo",
        value: "R$ 1.212"},
    ]
    return {
        props:
         staticDados};
}

import axios from 'axios'

export async function getStaticProps () {
  const dynamicDate = new Date();
  const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
  const datas = await response.json()
  var dolarReal = datas.USDBRL
  var dolarReal = dolarReal.bid
  var euroReal = datas.EURBRL
  var euroReal = euroReal.bid
  var btcReal = datas.BTCBRL
  var btcReal = btcReal.bid
  const apiAdress = process.env.SHEET_DB_ADRESS
  const res = await axios.get(apiAdress)
  const apidata = res.data
  const moedas = [
    {id: "12",
    name: "Dolar",
    actualValue: "R$ "+dolarReal,
    sourceLink:"https://www.google.com/finance/quote/USD-BRL"},
    {id: "13",
    name: "Bitcoin",
    actualValue: "R$ "+btcReal,
    sourceLink:"https://www.google.com/finance/quote/BTC-BRL"},
    {id: "14",
    name: "Euro",
    actualValue: "R$ "+euroReal,
    sourceLink:"https://www.google.com/finance/quote/EUR-BRL"},
    {id:"15",
    name: "Atualizado em",
    actualValue: dynamicDate.toLocaleDateString("pt-BR")+" "+dynamicDate.toLocaleTimeString("pt-BR"),
    sourceLink:"https://ieb.app.br/"},
  ]
  const dadosconsolidados = apidata.concat(moedas)
  return{
    dadosconsolidados
  }
}
export default async function dados(req, res){
  const datasheet = await getStaticProps()
  //const dados = datasheet.dadosconsolidados
  return{props: datasheet.dadosconsolidados, revalidate: 30}
}
/*
export async function apisheetdb (req, res) {
  const datasheet = await getStaticProps()
  const dados = datasheet.dadosconsolidados
  console.log("carregando StaticProps")
  //console.log(dados)
  res.status(200).json({dados})
}*/


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
  var data = res.data
  console.log('carregou a api final')
  /*const staticDados = [
    {id: "11",
    name: "Dolar",
    value: "R$ "+dolarReal,
    link:"https://www.google.com/finance/quote/USD-BRL"},
    {id: "12",
    name: "Bitcoin",
    value: "R$ "+btcReal,
    link:"https://www.google.com/finance/quote/BTC-BRL"},
    {id: "13",
    name: "Euro",
    value: "R$ "+euroReal,
    link:"https://www.google.com/finance/quote/EUR-BRL"},
    {id:"15",
    name: "Atualizado em",
    value: dynamicDate.toLocaleDateString("pt-BR")+" "+dynamicDate.toLocaleTimeString("pt-BR"),
    link:"https://ieb.app.br/"}
  ]*/
  //var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
  var obj = json.parse(data);
  obj['data'].push(
    {id: "11",
    name: "Dolar",
    value: "R$ "+dolarReal,
    link:"https://www.google.com/finance/quote/USD-BRL"},
    {id: "12",
    name: "Bitcoin",
    value: "R$ "+btcReal,
    link:"https://www.google.com/finance/quote/BTC-BRL"},
    {id: "13",
    name: "Euro",
    value: "R$ "+euroReal,
    link:"https://www.google.com/finance/quote/EUR-BRL"},
    {id:"15",
    name: "Atualizado em",
    value: dynamicDate.toLocaleDateString("pt-BR")+" "+dynamicDate.toLocaleTimeString("pt-BR"),
    link:"https://ieb.app.br/"}
    );
  var data = json.stringify(obj);
  //const dadosConsolidado = [data, staticDados]

  return{data, revalidate: 30
  };
}

export default async function apisheetdb (req, res) {
  const datasheet = await getStaticProps()
  const dados = datasheet.data
  console.log("carregando StaticProps")
  //console.log(dados)
  res.status(200).json({dados})
}

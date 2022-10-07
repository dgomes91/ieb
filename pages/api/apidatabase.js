import dados from './dados'

export default async function handler(req, res) {
  try {
    const result = await dados()
    console.log('carregou a api final')
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
    console.log('não carrega nada')
  }
}

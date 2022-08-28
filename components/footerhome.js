import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/Link'

function Footerhome() {
  return (
    <>
      <footer className="bg-light text-center ">
        <div className="container p-4">
          <section className="mb-4">
            <SocialIcon url="https://twitter.com/SGomesDanilo" style={{ height: 25, width: 25, margin: 2 }}/>
            <SocialIcon url="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/" style={{ height: 25, width: 25, margin: 2 }}/>
            <SocialIcon url="https://github.com/dgomes91" style={{ height: 25, width: 25, margin: 2 }}/>
          </section>
          <section className="mb-4">
            <p>
              Um conjunto de métricas que ajudam você a tomar decisões informadas.
              Estamos construindo um dashboard para acompanhar os principais indicadores da economia brasileira.
              Monitoramos a inflação, as taxas de câmbio e as taxas de produção nacional para ajudar a mantê-lo atualizado sobre o que está acontecendo no Brasil.
            </p>
          </section>
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Página Inicial</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/" className="text-dark"><a>Home</a></Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Doação</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/donation" className="text-dark"><a>Doação</a></Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">API</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/apidados" className="text-dark"><a>Dados utilizados</a></Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Sobre</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/about" className="text-dark"><a>Quem somos</a></Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-dark"><a>Política de Privacidade</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}

export default Footerhome


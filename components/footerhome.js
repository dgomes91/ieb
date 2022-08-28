import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Footerhome() {
  return (
    <>
      <footer class="bg-light text-center ">
        <div class="container p-4">
          <section class="mb-4">
            <SocialIcon url="https://twitter.com/SGomesDanilo" style={{ height: 25, width: 25, margin: 2 }}/>
            <SocialIcon url="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/" style={{ height: 25, width: 25, margin: 2 }}/>
            <SocialIcon url="https://github.com/dgomes91" style={{ height: 25, width: 25, margin: 2 }}/>
          </section>
          <section class="mb-4">
            <p>
              Um conjunto de métricas que ajudam você a tomar decisões informadas.
              Estamos construindo um dashboard para acompanhar os principais indicadores da economia brasileira.
              Monitoramos a inflação, as taxas de câmbio e as taxas de produção nacional para ajudar a mantê-lo atualizado sobre o que está acontecendo no Brasil.
            </p>
          </section>
          <section class="">
            <div class="row">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Página Inicial</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/" class="text-dark">Home</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Doação</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/donation" class="text-dark">Doação</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">API</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/apidados" class="text-dark">Dados utilizados</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Sobre</h5>
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="/about" class="text-dark">Quem somos</a>
                  </li>
                  <li>
                    <a href="/privacy" class="text-dark">Política de Privacidade</a>
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


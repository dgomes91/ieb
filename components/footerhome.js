import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'
import { Row, Container,Col } from 'react-bootstrap'

function Footerhome() {
  return (
    <>
      <footer className="bg-light">
        <Container className="pt-4 pb-4 px-0 align-baseline">
          <Row>
            <Col>
              <h4 className="text-left font-weight-bold">Sobre Nós</h4>
              <p>
                Um conjunto de métricas que ajudam você a tomar decisões informadas.<br />
                Estamos construindo um dashboard para acompanhar os principais indicadores da economia brasileira.<br />
              </p>
            </Col>
            <Col>
              <Row>
              <h4 className="text-left font-weight-bold">Redes Sociais</h4>
              <div className="px-3">
                <SocialIcon url="https://twitter.com/SGomesDanilo" style={{ height: 25, width: 25, margin: 2 }}/>
                <SocialIcon url="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/" style={{ height: 25, width: 25, margin: 2 }}/>
                <SocialIcon url="https://github.com/dgomes91" style={{ height: 25, width: 25, margin: 2 }}/>
              </div>
              </Row>
            </Col>
            <Col>
              <h4 className="text-left font-weight-bold">Newsletter</h4>
              <label htmlFor="exampleFormControlInput1" className="form-label">Assine a nossa newsletter</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="joao.neves@exemplo.com.br" name="Email" required />
              <input type="hidden" name="_autoresponse" value="Agradecemos pelo seu contato! <br />
                Em breve vamos ler sua mensagem e entraremos em contato se for necessário. <br />
                Obrigado pelo suporte"></input>
              <input type="hidden" name="_next" value="https://ieb.app.br/"></input>
              <input type="hidden" name="_template" value="basic"></input>
              <button type="submit" className="mt-3 btn btn-sm btn-dark btn-block mb-3 ">Enviar</button>
            </Col>
          </Row>
        </Container>
        <hr />
          <div className="container"><h6>Copyright @ 2022 <Link href='https://ieb.app.br/'>ieb.app.br</Link> Todos os direitos reservados</h6></div>
      </footer>
    </>
  )
}

export default Footerhome


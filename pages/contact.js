import React from 'react'
import Navbarhome from '../components/navbarhome'
import Footerhome from '../components/footerhome'
import Headhome from '../components/headhome'
import { ThemeProvider, Row, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'

function contact() {
    const apiSecret = process.env.FORMSUBMIT_API_SECRET_LOCAL;
    const formsubmit = "https://formsubmit.co/${apiSecret}";
    return (
        <>
            <Headhome />
            <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs" >
                <div className={styles.body}>
                    <Navbarhome />
                    <div className={styles.title}>
                        <h1 className={styles.h1}>Contato</h1>
                        <h2 className={styles.p}> Queremos saber a sua opinião</h2>
                    </div>
                    <div className="container">
                        <h3>Mande sua mensagem para nós!</h3>
                        <h4>Você pode utilizar o formulário a seguir ou enviar um email para <a href="contato@ieb.app.br">contato@ieb.app.br</a>.</h4>
                        <h5>Os campos marcados com <span>&#10035;</span> são <b>obrigatorios</b>.</h5>
                        <div className="container-fluid">
                            <form action={formsubmit} method="POST" target="_blank">
                                <div className="form-group">
                                    <div className="form-row">
                                        <div className="row align-items-start row-cols-1 row-cols-sm-1 row-cols-md-3">
                                            <div className="mb-3 col">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Seu nome: <span>&#10035;</span></label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="João das Neves" name="Name" required />
                                            </div>
                                            <div className="mb-3 col">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Seu email: <span>&#10035;</span></label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="joao.neves@exemplo.com.br" name="Email" required />
                                            </div>
                                            <div className="mb-3 col">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Assunto: <span>&#10035;</span></label>
                                                <select className="form-select" aria-label="Selecione o motivo" id="assunto" name="Assunto" required>
                                                    <option selected>Selecine o motivo desejado</option>
                                                    <option>Elogios</option>
                                                    <option>Reclamações</option>
                                                    <option>Proposta Comercial</option>
                                                    <option>Outros</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row align-items-start">
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Sua Mensagem: <span>&#10035;</span></label>
                                                <textarea className="form-control" id="form-message" placeholder="Escreve sua mensagem para nós" name="Mensagem" rows="3" required></textarea>
                                            </div>
                                            <input type="hidden" name="_autoresponse" value="Agradecemos pelo seu contato!
                                                Em breve vamos ler sua mensagem e entraremos em contato se for necessário.
                                                Obrigado pelo suporte"></input>
                                            <input type="hidden" name="_next" value="https://ieb.app.br/"></input>
                                            <input type="hidden" name="_template" value="basic"></input>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-dark btn-block mb-3 ">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footerhome />
            </ThemeProvider >

        </>
    )
}

export default contact
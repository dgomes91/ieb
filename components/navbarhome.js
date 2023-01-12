import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import React from 'react'
import styles from '../styles/Navbarhome.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';


function Navbarhome() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className={styles.navbar} bsPrefix="navbar">
          <Container>
            <Navbar.Brand className={styles.navbarbrand} bsPrefix="navbarbrand" href="/">IEB.app</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  IEB
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" flex-grow-1 pe-3 align-items-center">
                  <Nav.Link href="/">Início</Nav.Link>
                  <Nav.Link href="/donation">Doação</Nav.Link>
                  <Nav.Link href="/apidados">API</Nav.Link>
                  <NavDropdown
                    title="Sobre"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item className="text-dark" href="/about">Quem somos</NavDropdown.Item>
                    <NavDropdown.Item className="text-dark" href="/privacy">Política de Privacidade</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-dark" href="/contact">Contato</NavDropdown.Item>
                  </NavDropdown>
                  <Link href="https://twitter.com/SGomesDanilo"><FontAwesomeIcon className="align-middle px-1" icon={faTwitter} /></Link>
                  <Link href="https://github.com/dgomes91"><FontAwesomeIcon className="align-middle px-1" icon={faGithub} /></Link>
                  <Link href="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/"><FontAwesomeIcon className="align-middle px-1" icon={faLinkedin} /></Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarhome;
import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

function Navbarhome() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/home">IEB</Navbar.Brand>
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
                <Nav className="justify-content flex-grow-1 pe-3 align-items-center">
                  <Nav.Link href="/">Início</Nav.Link>
                  <Nav.Link href="/donation">Doação</Nav.Link>
                  <NavDropdown
                    title="Sobre"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/whoweare">Quem somos</NavDropdown.Item>
                    <NavDropdown.Item href="/privacyPolicy">
                      Política de Privacidade
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/contact">
                      Contato
                    </NavDropdown.Item>
                  </NavDropdown>
                  <SocialIcon url="https://www.linkedin.com/in/danilo-silva-gomes-76a39a38/" style={{ height: 25, width: 25 }}/>
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
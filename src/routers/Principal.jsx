import React, { useState } from 'react';
import './principal.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BrowserRouter as router, Switch, Route,Link, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

export  default function Prinicipal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Universitaria</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-end flex-grow-1 pe-3"
            navbarScroll
        >
            <NavDropdown title="Institucional" id="basic-nav-dropdown">
                     <NavDropdown.Item href="nosotros">Nosotros</NavDropdown.Item>
                     <NavDropdown.Item href="directiva">Directiva</NavDropdown.Item>
                     <NavDropdown.Item href="memoria">Memorias y Balances</NavDropdown.Item>
                     <NavDropdown.Item href="estatuto">Estatuto Social y Reglamentos Electoral</NavDropdown.Item>
                     <NavDropdown.Item href="prevencion">Prevencion de Lavado de Dinero</NavDropdown.Item>
                     <NavDropdown.Item href="calificacion">Calificacion de Riesgos</NavDropdown.Item>
                     <NavDropdown.Item href="licitacion">Licitacion</NavDropdown.Item>
                   </NavDropdown>
                   <NavDropdown title="Servicios" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Creditos</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Tarjetas</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Ahorros</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.4">Solidaria</NavDropdown.Item>
                   </NavDropdown>
                   <NavDropdown title="Simuladores" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Simulador de creditos</NavDropdown.Item>
                   </NavDropdown>
                   <Nav.Link href="#home">Promociones</Nav.Link>
                   <Nav.Link href="#link">App Universitaria</Nav.Link>
                   <Nav.Link href="#link">Asociate</Nav.Link>
                 </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section className='container-section'>
      <Carousel>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1370433251/es/foto/mujer-negra-sentada-en-el-escritorio-usando-la-escritura-de-la-computadora-en-el-cuaderno.jpg?s=2048x2048&w=is&k=20&c=1hOAI6JZbPI_rBfGjMssUyysVk3owbSlm5zE2noV7AI="
              alt="First slide"
          />
        <Carousel.Caption>
        <Button variant="primary" onClick={handleShow}> Click aqui  </Button>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
        <Modal.Header closeButton>
          <Modal.Title>Credito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le mostraremos todas las informaciones que necesita!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Click Aqui</Button>
        </Modal.Footer>
      </Modal>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1349249677/es/foto/diversi%C3%B3n-familiar.jpg?s=2048x2048&w=is&k=20&c=MHazBQ28ulQXLB2yIgzp2Hj89Yfh_HQzddZ3DTTrMtQ="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>
              Impulsa cada momento de tu vida
          </h1>
          <Button variant="primary" onClick={handleShow}> Click Aqui</Button>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
        <Modal.Header closeButton>
          <Modal.Title>Credito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le mostraremos todas las informaciones que necesita!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Seguir</Button>
        </Modal.Footer>
      </Modal>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-c%C3%A1mara-j%C3%B3venes-que-se.jpg?s=2048x2048&w=is&k=20&c=6fK9weI3nC9tJkLpqknU5d2g3Nz4FhuyXYamxuPC0-o="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Impulsa cada paso en tu vida</h1>
        <Button variant="primary" onClick={handleShow}> Click aqui</Button>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
        <Modal.Header closeButton>
          <Modal.Title>Credito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le mostraremos todas las informaciones que necesita!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Seguir</Button>
        </Modal.Footer>
      </Modal>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
  <section className='container-servicios'>
    <div className="container-servicios-titulo">
      <h2>Nuestros Servicios</h2>
    </div>
   <div className='iteam'>
    <a href="https://www.universitaria.coop/creditos" className='container-creditos'>
      <div className='servicio-icono'>
      </div>
        <div className='servicios-imagen'>
            <img src="https://www.universitaria.coop/assets_front/img/credito.jpg" loading="lazy" alt="servicio" />
        </div>
        <div className='servicios-text'>
          <h3 className='title-servicios'> Creditos</h3>
          <p className='mas'>
            Ver mas
            < i className='util'>
            </i>
          </p>
        </div>
      </a>
   </div>
   <div className='iteam'>
    <a href="https://www.universitaria.coop/creditos" className='container-creditos'>
      <div className='servicio-icono'>
      </div>
        <div className='servicios-imagen'>
            <img src="https://www.universitaria.coop/assets_front/img/ahorro.jpg" loading="lazy" alt="servicio" />
        </div>
        <div className='servicios-text'>
          <h3 className='title-servicios'> Ahorros</h3>
          <p className='mas'>
            Ver mas
            < i className='util'>
            </i>
          </p>
        </div>
      </a>
   </div>
   <div className='iteam'>
    <a href="https://www.universitaria.coop/creditos" className='container-creditos'>
      <div className='servicio-icono'>
      </div>
        <div className='servicios-imagen'>
            <img src="https://www.universitaria.coop/assets_front/img/pexels-mikhail-nilov-6969654.jpg" loading="lazy" alt="servicio" />
        </div>
        <div className='servicios-text'>
          <h3 className='title-servicios'> Tarjetas</h3>
          <p className='mas'>
            Ver mas
            < i className='util'>
            </i>
          </p>
        </div>
      </a>
   </div>
   <div className='iteam'>
    <a href="https://www.universitaria.coop/creditos" className='container-creditos'>
      <div className='servicio-icono'>
      </div>
        <div className='servicios-imagen'>
            <img src="https://www.universitaria.coop/assets_front/img/asociate.jpg" loading="lazy" alt="servicio" />
        </div>
        <div className='servicios-text'>
          <h3 className='title-servicios'> Promocion</h3>
          <p className='mas'>
            Ver mas
            < i className='util'>
            </i>
          </p>
        </div>
      </a>
   </div>
   <div className='iteam'>
    <a href="https://www.universitaria.coop/creditos" className='container-creditos'>
      <div className='servicio-icono'>
      </div>
        <div className='servicios-imagen'>
            <img src="https://www.universitaria.coop/assets_front/img/prestamos.jpg" loading="lazy" alt="servicio" />
        </div>
        <div className='servicios-text'>
          <h3 className='title-servicios'> Asociate</h3>
          <p className='mas'>
            Ver mas
            < i className='util'>
            </i>
          </p>
        </div>
      </a>
   </div>
   
   </section>
   <section className='container-socios'>
    <div className="container-servicios-text">
      <h3>Por que te conviene ser socio de UNIVERSITARIA?</h3>
      <p>Podes acceder a innumerables beneficios.
        Como cooperativa, nuesro objetivo prinicipal es acompanar a nuestros socios en cada estapa en su vida.
      </p>
      <p>Diseamos productos financieron como creditos,ahorros y traetas de credito, 
        que te haran cumplir objetivos personales y profesionales.
      </p>

      <p>Basados en nuestros princippios y valores cooperativos tambien nos enfocamos en brindar servicios de solidaridad
        y desarrollar actividadessociales, culturales y educativasa
        que fomentar el bienestar socio economicoy de los sociosy la comunidad.
      </p>
      <Button variant="primary">Leer mas</Button>
      <Button variant="primary">Requisitos</Button>
    </div>
  </section>
  <section className="container-informacion">
    <div className="container-informacion-socios">
      <h2 className="container-text-socios">
        Informacion para socios
      </h2>
    </div>
    <div className="container-sucursales">
    <a href="https://www.universitaria.coop/creditos" className='container-creditos'>
      <h5>Sucursales</h5>
      <p>Ver mas</p>
      </a>
    </div>
    <div className="container-sucursales">
    <a href="https://www.universitaria.coop/creditos" className='container-actividades'>
      <h5>Actividades</h5>
      <p>Ver mas</p>
      </a>
    </div>
    <div className="container-sucursales">
    <a href="https://www.universitaria.coop/creditos" className='container-comunicados'>
      <h5>Comunicados</h5>
      <p>Ver mas</p>
      </a>
    </div>
  </section>
  <section className='container-tips'>
      <Carousel>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src="https://www.universitaria.coop/assets_front/img/asociate.jpg"
              alt="First slide"
          />
        <Carousel.Caption>
          <a href="https://www.universitaria.coop/creditos">
            <h2>divide tus gastos</h2>
            <p>Ver mas</p>
            </a>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
        <Modal.Header closeButton>
          <Modal.Title>Credito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le mostraremos todas las informaciones que necesita!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Seguir</Button>
        </Modal.Footer>
      </Modal>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1349249677/es/foto/diversi%C3%B3n-familiar.jpg?s=2048x2048&w=is&k=20&c=MHazBQ28ulQXLB2yIgzp2Hj89Yfh_HQzddZ3DTTrMtQ="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>
              Impulsa cada momento de tu vida
          </h1>
          <Button variant="primary" onClick={handleShow}> Click </Button>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
        <Modal.Header closeButton>
          <Modal.Title>Credito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le mostraremos todas las informaciones que necesita!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Seguir</Button>
        </Modal.Footer>
      </Modal>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1371940128/es/foto/amigos-multirraciales-tomando-selfies-de-grupos-grandes-sonriendo-a-la-c%C3%A1mara-j%C3%B3venes-que-se.jpg?s=2048x2048&w=is&k=20&c=6fK9weI3nC9tJkLpqknU5d2g3Nz4FhuyXYamxuPC0-o="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Impulsa cada paso en tu vida</h1>
        <Button variant="primary" onClick={handleShow}> Click aqui</Button>
          <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
          >
        <Modal.Header closeButton>
          <Modal.Title>Credito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Le mostraremos todas las informaciones que necesita!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Seguir</Button>
        </Modal.Footer>
      </Modal>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
  <footer className='bg-dark text-inverse'>
      <div className='container pt-10 pb-4'>
        <div className='row gy-6 gy-lg-0'>
          <div className='col-md-8 cool-lg-5'>
            <div className='widget'>
                <h3 className='widget-title text-white mb-3'>Encontrarnos</h3>
            </div>
            <div className='mb-4'>
              <p>
               <a href="mailto:universitaria@universitaria.coop" class="link-body">universitaria@universitaria.coop</a>
              </p>
              <p>
              <a href="tel:(021) 617 0000" class="link-body"><i class="uil uil-phone me-1"></i>(021) 617 0000</a>
              </p>
              <p>
              <a href="https://api.whatsapp.com/send?phone=595216170000" target="_blank" rel="noreferrer" class="link-body"> <i class="fab fa-whatsapp me-2"></i>+595 21 617 0000</a>
              </p>
            </div>
            <nav class="nav social social-white">
                    <a href="https://twitter.com/PyUniversitaria" target="_blank" rel="noreferrer" title="Twitter"><i class="uil uil-twitter"></i></a>
                    <a href="https://www.instagram.com/universitariapy/" target="_blank" rel="noreferrer" title="Instagram"><i class="uil uil-instagram"></i></a>
                    <a href="https://www.youtube.com/@coopuniversitaria/videos" target="_blank" rel="noreferrer" title="Youtube"><i class="uil uil-youtube"></i></a>
                    <a href="https://www.linkedin.com/company/cooperativa-universitaria-ltda-/" target="_blank" rel="noreferrer" title="Linkedin"><i class="uil uil-linkedin"></i></a>
            </nav>
          </div>
        </div>
      </div>
      <div className='col-md-4 col-lgl3'>
        <div className='widget'>
          <h3 className='widget-title text-white mb-3'>Enlances</h3>
        </div>
        <ul className='list-unstyled mb-0'>
          <li>
            <a href="#" className='link-body'>Insititucional</a>
          </li>
          <li>
            <a href="#" className='link-body'>Sucursales</a>
          </li>
          <li>
            <a href="#" className='link-body'>Preguntas Frecuentes</a>
          </li>
          <li>
            <a href="#" className='link-body'>Politica de Privacidad</a>
          </li>
          <li>
            <a href="#" className='link-body'>Reusltados del Sorteo Rueda de Ahorro</a>
          </li>
          <li>
            <a href="#" className='link-body'>Tarifario</a>
          </li>
          <li>
            <a href="#" className='link-body' >Pago de Cuentas</a>
          </li>
        </ul>
      </div>
      <div className='col-md-12 col-md-4 col-lg-4'>
        <div className='widget'>
          <h3 className='widget-title text-white mb-3'>Suscribete a nuestro boletin de noticias por e-mail</h3>
      </div>
      <div className='newsletter-wrapper'>
        <div id='mc_embed_signup2'>
          <form method="POST" action="https://www.universitaria.coop/add_newsletter" name="newsletter">
              <input type="hidden" name="_token" value="gwebBfViBbJlsLeKRmSPDqe402jF5V2Xqy0VKSHf"/>                
              <div id="mc_embed_signup_scroll2">
                  <div class="mc-field-group input-group form-label-group">
                    <input type="email" value="" name="email" class="required email form-control" placeholder="Email" id="newsletter"/>
                    
                    <input type="submit" value="Suscribirme" name="subscribe" id="newsletter-btn" class="btn btn-secondary"/>
                  </div>
                </div>
              </form>
        </div>
      </div>
      </div>
    </footer>
</>
  );
}


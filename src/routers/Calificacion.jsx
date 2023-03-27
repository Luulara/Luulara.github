import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./calificacion.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function Calificacion(){
    return(
    <>
      <Card className="container-image-principal">
      <Card.Img src="https://media.istockphoto.com/id/1370433251/es/foto/mujer-negra-sentada-en-el-escritorio-usando-la-escritura-de-la-computadora-en-el-cuaderno.jpg?s=2048x2048&w=is&k=20&c=1hOAI6JZbPI_rBfGjMssUyysVk3owbSlm5zE2noV7AI="/>
      <Card.ImgOverlay>
        <Card.Title className='container-text-principal'>Quienes Somos</Card.Title>
        </Card.ImgOverlay> 
    </Card>

    <section className="container-historias">
      <div className="container-historia-text">
      <div className='container-historia-imagen'>
          <img src="https://www.universitaria.coop/assets_front/img/nosotros.jpg" alt="imagen-historia" />
      </div>
        <h2>Nuestra Historia</h2>
        <p>La Cooperativa Universitaria fue fundada el 23 de setiembre de 1973 
          por 49 personas deseosas de ayudarse 
          mutuamente y el aporte integrado fue entonces de Gs. 60.000.
          <br />
          <br/>
          Luego de unos meses, el 23 de julio de 1974, 
        queda reconocida nuestra Cooperativa por el Poder Ejecutivo mediante el Decreto 
        Nro. 7620 por el cual se aprueban los Estatutos Sociales y se reconoce la personería jurídica.
        </p>
        
      </div>
      
    </section>
    <section className="container-valores">
      <Card className='container-valores-mision' border="primary" >
        <Card.Header>
          <img  
            src="https://tse4.mm.bing.net/th?id=OIP.bbktNjqNbNM1pHhYZU78MwHaHa&pid=Api&P=0" 
            width="40"
            height="40"
            className="container-valores-image" 
            alt="logo-mision" 
            />
        </Card.Header>
        <Card.Body>
          <Card.Title>Mision</Card.Title>
          <Card.Text>
          Conectarnos con las personas, generando soluciones, servicios financieros adecuados y sustentables, a través del cooperativismo, para beneficio de los socios y la comunidad.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card  className='container-valores-mision' border="primary"  >
        <Card.Header>
          <img  
            src="https://tse4.mm.bing.net/th?id=OIP.bbktNjqNbNM1pHhYZU78MwHaHa&pid=Api&P=0" 
            width="40"
            height="40"
            className="container-valores-image" 
            alt="logo-mision" 
            />
        </Card.Header>
        <Card.Body>
        <Card.Title>Vision</Card.Title>
          <Card.Text>
          Ser la principal opción financiera del socio, reconocida por satisfacer necesidades de carácter económico, social y cultural, comprometidos con la protección del medio ambiente.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='container-valores-mision' border="primary" >
        <Card.Header>
          <img  
            src="https://tse4.mm.bing.net/th?id=OIP.bbktNjqNbNM1pHhYZU78MwHaHa&pid=Api&P=0" 
            width="40"
            height="40"
            className="container-valores-image" 
            alt="logo-mision" 
            />
        </Card.Header>
        <Card.Body>
          <Card.Title>Politica de Calidad</Card.Title>
          <Card.Text>
            Atenderlos con eficiencia.
            Ofrecer productos y servicios competitivos.
            Cumplir los requisitos establecidos.
            Mantener un equipo humano comprometido.
            Innovar constantemente, mediante la creatividad y el uso de la tecnología.          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='container-valores-mision' border="primary" >
        <Card.Header>
          <img  
            src="https://tse4.mm.bing.net/th?id=OIP.bbktNjqNbNM1pHhYZU78MwHaHa&pid=Api&P=0" 
            width="40"
            height="40"
            className="container-valores-image" 
            alt="logo-mision" 
            />
        </Card.Header>
        <Card.Body>
          <Card.Title>Valores Institucionales</Card.Title>
          <Card.Text>
              Confianza
              Ayuda mutua
              Democracia
              Equidad
              Honestidad y Transparencia
              Responsabilidad social y ambiental
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
    <br/>
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
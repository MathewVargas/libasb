import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

function inicio() {
  return (

    <Fragment>
          <div className="site-wrap">

<div className="site-mobile-menu site-navbar-target">
  <div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close">
      <span className="icon-close2 js-menu-toggle"></span>
    </div>
  </div>
  <div className="site-mobile-menu-body"></div>
</div>


<header className="site-navbar py-4" role="banner">

  <div className="container">
    <div className="d-flex align-items-center">
      <div className="site-logo">
        <Link to="/">
          <img src="assets/images/logo.png" alt="Logo"/>
        </Link>
      </div>
      <div className="ml-auto">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li className="active"><Link  to="/" className="nav-link">Inicio</Link></li>
            <li >
                <NavDropdown title="Categorías" id="categoriasDropdown" className="navbar-categorias">
                    <Link to="/maxima"><NavDropdown.Item className="dropdown-item-custom" href="#primera">Máxima</NavDropdown.Item></Link>
                    <Link to="/primera"><NavDropdown.Item className="dropdown-item-custom" href="#primera">Primera</NavDropdown.Item></Link>
                    <Link to="/segunda"><NavDropdown.Item className="dropdown-item-custom"href="#primera">Segunda</NavDropdown.Item></Link>
                </NavDropdown>
            </li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/login">En Línea</Link></li>
          </ul>
        </nav>

        <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span
            className="icon-menu h3 text-white"></span></a>
      </div>
    </div>
  </div>

</header>

<div className="hero overlay" style={{backgroundImage: "url('assets/images/bg_3.jpg')"}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 ml-auto">
        <h1 className="text-white">Inicio</h1>
        <p>Liga Deportiva Barrial San Carlos</p>
        <div id="date-countdown"></div>

      </div>
    </div>
  </div>
</div>



<div className="container">
  

  <div className="row">
    <div className="col-lg-12">
      
      <div className="d-flex team-vs">
        <span className="score"></span>
        <div className="team-1 w-50">
          <div className="text-center">
            <img src="assets/images/liga_logo.png" alt="Image" className="img-fluid"/>
          </div>
        </div>
        <div className="team-2 w-50">
          <div className="team-details w-100 text-center">
            <img src="assets/images/silueta.png" alt="Image" className="img-fluid"/>
            <br></br>
            <br></br>
            <h3>Liga Deportiva Barrial</h3>
            <h1>San Carlos</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="latest-news">
  <div className="container">
    <div className="row">
      <div className="col-12 title-section">
        <h2 className="heading">Categorías</h2>
      </div>
    </div>
    <div className="row no-gutters">
      <div className="col-md-4">
        <div className="post-entry">
          <Link to="/maxima"><a href="#">
            <img src="assets/images/maxi.jpg" alt="Image" className="img-fluid"/>
          </a></Link>
          <div className="caption">
            <div className="caption-inner">
              <Link to="/maxima"><h3 className="text-center">MÁXIMA</h3></Link>
              <div className="author d-flex align-items-center">
                <div className="img mb-2 mr-3">
                  <img src="images/person_1.jpg" alt=""/>
                </div>
                <div className="text">
                </div>
                  <b><a>Categoría máxima de la Liga San Carlos</a></b>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="col-md-4">
        <div className="post-entry">
          <a href="#">
            <img src="assets/images/segunda.jpg" alt="Image" className="img-fluid"/>
          </a>
          <div className="caption">
            <div className="caption-inner">
              <Link to ="/primera"><h5 class="fa-regular fa-futbol"></h5><h3 className="text-center">PRIMERA</h3></Link>
              <div className="author d-flex align-items-center">
                <div className="img mb-2 mr-3">
                </div>
                <div className="text">
                </div>
                  <b><a>Categoría primera de la liga San Carlos</a></b>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className="col-md-4">
        <div className="post-entry">
          <a href="#">
            <img src="assets/images/primer.jpg" alt="Image" className="img-fluid"/>
          </a>
          <div className="caption">
            <div className="caption-inner">
              <Link to="segunda"><h3 className="text-center">SEGUNDA</h3></Link>
              <div className="author d-flex align-items-center">
                <div className="img mb-2 mr-3">
                </div>
                <div className="text">
                </div>
                  <b><a>Categoría segunda de la liga San Carlos</a></b>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>

  </div>
</div>



<footer className="footer-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="widget mb-3">
          <h3>News</h3>
          <ul className="list-unstyled links">
            <li><a href="#">All</a></li>
            <li><a href="#">Club News</a></li>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">RSS</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="widget mb-3">
          <h3>Tickets</h3>
          <ul className="list-unstyled links">
            <li><a href="#">Online Ticket</a></li>
            <li><a href="#">Payment and Prices</a></li>
            <li><a href="#">Contact &amp; Booking</a></li>
            <li><a href="#">Tickets</a></li>
            <li><a href="#">Coupon</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="widget mb-3">
          <h3>Matches</h3>
          <ul className="list-unstyled links">
            <li><a href="#">Standings</a></li>
            <li><a href="#">World Cup</a></li>
            <li><a href="#">La Lega</a></li>
            <li><a href="#">Hyper Cup</a></li>
            <li><a href="#">World League</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="widget mb-3">
          <h3>Social</h3>
          <ul className="list-unstyled links">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
        </div>
      </div>

    </div>

    <div className="row text-center">
      <div className="col-md-12">
        <div className=" pt-5">
        <p>

            Copyright &copy;
            <script>
              document.write(new Date().getFullYear());
            </script> All rights reserved | This template is made with <i class="icon-heart"
              aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

          </p>
          
        </div>
      </div>

    </div>
  </div>
</footer>



</div>

    </Fragment>

  );
}

export default inicio;

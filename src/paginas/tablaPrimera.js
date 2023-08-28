import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, doc, orderBy, query, where} from 'firebase/firestore'
//import { db } from '../firebaseConfig/firebase'
import { db } from '../components/firebaseconfig'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
import { NavDropdown } from 'react-bootstrap';
const MySwal = withReactContent(Swal)

const TablaPrimera = () => {
  //1 - configuramos los hooks
  const [TablaMax, setTabla] = useState( [] )

  //2 - referenciamos a la DB firestore
  const tablaCollection = collection(db, "Equipos")
  // Crear la consulta con orderBy
  
  const q1 = query(tablaCollection, where("categoria", "==", "primera"), orderBy("puntos", "desc"));

  //const query1 = query(tablaCollection, orderBy("puntos", "desc"))

  //3 - Funcion para mostrar TODOS los docs
  const getProducts = async ()   => {
   const data = await getDocs(q1)
   //console.log(data.docs)
   setTabla(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   //console.log(products)
  }
  
  
  //6 - usamos useEffect
  useEffect( () => {
    getProducts()
    // eslint-disable-next-line
  }, [] )
  //7 - devolvemos vista de nuestro componente
  return (
    <>
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
              <li><Link to="/contacto">En Línea</Link></li>
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
          <h1 className="text-white">Primera</h1>
          <p>Liga Deportiva Barrial San Carlos</p>
          <div id="date-countdown"></div>
  
        </div>
      </div>
    </div>
  </div>
  

  <div className="site-navbar py-1" style={{backgroundColor: "gray"}}>
  
  <div className="container">
    <div className="d-flex">
      <div className="">
        <nav className="site-navigation text-left" >
          <ul className="site-menu main-menu">
            <li ><Link  to="/primera" className="nav-link">EQUIPOS |</Link></li>
            <li className="active"><Link to="/tablaPrimera">Tabla DE POSICIONES |</Link></li>
            <li><Link to="/jornadasPrimera">FECHAS |</Link></li>
          </ul>
        </nav>

        <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span
            className="icon-menu h3 text-white"></span></a>
      </div>
    </div>
  </div>

</div>

  
  
<div className="container site-section">
<div class="container">
        <div class="row">
        <div className="col-6 title-section">
          <h2 className="heading">Tabla de posiciones Primera</h2>
        </div>
          <div class="col-lg-12">
            
            <div class="widget-next-match">
              <table class="table custom-table">
                <thead>
                  <tr>
                    <th>Pos</th>
                    <th>Equipos</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PE</th>
                    <th>PP</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>PTOS</th>
                    <th>GD</th>
                  </tr>
                </thead>
                <tbody>
                { TablaMax.map( (tabla, index) => (
                  <tr key={tabla.id}>
                    <td>{index + 1}</td>
                    <td><strong class="text-white"><img src={tabla.imagen_equip} width="50" height="50"></img> {tabla.nombre_equip}</strong></td>
                    <td>{tabla.pj}</td>
                    <td>{tabla.pg}</td>
                    <td>{tabla.pe}</td>
                    <td>{tabla.pp}</td>
                    <td>{tabla.gf}</td>
                    <td>{tabla.gc}</td>
                    <td>{tabla.puntos}</td>
                    <td>{tabla.gd}</td>
                  </tr>
                  )) }
                </tbody>
              </table>
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
    </>
  )
}

export default TablaPrimera
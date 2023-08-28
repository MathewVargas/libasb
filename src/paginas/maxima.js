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

const Maxima = () => {
  //1 - configuramos los hooks
  const [equipos, setEquipos] = useState( [] )

  //2 - referenciamos a la DB firestore
  const equiposCollection = collection(db, "Equipos")
  const q1 = query(equiposCollection, where("categoria", "==", "maxima"), orderBy("puntos", "desc"));

  //3 - Funcion para mostrar TODOS los docs
  const getProducts = async ()   => {
   const data = await getDocs(q1)
   //console.log(data.docs)
   setEquipos(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   //console.log(products)
  }
  //4 - Funcion para eliminar un doc
  const deleteProduct = async (id) => {
   const productDoc = doc(db, "Equipos", id)
   await deleteDoc(productDoc)
   getProducts()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina el producto?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteProduct(id)               
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })    
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
          <h1 className="text-white">Maxima</h1>
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
            <li className="active"><Link  to="/maxima" className="nav-link">EQUIPOS |</Link></li>
            <li><Link to="/tablaMax">TABLA DE POSICIONES |</Link></li>
            <li><Link to="/jornadasMax">FECHAS |</Link></li>
          </ul>
        </nav>

        <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span
            className="icon-menu h3 text-white"></span></a>
      </div>
    </div>
  </div>

</div>

  
  
<div className="container site-section">
      <div className="row">
        <div className="col-6 title-section">
          <h2 className="heading">Equipos aprobados en Máxima</h2>
          <br></br>
        </div>
      </div>
      <div className="row">
        {equipos.map((equipo) => (
        <div className="col-lg-4" key={equipo.id}>
        <div className="custom-media d-flex">
            <div className="img mr-4">
            <img src={equipo.imagen_equip} alt="Image" class="img-fluid" />
            </div>
            <div className="text">
            <h3 className="mb-4"><a href="#">{equipo.nombre_equip}</a></h3>
            <a className="meta">{equipo.abreviatura}</a>
            <p>Fundado en {equipo.fundacion} </p>
            <p><a href="#">Máxima -  San Carlos</a></p>
            </div>
        </div>
    </div>
  ))}
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

export default Maxima
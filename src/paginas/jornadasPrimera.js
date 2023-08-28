import React, { useState, useEffect, Fragment  } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import {collection, getDocs, getDoc, deleteDoc, doc, orderBy, query, where} from 'firebase/firestore'
import { db } from '../components/firebaseconfig'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
const MySwal = withReactContent(Swal)

const JornadasPrimera  = () =>  {
//1 - configuramos los hooks
const [JornadasMax, setTabla] = useState([]);
const [equipos, setEquipos] = useState([]);

//2 - referenciamos a la DB firestore
const tablaCollection = collection(db, "jornadasPrimera");
const escudosCollection = collection(db, "Equipos");

//3 - Funcion para mostrar TODOS los docs
const getProducts = async ()   => {
    const data = await getDocs(tablaCollection);
    setTabla(
        data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
    );
}

const getEquipos = async () => {
    const data = await getDocs(escudosCollection);
    setEquipos(
        data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
    );
}

//6 - usamos useEffect
useEffect(() => {
    getProducts();
    getEquipos();
}, []);
  //7 - devolvemos vista de nuestro componente
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
                    <li><Link to="/">Inicio</Link></li>
                    <li className="active" color="white">
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
            <div className="col-lg-5 mx-auto text-center">
                <h1 className="text-white">Primera</h1>
                <p>Liga Deportiva Barrial San Carlos</p>
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
                        <li><Link to="/tablaPrimera">TABLA DE POSICIONES |</Link></li>
                        <li className="active"><Link to="/jornadasPrimera">FECHAS |</Link></li>
                    </ul>
                    </nav>

                    <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span
                        className="icon-menu h3 text-white"></span></a>
                </div>
                </div>
            </div>

        </div>




        <div className="container">
        

        </div>



       {/* <div className="site-section bg-dark">
        <div className="container">
            
            <div className="row mb-5">
            <div className="col-lg-12">
                <div className="widget-next-match">
                <div className="widget-title">
                    <h3>Next Match</h3>
                </div>
                <div className="widget-body mb-3">
                    <div className="widget-vs">
                    <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                        <div className="team-1 text-center">
                        <img src="assets/images/logo_1.png" alt="Image"/>
                        <h3>Football League</h3>
                        </div>
                        <div>
                        <span className="vs"><span>VS</span></span>
                        </div>
                        <div className="team-2 text-center">
                        <img src="assets/images/logo_2.png" alt="Image"/>
                        <h3>Soccer</h3>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="text-center widget-vs-contents mb-4">
                    <h4>World Cup League</h4>
                    <p className="mb-5">
                    <span className="d-block">December 20th, 2020</span>
                    <span className="d-block">9:30 AM GMT+0</span>
                    <strong className="text-primary">New Euro Arena</strong>
                    </p>

                    <div id="date-countdown2" className="pb-1"></div>
                </div>
                </div>
            </div>
            </div>


        </div>
        </div>*/ }

        <div className="container site-section">
        <div className="row">
            <div className="col-12 title-section">
                <h2 className="heading">Fechas Primera</h2>
            </div>
            { JornadasMax.map( (jornada) => (
                
            <div className="col-lg-6 mb-4">
                <div className="bg-light p-4 rounded">
                <div className="widget-body">
                    <div className="widget-vs">
                        <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
                        <div className="team-1 text-center">
                        <img
                        src={
                            equipos.find(
                                (equipo) => equipo.nombre_equip === jornada.equipo1
                            )?.imagen_equip || "ruta/imagen/por/defecto"
                            }
                        />
                            <h3>{jornada.equipo1}</h3>
                        </div>
                        <div>
                            <span className="vs"><span>VS</span></span>
                        </div>
                        <div className="team-2 text-center">
                        <img
                        src={
                            equipos.find(
                                (equipo) => equipo.nombre_equip === jornada.equipo2
                            )?.imagen_equip || "ruta/imagen/por/defecto"
                            }
                        />
                            <h3>{jornada.equipo2}</h3>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="text-center widget-vs-contents mb-4">
                    <h4>Cancha: {jornada.cancha}</h4>
                    <p className="mb-5">
                        <span className="d-block">{jornada.fecha_hora.toDate().toLocaleDateString()}</span>
                        <span className="d-block">{jornada.fecha_hora.toDate().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                        <strong className="text-primary">Jornada: Fecha {jornada.jornada} </strong>
                    </p>

                    </div>
                
                </div>
            </div>
            )) }
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
                    </script> All rights reserved | This template is made with <i className="icon-heart"
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

export default JornadasPrimera;
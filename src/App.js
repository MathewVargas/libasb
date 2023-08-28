
import './App.css';
import Inicio from './paginas/inicio';
import Jornadas from './paginas/jornadas';
import Contacto from './paginas/contacto';
import Maxima from './paginas/maxima';
import TablaMax from './paginas/tablaMaxima';
import JornadasMaxima from './paginas/jornadasMaxima';
import Primera from './paginas/primera';
import TablaPrimera from './paginas/tablaPrimera';
import JornadasPrimera from './paginas/jornadasPrimera';
import Segunda from './paginas/segunda';
import TablaSegunda from './paginas/tablaSegunda';
import JornadasSegunda from './paginas/jornadasSegunda';
import { Login } from './components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (

    <div>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio></Inicio>}></Route>
              <Route path='/jornadas' element={<Jornadas></Jornadas>}></Route>
              <Route path='/contacto' element={<Contacto></Contacto>}></Route>
              <Route path='/maxima' element={<Maxima></Maxima>}></Route>
              <Route path='/tablaMax' element={<TablaMax></TablaMax>}></Route>
              <Route path='/primera' element={<Primera></Primera>}></Route>
              <Route path='/tablaPrimera' element={<TablaPrimera></TablaPrimera>}></Route>
              <Route path='/jornadasMax' element={<JornadasMaxima></JornadasMaxima>}></Route>
              <Route path='/segunda' element={<Segunda></Segunda>}></Route>
              <Route path='/tablaSegunda' element={<TablaSegunda></TablaSegunda>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/jornadasPrimera' element={<JornadasPrimera></JornadasPrimera>}></Route>
              <Route path='/jornadasSegunda' element={<JornadasSegunda></JornadasSegunda>}></Route>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
        
    </div>
  );
}

export default App;

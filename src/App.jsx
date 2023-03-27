import React from 'react';
import './App.css';
import { BrowserRouter , Route,Link, createBrowserRouter, Routes} from 'react-router-dom';
import Nosotros from './routers/Nosotros';
import Principal from './routers/Principal'
import Prueba from './components/Prueba';
import Directiva from './routers/Directiva';
import Memoria from './routers/Memoria';
import Estatuto from './routers/Estatuto';
import Prevencion from './routers/Prevencion';
import Calificacion from './routers/Calificacion';
import Licitacion from './routers/Licitacion';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Principal/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/directiva' element={<Directiva/>} />
        <Route path='/memoria' element={<Memoria/>} />
        <Route path='/estatutosocial' element={<Estatuto/>} />
        <Route path='/prevencion' element={<Prevencion/>} />
        <Route path='/calificacion' element={<Calificacion/>} />
        <Route path='/licitacion' element={<Licitacion/>} />
      </Routes>
    </BrowserRouter>
  

  );
}

export default App;

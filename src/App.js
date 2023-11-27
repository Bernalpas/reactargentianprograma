import { Routes, Route } from 'react-router-dom'
import React from './componentes/React.jsx'
import Navegacion from './componentes/Navegacion.jsx'
import ImagenesWeb from './componentes/Imagenes.jsx';
import Formulario from './componentes/Formulario.jsx';
import Error from './componentes/Error.jsx';
import Efectos from './componentes/Efectos.jsx';




function App() {
  return (
    <>
      <Navegacion />

      <Routes>
        <Route path='/react' element= { <React /> } />
        <Route path='/imagenes' element= { <ImagenesWeb /> }/>
        <Route path='/formulario' element= { <Formulario /> }/>
        <Route path='/efectos' element= { <Efectos /> }/>
        <Route path='*' element= { <Error /> }/>
      </Routes>
    </>
  );
}

export default App;

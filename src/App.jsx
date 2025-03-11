import { useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado';
import Primerparrafo from './components/Primerparrafo';
import Segundoparrafo from './components/Segundoparrafo';
import Publicaciones from './views/Publicaciones';
import Lista from './components/Lista';
const App = () => {
  return( 
<>
<Encabezado/>
<Lista/>
<Primerparrafo/>
<Segundoparrafo/>

</>
  );
}
export default App

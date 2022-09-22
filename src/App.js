
import Input from './components/Input';
import React, { useState } from 'react';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  //Estados del formulario
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [mostrarBoton,setmostrarBoton] = useState(false);
 
  return (
    <div className="App">
        <div>
          <form className="formulario">
            <div className="form-group">
              <Input
              usuario = {usuario}
              setUsuario = {setUsuario}
              clave = {clave}
              setClave = {setClave}
              mostrarBoton = {mostrarBoton}
              setmostrarBoton = {setmostrarBoton}
              />
            </div>
            
            {mostrarBoton ? <Button />: null}
          </form>
        </div>
    </div>
  );
}

export default App;
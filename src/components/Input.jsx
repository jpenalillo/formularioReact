//Fomulario.jsx
import React, { useState } from 'react';
import { validarDatos } from '../App';

const Input = (props) => {
  //Función antes de enviar el 
    const validarDatos = (e) => {
        props.setClave(e.target.value);
        //Validación;
        if (e.target.value == 252525 && props.usuario != '') {
            // cuando el nombre no sea vacio y la clave sea igual a 252525
            props.setmostrarBoton(true);
            return;
        }

    };
  return (
        <div>
            <div>
              <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    className="form-control"
                    onChange={(e)=>{
                        props.setUsuario (e.target.value)
                    }}
                    value={props.usuario}
                />
            </div>
            <div>
              <label>Password</label>
                <input
                    type="passsword"
                    name="clave"
                    className="form-control"
                    onChange={validarDatos}
                    value={props.clave}
                />
            </div>
        </div>
        );
};

export default Input;


import { useState } from 'react';

/* 
let nombre;  //Pepe
let password = document.getElementById('password').value; //123456 
*/

/* 
nombre = 'mario'
setNombre = 'Pepe'
nombre = 'Juan'; 
*/

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [password, setPassword] = useState('');


    const imprimirDatos = () => {
        console.log(nombre, apellido, password);

        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Apellido', apellido);
        localStorage.setItem('Password', password);
    }

    const borrarDatos = () => {
        setNombre('');
        setApellido('');
        setPassword('');
    }

    return (
        <>
            <h1 className='text-center mt-5 mb-5'>
                Formulario
            </h1>

            <div className='container'>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        placeholder="Pepe"
                        value={ nombre }
                        onChange={ (e) => setNombre(e.target.value) }
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input
                        type="text"
                        class="form-control"
                        id="apellido"
                        placeholder="Pérez"
                        value={ apellido }
                        onChange={ (e) => setApellido(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="123456"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button onClick={ imprimirDatos } type="button" class="btn btn-success m-3 w-25">Enviar Datos</button>
                <button onClick={ borrarDatos }type="reset" class="btn btn-danger m-3 w-25">Borrar Datos</button>

                <hr />

                <div>
                    <h2 className='text-center'>Datos del LocalStorage</h2>
                    <h3>Nombre: { localStorage.getItem('Nombre') }</h3>
                    <h3>Apellido: { localStorage.getItem('Apellido') }</h3>
                    <h3>Password: { localStorage.getItem('Password') }</h3>
                </div>

                <hr />

                <div>
                    <h2 className='text-center'>Datos del UseState</h2>
                    <h3>Nombre: { nombre }</h3>
                    <h3>Apellido: { apellido }</h3>
                    <h3>Password: { password }</h3>
                </div>
            </div>
        </>
    )


}


export default Formulario;
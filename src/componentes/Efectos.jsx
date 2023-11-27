



import { useEffect, useState } from "react";


const Efectos = () => {

    const [personajes, setPersonajes] = useState([])




    /* El useEffect realiza una llaamada previa a los datos antes de renderizar el comp */
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(response => setPersonajes(response.results))
    }, [])


    const imprimirDatos = () => {
        console.log(personajes);
    };



    return (
        <div>
            <button onClick={imprimirDatos} type="button" class="btn btn-success m-3 w-25">Traer Datos</button>


                { personajes.map((personaje) => (
                    
                    <div key={personaje.id} class="card" style={{width: '18rem'}}>
                        <img src={personaje.image} class="card-img-top" alt="imegen" />
                        <div class="card-body">
                            <h5 class="card-title">{personaje.name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a class="btn btn-primary">Eliminar Tarea</a>
                        </div>
                    </div>

                ))}
                
        </div>
    )
}


export default Efectos;
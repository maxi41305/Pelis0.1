import React, { useState } from 'react';
import { guardarenstorage } from './helpers/guardarenstorage';


export const Crear = ({setlistadostate}) => {

    const titulo = "Añadir Pelicula";

    const [peliState, setpeliState] = useState({
        title: '',
        descripcion: ''
    });


    const conseguirDatosForm = e => {
        e.preventDefault();

        //conseguir datos del formulario

        let target = e.target;
        let title = target.title.value;
        let descripcion = target.descripcion.value;

        //crear objeto de pelicula a guardar

        let peli = {
            id: new Date().getTime(),
            title,
            descripcion
        };

        //gurdar stado
        setpeliState(peli);


        //guardar en almasenamiento local 
        console.log(peli);
        
//actualizar el estado
setlistadostate(elementos =>{
    return[...elementos, peli];
})

guardarenstorage("pelis", peli);


        

    }

  


    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>
            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                    id="title"
                    name='title'
                    placeholder="Title" />

                <textarea id="description"
                    name='descripcion'
                    placeholder="Descripción"></textarea>

                <input type="submit"
                    id="save"
                    value="Guardar" />

            </form>
        </div>
    )
}

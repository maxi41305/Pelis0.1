import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, seteditar, setlistadostate }) => {

    let titulo_componente = "Editar";

const guardarEdicion = (e, id) =>{
    e.prevent.default();

//conseguir target del evento 
let target = e.target;


// buscar el indice del objeto a buscar

const pelis_almacenadas = conseguirPeliculas;

//buscar indice 

const indice = pelis_almacenadas.findIndex(peli =>  peli.id === id);

//crear objeto con ese indice 

let peli_actualizada = {
    id,
    title: target.title.value,
    descripcion: target.descripcion.value,
};

//actualizar elemento con este indice

pelis_almacenadas[indice] = peli_actualizada;

//


localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));


//actualizar estado 

setlistadostate(pelis_almacenadas);
seteditar(0);

}

    return (

        <div className='edit_form'>

            <h3 className='title'>{titulo_componente}</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type='text'
                    name='titulo'
                    className='tituloeditado'
                    defaultValue={peli.title}>
                </input>

                <textarea
                    name='descripcion'
                    className='descripcion_editada'
                    defaultValue={peli.descripcion}>
                </textarea>

                <input type='submit' className='editar' value="actualizar"></input>

            </form>

        </div>
    )
}

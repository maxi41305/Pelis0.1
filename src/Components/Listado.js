import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setlistadostate}) => {

   // const [listadopeli, setlistadostate] = useState([]);

   const [editar, seteditar]= useState(0);

    useEffect(() => {
        conseguirPeliculas();
    }, []);


    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        // console.log(peliculas);

        setlistadostate(peliculas);
        return peliculas;
    }

    const borrarPeli = (id) =>{

        //conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //filtrar esas peliculas par que la elimine del array

        let nuevoarraypeliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))


        //actualizar el estado

        setlistadostate(nuevoarraypeliculas);

        //actualizar localstorage

        localStorage.setItem('pelis', JSON.stringify(nuevoarraypeliculas));

    }



    return (
        <>
            <section id="content" className="content">
                {listadoState != null && listadoState.map(pelicula => {

                    return (


                        <article id={pelicula.id} className="peli-item">
                            <h3 className="title">{pelicula.title}</h3>
                            <p className="description">{pelicula.descripcion}</p>
                            
                            <button onClick={ () =>{
                                seteditar(pelicula.id)
                            }} className="edit">Editar</button>

                            <button onClick={ () => borrarPeli(pelicula.id)} className="delete">Borrar</button>
                       
                          {/*aparece formulario de editar*/}

                          {editar === pelicula.id && (
                            <Editar peli={pelicula}
                            conseguirPeliculas={conseguirPeliculas}
                            seteditar={seteditar}
                            setlistadostate={setlistadostate}
                            ></Editar>
                          )}
                        </article>


                     

                    );

                })}
            </section>
        </>
    )
}

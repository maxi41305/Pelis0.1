import React, { useState } from 'react'


export const Aside = ({ listadoState, setlistadostate }) => {

  const [busqueda, setbusqueda] = useState('');
  const [noencontrado, setnoencontrado] = useState(false);

  const buscarPeli = (e) => {

    //crear estado y acctulizarlo

    setbusqueda(e.target.value);

    // filtrar para buscar coincidencias 

    let pelis_encontradas = listadoState.filter(peli => {

      return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1 || pelis_encontradas <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setnoencontrado(true);
    }

    //actualiar el estado principal con lo que e logtado buscar
    setlistadostate(pelis_encontradas);

  }

  return (


    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>

      {noencontrado == true  && (
        <span className='noencontrado'>no se a encontrado</span>
      )}
      
     
      <form>
        <input type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          value={busqueda}
          onChange={buscarPeli}
        />
        <button id="search">Buscar</button>
      </form>
    </div>






  )
}

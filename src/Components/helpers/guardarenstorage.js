export const guardarenstorage = (key, elemento) => {

    //conseguir elementos que tenemos en el localstore

    let elementos = JSON.parse(localStorage.getItem(key));

    //comprobar si es un array

   if(Array.isArray(elementos)){

    elementos.push(elemento);
   }else{

    elementos = [elemento];
   }
        
   


    //guardar en el local storage 

    localStorage.setItem(key, JSON.stringify(elementos));

    //devolver objeto 
    console.log(elemento);

    return elemento;


}
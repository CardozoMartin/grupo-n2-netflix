'use strict';

import { obtenerPeliculas } from "../utils.js";



const crearTarjetasDeSlider = (pelicula)=>{
  const contenedor = document.getElementById('contenedor')  
  const li = document.createElement('li');




  const tarjetaPelicula = document.createElement('div')
  tarjetaPelicula.classList.add('movie-card')
  //agregar ESTEEEE
  const enlace = document.createElement('a');
  enlace.href="#";

  const figure = document.createElement('figure')
  figure.classList.add('card-banner')

  const caratulaPelicula = document.createElement('img')
  caratulaPelicula.src = pelicula.caratula;
  caratulaPelicula.alt = pelicula.titulo;

  figure.appendChild(caratulaPelicula);
  enlace.appendChild(figure)

  enlace.addEventListener('click',()=>{
    console.log(pelicula)
    sessionStorage.setItem("peliculaSeleccionada", JSON.stringify(pelicula));
    window.location.href = "detalle.html";
})

  

  tarjetaPelicula.appendChild(enlace);
  
  li.appendChild(tarjetaPelicula);
  contenedor.appendChild(li);

}

const pelicula = obtenerPeliculas();

pelicula.forEach(element => {
    crearTarjetasDeSlider(element)
});

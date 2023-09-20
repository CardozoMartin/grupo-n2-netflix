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


const buscarPorCategoria = document.getElementById('buscarPorCategoria')
buscarPorCategoria.addEventListener('input',()=>{
  const catalogoPeliculas = document.getElementById('contenedor')
  const categoriaElegida = buscarPorCategoria.value;
  const peliculas = obtenerPeliculas();

  const categoriaAMostrar = peliculas.filter((item)=>{
      return item.genero.includes(categoriaElegida);
  })

  catalogoPeliculas.innerHTML = "";

  setTimeout(categoriaAMostrar.forEach((item)=>{
    crearTarjetasDeSlider(item)
  }))
  

}) 

const buscarPelicula = document.getElementById('buscarPelicula');

buscarPelicula.addEventListener('input',()=>{
  const catalogoPeliculas = document.getElementById('contenedor')
const nombreDeLaPelicula = buscarPelicula.value.toLowerCase();
const peliculas = obtenerPeliculas();
const peliculaEncontrada = peliculas.filter((item)=>{
 return item.titulo.toLowerCase().includes(nombreDeLaPelicula);
})
catalogoPeliculas.innerHTML = "";

peliculaEncontrada.forEach((item)=>{
  crearTarjetasDeSlider(item);
})

})

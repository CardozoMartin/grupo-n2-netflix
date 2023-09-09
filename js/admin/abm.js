import { obtenerPeliculas } from "../utils.js";
import { cargarTabla, guardarPelicula } from "./adminUtils.js";
import { Pelicula } from "./pelicula.js";



export const cargarPeliculas = (titulo,tipo, caratula,genero,descripcion)=>{
  const nuevaPelicula = new Pelicula(titulo,tipo, caratula,genero,descripcion)

  guardarPelicula(nuevaPelicula);
}

// Método para eliminar una Película
export const eliminarPelicula = (codigo)=>{
   const pelicula = obtenerPeliculas()
  const peliculaFiltrada = pelicula.filter((item)=>{
    item.codigo !== codigo;
  })
  localStorage.setItem("peliculas", JSON.stringify(peliculaFiltrada))
  cargarTabla()
  
  //te quiero <3 :) 
}


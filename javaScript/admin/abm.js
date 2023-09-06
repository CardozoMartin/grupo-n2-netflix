'use strict'

import { guardarPelicula } from "./adminUtils.js";
import { Pelicula } from "./pelicula.js"

export const cargarPeliculas = (titulo,tipo, caratula,genero,descripcion)=>{
    const nuevaPelicula = new Pelicula(titulo,tipo, caratula,genero,descripcion)

    guardarPelicula(nuevaPelicula);
}


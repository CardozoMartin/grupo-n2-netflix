import { obtenerPeliculas } from "../local peliculas"

export const guardarPelicula = (pelicula)=>{

const peliculas = obtenerPeliculas();

peliculas.push(pelicula);

localStorage.setItem('peliculas', JSON.stringify(peliculas))
}
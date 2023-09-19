import { obtenerPeliculas } from "../utils.js";

export const descatacarPelicula = (codigo) => {
    
    const peliculas = obtenerPeliculas();
  
    
    const indexPelicula = peliculas.findIndex((item) => {
      return item.codigo === codigo;
    });
  
    
    if (indexPelicula === -1) {
      console.error("La película no se encontró en la lista");
      return;
    }
  
    
    peliculas[indexPelicula].destacada = !peliculas[indexPelicula].destacada;
  
    
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
  
    
    console.log("Nuevo estado de destacada:", peliculas[indexPelicula].destacada);
  };
  

  const peliculas = obtenerPeliculas();

  const crearPeliculaDestacada = (pelicula) => {
    const caratulaPelDestacada = document.getElementById('caratulaPelDestacada');
    const nombrePelDestacada = document.getElementById('nombrePelDestacada');
    const descripcionPelDestacada = document.getElementById('descripcionPelDestacada');
  
    const caratulaPelicula = document.createElement('img');
    caratulaPelicula.src = pelicula.caratula;
    caratulaPelicula.alt = pelicula.titulo;
  
    // Limpiar contenido anterior antes de agregar uno nuevo
    caratulaPelDestacada.innerHTML = '';
  
    caratulaPelDestacada.appendChild(caratulaPelicula);
  
    nombrePelDestacada.innerText = pelicula.titulo;
    descripcionPelDestacada.innerText = pelicula.descripcion;
  };
  
  const mostrarPeliculaDestacada = () => {
    const peliculaDestacada = peliculas.find((item) => {
      return item.destacada === true;
    });
  
    if (peliculaDestacada) {
      crearPeliculaDestacada(peliculaDestacada);
    } else {
      // Puedes mostrar un mensaje o realizar alguna acción si no hay ninguna película destacada.
      console.log('No hay películas destacadas.');
    }
  };
  
  // Llama a la función para mostrar la película destacada
  mostrarPeliculaDestacada();
  


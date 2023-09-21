import { obtenerPeliculas } from "../utils.js"


  const peliculas = obtenerPeliculas();

  const crearPeliculaDestacada = (pelicula) => {
    const caratulaPelDestacada = document.getElementById('caratulaPelDestacada');
    const nombrePelDestacada = document.getElementById('nombrePelDestacada');
    const descripcionPelDestacada = document.getElementById('descripcionPelDestacada');
  
    const caratulaPelicula = document.createElement('img');
    caratulaPelicula.src = pelicula.trailer;
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
  



document.addEventListener("DOMContentLoaded", () => {
    // Obtener los detalles de la película desde sessionStorage
    const peliculas = sessionStorage.getItem("peliculaSeleccionada");
  
    if (peliculas) {
      // Parsear los detalles de la película
      const pelicula = JSON.parse(peliculas);
  
      // Muestra los detalles de la película en la página
      
      mostrarDetallesDePelicula(pelicula)
    } else {
      // Si no se encontraron detalles en sessionStorage, muestra un mensaje de error o redirige a otra página de inicio.
      console.log("No se encontraron detalles de película en sessionStorage.");
    }
  });
  


  export const mostrarDetallesDePelicula = (pelicula)=>{
    const tituloPelicula = document.getElementById('tituloPelicula');
    const descripcionPelicula = document.getElementById('descripcionPelicula')
    const caracteristicasPelicula = document.getElementById('caracteristicasPelicula')
    const portadaPelicula = document.getElementById('portadaPelicula');
    const caratulaPelicula =document.createElement('img');
    caratulaPelicula.src = pelicula.caratula;
    caratulaPelicula.alt = pelicula.titulo;

    portadaPelicula.appendChild(caratulaPelicula);

    tituloPelicula.innerText = pelicula.titulo;

    const generoPelicula = document.createElement('a')
    const tipoPelicula = document.createElement('a');

    generoPelicula.innerText = pelicula.genero;
    tipoPelicula.innerText = pelicula.tipo;

    descripcionPelicula.innerText = pelicula.descripcion;

    caracteristicasPelicula.appendChild(generoPelicula)
    caracteristicasPelicula.appendChild(tipoPelicula)

  
    
    
  }

  const reproducirPelicula = document.getElementById('reproducirPelicula');

  reproducirPelicula.addEventListener('click',()=>{
    window.location.href = "./error404.html"
  })

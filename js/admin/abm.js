import { obtenerPeliculas } from "../utils.js";
import { cargarTabla, guardarPelicula } from "./adminUtils.js";
import { Pelicula } from "./pelicula.js";



export const cargarPeliculas = (titulo,tipo, caratula,genero,descripcion)=>{
  const nuevaPelicula = new Pelicula(titulo,tipo, caratula,genero,descripcion)

  guardarPelicula(nuevaPelicula);
}

// Método para eliminar una Película
export const eliminarPelicula = (codigo)=>{

  swal
  .fire({
    title: '¿Estas seguro?',
    text: 'Esta opcion no será reversible',
    icon: 'warning',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar',
  })
  .then((action) => {
    if (action.isConfirmed) {
      
      const pelicula = obtenerPeliculas()
      const peliculaFiltrada = pelicula.filter(item=>
        item.codigo !== codigo
      );

      
      localStorage.setItem("peliculas", JSON.stringify(peliculaFiltrada));

     
      swal.fire({
        title: 'Exito',
        text: 'El contacto se eliminó correctamente',
        icon: 'success',
      });
   
  
  
  cargarTabla()
  
  //te quiero <3 :) 
}
  })
}



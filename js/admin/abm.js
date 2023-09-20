import { obtenerPeliculas } from "../utils.js";
import { cargarTabla, guardarPelicula } from "./adminUtils.js";
import { Pelicula } from "./pelicula.js";



export const cargarPeliculas = (titulo,tipo, caratula,genero,descripcion,trailer)=>{
  const nuevaPelicula = new Pelicula(titulo,tipo, caratula,genero,descripcion,trailer)

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

export const editarUnaPelicula =(titulo,tipo, caratula,genero,descripcion,trailer)=>{
  // 1. Traer lista de peliculas y el codigo de la pelicula a editar
  const codigo = sessionStorage.getItem('idPelicula');
  const peliculas = obtenerPeliculas();

  // # Si no hay codigo (es null)
  if(!codigo){
    
swal.fire
({
      title: 'Error',
      text: 'No se encontró la Pelicula',
      icon: 'error',
    });
    return;
  }
  const posicionDeLaPelicula = peliculas.findIndex(
    (item) => item.codigo === codigo
  );
  // 2. Buscar posicion de la pelicula

  if(posicionDeLaPelicula === -1){
    
swal.fire
({
      title: 'Error',
      text: 'No se encontró la pelicula',
      icon: 'error',
    });
    return;
  }

  // 3. Crear el pelicula editado
  const peliculaEditada = new Pelicula(titulo,tipo, caratula,genero,descripcion,trailer);

  // 4. Eliminar pelicula anterior y agregar el nuevo
  peliculas.splice(posicionDeLaPelicula,1,peliculaEditada);

  // 5. Guardar en LS
  localStorage.setItem('peliculas',JSON.stringify(peliculas));

  // 6. Mostrar mensaje de exito
  
swal.fire
({
    title: 'Exito',
    text: 'El contacto se modificó correctamente',
    icon: 'success',
  });
  // 7. Resetear estado previo a edicion
  sessionStorage.removeItem('idPelicula');
 } 
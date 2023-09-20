import { cargarPeliculas, editarUnaPelicula } from "./abm.js";
import { PeliculaEditando, cargarTabla, filtroBuscarPelicula } from "./adminUtils.js";
import { validarCaratula, validarDescripcion, validarCategoria, validarTipo, validarTitulo } from "./validacion.js";


cargarTabla();

const tituloPelicula = document.getElementById("tituloPelicula");
const tipoPelicula = document.getElementById("tipoPelicula");
const caratulaPelicula = document.getElementById("caratulaPelicula");
const trailerPelicula = document.getElementById('trailerPelicula')
const generoPelicula = document.getElementById("categoriaPelicula");
const descripcionPelicula = document.getElementById("descripcionPelicula");
const formularioDePeliculas = document.getElementById("formularioDePeliculas");
const buscarPelicula = document.getElementById("buscarPelicula")

tituloPelicula.addEventListener("blur", (e) => {
  const value = e.target.value;

  validarTitulo(value, tituloPelicula);
});

tipoPelicula.addEventListener("blur", (e) => {
  const value = e.target.value;

  validarTipo(value, tipoPelicula);
});
caratulaPelicula.addEventListener("blur", (e) => {
  const value = e.target.value;

  validarCaratula(value, caratulaPelicula);
});

trailerPelicula.addEventListener('blur',(e)=>{
  const value = e.target.value;

  validarCaratula(value,trailerPelicula)
})
categoriaPelicula.addEventListener("blur", (e) => {
  const value = e.target.value;

  validarCategoria(value, generoPelicula);
});
descripcionPelicula.addEventListener("blur", (e) => {
  const value = e.target.value;

  validarDescripcion(value, descripcionPelicula);
});

formularioDePeliculas.addEventListener("submit", (e) => {
  e.preventDefault();
  const titulo = tituloPelicula.value;
  const tipo = tipoPelicula.value;
  const caratula = caratulaPelicula.value;
  const trailer = trailerPelicula.value;
  const genero = generoPelicula.value;
  const descripcion = descripcionPelicula.value;

  if (
    validarTitulo(titulo, tituloPelicula) &&
    validarTipo(tipo, tipoPelicula) &&
    validarCaratula(caratula, caratulaPelicula) &&
    validarDescripcion(descripcion, descripcionPelicula)&&
    validarCaratula(trailer,trailerPelicula)
  ) {
    if(PeliculaEditando()){
      editarUnaPelicula(titulo,tipo,caratula,genero,descripcion,trailer);
    }else{
      cargarPeliculas(titulo,tipo,caratula,genero,descripcion,trailer)
    } cargarTabla()
  formularioDePeliculas.reset();

  }


  

  tituloPelicula.classList.remove('is-valid', 'is-invalid');
  tipoPelicula.classList.remove('is-valid', 'is-invalid');
  caratulaPelicula.classList.remove('is-valid', 'is-invalid');
  categoriaPelicula.classList.remove('is-valid', 'is-invalid');
  descripcionPelicula.classList.remove('is-valid', 'is-invalid')
  trailerPelicula.classList.remove('is-valid', 'is-invalid')
  

});




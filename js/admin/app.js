import { cargarPeliculas } from "./abm.js";
import { cargarTabla } from "./adminUtils.js";
import { validarCaratula, validarDescripcion, validarCategoria, validarTipo, validarTitulo } from "./validacion.js";


cargarTabla();

const tituloPelicula = document.getElementById("tituloPelicula");
const tipoPelicula = document.getElementById("tipoPelicula");
const caratulaPelicula = document.getElementById("caratulaPelicula");
const generoPelicula = document.getElementById("categoriaPelicula");
const descripcionPelicula = document.getElementById("descripcionPelicula");
const formularioDePeliculas = document.getElementById("formularioDePeliculas");

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
  const genero = generoPelicula.value;
  const descripcion = descripcionPelicula.value;

  if (
    validarTitulo(titulo, tituloPelicula) &&
    validarTipo(tipo, tipoPelicula) &&
    validarCaratula(caratula, caratulaPelicula) &&
    validarDescripcion(descripcion, descripcionPelicula)
  ) {
    cargarPeliculas(titulo,tipo,caratula,genero,descripcion)
cargarTabla()
  formularioDePeliculas.reset();

  }


  

  tituloPelicula.classList.remove('is-valid', 'is-invalid');
  tipoPelicula.classList.remove('is-valid', 'is-invalid');
  caratulaPelicula.classList.remove('is-valid', 'is-invalid');
  categoriaPelicula.classList.remove('is-valid', 'is-invalid');
  descripcionPelicula.classList.remove('is-valid', 'is-invalid')
  
});

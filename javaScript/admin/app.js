import { validarCaratula, validarDescripcion, validarGenero, validarTipo, validarTitulo } from "./validaciones.js";

const tituloPelicula = document.getElementById('tituloPelicula');
const tipoPelicula = document.getElementById('tipoPelicula');
const caratulaPelicula = document.getElementById('caratulaPelicula');
const categoriaPelicula = document.getElementById('categoriaPelicula');
const descripcionPelicula = document.getElementById('descripcionPelicula');
const formularioDePeliculas = document.getElementById('formularioDePeliculas');

tituloPelicula.addEventListener('blur',(e)=>{
    const value = e.target.value;

    validarTitulo(value,tituloPelicula);
});

tipoPelicula.addEventListener('blur',(e)=>{
    const value = e.target.value;

    validarTipo(value,tipoPelicula)

})
caratulaPelicula.addEventListener('blur',(e)=>{
    const value = e.target.value;

    validarCaratula(value,caratulaPelicula)

})
categoriaPelicula.addEventListener('blur',(e)=>{
    const value = e.target.value;

    validarGenero(value,categoriaPelicula)

})
descripcionPelicula.addEventListener('blur',(e)=>{
    const value = e.target.value;

    validarDescripcion(value,descripcionPelicula)

})



formularioDePeliculas.addEventListener('submit' ,(e)=>{
    e.preventDefault();
    const titulo = tituloPelicula.value;
    const tipo = tipoPelicula.value;
    const caratula = caratulaPelicula.value;
    const categoria = categoriaPelicula.value;
    const descripcion = descripcionPelicula.value;
    

    if(validarTitulo(titulo, tituloPelicula)&& validarTipo(tipo,tipoPelicula)&& validarCaratula(caratula,caratulaPelicula)&& validarGenero(categoria,categoriaPelicula)&& validarDescripcion(descripcion,descripcionPelicula)){

    }
})
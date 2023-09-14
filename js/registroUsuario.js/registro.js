import { validarNombre, validarEdad, validarContraseña, validarEmail } from "./validacionesUsuario.js";

const formRegistro = document.getElementById("formRegistro");
const nombreInput = document.getElementById("nombreInput");
const edadInput = document.getElementById("edadInput");
const contraseñaInput = document.getElementById("contraseñaInput");
const emailInput = document.getElementById("emailInput");

nombreInput.addEventListener("blur", (e) => {
    const value = e.target.value;
    validarNombre(value, nombreInput);
});

edadInput.addEventListener("blur", (e) => {
    const value = e.target.value;
    validarEdad(value, edadInput);
});

contraseñaInput.addEventListener("blur", (e) => {
    const value = e.target.value;
    validarContraseña(value, contraseñaInput);
});

emailInput.addEventListener("blur", (e) => {
    const value = e.target.value;
    validarEmail(value, emailInput);
});

formRegistro.addEventListener("submit", (e) => {
    const nombre = nombreInput.value;
    const edad = edadInput.value;
    const contraseña = contraseñaInput.value;
    const email = emailInput.value;

    if (
        validarNombre(nombre, nombreInput) &&
        validarEdad(edad, edadInput) &&
        validarContraseña(contraseña, contraseñaInput) &&
        validarEmail(email, emailInput)
    ) {
        
    } else {
        e.preventDefault();
    }
}); 
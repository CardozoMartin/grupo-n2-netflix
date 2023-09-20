import { validarNombre, validarContraseña, validarEmail } from "./validacionesUsuario.js";

const formRegistro = document.getElementById("formRegistro");
const nombreInput = document.getElementById("nombreInput");
const contraseñaInput = document.getElementById("contraseñaInput");
const emailInput = document.getElementById("emailInput");

nombreInput.addEventListener("blur", (e) => {
    const value = e.target.value;
    validarNombre(value, nombreInput);
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
    const contraseña = contraseñaInput.value;
    const email = emailInput.value;

    if (
        validarNombre(nombre, nombreInput) &&
        validarContraseña(contraseña, contraseñaInput) &&
        validarEmail(email, emailInput)
    ) {
        
    } else {
        e.preventDefault();
    }
}); 

const registro = document.getElementById("registro")

registro.addEventListener("click", () => {
    window.location.href = "error404.html"
})
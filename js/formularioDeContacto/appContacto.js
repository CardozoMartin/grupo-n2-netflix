import { validarConsulta, validarEmailConsulta } from "./validaciones.js";


const inputEmail = document.getElementById('inputEmail');
const asuntoSelect = document.getElementById('inputAsunto');
const inputText = document.getElementById('inputText');
const btnEnviar = document.getElementById('btnEnviar');
const formContacto = document.getElementById('formContacto')


inputEmail.addEventListener("blur", (e) => {
    const value = e.target.value;
    validarEmailConsulta(value, inputEmail);
});

inputText.addEventListener("blur", (e) => {
    const value = e.target.value;
    validarConsulta(value, inputText);
});

formContacto.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = inputEmail.value;
    const comentario = inputText.value;

    // Mostrar el mensaje de confirmación antes de la validación
   
        if (validarEmailConsulta(email, inputEmail) && validarConsulta(comentario, inputText)) {
            Swal.fire({
                title: 'Su consulta fue enviada con éxito',
                width: 600,
                padding: '3em',
                icon: 'success'
            }).then(() => {
                window.location.href = './formularioDeContacto.html';
            });
        }
    });




const crearBoton = ()=>{
const enviar = document.createElement('button')
enviar.classList.add('btn','btnInicio','fw-bolder')
enviar.value = 'Enviar'
enviar.innerText = "Enviar"

btnEnviar.appendChild(enviar)
}
crearBoton();
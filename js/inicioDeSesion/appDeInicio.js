


//const verContraseña = document.getElementById('verContraseña');
// Define 'contrasenia' aquí

import { UserWithoutPassword, Usuario } from "./usuario.js";
import { validacionContrasenia, validacionNombreUsuario } from "./validacionDeInicio.js";

/*verContraseña.addEventListener('click', () => {
    if (contrasenia.type === "password") {
        contrasenia.type = "text";
    } else {
        contrasenia.type = "password";
    }
});
*/

const estaLogueado = JSON.parse(sessionStorage.getItem('estaLogueado'));
if (estaLogueado) {
 
  window.location.href = './paginaPrincipal.html';
}



const usuarioAdmin = new Usuario('admin', 'admin',"admin@gmail.com");


const formLogin = document.getElementById('form-login');
const campoUsuario = document.getElementById('input-usuario');
const campoContraseña = document.getElementById('input-contraseña');
const alertCredenciales = document.getElementById('alert-login'); 



campoUsuario.addEventListener("blur", (e) => {
    const value = e.target.value;
    validacionNombreUsuario(value, campoUsuario);
});

campoContraseña.addEventListener("blur", (e) => {
    const value = e.target.value;
    validacionContrasenia(value, campoContraseña);
});


formLogin.addEventListener('submit', (e) => {
  
  e.preventDefault();

  
  const usuario = campoUsuario.value;
  const contraseña = campoContraseña.value;

  
  if (
    validacionNombreUsuario(usuario, campoUsuario) &&
    validacionContrasenia(contraseña, campoContraseña)
  ) {
   

    
    campoUsuario.classList.remove('is-invalid');
    campoContraseña.classList.remove('is-invalid');

    
    if (
      usuario === usuarioAdmin.usuario &&
      contraseña === usuarioAdmin.contraseña
    ) {
        
      
      alertCredenciales.classList.add('d-none');

      
      const usuarioLogueado = new UserWithoutPassword(
        usuario,
        'admin@gmail.com'
      );

      
      sessionStorage.setItem('estaLogueado', true);
      sessionStorage.setItem('usuario', JSON.stringify(usuarioLogueado));

      
      swal
        .fire({
          title: 'Bienvenido',
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
        })
        .then(() => {
          
          window.location.href = './paginaPrincipal.html';
        });
    } else {
      
      alertCredenciales.classList.remove('d-none');
      console.log("no pudo ingresar")
      console.log(usuario)
      console.log(contraseña)
    }
  }
});
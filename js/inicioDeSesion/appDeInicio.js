// Define 'contrasenia' aquí

import { UserWithoutPassword, Usuario } from "./usuario.js";
import { validacionContrasenia, validacionNombreUsuario } from "./validacionDeInicio.js";
const verContraseña = document.getElementById('verContraseña');
verContraseña.addEventListener('click', () => {
    if (campoContraseña.type === "password") {
        campoContraseña.type = "text";
    } else {
        campoContraseña.type = "password";
    }
});


const estaLogueado = JSON.parse(sessionStorage.getItem('estaLogueado'));
if (estaLogueado) {
  window.location.href = './paginaPrincipal.html';
}

const usuarios = [
  new Usuario('admin', 'admin', 'admin'),
  new Usuario('usuario1', 'password1', 'normal'),
  new Usuario('usuario2', 'password2', 'normal'),
];

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

    const usuarioEncontrado = usuarios.find(
      (u) => u.usuario === usuario && u.contraseña === contraseña
    );

    if (usuarioEncontrado) {
      alertCredenciales.classList.add('d-none');

      const usuarioLogueado = new UserWithoutPassword(
        usuarioEncontrado.usuario,
        usuarioEncontrado.correo
      );

      sessionStorage.setItem('estaLogueado', true);
      sessionStorage.setItem('usuario', JSON.stringify(usuarioLogueado));

      if (usuarioEncontrado.tipo === 'admin') {
        window.location.href = './paginaAdministrador.html'; // Redirige al administrador
      } else {
        window.location.href = './paginaAdministrador.html'; // Redirige al usuario común
      }
    } else {
      alertCredenciales.classList.remove('d-none');
    }
  }
});

//deslogueo
// Obtén una referencia al botón de cierre de sesión por su id



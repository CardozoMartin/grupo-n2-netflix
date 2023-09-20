
export const validacionNombreUsuario = (value, campo) => {
    // Cantidad de digitos menor a 4
    if (value.trim().length < 4) {
      campo.classList.add("is-invalid");
      campo.classList.remove("is-valid");
      return false;
    }
  
    // Cantidad de digitos mayor a 20
    if (value.trim().length > 20) {
      campo.classList.add("is-invalid");
      campo.classList.remove("is-valid");
      return false;
    }
  
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
  };
  
  export const validacionContrasenia = (value, campo) => {
    // Cantidad de digitos menor a 4
    if (value.trim().length < 4) {
      campo.classList.add("is-invalid");
      campo.classList.remove("is-valid");
      return false;
    }
  
    // Cantidad de digitos mayor a 20
    if (value.trim().length > 20) {
      campo.classList.add("is-invalid");
      campo.classList.remove("is-valid");
      return false;
    }
  
    // TODO: Agregar validacion de patrón de contraseña
  
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
    return true;
  };
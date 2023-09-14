


export const validarNombre = (value, campo) => {
  
    if (value.trim().length < 4) {
      campo.classList.add("is-invalid");
      campo.classList.remove("is-valid");
      return false;
    }
  
    if (value.trim().length > 20) {
      campo.classList.add("is-invalid");
      campo.classList.remove("is-valid");
      return false;
    }
  
    campo.classList.remove("is-invalid");
    return true;
  };

  export const validarEdad = (value, campo) => {

    if (value.trim().length !== 2) {
      campo.classList.add('is-invalid');
      campo.classList.remove('is-valid');
      return false;
    }
  
    if (isNaN(Number(value))) {
      campo.classList.add('is-invalid');
      campo.classList.remove('is-valid');
      return false;
    }}

    export const validarEmail = (value, campo) => {
      // Cantidad de digitos menor a 4
      if (value.trim().length < 4) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
      }
    
      // Cantidad de digitos mayor a 100
      if (value.trim().length > 100) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
      }}

      export const validarContraseña = (value, campo) => {
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
        }}
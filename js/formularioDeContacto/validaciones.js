
export const validarEmailConsulta = (value, campo) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(value)) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }
  
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
  };
   
  export const validarConsulta = (value, campo) => {
    if (value.trim().length < 30 || value.trim().length > 250) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }
  
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
  };
  
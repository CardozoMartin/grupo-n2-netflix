export const validarTitulo = (value, campo) => {
    if (value.trim().length <= 3) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }
    
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validarTipo = (value, campo) => {
    if (value === "") {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validarCaratula = (value, campo) => {
    if (value.trim().length === 0 || value.trim().length > 300 || !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value)) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validarGenero = (value, campo) => {
    if (value === "") {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validarDescripcion = (value, campo) => {
    if (value.trim().length < 20 || value.trim().length > 300) {
        campo.classList.add('is-invalid');
        campo.classList.remove('is-valid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

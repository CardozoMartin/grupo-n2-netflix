const btnLogout = document.getElementById('btn-cerrar');


btnLogout.addEventListener('click', () => {
    swal
    .fire({
      title: '¿Estás seguro?',
      text: 'Cerrarás tu sesión',
      confirmButtonText: 'Si, salir',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        // 1. Limpiar sessionStorage
        sessionStorage.removeItem('estaLogueado');
  sessionStorage.removeItem('usuario');

        // 2. Redireccionar
       
window.location.href = './inicioDeSesion.html'; 
        // Listo :)
      }
    });
  

  
  
});
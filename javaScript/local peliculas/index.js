export const obtenerPeliculas = ()=>{
    const peliculasLS = JSON.parse(localStorage.getItem('peliculas'));

    if(peliculasLS){
        return peliculasLS;
    }else{
        return [];
    }
}
import { obtenerPeliculas } from "../utils.js";
import { eliminarPelicula } from "./abm.js";


export const guardarPelicula = (pelicula) => {
  const peliculas = obtenerPeliculas();
  peliculas.push(pelicula);
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
};

export const filaDeCatalogoDePeliculas = (pelicula, indice) => {
  const tbody = document.getElementById("tbodyPeliculas");
  const tr = document.createElement("tr");

  const tdIndice = document.createElement("td");
  tdIndice.innerText = indice;
  tr.appendChild(tdIndice);

  const tdCaratula = document.createElement("td");
  const img = document.createElement("img");

  img.src = pelicula.caratula;
  img.alt = pelicula.titulo;
  img.classList.add("imagen-tabla");

  tdCaratula.appendChild(img);
  tr.appendChild(tdCaratula);

  const tdTitulo = document.createElement("td");
  tdTitulo.innerText = pelicula.titulo;
  tr.appendChild(tdTitulo);

  const tdGenero = document.createElement("td");
  tdGenero.innerText = pelicula.genero;
  tr.appendChild(tdGenero);

  const tdTipo = document.createElement("td");
  tdTipo.innerText = pelicula.tipo;
  tr.appendChild(tdTipo);

  const tdDescripcion = document.createElement("td");
  tdDescripcion.classList.add('text-wrap')
  tdDescripcion.innerText = pelicula.descripcion;
  tr.appendChild(tdDescripcion);

  const tdBotones = document.createElement('td')
  const btnEditar = document.createElement('button');
  const btnEliminar = document.createElement('button');
  const btnDestacar = document.createElement('button');

  const iconEditar = document.createElement('i')
  const iconEliminar = document.createElement('i')
  const iconoDescatar = document.createElement('i')
  iconEditar.classList.add('fa-solid', 'fa-pencil');
  iconEliminar.classList.add('fa-solid', 'fa-trash-can')
  iconoDescatar.classList.add('bi', 'bi-star-fill')

  btnEditar.type = 'button';
  btnEliminar.type = 'button';
  btnDestacar.type = 'button'
  btnEditar.classList.add('btn', 'btn-primary', 'btn-sm');
btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
  btnDestacar.classList.add( 'btn','btn-warning', 'btn-sm','btnDestacar')
  btnEditar.appendChild(iconEditar);
  btnEliminar.appendChild(iconEliminar);
  btnDestacar.appendChild(iconoDescatar)

  btnEditar.onclick = () => {
    prepararEdicionContacto(contacto.codigo);
  };

  btnEliminar.onclick = () => {
 eliminarPelicula(pelicula.codigo)
  };

tdBotones.appendChild(btnEditar)
tdBotones.appendChild(btnEliminar)
tdBotones.appendChild(btnDestacar)
tr.appendChild(tdBotones);

  tbody.appendChild(tr);
};

export const cargarTabla = () => {
  const peliculas = obtenerPeliculas();

  const tbody = document.getElementById("tbodyPeliculas");
  tbody.innerHTML = "";

  peliculas.forEach((pelicula, indice) => {
    filaDeCatalogoDePeliculas(pelicula, indice + 1); 
  });
};

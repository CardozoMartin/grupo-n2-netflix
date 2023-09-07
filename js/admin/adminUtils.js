import { obtenerPeliculas } from "../utils.js";


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
  tdDescripcion.innerText = pelicula.descripcion;
  tr.appendChild(tdDescripcion);

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

import { conectaAPI } from "./conectaAPI.js";
import {mostrarProductos} from "./mostrarProductos.js"
async function filtrarProducto(evento){
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conectaAPI.buscarProducto(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");


    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(element=>lista.appendChild(mostrarProductos.construyeCard(element.nombre, element.precio, element.imagen, element.id)));
    
    if(busqueda.length==0){
        lista.innerHTML=`<h2 class="mensaje__titulo">No fueron encontrados productos para ${datosDeBusqueda}</h2>`;
    }
}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento=>filtrarProducto(evento));
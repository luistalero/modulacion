
import div2 from "../componentes/contenedorTareas.js";

function agregarTarea(input) {
    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent = input.value;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () =>  eliminarTarea(parrafoTarea, botonEliminar));

    div2.append(parrafoTarea, botonEliminar)
}

function eliminarTarea(tarea, boton) {
    tarea.remove();
    boton.remove();
}

export {agregarTarea, eliminarTarea};
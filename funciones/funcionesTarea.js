
import div2 from "../componentes/contenedorTareas.js";

function agregarTarea(input) {
    const tarjeta = document.createElement("div");
    tarjeta.style = `
        margin: 12px;
        display: flex;
        gap: 8px;
    `
    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent = input.value.trim();
    input.value = null;

    // BOTON ACTUALIZAR
    const botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.style = `
        color: white;
        background-color: green;
        border: 1px solid grey
    `
    botonActualizar.addEventListener("click", () => actualizarTarea(input, parrafoTarea));

    // BOTON TACHAR
    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar Tarea";
    botonActualizar.style = `
        color: white;
        background-color: blue;
        border: 1px solid grey
    `
    botonCompletar.addEventListener("click", () => completarTarea(botonCompletar,tarjeta));
    
    // BOTON ELIMINAR
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style = `
        color: white;
        background-color: red;
        border: 1px solid grey
    `
    botonEliminar.addEventListener("click", () =>  eliminarTarea(tarjeta));

    tarjeta.append(parrafoTarea, botonActualizar, botonCompletar, botonEliminar);
    div2.append(tarjeta);
}

function actualizarTarea(nuevaTarea, tarea) {

        tarea.textContent = nuevaTarea.value;
        nuevaTarea.value = "";
        nuevaTarea.placeholder = "Tarea Actualizada!";
        setTimeout(() => {     
            nuevaTarea.placeholder = "Ingresa tu Tarea";
    }, 3000);
}


function eliminarTarea(tarjetaTarea) {
    tarjetaTarea.remove();
}

function eliminarTodasTareas() {
    parrafoTarea.innerHTML = "";
    alert("Todas las tareas han sido elimindas...")
}

export {agregarTarea, eliminarTarea, eliminarTodasTareas};
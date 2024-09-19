
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
    input.value = "";

    // BOTON ACTUALIZAR
    const botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.addEventListener("click", () => actualizarTarea(input, parrafoTarea));

    // BOTON TACHAR
    const botonCompletar = document.createElement("input");
    botonCompletar.type = "checkbox";
    botonCompletar.addEventListener("change", () => completarTarea(botonCompletar, parrafoTarea));
    
    // BOTON ELIMINAR
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", () =>  eliminarTarea(tarjeta));

    tarjeta.append(botonCompletar, parrafoTarea, botonActualizar, botonEliminar);
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

function completarTarea(boton, tarea) {
    if (boton.checked) {
        tarea.style.textDecoration = "line-through";
    } else {
        tarea.style.textDecoration = "none";
    }
}

function eliminarTarea(tarjetaTarea) {
    tarjetaTarea.remove();
}

function eliminarTodasTareas() {
    div2.innerHTML = "";
    alert("Todas las tareas han sido elimindas...")
}

export {agregarTarea, eliminarTarea, eliminarTodasTareas};
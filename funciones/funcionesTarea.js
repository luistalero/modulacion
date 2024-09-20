
import div2 from "../componentes/contenedorTareas.js";

function agregarTarea(input) {
    const tarjeta = document.createElement("div");
    const opciones = document.createElement("div");
    const opcione = document.createElement("div");
    opcione.id = "chek";
    opciones.id = "bot";
    tarjeta.id = "tareas";
    tarjeta.style = `
        margin: 12px;
        display: flex;
        gap: 8px;
    `
    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent = input.value.trim();
    input.value = "";

    // BOTON TACHAR
    const botonCompletar = document.createElement("input");
    botonCompletar.type = "checkbox";
    botonCompletar.addEventListener("change", () => completarTarea(botonCompletar, parrafoTarea));

    // BOTON ACTUALIZAR
    const botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.id = "actualizar";
    botonActualizar.addEventListener("click", () => actualizarTarea(input, parrafoTarea));

    // BOTON ELIMINAR
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.id = "eliminar";
    botonEliminar.addEventListener("click", () =>  eliminarTarea(tarjeta));

    opcione.append(botonCompletar, parrafoTarea);
    opciones.append(botonActualizar, botonEliminar);
    tarjeta.append(opcione, opciones);
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
        setTimeout(() => {     
            alert("Todas las tareas han sido eliminadas...")
    }, 1000);
}

export {agregarTarea, eliminarTarea, eliminarTodasTareas};
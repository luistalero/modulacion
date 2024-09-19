import tareaInput from "./tareaInput.js";
import botonEnviar from "./botonEnviar.js";
import { agregarTarea, eliminarTodasTareas } from "../funciones/funcionesTarea.js";
import botonEliminarTareas from "./eliminarTareas.js";

const tareaContenedor = document.createElement("div");
tareaContenedor.id = "contenedor";
// botonEnviar.disabled = true;

const botones = document.createElement("div")

botonEnviar.addEventListener("click", () =>  agregarTarea(tareaInput));
botonEliminarTareas.addEventListener("click", () => eliminarTodasTareas());

tareaContenedor.append(tareaInput);
tareaContenedor.append(botones);
botones.append(botonEnviar);
botones.append(botonEliminarTareas);

export default tareaContenedor;

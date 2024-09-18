import tareaInput from "./tareaInput.js";
import botonEnviar from "./botonEnviar.js";
import { agregarTarea } from "../funciones/funcionesTarea.js";

const tareaContenedor = document.createElement("div");

botonEnviar.addEventListener("click", () =>  agregarTarea(tareaInput));

tareaContenedor.append(tareaInput);
tareaContenedor.append(botonEnviar);

export default tareaContenedor;

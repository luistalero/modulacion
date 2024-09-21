import root from "./componentes/root.js";
import titulo from "./componentes/titulo.js";
import div2 from "./componentes/contenedorTareas.js";
import tareaContenedor from "./componentes/crearInput.js";
import Tarea from "./clases/tarea.js";

const miTarea = new Tarea("");

miTarea.texto = ""
root.append(miTarea.etiqueta);

root.append(titulo);
root.append(tareaContenedor);
root.append(div2);
import './style.css';
import {domCrearProyecto, domCrearTarea} from "./dommodule.js";

function fabricarProyecto (titulo, descripcion) {
    const tareas = [];
    const fabricarTarea = function (titulo, descripcion, vencimiento, prioridad) {
        const notas = "";
        const checklist = {};
        tareas.push({titulo, descripcion, vencimiento, prioridad, notas, checklist});
    };
    return {titulo, descripcion, tareas, fabricarTarea};
};

function nuevoProyecto (proyecto) {
    proyectos[proyecto.titulo] = proyecto;
};

const proyectos = {};

nuevoProyecto(fabricarProyecto("Tareas Sueltas", "Estas son Tareas que no están relacionadas con ningún proyecto en especial."));

proyectos["Tareas Sueltas"].fabricarTarea("Primera Tarea", "Solo una prueba", "7/7", "mediana");
proyectos["Tareas Sueltas"].fabricarTarea("Segunda Tarea", "Segunda prueba", 8/8, "baja");

console.log(proyectos);

// A esta funcion la termina llamando el eventListener del boton crearProyecto.
function crearProyecto(titulo, descripcion) {
    nuevoProyecto(fabricarProyecto(titulo, descripcion));
    console.log(proyectos);
};

document.querySelector(".proyectoNuevo").addEventListener("click", domCrearProyecto);
document.querySelector(".tareaNueva").addEventListener("click", domCrearTarea);

export {crearProyecto};
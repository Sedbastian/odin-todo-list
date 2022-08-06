import './style.css';
import {domCrearProyecto, domCrearTarea, domNavProyectos} from "./dommodule.js";

function fabricarProyecto (titulo, descripcion) {
    const tareas = [];
    const fabricarTarea = function (titulo, descripcion, vencimiento, prioridad, notas, checklist) {
        tareas.push({titulo, descripcion, vencimiento, prioridad, notas, checklist});
    };
    return {titulo, descripcion, tareas, fabricarTarea};
};

function nuevoProyecto (proyecto) {
    proyectos[proyecto.titulo] = proyecto;
};

const proyectos = {};

nuevoProyecto(fabricarProyecto("Tareas Sueltas", "Estas son Tareas que no están relacionadas con ningún proyecto en especial."));

proyectos["Tareas Sueltas"].fabricarTarea("Primera Tarea", "Primera prueba", "2022-11-25", "Alta");
proyectos["Tareas Sueltas"].tareas[0].notas = "Notas de ejemplo!";
proyectos["Tareas Sueltas"].fabricarTarea("Segunda Tarea", "Solo una prueba", "2023-01-02", "Mediana");
proyectos["Tareas Sueltas"].fabricarTarea("Tercera Tarea", "Ultima prueba", "2022-08-09", "Baja");

domNavProyectos();

// A esta funcion la termina llamando el eventListener del boton crearProyecto.
function crearProyecto(titulo, descripcion) {
    nuevoProyecto(fabricarProyecto(titulo, descripcion));
    domNavProyectos(titulo);
};

// A esta funcion la termina llamando el eventListener del boton crearTarea.
function crearTarea(proyecto, titulo, descripcion, vencimiento, prioridad, notas, checklist) {
    proyectos[proyecto].fabricarTarea(titulo, descripcion, vencimiento, prioridad, notas, checklist);
    console.log(proyectos);
};

document.querySelector(".proyectoNuevo").addEventListener("click", domCrearProyecto);

export {crearProyecto, crearTarea, proyectos};
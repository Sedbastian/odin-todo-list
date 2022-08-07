import './style.css';
import {domCrearProyecto, domCrearTarea, domNavProyectos} from "./dommodule.js";

function fabricarProyecto (titulo, descripcion) {
    const tareas = [];
    const fabricarTarea = function (titulo, descripcion, vencimiento, prioridad, notas, checklist) {
        tareas.push({titulo, descripcion, vencimiento, prioridad, notas, checklist});
    };
    return {titulo, descripcion, tareas, fabricarTarea};
};

// Agrega un nuevo objeto (proyecto) al objeto proyectos con key (proyecto.titulo).
function nuevoProyecto (proyecto) {
    proyectos[proyecto.titulo] = proyecto;
};

// A esta funcion la termina llamando el eventListener del boton crearProyecto.
function crearProyecto(titulo, descripcion) {
    nuevoProyecto(fabricarProyecto(titulo, descripcion));
    domNavProyectos(titulo);
};

// A esta funcion la termina llamando el eventListener del boton crearTarea.
function crearTarea(proyecto, titulo, descripcion, vencimiento, prioridad, notas, checklist) {
    proyectos[proyecto].fabricarTarea(titulo, descripcion, vencimiento, prioridad, notas, checklist);
};

// A esta funcion la termina llamando el eventListener del boton guardarCambios.
function actualizarTarea(proyecto, numeroTarea, titulo, descripcion, vencimiento, prioridad, notas, checklist) {
    proyectos[proyecto].tareas[numeroTarea].titulo = titulo;
    proyectos[proyecto].tareas[numeroTarea].descripcion = descripcion;
    proyectos[proyecto].tareas[numeroTarea].vencimiento = vencimiento;
    proyectos[proyecto].tareas[numeroTarea].prioridad = prioridad;
    proyectos[proyecto].tareas[numeroTarea].notas = notas;
    proyectos[proyecto].tareas[numeroTarea].checklist = checklist;
};

const proyectos = {};

nuevoProyecto(fabricarProyecto("Tareas Sueltas", "Estas son Tareas que no están relacionadas con ningún proyecto en especial."));

// Tareas de ejemplo:
proyectos["Tareas Sueltas"].fabricarTarea("Primera Tarea", "Primera prueba", new Date("2022-11-25T00:00:00"), "Alta");
proyectos["Tareas Sueltas"].tareas[0].notas = "Notas de ejemplo!";
proyectos["Tareas Sueltas"].fabricarTarea("Segunda Tarea", "Solo una prueba", new Date("2023-01-02T00:00:00"), "Mediana");
proyectos["Tareas Sueltas"].fabricarTarea("Tercera Tarea", "Ultima prueba", new Date("2022-08-09T00:00:00"), "Baja");

domNavProyectos();

document.querySelector(".proyectoNuevo").addEventListener("click", domCrearProyecto);

export {proyectos, crearProyecto, crearTarea, actualizarTarea};
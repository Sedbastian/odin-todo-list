import './style.css';
import {domNavProyectos, domMostrarTareas, domCrearProyecto, } from "./dommodule.js";
import { parseISO } from 'date-fns';

// Llamada por crearProyecto();
function fabricarProyecto (titulo, descripcion) {
    const tareas = [];
    const fabricarTarea = function (titulo, descripcion, vencimiento, prioridad, notas, checklist) {
        tareas.push({titulo, descripcion, vencimiento, prioridad, notas, checklist});
    };
    return {titulo, descripcion, tareas, fabricarTarea};
};

// A esta funcion la termina llamando el eventListener del boton crearProyecto.
function crearProyecto(titulo, descripcion) {
    const proyectoAagregar = fabricarProyecto(titulo, descripcion);
    proyectos[proyectoAagregar.titulo] = proyectoAagregar;
    guardarProyectos();
};

function eliminarProyecto(proyectoElegido) {
    delete proyectos[proyectoElegido];
    guardarProyectos();
};

// A esta funcion la termina llamando el eventListener del boton crearTarea.
function crearTarea(proyecto, titulo, descripcion, vencimiento, prioridad, notas, checklist) {
    proyectos[proyecto].fabricarTarea(titulo, descripcion, vencimiento, prioridad, notas, checklist);
    guardarProyectos();
};

// A esta funcion la termina llamando el eventListener del boton guardarCambios.
function actualizarTarea(proyecto, numeroTarea, titulo, descripcion, vencimiento, prioridad, notas, checklist) {
    proyectos[proyecto].tareas[numeroTarea].titulo = titulo;
    proyectos[proyecto].tareas[numeroTarea].descripcion = descripcion;
    proyectos[proyecto].tareas[numeroTarea].vencimiento = vencimiento;
    proyectos[proyecto].tareas[numeroTarea].prioridad = prioridad;
    proyectos[proyecto].tareas[numeroTarea].notas = notas;
    proyectos[proyecto].tareas[numeroTarea].checklist = checklist;
    guardarProyectos();
};

function eliminarTarea(proyectoElegido, numeroTarea) {
    proyectos[proyectoElegido].tareas.splice(numeroTarea, 1);
    guardarProyectos();
};

function guardarProyectos() {
    localStorage.setItem("proyectosGuardados", JSON.stringify(proyectos));
};

function cargarProyectos() {
    if (localStorage.getItem("proyectosGuardados")) {
        const proyectosGuardadosJSON = localStorage.getItem("proyectosGuardados");
        const proyectosGuardados = JSON.parse(proyectosGuardadosJSON);
        // Agregar a cada proyecto su método fabricarTarea (que perdió x la transformación a JSON):
        for (const key of Object.keys(proyectosGuardados)) {
            proyectosGuardados[key].fabricarTarea = function (titulo, descripcion, vencimiento, prioridad, notas, checklist) {
                proyectosGuardados[key].tareas.push({titulo, descripcion, vencimiento, prioridad, notas, checklist});
            };
            for (let index = 0; index < proyectosGuardados[key].tareas.length; index++) {
                proyectosGuardados[key].tareas[index].vencimiento = parseISO(proyectosGuardados[key].tareas[index].vencimiento);
            };
        };
        proyectos = proyectosGuardados;
    };
};

function eliminarProyectosGuardados() {
    if (window.confirm("¿Realmente querés Eliminar Todos los Proyectos Guardados?")) {
        localStorage.clear();
        proyectos = {};
        domNavProyectos();
    };
};

function iniciar() {
    document.querySelector(".tareasSueltas").addEventListener("click", () => domMostrarTareas("Tareas Sueltas"));
    document.querySelector(".proyectoNuevo").addEventListener("click", domCrearProyecto);
    document.querySelector(".eliminarTodo").addEventListener("click", eliminarProyectosGuardados);

    cargarProyectos();
    if (!proyectos["Tareas Sueltas"]) {
        // Proyecto predeterminado "Tareas Sueltas":
        crearProyecto("Tareas Sueltas", "Estas son Tareas que no están relacionadas con ningún proyecto en especial.");
        // Tareas de ejemplo:
        // proyectos["Tareas Sueltas"].fabricarTarea("Primera Tarea", "Primera prueba", new Date("2022-11-25T00:00:00"), "Alta");
        // proyectos["Tareas Sueltas"].tareas[0].notas = "Notas de ejemplo!";
        // proyectos["Tareas Sueltas"].fabricarTarea("Segunda Tarea", "Solo una prueba", new Date("2023-01-02T00:00:00"), "Mediana");
        // proyectos["Tareas Sueltas"].fabricarTarea("Tercera Tarea", "Ultima prueba", new Date("2022-08-09T00:00:00"), "Baja");
    };
    domNavProyectos();
};

let proyectos = {};
iniciar();

export {proyectos, crearProyecto, eliminarProyecto, crearTarea, actualizarTarea, eliminarTarea};
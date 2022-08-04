import './style.css';
import {domCrearProyecto, domCrearTarea} from "./dommodule.js";

const fabricarParaHacer = function (titulo, descripcion, vencimiento, prioridad) {
    const notas = "";
    const checklist = {};
    return {titulo, descripcion, vencimiento, prioridad, notas, checklist};
};

const fabricarProyecto = function (titulo, descripcion) {
    const paraHaceres = [];
    return {titulo, descripcion, paraHaceres};
};

const proyectos = {};

function nuevoProyecto (proyecto) {
    proyectos[proyecto.titulo] = proyecto;
};

nuevoProyecto(fabricarProyecto("Primer proyecto", "Solo es una prueba"));
console.log(proyectos);

const primerParaHacer = fabricarParaHacer("Primer ParaHacer", "Solo una prueba", "7/7", "mediana");
console.log(primerParaHacer);

proyectos["Primer proyecto"].paraHaceres[0] = primerParaHacer;
console.log(proyectos);

// A esta funcion la termina llamando el eventListener del boton crearProyecto.
function crearProyecto(titulo, descripcion) {
    nuevoProyecto(fabricarProyecto(titulo, descripcion));
    console.log(proyectos);
};

document.querySelector(".proyectoNuevo").addEventListener("click", domCrearProyecto);
document.querySelector(".tareaNueva").addEventListener("click", domCrearTarea);

export {crearProyecto};
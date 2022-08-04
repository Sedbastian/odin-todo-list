function domCrearNuevoProyecto() {
    const cuerpi = document.querySelector("body");
    const proyectoEnDom = document.createElement("div");
    proyectoEnDom.textContent = prompt("Titulo del Proyecto");
    cuerpi.appendChild(proyectoEnDom);
};

function domCrearNuevaTarea() {
    const cuerpi = document.querySelector("body");
    const tareaEnDom = document.createElement("div");
    tareaEnDom.textContent = prompt("Titulo de la Tarea");
    cuerpi.appendChild(tareaEnDom);
};

export {
    domCrearNuevoProyecto,
    domCrearNuevaTarea
};
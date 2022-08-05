import {crearProyecto, crearTarea, proyectos} from "./index.js";

function domCrearProyecto() {
    function llamarCrearProyecto() {
        const titulo = `${inputTitulo.value}`;
        const descripcion = `${inputDescripcion.value}`;
        crearProyecto(titulo, descripcion);
        cuerpi.removeChild(divFormulario);
    };

    function cancelarFormulario() {
        cuerpi.removeChild(divFormulario);
    }

    const divFormulario = document.createElement("div");
    divFormulario.classList.add("divFormularioProyecto");

    const crearNuevoProyecto = document.createElement("h2");
    crearNuevoProyecto.textContent = "Crear Nuevo Proyecto";
    divFormulario.appendChild(crearNuevoProyecto);

    const labelTitulo =  document.createElement("label");
    labelTitulo.setAttribute("for", "titulo");
    labelTitulo.textContent = "Titulo:";
    divFormulario.appendChild(labelTitulo);

    const inputTitulo = document.createElement("input");
    inputTitulo.setAttribute("type", "text");
    inputTitulo.setAttribute("id", "titulo");
    divFormulario.appendChild(inputTitulo);

    const labelDescripcion =  document.createElement("label");
    labelDescripcion.setAttribute("for", "descripcion");
    labelDescripcion.textContent = "Descripcion:";
    divFormulario.appendChild(labelDescripcion);

    const inputDescripcion = document.createElement("input");
    inputDescripcion.setAttribute("type", "text");
    inputDescripcion.setAttribute("id", "descripcion");
    divFormulario.appendChild(inputDescripcion);

    const botonCrear = document.createElement("button");
    botonCrear.addEventListener("click", llamarCrearProyecto);
    botonCrear.setAttribute("class", "botonFormulario");
    botonCrear.textContent = "Crear Proyecto";
    divFormulario.appendChild(botonCrear);

    const botonCancelar = document.createElement("button");
    botonCancelar.addEventListener("click", cancelarFormulario);
    botonCancelar.setAttribute("class", "botonFormulario");
    botonCancelar.textContent = "Cancelar";
    divFormulario.appendChild(botonCancelar);

    const cuerpi = document.querySelector("body");
    cuerpi.appendChild(divFormulario);
};

function domCrearTarea() {
    function llamarCrearTarea() {
        const titulo = `${inputTitulo.value}`;
        const descripcion = `${inputDescripcion.value}`;
        const proyecto = `${inputProyecto.value}`;
        crearTarea(titulo, descripcion, proyecto);
        cuerpi.removeChild(divFormulario);
    };

    function cancelarFormulario() {
        cuerpi.removeChild(divFormulario);
    }

    const divFormulario = document.createElement("div");
    divFormulario.classList.add("divFormularioTarea");

    const crearNuevaTarea = document.createElement("h2");
    crearNuevaTarea.textContent = "Crear Nueva Tarea";
    divFormulario.appendChild(crearNuevaTarea);

    const labelTitulo =  document.createElement("label");
    labelTitulo.setAttribute("for", "titulo");
    labelTitulo.textContent = "Titulo:";
    divFormulario.appendChild(labelTitulo);

    const inputTitulo = document.createElement("input");
    inputTitulo.setAttribute("type", "text");
    inputTitulo.setAttribute("id", "titulo");
    divFormulario.appendChild(inputTitulo);

    const labelDescripcion =  document.createElement("label");
    labelDescripcion.setAttribute("for", "descripcion");
    labelDescripcion.textContent = "Descripcion:";
    divFormulario.appendChild(labelDescripcion);

    const inputDescripcion = document.createElement("input");
    inputDescripcion.setAttribute("type", "text");
    inputDescripcion.setAttribute("id", "descripcion");
    divFormulario.appendChild(inputDescripcion);

    const labelProyecto =  document.createElement("label");
    labelProyecto.setAttribute("for", "proyecto");
    labelProyecto.textContent = "Proyecto al que pertenece:";
    divFormulario.appendChild(labelProyecto);

    const inputProyecto = document.createElement("input");
    inputProyecto.setAttribute("type", "text");
    inputProyecto.setAttribute("id", "proyecto");
    divFormulario.appendChild(inputProyecto);

    const botonCrear = document.createElement("button");
    botonCrear.addEventListener("click", llamarCrearTarea);
    botonCrear.setAttribute("class", "botonFormulario");
    botonCrear.textContent = "Crear Tarea";
    divFormulario.appendChild(botonCrear);

    const botonCancelar = document.createElement("button");
    botonCancelar.addEventListener("click", cancelarFormulario);
    botonCancelar.setAttribute("class", "botonFormulario");
    botonCancelar.textContent = "Cancelar";
    divFormulario.appendChild(botonCancelar);

    const cuerpi = document.querySelector("body");
    cuerpi.appendChild(divFormulario);
};

function domMostrarTareas(event) {
    const mainAborrar = document.querySelector("main");
    mainAborrar.remove();

    const main = document.createElement("main");
    
    proyectos[event.target.textContent].tareas.forEach(tarea => {
        const tareaTarjeta = document.createElement("div");
        tareaTarjeta.classList.add("tareaTarjeta");

        const tituloH3 = document.createElement("h3");
        tituloH3.textContent = tarea.titulo;
        const prioridad = document.createElement("div");
        prioridad.textContent = `Prioridad: ${tarea.prioridad}`; 
        const descripcion = document.createElement("div");
        descripcion.textContent = `${tarea.descripcion}`;
        const vencimiento = document.createElement("div");
        vencimiento.textContent = `Vencimiento: ${tarea.vencimiento}`;
        
        tareaTarjeta.appendChild(tituloH3);
        tareaTarjeta.appendChild(prioridad);
        tareaTarjeta.appendChild(descripcion);
        tareaTarjeta.appendChild(vencimiento);   

        main.appendChild(tareaTarjeta);        
    });

    const cuerpi = document.querySelector("body");
    cuerpi.appendChild(main);
    const proyectosAdesElegir = document.querySelectorAll(".proyectoNav")
    proyectosAdesElegir.forEach(proyecto=>proyecto.classList.remove("proyectoElegido"))
    event.target.classList.add("proyectoElegido");
};

function domNavProyectos() {
    const proyectosAborrar = document.querySelectorAll(".proyectoNav");
    proyectosAborrar.forEach(proyecto => proyecto.remove());

    const nav = document.querySelector("nav");

    for (const key of Object.keys(proyectos)) {  
        const proyecto = document.createElement("div");
        proyecto.classList.add("proyectoNav");
        proyecto.textContent = proyectos[key].titulo;
        proyecto.addEventListener("click", domMostrarTareas);
        nav.appendChild(proyecto);
    }
};

export {
    domCrearProyecto,
    domCrearTarea,
    domNavProyectos
};
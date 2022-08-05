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

function domCrearTarea(proyecto) {
    function llamarCrearTarea() {
        const titulo = `${inputTitulo.value}`;
        const descripcion = `${inputDescripcion.value}`;
        
        crearTarea(titulo, descripcion, proyecto);
        cuerpi.removeChild(divFormulario);
        domMostrarTareas(proyecto);
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

function domMostrarTareas(proyecto) {
    function llamarCrearTarea() {
        domCrearTarea(proyecto);
    }
    
    const mainAborrar = document.querySelector("main");
    mainAborrar.remove();

    const botonCrearTarea = document.createElement("button");
    botonCrearTarea.textContent = "Agregar Tarea Nueva";
    botonCrearTarea.addEventListener("click", llamarCrearTarea);

    const main = document.createElement("main");
    main.appendChild(botonCrearTarea);
        
    proyectos[proyecto].tareas.forEach(tarea => {
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
    const proyectosListado = document.querySelectorAll(".proyectoNav")
    proyectosListado.forEach(unProyecto=>unProyecto.classList.remove("proyectoElegido"))
    proyectosListado.forEach(unProyecto=>{
        if(unProyecto.textContent === proyecto) {
            unProyecto.classList.add("proyectoElegido");
        };
    })
};

function domNavProyectos() {
    function llamarMostrarTareas(event) {
        const proyectoAmostrarTareas = event.target.textContent;
        domMostrarTareas(proyectoAmostrarTareas);
    };

    const proyectosAborrar = document.querySelectorAll(".proyectoNav");
    proyectosAborrar.forEach(proyecto => proyecto.remove());

    const nav = document.querySelector("nav");

    for (const key of Object.keys(proyectos)) {  
        const proyecto = document.createElement("div");
        proyecto.classList.add("proyectoNav");
        proyecto.textContent = proyectos[key].titulo;
        proyecto.addEventListener("click", llamarMostrarTareas);
        nav.appendChild(proyecto);
    }
};

export {
    domCrearProyecto,
    domCrearTarea,
    domNavProyectos
};
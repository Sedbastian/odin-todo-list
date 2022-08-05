import {crearProyecto, crearTarea, proyectos} from "./index.js";

function domCrearProyecto() {
    function llamarCrearProyecto() {
        const titulo = `${inputTitulo.value}`;
        const descripcion = `${inputDescripcion.value}`;
        crearProyecto(titulo, descripcion);
        cuerpi.removeChild(divFormulario);
        domMostrarTareas(titulo);
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

function domCrearTarea(proyectoElegido) {
    function llamarCrearTarea() {
        const titulo = `${inputTitulo.value}`;
        const descripcion = `${inputDescripcion.value}`;
        
        crearTarea(titulo, descripcion, proyectoElegido);
        cuerpi.removeChild(divFormulario);
        domMostrarTareas(proyectoElegido);
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

function domMostrarTareas(proyectoElegido) {
    function llamarCrearTarea() {
        domCrearTarea(proyectoElegido);
    }
    
    const mainAborrar = document.querySelector("main");
    mainAborrar.remove();
    const main = document.createElement("main");

    const descripcionProyecto = document.createElement("h2");
    descripcionProyecto.textContent = proyectos[proyectoElegido].descripcion;
    main.appendChild(descripcionProyecto);

    const botonCrearTarea = document.createElement("button");
    botonCrearTarea.textContent = "Agregar Tarea Nueva";
    botonCrearTarea.addEventListener("click", llamarCrearTarea);
    main.appendChild(botonCrearTarea);
        
    proyectos[proyectoElegido].tareas.forEach(tarea => {
        const tareaTarjeta = document.createElement("div");
        tareaTarjeta.classList.add("tareaTarjeta");
        if (tarea.prioridad === "Alta") {
            tareaTarjeta.classList.add("prioridadAlta");
        } else if (tarea.prioridad === "Mediana") {
            tareaTarjeta.classList.add("prioridadMediana");
        } else if (tarea.prioridad === "Baja") {
            tareaTarjeta.classList.add("prioridadBaja");
        };

        const tituloH3 = document.createElement("h3");
        tituloH3.textContent = tarea.titulo;
        
        const vencimiento = document.createElement("div");
        vencimiento.textContent = `Vencimiento: ${tarea.vencimiento}`;
        
        tareaTarjeta.appendChild(tituloH3);
        tareaTarjeta.appendChild(vencimiento);   

        main.appendChild(tareaTarjeta);        
    });

    const cuerpi = document.querySelector("body");
    cuerpi.appendChild(main);
    const proyectosListado = document.querySelectorAll(".proyectoNav")
    proyectosListado.forEach(unProyecto=>unProyecto.classList.remove("proyectoElegido"))
    proyectosListado.forEach(unProyecto=>{
        if(unProyecto.textContent === proyectoElegido) {
            unProyecto.classList.add("proyectoElegido");
        };
    })
};

function domNavProyectos(proyectoElegido) {
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
        if (proyectos[key].titulo === proyectoElegido) {
            proyecto.classList.add("proyectoElegido");
        }
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
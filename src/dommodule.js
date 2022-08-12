import {proyectos, crearProyecto, eliminarProyecto, crearTarea, actualizarTarea, eliminarTarea} from "./index.js";
import { format, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

function domNavProyectos(proyectoElegido) {
    function llamarMostrarTareas(event) {
        const proyectoAmostrarTareas = event.target.textContent;
        domMostrarTareas(proyectoAmostrarTareas);
    };

    const proyectosAborrar = document.querySelectorAll(".proyectoNav");
    proyectosAborrar.forEach(proyecto => proyecto.remove());

    const divProyectos = document.querySelector(".proyectos");

    for (const key of Object.keys(proyectos)) {  
        if (key !== "Tareas Sueltas") {
            const proyecto = document.createElement("div");
            proyecto.classList.add("proyectoNav");
            if (proyectos[key].titulo === proyectoElegido) {
                proyecto.classList.add("proyectoElegido");
            }
            proyecto.textContent = proyectos[key].titulo;
            proyecto.addEventListener("click", llamarMostrarTareas);
            divProyectos.appendChild(proyecto);
        };
    };
};

function domCrearProyecto() {
    function llamarCrearProyecto() {
        const titulo = `${inputTitulo.value}`;
        const descripcion = `${inputDescripcion.value}`;
        crearProyecto(titulo, descripcion);
        cuerpi.removeChild(divFormulario);
        domNavProyectos(titulo);
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

function domMostrarTareasSueltas() {
    domMostrarTareas("Tareas Sueltas");
    document.querySelector(".tareasSueltas").classList.add("proyectoElegido");
};

function domMostrarTareas(proyectoElegido) {
    
    function llamarCrearTarea() {
        domCrearTarea(proyectoElegido);
    };

    function llamarEliminarProyecto() {
        if (window.confirm(`¿Realmente querés Eliminar el Proyecto "${proyectoElegido}"`)) {
            eliminarProyecto(proyectoElegido);
            main.remove();
            const nuevoMainVacio = document.createElement("main");
            cuerpi.appendChild(nuevoMainVacio);
            domNavProyectos();
        };
    };

    function llamarVerEditar(event) {
        const tituloProyecto = event.target.getAttribute("data-proyecto");
        const numeroTarea = event.target.getAttribute("data-tarea");
        domVerEditar(tituloProyecto, numeroTarea);
    };    
    
    const mainAborrar = document.querySelector("main");
    mainAborrar.remove();
    const main = document.createElement("main");

    const divComandoTareas = document.createElement("div");
    divComandoTareas.classList.add('comandoTareas');

    const descripcionProyecto = document.createElement("h2");
    descripcionProyecto.textContent = proyectos[proyectoElegido].descripcion;
    divComandoTareas.appendChild(descripcionProyecto);
    
    const botonEliminarProyecto = document.createElement("button");
    botonEliminarProyecto.textContent = "Eliminar Proyecto";
    botonEliminarProyecto.classList.add('eliminarProyecto');
    botonEliminarProyecto.addEventListener("click", llamarEliminarProyecto);
    divComandoTareas.appendChild(botonEliminarProyecto);
        
    main.appendChild(divComandoTareas);

    for(let i = 0; i < proyectos[proyectoElegido].tareas.length; i++) {
        const tareaTarjeta = document.createElement("div");
        // Este ID es para q lo encuentre domVerEditar.
        tareaTarjeta.setAttribute("id", `tarea${i}`);
        tareaTarjeta.classList.add("tareaTarjeta");
        
        if (proyectos[proyectoElegido].tareas[i].prioridad === "Alta") {
            tareaTarjeta.classList.add("prioridadAlta");
        } else if (proyectos[proyectoElegido].tareas[i].prioridad === "Mediana") {
            tareaTarjeta.classList.add("prioridadMediana");
        } else if (proyectos[proyectoElegido].tareas[i].prioridad === "Baja") {
            tareaTarjeta.classList.add("prioridadBaja");
        };

        const tituloH3 = document.createElement("h3");
        tituloH3.textContent = proyectos[proyectoElegido].tareas[i].titulo;
        
        const vencimiento = document.createElement("div");
        vencimiento.classList.add("vencimiento");
        vencimiento.textContent = `Vence en: ${formatDistanceToNow(proyectos[proyectoElegido].tareas[i].vencimiento, {addSuffix: true, locale: es})}.`;

        const botonVerEditar = document.createElement("button");
        botonVerEditar.setAttribute("data-proyecto", `${proyectoElegido}`)
        botonVerEditar.setAttribute("data-tarea", `${i}`);
        botonVerEditar.setAttribute("id", `tarea${i}`);
        botonVerEditar.classList.add("botonVerEditar");
        botonVerEditar.textContent = "Ver detalles / Editar";
        botonVerEditar.addEventListener("click", llamarVerEditar);

        tareaTarjeta.appendChild(tituloH3);
        tareaTarjeta.appendChild(vencimiento);   
        tareaTarjeta.appendChild(botonVerEditar);
        main.appendChild(tareaTarjeta);        
    };

    const botonCrearTarea = document.createElement("button");
    botonCrearTarea.textContent = "Agregar Tarea";
    botonCrearTarea.classList.add('botonCrearTarea');
    botonCrearTarea.addEventListener("click", llamarCrearTarea);
    main.appendChild(botonCrearTarea);

    const cuerpi = document.querySelector("body");
    cuerpi.appendChild(main);
    const proyectosListado = document.querySelectorAll(".proyectoNav")
    proyectosListado.forEach(unProyecto=>unProyecto.classList.remove("proyectoElegido"))
    proyectosListado.forEach(unProyecto=>{
        if(unProyecto.textContent === proyectoElegido) {
            unProyecto.classList.add("proyectoElegido");
        };
    });
    if (proyectoElegido !== 'Tareas Sueltas') {
        document.querySelector(".tareasSueltas").classList.remove("proyectoElegido");
    };
};

function domCrearTarea(proyectoElegido) {
    crearTarea(proyectoElegido,"", "", new Date(), "", "", "");
    domMostrarTareas(proyectoElegido);
    const numeroTarea = proyectos[proyectoElegido].tareas.length - 1; 
    domVerEditar(proyectoElegido, numeroTarea);
};

function domVerEditar(proyectoElegido, numeroTarea) {
    
    function llamarGuardarCambios() {
        const checklistA = "";
        let prioridad;
        if (inputRadioAlta.checked) {
            prioridad = "Alta";
        } else if (inputRadioMediana.checked) {
            prioridad = "Mediana";
        } else if (inputRadioBaja.checked) {
            prioridad = "Baja";
        };
        actualizarTarea(proyectoElegido, numeroTarea, inputTitulo.value, textAreaDescripcion.value, new Date(inputDateVencimiento.value+"T00:00:00"), prioridad, textAreaNotas.value, checklistA);
        domMostrarTareas(proyectoElegido);
    };

    function llamarEliminarTarea() {
        if (window.confirm(`¿Realmente querés Eliminar la Tarea: ${proyectos[proyectoElegido].tareas[numeroTarea].titulo}?`)) {
            eliminarTarea(proyectoElegido, numeroTarea);
            domMostrarTareas(proyectoElegido);
        };
    };

    const tarjetaAeditar = document.querySelector(`#tarea${numeroTarea}`);

    tarjetaAeditar.querySelectorAll("*").forEach(elemento=>elemento.remove());

    const formulario = document.createElement("div");
    formulario.classList.add("formularioVerEditar");
    
    const labelTitulo = document.createElement("label");
    labelTitulo.setAttribute("for", "titulo");
    labelTitulo.textContent = "Titulo:";
    labelTitulo.classList.add('labelTitulo');
    formulario.appendChild(labelTitulo);

    const inputTitulo = document.createElement("input");
    inputTitulo.setAttribute("type", "text");
    inputTitulo.setAttribute("id", "titulo");
    inputTitulo.setAttribute("required", true);
    inputTitulo.value = proyectos[proyectoElegido].tareas[numeroTarea].titulo;
    formulario.appendChild(inputTitulo);

    // Fieldset de Prioridad:
    const fieldsetPrioridad = document.createElement("fieldset");
    fieldsetPrioridad.classList.add('fieldsetPrioridad');

    const leyendaPrioridad = document.createElement("legend");
    leyendaPrioridad.textContent = "Prioridad:";
    leyendaPrioridad.classList.add('leyendaPrioridad');
    fieldsetPrioridad.appendChild(leyendaPrioridad);

    const divAlta = document.createElement("div");

    const labelAlta = document.createElement("label");
    labelAlta.setAttribute("for", "alta");
    labelAlta.textContent = "Alta";
    divAlta.appendChild(labelAlta);

    // setAttribute("name", `prioridad${numeroTarea}`) es para q cuando hay más d una tarea editándose, no tengan el mismo name.
    const inputRadioAlta = document.createElement("input");
    inputRadioAlta.setAttribute("type", "radio");
    inputRadioAlta.setAttribute("id", "alta");
    inputRadioAlta.setAttribute("name", `prioridad${numeroTarea}`);
    inputRadioAlta.setAttribute("value", "alta");
    if (proyectos[proyectoElegido].tareas[numeroTarea].prioridad === "Alta") {
        inputRadioAlta.setAttribute("checked", true);
    };
    divAlta.appendChild(inputRadioAlta);

    const divMediana = document.createElement("div");

    const labelMediana = document.createElement("label");
    labelMediana.setAttribute("for", "mediana");
    labelMediana.textContent = "Mediana";
    divMediana.appendChild(labelMediana);

    const inputRadioMediana = document.createElement("input");
    inputRadioMediana.setAttribute("type", "radio");
    inputRadioMediana.setAttribute("id", "mediana");
    inputRadioMediana.setAttribute("name", `prioridad${numeroTarea}`);
    inputRadioMediana.setAttribute("value", "mediana");
    if (proyectos[proyectoElegido].tareas[numeroTarea].prioridad === "Mediana") {
        inputRadioMediana.setAttribute("checked", true);
    };
    divMediana.appendChild(inputRadioMediana);

    const divBaja = document.createElement("div");

    const labelBaja = document.createElement("label");
    labelBaja.setAttribute("for", "baja");
    labelBaja.textContent = "Baja";
    divBaja.appendChild(labelBaja);

    const inputRadioBaja = document.createElement("input");
    inputRadioBaja.setAttribute("type", "radio");
    inputRadioBaja.setAttribute("id", "baja");
    inputRadioBaja.setAttribute("name", `prioridad${numeroTarea}`);
    inputRadioBaja.setAttribute("value", "baja");
    if (proyectos[proyectoElegido].tareas[numeroTarea].prioridad === "Baja") {
        inputRadioBaja.setAttribute("checked", true);
    };
    divBaja.appendChild(inputRadioBaja);

    fieldsetPrioridad.appendChild(divAlta);
    fieldsetPrioridad.appendChild(divMediana);
    fieldsetPrioridad.appendChild(divBaja);
    formulario.appendChild(fieldsetPrioridad);
    // Fin Fieldset de Prioridad.

    const labelDescripcion = document.createElement("label");
    labelDescripcion.setAttribute("for", "descripcion");
    labelDescripcion.classList.add('labelDescripcion');
    labelDescripcion.textContent = "Descripción:";
    formulario.appendChild(labelDescripcion);

    const textAreaDescripcion = document.createElement("textarea");
    textAreaDescripcion.setAttribute("id", "descripcion");
    textAreaDescripcion.value = proyectos[proyectoElegido].tareas[numeroTarea].descripcion;
    formulario.appendChild(textAreaDescripcion);

    const labelVencimiento = document.createElement("label");
    labelVencimiento.setAttribute("for", "vencimiento");
    labelVencimiento.classList.add('labelVencimiento')
    labelVencimiento.textContent = "Vencimiento:";
    formulario.appendChild(labelVencimiento);

    const inputDateVencimiento = document.createElement("input");
    inputDateVencimiento.setAttribute("type", "date");
    inputDateVencimiento.setAttribute("id", "vencimiento");
    inputDateVencimiento.value = format(proyectos[proyectoElegido].tareas[numeroTarea].vencimiento, "yyyy-MM-dd");
    formulario.appendChild(inputDateVencimiento);

    const labelNotas = document.createElement("label");
    labelNotas.setAttribute("for", "notas");
    labelNotas.classList.add('labelNotas');
    labelNotas.textContent = "Notas:";
    formulario.appendChild(labelNotas);

    const textAreaNotas = document.createElement("textarea");
    textAreaNotas.setAttribute("id", "notas");
    textAreaNotas.value = proyectos[proyectoElegido].tareas[numeroTarea].notas;
    formulario.appendChild(textAreaNotas);
    
    const comandoFormulario = document.createElement('div');
    comandoFormulario.classList.add('comandoFormulario');

    const botonGuardarCambios = document.createElement("button");
    botonGuardarCambios.classList.add('guardarCambios');
    botonGuardarCambios.textContent = "Guardar Cambios";
    botonGuardarCambios.addEventListener("click", llamarGuardarCambios);
    comandoFormulario.appendChild(botonGuardarCambios);

    const botonEliminarTarea = document.createElement("button");
    botonEliminarTarea.classList.add('eliminarTarea');
    botonEliminarTarea.textContent = "Eliminar Tarea";
    botonEliminarTarea.classList.add("eliminarTarea");
    botonEliminarTarea.addEventListener("click", llamarEliminarTarea);
    comandoFormulario.appendChild(botonEliminarTarea);

    tarjetaAeditar.appendChild(formulario);
    tarjetaAeditar.appendChild(comandoFormulario);
};

export {
    domNavProyectos,
    domMostrarTareasSueltas,
    domMostrarTareas,
    domCrearProyecto,
    domCrearTarea,
};

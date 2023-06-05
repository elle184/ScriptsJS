/**
 * Clase que se encarga de construir un mensaje, mostrarlo y ocultarlo.
 * 
 * @param JSON objMsj 
 */
function Mensaje(objMsj) {
    this.objMsj = objMsj;
    this.contenedorMsj = null;

    /*
     * Se valida si el contenedor de mensajes esta definido.
     */
    if (this.objMsj.idContenedorMsj != null && this.objMsj.idContenedorMsj != "") {
        this.contenedorMsj = document.getElementById(this.objMsj.idContenedorMsj);
    }
};

/**
 * Método encargado de abrir el contenedor de mensaje.
 */
Mensaje.prototype.abrir = function() {
    var clases = this.objMsj.posicionMensaje;

    //Se instancia el contenedor para el mensaje de texto.
    var msjTexto = document.getElementById("msjTexto");

    //Se crea un nuevo elemento de tipo parrafo.
    var parrafo = document.createElement("p");

    //Se crea un nuevo nodo de tipo texto que contendra el mensaje de respuesta.
    var texto = document.createTextNode(this.objMsj.respuesta);
    
    parrafo.appendChild(texto);
    msjTexto.appendChild(parrafo);

    if (this.objMsj.tipoMensaje == "success") {
        clases = clases.concat(" ").concat("cMsjExito");
    } else if (this.objMsj.tipoMensaje == "error") {
        clases = clases.concat(" ").concat("cMsjError");
    }

    this.contenedorMsj.setAttribute("class", clases);
    this.contenedorMsj.style.display = "block";
};

/**
 * Método encargado de cerrar el contenedor de mensaje.
 */
Mensaje.prototype.cerrar = function(cMsj) {
    document.getElementById("cerrar").onclick = function() {
        /*
         * Cuando se este cerrando el mensaje de texto, se borrará el mensaje 
         * que se imprimió.
         */
        document.getElementById("msjTexto").innerText = null;

        //Se oculta el contenedor de mensajes.
        document.getElementById(cMsj).style.display = "none";
    }
}
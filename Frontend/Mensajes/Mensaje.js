class Mensaje {
    /**
     * Constructor de la clase.
     * 
     * @param {String} eAccion: El elemento que genera la acción de mostrar el mensaje.
     * @param {String} cMensaje: El contenedor que mostrará los mensajes
     * @param {String} tipoMensaje: El tipo de mensaje a mostrar. Puede ser de éxito o de error.
     * @param {String} posicion: La posición en donde el programador desea que 
     * vaya situado el contenedor.
     */
    constructor(eAccion, cMensaje, tipoMensaje, posicion) {
        this.eAccion = document.getElementById(eAccion);
        this.aCerrar = document.getElementById(tipoMensaje);

        this.eAccion.onclick = function() {
            var contenedor =  document.getElementById(cMensaje);

            contenedor.style.display = "inline-block";
            contenedor.setAttribute("class", posicion);
        };

        this.aCerrar.onclick = function() {
            document.getElementById(cMensaje).style.display = "none";
        }
    }
}
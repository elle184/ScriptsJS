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
    constructor(eAccion, cMensaje, tipoMensaje, posicion, evento) {
        this.eAccion = document.getElementById(eAccion);
        this.aCerrar = document.getElementById(tipoMensaje);

        /*
         * Evento básico. Cuando se hace clic sobre un elemento que ejecuta
         * inmediatamente el contenedor de mensajes.
         */
        if (evento == "click") {
            if (this.eAccion !== null) {
                this.eAccion.onclick = function() {
                    var contenedor =  document.getElementById(cMensaje);

                    contenedor.style.display = "inline-block";
                    contenedor.setAttribute("class", posicion);

                    console.log("Ejecutado evento click");
                };
            }
        }

        /*
         * Evento luego de la ejecución de un formulario: Cuando se envia un 
         * formulario a procesar y retornar una respuesta.
         */
        if (evento == "submit") {
            if (this.eAccion !== null) {
                this.eAccion.onsubmit = function(e) {
                    e.preventDefault();
                    var contenedor = document.getElementById(cMensaje);

                    contenedor.style.display = "inline-block";
                    contenedor.setAttribute("class", posicion);

                    console.log("Ejecutado evento submit");
                };
            }
        }

        this.aCerrar.onclick = function() {
            document.getElementById(cMensaje).style.display = "none";
        }
    }
}
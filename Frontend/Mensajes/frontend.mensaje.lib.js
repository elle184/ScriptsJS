document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    var mensajeRespuesta = null;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            mensajeRespuesta = this.responseText;

            var objMensaje = new Mensaje(
                {   
                    "idContenedorMsj": "cMsj",
                    "tipoMensaje": "error",
                    "posicionMensaje": "TopRight",
                    "respuesta": mensajeRespuesta
                }
            );

            objMensaje.abrir();
            objMensaje.cerrar("cMsj");
        }
    }

    xhttp.open("POST", "respuesta.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}


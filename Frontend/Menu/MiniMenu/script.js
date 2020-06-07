window.onload = function() {
    //Objeto que contiene las opciones a desplegar.
    var objOpciones = document.getElementById("opciones");
    //Objeto que se encarga de la acción de visualizar/ocultar el menú de opciones.
    var objMenu = document.getElementById("menu");

    //Si el objeto esta definido, lo oculta para dar inicio a la interacción.
    if (objOpciones != null) { objOpciones.style.display = "none"; }

    //Se asigna el evento onclick a la opción que despliega el menú.
    objMenu.onclick = function() {
        //Verifica cual es el tipo de visualización que tiene el contenedor de opciones.
        switch (objOpciones.style.display) {
            case "none":
                objOpciones.style.display = "block";
                objOpciones.style.backgroundColor = "#FFF";
                objMenu.style.backgroundColor = "#FFF";
                break;
            case "block":
                objOpciones.style.display = "none";
                objMenu.style.backgroundColor = "#fff9de";
                break;
            default:
                break;
        }

        //Acá se agrega el posible posicionamiento del menu. Se puede dejar a la derecha o la izquierda.
        if (typeof posicion != undefined && posicion != null) {
            objOpciones.setAttribute("class", posicion);
        }
    }

    objOpciones.onblur = function() {
        if (objOpciones.style.display == "block") {
            objOpciones.style.display = "none";
            objMenu.style.backgroundColor = "#fff9de";
        }
    }
}
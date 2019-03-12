/**
 * Clase encargada de la creación de una nueva ventana modal.
 * 
 * @param String idElemento: El nombre del ID de la ventana emergente.
 * @param Object elementoDeAccion: Hace referencia al elemento que lleva a cabo
 * la acción de abrir la ventana modal.
 */
class Modal {
  /**
   * Constructor de la clase
   */
  constructor() {
    
  }

  /**
   * Método que se encargar de abrir una ventana modal.
   * 
   * @param Event.srcElement objeto: La información del elemento que realizará 
   * el llamado de la ventana modal.
   * @param String contenedorPopUp: El ID del contenedor que crea la ventana 
   * modal.
   */
  static abrirVentanaModal(objeto, contenedorPopUp) {
    //Se instancia el elemento de la ventana modal.
    this.elemento = document.getElementById(contenedorPopUp);

    //Si contenedor que tiene la acción de cerrar no esta definido, se instancia.
    if (this.divCerrar == null) {
      //Se crea un elemento de tipo div
      this.divCerrar = document.createElement("div");

      //Al elemento div se le agrega la clase CBtnCerrar
      this.divCerrar.setAttribute("class", "CBtnCerrar");

      //Se agrega el evento onclick para cerrar la ventana modal
      this.divCerrar.setAttribute("onclick", "Modal.cerrarVentanaModal()");

      //Se crea un nodo de tipo texto
      this.txtCerrar = document.createTextNode("Cerrar");

      //Se agrega al elemento div el nodo texto
      this.divCerrar.appendChild(this.txtCerrar);

      //Se agrega al contenedor de la ventana modal el elemento div creado.
      this.elemento.appendChild(this.divCerrar);
    }

    /*
     * Se crea un nuevo elemento de tipo div para el fondo que bloquea la 
     * pantalla.
     */
    var fondo = document.createElement("div");

    //Se crea un nuevo atributo de tipo id y se le agrega el valor fondoModal
    var atrEstiloFondo = document.createAttribute("id");
    atrEstiloFondo.value="fondoModal";
    fondo.setAttributeNode(atrEstiloFondo);
    fondo.style.display = "block";

    //Se agrega el elemento div creado a la pagina HTML
    document.body.appendChild(fondo);

    //Se visualiza la ventana modal.
    this.elemento.style.display = "block";
  }

  /**
   * Método que se encarga de cerrar una ventana modal.
   */
  static cerrarVentanaModal() {
    //Se oculta el fondo modal
    document.body.removeChild(document.getElementById("fondoModal"));

    //Se cierra la ventana modal
    this.elemento.style.display = "none";
  }
}
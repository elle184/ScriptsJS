/**
 * Libreria frontend para la gestión de ventanas emergentes.
 *
 * Esta libreria se encarga de manejar todos los eventos relacionados con la ventana emergente y la interacción entre
 * todos los elementos que lo componen.
 *
 * @author Adrian Francisco Becerra Arias - shogunato184@gmail.com
 */
window.onload = function() {
    //Se crea una nueva instancia para la ventana modal No. 1.
    var popUp1 = new Modal("contenedorPopUp", "btnMostrarPopUp", "btnCerrarPopUp");
    
    //Se crea una nueva instancia para la ventana modal No. 2.
    var popUp2 = new Modal("contenedorPopUp", "btnMostrarPopUp2", "btnCerrarPopUp2");

    /*
     * Se crea una nueva instancia para retornar un listado de elementos que 
     * necesitan tener su propia ventana emergente.
     */
    var clasePopUp = new Modal(
      "contenedorPopUp", 
      "BtnMostrarPopUp", 
      "BtnCerrarPopUp"
    );
    
    /*
     * Se agrega al evento onclick la función para abrir una ventana modal.
     */
      popUp1.getBtnElementoAbrir().onclick = function() {
        popUp1.abrirVentanaModal();
      }

      popUp1.getBtnElementoCerrar().onclick = function() {
        popUp1.cerrarVentanaModal();
      }

      popUp2.getBtnElementoAbrir().onclick = function() {
        popUp2.abrirVentanaModal();
      }

      popUp2.getBtnElementoCerrar().onclick = function() {
        popUp2.cerrarVentanaModal();
      }
  };
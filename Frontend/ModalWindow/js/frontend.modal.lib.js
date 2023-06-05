/**
 * Libreria frontend para la gestión de ventanas emergentes.
 *
 * Esta libreria se encarga de manejar todos los eventos relacionados con la ventana emergente y la interacción entre
 * todos los elementos que lo componen.
 *
 * @author Adrian Francisco Becerra Arias - shogunato184@gmail.com
 */
window.onload = function() {
    /*
     * Se crea una nueva instancia para retornar un listado de elementos que 
     * necesitan tener su propia ventana emergente.
     */
    var evPopUps = document.getElementsByClassName("BtnPopUp");

    if (evPopUps != null && evPopUps.length > 0) {
      for (p in evPopUps) {
        evPopUps[p].onclick = function(evento) {
            Modal.abrirVentanaModal(evento.srcElement, "contenedorPopUp");
        }
      }
    }
  };
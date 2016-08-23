window.onload = function() {
 	/*
     * Se declara una variable para obtener el elemento button que activara la
     * ventana emergente
     */
	var btnPopUp = document.getElementById("btnMostrarPopUp");
  
  /*
   * Se asigna al botón el evento onclick para abrir o cerrar la ventana 
   * emergente.
   */
  btnPopUp.onclick = function() {
    /*
     * Si la ventana emergente tiene el valor contenedorPopUp se le cambia por
     * contenedorPopUpMostrar.
     *
     * En caso contrario que la ventana emergente tenga el valor 
     * contenedorPopUpMostrar se le cambia por contenedorPopUp.
     */
    if (document.getElementById("contenedorPopUp") !== null) {
      document.getElementById("contenedorPopUp").id = "contenedorPopUpMostrar";
    } else {
      document.getElementById("contenedorPopUpMostrar").id = "contenedorPopUp";
    }
  };
};
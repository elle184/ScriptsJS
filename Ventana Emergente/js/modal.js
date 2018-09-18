/**
 * Clase encargada de la creación de una nueva ventana modal.
 *
 */
function Modal(idElemento, btnElementoAbrir, btnElementoCerrar) {
  this.elemento = document.getElementById(idElemento);
  this.btnElementoAbrir = document.getElementById(btnElementoAbrir);
  this.btnElementoCerrar = document.getElementById(btnElementoCerrar);
  
  //Estado inicial de una ventana modal.
  this.elemento.style.display = "none";
}

/**
 * Método que retorna el objeto del botón que se encarga de ejecutar la ventana emergente.
 */
Modal.prototype.getBtnElementoAbrir = function() {
  return this.btnElementoAbrir;
};

/**
 * Método que retorna el objeto del botón que se encarga de cerrar la ventana emergente.
 */
Modal.prototype.getBtnElementoCerrar = function() {
  return this.btnElementoCerrar;
};

/**
 * Método que se encargar de abrir una ventana modal.
 */
Modal.prototype.abrirVentanaModal = function() {
  var fondo = document.createElement("div");
  var atrEstiloFondo = document.createAttribute("id");
  atrEstiloFondo.value="fondoModal";
  fondo.setAttributeNode(atrEstiloFondo);
  document.body.appendChild(fondo);
  
  this.elemento.style.display = "block";
};

/**
 * Método que se encarga de cerrar una ventana modal.
 */
Modal.prototype.cerrarVentanaModal = function() {
  document.body.removeChild(document.getElementById("fondoModal"));
  this.elemento.style.display = "none";
};
/**
 * Clase encargada de la creación de una nueva ventana modal.
 * 
 * @param String idElemento: El nombre del ID de la ventana emergente.
 * @param String btnElementoAbrir: El nombre del ID/Class del botón que se 
 * encarga de abrir una ventana emergente.
 * @param String btnElementoCerrar: El nombre del ID/Class del botón que se 
 * encarga de cerrar una ventana emergente.
 */
function Modal(idElemento, btnElementoAbrir, btnElementoCerrar) {
  this.elemento = document.getElementById(idElemento);
  this.elemento.style.display = "none";

  this.btnElementoAbrir = document.getElementById(btnElementoAbrir);
  this.btnElementoCerrar = document.getElementById(btnElementoCerrar);
  
  /*
   * Valida si los botones para abrir las ventanas emergentes no son 
   * contenedores individuales y provienen de un listado de botones.
   */
  if (this.btnElementoAbrir === null || this.btnElementoAbrir == undefined) {
    this.btnElementoAbrir = document.getElementsByClassName(btnElementoAbrir);

    /*
     * Recorre cada botón de un listado de botones y les asigna un 
     * comportamiento de abrir la ventana emergente.
     */ 
    for (var i in this.btnElementoAbrir) {
      if (!isNaN(i)) {
        this.crearAbrirVentanaEmergente(this.btnElementoAbrir[i], idElemento);
      }
    }
  }
  
  /*
   * Valida si los botones para cerrar las ventanas emergentes no son 
   * contenedores individuales y provienen de un listado de botones.
   */
  if (this.btnElementoCerrar === null || this.btnElementoCerrar == undefined) {
    this.btnElementoCerrar = document.getElementsByClassName(btnElementoCerrar);

    /*
     * Se crean los eventos para cerrar las ventanas emergentes.
     */
    this.crearCerrarVentanaEmergente(this.btnElementoCerrar);
  }
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
  
  /*
   * Detalle de fina coqueteria. Añade el texto del nombre del botón presionado 
   * para que se evidencia el dinamismo de la ventana emergente.
   */
  this.insertarContenido("cParaVentanaEmergente", this.btnElementoAbrir.innerText);

  this.elemento.style.display = "block";
};

/**
 * Método que se encarga de cerrar una ventana modal.
 */
Modal.prototype.cerrarVentanaModal = function() {
  document.body.removeChild(document.getElementById("fondoModal"));
  this.elemento.style.display = "none";
};

/**
 * Método encargado de crear los eventos para abrir ventanas emergentes.
 */
Modal.prototype.crearAbrirVentanaEmergente = function(elementoClass, idElemento) {
  elementoClass.onclick = function(e) {
    var fondo = document.createElement("div");
    var atrEstiloFondo = document.createAttribute("id");
    atrEstiloFondo.value="fondoModal";
    fondo.setAttributeNode(atrEstiloFondo);
    document.body.appendChild(fondo);

    var elemento = document.getElementById(idElemento);

    /*
     * Detalle de fina coqueteria. Añade el texto del nombre del botón presionado 
     * para que se evidencia el dinamismo de la ventana emergente.
     */
    document.getElementById("cParaVentanaEmergente").innerHTML = e.srcElement.innerText;

    elemento.style.display = "block";
  }
};

/**
 * Método encargado de crear los eventos para cerrar ventanas emergentes.
 */
Modal.prototype.crearCerrarVentanaEmergente = function(elementoClass) {
  for (var i in elementoClass) {
    if (!isNaN(i)) {
      elementoClass[i].onclick = function(e) {
        document.body.removeChild(document.getElementById("fondoModal"));
        e.srcElement.parentElement.style.display = "none";        
      }
    }
  }
};

Modal.prototype.insertarContenido = function(contenedor, contenido) {
  document.getElementById(contenedor).innerHTML = contenido;
};
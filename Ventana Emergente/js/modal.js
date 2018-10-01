/**
 * Clase encargada de la creación de una nueva ventana modal.
 *
 */
function Modal(idElemento, btnElementoAbrir, btnElementoCerrar) {
  this.idElemento = idElemento;
  this.esElementoId = true;
  this.elemento = document.getElementById(idElemento);
  this.btnElementoAbrir = document.getElementById(btnElementoAbrir);
  this.btnElementoCerrar = document.getElementById(btnElementoCerrar);

  if (this.elemento === null || this.elemento == undefined) {
    this.elemento = document.getElementsByClassName(idElemento);
    this.esElementoId = false;

    for (i in this.elemento) {
      if (!isNaN(i)) {
        this.elemento[i].style.display = "none";
      }
    }

    if (this.btnElementoAbrir === null || this.btnElementoAbrir == undefined) {
      this.btnElementoAbrir = document.getElementsByClassName(btnElementoAbrir);
  
      for (var i in this.btnElementoAbrir) {
        if (!isNaN(i)) {
          this.crearAbrirVentanaEmergente(this.btnElementoAbrir[i]);
        }
      }
    }
    
    if (this.btnElementoCerrar === null || this.btnElementoCerrar == undefined) {
      this.btnElementoCerrar = document.getElementsByClassName(btnElementoCerrar);
  
      this.crearCerrarVentanaEmergente(this.btnElementoCerrar);
    }
  } else {
    //Estado inicial de una ventana modal.
    this.elemento.style.display = "none";
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

Modal.prototype.getEsElementoId = function() {
  return this.esElementoId;
}

Modal.prototype.getElemento = function() {
  return this.elemento;
}

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

Modal.prototype.crearAbrirVentanaEmergente = function(elementoClass) {
  elementoClass.onclick = function(e) {
    var fondo = document.createElement("div");
    var atrEstiloFondo = document.createAttribute("id");
    atrEstiloFondo.value="fondoModal";
    fondo.setAttributeNode(atrEstiloFondo);
    document.body.appendChild(fondo);

    var elementos = document.getElementsByClassName(e.srcElement.dataset.nombreclasepopup);

    for (var i in elementos) {
      if (!isNaN(i)) {
        console.log(e.srcElement.dataset.idbtnpopup);
        console.log(elementos[i].dataset.idpopup);
        if (e.srcElement.dataset.idbtnpopup == elementos[i].dataset.idpopup) {
          elementos[i].style.display = "block";
        }
      }
    }
  }
};

Modal.prototype.crearCerrarVentanaEmergente = function(elementoClass) {
  for (var i in elementoClass) {
    if (!isNaN(i)) {
      console.log(elementoClass[i]);
      elementoClass[i].onclick = function(e) {
        document.body.removeChild(document.getElementById("fondoModal"));
        e.srcElement.parentElement.style.display = "none";        
      }
    }
  }
};
window.onload = function() {
  function resaltar(evento) {
    if (evento.type == "mouseover") {
      this.style.backgroundColor = "blue";
    } else if (evento.type == "mouseout") {
      this.style.backgroundColor = "yellow";
    }
  }

  function eventoTeclado(evento) {
    console.log(evento);

    if (evento.type == "keypress") {
      console.log("KeyCode: " + evento.keyCode + " | CharCode: " + evento.charCode + " | Carácter: " + String.fromCharCode(evento.charCode));

      if (evento.keyCode == 19) {
        console.log("Guardando...");
      }

      if (evento.ctrlKey == true) {
        console.log("Ctrl presionado...");
      }
    }
  }

  document.getElementById("btnActivar").onmouseover = resaltar;
  document.getElementById("btnActivar").onmouseout = resaltar;
  document.getElementById("cuerpo").onkeypress = eventoTeclado;
}

function crearBoton() {
    var cuadroTexto = document.getElementById("cuadroTexto");
    cuadroTexto.style.display = "block";
    
    var nombreBoton = prompt("Ingrese el nombre del nuevo botón:");
    var enlace = prompt("Ingrese el enlace del nuevo botón:");
    var boton = document.createElement("button");
    boton.innerHTML = nombreBoton;
    boton.onclick = function () {
      window.location.href = enlace;
    };
    var contenedorBotones = document.getElementById("contenedorBotones");
    contenedorBotones.appendChild(boton);
  
    // Guardar el botón en el localStorage
    var botonesGuardados = JSON.parse(localStorage.getItem("botones")) || [];
    var nuevoBoton = {
      nombre: nombreBoton,
      enlace: enlace
    };
    botonesGuardados.push(nuevoBoton);
    localStorage.setItem("botones", JSON.stringify(botonesGuardados));
  
    cuadroTexto.value = "";
    cuadroTexto.style.display = "none";
  }
  
  function eliminarBoton() {
    var botonAEliminar = prompt("Ingrese el nombre del botón que desea eliminar:");
    var contenedorBotones = document.getElementById("contenedorBotones");
    var botones = contenedorBotones.getElementsByTagName("button");
    for (var i = 0; i < botones.length; i++) {
      if (botones[i].innerHTML === botonAEliminar) {
        contenedorBotones.removeChild(botones[i]);
      }
    }
  
    // Eliminar el botón del localStorage
    var botonesGuardados = JSON.parse(localStorage.getItem("botones")) || [];
    var indice = botonesGuardados.findIndex(function (boton) {
      return boton.nombre === botonAEliminar;
    });
    if (indice !== -1) {
      botonesGuardados.splice(indice, 1);
      localStorage.setItem("botones", JSON.stringify(botonesGuardados));
    }
  }
  
  window.onload = function () {
    /*var botonNuevo = document.getElementById("nuevoBoton");
    botonNuevo.onclick = function () {
      crearBoton();
    };*/
    var botonEliminar = document.getElementById("eliminarBoton");
    botonEliminar.onclick = function () {
      eliminarBoton();
    };
  
    // Cargar los botones guardados desde el localStorage
    var botonesGuardados = JSON.parse(localStorage.getItem("botones")) || [];
    for (var i = 0; i < botonesGuardados.length; i++) {
      (function () {
        var botonGuardado = botonesGuardados[i];
        var boton = document.createElement("button");
        boton.innerHTML = botonGuardado.nombre;
        boton.onclick = function () {
          window.location.href = botonGuardado.enlace;
        };
        var contenedorBotones = document.getElementById("contenedorBotones");
        contenedorBotones.appendChild(boton);
      })();
    }
  
    var cuadroTexto = document.getElementById("cuadroTexto");
    var botonCancelar = document.getElementById("botonCancelar");
  
    cuadroTexto.addEventListener("input", function() {
      if (cuadroTexto.value === "") {
        cuadroTexto.style.display = "none";
      }
    });
  
    botonCancelar.addEventListener("click", function() {
      cuadroTexto.style.display = "none";
    });
  };
  
  var botones = document.getElementsByClassName("boton-personalizado");
  
  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
      var padre = this.parentNode;
      padre.removeChild(this);
    });
  }
  
let miBoton = document.querySelector('button');
let texto = document.getElementById("texto");

function introducirContrasena() {
  let contrasena = prompt('Introduzca la contraseña');
  if (!contrasena && localStorage.getItem("contrasena") === null)
    introducirContrasena();
  else {
    if(contrasena){
      verificarContrasena(contrasena);
    }
    

  }
}

function verificarContrasena(contrasena) {
  if (contrasena === "Mi novio es hermoso") {
    localStorage.setItem('contrasena', contrasena);

    texto.innerHTML =
      "<b>Bienvenida a la busqueda de regalo 2.0 diseñada por el master crack de tu novio</b>" +
      "<br>Vas a tener pistas y vas a tener que ir ingresando los datos que obtengas." +
      "<br>PD: Te amo mucho." +
      "<br>" +
      "<br>Las pistas se van a ir complicando poco a poco." +
      "<br>" +
      "<br><b>Primera pista</b>: Donde todo comenzó, aunque distraida no lo veias. "

  } else {
    contrasena = prompt('Contraseña incorrecta, intente nuevamente:');
    if (!contrasena && localStorage.getItem("contrasena") === null){
      introducirContrasena();
    }
    else {
      if(contrasena){
        verificarContrasena(contrasena);
      }
    }
  }
  
}

if (!localStorage.getItem('contrasena')) {
  introducirContrasena();
}
else {
  let contrasena = localStorage.getItem('contrasena');
  verificarContrasena(contrasena);
};

miBoton.onclick = function () {
  introducirContrasena();
};
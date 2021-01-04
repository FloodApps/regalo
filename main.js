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
      "<img src='regalo.webp' class='regalo'>" +
      "<br>Vas a tener pistas y vas a tener que ir ingresando los datos que obtengas." +
      "<br>PD: Te amo mucho." +
      "<br>" +
      "<br>Las pistas se van a ir complicando poco a poco." +
      "<br>" +
      "<br><b>Primera pista</b>: Donde todo comenzó, aunque distraida no lo veias. "

  } else if (contrasena === "Haceme tuyo bb") {
    localStorage.setItem('contrasena', contrasena);

    texto.innerHTML =
      "<b>¡Muy bien! esta ves si lo viste xD</b>" +
      "<img src='foto1.jpg' class='foto1'>" +
      "<br>" +
      "<br><b>Segunda pista</b>: Algo que nunca abrirías... "
    
  } else if (contrasena === "Sos el amor de mi vida princesa hermosa") {
    localStorage.setItem('contrasena', contrasena);

    texto.innerHTML =
      "<b>En serio lo sos <3</b>" +
      "<img src='foto2.png' class='foto1'>" +
      "<br>" +
      "Ya estas cerca de encontrar el regalo" +
      "<br>" +
      "<br><b>Tercera pista</b>: Oro parece... "
    
  }else if (contrasena === "20/01/2019") {
    localStorage.setItem('contrasena', contrasena);

    texto.innerHTML =
      "<b>Quiero volver a ese momento...</b>" +
      "<br>" +
      "<video src='video.mp4' class='video1' controls></video>" +
      "<p class='centrado'> Que linda que estabas <3 (Y que estás siempre bebé)</p>" +
      "<br>La proxima pista es el regalo... estas preparada?" +
      "<br>" +
      "<br><b>Cuarta pista</b>: Ojo al piojo, esta es complicadeti, tenes que pensarla y buscar bien. Es algo que te gusta mucho hacer..."
    
  }else if (contrasena === "Mueve el totó") {
    localStorage.setItem('contrasena', contrasena);

    texto.innerHTML =
      "<b>Perdon por mentirte :(... esta vez posta es el regalo.</b>" +
      "<br>" +
      "Pero antes quiero decirte que no tenes una idea de lo felíz que me haces," +
      "de todo lo que agradezco que estés conmigo, porque sos maravillosa, el amor de mi vida " +
      "es poco decir, sos todo lo que cualquiera quisiera y siempre estas para mi, " + 
      "podemos pelear pero nunca dejo de amarte ni un poquito. <br>" +  
      "Te amo un montonaso, de aca hasta Jupiter, Venus, Saturno, y el más importante, Plutón. <3" +
      "<br> "+
      "<img src='foto3.jpg' class='foto1'>" +
      "<br><b>Última pista</b>: Si queremos ir a la playa, hay que encontrar mi ..."
    
  }else{
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
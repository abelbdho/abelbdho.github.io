function showPistas() {
  var x = document.getElementsByClassName("botonVentanita");
  for(var i = 0; i < x.length; i++){ 
  if (x[i].style.display == "none") {
    x[i].style.display = "inline";
    document.getElementById("btnMostrar").innerHTML = 'Ocultar pistas';
  } else {
    x[i].style.display = "none";
    document.getElementById("btnMostrar").innerHTML = 'Mostrar pistas';
  }
}

  var x2 = document.getElementsByClassName("botonVentanita2");
  for(var i = 0; i < x2.length; i++){
  if (x2[i].style.display == "none") {
    x2[i].style.display = "inline";
    document.getElementById("btnMostrar").innerHTML = 'Ocultar pistas';
  } else {
    x2[i].style.display = "none";
    document.getElementById("btnMostrar").innerHTML = 'Mostrar pistas';
  }
}
};
document.getElementById("btnMostrar").innerHTML = 'Lock';

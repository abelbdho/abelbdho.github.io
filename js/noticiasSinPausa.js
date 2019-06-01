/*Temporizador noticias mecanismo*/
	
	var timer = null;
	var cont = 0;
function bucle() {
  timer = setInterval(function(){
	  
	   var div = document.createElement('div');
		div.innerHTML = document.getElementById("bloque" + cont).innerHTML;
		document.getElementById("target").innerHTML = "";
		document.getElementById("target").appendChild(div);
		cont++;
		if(cont==3){
			cont = 0;
		}
	   
	   }, 2000);
};

window.onload = function start(){
    bucle();
}

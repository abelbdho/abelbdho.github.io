/*Temporizador noticias mecanismo*/
	
	var timer = null;
	var cont = 0;
function bucle() {
  timer = setInterval(function(){
	  
	   var div = document.createElement('div');
		div.innerHTML = document.getElementById("blockOfStuff" + cont).innerHTML;
		document.getElementById("targetElement").innerHTML = "";
		document.getElementById("targetElement").appendChild(div);
		cont++;
		if(cont==3){
			cont = 0;
		}
	   
	   }, 2000);
};

window.onload = function start(){
    bucle();
}

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

function pararBucle(){
	if(cont == 0 || cont == 1 || cont == 2 || cont == 3){
		clearInterval(timer);
		cont = 100;
	}else{
		cont = 0;
		bucle();
	}
	};
	


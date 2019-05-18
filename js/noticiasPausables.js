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

function pararBucle(){
	if(cont == 0 || cont == 1 || cont == 2 || cont == 3){
		clearInterval(timer);
		cont = 100;
	}else{
		cont = 0;
		bucle();
	}
	};
	
window.onload = function start(){
    bucle();
}

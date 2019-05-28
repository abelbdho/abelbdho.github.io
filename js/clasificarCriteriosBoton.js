
/*Clasficar criterios bien*/

function clasificar(){
	var rad = document.form.radioC
	var documento = document.cloneNode(true);
	
	for (var i = 0; i < rad.length; i++) {
        if(document.getElementById("r1").checked == true){
			document.innerHTML = documento.innerHTML;
			var criterio = document.getElementById("noD");
			var contenido = document.getElementById("contenido");
			contenido.innerHTML = "";
			var div = document.createElement('div');
			div.innerHTML = criterio.innerHTML;
			contenido.innerHTML += documento.getElementsByClassName("final")[0].outerHTML + documento.getElementById("script").outerHTML;
			
		}else if(document.getElementById("r2").checked == true){
			document.innerHTML = documento.innerHTML;
			var contenido = document.getElementById("contenido");
			contenido.innerHTML = "";
			var div = document.createElement('div');
			var elementos = documento.getElementsByClassName("A");
			for(i = 0; i < elementos.length; i++){
				div.innerHTML = elementos[i].innerHTML;
				contenido.innerHTML+= div.outerHTML + "<br>";
			}
			contenido.innerHTML += documento.getElementsByClassName("final")[0].outerHTML + documento.getElementById("script").outerHTML;
			
		}else if(document.getElementById("r3").checked == true){
			document.innerHTML = documento.innerHTML;
			var contenido = document.getElementById("contenido");
			var criterio = document.getElementById("noD");
			contenido.innerHTML = "";
			var div = document.createElement('div');
			var elementos2 = documento.getElementsByClassName("AA");
			for(i = 0; i < elementos2.length; i++){
				div.innerHTML = elementos2[i].innerHTML;
				contenido.innerHTML+= div.outerHTML + "<br>";
			}
			contenido.innerHTML += documento.getElementsByClassName("final")[0].outerHTML + documento.getElementById("script").outerHTML;
			
		}else if(document.getElementById("r4").checked == true){
			document.innerHTML = documento.innerHTML;
			var contenido = document.getElementById("contenido");
			contenido.innerHTML = "";
			var div = document.createElement('div');
			var elementos = documento.getElementsByClassName("A");
			for(i = 0; i < elementos.length; i++){
				div.innerHTML = elementos[i].innerHTML;
				contenido.innerHTML+= div.outerHTML + "<br>";
			}
			var elementos2 = documento.getElementsByClassName("AA");
			for(i = 0; i < elementos2.length; i++){
				div.innerHTML = elementos2[i].innerHTML;
				contenido.innerHTML+= div.outerHTML + "<br>";
			}
			contenido.innerHTML += documento.getElementsByClassName("final")[0].outerHTML + documento.getElementById("script").outerHTML;
		}
}
	
	};

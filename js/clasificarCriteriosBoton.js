
/*Clasficar criterios bien*/

function clasificar(){
	var rad = document.form.radioC
	var documento = document.cloneNode(true);
	
	for (var i = 0; i < rad.length; i++) {
        if(document.getElementById("r1").checked == true){
			document.innerHTML = documento.innerHTML;
			var contenido = document.getElementById("contenido");
			contenido.innerHTML = "";
			contenido.innerHTML += documento.getElementsByClassName("final")[0].outerHTML;
			
		}else if(document.getElementById("r2").checked == true){
			document.innerHTML = documento.innerHTML;
			var contenido = document.getElementById("contenido");
			contenido.innerHTML = "";
			var elementos = documento.getElementsByClassName("A");
			for(i = 0; i < elementos.length; i++){
				contenido.innerHTML+= elementos[i].outerHTML + "<br>";
			}
			contenido.innerHTML += documento.getElementsByClassName("final")[0].outerHTML;
			
		}else if(document.getElementById("r3").checked == true){
			document.innerHTML = documento.innerHTML;
			var contenido = document.getElementById("contenido");
			contenido.innerHTML = "";
			var elementos2 = documento.getElementsByClassName("AA");
			for(i = 0; i < elementos2.length; i++){
				contenido.innerHTML+= elementos2[i].outerHTML + "<br>";
			}
			contenido.innerHTML += documento.getElementsByClassName("final")[0].outerHTML;
			
		}else if(document.getElementById("r4").checked == true){
			document.innerHTML = documento.innerHTML;
			var contenido = document.getElementById("contenido");
			contenido.innerHTML = "";
			var elementos = documento.getElementsByClassName("A");
			for(i = 0; i < elementos.length; i++){
				contenido.innerHTML+= elementos[i].outerHTML + "<br>";
			}
			var elementos2 = documento.getElementsByClassName("AA");
			for(i = 0; i < elementos2.length; i++){
				contenido.innerHTML+= elementos2[i].outerHTML + "<br>";
			}
			contenido.innerHTML += documento.getElementsByClassName("final")[0].outerHTML;
		}
}
	
	};

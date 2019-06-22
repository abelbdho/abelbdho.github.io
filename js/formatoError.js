var cont = 0;
function formato(campo, obj) 
   {
     if (campo.value == parseInt(campo.value, 10) && cont == 0){
		 cont++;
		var div = document.createElement('div');
		div.setAttribute('class', 'avisoOblig');
		div.innerHTML = document.getElementById("blockOfStuffX").innerHTML;
		document.getElementById(obj).appendChild(div);
	}
    }; 
    
var cont2 = 0;
function formato2(campo, obj) 
   {
	   
	 if(typeof campo === 'string'){
		 campo = document.getElementById(campo);
		 }
     if (campo.value.length == 0 && cont2 == 0){
		 cont2++;
		var div = document.createElement('div');
		div.setAttribute('class', 'avisoOblig');
		div.innerHTML = document.getElementById("blockOfStuffX").innerHTML;
		document.getElementById(obj).appendChild(div);
	}
    };   

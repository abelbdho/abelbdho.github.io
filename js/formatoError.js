function formato(campo, obj) 
   {
     if (campo.value == parseInt(campo.value, 10)){
		var div = document.createElement('div');
		div.setAttribute('class', 'avisoOblig');
		div.innerHTML = document.getElementById("blockOfStuffX").innerHTML;
		document.getElementById(obj).appendChild(div);
	}
    };   

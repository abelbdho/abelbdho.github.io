function getRandom()
		{
			return (Math.floor(Math.random()*5))
		}
		
		var array = [];
		for(i = 0; i < 5; i++){
		var div = document.createElement('div');
		div.setAttribute('class', 'bloquesAleatorios');
		var numeroRandom = getRandom();
		while(array.includes(numeroRandom)){
			numeroRandom = getRandom();
		}
		array.push(numeroRandom);
		div.innerHTML = document.getElementById("blockOfStuff" + numeroRandom).innerHTML;
		document.getElementById("targetElement" + i).appendChild(div);
	}

	
/*VIDEO DE AUDIODESCRIPCION --------------------------*/	

	function activar(){
		document.getElementById("videoC").disabled = false;
		document.getElementById("videoC").hidden = false;
		document.getElementById("videoS").disabled = true;
		document.getElementById("videoS").hidden = true;
		document.getElementById("adBotonAct1").disabled = true;
		document.getElementById("adBotonAct2").disabled = false;
		document.getElementById("videoS").pause();
		};
	
	function desactivar(){
		document.getElementById("videoS").disabled = false;
		document.getElementById("videoS").hidden = false;
		document.getElementById("videoC").disabled = true;
		document.getElementById("videoC").hidden = true;
		document.getElementById("adBotonAct2").disabled = true;
		document.getElementById("adBotonAct1").disabled = false;
		document.getElementById("videoC").pause();
		};	

	var video = document.getElementById("videoC");
	var audioDescripcion = document.getElementById("audiodescripcion");
	video.onplay  = function() {
		audiodescripcion.currentTime = video.currentTime;
		audioDescripcion.play();  }
	video.onpause = function() { audioDescripcion.pause(); }
	
/*---------------------------------------------------------*/

/*Mecanismo de boton automatico*/
$(document).ready(function() {
   var cancion = document.getElementById('cancion');
var botonAuto = document.getElementById('botonAuto');

function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
   } else {
      song.pause();
   }
}

function reset(btn, song){
   song.pause();
   song.currentTime = 0;
}

function progress(btn, song){
   setTimeout(function(){
      var end = song.duration; 
      var current = song.currentTime;
      
      if(current==end){
         reset(btn, song);
      }
      
      progress(btn, song);     
   }, 1000);
}

activador.addEventListener('click', function(){
	playPause(cancion);
	});

botonAuto.addEventListener('click', function(){
   playPause(cancion);
   progress(botonAuto, cancion);
});

});

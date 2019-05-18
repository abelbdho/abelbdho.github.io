
/*Doble scroll en páginas*/

var body = document.body,
var overlay = document.querySelector('.overlay'),
var overlayBtts = document.querySelectorAll('button[class$="overlay"]');
        
    /*Array literal, no puede ser sobreescrito. Del array literal que crea un foreach de overlayBtts, llamando al metodo call del foreach y mandando overlayBtts se llama a la funcion con cada uno de los botones*/
    /*Call permite a un objeto usar un metodo de otro.*/
    [].forEach.call(overlayBtts, function(btt) {

      btt.addEventListener('click', function() { 
         var overlayOpen = this.className === 'botonVentanita';
         
         /*El elemento y sus descendientes no son visibles*/
         overlay.setAttribute('aria-hidden', !overlayOpen);
         /*Usar classList es una forma práctica de acceder a la lista de clases de un elemento como una cadena de texto delimitada por espacios y con toggle se "alternan"*/
         body.classList.toggle('noscroll', overlayOpen);
         
         /*Se resetea por error en navegadore smovil*/
         overlay.scrollTop = 0;
      }, false);

    });
    

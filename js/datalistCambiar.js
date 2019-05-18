/*Cambio de estado en formulario*/

function eleccion() {
    var val = document.getElementById("input").value;
    var opts = document.getElementById("datalist").childNodes;
    var div = document.createElement('div');
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
		div.innerHTML = document.getElementById(opts[i].value).innerHTML;
		document.getElementById("targetElement").appendChild(div);
        break;
      }
    }
  }

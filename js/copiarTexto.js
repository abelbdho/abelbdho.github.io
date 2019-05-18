/*COPIAR*/
function funcionCopiar() {
  var copyText = document.getElementById("campoCopiar");
  copyText.select();
  document.execCommand("copy");
}

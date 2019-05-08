var p = new Punto();
 document.getElementById('cp').addEventListener('click', nuevoPunto);

 function nuevoPunto() {
     var x = document.getElementById('x').value;
     var y = document.getElementById('y').value;
     document.getElementById('res').innerHTML = p.calcularDistancia(x, y);
}
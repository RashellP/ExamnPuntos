document.getElementById('cp').addEventListener('click', nuevoP);
var nP = new punto;
function nuevoP(){
    let nX = new punto(document.getElementById('x').value);
    nP.agregar(nX);
    let nY = new punto(document.getElementById('y').value);
    nP.agregar(nY);
    console.log(nX);
    console.log(nY);
}
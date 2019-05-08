class Punto{
    constructor(){
        this.distancia = 0;
        this.puntoX = null;
        this.puntoY = null;
    }
    calcularDistancia(pX, pY){
        if (this.puntoX == null && this.puntoY == null) {
            this.puntoX = pX;
            this.puntoY = pY;
            return this.distancia;
        }
        else{
            this.distancia += Math.sqrt((pX - this.puntoX) + (pY - this.puntoY));
            this.puntoX = pX;
            this.puntoY = pY;
            return this.distancia;
        }
    }
}
class punto{
        constructor(distancia){
            this.distancia = distancia;
            this.puntoX = null;
            this.puntoY = null;
        }
        setpX(puntoX){
            this.puntoX = puntoX;
        }
        setpY(puntoY){
            this.puntoY = puntoY;
        }
        getpX(){
            return this.puntoX;
        }
        gepY(){
            return this.puntoY;
        }
}
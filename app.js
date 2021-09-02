class Entorno{
    constructor(estado, localizacion){
        this.estado = estado;
        this.localizacion = localizacion;
    }
}

class Aspiradora{
    constructor(entorno){
        this.rendimiento = 0;
        this.entornoPrevio = "";
        this.entorno = entorno;
    }

    moverDerecha = () =>{
        this.rendimiento -= 1;
        this.localizacion = "B";
    }
    moverIzquierda = () =>{
        this.rendimiento -=1;
        this.localizacion = "A";
    }
    aspirar = () =>{
        this.rendimiento += 5;
        this.entorno.estado = "Limpio";
    }
    agenteActivo = () =>{
        if(this.entorno.estado == "Sucio"){
            this.entornoPrevio = this.entorno;
            this.aspirar();
            
        }
        else{
            if(this.localizacion == "B"){
                if(this.entornoPrevio == "Sucio"){
                    this.moverIzquierda();
                }
            }
            else{
                if(this.localizacion == "A"){
                    if(this.entornoPrevio == "Sucio"){
                        this.moverDerecha();
                    }
                }
            }
        }
    } 
}

let e = new Entorno("Sucio", "A");
let a = new Aspiradora(e);

console.log("Estado: " + a.entorno.estado);
console.log("Localización: " + a.entorno.localizacion);
a.agenteActivo();
console.log("Se activa la aspiradora");
console.log("Estado: " + a.entorno.estado);
console.log("Localización: " + a.entorno.localizacion);
console.log("Rendimiento: " + a.rendimiento);

console.log("------------------------------------------------")
a.entorno.estado = "Limpio"
a.entorno.localizacion = "A"
console.log("Estado: " + a.entorno.estado);
console.log("Localización: " + a.entorno.localizacion);
a.agenteActivo();
console.log("Se activa la aspiradora");
console.log("Estado: " + a.entorno.estado);
console.log("Localización: " + a.entorno.localizacion);
console.log("Rendimiento: " + a.rendimiento);

console.log("------------------------------------------------")
a.entorno.estado = "Sucio"
a.entorno.localizacion = "B"
console.log("Estado: " + a.entorno.estado);
console.log("Localización: " + a.entorno.localizacion);
a.agenteActivo();
console.log("Se activa la aspiradora");
console.log("Estado: " + a.entorno.estado);
console.log("Localización: " + a.entorno.localizacion);
console.log("Rendimiento: " + a.rendimiento);

console.log("------------------------------------------------")
a.entorno.estado = "Limpio"
a.entorno.localizacion = "B"
console.log("Estado: " + a.entorno.estado);
console.log("Localización: " + a.entorno.localizacion);
a.agenteActivo();
console.log("Se activa la aspiradora");
console.log("Estado: " + a.entorno.estado);
console.log("Localización: " + a.entorno.localizacion);
console.log("Rendimiento: " + a.rendimiento);
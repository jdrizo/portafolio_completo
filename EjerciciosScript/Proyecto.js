class Estacionamiento{
    constructor(Nombre, Direccion){
        this._Nombre=Nombre;
        this._Direccion=Direccion;
    }

    set Nombre(Nombre){
        this._Nombre=Nombre;
    }

    get Nombre(){
        return this._Nombre;
    }

    set Direccion(Direccion){
        this._Direccion=Direccion;
    }   

    get Direccion(){
        return this._Direccion;
    }
}

class Parqueadero extends Estacionamiento{
    constructor (Nombre, Direccion, Tipo, Estado){
        super(Nombre, Direccion);
        this._Tipo=Tipo;
        this._Estado=Estado;

    }

    set Tipo(Tipo){
        this._Tipo=Tipo;
    }

    get Tipo(){
        return this._Tipo;
    }

    set Estado(Estado){
        this._Estado=Estado;
    }

    get Estado(){
        return this._Estado;
    }

}

Parq=new Parqueadero('soacha','clle 32b # 34-54','Publico', 'Abierto');

console.log(Parq);

// ------------------- COMPOSICION ---------------------

class Parq{
    constructor(Prq){
        this._Prq=Prq;
    }
}

var pq1=new Estacionamiento();
var pq2=new Estacionamiento(); 
var misitio=[];
misitio.push(pq2);
misitio.push(pq1);
milugar=new Parq(misitio);
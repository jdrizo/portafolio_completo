var persona=new Object();

persona.nombre='Juan';
persona.apellido='Bautista';
persona.mostrar=function(){
    return nombre+ '' +apellido;
}

persona.telefono=3129382939; 


//2da forma de generar objetos en JS 
//JSON= java script object notation

var alumno={
    nombre:'Pedro',
    apellido:'Diaz',
    nombreCompleto:function(){
        return this.nombre +' '+this.apellido;
    }
};

console.log(alumno.nombreCompleto());
console.log(alumno.nombre);
console.log(alumno.apellido);

//acceso con operador llave

console.log(alumno['nombreCompleto']);
console.log(alumno['nombre']);
console.log(alumno['apellido']);

//recorrer claves de objeto con for in 

for (atributo in alumno ){
    console.log(atributo);
}

//convertir valores de objeto en array

var arreglo=Object.values(alumno);

console.log(arreglo)

//3ra forma de trabajar con objetos en JS 

function Aprendiz(nombre, apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.nombreCompleto=function(){
        
    }
}

//console.log(typeof(alumno));
//actividad fracciones 

var frac={
    n1:1,
    n2:2,
    d1:2,
    d2:3,
    suma:function(){
        numeradorS1=this.n1 * this.d2;
        numeradorS2=this.n2 * this.d1;
        numeradorSF=numeradorS1 + numeradorS2;
        denominadorS=this.d1 * this.d2;
        return 'el resultado de la suma es '+ numeradorSF + ' / ' + denominadorS;
    },
    resta:function(){
        numeradorR1=this.n1 * this.d2;
        numeradorR2=this.n2 * this.d1;
        numeradorRF=numeradorS1 - numeradorS2;
        denominadorR=this.d1 * this.d2;
        return 'el resultado de la resta es '+ numeradorRF + ' / ' + denominadorR;
    },
    multi:function(){
        numeradorM1=this.n1 * this.n2;
        numeradorM2=this.d1 * this.d2;
        return 'el resultado de la multiplicacion es '+ numeradorM1 + ' / ' +numeradorM2;
    },
    divi:function(){
        numeradorD1=this.n1 * this.d2;
        numeradorD2=this.n2 * this.d1;
        return 'el resultado de la division es '+ numeradorD1 + ' / ' +numeradorD2;
    }
}

console.log(frac.suma());

console.log(frac.resta());

console.log(frac.multi());

console.log(frac.divi());

// var num=100;
// console.log(typeof(num));
// var t='palabra';
// console.log(typeof(t));

//4ta forma de crear un objeto
class Estudiante{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
function llenarVector(vector, tam){
    for (let i = 0; i < tam; i++) {
     vector.push(Math.round(Math.random()*11));
    }
    return vector;
   }
                       
   let vec=new Array();
                       
   let x=6;
                       
   document.write('<b> VECTOR: </b>'+llenarVector(vec,x));
                     
   document.write('<br><br>');
                       
   //hoisting
                       
   var sumaVector=(vector)=>{
                       
   let suma=0;
                       
    for (let i = 0; i < vector.length; i++) {
           suma += vec[i];
    }
     return suma;
    }
                       
   document.write('<b> SUMA: </b> La suma de los valores del vector es .. ' +sumaVector(vec));
                     
   document.write('<br><br>');
                       
   var promedioVector=(vector)=>{
                       
   let suma=0;
   let prom=0;
                       
    for (let i = 0; i < vector.length; i++) {
           suma += vec[i];
           prom =Math.floor(suma / vector.length);
    }
    return prom;
    }
                       
   document.write('<b> PROMEDIO: </b> El promedio de los valores del vector es .. '+promedioVector(vec));
                     
   document.write('<br><br>');
                       
   var nMayorVector=(vector)=>{
                       
   let mayor=0;
                       
    for (let i = 0; i < vector.length; i++) {
       mayor=Math.max(...vec);
    }
    return mayor;
    }
                       
   document.write('<b> NUMERO MAYOR: </b> El numero mayor de los valores del vector es .. '+nMayorVector(vec));
                     
   document.write('<br><br>');
                       
   var nMenorVector=(vector)=>{
                       
   let menor=0;
                       
    for (let i = 0; i < vector.length; i++) {
       menor=Math.min(...vec);
    }
    return menor;
    }
                       
   document.write('<b> NUMERO MENOR: </b> El numero menor de los valores del vector es .. '+nMenorVector(vec));
                     
   document.write('<br><br>');
                       
   var MedianaVector=(vector)=>{
                       
    for (let i = 0; i < vector.length; i++) {
                              
     if(vector.length%2 === 0){
         index = vec.length/2; 
         let valor1 = vec[index];
         let valor2 = vec[index-1];
         mediana = (valor1 + valor2)/2;
     }else{
         index = vec.length/2; 
         index = Math.floor(index);
         mediana = vec[index];
     }
    return mediana;
    } 
                       
     }
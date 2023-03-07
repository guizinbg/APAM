// This is a JavaScript file
function teste(){
  alert("Olá Mundo");
}


function calcularconsumo(){

var km, gas, consumo

 km = document.getElementById('km').value
 gas = document.getElementById('gas').value

 consumototal = km / gas
 
let frase = `O Consumo de Gasolina por KM é de: ${consumototal}KM/L`;

document.querySelector('h2').innerHTML= frase;
alert(consumototal);
}





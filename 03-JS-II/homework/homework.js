// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x >= y) {
    return x;
  }else {
    return y;
  }
}

function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return "Allowed";
  }else {
    return "Not allowed";
  }
}
  
function conection(status) {
  if (status == 1) {
    return "Online";
  } else if (status == 2) {
    return "Away";
  } else {
    return "Offline";
  }
}

function saludo(idioma) {
  /*
  if (idioma == "aleman") {
    return "Guten Tag!";
  } else if (idioma == "mandarin"){
    return "Ni Hao!";
  } else if (idioma == "ingles") {
    return "Hello!" 
  } else if( (idioma != "aleman" && idioma != "mandarin" && idioma != "ingles") || idioma == undefined) {
    return "Hola!";
  }*/

  switch (idioma) {
    case "aleman":
      return "Guten Tag!";
      break;
    case "mandarin":
      return "Ni Hao!";
      break;
    case "ingles":
      return "Hello!";
      break;
    case undefined:
      return "Hola!";
      break;
  
    default:
      return "Hola!";
      break;
  }
}

function colors(color) {
  switch (color) {
    case "blue":
      return "This is blue";
      break;
    case "red":
      return "This is red";
      break;
    case "green":
      return "This is green";
      break;
    case "orange":
      return "This is orange";
      break;
  
    default:
      return "Color not found";
      break;
  }
}

function esDiezOCinco(numero) {
  if (numero == 10 || numero ==5) {
    return true;
  }else {
    return false;
  }
}

function estaEnRango(numero) {
  /*
  if (numero < 50 && numero > 20) {
    return true;
  }else {
    return false;
  }*/
  
  return numero < 50 && numero > 20 ? true : false;
}

function esEntero(numero) {
  return Math.floor(numero) == numero ? true : false;
}

function fizzBuzz(numero) {
  let salida = '';
  if (numero % 3 == 0) {
    salida = "fizz";
  } 

  if (numero % 5 == 0) {
    salida += "buzz";
  }

  if (salida == '') {
    salida = numero;
  }
   return salida; 
}

function operadoresLogicos(num1, num2, num3) { 
  if (num1 > num2 && num1 > num3 && num1 > 0 && num2 > 0 && num3 > 0) {
    return "Número 1 es mayor y positivo";
  }
  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  }
  if (num3 > num1 && num3 > num2 && num1 != 0 && num2 != 0 && num3 != 0) {
    return num3 + 1;
  }
  if (num1 == 0 || num2 == 0 || num3 == 0){
    return "Error";
  } 
  return false;
}

function esPrimo(numero) {
  if (numero == 0 || numero == 1){
    return false;
  } for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        return false;
      } 
    }
    return true;
  }


function esVerdadero(valor){
  if (valor == true){
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

function tablaDelSeis(){
  let tabla = [];
  for (let i = 0; i <= 10; i++){
    tabla.push(6 * i);  
  }
  return tabla;  
}

function tieneTresDigitos(numero){
  if (numero.toString().length == 3){
    return true;
  } else{
    return false
  }
}

function doWhile(numero) {
  let i = 0;
  do {
    i++;
    numero = numero + 5;
    
  } while (i < 8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};

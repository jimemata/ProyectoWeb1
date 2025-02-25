//operador suma
let numero1 = 25;
let numero2 = 75;
let texto = "Curso JavaScript";

//este carcter es un espacio en blanco &nbsp;
let texto2 = 'Cenfotec-Jimena';

//concatenacion de datos usando el signo +
document.write(numero1+numero2 + "<br>"); //resultado: 100
document.write(texto1+texto2 + "<br>"); //resultado: Curso JavaScript Cenfotec-Jimena
document.write(numero1+texto2 + "<br>"); //resultado: 25 Cenfotec-Jimena

//operador resta
let n1 = 24;
let n2 = 14;
let r = 0;
r = n1 - n2;
document.write(r + "<br>"); //resultado: 10
r = -r;
document.write(r + "<br>");//resultado: -10


//linea horizontal
document.write("<hr>");

let nume1 = 10;
let nume2 = 31;
let result = 0;

result = ++nume1;
document.write("El resultado es: " + result + " y número 1 es: " + nume1 + "<br>");//resultado es 11 y munero 1  ahora vale 11

result = --nume2;
document.write("El número 2 es: " + nume2 + " y resultado es: " + result + "<br>");//número 2vale 30 y resultado ahora es 30

//linea horizontal
document.write("<hr>");
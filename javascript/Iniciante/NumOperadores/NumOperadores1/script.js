
//numeros
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

//operadores
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//A ordem importa

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

//Operadores Aritméticos Unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

//Mesma coisa para o decremento --x

// Operadores Aritméticos Unários
// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

//  O - antes de um número torna ele negativo



//Exercícios

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // 35
console.log(total);

// Crie duas expressões que retornem NaN
var testFrase = 'blabla';
console.log(+testFrase);

var testNan = 80 / 'kg';
console.log(testNan);


// Somar a string '200' com o número 50 e retornar 250

var testString = '200';
var num = 50;
var totalTest = +testString + num;
console.log(totalTest)

// Incremente o número 5 e retorne o seu valor incrementado
var num5 = 5;
console.log(++num5);

// Como dividir o peso por 2?
var peso2 = +'80';
var unid = 'kg';
var pesoPor2 = peso2 / 2;
var totalTest2 = pesoPor2 + unid;
console.log(totalTest2);

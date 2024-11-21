function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(100));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(total);


/*
Parâmetros e Argumentos
Ao criar uma função, você pode definir parâmetros.

Ao executar uma função, você pode passar argumentos.
*/ 

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos
console.log(imc(80,1.80));
console.log(imc(60,1.70));




 /*Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também */

 //Parênteses executa a função

 function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita()); // retorna 'Você não gosta de nada'


//Argumentos podem ser funções
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima


//Pode ou não retornar um valor
//Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(70, 1.90); // retorna o imc
console.log(imc2(70, 1.90)); // retorna o imc e undefined



function terceiraIdade(idade){
  if (typeof idade !== 'number'){
    return 'repita e coloque um número'
  } else if (idade >= 60) {
  return true;
 } else {
  return false
 }
}
console.log(terceiraIdade(30))


//Exercícios

// Crie uma função para verificar se um valor é Truthy
function ehTruthy(x){
 if (x != false){
  return 'é truthy';
 } else{
  return 'nao é';
 }
}

console.log(ehTruthy(-5));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado){
  return lado * 4;
}
console.log(perimetro(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
  return nome + ' ' + sobrenome;

}
console.log(nomeCompleto('Lucas','Correia'));

// Crie uma função que verifica se um número é par
function ehpar(x){
  return x % 2===0;
}
console.log(ehpar(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function qualDado(dado){
  return typeof dado;
}
console.log(qualDado('oi'));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
  console.log('Lucas Correia');
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

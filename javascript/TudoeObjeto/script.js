//Tudo é Objeto
//Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'


//Números
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

//Funções
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1


//Elementos do DOM
var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

//Objetos revolucionaram a programação
//Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.





//Exercícios

// nomeie 3 propriedades ou métodos de strings
var nome = 'Lucas';

nome.length;
nome.toLocaleUpperCase();
nome.split();

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.addEventListener
btn.appendChild
btn.innerHTML
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

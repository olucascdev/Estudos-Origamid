const href1 = window.location.href



if(href1 === 'http://127.0.0.1:5500/javascript/DOM/OqueDom/index.html') {
  console.log('é igual');
}

const h1Select = document.querySelector('h1');
const h1Classes = h1Select.classList;

h1Select.addEventListener('click', function(){
  console.log('Clicou em', h1Select.innerText);
});


//Exercícios 

// Retorne o url da página atual utilizando o objeto window
console.log(window.location.href);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
console.log(document.querySelector('.ativo'));

// Retorne a linguagem do navegador
console.log(window.navigator.language);
// Retorne a largura da janela 
console.log(window.innerWidth);

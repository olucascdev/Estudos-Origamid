// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemItem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemItem);
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]')
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);



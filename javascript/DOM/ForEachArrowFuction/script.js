//forEach

//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs = document.querySelectorAll('p');

imgs.forEach(function(item){
  console.log(item);
});




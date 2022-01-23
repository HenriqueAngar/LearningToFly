    //IMAGENS E SONS DO JOGO

// variaveis imagens

let iFundo;
let iAviao;
let iUrubu;
let iAbutres;

// variaveis sons

let trilha;
let impacto;


function preload(){
  
  iFundo = loadImage("imagens/fundo.jpg");
  iAviao = loadImage("imagens/aviao.png");
  iUrubu = loadImage("imagens/urubu.png");
  iAbutres = [iUrubu,iUrubu, iUrubu, iUrubu, iUrubu, iUrubu]
  
  trilha = loadSound("sons/fly2.mp3");
  impacto = loadSound("sons/impacto.mp3");
  trilha.play();
  impacto.play();
}


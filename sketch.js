    // CODIGO PRINCIPAL

// variaveis

placar = 0;
let pontuacao = 0;

function setup() {
  createCanvas(900, 650);
  trilha.loop();
}

function draw() {
  background(iFundo);
  mostrarAviao();
  moverAviaoY();
  moverAviaoX();
  mostrarUrubus();
  moverUrubus();
  veColisao();
  mostraPlacar();
}

function mostraPlacar(){

    fill(color(255,140,0))
    textSize(40)
    text("Impactos: "+placar+" || Pontuação: "+pontuacao,25,40)
}

let contador = 0;

setInterval(function(){

  if(pontuacao<=1024){pontuacao++;}
  else{pontuacao = 1024;}

}, 300)
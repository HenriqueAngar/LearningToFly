    // CÓDIGO DO AVIÃO

// variaveis aviao

let sizeX= 75;
let sizeY = 50;
let xaviao = 100;
let yaviao = 550;

// variavel colisao

let colisao = false;


function mostrarAviao(){
  
  image(iAviao,xaviao,yaviao,sizeX,sizeY);
}

function moverAviaoY(){
  
  if(keyIsDown(UP_ARROW)){
    if(yaviao>0){
      yaviao -= 5;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yaviao<430){
    yaviao += 5;
    }
  }

}

function moverAviaoX(){
  
  if(keyIsDown(RIGHT_ARROW)){
    if(xaviao<600){
    xaviao += 5;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(xaviao>5){
    xaviao -= 5;
    }
  }
  
}

function veColisao(){
  for(a=0; a < iAbutres.length ; a++ ){
    colisao = collideRectCircle(xurubu[a], yurubu[a], dimensaox, dimensaoy, xaviao, yaviao, sizeY)
    
    if (colisao){
      crash()
    }
  }
}

function crash(){
  xaviao = 100;
  yaviao = 550;
  placar ++;
  pontuacao -= 8;
  impacto.play();
}
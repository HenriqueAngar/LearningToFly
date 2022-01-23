    // CÓDIGO DO URUBU

// variaveis urubus

let xurubu =   [700,800,700,900,700,700];
let yurubu =   [25,100,175,250,325,400];
let dimensaox= 50
let dimensaoy = 50;
let vUrubu = [1, 1.5, 3,4, 2.5, 2.2]

function mostrarUrubus(){
  for(a = 0; a < iAbutres.length ; a++ )
  image(iAbutres[a], xurubu[a], yurubu[a], dimensaox, dimensaoy)
}

function moverUrubus(){
  for(a = 0; a < iAbutres.length ; a++ ){
    if (xurubu[a] > -60){
    xurubu[a] -= vUrubu[a];
    }else{
      xurubu[a] = 850;
  }}
}
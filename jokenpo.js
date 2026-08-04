
let jogador1= "pedra";
let jogador2= "papel";


if(jogador1 == jogador2){
    console.log("empate !");
} 
else if(jogador1 == "pedra" && jogador2 == "papel"){
    console.log("jogador1 ganhou !")
}
else if(jogador1 == "papel" && jogador2 == "tesoura"){
    console.log("jogador2 ganhou !")
}
else if(jogador1 == "tesoura" && jogador2 == "pedra"){
    console.log("jogador2 ganhou!")
}
else if(jogador1 == "pedra" && jogador2 == "pedra"){
    console.log("empate !")
}
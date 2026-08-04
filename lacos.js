// for(let i =1; i <= 5; i++){
//     console.log(i);
// }

/// numero pares
// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }

/// numeros impar
// for(let i = 2; i <= 20; i += 2){
//     console.log(i);
// }

// tabuada
//  for(let i = 1; i <= 20; i ++){
//      console.log(`5 X ${i} = ${5 * i}`);
//}

for(let hora = 0; hora <= 23; hora ++){
    console.log(`Hora: ${hora}`);
}
 
for(let minuto = 0; minuto <= 23; minuto ++){
    console.log(`minuto: ${minuto}`);
}


// for(let hora = 0; hora <= 23; hora ++){

//     for(let minuto = 0; minuto <= 23; minuto ++){
    // console.log(`${hora}:${minuto}`);

// }

// for(let i = 1; i <= 10 ; i ++){

//     // para o laco
//     if(i == 5){
//         continue;
//          break;
//     }
//     console.log(i)
// }


let soma = 0;

for( let i = 1; i <=10; i++){
    soma += i
}
console.log(`soma fina e: ${soma}`)

let numero = 1;

while(numero <= 10){
    console.log(numero);
    numero++;
}

let contador =1;

do{
    console.log(contador);
    contador++;
} while (contador <= 3);
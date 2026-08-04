// pode votar
// não pode votar

if(idade < 16){
    console.log("não pode votar")
}else if(idade < 18){
    console.log("pode votar, mas não e obrigatório");
}else if(idade < 70){
    console.log("Voto obrigatório");
}else{
    console.log("pode votar, mas não e obrigatório")
}

idade = 20;
let acompanhante = false;

if(idade >= 18 || acompanhante){
    console.log("Pode entrar");
}else{
    console.log("não pode entrar");
}

let noem = "Maria";

if(nome == "Maria" || nome == "Ana"){
    console.log("pode entrar na festa");
}else{
    console.log("Entrada não permitida");
}

let temNamorada = false;
let temEsposa = true

if(temNamorada || temEsposa){
    console.log("Você esta em um relacionamente");
}else{
    console.log("Você esta solteiro");
}


let dia = 2;

switch(dia){
    case 1:
        console.log("domingo");
      break;
    case 2:
        console.log("segunda-feira");
       break;
    case 3:
        console.log("quarta-feira");
       break; 
    case 4:
         console.log("quinta-feira");
        break; 
    case 5:
         console.log("inválido");
        break;
     default:
        console.log("inválido");    
}

let menu = 1;
   console.log("escolha o que deseja fazer: 1 cadrastar")
switch(menu){
    case 1:
     console.log("você esta na parte de cadrastar");
   break;
    case 2:
        console.log("você esta na parte de editar");
   break;  
}
 

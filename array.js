let alunos = ["Arthur","yuri","victoria","giovanna","heloisa"];

console.log(alunos[0]);


alunos[0] = "renan";

console.log(alunos[0]);

let frutas = [
    "Maça",
    "Banana",
    "uva",
    "Morango",
];

console.log("quantidade de frutas:", frutas.length);

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

console.log(frutas);
frutas.push("Kiwi");
console.log(frutas);

frutas.pop(); // remove o último
console.log(frutas);

frutas.unshift("melancia"); // adiciona ao inicio
console.log(frutas);
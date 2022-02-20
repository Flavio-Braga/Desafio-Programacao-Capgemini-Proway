const senha = ''; // Inserir SENHA para teste dentro das aspas

let tamanhoSenha = senha.length;
let especial = /\W|_/;
let digito = /[0-9]/;
let minuscula = /[a-z]/;
let maiuscula = /[A-Z]/;
let i = 0;

if (especial.test(senha) == true) {          //Checar se a senha tem especial
    i++;
} if (digito.test(senha) == true) {          //Checar se tem digito
    i++;
} if (minuscula.test(senha) == true) {       //Checar se tem minuscula
    i++;
} if (maiuscula.test(senha) == true) {       //Checar se tem maiuscula
    i++;
}

console.log('Senha: ' + senha);                 // Printar Senha

// Validador de Senha = Saída
if (tamanhoSenha >= 6) {
    console.log('Saída: ' + [4 - i]);
} else if (tamanhoSenha == 5 && [(4 - i) > (6 - tamanhoSenha)]) {                   // Os else if's possuem condições diferentes para as strings com
    console.log('Saída: ' + (4 - i));                                               // tamanho 5, 4 e <= 3, pois levamos em consideração que o usuário
} else if (tamanhoSenha == 4 && [(4 - i) > (6 - tamanhoSenha)]) {                   // possa utilizar uma string "@@@@@" ou "I"
    console.log('Saída: ' + (4 - i));
} else if (tamanhoSenha == 1 || tamanhoSenha == 2 || tamanhoSenha == 3) {
     console.log('Saída: ' + (6 - tamanhoSenha));
} else {
    console.log('Saída: Insira uma senha'); // Bônus
}
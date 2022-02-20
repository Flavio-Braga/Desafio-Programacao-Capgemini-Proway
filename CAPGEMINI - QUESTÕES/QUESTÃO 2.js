const senha = ''; // Inserir SENHA para teste dentro das aspas

let tamanhoSenha = senha.length;
let especial = /\W|_/;
let digito = /[0-9]/;
let minuscula = /[a-z]/;
let maiuscula = /[A-Z]/;
let i = 0;

//Checar se a senha tem especial
if (especial.test(senha) == true) {
    i++;
}
//Checar se tem digito
if (digito.test(senha) == true) {
    i++;
}
//Checar se tem minuscula
if (minuscula.test(senha) == true) {
    i++;
}
//Checar se tem maiuscula
if (maiuscula.test(senha) == true) {
    i++;
}
// Printar Senha
console.log('Senha: ' + senha);

// Validador de Senha = Saída
if (tamanhoSenha >= 6) {
    console.log('Saída: ' + [4 - i]);
} else if (tamanhoSenha == 5 && [(4 - i) > (6 - tamanhoSenha)]) {
    console.log('Saída: ' + (4 - i));
} else if (tamanhoSenha == 4 && [(4 - i) > (6 - tamanhoSenha)]) {
    console.log('Saída: ' + (4 - i));
} else if (tamanhoSenha == 1 || tamanhoSenha == 2 || tamanhoSenha == 3) {
     console.log('Saída: ' + (6 - tamanhoSenha));
} else {
    console.log('Saída: Insira uma senha'); // Bônus
}
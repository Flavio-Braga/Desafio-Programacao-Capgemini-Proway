let palavra = 'arara'; // Inserir a palavra para análise.

function procurarAnagrama (palavra){
    let chave = {};
    let repetir = 0;

    for (let x = 0; x < palavra.length; x++){
        for(let y = x; y < palavra.length; y++){
            let arrayPalavra = (((palavra.substring(x, y +1).split('')).sort())).join('');
            chave[arrayPalavra] = 1 + (chave[arrayPalavra] || 0);
            
            if(chave[arrayPalavra] > 1) {
                repetir = repetir + (chave[arrayPalavra])-1;
            }
        }
    } 
    
    console.log(`Qntd de Anagramas: ${repetir}`);

    Object.keys(chave).forEach(function(item) { 
        if (chave[item] > 1) {
            console.log(`Anagrama ${item}: ${chave[item]} `);
        }
    })

    return chave;
}

procurarAnagrama(palavra);
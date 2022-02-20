let sample1 = 'ola'
let sample2 = 'OLA'

function compararAnagrama(string1, string2){

    if (string1 == null || string2 == null){ 
        return false;
    } 
    if (string1.length != string2.length){
        return false;
    } 

    let splitStr1 = ((string1.toLowerCase()).split("")).sort();
    let splitStr2 = ((string2.toLowerCase()).split("")).sort();
    let str1 = splitStr1.toString()
    let str2 = splitStr2.toString()
    
    if (str1 == str2){
        return true;
    } else { return false }
}

console.log("É Anagrama: " + compararAnagrama(sample1, sample2));
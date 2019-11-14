/*
UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
CCU ou CCC ou CCA ou CCG => Proline
UUA ou UUG => Leucine
UUU ou UUC => Phénylalanine
CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
UAU ou UAC => Tyrosine*/



//var code1 = 'CCGUCGUUGCGCUACAGC';

function decrypt(code){

let arr1 = code.match(/.{1,3}/g); // Découpage toutes les 3 lettres, + potentielles lettres restantes à la fin. https://stackoverflow.com/questions/6259515/how-can-i-split-a-string-into-segments-of-n-characters
//console.log(arr1)
// Chercher et remplacer dans un array : https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
let newArr = arr1.find((o, i) => {
	//console.log(arr1[i])

	if(o === 'UCU' || o ==='UCC' || o ==='UCA' || o === 'UCG' || o ==="AGU" || o === "AGC"){
        arr1[i] =  'Sérine'  }
    else if (o === 'CCU' || o ==='CCC' || o ==='CCA' || o === 'CCG'){
        arr1[i] =  'Proline'  }
    else if (o === 'UUA' || o ==='UUG'){
        arr1[i] =  'Leucine'  }
    else if (o === 'UUU' || o ==='UUC'){
        arr1[i] =  'Phénylalanine'  }
    else if(o === 'CGU' || o ==='CGC' || o ==='CGA' || o === 'CGG' || o ==="AGA" || o === "AGG"){
        arr1[i] =  'Arginine'  }
    else if (o === 'UUU' || o ==='UAC'){
        arr1[i] =  'Tyrosine'  }
        //console.log(arr1)	
});
    return arr1.join("-"); // Pourquoi avec newArr ça ne marche pas ??
}
console.log("Décodage de l'ARN 'CCGUCGUUGCGCUACAGC' : ")
console.log(decrypt('CCGUCGUUGCGCUACAGC'))
console.log("---------------------------------")
console.log("Décodage de l'ARN 'CCUCGCCGGUACUUCUCG' : ")
console.log(decrypt('CCUCGCCGGUACUUCUCG'))
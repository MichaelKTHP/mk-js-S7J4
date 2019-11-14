// Un prompt s'affiche avec la question suivante
//"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
// "Le résultat est : 24"

function factorialResult() {
  number = prompt('Entre un nombre pour calculer sa factorielle');
  var containsOnlyDigits = /^[0-9]+$/;   //Ne contient que des chiffres entre 0 et 9
	  while (!containsOnlyDigits.test(number)){ // tant qu'il y a autre choses que des chiffre entre 0 et 9
		  number = prompt('Entre un nombre pour calculer sa factorielle, pas autre chose');
		  }
	  if (number===0){
	    console.log(1);
	  }
	  b = 1 
	  while (number>0){
	    b = b*number
	    number -=1 
	  }
  console.log(b);

}



factorialResult()														

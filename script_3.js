console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")


function pyramid() {
  number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

  i=1 // # On initialise le i à 1 qui représente le nombre des "#" dans chaque ligne
  let pyramid_ground = "#"
  let space = " "
    while(number > 0){
	  console.log (space.repeat(number-1) + pyramid_ground.repeat(i)); // Multiplication de string impossible en js, .repeat permet de répeter une variable string. 
	  number = number - 1 ;
	  i=i+1;  
	} 
}

 pyramid()

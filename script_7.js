
/*
Les règles de conversations du bot sont les suivantes (rangées par priorité - si deux règles sont vraies, seule la plus haute dans la liste s'applique) :

    Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
    Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
    Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
    Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
    Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;*/


//substring = "Fortnite"

answer = prompt("Wesh bien ? Vas y pose ta question deuspi, j'ai pas que ça à faire non plus !\nLa réponse s'affichera dans la console alors ouvre la et tes yeux aussi par la même occasion ! ")
while (true){
	if(answer[answer.length-1] === "?"){

	console.log("Ouais Ouais...")
	answer = prompt("T'as une autre question ? Sinon arrache toi !")
	}

	else if(answer ===""){  // Condition placée avant celle des majuscules pour éviter que cette dernière ait la priorité.
	console.log("T'en en PLS ?")
	answer = prompt("T'as une autre question ? Sinon arrache toi !")
	}
    
    else if (answer === answer.toUpperCase()){
	console.log("Pwa, calme-toi...")
	answer = prompt("T'as une autre question ? Sinon arrache toi !")
	}
	
	else if (answer.toLowerCase().includes("fortnite")){  // case insensitive trick
	console.log("on s'fait une partie soum-soum ?...")
	answer = prompt("T'as une autre question ? Sinon arrache toi !")
	}

	else{
	console.log("balek.")
	answer = prompt("T'as une autre question ? Sinon arrache toi !")
	}
}






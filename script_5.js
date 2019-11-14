/*Réalise un script script_5.js qui affichera dans la console les questions suivantes et leurs réponses :

    Est-ce que tous les livres ont été au moins empruntés une fois ?
    Quel est livre le plus emprunté ?
    Quel est le livre le moins emprunté ?
    Trouve le livre avec l'ID: 873495 ;
    Supprime le livre avec l'ID: 133712 ;
    Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).

*/
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


    
console.log("**   Est-ce que tous les livres ont été au moins empruntés une fois ? **" )
  for(obj of books){

    let keys = Object.keys(obj) 
    let title = obj[keys[0]] 
    let id =  obj[keys[1]]
    let rented =  obj[keys[2]]
 
    if(rented === 0){
      console.log(" Tous les livres n'ont pas été empruntés au moins une fois.");
      break;
    }
    else{
      console.log(" Tous les livres ont été empruntés au moins une fois.");
    }
  }

console.log("------------------------------------------------------------------------" )
console.log("** Quel est le livre le plus emprunté ? **" )

sortedBooksByRented = books.sort((a, b) => a.rented-b.rented); // https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

mostRented = sortedBooksByRented.slice(-1)[0] // Dernier élement de l'array trié.

console.log("Le livre "+ "'"+mostRented.title+"'" + " fut le plus emprunté avec "+ mostRented.rented +" emprunts.")

console.log("------------------------------------------------------------------------" )
console.log("** Quel est le livre le moins emprunté ? **" )
leastRented = sortedBooksByRented.slice(0)[0] // Premier élement de l'array trié.
console.log("Le livre "+ "'"+leastRented.title+"'" + " fut le moins emprunté avec "+ leastRented.rented +" emprunts.")

console.log("------------------------------------------------------------------------" )
console.log("** Trouve le livre avec l'ID: 873495 **" )
 //  https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
 let book1 = books.find(book => book.id === 873495);
  console.log("'"+book1.title+"'" +" a pour id "+ book1.id);

console.log("------------------------------------------------------------------------" )
console.log("** Supprime le livre avec l'ID: 873495 **" )
let book1Index = books.findIndex(function(i){return i.id === 873495}) // https://stackoverflow.com/questions/16491758/remove-objects-from-array-by-object-property
books.slice(book1Index)



console.log("------------------------------------------------------------------------" )
console.log (" ** Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé). **")

let sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title))
  for(obj of books) {
 
    let keys = Object.keys(obj) 
    let title = obj[keys[0]] 
    console.log(title);
  }

  




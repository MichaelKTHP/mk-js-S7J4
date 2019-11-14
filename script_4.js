//Réalise un script script_4.js qui affichera dans la console les questions suivantes et leur réponses :

//     Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
//     Sors une array qui contient le prénom et le nom des entrepreneurs ;
//     Quel âge aurait chaque inventeur aujourd'hui ?
//     Trie les entrepreneurs par ordre alphabétique du nom de famille.



const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//  https://stackoverflow.com/questions/26552749/best-way-to-iterate-array-of-hashes-javascript
console.log("**  Quels entrepreneurs sont nés dans les années 1970 ?  **" )
for(obj of entrepreneurs) {
  // console.log(obj) => Object { first: "Evan", last: "Spiegel", year: 1990 } etc
  let keys = Object.keys(obj) // => Array(3) [ "first", "last", "year" ]
  let first = obj[keys[0]] 
  let last =  obj[keys[1]]
  let year =  obj[keys[2]]
  
  if(year >= 1970 && year <1980){
    console.log(first+" "+last+" est de l'année " + year);
  }
}

console.log("---------------------------------------------------------------------")
console.log("**  Tableau contenant le prénom et nom de chaque entrepreneur :  **" )
var entrepreneursArray = [] //initialisation de l'array
  for(obj of entrepreneurs) {
    // console.log(obj) => Object { first: "Evan", last: "Spiegel", year: 1990 } etc
    let keys = Object.keys(obj) // => Array(3) [ "first", "last", "year" ]
    let first = obj[keys[0]] 
    let last =  obj[keys[1]]
    entrepreneursArray.push(first +" " + last)
   }

console.log(entrepreneursArray)


console.log("---------------------------------------------------------------------")
console.log("**  Quel âge aurait chaque inventeur aujourd'hui ? **" )

  for(obj of entrepreneurs) {
    // console.log(obj) => Object { first: "Evan", last: "Spiegel", year: 1990 } etc
    let keys = Object.keys(obj) // => Array(3) [ "first", "last", "year" ]
    let first = obj[keys[0]] 
    let last =  obj[keys[1]]
    let year =  obj[keys[2]]
    const currentYear = new Date().getFullYear() // returns the current year
    let currentAge = currentYear - year
    console.log(first+" "+last+" a ou aurait eu " + currentAge + " ans cette année" )
 
   }


console.log("---------------------------------------------------------------------")
console.log("**  Tri par odre alphabétique du nom de famille **" )

  entrepreneurs.sort((a, b) => a.last.localeCompare(b.last)) // Trier alphabétiquement une clé spécifique dans un array (réponse de Nachiketha)
  // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript  
    for(obj of entrepreneurs) {
  // console.log(obj) => Object { first: "Evan", last: "Spiegel", year: 1990 } etc
      let keys = Object.keys(obj) // => Array(3) [ "first", "last", "year" ]
      let first = obj[keys[0]] 
      let last =  obj[keys[1]]
      console.log(first+" "+last);
    }
  // Autre manière plus laborieuse :  
  // var entrepreneursArrayLast = []
  // for(obj of entrepreneurs) {
   
  //   let keys = Object.keys(obj) // => Array(3) [ "first", "last", "year" ]
  //   let last =  obj[keys[1]]
  //   entrepreneursArrayLast.push(last)
  //   }
  //  entrepreneursArrayLast.sort();
  //  for(let index in entrepreneursArrayLast){
  //    console.log(entrepreneursArrayLast[index])
//}






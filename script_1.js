function sayHello() {

let name = "";

name = prompt('Entre ton prénom stp :');
  while (true) {
    if (name) {
      console.log("Bonjour" +" " + name + " ");
      break;
    }
    else {
      name = prompt(" Je t'ai dit d'entrer ton prénom !!!");
    }
  }
}

sayHello();


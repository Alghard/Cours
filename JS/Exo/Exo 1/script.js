/**
 * **************************************
 * 2-VARIABLES
 * **************************************

//! On déclare une variable avec let ou const (ou var dans les anciennes versions de JS)
let maVariable;
//! On assigne une valeur à une variable avec le signe =
maVariable = "Hello World";
console.log(maVariable);

//? Les types de variables (JS utilise un typage dynamique)
let uneString = "MDR";
let unNombre = 11;
let unBooleen = true;
let unTableau = [1, 2, 3, "Hello"];
let unObjet = {
    propriete1: 22,
    propriete2: "LOL",
};
//! Spoiler : on déclare une fonction comme ceci 👇
function testFunction() {
    console.log("Fonction de Test ?");
}
//? Bonus 💡: on peut placer une fonction dans une variable
let uneFonction = function maFonction() {
    console.log("Fonction qui affiche HelloWorld");
};

console.log(uneString);
console.log(unNombre);
console.log(unBooleen);
console.log(unTableau);
console.log(unObjet);
console.log(unObjet.propriete2);
//* Sans les ( ) on fait référence à la ƒ°
console.log(uneFonction);
//* là avec les () on éxecute la ƒ°
console.log(uneFonction());
let template1 = `Hello je test la fonction
retour a la ligne pour voir
si ça fonctionne`;
console.log(template1);

//!EXO 3

let commande = {
    name: `Jean`,
    order: `Pizza regina M`,
    date: `30/01/2024`,
    order_nb: `1258746`,
};
let joke = [
    `Qu-est ce qu'une pizza dit à une autre pizza qui lui fait de l'ombre ?

"Arrête de me trancher la route !"`,
    `Blague 2`,
    `Blague 3`,
];
let randJoke = function randomJoke() {
    return joke[Math.floor(Math.random() * 3)];
};

let SumUpOrderPhrase = `Le ${commande.date} : Bonjour ${commande.name},
Votre commande numéro : ${commande.order_nb}, contenant : ${commande.order} vous sera livré tres prochainement.
Nous vous proposons une petite blague pour vous faire patienter : 

${randJoke()}

Merci d'avoir commandé chez "La Pizzeria Raffinata" !`;

console.log(SumUpOrderPhrase);

alert(SumUpOrderPhrase);


//! EXO 4

let name = "Julien";
let age = 33;
let passion = [`Mangas`, `UR MUM`];
let tabUser = [name, age, passion];

console.log(tabUser);
console.log(tabUser[2]);
console.log(tabUser[2][1]);


//! EXO 5

let leNom = "PERTUR";
let lePrénom = "Golemus";
let laPhrase = [];
laPhrase.push(leNom, lePrénom, leNom[0] + lePrénom[0]);
console.log(laPhrase);


//! EXO 6

function maFonction(n) {
    return n + 33;
}
function maFonction2(a, b) {
    return a + b;
}

console.log(maFonction(123));
console.log(maFonction2(100, 8794));

//Bonne pratiques : paramètres par défaut
function maFonction(n = 0) {
    return n + 33;
}
function maFonction2(a = 0, b = 0) {
    return a + b;
}


function buggyFunction() {
    let wtf = 9;
    console.log(wtf); 
}
buggyFunction();
console.log(wtf);
// Tu peux simplement supprimer ta derniere ligne.
// Ta variable wtf n'est pas connu en dehors du scope de ta fonction buggyFunction,
//  si tu veux l'afficher via console.log il faut la déclarer hors de ta fonction


//! EXO 5.1.2 : Quizz Function
//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
let something = 44;
function functionBugParent() {
    let something = 9;
    console.log(something);
    console.log(lesNews); //ta fonction parent ne connait pas la variable lesNews vu qu'elle est dans le scope d'une autre fonction

    function functionBugEnfant() {
        let lesNews = `il est 99h67`; // cette variable n'existe que dans la fn enfant du coup elle ne sera jamais dans le scope de la fn parent
    }
}
functionBugParent();
console.log(something); //Ici ta console affichera uniquement 44 car l'autre variable nommée something est dans une fonction donc hors du scope


//!EXO 5.2


function moyenne(a = 0, b = 0) {
    return (a + b) / 2;
}
console.log(`Votre moyenne est de : ${moyenne(15, 19)}`);

let list = [10, 19, 3, 16, 14, 6];

function moyenne2(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    return sum / tab.length;
}

console.log(moyenne2(list));
console.table(list);


document.addEventListener("click", (clickEvent) => {
    console.log(clickEvent);
    console.log(`Tu as clické ici : 
    X : ${clickEvent.x} - Y : ${clickEvent.y}
    à ce moment : ${clickEvent.timeStamp}`);
});


//! EXO IF

function one(n = 0) {
    if (n >= 30) {
        return "BIG NUMBERZ MA BOY";
    } else if (n < 10 && n != 0) {
        return "SMOL NUMBERZ POOR BOI";
    }
    return "WOW AVERAGE NUMBERS DAMMMMN";
}

console.log(one(9));
console.log(one(13));
console.log(one(32));



//! EXO 8

let user = {
    nom: "Pertur",
    prenom: "Golemax",
    age: 22,
    passions: {
        passion1: "Golemaxer",
        passion2: "Perturiser",
    },
};

console.log(user.nom);
console.log(user.passions);
console.log(user.passions.passion2);

user.nom = 111;
user.age = "VINGT DEUX";
user.passions.passion2 = "Cinéma";

console.log(user.nom);
console.log(user.age);
console.log(user.passions.passion2);


//! Exo boucle

let listeFilm = ["Ultime Décision", "Mission Alcatraz", "Attack Force"];
function list(tab) {
    for (let i = 0; i < tab.length; i++) {
        console.log(`BOUCLE FOR : ${tab[i]}`);
    }
}
list(listeFilm);


let lesTxt = document.getElementsByTagName("p");
console.log(lesTxt);

let textesTab = Array.from(lesTxt);
console.log(textesTab);

textesTab.map((unP) => (unP.innerText = "Je me suis fait hack"));
textesTab.map((unP) => (unP.style.color = "#ae3a33"));


//!Quizz : ca bug
var voiture = "Renault";
console.log(voiture);
var voiture = "BMW";
console.log(voiture);
// - Tu utilises "var" en 2024 au lieu de "let"
// - Tu déclares deux fois voiture donc ta premiere déclaration est écrasé
// - Les 2 marques de bagnoles sont trash tier

//!Quizz : ca bug (ouin ouin)
console.log(bolide);
var bolide = "Jaguar";
// - Ta variable var est créer après ton console.log du coup elle n'est pas encore connu
// - Je sais pas si ça rentre dans ce cas de figure : "Les variables non-déclarées n'existent pas tant que leur code n'est pas exécuté. "



//!Quizz ca bug
function choixVoiture() {
    var uneVoiture = "Harley Davidson";
}

choixVoiture();
console.log(uneVoiture);
// - la var uneVoiture est crééer dans ta fonction, du coup elle n'existe que dans le scope de ta fonction, tu ne
// peux donc pas l'appler en dehors

//! Notion de scope avec un bloc IF
var car = "Nissan";

if (car == "Nissan") {
    var vitesse = 800;
}
console.log(vitesse);
// Attention var n'a pas de portée de bloc, du coup tu peux l'appeler hors de ton if

*/

// function division() {
//     let x = prompt("Entrez un premier nombre (numérateur)");
//     let y = prompt("Entrez un deuxième nombre (dénominateur)");

//     if (isNaN(x) || isNaN(y) || x == "" || y == "") {
//         throw new Error("Merci de rentrer deux nombres");
//     } else if (y == 0) {
//         throw new Error("Division par 0 impossible");
//     } else {
//         alert(x / y);
//     }
// }

// division();

// let apiDiv = document.querySelector("#apiContact");
// let contactAPI = async () => {
//     let data = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m");
//     console.log(data);
//     let dataTransformed = await data.json();
//     console.log(dataTransformed);
//     apiDiv.innerHTML = dataTransformed["latitude"];
// };
// contactAPI();

//! POUR CHAQUE FETCH D'API PENSER A FAIRE UN CONSOLE.LOG POUR VOIR COMMENT SONT ORGANISER LES DONNEES

// const apiDiv = document.querySelector("#pokeListe");
// console.log(apiDiv);
// let contactAPI = () => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//         .then((response) => response.json())
//         .then((data) => {
//             for (let i = 0; i < 20; i++) {
//                 apiDiv.innerText += `Pokémon numéro ${i + 1} : ${data.results[i].name}

//                 `;
//             }
//         })
//         .catch((error) => {
//             console.error("AYaaaaaa Gros Pépin vous avez tout PT:", error);
//         });
// };
// contactAPI();

// const pokemonListe = document.getElementById("pokeListe");
// console.log(pokemonListe);

// const pokemonApiContact = () => {
//     fetch("https://pokeapi.co/api/v2/pokemon")
//         // 1ER THEN
//         .then((response) => {
//             // Petite Sécurité si jamais le serveur de l'api a PT
//             if (!response.ok) {
//                 throw new Error("Le Réseau est Foutu");
//             }
//             // Du coup si c'est OK on return la response transformée via la fonction JSON
//             return response.json();
//         })
//         // 2nd THEN Pour Boucler sur la dataTransformed
//         .then((pokemonDataTransformed) => {
//             console.log("pokemonDataTransformed", pokemonDataTransformed);
//             console.log(pokemonDataTransformed.results[0].name);
//             // A voir pour un forEach
//             for (let i = 0; i < pokemonDataTransformed.results.length; i++) {
//                 let listElement = document.createElement("p");
//                 listElement.innerText = pokemonDataTransformed.results[i].name;
//                 pokemonListe.append(listElement);
//             }
//             // Petit Bonus pour récupérer et afficher le 1er pokemon [0]
//             const pokemonName = document.createElement("h1");
//             pokemonName.innerText = pokemonDataTransformed.results[0].name;
//             document.body.append(pokemonName);
//         })
//         .catch((error) => {
//             console.error("AYaaaaaa Gros Pépin vous avez tout PT:", error);
//         });
// };
// pokemonApiContact();

// myH1 = document.querySelector("h1");
// myBody = document.querySelector("body");
// setTimeout(() => {
//     myH1.innerText = "Salut les bouseux";
//     myBody.style.backgroundColor = "rgb(175, 216, 216)";
// }, 3000);

// TODO 1: récupérer le titre h3 dans une variable monTitre
// TODO 2: créer une variable timer initialisée à 3
// TODO 3-1: sur monTitre on place un addEventListener qui surveille le click et qui exécute une fonction
// TODO 3-2: Dans cette fonction, créer une variable countDown à laquelle on assigne la fonction setInterval()
// TODO 3-3: setInterval() prend en 1er param, une fonction et en 2e param 1000 ms
// TODO 4-1: Dans la fonction de setInterval(), SI timer est supperieur à 0, on assigne au innerHTML de monTitre, timer
// TODO 4-1: SINON, on assigne au innerHTML de monTitre, "GO GO GO", ensuite on utilise clearInterval pour stopper l'intervale
// TODO 5: Après ces conditions, on décrémente timer

const monTitre = document.querySelector("h3");

let timer = 3;

monTitre.addEventListener("click", () => {
    let countDown = setInterval(() => {
        if (timer > 0) {
            monTitre.innerHTML = timer;
        } else {
            monTitre.innerHTML = "Go Go Go";
            //Pour ne pas gaspiller des performances pour rien
            // C'est pour ca qu'on a stocker le setInterval dans une variable countDown
            clearInterval(countDown);
        }
        timer--;
    }, 1000);
});

//TODO EXO CLASS
// class Imc {
//     constructor(nom, poids, taille) {
//         this._nom = nom;
//         this._poids = poids;
//         this._taille = taille;
//         this._imc = (this._poids / (this._taille * this._taille)).toFixed(2);
//     }
//     //* Affichage
//     display() {
//         console.log(this._nom + " (" + this._poids + " kg, " + this._taille + " M) a un IMC de: " + this._imc);
//     }
// }

// // //* progr principal -> on fait l'injection des données
// let list = [
//     new Imc("Sébastien Chabal", 135, 1.7),
//     new Imc("Escaladeuse", 45, 1.68),
//     new Imc("JOJO ", 300, 2),
//     new Imc("Gontrand ", 90, 1.75),
//     new Imc("Colonel Clock ", 200, 1.75),
//     new Imc("JOsiane de la Vega", 99, 1.55),
// ];
// //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
// list.forEach((uneCase) => uneCase.display());

class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._salaire = salaireMensuel;
        this.cout = this.calculCout();
    }
    calculCout() {
        return this._salaire * 12 * 1.9;
    }
    getCout() {
        return this.cout;
    }
}

class Pme {
    constructor(nom, equipe, ventes, coutFixes, achat) {
        this._nom = nom;
        this._equipe = equipe;
        this._ventes = ventes;
        this._coutFixes = coutFixes;
        this._achat = achat;
        this._coutEquipe = this.calculCoutEquipe();
        this._coutInitial = this._coutFixes + this._achat;
        this._bilan = this._ventes - (this._coutInitial + this._coutEquipe);
    }
    calculCoutEquipe() {
        let result = 0;
        for (let i = 0; i < this._equipe.length; i++) {
            result += this._equipe[i].getCout();
        }
        return result;
    }
    bilanCalculed() {
        console.log(`-----------MA PME-----------
        ${this._nom} - : Cout Initial : ${this._coutInitial}
        ${this._nom} - : Cout Total Equipe : ${this._coutEquipe}
        ${this._nom} - : VENTES : ${this._ventes}
        ${this._nom} - : BILAN : ${this._bilan}`);
    }
}
const pme = new Pme(
    //Le nom entreprise
    "Ma petite entreprise",
    //L'equipe de salariés (un tableau)
    [new Employee("Duval", "Paul", 30, 2000), new Employee("Durand", "Alain", 40, 3000), new Employee("Dois", "Sylvia", 50, 4000)],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000
);
pme.bilanCalculed();

const firebaseConfig = {
    apiKey: "AIzaSyB6qT1-V9FD8rLMA6hEDFvgkEy4e_ueyUI",
    authDomain: "nuclear-kitten.firebaseapp.com",
    databaseURL: "https://nuclear-kitten-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nuclear-kitten",
    storageBucket: "nuclear-kitten.appspot.com",
    messagingSenderId: "631101266786",
    appId: "1:631101266786:web:de3432181a53f480862a3b",
};

class CompteBancaire {
    constructor(nom, solde = 0) {
        this._nom = nom;
        this.solde = solde;
    }
    getNom() {
        return this._nom;
    }
    getSolde() {
        return this.solde;
    }
    setSolde(newSolde) {
        this.solde = newSolde;
    }
    visualisation() {
        console.log(`
        Titulaire  : ${this._nom}
        Solde : ${this.solde}
        `);
    }
    crediter(montant) {
        this.solde += montant;
        console.log(`Ajout de : ${montant} pour : ${this._nom}`);
    }
    retrait(montant) {
        if (montant > this.solde) {
            throw new Error(`${this._nom}, retrait de : ${montant} refusé avec solde de : ${this.solde}`);
        } else {
            this.solde -= montant;
            console.log(`Retrait de : ${montant} pour : ${this._nom}`);
        }
    }
    virement(montant, nom) {
        if (montant > this.solde) {
            throw new Error(`${this._nom}, virement de : ${montant} refusé avec solde de : ${this.solde}`);
        } else {
            this.solde -= montant;
            nom.solde += montant;
            console.log(`Virement de : ${montant} de : ${this._nom} vers : ${nom.getNom()}`);
        }
    }
}
// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
};

// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) lesComptes[key].crediter(1000);

// un retrait de 100 par Alex
lesComptes["Alex"].retrait(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].virement(300, lesComptes["Clovis"]);
// un petit retrait incorrect (doit déclencher erreur custom) :
// Alex fait un retrait de 1200
try {
    lesComptes["Alex"].retrait(1200);
} catch (error) {
    console.log(error);
}
// bilan : faire une description de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) lesComptes[key].visualisation();

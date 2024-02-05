/*
Le jeu des allumettes

Il y a un certain nombre d'allumettes sur la table.
Chacun son tour, les joueurs vont retirer 1, 2 ou 3 allumettes.
Celui qui ne peut plus jouer (parce qu'il n'y a plus d'allumette) a perdu.
*/

// 1) Comment représenter (très simplement !) le nombre d'allumettes restantes ? Quel outil utiliser ?

// 2) Initialiser le jeu, en partant de 20 allumettes.

// 3) Faire une fonction (je ne précise pas les entrées/sorties, à vous de voir) qui dessine le jeu dans la console (simplement).
// Par exemple, en appelant la fonction au départ, ça écrira :
// ||||||||||||||||||||

// 4) Écrire une fonction qui fait jouer un joueur.
// Pour ça, on peut utiliser : `parseInt(prompt("Message"))` demande une valeur à l'utilisateur et qui retourne le nombre donné.

// 5) Appeler en boucle cette fonction, jusqu'à la fin de partie.

// Bonus :
// - Fonction pour initialiser la partie (pour pouvoir recommencer une fois la partie finie)
// - Deuxième joueur automatique (l'ordinateur qui incarne le deuxième joueur)
//     - Joue au hasard
//     - Joue parfaitement (beaucoup plus technique !)
//     - Joue parfaitement avec quelques erreurs au début pour laisser une chance :)
// - Changer les règles (on peut retirer 1, 2 ou 4 allumettes ; changer la valeur initiale...)

let turn = 1;
let player = 1;
function jouer() {
    turn = 1;
    player = 1;
    let allumettes = parseInt(prompt("Avec combien d'allumettes voulez-vous jouer ?"));
    console.log("Vous avez choisi ", allumettes, ". GL HF");
    matches(allumettes);
}

/*
                                    Jeu pour 2 joueurs humains
function matches(allumettes) {
    while (allumettes > 0) {
        if (turn % 2 == 0) {
            player = 2;
        } else {
            player = 1;
        }
        let tirage = parseInt(prompt(`Joueur ${player}  : Combien d'allumettes souhaitez-vous retirer ? `));
        while (tirage < 1 || tirage > 3) {
            tirage = parseInt(prompt("Veuillez choisir une valeur entre 1 et 3"));
        }
        allumettes = allumettes - tirage;
        console.log("Joueur ", player, ". Il reste ", allumettes, " allumettes.");
        turn += 1;
    }
    let restart;
    console.log("Il n'y a plus d'allumettes, partie terminée. You lose player ", player);
    while (restart != "y" || restart != "n") {
        restart = prompt("Voulez-vous rejouer ? (y/n)");
        if (restart == "y") {
            jouer();
        } else if (restart == "n") {
            console.log("Merci d'avoir jouer");
            return;
        } else {
            console.log("Veuillez répondre par y ou n");
        }
    }
}

*/

function bot(n) {
    if (n == 1) {
        return 3;
    } else if (n == 2) {
        return 2;
    }
    return 1;
}
//                          Jeu avec bot
function matches(allumettes) {
    let tirage = 0;
    while (allumettes > 0) {
        if (turn % 2 == 0) {
            player = 2;
            tirage = bot(tirage);
            console.log("Le fdp de bot retire ", tirage, " allumettes.");
        } else {
            player = 1;
            tirage = parseInt(prompt(`Joueur ${player}  : Combien d'allumettes souhaitez-vous retirer ? `));
            while (tirage < 1 || tirage > 3) {
                tirage = parseInt(prompt("Veuillez choisir une valeur entre 1 et 3"));
            }
        }
        allumettes = allumettes - tirage;
        console.log("Joueur ", player, ". Il reste ", allumettes, " allumettes.");
        turn += 1;
    }
    let restart;
    console.log("Il n'y a plus d'allumettes, partie terminée. You lose player ", player);
    while (restart != "y" || restart != "n") {
        restart = prompt("Voulez-vous rejouer ? (y/n)");
        if (restart == "y") {
            jouer();
        } else if (restart == "n") {
            console.log("Merci d'avoir jouer");
            return;
        } else {
            console.log("Veuillez répondre par y ou n");
        }
    }
}

jouer();

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

//! UNE SOLUTION
// class CompteBancaire {
//     constructor(titulaire) {
//         this.titulaire = titulaire;
//         this.solde = 0;
//     }
//     // Ajoute un montant au solde
//     crediter(montant) {
//         this.solde += montant;
//         console.log("Ajout de: " + montant + " pour: " + this.titulaire);
//     }
//     // Retirer un montant au solde
//     retirer(montant) {
//         try {
//         if (this.solde < montant)
//             throw (
//             this.titulaire +
//             ", retrait de: " +
//             montant +
//             " refusé avec solde: " +
//             this.solde
//             );
//         this.solde -= montant;
//         console.log("Retrait de: " + montant + " pour: " + this.titulaire);
//         } catch (err) {
//         console.log("----->" + err);
//         }
//     }
//     virer(montant, membre) {
//         console.log(
//         "Virement de: " +
//             montant +
//             " de: " +
//             this.titulaire +
//             " vers: " +
//             membre.titulaire
//         );
//         membre.crediter(montant);
//         this.retirer(montant);
//     }

//     // Renvoie la description du compte
//     decrire() {
//         return "titulaire: " + this.titulaire + ", solde: " + this.solde;
//     }
//     }

//! Exemple de classe avec héritage
class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(nameUser, mailUser, phoneUser) {
        // Attribut en IN MODE
        this.nameUser = nameUser;
        this.mailUser = mailUser;
        this.phoneUser = phoneUser;
        // Attribut en outMode
        this.contact = phoneUser + mailUser;
        this.resume = this.getProfileInfo();

        // this._nom = nom;
    }
    getProfileInfo() {
        console.log("this ", this);
        return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }
}
class UserAdmin extends UserProfile {
    constructor(unNom, unMail, unPhone, sector, personnalPhone) {
        super(unNom, unMail, unPhone); //! Appel au constructor du parent
        this.sector = sector;
        this.personnalPhone = personnalPhone;
    }
    getAdminInfo() {
        return `infos de l'utilisateur : 
        son nom : ${this.nameUser}
        son secteur d'intervention : ${this.sector}
        son Tél Personnel : ${this.personnalPhone}`;
    }
}

//! Exemple d'une instance admin
const exampleAdmin1 = new UserAdmin("Jacky", "jack@gmail.com", "012345678", "administration", "0987654323");
console.log(exampleAdmin1.getAdminInfo());

const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

const userName = document.querySelector("#username");
const pwd = document.querySelector("#password");
const p = document.querySelector("p");
userName.addEventListener("keyup", () => {
    if (regex.test(userName.value)) {
        userName.style.color = "green";
    } else {
        userName.style.color = "red";
    }
});
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;
function password_checker(password) {
    let error_string = "Mot de passe invalide : \n";
    let success_string = "Mot de passe valide";
    if (password.length < 6) {
        error_string += "Erreur : Mot de passe trop court \n";
    }
    if (password.length > 30) {
        error_string += "Erreur : Mot de passe trop long \n";
    }
    if (!password.match(charDecimal)) {
        error_string += "Erreur : Il manque un chiffre \n";
    }
    if (!password.match(charSpecial)) {
        error_string += "Erreur : Il manque un charactère spécial \n";
    }
    if (error_string != "Mot de passe invalide : \n") {
        p.innerText = error_string;
    } else {
        p.innerText = success_string;
    }
}

pwd.addEventListener("blur", (e) => {
    password_checker(e.target.value);
});
// pwd.addEventListener("blur", () => {
// if (!pwd.value.match(charDecimal) || !pwd.value.match(charSpecial) || pwd.value.length < 8) {
//     p.innerText = `Le password est :
//     - trop court
//     - doit contenir un chiffre
//     - doit contenir un carac spécial`;
//     if (!pwd.value.match(charDecimal)) {
//         p.innerText = "Le password doit contenir au moins un chiffre";
//     } if (!pwd.value.match(charSpecial)) {
//         p.innerText = "Le password doit contenir un carac spécial";
//     } if (pwd.value.length < 8) {
//         p.innerText = "Le password est trop court";
//     } else {
//         p.innerText = `Le password est OK`;
//     }
// });

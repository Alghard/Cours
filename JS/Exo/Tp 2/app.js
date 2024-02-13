class Utilisateur {
    constructor(nom, prenom, mail, phone, img) {
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.phone = phone;
        this.img = img;
    }
    getUserInfo() {
        console.log(`Infos Utilisateur
        Nom : ${this.nom}
        Prénom : ${this.prenom}
        Mail : ${this.mail}
        Téléphone : ${this.phone}
        Photo : ${this.img}`);
    }
    templateDisplay() {
        let card = document.createElement("div");
        card.style.width = "500px";
        card.style.height = "500px";
        card.style.border = "solid black 2px";
        document.body.append(card);
        let userInfo = document.createElement("p");
        userInfo.innerText = `Infos Utilisateur : 
        Nom : ${this.nom}
        Prénom : ${this.prenom}
        Mail : ${this.mail}
        Téléphone : ${this.phone}`;
        let userPic = document.createElement("img");
        userPic.src = this.img;
        card.append(userInfo, userPic);
    }
}
// const lesUtilisateur = {
//     Alex: new Utilisateur("Gizmo", "Jacky", "jacky.gizmo@hot.fr", "0123456789", "https://picsum.photos/200"),
//     Clovis: new Utilisateur("Hernes", "Clovis", "hernes.cloivs@toh.rf", "9876543210", "https://picsum.photos/200"),
//     Marco: new Utilisateur("Polo", "Marco", "polo.marco@wv.de", "9638527410", "https://picsum.photos/200"),
// };
// for (let key in lesUtilisateur) lesUtilisateur[key].getUserInfo();
// for (let key in lesUtilisateur) lesUtilisateur[key].templateDisplay();
let userList = [
    new Utilisateur("Gizmo", "Jacky", "jacky.gizmo@hot.fr", "0123456789", "https://picsum.photos/200"),
    new Utilisateur("Hernes", "Clovis", "hernes.cloivs@toh.rf", "9876543210", "https://picsum.photos/200"),
    new Utilisateur("Polo", "Marco", "polo.marco@wv.de", "9638527410", "https://picsum.photos/200"),
];
userList.forEach((uneCase) => uneCase.templateDisplay());
userList.forEach((uneCase) => uneCase.getUserInfo());

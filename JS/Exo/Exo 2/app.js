let superClass = document.getElementsByClassName("super");
console.log(superClass);

let specialID = document.getElementById("special");
console.log(specialID);

//!Deplacer un élément via node  OPTION 1 AVEC FIRST CHILD

// const p10 = document.querySelectorAll("p")[9];
// console.log(p10);

// let leBody = document.querySelector("body");

// let theFirstChild = leBody.firstChild;

// leBody.insertBefore(p10, theFirstChild);

//!Deplacer un élément via node  OPTION 2 SANS VARIABLE

// document.body.insertBefore(document.querySelectorAll("p")[9], document.querySelector("h1"));

// //TODO: via JS afficher le profil  utilisateur dans la page web
// const userData = {
//     name: "John delavega",
//     email: "john.doe@example.com",
//     age: 25,
//     dob: "08/02/1989",
//     active: true,
//     img: "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg",
// };

// const userProfile = document.querySelector(".userProfile");
// userProfile.style.backgroundColor = "#ae3a33";
// userProfile.style.height = "1000px";
// userProfile.style.width = "1000px";
// userProfile.style.border = "solid black 5px";
// userProfile.style.margin = "auto";
// userProfile.style.textAlign = "center";

// const newH4 = document.createElement(`h4`);
// newH4.innerText = userData.name;

// const email = document.createElement(`p`);
// email.innerText = userData.email;

// const age = document.createElement(`p`);
// age.innerText = userData.age;

// const dob = document.createElement(`p`);
// dob.innerText = userData.dob;

// const active = document.createElement(`p`);
// active.innerText = userData.active;

// const img = document.createElement("img");
// img.src = userData.img;

// userProfile.append(img, newH4, email, age, dob, active);

//! EXO 20.1
//TODO Créer une fonction ajouterTexte qui prend 2 paramètres : pseudo et duTexte
//TODO La fonction a pour but :
//TODO Creer puis remplir et enfin placer un paragraphe contenant pseudo et duTexte dans la page
//TODO (bonus) : Dans le paragraphe le pseudo est affiché en gras

function ajouterTexte(pseudo, duTexte) {
    //const body = document.querySelector(`body`);
    let newPseudo = document.createElement(`p`);
    newPseudo.innerHTML = `<B>${pseudo}</B> - ${duTexte}`;
    document.body.append(newPseudo);
}

ajouterTexte("Jean", "DU TEXTE LA EH OH");
ajouterTexte("VICTOOOOR", "el gros ped");
ajouterTexte("ALLO", "test supplémentaire au cas ou");

let firstLink = document.querySelector("a");
console.log(firstLink);
let allLinks = document.querySelectorAll("a");
console.log(allLinks);

let firstTitle = document.querySelector("h1");
console.log(firstTitle);

let firstImg = document.querySelector("img");
console.log(firstImg);

// firstTitle.style.backgroundColor = 'blue';
// firstTitle.style.color = 'beige';
// On accède directement aux porpiétés de l'objet qui correspondent aux attributs HTML
// firstTitle.className = 'laClasse';
// firstLink.href = 'https://www.google.com';
// firstImg.src = 'https://picsum.photos/200/300';

// On a une fonction native pour modifier n'importe quel attribut
firstTitle.setAttribute("class", "laClasse");
firstTitle.setAttribute("bidule", "toto");
firstLink.setAttribute("href", "https://www.google.com");
firstImg.setAttribute("src", "https://picsum.photos/200/300");

let newH1 = document.createElement(`h1`);
newH1.innerText = `D.O.M. Events`;
document.body.append(newH1);
let clicked = false;
newH1.addEventListener("click", function () {
    if (clicked) {
        newH1.innerText = `D.O.M. Events`;
        clicked = false;
    } else {
        newH1.innerText = `-- =) --`;
        clicked = true;
    }
});

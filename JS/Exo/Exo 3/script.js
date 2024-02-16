const titre = document.querySelector("h1");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");

p1.addEventListener("click", () => {
    titre.classList.add("laClasse");
});
p2.addEventListener("click", () => {
    titre.classList.remove("laClasse");
});
p3.addEventListener("click", () => {
    titre.classList.toggle("laClasse");
});

// let unEvent;
// document.addEventListener("click", (unEvent) => {
//     console.log(unEvent);
//     let coordX = unEvent.x;
//     let coordY = unEvent.y;
//     img = document.createElement("img");
//     img.src = "https://picsum.photos/200";
//     img.style.position = "absolute";
//     img.style.top = coordY - img.height / 2 + "px";
//     img.style.left = coordX - img.width / 2 + "px";
//     document.body.append(img);
// });

// TODO Exo FOCUS ET BLUR

const inputTxt = document.querySelector("input");
inputTxt.addEventListener("focus", () => {
    inputTxt.classList.add("inputFocus");
});
inputTxt.addEventListener("blur", () => {
    inputTxt.classList.remove("inputFocus");
});

// TODO 1: récupérer toutes les images dans une variable lesImages
// TODO 2: Dans une variable tabImg on transforme lesImages en tableau avec Array.from()
// TODO 3-1: Sur tabImg on utilise la fonction map().
// TODO 3-2: Dans map(), on lui passe une F => qui prend 2 params : uneImage et index
// TODO 3-3: Dansla F =>, sur uneImage on place un addEventListener qui écoute "load" et éxecute une Fonction
// TODO 3-4: Dans la F du addEventListener, on affiche index en console

// const lesImages = document.querySelectorAll("img");
// let tabImg = [];
// tabImg = Array.from(lesImages);
// console.log(tabImg);
// tabImg.map((uneImage, index) => {
//     uneImage.addEventListener("load", () => console.log(`Image numéro ${index} vient de finir de charger.`));
// });

const h2Out = document.querySelector("#mouseOut");
document.body.addEventListener("mouseleave", "click", () => {
    h2Out.style.display = "block";
    h2Out.style.backgroundColor = "green";
    h2Out.style.color = "red";
});

document.body.addEventListener("mouseenter", () => {
    h2Out.style.display = "none";
});

// TODO Réagir au scroll

let laBar = document.querySelector(".bar");

document.addEventListener("scroll", () => {
    console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${scrollY};`);
    let scrollMax = document.body.scrollHeight - innerHeight;
    let onEstOu = (scrollY * 100) / scrollMax;
    laBar.style.width = `${onEstOu}%`;
});

//! REAGIR AU CLAVIER

//TODO 1:  On selectionne l'input ou le textarea
//TODO 2 On selectionne la div avec l'id formRender
//TODO 3 sur le textarea on écoute le clavier
//TODO 4 : ?????

//! Marche pas en dessous
// let submitBtn = document.querySelector("#submit");
// let isDisabled = submitBtn.disabled;
// console.log(isDisabled);
// document.addEventListener("keyup", () => {
//     let input = document.querySelector("#txt").value;
//     input.length > 4 ? (isDisabled = true) : (isDisabled = false);
// });

// let submitBtn = document.querySelector("#submit");
// let isDisabled = submitBtn.disabled;
// console.log(isDisabled);

// document.addEventListener("keyup", () => {
//     let input = document.querySelector("#txt").value;
//     input.length > 4 ? (submitBtn.disabled = true) : (submitBtn.disabled = false);
// });

// TODO 1: récupérer le textarea du formulaire dans une variable txt
// TODO 2: récupérer le button du formulaire dans une variable btn
// TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier "keyup" et éxecute une fonction
// TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input (sa valeur) dépasse 5 caractères alors on désactive le button
// const monTextArea = document.querySelector('#formMessage');
// const monBtn = document.querySelector('#formSubmitBtn');
// console.log(monTextArea);
// console.log(monBtn);

// monTextArea.addEventListener('keyup',(event)=>{
//     console.log(event);
// ? Mode cond ternaires
//     monBtn.disabled = monTextArea.value.length>=5 ? true : false;
// ? Mode IF classique
// if(monTextArea.value.length>=5){
//    monBtn.disabled = true;
// }
// else{
//     monBtn.disabled = false
// }
// });

// ** preventDefault - addEventListener - "submit" - form.reset()
// TODO 1: récupérer le formulaire dans une variable monForm
// TODO 2-1: sur monForm on place un addEventListener qui écoute "submit" et qui exécute une fonction qui a event en paramètre (on veut capter l'event)
// TODO 2-2: Dans cette fonction, sur event on utilise la fonction preventDefault()
// TODO 3-2: Puis on console log event
// TODO 3-3 : sur monForm on utilise la fonction .reset()

let monForm = document.querySelector("form");
monForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    monForm.reset();
});

// let steal = document.querySelector("#formRender");
// document.addEventListener("keyup", function (event) {
//     console.log(event);
//     let input = document.querySelector("#txt").value;
//     //steal.innerText += event.key;
//     steal.innerText = input;
// });

//Stocker l'input ou texte dans une variable monTxt
let monTxt = document.querySelector("#formMessage");
//Stocker la div dans une variable rendu
let rendu = document.querySelector("#formRender");
//Assigner la valeur du textarea dans un local Storage sous la clé "monSuperTexte"
monTxt.value = localStorage.getItem("monSuperTexte");
//Condition SI la valeur de monTxt est définie
//alors le innerText du rendu récupère ce qu'il y a dans la clé "monSuperTexte"
if (monTxt.value) {
    rendu.innerText = localStorage.getItem("monSuperTexte");
}
//Mise en place de l'écoute de l'event clavier sur monTxt
//Pour enregistrer la derniere valeur dans rendu
monTxt.addEventListener("keyup", () => {
    localStorage.setItem("monSuperTexte", monTxt.value);
    rendu.innerText = monTxt.value;
});

try {
    prenom;
    alert("Bonjour");
} catch (err) {
    console.log(err);
    alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
        -----------
        Le Nom de l'erreur 
        ${err.name}
        -----------
        Le Message de l'erreur  :
        ${err.message}
        ----------
        L'emplacement de l'erreur:
        ${err.stack}`);
}
alert(`Ce message s'affiche correctement`);

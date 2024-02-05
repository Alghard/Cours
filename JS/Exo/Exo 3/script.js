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

const lesImages = document.querySelectorAll("img");
let tabImg = [];
tabImg = Array.from(lesImages);
console.log(tabImg);
tabImg.map((uneImage, index) => {
    uneImage.addEventListener("load", () => console.log(`Image numéro ${index} vient de finir de charger.`));
});

const h2Out = document.querySelector("#mouseOut");
document.body.addEventListener("mouseleave", () => {
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

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

let unEvent;
document.addEventListener("click", (unEvent) => {
    console.log(unEvent);
    let coordX = unEvent.x;
    let coordY = unEvent.y;
    img = document.createElement("img");
    img.src = "https://picsum.photos/200";
    img.style.position = "absolute";
    img.style.top = coordY - img.height / 2 + "px";
    img.style.left = coordX - img.width / 2 + "px";
    document.body.append(img);
});

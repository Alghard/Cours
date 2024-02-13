const info = document.createElement("div");
info.style.height = "300px";
info.style.width = "200px";
info.style.marginTop = "16px";
info.style.marginBottom = "16px";
info.style.border = "3px solid grey";
info.style.padding = "16px 12px 24px 12px";

const btn = document.querySelector("button");
const cardMeteo = document.querySelector(".cardMeteo");
cardMeteo.insertBefore(info, btn);

function bouton() {
    btn.classList.add("button__cardMeteo");
}

btn.addEventListener("mousedown", () => {
    btn.style.backgroundColor = "orange";
});
document.addEventListener("mouseup", () => {
    btn.style.backgroundColor = "";
});

btn.addEventListener("click", () => {
    fetch("https://prevision-meteo.ch/services/json/toulouse")
        .then((response) => response.json())
        .then((data) => {
            info.innerText = `Aujourd'hui le temps est : ${data.current_condition.condition}, et la température est de ${data.current_condition.tmp}°C
            Température max : ${data.fcst_day_0.tmax}°C
            Température min : ${data.fcst_day_0.tmin}°C`;
            bouton();
        })
        .catch((error) => {
            console.error("ERROREUH", error);
        });
});

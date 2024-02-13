const btn = document.querySelector("button");
const myList = document.querySelector("ul");

btn.addEventListener("click", () => {
    let task = document.createElement("li");
    task.innerText = document.querySelector("#todo").value;
    if (document.querySelector("#todo").value) {
        myList.append(task);
        document.querySelector("#todo").value = "";
    }
});

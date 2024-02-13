//La variable de config pour firebase
const firebaseConfig = {
    apiKey: "AIzaSyB6qT1-V9FD8rLMA6hEDFvgkEy4e_ueyUI",
    authDomain: "nuclear-kitten.firebaseapp.com",
    databaseURL: "https://nuclear-kitten-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nuclear-kitten",
    storageBucket: "nuclear-kitten.appspot.com",
    messagingSenderId: "631101266786",
    appId: "1:631101266786:web:de3432181a53f480862a3b",
};

firebase.initializeApp(firebaseConfig);
//On va créer une référence à notre BDD
const dbRef = firebase.database().ref();
// On va également faire une ref directement dans le noeud / """"table""""" users
const usersRef = dbRef.child("users");

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

const formUserUI = document.getElementById("add-user-form");
formUserUI.addEventListener("submit", (event) => event.preventDefault());

const formUserEditUI = document.getElementById("edit-user-module");
formUserEditUI.addEventListener("submit", (event) => event.preventDefault());

const userListUI = document.getElementById("user-list");
const userDetailUI = document.getElementById("user-detail");

readUserData();

function addUserBtnClicked() {
    addUserInputsUI = document.getElementsByClassName("user-input");
    let newUser = {};
    for (let i = 0; i < addUserInputsUI.length; i++) {
        let key = addUserInputsUI[i].getAttribute("data-key");
        let value = addUserInputsUI[i].value;
        newUser[key] = value;
    }
    usersRef.push(newUser);
    console.log(`NEW USER CREATED GGWP 
                LOOK AT YOUR BEAUTIFUL NAME : ${newUser.name}
                LOOK AT YOUR AWESOME AGE : ${newUser.age}`);
    document.querySelector("#add-user-form").reset();
}

function readUserData() {
    usersRef.on("value", (snap) => {
        userListUI.innerHTML = "";
        snap.forEach((childSnap) => {
            //* Key va stocker les ID
            let key = childSnap.key;
            let value = childSnap.val();
            let $li = document.createElement("li");
            //*Phase 4 on fait les icones pour UPDATE
            let editIconUI = document.createElement("button");
            editIconUI.innerText = "Update";
            editIconUI.setAttribute("class", "btn btn-outline-primary mx-3");
            editIconUI.setAttribute("userid", key);
            editIconUI.addEventListener("click", editButtonClicked);
            $li.innerText = value.name;
            $li.append(editIconUI);
            $li.setAttribute("user-key", key);
            $li.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
            //* À la lecture de chaque utilisateur on le rend clickable pour afficher les détails
            $li.addEventListener("click", userClicked);
            userListUI.append($li);
        });
    });
}

function userClicked(event) {
    //* on récupère l'id des USERS via l'attribut user-key que l'on a placé
    //* durant la lecture de la BDD (cf. la fonciton readUserData(vers la fin, le setAttribute)).
    let userID = event.target.getAttribute("user-key");
    console.log(userID);
    //* Maintenant qu'on à l'id de l'utilisateur sur lequel on a click
    //* on peut viser 1 utilisateur précisément dans la BDD
    const userRef = dbRef.child("users/" + userID);
    const userDetailUI = document.querySelector("#user-detail");
    userRef.on("value", (snap) => {
        userDetailUI.innerHTML = "";
        snap.forEach((childSnap) => {
            let $p = document.createElement("p");
            $p.innerHTML = childSnap.key + " : " + childSnap.val();
            userDetailUI.append($p);
        });
    });
}

function editButtonClicked(event) {
    formUserEditUI.style.display = "block";
    formUserUI.style.display = "none";
    // On récupère l'id de l'input hidden
    let inputId = document.querySelector(".edit-userid");
    inputId.value = event.target.getAttribute("userid");
    //* on vise le bon user dans la BDD via son ID
    const userRef = dbRef.child("users/" + inputId.value);
    //* On selectionne les input du formulaire d'édition pour les pré-remplir
    const editUserInputsUI = document.querySelectorAll(".edit-user-input");
    userRef.on("value", (snap) => {
        //*Avec une boucle On pré rempli le formulaire pour editer (en récupérant les key et valeurs)
        for (let i in editUserInputsUI) {
            let key = editUserInputsUI[i].getAttribute("data-key");
            editUserInputsUI[i].value = snap.val()[key];
        }
    });
    //* On place un addEventListener sur le bouton 'save' du formulaire
    //* Cela appellera la fonction saveUserBtnClicked qui elle se chargera d'enregistrer en BDD
    //* l'utilisateur que l'on vient d'éditer
    const saveBtn = document.querySelector("#edit-user-btn");
    saveBtn.addEventListener("click", saveUserBtnClicked);
}

function saveUserBtnClicked() {
    //* On récupère l'id de l'utilisateur
    const userID = document.querySelector(".edit-userid").value;
    //* avec cet id on fait une référence à cet utilisateur dans la BDD
    const userRef = dbRef.child("users/" + userID);
    //* on crée un objet vide pour le moment
    let editedUserObject = {};
    //* on selectionne tous les input du formulaire d'édition
    const editUserInputsUI = document.querySelectorAll(".edit-user-input");
    //* On fait une boucle sur ces inputs pour remplir notre objet
    editUserInputsUI.forEach(function (textField) {
        let key = textField.getAttribute("data-key");
        editedUserObject[key] = textField.value;
        //* On rempli l'objet
    });
    //* Une fois l'objet rempli on l'update dans la BDD
    userRef.update(editedUserObject);
    //* pour le confort on fait disparaitre le formulaire d'édition
    formUserEditUI.style.display = "none";
    formUserUI.style.display = "block";
}
function deleteButtonClicked(event) {}

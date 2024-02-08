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
            let key = childSnap.key;
            let value = childSnap.val();
            let $li = document.createElement("li");
            $li.innerHTML = value.name;
            $li.setAttribute("user-key", key);
            userListUI.append($li);
        });
    });
}

function userClicked(event) {}

function editButtonClicked(event) {}

function saveUserBtnClicked() {}

function deleteButtonClicked(event) {}

//TODO 5: Dans la ƒ° addUserBtnClicked, Récupérer TOUS LES INPUTS avec laclasse user-input 1 variable addUserInputsUI (getElementsByClassName)
//TODO 6: Dans la ƒ° addUserBtnClicked, créer une variable newUser (qui est un objet vide)
//TODO 7: Dans la ƒ° addUserBtnClicked, faire une boucle for pour parcourir les input dans addUserInputsUI
//TODO 8: Dans la Boucle, Pour chaque éléments parcourus on récupère Dans 1 variable key = addUserInputsUI[i].getAttribute('data-key');
//TODO 9: Dans la boucle, 1 variable value = addUserInputsUI[I].value
//TODO 10: Dans la boucle, Pour chaque clé (âge, name, email) on l’associe à notre nouvel utilisateur :  newUser[key] = value
//TODO 11: après le parcours des inputs, sur usersRef on va faire un push de newUser
//TODO 12: Dans la ƒ° addUserBtnClicked, on console log un msg type nouvel utilisateur enregistré
//TODO 13: Dans la ƒ° addUserBtnClicked, On console log le nom et l’âge du nouvel utilisateur
//TODO 14: Dans la ƒ° addUserBtnClicked, On ré initialise le formulaire avec l’id add-user-form

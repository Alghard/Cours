// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.
function sortCase(t,i){
    if(t[i] > t[i+1]){
        let temp = t[i];
        t[i] = t[i+1];
        t[i+1] = temp;
    }
}
let tab1 = [22,1,18,2,78,162,12,0,36,9];
console.log(tab1);

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).
function sortArrayOnce(t){
    for (let i = 0 ; i < t.length-1 ; i++){
        sortCase(t,i);   
    }
}

// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.
function sortArray(t){
    for(let j = 0; j < t.length-1 ; j++){
        sortArrayOnce(t);
    }
}
sortArray(tab1);
console.log(tab1);
// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.
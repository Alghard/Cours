// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayLastElement(array){
    console.log(array[array.length-1]);
}
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLastElement(array){
    let lastElement = array[array.length-1];   
    return lastElement;
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function returnMinElement(array){
    let min = array[0];
    for(let i = 0 ; i < array.length ; i++){
        if (array[i] < min){
            min = array[i];
        }
    }
    return min;    
}
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function returnMaxElement(array){
    let max = array[0];
    for(let i = 0 ; i < array.length ; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;    
}

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function returnNb(array,nb){
    let count = 0;
    for(let i = 0 ; i < array.length ; i++){
        if(nb == array[i]){
            count ++;
        }
    }
    return count;
}

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
// Note : il y a une variante plus compliquée de cet exo, tout en bas de la feuille !
function returnExistingNb(array,nb){
    let existingNb = false;
    for (let i = 0 ; i < array.length ; i++){
        if (nb == array[i]){
            existingNb = true;
        }
    }
    return existingNb;
}


function returnExistingNb2(array,nb) {
    for (let i = 0 ; i < array.length ; i++){
        if (nb == array[i]){
            return true;
        }
    }
    return false;
}

function returnExistingNb3(array,nb){
    return returnNb(array,nb)>0;
}
// Créer un tableau qui contient [1,2,3,...,7777].
let tab1 = [];
for (let i = 1 ; i <= 7777 ; i++){
    tab1.push(i);
}
console.log(tab1);

// Créer un tableau qui contient [10,20,30,...,77770].
let tab2 = [];
let nb = 10;
for (let i = 1 ; i <= 7777 ; i++){
    tab2.push(nb);
    nb += 10;
}

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tab3 = [];
for (let i = 0 ; i < 7777 ; i++){
    tab3[i] = tab2[i]/2;
}

console.log(tab3);

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]
function deleteValueUnder50(array){
    while (array[array.length-1]<50){
        array.pop();
    }

    return array;
}
console.log(deleteValueUnder50([1,45,88,54,23,-100,12]));
//2 eme possibilité
/*function deleteValueUnder50(array){
    for ( let i = array.length-1 ; i >= 0 &&  array[i]<50; i--){
        console.log(array,i);
        array.pop();
    }
    return array;
}
*/



// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function returnSecondMax(array){
    let max = 0;
    let secondMax = 0;
    for(let i = 0 ; i < array.length ; i++){
        if (array[i] > max ){
            secondMax = max;
            max = array[i];
        } else if(array[i]> secondMax){
            secondMax = array[i];
        }        
    }
    return secondMax;
}

console.log(returnSecondMax([13,15,14,45,12,786,12,335496,1256,5684,1,223,5]));

// [Bonus] Suite de l'exo de recherche de valeur : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

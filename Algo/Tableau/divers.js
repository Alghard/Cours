// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
function returnMaxCase(array){
    let max = array[0];
    let index;
    for(let i = 0 ; i < array.length ; i++){
        if (array[i] > max){
            max = array[i];
            index = i;
        }
    }
return index;    
}

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function returnSumElement(array){
    let somme = 0;
    let temp = 0;
    for (let i = 0 ; i < array.length ; i++){
        temp = somme;
        somme = temp + array[i];
    }
return somme; 
}

// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.
function returnSumPos(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]>0) {					
			result += arr[i];				
		}
	}
return result;							
}

// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.
function returnSumNeg(array){
    let result = returnSumElement(array)-returnSumPos(array);
    return result;
}
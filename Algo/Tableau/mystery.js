function f1(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {					//Contrôle si la valeur du tableau i est paire
			result += arr[i];				//Si oui ajoute cette valeur au résultat
		}
	}
	return result;							//Retourne la somme des nombres pair ?
}
	
function f2(arr) {							//Fonction qui fait la somme de une valeur sur 2 d'un tableau
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i%2==0) {
			result += arr[i];				//résultat = résultat + valeur du tableau i SI i Modulo 2 = 0 CàD SI i est pair
		}
	}
	return result;
}

// Écrire une fonction f3 qui prend un tableau en entrée
// et qui retourne la somme des numéros de cases des éléments pairs d'un tableau

function f3(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {					
			result += i;				
		}
	}
	return result;							
}

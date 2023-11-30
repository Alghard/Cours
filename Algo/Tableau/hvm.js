let memory = [];

function reset() {
	memory = [];							//Vide le tableau
}

function p(n) {
	memory.push(n);							//Ajoute une valeur au tableau
}

function duplicate() {
	p(memory[memory.length-1]);				//Ajoute une copie de la derniere valeur du tableau
}

function r() {
	return memory.pop();					//Supprime la derniere valeur du tableau
}

function add() {							//Supprime et garde en memoire les 2 derniere valeurs puis ajoute la somme de ses valeurs au tableau
	let a = r();
	let b = r();
	p(a+b);
}

function sub() {							//Soustrait les 2 dernieres valeurs du tableau et ajoute le résultat au tableau
	p(r() - r());
}

function twice() {							//Ajoute une copie de la derniere valeur du tableau puis Supprime et garde en memoire les 2 derniere valeurs puis ajoute la somme de ses valeurs au tableau

	duplicate();
	add();
}	

function print() {
	console.log("Contenu actuel :");
	for(let i = 0 ; i < memory.length ; i++) {
		console.log(i,'->',memory[i]);
	}
}

// Niveau 1
console.log("Niveau 1");
reset();
p(2);
p(8);
print();

// Niveau 2
console.log("Niveau 2");
reset();
p(2);
twice();
print();

// Niveau 3
console.log("Niveau 3");
reset();
p(53);
for(let i = 0 ; i < 4; i++) {
	p(53);
	add();
}

p(1);
for(let i = 0 ; i < 9 ; i++) {
	twice();
}

add();
print();

// Niveau 4
console.log("Niveau 4");
reset();
let level4 = 5;
for(let i = 0 ; i<level4 ; i++) {
	p(i+1);
}
print();
while(memory.length>1) {
	add();
}
print();

// Niveau 5
console.log("Niveau 5");
let level5 = 5;
reset();

p(0);
for(let i = 0 ; i < level5-1 ; i++) {
	// TODO
	duplicate();
	twice();
	p(1);
	add();	
}
print(); // Doit afficher :
// 0 -> 0
// 1 -> 1
// 2 -> 3
// 3 -> 7
// 4 -> 15

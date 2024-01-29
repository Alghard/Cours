let mysteryNumber;
let numberOfTries;
function chooseNumber(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
function initGame(){
	mysteryNumber=chooseNumber(1,100);numberOfTries=0;
}
function makeAGuess(){
	let guess=parseInt(prompt("Quelle valeur proposez-vous ?"));
	numberOfTries++;
	if(guess==mysteryNumber){
		return 0;
	}else if(guess>mysteryNumber){
		return 1;
	}else if(guess<mysteryNumber){
		return -1;
	}
}
function play(){
	initGame();
	let gameNotFinished=true;
	while(gameNotFinished){
		let result=makeAGuess();
		if(result==0){
			let plural=numberOfTries>1?"s":"";
			console.log("C'est gagné ! Vous avez trouvé en "+numberOfTries+" coup"+plural+".");
			gameNotFinished=false;
		}else if(result>0){
			console.log("Trop grand !");
		}else{
			console.log("Trop petit !");
		}
		if(gameNotFinished){
			console.log("Essayez encore !");
		}
	}
}
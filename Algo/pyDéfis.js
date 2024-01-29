
//pyDéfis SW Vitesse supérieure
let x = 997;
let y = 312;
let z = 663;

while (10*x > y){
    x = (y * z)%10000;
    y = (3 * z)%10000;
    z = (7 * z)%10000;
}
console.log(x, y, z)

//pyDéfis Désamorçage à la Tony Stark
function defuse(n){
    let result = 0;
    for(let i = 0 ; i < n ; i++ ){
        if (i%3 == 0 || i%5 == 0){
            result += i;
        }
    }
    return result;
}

console.log(defuse(1435));

//pyDéfis désamorçage d'un explosif (I)


function defusing(serialNumber){
    let N = serialNumber%1000;
    let U = (serialNumber-N)/1000;
    for (let i = 0 ; i < N ; i++ ){
        U *= 13;
        U = U%1000;
    }
    return U;
}
console.log(defusing(797114));

//pyDéfis Herculito11
let apple = 0;
for(let i = 1 ; i <= 50 ; i++){
    if((i*i)%3 == 0){
        apple += (i*i);
    }
}
console.log(apple);

//pyDéfis Les boeufs de Geryon
function nbBoeufs(roux, noir, blanc){
    let result = roux + noir + blanc;
    if(noir > blanc*2){
        return false;
    }
    if (result > 1000){
        return false;
    }
    if (blanc > roux || roux > noir){
        return false;
    }
    if (roux*noir*blanc != result*777){
        return false;
    }
    return true;
}
    
for (let roux = 1 ; roux <= 1000 ; roux++){
    for(let noir = 1 ; noir <= 1000 ; noir++){
        for(let blanc = 1 ; blanc <= 1000 ; blanc ++){
            if (nbBoeufs(roux,noir,blanc)){             // si la combi roux noir blanc est correcte, c'est gagné on affiche roux noir blanc
                console.log(roux,noir,blanc);
            }
        }
    }
}


//pyDéfis Lion de némée

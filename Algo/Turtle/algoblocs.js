//Initialisation du niveau
setPos(20,300);
changeColor(color.red);
setLineWidth(1);

/*
//A1
//Réalisation
forward(200);
faceRight();
forward(100);

//A2
//Réalisation
changeColor(color.yellow);
faceLeft();
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);

//A3
//Réalisation
changeColor(color.red);
forward(100);
backward(200);
forward(100);
faceLeft();
forward(100);
backward(200);


//A4
//Réalisation
setPos(100,500);
faceRight();
changeColor(color.green);
forward(200);
arcLeft(100,180);
forward(100);
arcRight(100,180);
forward(200);


//A5
setPos(300,50);
changeColor(color.fuchsia);
faceRight();
arcRight(200,360);
arcRight(100,180);
arcLeft(100,180);


//A6
setPos(300,400);
changeColor(color.blue);
faceUp();
forward(100);
up();
forward(100);
down();
forward(200);


//A7
changeColor(color.green);
forward(200);
arcLeft(100,180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100,180);
forward(100);


//A8
changeColor(color.fuchsia);
faceUp();
forward(100);
faceRight();
forward(200);
faceDown();
forward(400);
faceLeft();
forward(100);
up();
forward(100);
faceUp();
forward(100);
down();
forward(100);


//A9
setPos(100,500);
changeColor(color.blue);
faceRight();
arcLeft(100,180);
arcRight(100,180);
forward(400);
arcRight(100,180);
arcLeft(100,180);
faceLeft();
forward(400);


//A10
setPos(100,300);
faceRight();
arcLeft(100,180);
changeColor(color.green);
arcLeft(200,180);
changeColor(color.yellow);
arcLeft(400,180);


//A11
setPos(100,300);
faceUp();
changeColor(color.blue);
arcRight(100,180);
faceRight();
up();
forward(100);
down();
faceUp();
arcRight(100,180);
up();
changeColor(color.fuchsia)
faceLeft();
forward(50);
faceDown();
down();
arcRight(200,180);


//A12
setPos(50,300);
faceUp();
changeColor(color.green);
arcRight(50,180);
forward(100);
arcLeft(50,180);
faceRight();
up();
forward(100);
down();
changeColor(color.yellow);
faceDown();
arcLeft(50,180);
forward(100);
arcRight(50,180);


//B1
setPos(50,50);
changeColor(color.green);
faceRight();
for(let j=0; j<4; j++){
forward(50);
faceDown();
forward(50);
faceRight();
}



//B2
setPos(50,300);
faceUp();
for(let i=0; i<4; i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}



//B3
changeColor(color.fuchsia);
faceRight();
for(let i=0; i<4; i++){
    forward(100);
    right(90);
}


//B4
changeColor(color.blue);
faceRight();
for(let i = 0; i<3; i++){
    forward(100);
    left(180-60);
}


//B5
faceUp();
changeColor(color.brown);
forward(50);
changeColor(color.red);
for(let i = 0; i < 3; i++){
    forward(25);
    right(180-60);
}



//B6
setPos(50,300);
faceRight();
for(let i = 0; i < 2; i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);
for(let i = 0; i < 3; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}



//B7
faceRight();
for(let i = 0; i < 4; i++){
    forward(50);
    right(90);
}
for(let i = 0; i < 3; i++){
    forward(50);
    left(120);
}



//B8
faceRight();
changeColor(color.yellow);
for(let i = 0; i < 8; i++){
    forward(100);
    right(180-45);
}

//B9
changeColor(color.fuchsia);
faceRight();
forward(50);
up();
forward(50);
down();
for(let i = 0; i < 3; i++){
    forward(50);
    right(180-60);
}



//B10
setPos(10,300);
faceRight();
changeColor(color.blue);
for(let i = 0; i < 8; i++){
    forward(100);
    right(180-45);
}
up();
forward(200);
down();
changeColor(color.yellow);
for(let i = 0; i < 8; i++){
    forward(200);
    left(180-45);
}
faceDown();
up();
forward(100);
down();
changeColor(color.fuchsia);
for(let i = 0; i < 8; i++){
    forward(100);
    right(180-45);
}


//B11
faceRight();
for(let i = 0; i < 4; i++){
    forward(50);
    left(180-90);
    forward(50);
    right(180-90);
    forward(50);
    right(180-90);
}



//B12
faceRight();
changeColor(color.fuchsia);
for(let i = 0; i < 3; i++){
    right(180-90);
    forward(50);
}
up();
forward(50);
down();
changeColor(color.green);
for(let i = 0; i < 3; i++){
    forward(50);
    right(180-90);
}



//B13
changeColor(color.green);
faceRight();
for(let i = 0; i < 8; i++){
    forward(100);
    left(180-45);
    forward(50);
    right(180-90);
    forward(50);
    right(180-90);
}


//B14
setPos(50,100);
changeColor(color.yellow);
faceRight();
forward(50);
for(let i = 0; i < 5; i++){
    right(180-60);
    forward(100);
    left(180-60);
    forward(100);
}



//B15
faceRight();
for(let i = 0; i < 4; i ++){
    forward(100);
    arcLeft(50,90);
}


//B16
faceRight();
changeColor(color.green);
for(let i = 0; i < 4; i++){
    arcLeft(25,90);
    arcRight(25,90);
}
faceDown();
arcRight(200,90);


//B17
changeColor(color.blue);
faceRight();
for(let i = 0; i < 6; i++){
    arcLeft(50,180);
    left(180-60);
}


//B18

faceRight();
changeColor(color.yellow);
for(let i = 0; i < 8 ; i++){
    forward(200);
    left(180-90);
    forward(25);
    left(180-135);
}



//B19
setPos(300,500);
changeColor(color.aqua);
faceRight();
for(let i = 0; i < 4; i++){
    arcLeft(50,180);
    faceRight();
}
up();
faceRight();
arcLeft(25,180);
down();
for(let i = 0; i < 4; i++){
    arcLeft(50,180);
    faceLeft();
}

//B20
changeColor(color.aqua);
for(let i = 0; i < 2; i++){
    forward(100);
    arcLeft(50,90);
}
forward(150);
arcLeft(50,90);
forward(100);
arcLeft(50,90);
forward(50);
faceRight();
forward(200);
backward(100);
faceDown();
up();
forward(25);
down();
forward(10);

//B21
faceRight();
changeColor(color.blue);
for(let i = 0; i < 6; i++){
    forward(100);
    left(180-60);
    forward(50);
    left(180-60);
    forward(100);
    right(180-120);
    forward(50);
    right(180-60);
    forward(50);
    right(180-60);
    up();
    forward(100);
    down();
    shiftColor(0.10);
}


//B22
changeColor(color.yellow);
left(180-60);
for(let i = 0; i < 6; i++){
    forward(100);
    left(180-120);
}
changeColor(color.red);
right(180-90);
forward(100);
right(180-60);
forward(100);
changeColor(color.green);
right(180-150);
for(let i = 0; i < 7; i++){
    forward(100);
    right(180-90);
}
left(180-120);
for(let i = 0; i < 6; i++){
    forward(100);
    left(180-90);
}



changeColor(color.fuchsia);
left(135);
for(let i = 0; i < 3 ; i++){
    forward(50);
    right(90);
    forward(50);
    left(90);
}
right(180-45);
forward(50);
right(180-135);
for(let i = 0; i <3; i++){
    forward(50);
    right(90);
    forward(50);
    left(90);
}
right(180-45);
forward(50);



//B24
faceRight();
for(let i = 0; i < 8; i++){
    forward(100);
    left(180-45);
}
forward(50);
changeColor(color.green);
for(let i = 0;  i< 3; i++){
    right(180-45);
    forward(100);
    left(180-45);
    forward(50);

}
forward(50);
right(180-90);
forward(25);
for(let i = 0; i < 2; i++){
    left(180-90);
    forward(25);
}
right(180-90);
forward(50);
for(let i = 0; i < 3; i ++){
    forward(50);
    left(180-45);
    forward(100);
    right(180-45);
}

faceUp();
let n = 360;
for(let i = 0 ; i < n ; i++){
    forward(200);
    backward(200);
    shiftColor(1/n);
    right(360/n);
}


changeColor(color.green);
faceRight();
let lg = 50;
let nb_Cote = 3;
for(let y = 0 ; y < 10 ; y++){

    for(i = 0; i < nb_Cote ; i++ ){
        forward(lg);
        left(360/nb_Cote);
    }
    nb_Cote ++;
    shiftColor(0.1);
}


function getRandomInt(max){
    return Math.random()*max;
}

for(let i = 0 ; i < 200 ; i++){
    forward(getRandomInt(50));
    if(getRandomInt(2) == 0){
        left(getRandomInt(180));
    }
    else{
        right(getRandomInt(180));
    }
    shiftColor(0.10);
}



let nb = 0;
for(let x = 0 ; x < 10; x++){
    nb = nb + 1;
    console.log(nb);
}

*/

/*
for(let i = 0; i < 2000; i ++){
    forward(Math.random()*20);
    right(Math.random()*360);
    shiftColor(0.01);

}
*/

let msg = "NNEESOOESEENNEEOOSEOSEEENNESENSSENNEESSOOEEENNEEOOSEOSEEENEENOOEESOOSEEEEEEENONSESENNSSENNEESSOOEEENNSSEENNSSEEENOONEEOOSEESEEEENNEESSOOEEENNEESOOEESENNESENSSEEENOONEEOOSEESEEEENNSSEEENNEESOOEESEEEENNEEOOSEOSEEENNEESSOOEEENNEESOOESEENNEEOOSEOSEEEENNOEEOSSEEEEENNEESOOEESOOEEENNEESOOESEENNSSEENNSSENNESNESSENNEEOOSEOSEEENNSSEENNSSEEENOONEEOOSEESENNEEOOSEOSEEEEEENNEESSOOEEENNEEOOSEOSEEENNESNESSENNEESOOEESENNSSENNESENSS";
for (let i = 0; i < msg.length ; i++){
    if (msg[i] == "N"){
      faceUp();
    }else if (msg[i] == "S"){
        faceDown();
    }else if (msg[i] == "E"){
        faceRight();
    }else {
        faceLeft();
    }
    forward(7);
}
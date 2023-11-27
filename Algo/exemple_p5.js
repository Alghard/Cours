// Le code à l'intérieur de la fonction setup est automatiquement exécuté par p5 au démarrage du dessin (quand on clique sur la flèche en haut).
function setup() {
  // Créer la zone de dessin. 600 px de large, et 400px de haut.
  createCanvas(600, 400);
  console.log("Setup");
  
  // Changer la taille du crayon (la "pointe" est plus ou moins épaisse).
  strokeWeight(10);
  
  // Changer la couleur du remplissage des formes. Même chose pour la couleur. Pour la couleur, voir le "background" plus bas.
  fill(100,180,255);
  // Désactiver le remplissage des formes.
  noFill();
}

// Le code à l'intérieur de la fonction draw est automatiquement exécuté par p5 après le setup. Et il est fait EN BOUCLE, À L'INFINI.
// - une fois le code dans draw
// - il affiche le résultat
// - une fois le code dans draw
// - il affiche le résultat
// etc
function draw() {
  // Remplit la zone de dessin d'une couleur
  // Un nombre : nuance de gris (R=G=B)
  // Trois nombres : RGB
  // Quatre nombres : RGB + opacité
  background(255,0,0, 5); // Ici, rouge très transparent.
  console.log("Draw");
  
  // Changer la couleur du crayon. Pour le détail de la couleur, c'est la même chose qu'avec le "background".
  stroke(0,255,0);
  
  // Faire un point en x=300, y=200.
  point(300,200);
  
  // Maintenant, on dessine en vert un peu plus foncé.
  stroke(0,150,0);
  
  // Faire une ligne de (x=110, y=300) à (x=130, y=380).
  line(110,300,130,380);
  
  // Faire un cercle centré en (x=120, y=90), de taille totale (diamètre) 100px.
  circle(120,90, 100);
 
  // Faire une ellipse (un cercle déformé) centrée en (x=450, y=100), de largeur 150px et de hauteur 50px.
  ellipse(450,100, 150, 50);
  
  // Faire un carré dont le coin est en (x=450, y=200), de taille 50px.
  square(450,200, 50);
  
  // Faire un rectangle dont le coin est en (x=50, y=300), de largeur 500px, de hauteur 80px.
  rect(50,300,500,80);
  
  // p5 nous fournit deux variables qui contiennent les coordonnées de la souris. C'est lui qui s'occupe de les créer et de leur affecter les bonnes valeurs. Nous, on se contente de les lire !
  // mouseX : position horizontale
  // mouseY : position verticale
  point(mouseX, mouseY);
  // Je dessine en bleu maintenant.
  stroke(0,0,255);
  // Je fais un point en haut à gauche de la souris
  point(mouseX-20, mouseY-20);
  // Je fais un point en haut à droite de la souris.
  point(mouseX+20, mouseY-20);
  
}

// Le code à l'intérieur de "mouseClicked" est exécuté automatiquement par p5 quand l'utilisateur clique dans le dessin.
function mouseClicked() {
  console.log("Clic !");
  console.log("La souris est à la position", mouseX, mouseY);
  // On remet un fond noir (qui va vite être recouvert par les feuilles rouges transparentes).
  background(0);
}
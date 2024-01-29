let array = ["Jean", "Ursul", "Pikachu", "Caliméro", "a", "b", "c", "d"];
/* 
function shuffle() {
  for (let i = 0; i < tab.length; i++) {
    let numCase = Math.floor(Math.random() * (i + 1));
    let save = tab[numCase];
    tab[numCase] = tab[i];
    tab[i] = save;
  }
  return tab;
}
*/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(array);
console.log(array);

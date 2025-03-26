const grille1 = ["", "", ""]; 
const grille2 = ["", "", ""]; 
const grille3 = ["", "", ""]; 

function pushGrille(grille) {
    for (let i = 0; i < grille.length; i++) {
        let message = prompt('Entré un nom :');
        grille[i] = message; 
    }
}

pushGrille(grille1);
pushGrille(grille2);
pushGrille(grille3);

console.log(grille1, grille2, grille3); 



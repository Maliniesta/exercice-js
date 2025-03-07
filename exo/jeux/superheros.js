/*demander combien d'entrainement voulez vous?
afficher les entrainements de 0 au nombre choisi 
a chaque entrainement terminé une vie sera donner en plus 
dire que les entrainements sont terminés*/

let entrainement= prompt("combien voulez vous d'entrainement?");
let vie=3;
let ennemi= 3;
for (let i=0;i<entrainement;i++){
    vie++;
}
alert(' tu a fait '+ entrainement + ' entrainements, tu a donc ' + vie + ' vies '); 

/*annoncer le début du combat et demander attaque ou fuite?
tant que la vie et les ennemi son superieur a 0'
demander attaque ou fuite?
si l action est egal a attaque 
enemi perd 1 et vie perd 3
declarer enemi et vie restante
sinon tu a pris la fuite
casser la boucle
si il n y a plus d ennemi message enemi vaincu
sinon si vie 0 declarer  message vie 0
sinon declarer nombre d ennemi et de vie  restante
declarer fin du combat

*/

let combat = prompt('Début du combat! Tapez "attaque" ou "fuite"');

while (vie > 0 && vie > 0) {
    let action = prompt('Il reste ' + ennemi + " ennemis et " + vie + " de vie. Attaque ou fuite?");
    if (action === "attaque") {
        ennemi--;
        vie -= 3;
        alert("Tu attaques! Il reste " + ennemi + " ennemis et " + vie + " de vie.");
    } else {
        alert("tu a pris la fuite .");
        break;
    }
}

if (ennemi <= 0) {
    alert("Tous les ennemis sont vaincus !");
} else if (vie <= 0) {
    alert("Tu n'as plus d'énergie, fin du combat...");
} else{
    alert("tu a fuis , il reste " + ennemi + " ennemi et " + vie + " de vie")
}

alert('Fin du combat!');

/*declarer tableau de recompense
dsitribuer les recompenses au heros
signaler la fin de l'aventure*/


let recompense='';
let recompenses = ['épée légendaire', 'potion magique', 'bouclier en or'];
for (let i=0; i<recompenses.length;i++){
   recompense= recompense +recompenses[i];
}
alert(recompense);
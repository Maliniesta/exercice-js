/* Exercice 1*/

function Bonbon(prix,argentEnfant){
    if(argentEnfant>prix){
        console.log('tu peux acheter le bonbon')
    }else{
        console.log('il te manque '+(prix-argentEnfant)+ ' piéces')
    }
}

Bonbon(10,5);

Bonbon(5,10);

/* Exercice 2*/
let meteo= ['soleil','pluie','neige','vent'];
function conseilMeteo(meteo){
        if (meteo ==='soleil'){
            console.log("Mets de la crème solaire !")
        }else if(meteo ==='pluie'){
            console.log("Prends ton parapluie !")
        }else if(meteo === 'neige'){
            console.log("Mets une écharpe !")
        }else{
            console.log("met un k-way")
        }      
    }


conseilMeteo( "soleil");

/* Exercice 3*/
function combattreDragon(){
    let choice= prompt('choisissez votre arme : épée ou arc?');
    let victoire;

    if(choice==='épée'){
        victoire=0.7;
        alert("vous avez choisit l'épée vous attaquerez de près");
    }else if(choice==='arc'){
        victoire=0.3;
        alert("vous avez choisit arc vous attaquerez de loin");
    }else{
        alert('mauvais choix actualiser la page ppour recommencer')
        return
    };
    let resultat= Math.random();
    if(resultat>victoire){
        alert('le dragon a gagné')
    }else{
        alert('vous avez gagnez')
    }
    return resultat;
}

combattreDragon();


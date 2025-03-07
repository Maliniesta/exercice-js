
function direBonjour(nom,callback){
    console.log("bonjour, " + nom + "!");
    callback()
}

function direAuRevoir(){
    console.log("au revoir");
}

function crier(){
    console.log('imbécile');
};

direBonjour('a', direAuRevoir);
direBonjour('b',crier);
setTimeout(crier, 2000); 



function saluer(){
    console.log("Bonjour!");
};

function direMerci(){
    console.log("Merci !");
};

function direBonneJournée(){
    console.log('bonne journée');
};

function processus(){
    console.log("début du processus...");
    setTimeout(saluer,1000);
    setTimeout(direMerci,1000)
    setTimeout(direBonneJournée,1000);
    setTimeout(1000);
    console.log("Fin du processus");
};

processus();


function creerSalutation(nom,callback) {
    return function() {
        console.log(' Bonjour ' + nom + '!')
        callback();
    };
};

function nouvelle(){
    console.log("comment vas'tu?")
}

const salutationAlice= creerSalutation('Alice',nouvelle);
const SalutationBob= creerSalutation('Bob',nouvelle);
const SalutationCharlie= creerSalutation('Charlie',nouvelle);

salutationAlice();
SalutationBob();
SalutationCharlie();
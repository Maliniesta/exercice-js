const tableau= ['','','','',''];
const lettre= ['A','B','C','D','E']

for(let i=0; i<5; i++){
    console.log('case ' + tableau[i]);
}

let i=0;
while(i<tableau.length){
    tableau[i] = lettre [i];
    i++;
}

tableau.forEach(function(valeur){
    console.log('case' + valeur)
});



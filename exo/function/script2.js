/*
l equipe contient 7 astronaute avec leur propriété
présenter equipage 
lister les ressources
présenter les ressources

fonction décolage
si L’équipage a un commandant ET un pilote
ET L’oxygène est supérieur à 50%
ET Le carburant est supérieur à 3000L
ET La nourriture est suffisante (150 rations)
ET Il y a au moins un ingénieur OU un scientifique
ALORS decolage est vrai et message decolage
SINON decolage est faux mission annuler 

function analyse 
si xp>=7
afficher astronaute bon niveau
sinon afficher manque d xp

function compte a rebours
compte a rebours en décrémentant de 10 a 0
a 0 afficher decollage
*/ 

let astronautes= [
    {nom:'a',role:'commandant',experience:9,genre:'homme',age:45,poid:'80kg',régime:'carnivore'},
    {nom:'b',role:'ingénieur',experience:10,genre:'homme',age:51,poid:'70kg',régime:'carnivore'},
    {nom:'c',role:'médecin',experience:5,genre:'femme',age:35,poid:'50kg',régime:'végan'},
    {nom:'d',role:'scientifique',experience:4,genre:'femme',age:41,poid:'60kg',régime:'carnivore'},
    {nom:'e',role:'pilote',experience:2,genre:'homme',age:39,poid:'75kg',régime:'végan'},
    {nom:'f',role:'cuisinier',experience:5,genre:'homme',age:45,poid:'120kg',régime:'carnivore'},
    {nom:'g',role:'analyste',experience:3,genre:'femme',age:31,poid:'70kg',régime:'carnivore'}
];

astronautes.forEach(function(astronaute){
    alert(astronaute.nom + " - " + astronaute.role + " - " + astronaute.experience + " ans d'expérience");
});

let ressources=[
    {oxygene:75,carburant:5000,nourriture:300,eau:600}
]

ressources.forEach(function(ressource){
    alert(ressource.oxygene + " % d'oxygène " + ressource.carburant + " Litre d'essence " + ressource.nourriture + " ration de nourriture pour le voyage " + ressource.eau + " Litre d'eau pour le voyage" );
});

function validation(décolage){
    
}







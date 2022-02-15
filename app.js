// let barque = document.getElementById('barque');
// barque.addEventListener("click", function(){
//     barque.style.opacity="1";
// });

// let oiseau = document.getElementById('oiseau');
// oiseau.addEventListener("click", function(){
//     oiseau.style.opacity="1";
// });

// let pattedroite = document.getElementById('patte-droite');
// pattedroite.addEventListener("click", function(){
//     pattedroite.style.opacity="1";
// });

// let pattegauche = document.getElementById('patte-gauche');
// pattegauche.addEventListener("click", function(){
//     pattegauche.style.opacity="1";
// });

// let rocher = document.getElementById('rocher');
// rocher.addEventListener("click", function(){
//     rocher.style.opacity="1";
// });

// let tache = document.getElementById('tache');
// tache.addEventListener("click", function(){
//     tache.style.opacity="1";
// });

// let terre = document.getElementById('terre');
// terre.addEventListener("click", function(){
//     terre.style.opacity="1";
// });

let barque = document.getElementById('barque');
let oiseau = document.getElementById('oiseau');
let pattedroite = document.getElementById('patte-droite');
let pattegauche = document.getElementById('patte-gauche');
let rocher = document.getElementById('rocher');
let tache = document.getElementById('tache');
let terre = document.getElementById('terre');

function opacity1(param){
    param.style.opacity="1";
}

function opacity0(param){
    param.style.opacity="0";
}

function opacity03(param){
    param.style.opacity="0.3";
}

barque.addEventListener("click", function (){
    opacity1(barque);
});

oiseau.addEventListener("click", function (){
    opacity1(oiseau);
});

pattedroite.addEventListener("click", function (){
    opacity1(pattedroite);
});

pattegauche.addEventListener("click", function (){
    opacity1(pattegauche);
});

rocher.addEventListener("click", function (){
    opacity1(rocher);
});

tache.addEventListener("click", function (){
    opacity1(tache);
});

terre.addEventListener("click", function (){
    opacity1(terre);
});

let reset = document.getElementById('btn-reset');
reset.addEventListener("click", function(){
    opacity0(barque);
    opacity0(oiseau);
    opacity0(pattedroite);
    opacity0(pattegauche);
    opacity0(rocher);
    opacity0(tache);
    opacity0(terre);
    alert("Aller on reset");
});

let soluce = document.getElementById('btn-soluce');
soluce.addEventListener("click", function(){
    opacity1(barque);
    opacity1(oiseau);
    opacity1(pattedroite);
    opacity1(pattegauche);
    opacity1(rocher);
    opacity1(tache);
    opacity1(terre);
    alert("Pourtant c'est pas difficile à trouver...");
});




let clues = document.getElementById('btn-clues');
clues.addEventListener("click", function(){
    opacity03(barque);
    opacity03(oiseau);
    opacity03(pattedroite);
    opacity03(pattegauche);
    opacity03(rocher);
    opacity03(tache);
    opacity03(terre);
    alert("Alors besoin d'indices ?");
});
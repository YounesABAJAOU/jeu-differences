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



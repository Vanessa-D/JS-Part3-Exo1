// Fonction qui applique une bordure à l'image ciblée dans le Dom au passage de la souris 
// à l'endroit de l'id image
function setBorder(){
    document.getElementById("img1").style.border="solid black";
}
function noneBorder(){
    document.getElementById("img1").style.border="none";
}



// Syntaxe avec onmouseover/onmouseout qui représente le gestionnaire d’évènement pour les évènements
// mouseover/mouseout de l’élément courant --> fonction nommée classique : 

// element.event = function (){ } --> idInput.onblur = function functionName() {instructions;}

/*
let image = document.getElementById("img1");

function setBorder(){
    image.style.border="solid black";
}

function noneBorder(){
    image.style.border="none";
}

image.onmouseover = setBorder ;
image.onmouseout = noneBorder;
*/



// Méthode addEventListener() qui permet d’enregistrer une fonction qui sera appelée lors du déclenchement 
// de l'évènement => fonction fléchée :

// 1- Stockage des différents éléments HTML

/*
let image = document.getElementById("img1");
Or

*/

// 2- On attache ensuite un gestionnaire d’évènement mouseover/mouseout aux boutons avec addEventListener()
// On passe deux arguments à cette méthode : le nom de l'évènement qu’on souhaite prendre en charge 
// et le code à exécuter (qui prendra souvent la forme d’une fonction) en cas de déclenchement de cet évènement

/*
image.addEventListener("mouseover", () => {
    image.style.border="solid black";
});
image.addEventListener("mouseout", () => {
    image.style.border="none";
})
*/
/* quand on click sur le boutton avec une valeurs alors ajoute celle ci au span */

var id =0 ;

function btn(val) {

    document.getElementById("calcul").innerHTML += val;
}
// vide le champ
function btnDelete(){
        document.getElementById("calcul").innerHTML = "";
}
// ajout des operateurs
function btnPlus() {
    document.getElementById("calcul").innerHTML += "+";
}
function btnMoins() {
    document.getElementById("calcul").innerHTML += "-";
}
function btnMultiple() {
    document.getElementById("calcul").innerHTML += "*";
}
function btnDivision() {
    document.getElementById("calcul").innerHTML += "/";
}
function btnVirgule() {
    document.getElementById("calcul").innerHTML += ".";
}
// recupere la valeur du span fait le calcul et renvoi la valeur
function btnEgal() {

    //transforme en chaine de caractere
    var cara = String(document.getElementById('calcul').innerHTML);

    // si la valeur retourné n'est pas constitué que de +-*/ et de chiffres alors retourne error
    if(/[^0-9()*+\/ .-]+/.test(cara)) throw Error('Bien essayé petit malin...');

    // si condition respecter alors faire le calcule avec eval
    var egal = eval(document.getElementById('calcul').innerHTML);
    document.getElementById('calcul').innerHTML = egal;
    // attribue une valeur a local storage : chaine de caractère du calcul + le résultat de celui-ci
    localStorage.setItem('result', cara + " = "+ egal);
    // permet de creer une nouvelle entrée dans le tableau avec les valeurs données
    for (var i = 1; i < localStorage.length; i++){
        id = id + 1 ;
        // check si il y a plus de 10 résultats si oui efface celui a n-10 pour ne garder que les 10 derniers calculs
        if (id >= 10){
            var test = id -10 ;
            test = String(test);
            var myobj = document.getElementById(test);
            myobj.remove();
        }
// créer une entrée dans le tableau avec un id unique
        $('#result1').prepend( '<tr id="'+ id +'" ><td class="text-center hvr-round-corners td" style="width: 10000px">'+ localStorage[localStorage.key(i)] + '<br></td></tr>');
}
}
// fonctionne
function closee() {
    window.close();
}

// ne fonctionne pas encore
function maxii() {
    window.setFullScreen(true);
}

// ne fonctionne pas encore
function minii() {
    window.blur();
}

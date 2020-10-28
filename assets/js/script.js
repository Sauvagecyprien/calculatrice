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
    var cara = String(document.getElementById('calcul').innerHTML);
    var egal = eval(document.getElementById('calcul').innerHTML);
    document.getElementById('calcul').innerHTML = egal;
    localStorage.setItem('result', cara + " = "+ egal);
    for (var i = 1; i < localStorage.length; i++){
        id = id + 1 ;
        if (id >= 10){
            var test = id -10 ;
            test = String(test);
            var myobj = document.getElementById(test);
            myobj.remove();
        }

        $('#result1').prepend( '<tr id="'+ id +'" ><td class="text-center hvr-round-corners td" style="width: 10000px">'+ localStorage[localStorage.key(i)] + '<br></td></tr>');
}
}

function closee() {
    window.close();
}
function maxii() {
    window.maximize();
}
function minii() {
    window.hide();
}

function inserir7() {
    document.getElementById("visor").value += 7;


}
function inserir8() {
    document.getElementById("visor").value += 8;

}
function inserirMais() {
    document.getElementById("visor").value += "+";


}
function inserir9() {
    document.getElementById("visor").value += 9;

}
function inserirVezes() {
    document.getElementById("visor").value += "*";

}
function inserir4() {
    document.getElementById("visor").value += 4;

}
function inserir5() {
    document.getElementById("visor").value += 5;

}

function inserir6() {
    document.getElementById("visor").value += 6;

}
function inserirDivisao() {
    document.getElementById("visor").value += "/";

}
function inserir1() {
    document.getElementById("visor").value += 1;

}
function inserir2() {
    document.getElementById("visor").value += 2;

}
function inserir3() {
    document.getElementById("visor").value += 3;

}
function inserirMenos() {
    document.getElementById("visor").value += "-";
}

function inserirPonto() {
    document.getElementById("visor").value += ".";

}
function inserirMais() {
    document.getElementById("visor").value += "+";
}
function inserir0() {
    document.getElementById("visor").value += 0;

}
function limparVisor(){
    document.getElementById("visor").value = "";

}
function raizQuadrada(){
let numero =document.getElementById("visor").value;
document.getElementById("visor").value;
document.getElementById("visor").value =Math.sqrt(numero);

}
function calcular(){
//pegar o texto do visor
let expressao =document.getElementById("visor").value;

//converter em expressão numerica e calcular

let resultado =eval(expressao);

//mostrar o resultado do cálculo no visor no visor
document.getElementById("visor").value = resultado;

}
function apagar(){
let conteudo = document.getElementById("visor").value;
document.getElementById("visor").value=conteudo.substring(0,conteudo.length -1);

}


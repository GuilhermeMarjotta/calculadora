function inserir(inserir){
document.getElementById("visor").value += inserir;


}

function Simbolo(simbolo) {
    document.getElementById("visor").value += simbolo;

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


            function inserirPonto() {
                document.getElementById("visor").value += ".";
            
            }

function limparVisor(){
    document.getElementById("visor").value = "";

}
const resultado = document.getElementById('resultado');

function jogar() {
    let pedra1 = document.getElementById('pedra1');
    let pedra2 = document.getElementById('pedra2');
    let papel1 = document.getElementById('papel1');
    let papel2 = document.getElementById('papel2');
    let tesoura1 = document.getElementById('tesoura1');
    let tesoura2 = document.getElementById('tesoura2');


if(pedra1.checked && pedra2.checked) {

        resultado.innerHTML="Empate";
    }else if (papel1.checked && papel2.checked ) {
        resultado.innerHTML="Empate";
    }else if (tesoura1.checked && tesoura2.checked ) {
        resultado.innerHTML="Empate";
    } else if (pedra1.checked && tesoura2.checked) {
        resultado.innerHTML="Jogador 1 Venceu !";
    } else if (papel1.checked && pedra2.checked) {
        resultado.innerHTML="Jogador 1 Venceu !";
    } else if (tesoura1.checked && papel2.checked) {
        resultado.innerHTML="Jogador 1 Venceu !";
    }else if (pedra1.checked && papel2.checked) {
        resultado.innerHTML="Jogador 2 Venceu !";
    }else if (papel1.checked && tesoura2.checked) {
        resultado.innerHTML="Jogador 2 Venceu !";
    }else if (tesoura1.checked && pedra2.checked) {
        resultado.innerHTML="Jogador 2 Venceu !";
    }


}
/* var nomeJogador = prompt("Olá jogador, por favor digite aqui seu nome!");
if (nomeJogador == '' || nomeJogador == null) {
    nomeJogador = 'Jogador';
}
 */
let JogadorPontos = 0;
let computadorPontos = 0;
const quemGanha = document.querySelector("#quemGanha");
const resultado = document.querySelector("#resultador");
let compare;

function comecarJogo(e) {
    let escolha = e;
    let computadorEscolhas = ["pedra", "papel", "tesoura"];
    let computadorEscolha = computadorEscolhas[Math.floor(Math.random() * 3)];
    let ganhador = compare(escolha, computadorEscolha);
    quemGanha.classList = "";


    if (ganhador == "Jogador") {
        quemGanha.innerHTML = ganhador + "ganhos";
        quemGanha.classList.add("ganhou")
    } else if (ganhador == "Computador") {
        quemGanha.classList.add("perdeu")

    } else {
        quemGanha.innerHTML = ganhador;
        quemGanha.classList.add("perdeu")
    }
    resultado.innerHTML = `<span class = "participante"> Usuario: ${JogadorPontos}</span>
    <span class = "participante"> Computador: ${computadorPontos}</span>`;
}

function comparação(escolha1, escolha2) {
    if (escolha1 === escolha2) {
        return "É um empate!"
    } else if (escolha1 === "pedra") {
        if (escolha2 === "tesoura") {
            JogadorPontos++;
            return "Usuario"
        }
    } else if (escolha2 === "papel") {
        computadorPontos++;
        return "Computador";
    } else if (escolha1 === "papel") {
        if (escolha2 == "tesoura") {
            JogadorPontos++;
            return "Computador"
        } else if (escolha2 === "pedra") {
            computadorPontos++;
            return "Usuario"
        }
    } else if (escolha1 === "tesoura") {
        if (escolha2 == "papel") {
            JogadorPontos++;
            return "Usuario"
        } else if (escolha2 === "pedra") {
            computadorPontos++;
            return "Computador"
        }
    }
}
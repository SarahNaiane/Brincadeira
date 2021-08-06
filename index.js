 var nomeJogador = prompt("Olá jogador, por favor digite aqui seu nome!");
 if (nomeJogador == '' || nomeJogador == null) {
     nomeJogador = 'Jogador';
 }

 let JogadorPontos = 0;
 let computadorPontos = 0;
 const quemGanha = document.querySelector("#quemGanha");
 const resultado = document.querySelector("#resultado");
 let escolha = null;
 resultado.innerHTML = `<span class = "participante"> ${nomeJogador}: 0</span>
 <span class = "participante"> Computador: ${computadorPontos}</span>`

 function comecarJogo(e) {
     let jogadorEscolha = e;
     let computadorEscolhas = ["pedra", "papel", "tesoura"];
     let computadorEscolha = computadorEscolhas[Math.floor(Math.random() * 3)];
     alert("Computador Escolha: " + computadorEscolha)
     let ganhador = comparacao(jogadorEscolha, computadorEscolha);

     if (escolha === "empate") {
         quemGanha.innerHTML = ganhador;
         quemGanha.classList.add("empate");
         quemGanha.classList.remove("ganhou")
         quemGanha.classList.remove("perder")

     } else if (escolha === "ganhou") {
         quemGanha.innerHTML = ganhador;
         quemGanha.classList.add("ganhou");
         quemGanha.classList.remove("empate");
         quemGanha.classList.remove("perder");

     } else {
         quemGanha.innerHTML = ganhador;
         quemGanha.classList.add("perder");
         quemGanha.classList.remove("ganhou")
         quemGanha.classList.remove("empate");

     }
     resultado.innerHTML = `<span class = "participante"> ${nomeJogador}: ${JogadorPontos}</span>
<span class = "participante"> Computador: ${computadorPontos}</span>`;
 }

 function comparacao(escolha1, escolha2) {

     if (escolha1 === escolha2) {
         escolha = "empate";
         return "É um empate!"
     } else if (escolha1 === "pedra") {
         if (escolha2 === "tesoura") {
             escolha = "ganhou";
             JogadorPontos++;
             return "Pedra quebra tesoura! "
         }
     } else if (escolha2 === "papel") {
         computadorPontos++;
         escolha = "perdeu";
         return "Papel embrulha pedra!"

     } else if (escolha1 === "papel") {
         if (escolha2 == "tesoura") {
             computadorPontos++;
             escolha = "perdeu";
             return "Tesoura corta papel"
         } else if (escolha2 === "pedra") {
             JogadorPontos++;
             escolha = "ganhou";
             return "Papel embrulha pedra!"
         }
     } else if (escolha1 === "tesoura") {
         if (escolha2 == "papel") {
             JogadorPontos++;
             escolha = "ganhou";
             return "Tesoura corta papel!"
         } else if (escolha2 === "pedra") {
             computadorPontos++;
             escolha = "perdeu";
             return "Pedra quebra tesoura"
         }

     } else if (escolha1 === "papel") {
         if (escolha2 == "pedra") {
             JogadorPontos++;
             escolha = "ganhou";
             return "Papel embrulha pedra!"
         } else if (escolha2 === "tesoura") {
             computadorPontos++;
             escolha = "perdeu";
             return "Tesoura corta papel"
         }
     }
 }
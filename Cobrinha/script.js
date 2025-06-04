const tabuleiro = document.querySelector(".tabuleiro");
const elementoPontuacao = document.querySelector(".pontuacao");
const elementoRecorde = document.querySelector(".recorde");
const botoesControle = document.querySelectorAll(".controles i");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

let fimDeJogo = false;
let comidaX, comidaY;
let cobraX = 5, cobraY = 5;
let direcaoX = 0, direcaoY = 0;
let corpoCobra = [];
let idIntervalo;
let pontuacao = 0;

let recorde = localStorage.getItem("recorde") || 0;
elementoRecorde.innerText = `Melhor Pontuação: ${recorde}`;

const atualizarPosicaoComida = () => {
    comidaX = Math.floor(Math.random() * 30) + 1;
    comidaY = Math.floor(Math.random() * 30) + 1;
};

const reiniciarJogo = () => {
    fimDeJogo = false;
    cobraX = 5;
    cobraY = 5;
    direcaoX = 0;
    direcaoY = 0;
    corpoCobra = [];
    pontuacao = 0;
    elementoPontuacao.innerText = `Pontuação: ${pontuacao}`;
    botaoReiniciar.style.display = "none";
    clearInterval(idIntervalo);
    atualizarPosicaoComida();
    idIntervalo = setInterval(iniciarJogo, 100);
};

const finalizarJogo = () => {
    clearInterval(idIntervalo);
    botaoReiniciar.style.display = "block";
};

botaoReiniciar.addEventListener("click", reiniciarJogo);

const alterarDirecao = (evento) => {
    if (evento.key === "ArrowUp" && direcaoY !== 1) {
        direcaoX = 0;
        direcaoY = -1;
    } else if (evento.key === "ArrowDown" && direcaoY !== -1) {
        direcaoX = 0;
        direcaoY = 1;
    } else if (evento.key === "ArrowLeft" && direcaoX !== 1) {
        direcaoX = -1;
        direcaoY = 0;
    } else if (evento.key === "ArrowRight" && direcaoX !== -1) {
        direcaoX = 1;
        direcaoY = 0;
    }
};

botoesControle.forEach(botao => botao.addEventListener("click", () => alterarDirecao({ key: botao.dataset.key })));

const iniciarJogo = () => {
    if (fimDeJogo) return finalizarJogo();
    let html = `<div class="comida" style="grid-area: ${comidaY} / ${comidaX}"></div>`;

    if (cobraX === comidaX && cobraY === comidaY) {
        atualizarPosicaoComida();
        corpoCobra.push([comidaY, comidaX]); 
        pontuacao++;
        recorde = pontuacao >= recorde ? pontuacao : recorde;
        localStorage.setItem("recorde", recorde);
        elementoPontuacao.innerText = `Pontuação: ${pontuacao}`;
        elementoRecorde.innerText = `Melhor Pontuação: ${recorde}`;
    }

    cobraX += direcaoX;
    cobraY += direcaoY;

    for (let i = corpoCobra.length - 1; i > 0; i--) {
        corpoCobra[i] = corpoCobra[i - 1];
    }
    corpoCobra[0] = [cobraX, cobraY]; 

    if (cobraX <= 0 || cobraX > 30 || cobraY <= 0 || cobraY > 30) {
        fimDeJogo = true;
    }

    for (let i = 0; i < corpoCobra.length; i++) {
        html += `<div class="cabeca" style="grid-area: ${corpoCobra[i][1]} / ${corpoCobra[i][0]}"></div>`;
        if (i !== 0 && corpoCobra[0][1] === corpoCobra[i][1] && corpoCobra[0][0] === corpoCobra[i][0]) {
            fimDeJogo = true;
        }
    }
    tabuleiro.innerHTML = html;
};

atualizarPosicaoComida();
idIntervalo = setInterval(iniciarJogo, 100);
document.addEventListener("keyup", alterarDirecao);
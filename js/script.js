let order = [];
let clickedOrder = [];
let score = 0;

//0-verde 1-vermelho 2-amarelo 3-azul
//cores
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
//criar a ordem aleatoria
const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};
//acender a proxima cor
const lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    }, number);
};
//checar se os botões clicados são os mesmos da ordem do jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando proximo nivel`);
        nextLevel();
    }
};
//clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");
    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
        checkOrder();
    },250);
};
//retornar a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
};
//proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
};
//game over
let gameOver = () => {
    alert(`Pontuação: ${score}\n Fim de jogo \n clique em Ok para recomeçar`);
    order = [];
    clickedOrder = [];
    playGame();
};
//iniciar jogo
let playGame = () => {
    alert("Genesis Game \n Iniciando novo jogo !");
    score = 0;
    nextLevel();
};
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
//inicio do jogo
playGame();
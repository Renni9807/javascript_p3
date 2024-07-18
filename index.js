const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const newCardBtn = document.querySelector('#newCardBtn');
const textMessage = document.querySelector('#message');
const cardMessage = document.querySelector('#card');
const textSum = document.querySelector('#sum');

// used constant value to increase readability
const MIN_CARD_VALUE = 2;
const MAX_CARD_VALUE = 11;
const BLACKJACK_SUM = 21;

startBtn.addEventListener('click', renderGame);
resetBtn.addEventListener('click', resetGame);
newCardBtn.addEventListener('click', addNewCard);

// manage the state of the game as object
let gameState = {
    cards: [],
    sum: 0,
    hasBlackJack: false,
    isAlive: false,
    message: ""
};

function getRandomCard() {
    return Math.floor(Math.random() * (MAX_CARD_VALUE - MIN_CARD_VALUE + 1)) + MIN_CARD_VALUE;
}

function updateUI() {
    cardMessage.textContent = 'Cards: ' + gameState.cards.join(' ');
    textSum.textContent = `Sum: ${gameState.sum}`;
    textMessage.textContent = gameState.message;
    newCardBtn.disabled = !gameState.isAlive || gameState.hasBlackJack;
}

function updateGameState() {
    if (gameState.sum <= 20) {
        gameState.message = "Do you want to draw a new card?";
    } else if (gameState.sum === BLACKJACK_SUM) {
        gameState.message = "Congrats! BlackJack!!";
        gameState.hasBlackJack = true;
    } else {
        gameState.message = "You're out of the game!";
        gameState.isAlive = false;
    }
    updateUI();
}

function renderGame() {
    gameState.cards = [getRandomCard(), getRandomCard()];
    gameState.sum = gameState.cards.reduce((a, b) => a + b, 0);
    gameState.isAlive = true;
    gameState.hasBlackJack = false;
    updateGameState();
}

function resetGame() {
    gameState = {
        cards: [],
        sum: 0,
        hasBlackJack: false,
        isAlive: false,
        message: "Want to play a round?"
    };
    updateUI();
}

function addNewCard() {
    if (gameState.isAlive && !gameState.hasBlackJack) {
        let newCard = getRandomCard();
        gameState.cards.push(newCard);
        gameState.sum += newCard;
        updateGameState();
    }
}

resetGame(); // Initialize the game


// const startBtn = document.querySelector('#startBtn');
// const resetBtn = document.querySelector('#resetBtn');
// const newCardBtn = document.querySelector('#newCardBtn');
// const textMessage = document.querySelector('#message');
// const cardMessage = document.querySelector('#card');
// const textSum = document.querySelector('#sum');

// let firstCard;
// let secondCard;
// let sum;
// let cards =[];
// let hasBlackJack = false;
// let isAlive = true;
// let message = "";

// newCardBtn.setAttribute('disabled', '');

// startBtn.addEventListener('click', () => {
//     renderGame();
// })

// resetBtn.addEventListener('click', () => {
//     resetGame();
// })

// newCardBtn.addEventListener('click', () => {
//     addNewCard();
// })

// function sumMessage() {
//     if(sum <= 20) {
//         message = "Do you want to draw a new card?";
//     } else if(sum === 21) {
//         message = "Congrats! BlackJack!!";
//         hasBlackJack = true;
//     } else {
//         message = "You're out of the game!";
//         isAlive = false;
//     }
// }

// function renderGame() {
//     cards = []
//     firstCard = Math.floor(Math.random() * 10 + 2);
//     secondCard = Math.floor(Math.random() * 10 + 2);
//     cards.push(firstCard);
//     cards.push(secondCard);
//     sum = firstCard + secondCard;
//     cardMessage.textContent = 'Cards: ' + cards[0] + ' ' + cards[1] + ' ';
//     textSum.innerText = `Sum: ${sum}`; // or 'Sum: ' + sum;
//     sumMessage();
//     textMessage.innerText = message;
//     newCardBtn.removeAttribute('disabled', '');
// }

// function resetGame() {
//     textMessage.innerText = "Want to play a round?";
//     cardMessage.innerText = "Cards:";
//     textSum.innerText = "Sum:";
//     newCardBtn.setAttribute('disabled', '');
// }

// function addNewCard() {
//     if (sum > 20) {

//     }
//     let newCard = Math.floor(Math.random() * 10 + 2);
//     sum += newCard;
//     cards.push(newCard);
//     cardMessage.insertAdjacentText('beforeend', `${newCard} `);
//     // for(let i = 0; i < cards.length; i++) {
//     //     cardMessage.textContent += cards[i];    // this can be used instead of insertAdjacentText
//     // }
//     textSum.innerText = 'Sum: ' + sum;
//     sumMessage();
//     textMessage.innerText = message;
// }
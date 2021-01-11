const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUP(event) {
	if (event.keyCode === 32) {
		if (!isJumping) {
			jump();
		}
	}
}

function jump() {
	isJumping = true

	let upInterval = setInterval(() => {
		if (position >= 150) {
		clearInterval(upInterval);

		//Descendo
		let downInterval = setInterval(() => {
			if (position <= 0) {
 			clearInterval(downInterval);
 			isJumping = false;
 		} else {
 			position -= 20;
 			dino.style.bottom = position + 'px';
 		}
 	}, 20);
 		} else {
 			// Subindo
 			position += 20;
 			dino.style.bottom = position + 'px';
 		}
 	},20);
 }

 function createCactus() {
 	const cactus = document.createElement('div');
 	let cactusPosition = 1000;
 	// criando mais cactus
 	let randomTime = Math.random() * 6000;

 	cactus.classList.add('cactus');
 	cactus.style.left = 1000 + 'px';
 	background.appendChild(cactus);

 	let leftInterval = setInterval(() => {
 		//remove o cactus quando terminar de passar pela tela 
 		if (cactusPosition < -60) {
 			clearInterval(leftInterval);
 			background.removeChild(cactus);
 		// se não sair da tela continua se movimentando	
 		} else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
 			// Game Over 
 			clearInterval(leftInterval);
 			document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
 			} else {
 			cactusPosition -= 10;
 			cactus.style.left = cactusPosition + 'px';
 		}
 	}, 20);
 	// setTimeout execulta determinada função, argumento(createCactus) execultada depois de determinado tempo(randomTime)
 	setTimeout(createCactus, randomTime);
 }

createCactus();
document.addEventListener('keyup', handleKeyUP)	
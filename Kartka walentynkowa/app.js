const no = document.querySelector('.no');
const yes = document.querySelector('.yes');
const catImage = document.querySelector('.cat-image');
const text = document.querySelector('.text');
const container = document.querySelector('.btn-container');
document.addEventListener('DOMContentLoaded', function () {
	const imageContainer = document.querySelector('.gatito');
	const gentelman = document.querySelector('.gentelman');
	setTimeout(() => {
		gentelman.style.right = '0';
		imageContainer.style.left = '0';
	}, 1);
});

const quotes = [
	'Nie no weź nie bądź taka dla chłopaka',
	'Ojć! Chyba przez przypadek myszka ci uciekła',
	'Tehehe, przypadki chodzą po ludziach. Wiem, że teraz trafisz w dobry przycisk',
	'Zostań moim koteczkiem walentynkowym noooo',
	'Wiem gdzie mieszkasz :)',
];

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = Math.floor(Math.random() * 5);

const MIN_WIDTH_HEIGHT = 10;
let currnumber = 0;
no.addEventListener('click', () => {
	if (currnumber < 5) {
		text.innerHTML = quotes[currnumber];
		currnumber++;
		console.log(currnumber);
	}
	const randomNumber = getRandomNumber(1, 10);
	catImage.src = `${randomNumber}.gif`;
	let currentWidthYes =
		parseFloat(yes.style.width) || parseFloat(getComputedStyle(yes).width);
	let currentHeightYes =
		parseFloat(yes.style.height) || parseFloat(getComputedStyle(yes).height);
	let newWidthYes = currentWidthYes * 1.3;
	let newHeightYes = currentHeightYes * 1.3;
	yes.style.width = newWidthYes + 'px';
	yes.style.height = newHeightYes + 'px';

	let currentWidthNo =
		parseFloat(no.style.width) || parseFloat(getComputedStyle(no).width);
	let currentHeightNo =
		parseFloat(no.style.height) || parseFloat(getComputedStyle(no).height);
	let newWidthNo = currentWidthNo * 0.7;
	let newHeightNo = currentHeightNo * 0.7;

	if (newWidthNo >= MIN_WIDTH_HEIGHT && newHeightNo >= MIN_WIDTH_HEIGHT) {
		no.style.width = newWidthNo + 'px';
		no.style.height = newHeightNo + 'px';
	} else {
		no.style.display = 'none';
	}
});
yes.addEventListener('click', () => {
	catImage.src = 'love.gif';
	text.innerHTML =
		'Yeeeeey, nie mogę się doczekać na naszą kocią randkę meow >:3. KochNYAN cię';
	container.style.display = 'none';
});

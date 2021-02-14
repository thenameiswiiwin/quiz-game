let points = 0;

const australia = (userAnswer) => {
	const isCorrect = userAnswer === 'Canberra';
	points = isCorrect ? (points += 100) : points;
	return isCorrect;
};

const canada = (userAnswer) => {
	const isCorrect = userAnswer === 'Ottawa';
	points = isCorrect ? (points += 100) : points;
	return isCorrect;
};

const uppercase = (userAnswer, word) => {
	const isCorrect = userAnswer === word.toUpperCase();
	points = isCorrect ? (points += 200) : points;
	return isCorrect;
};

const firstThreeLetters = (userAnswer, word) => {
	const isCorrect = userAnswer === word.substr(0, 3);
	points = isCorrect ? (points += 200) : points;
	return isCorrect;
};

const squared = (userAnswer, num) => {
	const isCorrect = userAnswer == num ** 2;
	points = isCorrect ? (points += 200) : points;
	return isCorrect;
};

const multiplication = (userAnswer, num2, num3) => {
	const isCorrect = userAnswer == num2 * num3;
	points = isCorrect ? (points += 300) : points;
	return isCorrect;
};

const age = (userAnswer, currentYear, birthYear) => {
	const isCorrect = userAnswer == currentYear - birthYear;
	points = isCorrect ? (points += 300) : points;
	return isCorrect;
};

const larger = (userAnswer, num4, num5) => {
	let isCorrect = num4 > num5 ? userAnswer == num4 : userAnswer == num5;
	points = isCorrect ? (points += 300) : points;
	return isCorrect;
};

const getScore = () => {
	return points;
};

// DO NOT MODIFY CODE UNDER THIS COMMENT
(function () {
	const words = [
		'squeeze',
		'suspend',
		'cloudy',
		'parallel',
		'scrape',
		'puppy',
		'horses',
		'sedate',
		'guarded',
		'part',
		'name',
		'solid',
		'queue',
		'alike',
		'home',
		'overwrought',
		'talented',
		'concerned',
		'increase',
		'silky',
		'rude',
		'hypnotic',
		'moaning',
		'rabbit',
		'oily',
		'intelligent',
		'delicious',
		'snow',
		'sticky',
		'view',
	];
	let currentQuestion = 0;
	const text = document.getElementById('text');

	const validate = (userResponse) => {
		const answer = process[currentQuestion].validator.apply(window, [
			userResponse,
			...(process[currentQuestion].meta ? process[currentQuestion].meta : []),
		]);
		let response = '';

		response =
			answer === true
				? 'correct!'
				: answer === false
				? 'incorrect :('
				: 'got a response other than tre or false';

		alert(response);
		currentQuestion++;

		if (currentQuestion >= process.length) {
			document.getElementById(
				'container'
			).innerHTML = `<h1>Congrats! You finished. You got ${getScore()} points!</h1>`;
			return;
		}

		text.innerText = process[currentQuestion].question;
	};

	const randomNumber = (max) => Math.floor(Math.random() * max);
	const randomWord = () => words[randomNumber(words.length)];
	const word1 = randomWord();
	const word2 = randomWord();
	const number1 = randomNumber(25);
	const number2 = randomNumber(25);
	const number3 = randomNumber(25);
	const number4 = randomNumber(25);
	const number5 = randomNumber(25);
	const birthYear = randomNumber(40) + 1970;
	const currentYear = new Date().getFullYear();

	const process = [
		{
			question: 'What is the capital of australia?',
			validator: australia,
			points: 100,
		},
		{
			question: 'What is the capital of canada?',
			validator: canada,
			points: 100,
		},
		{
			question: `What is "${word1}" in all capital letters?`,
			meta: [word1],
			validator: uppercase,
			points: 200,
		},
		{
			question: `What are the first three letters of "${word2}"?`,
			meta: [word2],
			validator: firstThreeLetters,
			points: 200,
		},
		{
			question: `What is ${number1} squared?`,
			meta: [number1],
			validator: squared,
			points: 200,
		},
		{
			question: `What is ${number2} multiplied by ${number3}?`,
			meta: [number2, number3],
			validator: multiplication,
			points: 300,
		},
		{
			question: `If someone was born in ${birthYear} and already has had their birthday this year, how old are they (assuming it's ${currentYear})?`,
			meta: [currentYear, birthYear],
			validator: age,
			points: 300,
		},
		{
			question: `Which of ${number4} and ${number5} is larger (if they're the same then pick that number)?`,
			meta: [number4, number5],
			validator: larger,
			points: 300,
		},
	];

	const input = document.getElementById('input');
	document.getElementById('form').addEventListener('submit', (e) => {
		e.preventDefault();
		validate(input.value);
		input.value = '';
	});
})();

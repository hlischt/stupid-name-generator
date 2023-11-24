'use strict';

const first = [
	'p',
	'b',
	'k',
	'c',
	'g',
	't',
	'd',
	'f',
	'v',
	'r',
	'l',
	'j',
	'w',
	's',
	'z',
	'm',
	'n',
	'h',
];
const vowels = ['a', 'e', 'i', 'o', 'u'];
const end = ['n', 'r', 'l', 's'];

const randomBoolean = () => Math.random() < 0.5;
const randomArrayIndex = (arr) => Math.floor(Math.random() * arr.length);

function newSyllable(c, v, f) {
	const cRand = randomArrayIndex(c);
	const vRand = randomArrayIndex(v);
	const fRand = randomArrayIndex(f);
	return [c[cRand], v[vRand], f[fRand]].join('');
}

function newName(syllableNumber) {
	const name = [];
	for (let i = 0; i < syllableNumber; i++) {
		let c;
		if (i === 0) {
			c = randomBoolean() ? first : [''];
		} else {
			c = first;
		}
		const v = vowels;
		const f = randomBoolean() ? end : [''];
		name.push(newSyllable(c, v, f));
	}
	return name.join('');
}

function changeName() {
	const name = newName(syllables.valueAsNumber);
	genName.textContent = name;
}

addEventListener('load', function () {
	generate.addEventListener('click', changeName);
	generate.click();
});

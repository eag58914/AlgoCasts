// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, steps = '') {
	if (n === row) {
		return;
	}
	//figures out max columns using formula
	if (steps.length === 2 * n - 1) {
		console.log(steps);
		return pyramid(n, row + 1);
	}

	const midpoint = Math.floor((2 * n - 1) / 2);
	let add;
	if (midpoint - row <= steps.length && midpoint + row >= steps.length) {
		add = '#';
	} else {
		add = ' ';
	}
	pyramid(n, row, steps + add);
}

module.exports = pyramid;

// const midpoint = Math.floor((2 * n - 1) / 2);
// 	for (let row = 0; row < n; row++) {
// 		let steps = '';
// 		for (let column = 0; column < 2 * n - 1; column++) {
// 			if (midpoint - row <= column && midpoint + row >= column) {
// 				steps += '#';
// 			} else {
// 				steps += ' ';
// 			}
// 		}
// 		console.log(steps);
// 	}

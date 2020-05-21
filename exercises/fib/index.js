// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
	// memoization
	//store the arguments of each function is called again with the same arguments,
	// return the precomputed result, than running the function again
	const cache = {};

	return function(...args) {
		if (cache[args]) {
			return cache[args];
		}
		const result = fn.apply(this, args);
		cache[args] = result;
		return result;
	};
}

//exponential time solution = no no no
//recursion solution
function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n - 1) + fib(n - 2);
}
fib = memoize(fib);

module.exports = fib;

//iterative solutions
//linear runtime
// let sum = [ 0, 1 ];
// 	for (i = 2; i <= n; i++) {
// 		const a = sum[i - 1];
// 		const b = sum[i - 2];
// 		sum.push(a + b);
// 	}

// 	return sum[n];

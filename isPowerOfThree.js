function isPowerOfThree(n) {
	if (n < 1) return false
	while (n % 3 === 0) {
		console.log(n);
		n /= 3
		console.log(n);
	}
	return n === 1
}
// const n1 = 1
// console.log(isPowerOfThree(n1));
// const n2 = 3
// console.log(isPowerOfThree(n2));
console.log(20 % 3);
const n3 = 20
console.log(isPowerOfThree(n3));
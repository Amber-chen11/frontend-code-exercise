

const removeDuplicates = function(s) {
	let stack = []
	for (let item of s) {
		stack.at(-1) === item ? stack.pop() : stack.push(item)
	}
	return stack.join('')
}

console.log(removeDuplicates('asdaaassc'));
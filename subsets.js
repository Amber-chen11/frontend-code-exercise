/**We're given a nums array of unique elements,
*  and we need to return all possible subsets.
**/
const subsets = function (){
	let result = [[]]
	function recurse(index, curArr){
		for (let i = index; i < nums.length; i++) {
			curArr.push(nums[i])
			result.push([...curArr])
			recurse(i+1, curArr)
			curArr.pop()
		}
	}
	recurse(0,[])
	return result
}
const nums = [1,2,3]
console.log(subsets(nums));
/* Find the max number of the passing array of numbers. 
Can't use Math.max() or sort() */ 


function max(numbers) {
    // Set the initial max number to the first item of array 
    let maxNum = numbers[0]
	for (let i = 0; i < numbers.length; i++) {
        // Compare to see if current looped item is bigger than the first item 
        // If yes, then that item becomes the max 
        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    return maxNum;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

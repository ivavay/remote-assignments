/* Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
You may assume that each input would have exactly one solution, and you may not use the same element twice.*/


function twoSum(nums, target) {
    // Nested loop to see if the current and next number add up to the target nunmber 
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
             // If yes, return the index of the current and next number
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    };
}
/*
	For example:
		twoSum([2, 7, 11, 15], 9);
	Should returns:
		[0, 1]
	Because:
		nums[0] + nums[1] is 9
*/

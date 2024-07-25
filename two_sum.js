/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
};

// Teste a função com alguns exemplos
const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 }
];

testCases.forEach(({ nums, target }, index) => {
    console.log(`Test Case ${index + 1}: nums = [${nums}], target = ${target}`);
    const result = twoSum(nums, target);
    console.log(`Result: [${result}]\n`);
});


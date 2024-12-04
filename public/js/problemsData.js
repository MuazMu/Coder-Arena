export const problems = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "easy",
        description: `Given an array of integers nums and an integer target, return indices of the two numbers in nums such that they add up to target.
            You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
            }
        ],
        starterCode: {
            python: "def twoSum(nums, target):\n    # Write your code here\n    pass",
            javascript: "function twoSum(nums, target) {\n    // Write your code here\n}",
            java: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n    }\n}"
        }
    },
    {
        id: 2,
        title: "Palindrome Number",
        difficulty: "easy",
        description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
        examples: [
            {
                input: "x = 121",
                output: "true",
                explanation: "121 reads as 121 from left to right and from right to left."
            }
        ],
        starterCode: {
            python: "def isPalindrome(x):\n    # Write your code here\n    pass",
            javascript: "function isPalindrome(x) {\n    // Write your code here\n}",
            java: "class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your code here\n    }\n}"
        }
    }
];

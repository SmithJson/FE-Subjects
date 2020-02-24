/*
 示例 1：
 输入: " b a b a d a "
 输出: "bab"
 注意: "aba" 也是一个有效答案。
 示例 2：
 
 输入: "cbbd"
 输出: "bb"
* */

var isPalindromeString = function (value) {
	if (typeof value !== 'string') return false;
	return value.split('').reverse().join('') === value;
}

var longestPalindrome = function(s) {
	if (s.length <= 2) return s;
	var len = s.length;
	var left;
	var right;
	var min = len / 2 >> 0.5;
	var result = '';
	if (len % 2 !== 0) { // 奇数
		left = min - 1;
		right = min + 1;
		console.log(left, min, right);
	} else { // 偶数
		left = min;
		right = left + 1;
		console.log(left, right);
	}
	while (true) {
	
	}
	
};

longestPalindrome('b');
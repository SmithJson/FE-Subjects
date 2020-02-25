/*
 示例 1：
 输入: " babada"
 输出: "bab"
 注意: "aba" 也是一个有效答案。
 示例 2：
 
 输入: "cbbd"
 输出: "bb"
* */
console.time();
var isPalindromeString = function (value) {
	if (typeof value !== 'string') return false;
	return value.split('').reverse().join('') === value;
};
// bab ad
var getStr = function (str, left, right) {
	if (left == null || right == null) return str[left] || str[right];
	var res = '';
	var maxLen = 0;
	while (true) {
		if (left === 0 && right === str.length) break;
		var tempStr = str.slice(left, right + 1);
		if (str[left] === (str[right] || str[str.length - 1])) {
			if (isPalindromeString(tempStr) && tempStr.length > maxLen) { // 是回文字符
				res = tempStr;
				maxLen = tempStr.length;
			}
		}
		if (left !== 0) left--;
		if (right !== str.length) right++;
	}
	return res;
};

var longestPalindrome = function(s) {
	if (s.length < 2) return s;
	var len = s.length;
	var result = '';
	for (var i = 0; i < len; i++) {
		var tempA = getStr(s, i, i);
		var tempB = getStr(s, i, i + 1);
		result = tempA.length > result.length ? tempA : result;
		result = tempB.length > result.length ? tempB : result;
	}
	return result
};

console.log(longestPalindrome("\"kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv\""));
console.timeEnd()

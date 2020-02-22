/*
* 一个青蛙，一次只能跳一阶台阶，或者跳两阶台阶，或者跳 n 阶台阶
* f(n) = f(n - 1) + f(n - 2) + ... f(3) + f(2) + f(1) + f(0)
* */
function jump(n) {
    if (n <= 0) {
        return -1;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    var result = 0;
    for (var i = 1; i < n; i++) {
        result += jump(n - i);
    }
    return result + 1; // +1 为最后直接跳上 f(0)
}

console.log(jump(4));

// 1 1 1 1
// 1 2 1
// 1 1 2
// 2 1 1
// 2 2
// 1 3
// 3 1
// 4

var arr = [4, 1, 3, 2, 8, 5, 9, 0];

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function sort(arr) {
	if (arr == null || arr.length < 2) {
		return;
	}
	for (var i = 0; i < arr.length - 1; i++) {
		var maxIndex = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[maxIndex] > arr[j]) {
				maxIndex = j;
			}
		}
		swap(arr, maxIndex, i);
	}
}

sort(arr);
console.log(arr);

// 0 1 1 2 3 5 8 13
function a(n) {
	if (n === 0) {
		return -1;
	}
	if (n === 1) {
		return 0;
	}
	if (n === 2) {
		return 1;
	}
	var l = a(n - 1);
	var r = a(n - 2);
	return l + r;
}

console.log(a(6))

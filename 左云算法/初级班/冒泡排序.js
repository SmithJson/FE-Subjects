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
	for (var i = arr.length - 1; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
}

sort(arr);
console.log(arr);

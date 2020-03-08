var arr = [4, 1, 3, 2, 8, 5, 9, 0];

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function partition(arr, L, R) {
	var less = L - 1;
	var more = R;
	var current = L;
	while (current < more) {
		if (arr[current] < arr[R]) {
			swap(arr, ++less, current++);
		} else if (arr[current] > arr[R]) {
			swap(arr, --more, current);
		} else {
			current++;
		}
	}
	swap(arr, more, R);
	return [less, more];
}

function quickSort(arr, L, R) {
	if (L >= R) {
		return;
	}
	var p = partition(arr, L, R);
	quickSort(arr, L, p[0]);
	quickSort(arr, p[1] + 1, R);
}

function sort(arr) {
	if (arr === 0 || arr.length < 2) {
		return arr;
	}
	quickSort(arr, 0, arr.length - 1);
}

sort(arr);
console.log(arr);

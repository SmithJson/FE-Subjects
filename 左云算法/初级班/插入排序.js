var arr = [2, 1, 0, 5, 4, 9, -1, -2];

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function insertSort(list, end) {
	if (end === list.length) {
		return;
	}
	var index = end;
	while (index > 0) {
		if (arr[index] >= arr[index - 1]) {
			break;
		}
		swap(arr, index--, index);
	}
	insertSort(list, ++end);
}

function sort(list) {
	if (list === null || list.length < 2) {
		return list;
	}
	insertSort(list, 1);
}

sort(arr);
console.log(arr);

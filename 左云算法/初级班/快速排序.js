var arr = [4, 1, 3, 2, 8, 5, 9, 0];

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function partition(arr, l, r) {
	var less = l - 1;
	var more = r;
	while (l < more) {
		if (arr[l] < arr[r]) {
			swap(arr, ++less, l++);
		} else if (arr[l] > arr[r]) {
			swap(arr, --more, l);
		} else {
			l++;
		}
	}
	swap(arr, more, r);
	return [less + 1, more]; // 返回等于区域的左右边界
}

function quicksort(arr, l, r) {
	if (l >= r) {
		return;
	}
    // 随机快排
    swap(arr, l + Math.floor(Math.random() * (r - l + 1)), r);
	var p = partition(arr, l, r);
	quicksort(arr, l, p[0] - 1);
	quicksort(arr, p[1] + 1, r);
}

function sort(arr) {
	if (arr === 0 || arr.length < 2) {
		return arr;
	}
	quicksort(arr, 0, arr.length - 1);
}

sort(arr);
console.log(arr);

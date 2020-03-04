var arr = [4, 1, 3, 2, 8, 5, 9, 0];

function merge(list, left, mid, right) {
	var temp = new Array(right - left + 1);
	var p1 = left;
	var p2 = mid + 1;
	var index = 0;
	while (p1 <= mid && p2 <= right) {
		if (list[p1] < list[p2]) {
			temp[index++] = list[p1];
			p1++;
		} else {
			temp[index++] = list[p2];
			p2++;
		}
	}
	while (p1 <= mid) {
		temp[index++] = list[p1];
		p1++;
	}
	while (p2 <= right) {
		temp[index++] = list[p2];
		p2++;
	}
	for (var i = 0; i < temp.length; i++) {
		arr[left + i] = temp[i];
	}
}

function parition(list, left, right) {
	if (left === right) return list[left];
	var mid = (left + right) >> 1;
	parition(list, left, mid);
	parition(list,mid + 1, right);
	merge(list, left, mid, right);
}

function sort(list) {
	if (list === null || list.length < 2) return list;
	parition(list, 0, list.length - 1);
}

sort(arr);
console.log(arr);

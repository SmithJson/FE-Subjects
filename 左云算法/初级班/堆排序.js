var arr = [4, 1, 3, 2, 8, 5, 9, 0];

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
}

function heapInsert(arr, i) {
    var root = Math.floor((i - 1) / 2);
    while (arr[i] > arr[root < 0 ? 0 : root]) {
        swap(arr, i, root < 0 ? 0 : root);
        i = root;
        root = Math.floor((i - 1) / 2); 
    }
}

function heapify(arr, i, heapSize) {
    var left = i * 2 + 1;
    while (left < heapSize) {
        var temp = left + 1 < heapSize && arr[left + 1] >= arr[left] ? left + 1: left;
        temp = arr[temp] > arr[i] ? temp : i;
        if (temp === i) {
            break;
        }
        swap(arr, temp, i);
        i = temp;
        left = i * 2 + 1;
    }
}

function heapSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        heapInsert(arr, i);
    } 
    var heapSize = arr.length;
    swap(arr, 0, --heapSize);
    while (heapSize > 0)  {
        heapify(arr, 0, heapSize);
        swap(arr, 0, --heapSize);
    }
}

function sort(arr) {
    if (arr === null || arr.length < 2) {
        return arr;
    }
    heapSort(arr);
}

sort(arr);
console.log(arr);

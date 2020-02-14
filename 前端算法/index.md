# 前端算法 {ignore=true}

[toc]

## 基本概念

- 数据结构：用于存储数据的结构
- 算法：用于处理数据结构的方法

## 一维数据结构

也叫线性数据结构，强调存储与顺序

### 数组

特性：

1. 长度固定
2. 在物理空间上的存储是连续的
3. 数组变量，指向数组第一个元素，其中的索引表示指针的偏移量

优点：

1. 查询性能好

缺点：

1. 因为存储是连续的，如果数组较大，当空间碎片较多时，容易存不下
2. 因为数组的长度是固定的，所以数组的内容难以被添加和删除

### 链表

每一个结点都认为自己是根节点

特性：

1. 在物理空间上的存储是非连续的
2. 每次存取一个值，都需要多开销一个空间

优点：

1. 只要内存足够大，就能存下，不用担心空间碎片的问题
2. 链表的添加和删除容易

缺点：

1. 查询性能慢（查询某个结点的值）
2. 每个结点都需要单独开启指向 next 的引用，浪费一些空间，当存储的值越多，这部分开销的内存影响越少

## 排序

排序的本质是 `比较` 和 `交换`

### 冒泡排序

```javascript
function compare(a, b) { // 比较是否需要交换
    return a > b;
}

function swap(arr, i, j) { // 将数组中的 i, j 位置进行值的交换
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                swap(arr, j, j + 1);
            }
        }
    }
}

var arr = [4, 5, 1, 0, 9, 8, 10, 2];

sort(arr);
```

### 选择排序

```javascript
function compare(a, b) {
    return a < b;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var maxIndex = 0;
        for (var j = 0; j < arr.length - i; j++) {
            if (compare(arr[maxIndex], arr[j])) {
                maxIndex = j;
            }
        }
        // maxIndex 对应的值，与数组倒数的 n 位置的数进行交换
        swap(arr, maxIndex, arr.length - 1 - i);
    }
}

var arr = [4, 5, 1, 0, 9, 8, 10, 2];

sort(arr);
```

### 快速排序

```javascript
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var arr = [4, 1, 9, 6, 2, 3, 7, 8];

function quickSort2(arr, begin, end) {
    if (begin >= end - 1) {
        return;
    }
    var left = begin;
    var right = end;
    do {
        do {
            left++;
        } while (left < right && arr[left] < arr[begin]);
        do {
            right--;
        } while (right > left && arr[right] > arr[begin]);
        if (left < right) {
            swap(arr, left, right);
        }
    } while(left < right);
    var startPoint = left === right ? right - 1 : right;
    swap(arr, begin, startPoint);
    quickSort2(arr, begin, startPoint);
    quickSort2(arr, startPoint + 1, end);
}

function quickSort(arr) {
    quickSort2(arr, 0, arr.length);
}

quickSort(arr);

console.log(arr);
```

## 栈

特征：先进后出（FILO）

```javascript
function Stack() {
     this.arr = [];

    this.push = function (value) {
        this.arr.push(value);
    };

    this.pop = function () {
        return this.arr.pop();
    }
 }

 var stack = new Stack();
 stack.push(1);
 stack.push(2);
 stack.push(3);
 console.log(stack.arr);
 stack.pop();
 console.log(stack.arr);
```

## 队列

特征：先进先出（FIFO）

```javascript
unction Queue() {
    this.arr = [];

    this.push = function (value) {
        this.arr.push(value);
    };

    this.pop = function () {
        return this.arr.shift();
    }
}

var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr);
queue.pop();
console.log(queue.arr);
```

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

### 栈

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

### 队列

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

### 双向链表

优点：无论给出哪个节点都能对整个链表进行遍历

缺点：

1. 需要额外消耗一个引用空间
2. 构建双向链表复杂

```javascript
function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(f);
b.neighbor.push(a);
b.neighbor.push(d);
b.neighbor.push(e);
c.neighbor.push(a);
d.neighbor.push(b);
e.neighbor.push(b);
f.neighbor.push(a);

console.log(a);
```

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

## 二维数据结构

二维数组

## 二维拓扑结构（图）

树、图

## 树型结构（有向无环图）

特征：

1. 只有一个根节点
2. 没有回路

叶子节点：没有子节点的节点

节点：既不是根节点，又不是叶子节点的节点

树的度：单个节点最多的分叉数

树的深度：树的最深层数

### 满二叉树

定义：

1. 所有叶子节点在同一层
2. 每个非叶子节点都有两个子节点

### 完全二叉树

国内定义：

1. 叶子节点都在最后一层或倒数第二层
2. 叶子节点都向左聚拢

国外定义：

1. 叶子节点都在最后一层或倒数第二层
2. 如果有叶子节点，必然有两个叶子节点

### 子树

定义：二叉树中，每一节点或叶子节点，都认为自己是一颗子树的根节点

### 前序遍历（先根次序遍历）

先打印当前的节点，再打印左边的子树，再打印右边的子树

```javascript
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
var g = new Node('G');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function preOrderTraverse(root) {
    if (root === null) {
        return;
    }
    console.log(root.value);
    preOrderTraverse(root.left);
    preOrderTraverse(root.right);
}

preOrderTraverse(a);
```

### 中序遍历（中根次序遍历）

先打印左边的子树，再打印当前的节点，再打印右边的子树（可以使用投影法快速得出）

```javascript
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
var g = new Node('G');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function inOrderTraverse(root) {
    if (root === null) {
        return;
    }
    inOrderTraverse(root.left);
    console.log(root.value);
    inOrderTraverse(root.right);
}

inOrderTraverse(a);
```

### 后序遍历（后根次序遍历）

先打印左边的子树，再打印右边的子树，再打印当前的节点

```javascript
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
var g = new Node('G');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function postTraverse(root) {
    if (root === null) {
        return;
    }
    postTraverse(root.left);
    postTraverse(root.right);
    console.log(root.value);
}

postTraverse(a);
```

### 前序 + 中序还原二叉树

![1581777122942](/assets/1581777122942.jpg)

```javascript
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var preOrderList = ['A', 'C', 'F', 'G', 'B', 'D', 'E'];
var inOrderList = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];

function restoreBinaryTree(preOrder, inOrder) {
   if (preOrder === null || inOrder === null || preOrder.length === 0 || inOrder.length === 0||
        preOrder.length !== inOrder.length) {
            return null;
    }
    var root = new Node(preOrder[0]);
    var index = inOrder.indexOf(root.value); // 获取根节点的在中序列表中位置
    var preOrderLeft = preOrder.slice(1, index + 1); // 获取前序列表中的左子树
    var preOrderRight = preOrder.slice(index + 1, preOrder.length); // 获取前序列表的右子树
    var inOrderLeft = inOrder.slice(0, index); // 获取中序列表的左子树
    var inOrderRight = inOrder.slice(index + 1, inOrder.length); // 获取中序列表的右子树
    root.left = restoreBinaryTree(preOrderLeft, inOrderLeft);
    root.right = restoreBinaryTree(preOrderRight, inOrderRight);
    return root;
}

var binaryTree = restoreBinaryTree(preOrderList, inOrderList);

function postOrderTraverse(root) {
   if (root === null) {
       return;
   }
   postOrderTraverse(root.left);
   postOrderTraverse(root.right);
   console.log(root.value);
};

postOrderTraverse(binaryTree);
```

### 后序 + 中序还原二叉树

![1581779352268](/assets/1581779352268.jpg)

```javascript
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var inOrderList = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];
var postOrderList = ['F', 'G', 'C', 'D', 'E', 'B', 'A'];

function restoreBinaryTree(inOrder, postOrder) {
    if (inOrder === null || postOrder === null || inOrder.length === 0 || postOrder.length === 0 ||
            inOrder.length !== postOrder.length) {
        return null;
    }
    var root = new Node(postOrder[postOrder.length - 1]);
    var index = inOrder.indexOf(root.value);
    var inOrderLeft = inOrder.slice(0, index);
    var inOrderRight = inOrder.slice(index + 1, inOrder.length);
    var postOrderLeft = postOrder.slice(0, index);
    var postOrderRight = postOrder.slice(index, postOrder.length - 1);
    root.left = restoreBinaryTree(inOrderLeft, postOrderLeft);
    root.right = restoreBinaryTree(inOrderRight, postOrderRight);
    return root;
}

var binaryTree = restoreBinaryTree(inOrderList, postOrderList);

function preOrderTraverse(root) {
    if (root === null) {
        return;
    }
    console.log(root.value);
    preOrderTraverse(root.left);
    preOrderTraverse(root.right);
}

preOrderTraverse(binaryTree);
```

### 深度优先遍历

深度优先遍历与前序遍历的访问次序一样

```javascript
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
var g = new Node('G');

a.left = c;
a.right = b;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function deepSearch(root, target) {
    if (root === null) {
        return false;
    }
    if (root.value === target) {
        return true;
    }
    var left = deepSearch(root.left, target);
    var right = deepSearch(root.right, target);
    return left || right;
}

console.log(deepSearch(a, 'A'));
```

### 广度优先遍历

```javascript
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
var g = new Node('G');

a.left = c;
a.right = b;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function breadthSearch(rootList, target) {
    if (rootList === null || rootList.length === 0) {
        return false;
    }
    var chidList = [];
    for (var i = 0; i < rootList.length; i++) {
        if (rootList[i] !== null) {
            console.log(rootList[i].value);
            if (rootList[i].value === target) {
                return true;
            } else {
                chidList.push(rootList[i].left);
                chidList.push(rootList[i].right);
            }
        }
    }
    return breadthSearch(chidList, target);
}

console.log(breadthSearch([a], 'G'));
```

### 二叉树的比较

左右子树互换后不是同一颗树

```javascript
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a1 = new Node('A');
var b1 = new Node('B');
var c1 = new Node('C');
var d1 = new Node('D');
var e1 = new Node('E');
var f1 = new Node('F');
var g1 = new Node('G');

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;


var a2 = new Node('A');
var b2 = new Node('B');
var c2 = new Node('C');
var d2 = new Node('D');
var e2 = new Node('E');
var f2 = new Node('F');
var g2 = new Node('G');

a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;

function compareTree(root1, root2) {
    if (root1 === root2) { // 同一颗树
        return true;
    }
    if (root1 !== null && root2 === null || root1 === null && root2 !== null) {
        return false;
    }
    if (root1.value !== root2.value) {
        return false;
    }
    var leftBool = compareTree(root1.left, root2.left);
    var rightBool = compareTree(root1.right, root2.right);
    return leftBool && rightBool;
}

console.log(compareTree(a1, a2));
```

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// var node2 = new Node('2');
// var node5 = new Node('5');
// var node6 = new Node('6');
// var node7 = new Node('7');
// var node8 = new Node('8');
//
// node8.left = node7;
// node7.left = node6;
// node6.left = node5;
// node5.left = node2;

function getDeep(root) {
    if (root === null) {
        return 0;
    }
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

function isBalance(root) {
    if (root === null) {
        return true;
    }
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return  false;
    }
    return isBalance(root.left) && isBalance(root.right);
}

function leftRotate(root) {
    if (root === null) {
        return null;
    }
    var newNode = root.right;
    root.right = root.right.left;
    newNode.left = root;
    return newNode;
}

function rightRotate(root) {
    if (root === null) {
        return null;
    }
    var newNode = root.left;
    root.left = root.left.right;
    newNode.right = root;
    return newNode;
}

function change(root) {
    if (isBalance(root)) {
        return root;
    }
    if (root.left !== null) {
        root.left = change(root.left);
    }
    if (root.right !== null) {
        root.right = change(root.right);
    }
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) { // 右旋
        var changeNodeDeep = getDeep(root.left.right);
        var noChangeNodeDeep = getDeep(root.left.left);
        if (changeNodeDeep > noChangeNodeDeep) {
            root.left = leftRotate(root.left);
        }
        return rightRotate(root);
    } else if (leftDeep < rightDeep) { // 左旋
        var changeNodeDeep = getDeep(root.right.left);
        var noChangeNodeDeep = getDeep(root.right.right);
        if (changeNodeDeep > noChangeNodeDeep) {
            root.right = rightRotate(root.right);
        }
        return leftRotate(root);
    }
}

var arr = [];

for (var i = 0; i < 10000; i++) {
    arr.push(Math.random() * 10000 >> 1);
}

function insertNode(root, value) {
    if (root === null) {
        return;
    }
    if (root.value === value) {
        return;
    }
    if (root.value < value) { // 目标值比当前节点大
        if (root.right === null) {
            root.right = new Node(value);
        } else {
            insertNode(root.right, value);
        }
    } else { // 目标值比当前节点小
        if (root.left === null) {
            root.left = new Node(value);
        } else {
            insertNode(root.left, value);
        }
    }
}

function buildSearchTree(arr) {
    if (arr === null || arr.length === 0) {
        return;
    }
    var root = new Node(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        insertNode(root, arr[i]);
    }
    return root;
}

var count2 = 0; // 统计通过二叉搜索树查找的次数

function searchByTree(root, target) {
    if (root === null) {
        return false;
    }
    count2++;
    if (root.value === target) {
        return true;
    }
    if (root.value < target) {
        return searchByTree(root.right, target);
    } else {
        return searchByTree(root.left, target);
    }
}

var root = buildSearchTree(arr);

console.log(searchByTree(root, 1000), count2, getDeep(root));
count2 = 0;
var newRoot = change(root);
console.log(searchByTree(newRoot, 1000), count2, getDeep(newRoot));

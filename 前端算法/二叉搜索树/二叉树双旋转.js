function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// var node2 = new Node('2');
// var node3 = new Node('3');
// var node5 = new Node('5');
// var node6 = new Node('6');

// node2.right = node5;
// node5.left = node3;
// node5.right = node6;

// node6.left = node3;
// node3.left = node2;
// node3.right = node5;

var node2 = new Node('2');
var node5 = new Node('5');
var node6 = new Node('6');
var node7 = new Node('7');
var node8 = new Node('8');

node8.left = node7;
node7.left = node6;
node6.left = node5;
node5.left = node2;

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

console.log(isBalance(node8));
var newRoot = change(node8);
console.log(isBalance(newRoot));

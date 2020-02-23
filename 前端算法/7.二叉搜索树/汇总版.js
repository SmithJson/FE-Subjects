var count = 0; // 统计使用二叉搜索树和二叉平衡搜树遍历的此次数
var arr = [];
for (var i = 0; i < 1000; i++) {
    arr.push((Math.random() * 10000) >> 1);
}

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function addNode(root, num) {
    if (root === null) return;
    if (root.value > num) {
        if (root.left !== null) addNode(root.left, num);
        else root.left = new Node(num);
    }
    if (root.value < num) {
        if (root.right !== null) addNode(root.right, num);
        else root.right = new  Node(num);
    }
    
}

function buildBinaryTree(list) {
    if (list === null || list.length === 0) return null;
    var i = 1;
    var root = new Node(list[0]);
    var length = list.length;
    for (; i < length; i++) addNode(root, list[i]);
    return root;
}

function getDeep(root) {
    if (root === null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

function isBalance(root) {
    if (root === null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) return false;
    return isBalance(root.left) && isBalance(root.right);
}

function leftRotate(root) {
    if (root === null) return root;
    var newRoot = root.right;
    root.right = newRoot.left;
    newRoot.left = root;
    return newRoot;
}

function rightRotate(root) {
    if (root === null) return root;
    var newRoot = root.left;
    root.left = newRoot.right;
    newRoot.right = root;
    return newRoot;
}

function change(root) {
    if (isBalance(root)) return root;
    if (root.left !== null) root.left = change(root.left);
    if (root.right !== null) root.right = change(root.right);
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    var changeBranchDeep = 0; // 变换分支的深度
    var noChangeBranchDeep = 0; // 旋转节点另一个分支的深度
    if (Math.abs(leftDeep - rightDeep) < 2) return root;
    if (leftDeep < rightDeep) { // 左旋
        changeBranchDeep = getDeep(root.right.left);
        noChangeBranchDeep = getDeep(root.right.right);
        if (changeBranchDeep > noChangeBranchDeep) root.right = rightRotate(root.right); // 条件3
        var newRoot = leftRotate(root); // 条件1
        newRoot.left = change(newRoot.left); // 条件2
        newRoot = change(newRoot);
        return newRoot;
    } else { // 右旋
        changeBranchDeep = getDeep(root.left.right);
        noChangeBranchDeep = getDeep(root.left.left);
        if (changeBranchDeep > noChangeBranchDeep) root.left = leftRotate(root.left);
        var newRoot = rightRotate(root);
        newRoot.right = change(newRoot.right);
        newRoot = change(newRoot);
        return newRoot;
    }
}

function searchByTree(root, target) {
    if (root === null) return false;
    count++;
    if (root.value === target) return true;
    if (root.value < target) return searchByTree(root.right, target);
    else return searchByTree(root.left, target);
}

var root = buildBinaryTree(arr);
console.log(searchByTree(root, 1000), count, isBalance(root));

count = 0;
var newRoot = change(root);
console.log(searchByTree(newRoot, 1000), count, isBalance(newRoot));

/*
 * 测试是否平衡案例
 * 平衡条件：
 * 1. 左子树最大深度与右子树最大深度差不大于1（单旋）
 * 2. 变换分支的深度与旋转节点的另一个分支的深度差不大于2（同向双旋）
 * 3. 变换分支不能唯一（反向双旋）
 var a = new Node('A');
 var b = new Node('B');
 var c = new Node('C');
 var d = new Node('D');
 var e = new Node('E');
 var f = new Node('F');
 var g = new Node('G');
 var h = new Node('H');
 var j = new Node('J');
 
 a.left = b;
 a.right = c;
 b.left = d;
 b.right = e;
 c.left = f;
 c.right = g;
 d.right = h;
 e.right = j;
* */

/*
 var node2 = new Node('2');
 var node3 = new Node('3');
 var node5 = new Node('5');
 var node6 = new Node('6');
 
 * 右单旋
 node6.left = node3;
 node3.left = node2;
 node3.right = node5;
 
 * 左单旋
 node2.right = node5;
 node5.left = node3;
 node5.right = node6;
* */

/*
 var node2 = new Node('2');
 var node5 = new Node('5');
 var node6 = new Node('6');
 var node7 = new Node('7');
 var node8 = new Node('8');
 
 * 右左双旋
 node8.left = node7;
 node7.left = node6;
 node6.left = node5;
 node5.left = node2;
 
 * 左右双旋
 node2.right = node5;
 node5.right = node6;
 node6.right = node7;
 node7.right = node8;
* */

/*
 var node9 = new Node('9');
 var node6 = new Node('6');
 var node5 = new Node('5');
 var node4 = new Node('4');
 var node7 = new Node('7');
 var node8 = new Node('8');
 
 * 右右双旋
 node9.left = node6;
 node6.left = node5;
 node5.left = node4;
 node6.right = node7;
 node7.right = node8;
* */

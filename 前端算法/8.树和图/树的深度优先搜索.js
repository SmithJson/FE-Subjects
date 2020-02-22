function Node(value) {
    this.value = value;
    this.childs = [];
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');

a.childs.push(c);
a.childs.push(f);
a.childs.push(b);
b.childs.push(d);
b.childs.push(e);

function deepSearch(root, target) {
    if (root === null) {
        return false;
    }
    if (root.value === target) {
        return true;
    }
    for (var i = 0; i < root.childs.length; i++) {
        if (deepSearch(root.childs[i], target)) {
            return true;
        }
    }
    return false;
}

console.log(deepSearch(a, 'F'));

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

function deepSearch(root, target, path) {
    if (root === null) {
        return false;
    }
    if (path.indexOf(root) > -1) {
        return false;
    }
    if (root.value === target) {
        return true;
    }
    path.push(root);
    for (var i = 0; i < root.neighbor.length; i++) {
        if (deepSearch(root.neighbor[i], target, path)) {
            return true;
        }
    }
    return false;
}

console.log(deepSearch(a, 'C', []));

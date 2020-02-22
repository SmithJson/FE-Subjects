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

function breadthSearch(roots, target, path) {
    if (roots === null || roots.length === 0) {
        return false;
    }
    var nextNodes = [];
    for (var i = 0; i < roots.length; i++) {
        if (path.indexOf(roots[i]) > -1) {
            continue;
        }
        path.push(roots[i]);
        if (roots[i].value === target) {
            return true;
        } else {
           nextNodes = nextNodes.concat(roots[i].neighbor);
        }
    }
    return breadthSearch(nextNodes, target, path);
}

console.log(breadthSearch([c], 'A', []));

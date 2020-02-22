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

function breadthSearch(roots, target) {
    if (roots === null || roots.length === 0) {
        return false;
    }
    var childList = [];
    for (var i = 0; i < roots.length; i++) {
        if (roots[i].value === target) {
            return true;
        } else {
            childList = childList.concat(roots[i].childs);
        }
    }
    return breadthSearch(childList, target);
}

console.log(breadthSearch([a], 'E'));

var Student = function (name, classId, score) {
    this.name = name;
    this.classId = classId;
    this.score = score;
}

var s1 = new Student('小明', 3, 100);
var s2 = new Student('小红', 1, 80);
var s3 = new Student('小花', 1, 70);
var studentList = [s1, s2, s3];

var orderbyscore = function (list) {
    list.sort(function (a, b) { // 调用内置比较器，制定自己的排序规则进行排序
        return b.score - a.score;
    });
};

var orderbyClass = function (list) {
    list.sort(function (a, b) {
        return a.classId - b.classId;
    });
};

orderbyscore(studentList); // 先按成绩进行排序
orderbyClass(studentList); // 再按班级进行排序
console.log(studentList);

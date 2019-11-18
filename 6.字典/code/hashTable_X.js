/**
 * @Author  zhangl
 * @Date  2019/11/18 9:45 PM
 * @LastEditors zhangl
 * @LastEditTime 2019/11/18 9:45 PM
 * @Description 线性探测法
 */
var HashTable = function () {
    var items = [];
    // hash 值重复率太高
    var loseloseHashCode = function (key) {
        var hash = 0;

        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt(0);
        }

        return hash % 37;
    };
    // hash 值重复率低
    var djb2HashCode = function (key) {
        var hash = 5381;

        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key[i].charCodeAt(0);
        }

        return hash % 1013;
    };
    var Node = function (key, value) {
        this.key = key;
        this.value = value;
    };

    this.put = function (key, value) {
        var position = djb2HashCode(key);

        console.log(position);
        // var position = loseloseHashCode(key);

        if (!items[position]) {
            items[position] = new Node(key, value);
        } else {
            while (items[position]) {
                position++;
            }

            items[position] = new Node(key, value);
        }
    };

    this.getItems = function () {
        return items;
    };
};
// 字典 dictionary
// 散列表：hash table
var HashTable = function (index) {
    var items = [];
    var loseloseHashCode = function (key) {
        var hash = 0;

        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt(0);
        }

        return hash % 37;
    };

    // 存放数据
    this.put = function (key, value) {
        var position = loseloseHashCode(key);

        items[position] = value;
    };

    // 删除数据
    this.remove = function (key) {
        this.put(key, undefined);
    };

    // 获取数据
    this.getItem = function (key) {
        var position = loseloseHashCode(key);

        return items[position];
    };

    // 获取所有数据
    this.getItems = function () {
        return items;
    };
};

var Dictionary = function () {
    var item = {};

    // 检测键
    this.has = function (key) {
        return item.hasOwnProperty(key);
    };

    // 添加键值对
    this.set = function (key, value) {
        item[key] = value;
    };

    // 删除值
    this.delete = function (key) {
        if (this.has(key)) {
            delete item[key];

            return true;
        }

        return false;
    };

    // 获得值
    this.get = function (key) {
        if (this.has(key)) {
            return item[key];
        }

        return undefined;
    };

    this.getItem = function () {
        return item;
    };
};

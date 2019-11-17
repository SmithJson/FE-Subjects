# 字典 {ignore=true}

[toc]

## 什么是字典？

通过 key - value 存储数据的数据结构

## 主要操作

- 添加键值对 set(key, value)
- 移除元素 delete(key)
- 检测键 has(key)
- 有键获取值 get(key)

```javascript
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

        return;
    };

    this.getItem = function () {
        return item;
    };
};
```  

## 散列表 VS 其他数据结构

其他数据结构：获取值的时候需要遍历元素

散列表：可以快速定位元素

loseloseHashCode：通过将健名转化为 ASCII 码相加，然后取余 37 得到 hash 值

## 解决散列表的方法

### 分离链接

散列表 + 链表

```javascript
var LikedList = function () {
    var length = 0; // 链表长度
    var head = null; // 链表头指针

    // 辅助类
    function Node(element) {
        this.element = element;
        this.next = null;
    }

    // append
    this.append = function (element) {
        var node = new Node(element);
        var current = head; // 当前指针位置

        if (head == null) { // 链表为空
            head = node;
        } else { // 链表不为空，链表尾插入节点
            while (current.next) {
                current = current.next;
            }
            // 循环结束current为最后一个节点
            current.next = node;
        }
        length++;
    };

    // isEmpty
    this.isEmpty = function () {
        return length === 0;
    };

    // size
    this.size = function () {
        return length;
    };

    // remove
    this.remove = function (element) {
        return this.removeAt(this.indexOf(element));
    };

    // indexOf
    this.indexOf = function (element) {
        var index = 0;
        var current = head;

        while (current) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    };

    // removeAt
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            if (position === 0) {
                var current = head;

                head = current.next;
            } else {
                var current = head;
                var index = 0;
                var previous = null;

                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            length--;

            return current;
        }

        return null;
    };

    // insert
    this.insert = function (position, element) {
        if (position > -1 && position < length) {
            var node = new Node(element);

            if (position === 0) { // 第一个位置插入
                var current = head;
                head = node;
                node.next = current;
            } else { // 第n个位置插入
                var index = 0;
                var current = head;
                var previous = null; // 上一个节点

                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
        }
    };

    // getHead
    this.getHead = function () {
        return head;
    };
};

var HashTable = function () {
    var items = [];
    var loseloseHashCode = function (key) {
        var hash = 0;

        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt(0);
        }

        return hash % 37;
    };
    var Node = function (key, value) {
        this.key = key;
        this.value = value;
    };

    this.put = function (key, value) {
        var position = loseloseHashCode(key);

        var node = new Node(key, value);

        if (!items[position]) items[position] = new LikedList();

        items[position].append(node);
    };

    this.get = function (key) {
        var position = loseloseHashCode(key);

        if (!items[position]) return undefined;

        var current = items[position].getHead();

        while (current) {
            if (current.element.key === key) return current.element.value;

            current = current.next;
        }

        return undefined;
    };

    this.remove = function (key) {
        var position = loseloseHashCode(key);

        if (!items[position]) return undefined;

        var current = items[position].getHead();

        while (current) {
            if (current.element.key === key) { // 找到删除元素
                items[position].remove(current.element);

                if (items[position].isEmpty()) items[position] = undefined;

                return true;
            }

            current = current.next;
        }

        return false;
    };

    this.getItems = function () {
        return items;
    };
};

// 测试用例
var a = new HashTable();
a.put('zhangl', 'zhanglei@qq.com');
a.put('zhangl', 'zhangl@qq.com');
a.put('Donna', 'Donna@qq.com');
a.remove('zhangl');
console.log(a.getItems()[15].getHead());
```

### 线性探查法


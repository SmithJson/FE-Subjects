# 链表

## 链表概念、结构、操作

由多个节点头尾相邻的数据结构

节点包含自身值和next（指向下一个节点的地址）

链表头

节点

链表尾

插入元素（insert）

获取元素索引（indexOf）

尾部添加元素（append）

移除（remove）

特定移除（removeAt）

## 链表操作

### 方法实现

| 方法名 | 操作 |
| :-: | :-: |
| append | 向链表尾部插入节点 |
| insert | 向指定索引位置插入节点 |
| indexOf | 获取指定节点索引 |
| removeAt | 删除指定索引节点 |
| remove | 删除指定内容节点 |
| isEmpty | 判断链表是否为空 |
| size | 返回链表长度 |

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
            while(current.head) {
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

        while(current) {
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

                while(index < position) {
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

                while(index < position) {
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
    }
};
```
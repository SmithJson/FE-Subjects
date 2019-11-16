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


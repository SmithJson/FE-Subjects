# 集合

具有相同属性的事物的一个总和

## 特性

1. 无重复性
2. 子集
3. 空集所有集合的子集

## 操作

| 方法名 | 说明 |
| -- | -- |
| has | 返回集合是否包含元素 |
| remove | 移除集合元素 |
| add | 添加集合元素 |
| clear | 清空集合 |
| size | 返回集合长度 |
| values | 返回集合所有值 |

```javascript
/*
 * @Author: zhangl
 * @Date: 2019-10-03 17:12:42
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-03 17:43:31
 * @Description: 集合
 */

var Set2 = function () {
    var items = {};

    // has：检测元素是是否存在
    this.has = function (value) {
        return items.hasOwnProperty(value);
    };

    // add：添加元素（集合不重复）
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    // remove：移除元素
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    // size：获取集合大小
    this.size = function () {
        return Object.keys(items).length;
    };

    // clear：清空集合
    this.clear = function () {
        items = {};
        return true;
    };

    // values：提取集合全部值并以数组返回
    this.values = function () {
        var values = [];

        for (var key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    };

    // 

    // getItems
    this.getItems = function () {
        return items;
    };
};
```
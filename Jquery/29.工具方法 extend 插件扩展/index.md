# 工具方法 extend 插件扩展 {ignore=true}

[toc]

## $.extend 工具方法

## $.fn.extend 实例方法

## 扩展方法

```javascript
// $.extend() 加到工具方法里面
$.extend({
    getRandom: function (start, final) {
        var len = final - start;

        return Math.random() * len + start;
    },
});

// $.fn.extend(); 加到实例方法里面
// 拖拽
$.fn.extend({
    drag: function () {
        var disX,
            dixY,
            self = this;

        $(this).on('mousedown', function (e) {
            disX = e.pageX - $(this).offset().left;
            dixY = e.pageX - $(this).offset().left;

            $(document).on('mousemove', function (e) {
                var left = e.pageX - disX;
                var top = e.pageY - dixY;

                $(self).css({
                    left: left,
                    top: top,
                });
            });

            $(document).on('mouseup', function () {
                $(document)
                    .off('mousemove')
                    .off('mouseup');
            });
        });

        return this;
    },
});

$('.demo').drag();
```

## 浅层克隆 | 深层克隆

```javascript
var obj1 = {
    name: 'zhangl',
    age: 18,
    hobbies: [
        'running',
        'swimming',
        'football',
    ],
    parents: {
        father: 'zhangl`s father',
        mather: 'zhangl`s mather',
    },
};

var obj2 = {
    name: '一叶小和尚',
    age: 150,
    hobbies: [
        'reading',
        'chatting',
    ],
    parents: {
        father: '一叶小和尚`s father',
        mather: '一叶小和尚`s mather',
    },
    fruit: '西瓜',
};

var obj3 = {
    name: 'SmithJson',
    money: '1000亿',
};

var obj4 = {};

// 浅层克隆：将 obj2 的属性全部添加到 obj1 上，对于已存在的属性进行覆盖，未有的属性进行添加
$.extend(obj1, obj2);
console.log(obj1);

// 深克隆：
$.extend(true, obj4, obj1, obj2, obj3);
obj4.hobbies[0] = 'basketball';
console.log(obj4);
```

# 工具方法二 {ignore=true}

[toc]

## .proxy()

改变 this 指向，并返回修改 this 后的函数

- function：要改变 this 的函数
- target：目标对象

```javascript
const list = {
    init: function () {
        this.msg = 123;
        this.dom = document.querySelector('.demo');
        this.bindEvent();
    },
    bindEvent: function () {
        // 此处的 this.show 函数里的 this 指向 dom，所以通过$.proxy 修改 this 指向为 list
        // this.dom.onclick = this.show;
        this.dom.onclick = $.proxy(this.show, this);
    },
    show: function () {
        console.log(this.productMs(this.msg));
    },
    productMs: function (msg) {
        return msg + 234;
    },
};

list.init();
```

## .noConflict()

防止冲突

```javascript
var $Z = $.noConflict();

$Z('.demo').on('click', function () {
    console.log(1);
});
```
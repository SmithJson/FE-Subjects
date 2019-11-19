# 异步编程及回调管理者 {ignore=true}

[toc]


### 浏览器中的线程

- 定时触发器线程
- http 网络请求线程
- 事件监听线程
- JS 执行引擎线程
- 渲染引擎线程

注: JS 执行引擎线程与渲染引擎线程是`互斥`调用的

## Callbacks() 回调

- memory: 执行一次 fired 后, add 的回调函数回自动执行
- once: 执行一次 fired 后, 后面 add 的回调函数不执行
- unique: 每个回调函数值绑定一次

```javascript
function a() {
 console.log('我是 a');
}

function b() {
 console.log('我是 b');
}

var cb  = $.Callbacks('unique');

cb.add(a, b);
cb.add(a, b);

cb.fire();
// 输出:  
// 我是 a
// 我是 b

var cb2 = $.Callbacks('once');

cb2.add(a, b);
cb2.add(a, b);

cb2.fire();

cb2.add(a, b);

// 输出:  
// 我是 a
// 我是 b
// 我是 a
// 我是 b
// 但这里最后添加的 a, b 没有执行

var cb  = $.Callbacks('memory');

cb.add(a, b);
cb.add(a, b);

cb.fire();

cb.add(a, b);
// 输出:  
// 我是 a
// 我是 b
// 我是 a
// 我是 b
// 自动执行 最后添加的 a, b 函数
// 我是 a
// 我是 b
``` 

# Vue 基础用法 {ignore=true}

[toc]

## MVVM 框架

## 指令

指令：用于扩展 html 标签功能

### vue 常见指令

- v-mode：双向数据绑定，一般用于表单元素
- v-for：对数组或对象进行循环操作，使用的是 v-for，而不是 v-repeat
- v-on：绑定事件，简写为 `@event_type=event_name`
- v-show：显示/隐藏元素，与 display: none 效果一样，操作频繁选用
- v-if：显示/隐藏，与 元素添加/删除效果一样，操作不频繁选用
- v-bind：绑定动态属性，简写 :attribute_name="value"

## 事件和事件对象 $event

```javascript
<body>
    <div id="root">
        <button @click="print($event)">点我</button>
    </div>
    ...
    <script>
        new Vue({
            el: '#root', // 指定关联对象
            methods: { // 存储方法
                print(e) {
                    const target = e.target;

                    console.log(target);
                    console.log(target.innerText);
                }
            },
        });
    </script>
</body>
```

## 事件修饰符

- .stop：阻止事件冒泡
- .prevent：阻止事件默认行为
- .entry | .49：键盘上方向键
- .up | .13：键盘回车键，通过 e.keyCode 获取
- .once：事件只触发一次
- .native：监听组件根元素的原生事件

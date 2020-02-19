# vue 自定义指令 {ignore=true}

[toc]

## vue 实例的属性和方法

### 属性

- vm.$el：获取 vue 实例的关联的 DOM 元素
- vm.$data：获取 vue 实例的 data 对象
- vm.$options：获取自定义属性
- vm.$refs：获取绑定了 ref 属性的 DOM 元素

### 方法

- vm.$mount：手动挂载 vue 实例
- vm.$destroy：手动销毁 vue 实例
- vm.$nextTick(callback)：手动更新
- vm.$set(object, attr, value)：修改对象属性
- vm.$delete(object, attr)：删除对象属性
- vm.$forceUpdate()：强制 vue 实例重新渲染
- vm.$watch('键路径', callback[newValue, oldValue])：监听 vue 属性值

## 自定义指令

## 过度动画
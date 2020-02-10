# vue class 和 style {ignore=true}

[toc]

## :class

动态绑定 class

## :style

动态绑定 style

## 数据绑定方式

1. 双向数据绑定 v-model
2. 单项数据绑定
    + 方式一：使用 {{}}，可能会出现闪烁，可以使用 v-cloak 解决
    + 方式二：使用 v-text、v-html

## 其他指令

- v-once：数据只绑定一次
- v-pre：不编译，原样显示

## 过滤器

用于过滤 model 层数据，在显示之前进行数据的处理和筛选

语法：{{ data | filter1(参数) | filter2(参数) }}

### 自定义过滤器

- 全局过滤器
- 局部过滤器

```javascript
<div id="root">

    <!-- 使用全局过滤器 -->
    <h3>{{num | addZero}}</h3>

    <!-- 使用局部过滤器 -->
    <h3>{{num2 | toFixed(2)}}</h3>
</div>
...
<script>

    // 自定义全局过滤器
    Vue.filter('addZero', function (data) {
        return data < 10 ? '0' + data : data;
    });

    // vue 实例
    const vm = new Vue({
        el: '#root',
        data: {
            num: 1,
            num2: Math.random() * 100,
        },
        filters: { // 自定义局部过滤器
            toFixed(data, n) {
                return data.toFixed(n);
            },
        },
    });
</script>
```

## vue 生命周期

- beforeCreate：Vue 实例刚刚创建，还未进行数据观测和方法配置
- created：Vue 实例创建完成，并且已经进行数据观测和事件配置
- beforeMount：模版编译之前，还没有进行挂载
- mounted：模版编译完成，数据渲染到模版上，将渲染完成的模版挂载到页面上
- beforeUpdate：组件更新前
- updated：组件更新完成
- beforeDestroy：组件销毁前
- destroyed：组件销毁完成

## 计算属性

### 特点：

1. 数据可以进行逻辑处理
2. 对计算属性中的数据进行监测

### 计算属性 VS 方法

1. 计算属性是基于依赖的，只有依赖的值方法改变时，才能更新变化
2. 计算属性是缓存的，只要依赖没有发生改变，多次访问计算属性得到的值，都是之前缓存的计算结果；方法的值则是在每次执行方法后返回

### set 和 get

1. 计算属性由 get 和 set 两部分组成，分别用于获取属性值和设置属性值，类似于`存储描述符`
2. 默认只有 get，set 需要自己设置

/*
 * @Author: zhangl
 * @Date: 2019-10-03 22:07:55
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-04 01:00:10
 * @Description: 筛选器
 */
var personArr = [
    { name: '王刚', src: './src/img/3.png', des: '脊椎不好', sex: 'male', age: 18 },
    { name: '刘颖', src: './src/img/5.png', des: '我是谁', sex: 'female', age: 28 },
    { name: '王莹莹', src: './src/img/4.png', des: '我很好看', sex: 'female', age: 17 },
    { name: '刘洪波', src: './src/img/1.png', des: '你没有见过的人', sex: 'male', age: 30 },
    { name: '刘飞', src: './src/img/2.png', des: '挂壁你', sex: 'male', age: 25 },
];
var state = {
    text: '',
    sex: 'all',
};

var oUl = document.getElementsByTagName('ul')[0];
var oInput = document.getElementsByTagName('input')[0];

store.subscribe(function () {
    console.log(lastFilterArr(personArr))
    RenderPage(lastFilterArr(personArr));
});

// 渲染页面
function RenderPage(data) {
    // 遍历
    var htmlStr = '';

    oUl.innerHTML = '';
    data.forEach(function (ele, index, self) {
        htmlStr += '<li><img src="'+ ele.src +'" /><p class="name">'+ ele.name +'<p><p class="des">'+ ele.des +'<p></li>';
    });
    oUl.innerHTML = htmlStr;
}

RenderPage(personArr);

// 添加行为
oInput.oninput = function () {
    // state.text = this.value;
    // var newArr = filterArrByText(personArr, state.text);
    // var newArr2 = filterArrBySex(newArr, state.sex);
    // var newArr = lastFilterArr(personArr);

    // RenderPage(newArr);
    store.dispatch({
        type: 'text',
        value: this.value,
    });
};

// 根据文本过滤
// function filterArrByText(data, text) {
//     if (!text) {
//         return data;
//     } else {
//         return data.filter(function (ele, index) {
//             return ele.name.indexOf(text) !== -1;
//         });
//     }
// }

// btn style
var oBtnArr = [].slice.call(document.getElementsByClassName('btn'));
var lastActiveBtn = oBtnArr[2]; // 上一次点击的btn

oBtnArr.forEach(function (ele) {
    ele.onclick = function () {
        // state.sex = this.getAttribute('sex');
        // var newArr = filterArrBySex(personArr, state.sex);
        // var newArr2 = filterArrByText(newArr, state.text);
        // var newArr = lastFilterArr(personArr);

        changeActive(this);
        // RenderPage(newArr);
        store.dispatch({
            type: 'sex',
            value: this.getAttribute('sex'),
        });
    };
});

function changeActive(currentActiveBtn) {
    currentActiveBtn.className = 'btn active';
    lastActiveBtn.className = 'btn';
    lastActiveBtn = currentActiveBtn;
}

// function filterArrBySex(data, sex) {
//     if (sex === 'all') {
//         return data;
//     } else {
//         return data.filter(function (ele, index, self) {
//             return ele.sex === sex;
//         });
//     }
// }
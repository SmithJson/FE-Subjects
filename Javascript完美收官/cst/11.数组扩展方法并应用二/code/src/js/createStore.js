/*
 * @Author: zhangl
 * @Date: 2019-10-04 00:47:25
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-04 01:01:38
 * @Description: Store
 */
function createStore(initialState) {
    var store = initialState || {};
    var list = [];

    function getState(type) {
        return store[type];
    }

    function dispatch(action) {
        store[action.type] = action.value;
        // 当store修改后，执行之前订阅函数
        list.forEach(function (ele) {
            ele();
        });
    }

    function subscribe(func) {
        list.push(func);
    }

    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe,
    };
}

var store = createStore({
    text: '',
    sex: 'all',
});
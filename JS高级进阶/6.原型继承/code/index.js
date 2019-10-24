/*
 * @Author: zhangl
 * @Date: 2019-10-24 20:24:09
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-24 20:32:11
 * @Description: 多继承
 */
function Animal() {
    this.testrr = ['老虎', '猫'];
    this.sleep = function () {
        console.log('pp');
    };
}

Animal.prototype.sleep = function () {
    console.log('pp');
};

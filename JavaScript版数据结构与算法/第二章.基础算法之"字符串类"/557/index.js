/*
 * @Author: zhangl
 * @Date: 2019-10-04 15:54:35
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-04 16:03:31
 * @Description: 反转字符串中的单词 III
 */

/**
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 */

/**
 * 解题思路：
 * 1. 根据空格将字符串分割为数组A
 * 2. 遍历数组A，对每一项，根据字符分割为数组B，使用reverse反转数组B，再将数组B还原为字符串
 * 3. 最后数组A还原为字符串
 */

const reverseWords = str => {
    return str.split(/\s/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}
/*
 * @Author: zhangl
 * @Date: 2020-01-25 02:12:44
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-26 17:06:09
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/controller/blog.js
 */
// 获取博客列表
const getList = (author, keyword) => {
    return [
        {
            id: 1,
            titile: '文章标题A',
            content: '文章内容A',
        },
        {
            id: 2,
            titile: '文章标题B',
            content: '文章内容B',
        },
    ];
};

// 获取博客详情
const getDetail = id => {
    return {
        id: 1,
        titile: '文章标题A',
        content: '文章内容A',
    };
};

// 创建博客
const createBlog = (blogData = {}) => {
    return {
        id: 1,
    };
};

// 更新博客
const updateBlog = (id, blogData = {}) => {
    return true;
};

// 删除博客
const deleteBlog = id => {
    return true;
};

module.exports = {
    getList,
    getDetail,
    createBlog,
    updateBlog,
    deleteBlog,
};

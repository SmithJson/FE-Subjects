/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:18
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-26 17:05:18
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/router/blog.js
 */
const {
    SuccessModel,
    ErrorModel,
} = require('../model/resModel');
const {
    getList,
    getDetail,
    createBlog,
    updateBlog,
    deleteBlog,
} = require('../controller/blog');

const handleBlogRouter = (req, res) => {
    const {
        method,
        path,
        query,
        body,
    } = req;
    const { id } = query;

    // 博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const {
            author,
            keyword,
        } = query;
        const data = getList(author, keyword);

        return new SuccessModel(data);
    }

    // 博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const data = getDetail(id);

        return new SuccessModel(data);
    }

    // 博客创建
    if (method === 'POST' && path === '/api/blog/new') {
        const data = createBlog(body);

        return new SuccessModel(data);
    }

    // 博客更新
    if (method === 'POST' && path === '/api/blog/update') {
        const data = updateBlog(id, body);

        if (data) return new SuccessModel();

        return new ErrorModel('博客更新失败');
    }

    // 博客删除
    if (method === 'POST' && path === '/api/blog/delete') {
        const data = deleteBlog(id);

        if (data) return new SuccessModel();

        return new ErrorModel('博客删除失败');
    }
};

module.exports = handleBlogRouter;


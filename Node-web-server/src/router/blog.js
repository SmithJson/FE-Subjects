/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:18
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-25 03:14:59
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
} = require('../controller/blog');

const handleBlogRouter = (req, res) => {
    const {
        method,
        path,
        query,
    } = req;

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
        const { id } = query;
        const data = getDetail(id);

        return new SuccessModel(data);
    }

    // 博客创建
    if (method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '这是博客创建接口',
        };
    }

    // 博客更新
    if (method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '这是博客更新接口',
        };
    }

    // 博客删除
    if (method === 'POST' && path === '/api/blog/delete') {
        return {
            msg: '这是博客删除接口',
        };
    }
};

module.exports = handleBlogRouter;


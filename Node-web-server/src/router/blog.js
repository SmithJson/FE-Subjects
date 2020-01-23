/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:18
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-24 02:06:54
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/router/blog.js
 */
const handleBlogRouter = (req, res) => {
    const {
        method,
        path,
    } = req;

    // 博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        return {
            msg: '这是博客列表接口',
        };
    }

    // 博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: '这是博客详情接口',
        };
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


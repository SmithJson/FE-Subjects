/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:18
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-02 01:29:08
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

const checkLogin = req => {
    if (!req.session.username) {
        return new ErrorModel('未登录');
    }
};

const handleBlogRouter = async (req, res) => {
    const {
        method,
        path,
        query,
        body,
    } = req;
    const { id } = query;

    // 博客列表
    if (method === 'GET' && path === '/api/blog/list') {
        const data = await getList(query);

        return new SuccessModel(data);
    }

    // 博客详情
    if (method === 'GET' && path === '/api/blog/detail') {
        const data = await getDetail(query);

        return new SuccessModel(data);
    }

    // 博客创建
    if (method === 'POST' && path === '/api/blog/new') {
        const checkLoginResult = checkLogin(req);

        if (checkLoginResult) {
            return checkLoginResult;
        }
        body.author = req.session.username;
        const data = await createBlog(body);

        return new SuccessModel(data);
    }

    // 博客更新
    if (method === 'POST' && path === '/api/blog/update') {
        const checkLoginResult = checkLogin(req);

        if (checkLoginResult) {
            return checkLoginResult;
        }
        const data = await updateBlog({ id, ...body });

        if (data) return new SuccessModel();

        return new ErrorModel('博客更新失败');
    }

    // 博客删除
    if (method === 'POST' && path === '/api/blog/delete') {
        const checkLoginResult = checkLogin(req);

        if (checkLoginResult) {
            return checkLoginResult;
        }
        body.author = req.session.username;
        const data = await deleteBlog({ id, ...body });

        if (data) return new SuccessModel();

        return new ErrorModel('博客删除失败');
    }
};

module.exports = handleBlogRouter;


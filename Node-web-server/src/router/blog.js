/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:18
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-29 23:43:56
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
        body.author = '一叶小和尚'; // 假数据，开发了用户接口后实现真实数据
        const data = await createBlog(body);
        return new SuccessModel(data);
    }

    // 博客更新
    if (method === 'POST' && path === '/api/blog/update') {
        const data = await updateBlog({id, ...body});
        if (data) return new SuccessModel();
        return new ErrorModel('博客更新失败');
    }

    // 博客删除
    if (method === 'POST' && path === '/api/blog/delete') {
        body.author = '一叶小和尚'; // 假数据，开发了用户接口后实现真实数据
        const data = await deleteBlog({ id, ...body });
        if (data) return new SuccessModel();
        return new ErrorModel('博客删除失败');
    }

};

module.exports = handleBlogRouter;


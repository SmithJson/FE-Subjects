/*
 * @Author: zhangl
 * @Date: 2020-01-25 02:12:44
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-28 02:26:18
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/controller/blog.js
 */
const { execute } = require('../db/mysql');

// 获取博客列表
const getList = ({ author, keyword }) => {
    let sql = `
        SELECT id, title, content, createtime, author
        FROM blogs
        WHERE state=1
        `;

    if (author) sql += `
        AND author='${author}'
        `;
    if (keyword) sql += `
        AND title LIKE '%${keyword}%'
    `;

    sql += `
        ORDER BY createtime DESC
    `;

    return execute(sql);
};

// 获取博客详情
const getDetail = ({ id }) => {
    const sql = `
        SELECT id, title, content, createtime, author
        FROM blogs
        WHERE state=1 AND id=${id}
    `;

    return execute(sql).then(result => {
        return result[0] || {};
    });
};

// 创建博客
const createBlog = ({ title, content, author }) => {
    const sql = `
        INSERT INTO blogs(title, content ,createtime ,author)
        VALUES
        ('${title}', '${content}', ${Date.now()}, '${author}')
    `;

    return execute(sql).then(result => {
        return {
            id: result.insertId,
        };
    });
};

// 更新博客
const updateBlog = ({ id, title, content }) => {
    const sql = `
        UPDATE blogs
        SET title='${title}', content='${content}'
        WHERE id=${id}
    `;

    return execute(sql).then(result => {
        return result.affectedRows > 0;
    });
};

// 删除博客
const deleteBlog = ({ id, author }) => {
    const sql = `
        UPDATE blogs
        SET state=0
        WHERE id=${id} AND author='${author}'
    `;

    return execute(sql).then(result => {
        return result.affectedRows > 0;
    });
};

module.exports = {
    getList,
    getDetail,
    createBlog,
    updateBlog,
    deleteBlog,
};

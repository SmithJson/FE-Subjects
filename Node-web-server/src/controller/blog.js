/*
 * @Author: zhangl
 * @Date: 2020-01-25 02:12:44
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-06 20:49:04
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/controller/blog.js
 */
const {
    execute,
    escape,
} = require('../db/mysql');

// 获取博客列表
const getList = ({ author, keyword }) => {
    let sql = `
        SELECT id, title, content, createtime, author
        FROM blogs
        WHERE state=1
    `;

    if (author) sql += `
        AND author=${escape(author)}
    `;
    if (keyword) sql += `
        AND title LIKE ${escape(`%${keyword}%`)}
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
        WHERE state=1 AND id=${escape(id)}
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
        (${escape(title)}, ${escape(content)}, ${Date.now()}, ${escape(author)})
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
        SET title=${escape(title)}, content=${escape(content)}
        WHERE id=${escape(id)}
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
        WHERE id=${escape(id)} AND author=${escape(author)}
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

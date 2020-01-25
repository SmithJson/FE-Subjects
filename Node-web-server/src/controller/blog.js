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

const getDetail = id => {
    return {
        id: 1,
        titile: '文章标题A',
        content: '文章内容A',
    };
};

module.exports = {
    getList,
    getDetail,
};

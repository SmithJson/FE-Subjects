const User = module.exports = {};
const userList = [
    {
        name: 'zhangl',
        password: '123456',
    },
    {
        name: 'miss',
        password: '654321',
    },
];

User.delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

User.isAccount = (username) => {
    return User.delay(300).then(() => {
        const user = userList.filter((item) => item.name === username);
        console.log(user);
        if (!user.length) { // 用户不存在
            return false;
        }

        return user;
    });
};
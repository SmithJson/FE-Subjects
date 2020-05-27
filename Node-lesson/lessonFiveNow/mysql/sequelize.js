(async () => {
    const Sequelize = require("sequelize");

    // 建立连接
    const sequelize = new Sequelize("ruanmoutest", "root", "root", {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false
    });

    // 定义模型,建表
    const Fruit = sequelize.define("Fruit", {
        name: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    },
        {
            timestamps: false
        });

    // Fruit.prototype.totalPrice = function (count) {
    //     return (this.price * count).toFixed(2);
    // };
    // 同步数据库，force: true则会删除已存在的表
    let ret = await Fruit.sync({ force: false })

    // ret = await Fruit.create({
    //     name: "香蕉",
    //     price: 3.5
    // })

    // ret = await Fruit.create({
    //     name: "西瓜",
    //     price: 20
    // })

    ret2 = await Fruit.findAll()
    console.log(ret2);


    // 使用实例方法
    // Fruit.findAll().then(fruits => {
    //     const [f1] = fruits;
       
    //     fruits.forEach((option,index)=>{
    //         console.log(option);
    //     })
    //     console.log(`买5kg${f1.name}需要￥${f1.totalPrice(5)}`);      
    // });

    //找出某一个水果
    // Fruit.findOne({ where: { name: "香蕉" } }).then(fruit => {
    //     // fruit是首个匹配项，若没有则为null
    //     console.log(fruit.get());
    // });

    // console.log('findAll', ret.amount, JSON.stringify(ret))


})();

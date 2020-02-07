var commonFun = {};
commonFun.test = function(){
 console.log('test config：'+sceneParam);
}

commonFun.environment = {
    // 开发环境：
    dev:{
        service:'http://localhost:8081',
        setting:'http://localhost:8082',
        manage:'http://localhost:8083'
    },
    // 测试环境：
    test:{
        service:'http://192.168.0.1:8081',
        setting:'http://192.168.0.1:8082',
        manage:'http://192.168.0.1:8083'
    },
    // 线上环境：
    prod:{
        service:'http://test1.ruanmou.com',
        setting:'http://test2.ruanmou.com',
        manage:'http://test3.ruanmou.com'
    }
}
export default commonFun;
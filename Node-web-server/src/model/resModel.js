/*
 * @Author: zhangl
 * @Date: 2020-01-25 02:07:24
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-29 23:44:36
 * @Description: 请求数据返回格式模型
 * @FilePath: /FE-Subjects/Node-web-server/src/model/resModel.js
 */
class BaseModel {
    constructor(data, message) {

        if (typeof data === 'string') {
            this.message = data;
            data = null;
            message = null;
        }

        if (data) {
            this.data = data;
        }

        if (message) {
            this.message = message;
        }

    }
}

class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message);
        this.errorno = 0;
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message);
        this.errorno = -1;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel,
};
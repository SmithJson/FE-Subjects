var checkResult = {
    ok:function(dom){
        //this
        console.log('ok');
        dom.classList.remove('error');
        dom.classList.add('valid');
       
        //错误提示干掉
        var errmsgT = dom.parentElement.querySelector('.error-msg');
        if(errmsgT){
            errmsgT.remove();
        }
    },
    no:function(dom,errMsg){
        console.log('no');
        dom.classList.remove('valid');
        dom.classList.add('error');
        this.errorTip(dom,errMsg)
    },
    errorTip:function(dom,errMsg){
        var errDom;
        //先判断li后面有没有error-msg这dom 
        var errmsgT = dom.parentElement.querySelector('.error-msg');
        if(!errmsgT){
            errDom = document.createElement('span');
            errDom.className = 'error-msg';
            errDom.innerText = errMsg;
            dom.parentElement.appendChild(errDom);  
        }   
    },
}

//规则集
// strategies['required']
var strategies = {
    minLength:function(errMsg,length){
        if(this.value.length<length){
            checkResult.no(this,errMsg);
            return errMsg;
        } else {
            checkResult.ok(this);
        }
    },
    required:function(errMsg){
        // this --  input
        if(this.value=='') {
            //错误提示 ,追加到input后面
            checkResult.no(this,errMsg);
            return errMsg;
        }else {
             //正确提示
             checkResult.ok(this);
        }
    },
    isNumber:function(errMsg){
        if (!/\d+/.test(this.value)) {
            checkResult.no(this,errMsg);
            return errMsg;
        } else {
            checkResult.ok(this);
        }
    },
    isMobile:function(errMsg){
        if(!/(^1[3|5|7|8|9][0-9]{9}$)/.test(this.value)){
             //错误提示
             checkResult.no(this,errMsg);
             return errMsg;
        } else {
            checkResult.ok(this);
        }
    }
}

//1. 添加校验
//2. 点击按钮校验 

function Validator(){
    this.items=[] ;   // fn1, fn2, fn3
}

// 使用时：
// validate.add(registerForm.userName, [{
//     strategy:'required',
//     errorMsg:'用户名不能为空'
// },{
//     strategy:'isNumber',
//     errorMsg:'只能为数字'
// }]); 

Validator.prototype.add = function(dom,rule){
    for(var i=0,len=rule.length;i<len;i++) {
        var strategy = rule[i].strategy; //required
        var errorMsg = rule[i].errorMsg;  //用户名不能为空
        console.log(strategy);
        //特殊情况
        if(strategy.indexOf('minLength')!=-1){
            var temp = strategy.split(':');
              strategy = 'minLength';
            var minLen =  temp[1];
        }
      //改变作用域 和 传参
        this.items.push(strategies[strategy].bind(dom,errorMsg,minLen));

    }
}

//开始校验
Validator.prototype.start = function(ev){
    for(var i=0,len=this.items.length;i<len;i++) {
       var error =  this.items[i]();
    //    如果只验证一个，可以加上下面这句话， 想一起验证就去掉
       if(error) {
            return error;
            break;
       }
      

    }
} 








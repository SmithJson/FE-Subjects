//获取手机验证码成功，，并开始倒计时
var getCapture = document.getElementById('getCapture');
var registerForm = document.getElementById('registerForm');
var regPhone = registerForm.phone;

//输入手机号，实时验证手机号是否有效
registerForm.phone.oninput = debounce(checkMobile,500);
function checkMobile(){
    if(!/(^1[3|5|7|8|9][0-9]{9}$)/.test(regPhone.value)){   
        getCapture.setAttribute('disabled','disabled');
        getCapture.classList.remove('count-downing');
        return;
    }
    getCapture.classList.add('count-downing');
    getCapture.removeAttribute('disabled');
}

getCapture.onclick = function(){
    countDownLoan({
        btnDom: getCapture,
        isAfterText: '获取验证码',
        textCounting: 's'
    },function() {
        //倒计时结束后刷新验证码
    });
}

//表单验证,已讲
var validate = new Validator();
    validate.add(registerForm.phone, [{
        strategy:'isMobile',
        errorMsg:'请输入正确的手机号'
    }]); 
    validate.add(registerForm.username, [{
                    strategy:'required',
                    errorMsg:'用户名不能为空'
                },{
                    strategy:'minLength:5',
                    errorMsg:'最小长度为5'
                }]);   
    validate.add(registerForm.password, [{
        strategy:'required',
        errorMsg:'密码不能为空'
    }]); 
    
//事件委托
registerForm.querySelectorAll('input').forEach(function(option,index){
    option.addEventListener('blur',function(ev){ 
        var ret = validate.start(ev);
        
    })
})
//点击注册按钮，调取后端接口注册
document.getElementById('btnRegister').onclick =  function(){

    var ret = validate.start();
    
    console.log(ret);
    if(ret){
        return;
    }
    ajax.post("/users/reg",{
        phone:registerForm.phone.value,
        username:registerForm.username.value,
        password:registerForm.password.value
    }).then((res)=>{
        if(res.code==1){
            createMessTipWin.tipMsg('恭喜您，注册成功，赶紧去登录吧！',function(){
                location.href="/login";
            });
        }
    }); 
}

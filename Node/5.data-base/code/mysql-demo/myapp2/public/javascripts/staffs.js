//获取所有的员工列表
function getAllUsers(){
    ajax.post("/users/staffs").then((res)=>{
        if(res.code==1){
            var trData = [];
            res.data.forEach((option,index)=>{
                var dataOpt = JSON.stringify(option);
                trData.push(`<tr>
                    <td>${option.id}</td>
                    <td>${option.username}</td>
                    <td>${option.age}</td>
                    <td>${option.sex}</td>
                    <td>${option.hometown}</td>
                    <td width="140" data-msg=${dataOpt}>
                    <button type="button" class="btn-normal" tag="delete">删除员工</button>
                    <button type="button" class="btn-normal" tag="edit">修改员工</button>
                    </td>
                </tr>`);
            })
            document.getElementById('staffsData').innerHTML = trData.join('');
        }
    
    });
}
getAllUsers();

//获取表单里所有的值
function getFormData(dataJson){ 
    var isGET = (dataJson && Object.keys(dataJson).length) ? true :false; //是否渲染
    var form = document.querySelector('.tip-main-content').querySelector('form');
   var dataJson = dataJson ? dataJson : {};
    for (var i=0;i<form.elements.length;i++)
    {
        var ee=form.elements[i];
        if("INPUT"==ee.tagName||"SELECT"==ee.tagName){
        //处理代码
           
            if(isGET) {
                ee.value = dataJson[ee.name];
            } else {
                dataJson[ee.name] = ee.value;
            }
           
        };
    }
    return dataJson;
}
//添加员工
btnAddStaff.onclick = function(){
    createMessTipWin.init({
        tips:document.getElementById('staffAddBox').innerHTML,   //主体内容
        title:'添加新员工',
        area:['400','380'],
        defineCls:'test-dom',
        funcOk:function(){
              //loading
              //调接口
              //隐藏loading
           var formData =  getFormData();
           ajax.post("/users/staffs/add",formData).then((res)=>{
            if(res.code==1){
                createMessTipWin.tipMsg('添加成功',function(){
                    //重新获取用户列表
                    createMessTipWin.removeLoading();
                    getAllUsers();
                })
            }
        
        });
        },
    });
}

//删除员工
var tableUserTable = document.getElementById('tableUserTable');
//利用事件委托， 对table进行监听
tableUserTable.addEventListener('click',function(ev){
    var target = ev.target;
    var tag = target.getAttribute('tag');
    var thisData = JSON.parse(target.parentElement.getAttribute('data-msg'));
    if(target.tagName.toUpperCase()=='BUTTON') {

        switch(tag){
            case 'delete':
                ajax.delete("/users/staffs/delete",{
                    id:thisData.id
                }).then((res)=>{
                    if(res.code==1){
                        createMessTipWin.tipMsg('删除成功',function(){
                            //重新获取用户列表
                            createMessTipWin.removeLoading();
                            getAllUsers();
                        })
                    }
                
                });
                break;
            case 'edit':
                
                createMessTipWin.init({
                    tips:document.getElementById('staffAddBox').innerHTML,   //主体内容
                    title:'修改员工',
                    area:['400','380'],
                    defineCls:'test-dom',
                    funcOk:function(){
                       var formData =  getFormData();
                       formData.id=thisData.id;
                       ajax.post("/users/staffs/update",formData).then((res)=>{
                        if(res && res.code==1){
                            createMessTipWin.tipMsg('修改成功',function(){
                                //重新获取用户列表
                                createMessTipWin.removeLoading();
                                getAllUsers();
                            })
                        }
                    });
                    }
                },function(){
                    //需要把已有的信息进行渲染
                    getFormData(thisData);
                });   
                break;

        }
    }
})
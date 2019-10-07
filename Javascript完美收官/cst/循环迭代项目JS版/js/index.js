/*
 * @Author: zhangl
 * @Date: 2019-10-06 20:23:04
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-08 00:06:09
 * @Description: 项目脚本
 */
var menu = document.getElementsByClassName('menu')[0];
var modal = document.getElementsByClassName('modal')[0];
var allTableData = [];

function init() {
    var active = document.getElementsByClassName('active')[0];
    initContentShow(active);
    renderTable();
    bindEvent();
}

// 绑定事件
function bindEvent() {
    menu.onclick = function (e) {
        var tagName = e.target.tagName;
        if (tagName !== 'DD') return false;
        initContentShow(e.target);
        initMenu();
        e.target.classList.add('active');
    };
    var modalContent = document.getElementsByClassName('modal-content')[0];
    modalContent.onclick = function (e) {
        e.stopPropagation();
    };
    modal.onclick = function (e) {
        modal.classList.remove('show');
    };
    var editSubmitBtn = document.getElementById('edit-submit');
    var editForm = document.getElementById('edit-student-form');
    editSubmitBtn.onclick = function (e) {
        e.preventDefault();
        var formResult = getFormData(editForm);
        if (formResult.status === 'fail') {
            alert(formResult.msg);
            return false;
        }
        var obj = Object.assign({}, {
            appkey: "dongmeiqi_1547441744650",
        }, getFormData(editForm).student);
        var result = changeData("http://api.duyiedu.com/api/student/updateStudent", obj);
        if (result.status === 'success') { // 提交成功
            editForm.reset();
            alert(result.msg);
            modal.classList.remove('show');
            renderTable();
        }
    };
    // 新增学生提交
    var addSubmitBtn = document.getElementById('add-submit');
    var addForm = document.getElementById('add-student-form');
    addSubmitBtn.onclick = function (e) {
        e.preventDefault();
        var formResult = getFormData(addForm);
        if (formResult.status === 'fail') {
            alert(formResult.msg);
            return false;
        }
        var studentData = formResult.student;
        var obj = Object.assign({}, {
            appkey: 'dongmeiqi_1547441744650',
        }, studentData);
        var result = changeData('http://api.duyiedu.com/api/student/addStudent', obj);
        if (result.status === 'success') {
            alert(result.msg);
            window.location.reload();
        } else {
            alert(result.msg);
        }
    };
}

// 初始化菜单
function initMenu() {
    var active = document.getElementsByClassName('active');
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('active');
    }
}

// 初始化内容区
function initContentShow(dom) {
    var id = dom.getAttribute('data-id');
    var rightContent = document.getElementsByClassName(id)[0];
    var content = document.getElementsByClassName('content');
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
    }
    rightContent.style.display = 'block';
}

// 向后端存储数据
function changeData(url, param) {
    var result = null;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (typeof param == 'string') {
        xhr.open('GET', url + '?' + param, false);
    } else if (typeof param == 'object') {
        var str = "";
        for (var prop in param) {
            str += prop + '=' + param[prop] + '&';
        }
        xhr.open('GET', url + '?' + str, false);
    } else {
        xhr.open('GET', url + '?' + param.toString(), false);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return result;
}

// 渲染表格数据
function renderTable() {
    var data = changeData("http://api.duyiedu.com/api/student/findAll", "appkey=dongmeiqi_1547441744650");
    if (data.status === 'fail') {
        alert(data.msg);
        return false;
    }
    var tableData = data.data;
    allTableData = data.data;
    var tableBody = document.getElementById('student-body');
    var str = '';
    for (var i = 0; i < tableData.length; i++) {
        var item = tableData[i];
        str += '\
        <tr>\
            <td>' + item.sNo + '</td>\
            <td>' + item.name + '</td>\
            <td>' + (item.sex ? '女' : '男') + '</td>\
            <td>' + item.email + '</td>\
            <td>' + (new Date().getFullYear() - item.birth) + '</td>\
            <td>' + item.phone + '</td>\
            <td>' + item.address + '</td>\
            <td>\
                <button class="btn edit" data-index="' + i + '">编辑</button>\
                <button class="btn del" data-index="' + i + '">删除</button>\
            </td>\
        </tr>\
    ';
    }
    tableBody.innerHTML = str;
    bindTableEvent();
}

// 初始化编辑表单
function initEditForm(data) {
    var editForm = document.getElementById('edit-student-form');
    for (var prop in data) {
        if (editForm[prop]) {
            editForm[prop].value = data[prop];
        }
    }
}

// 获取form表单的学生数据
function getFormData(formData) {
    var status = 'success';
    var msg = '';
    var name = formData.name.value;
    var sex = formData.sex.value;
    var sNo = formData.sNo.value;
    var email = formData.email.value;
    var birth = formData.birth.value;
    var phone = formData.phone.value;
    var address = formData.address.value;
    var student = {
        name: name,
        sex: sex,
        sNo: sNo,
        email: email,
        birth: birth,
        phone: phone,
        address: address,
    }
    if (!name.match(/^\w{4,16}$/)) {
        msg = '姓名为4 - 16位字符'
        status = 'fail';
    }
    return {
        student: student,
        msg: msg,
        status: status,
    };
}

function bindTableEvent() {
    var editBtn = document.getElementsByClassName('edit');
    var delBtn = document.getElementsByClassName('del');
    for (var i = 0; i < editBtn.length; i++) {
        editBtn[i].onclick = function () {
            var index = this.getAttribute('data-index');
            modal.classList.add('show');
            initEditForm(allTableData[index]);
        };
        delBtn[i].onclick = function () {
            var isDel = window.confirm('确认删除？');
            var index = this.getAttribute('data-index');
            if (!isDel) return false;
            var result = changeData('http://api.duyiedu.com/api/student/delBySno', {
                appkey: 'dongmeiqi_1547441744650',
                sNo: allTableData[index].sNo,
            });
            if (result.status === 'success') {
                alert(result.msg);
                renderTable();
            }
        };
    }
}

init();
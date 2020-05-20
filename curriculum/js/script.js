"use strict";
/**
 * 创建Dom对象
 */
function creatDom(node){
    return document.createElement(node);
}
/**
 * 获取ID的DOM元素
 */
 function getID_DOM(id){
     return document.getElementById(id);
 }

 /**
  * 设置属性
  */
 function setAttr(node,styles){
     for(let key in styles){
        node.setAttribute(key,styles[key])
     }
 }
const tableDom =creatDom("table");//创建DOM
const divDom = getID_DOM("table-data-wrap");//通过id得到DOM元素

const styles={
    "width": '100%',
    'border': "0",
    'cellpadding':"0",
    'id':"table-data-wrap",
    'cellspacing': "0"
};
setAttr(tableDom,styles);


divDom.appendChild(tableDom);//把table放进div
tableDom.innerHTML = `<thead>
                    <tr>
                    <th>头像</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>   
                    <th>手机号</th>
                    <th>国籍</th>
                    <th width="200">爱好</th>
                    <th>头衔</th>
                    <th>操作</th>
                    </tr>
                    </thead>` ;//元素填内容



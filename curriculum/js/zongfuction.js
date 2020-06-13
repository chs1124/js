(function(){
    "use strict";
    if(!window.zongfuction){window.zongfuction={};}

    /**
 * 创建Dom对象
 * js的登录帐号：321932193219@qq.com  mima:32193219
 */
function creatDom(node){
    return document.createElement(node);
}
window.zongfuction.creatDom=creatDom;

/**
 * 获取ID的DOM元素
 */
function getID_DOM(id){
    if(typeof id!="string"){
        throw new Error("参数ID必须是一个字符串");
    }
    return document.getElementById(id);
}
window.zongfuction.getID_DOM=getID_DOM;

/**
  * 设置属性
  */
 function setAttr(node,styles){
    for(let key in styles){
       node.setAttribute(key,styles[key])
    }
}

window.zongfuction.setAttr=setAttr;
console.log(window)
})()
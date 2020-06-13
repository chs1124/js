"use strict";
/**
 * 创建Dom对象
 * js的登录帐号：321932193219@qq.com  mima:32193219
 */


const tableDom =window.zongfuction.creatDom("table");//创建DOM
const divDom = window.zongfuction.getID_DOM("table-data-wrap");//通过id得到DOM元素

const styles={
    "width": '100%',
    'border': "0",
    'cellpadding':"0",
    'id':"table-data-wrap",
    'cellspacing': "0"
};
window.zongfuction.setAttr(tableDom,styles);


divDom.appendChild(tableDom);//把table放进div


let tableHtml=`<thead><tr>`
jsonTh.forEach((item)=>{
    let width=item.width?` width="${item.width}"`:""
    let id=item.id?` id="${item.id}"`:""
    tableHtml+=`<th${width}${id}>${item.tableTh}</th>`
})
tableHtml+=`</tr></thead>`

tableDom.innerHTML = tableHtml ;//元素填内容



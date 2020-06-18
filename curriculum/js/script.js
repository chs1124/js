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



let tbodyHtml=`<tbody>`;
let trHtml=``;

for(let i=0;i<tbodyData.length;i++){
    const data=tbodyData[i];
    console.log(data)
    trHtml+=`<tr>`
    //头像
    trHtml+=`<td>
    <div class="face">
        <span class="gender icon-${data.face.gender}"></span>
        <img src=${data.face.img} alt="">
    </div>
</td>`
//名字
trHtml+=`<td>
<div class="people-name">
    <h4 class="name">${data.name.truename}</h4>
    <span class="nickname option-05 fs-12">昵称：${data.name.nickname}</span>
</div>
</td>`
//性别
trHtml+=` <td>
<div class="gender-wrap">
    <span class="gender icon-girl ${data.face.gender==="girl"?'': "option-05"}"></span>
    <span class="gender icon-boy ${data.face.gender==="boy"?'': "option-05"}"></span>
</div>
</td>`
//年龄
trHtml+=` <td>
<div class="age text-center">
    <p>${data.age.number}</p>
    <span class="option-05 fs-12">（单身狗）</span>
</div>
</td>`
//手机号
trHtml+=`<td>
<div class="phone">
    ${data.phone.code}<span class="option-05">（中国）</span><br />
    ${data.phone.number}
</div>
</td>`
//国籍
trHtml+=`<td>
<div>
    <img src=${data.country.img} alt=${data.country.name}>
    <p class="country-name" style="color: ${data.country.color};">${data.country.name}</p>
</div>
</td>`
//爱好
let likeHtml=``
data.like.forEach((item)=>{
    likeHtml+=`<span style="background-color:${item.color};">${item.tag}</span>`
})
trHtml+=`<td>
<div class="likes">
    ${likeHtml}
</div>
</td>`
//头衔
trHtml+=` <td>
<div class="grade">
    <span class="role-name">${data.rank.name}</span>
    <div class="grade-wrap icon-grade">
    <div class="grade-high icon-grade" style="width: ${data.rank.level*16.5}%;"></div>
    </div>
</div>
</td>`
//设置
trHtml+=`<td>
<div class="operation">
    <a href="javascript: void(0);" class="operation-btn">设置</a>
    <ul class="links">
        <a href="javascript: void(0);">编辑</a>
        <a href="javascript: void(0);">删除</a>
        <a href="javascript: void(0);">锁定</a>
        <a href="javascript: void(0);">收起</a>
    </ul>
</div>
</td>`
    trHtml+=`</tr>`
}
tableDom.innerHTML = tableHtml+trHtml ;//元素填内容
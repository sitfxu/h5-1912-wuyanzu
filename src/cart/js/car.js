$(function(){
load(getDate(),'cart');
// localStorage.setItem('list',car)
// localStorage.setItem()
    // 全选 全不选功能的实现：
$('.checkall').change(function(){
    // console.log($(this).prop('checked'));
    $('.j-checkbox, .checkall').prop('checked',$(this).prop('checked'));
    // 添加背景颜色；
    if($(this).prop('checked')){
        $('.cart-item').addClass('check-cart-item')
    }else{
        $('.cart-item').removeClass('check-cart-item')
    }
});
// 单选
$('.j-checkbox').change(function(){
    if($('.j-checkbox:checked').length===$('.j-checkbox').length){
        $('.checkall').prop('checked',true)
    }else{
        $('.checkall').prop('checked',false)
    }
    //添加背景颜色
    if($(this).prop('checked')){
        $(this).parents('.cart-item').addClass('check-cart-item')
    }else{
        $(this).parents('.cart-item').removeClass('check-cart-item')
    }
});

// 数量加
$('#cart').on('click','.increment',function(){    
    var n=$(this).siblings('.itxt').val();
    n++;
    var goodName = $(this).parent().parent().parent().find('.p-msg').text();
    // console.log(goodName);
    var productList = getDate();
    for(var i=0;i<productList.length;i++){
        if(goodName==productList[i].name){
            productList[i].num++;            
        }
    }

    saveDate(productList)   
    load(productList,'cart')
 
})

// 数量减
$('#cart').on('click','.decrement',function(){    
    var n=$(this).siblings('.itxt').val();
    n--;
    var goodName = $(this).parent().parent().parent().find('.p-msg').text();
    // console.log(goodName);
    var productList = getDate();
    for(var i=0;i<productList.length;i++){
        if(goodName==productList[i].name){
            productList[i].num--;            
        }
        if(n<=0){
            return;
        }
    }
    saveDate(productList)   
    load(productList,'cart')
 
})

// 修改value里面的值；
$('#cart').on('change','.itxt',function(){    
    var n=$(this).val();  
    var goodName = $(this).parent().parent().parent().find('.p-msg').text();
    // console.log(goodName);
    var productList = getDate();
    for(var i=0;i<productList.length;i++){
        if(goodName==productList[i].name){
            productList[i].num=n;            
        }
    }
    saveDate(productList)   
    load(productList,'cart')
 
})

// 删除
$('#cart').on('click','.p-action a',function(){    
    var n=$(this).text();
    var goodName = $(this).parent().siblings().parent().find('.p-msg').text();
    // console.log(goodName);
    var productList = getDate();
    for(var i=0;i<productList.length;i++){
        if(goodName==productList[i].name){
            productList.splice(i,1)      
        }
    }
    saveDate(productList)   
    load(productList,'cart')
 
})
// 清理购物车
$('.clear-all').click(function(){
    saveDate([])   
    load([],'cart')
})
//读取本地存储数据
function getDate(){
    var data=localStorage.getItem('list');
    if(data !==null){
        return JSON.parse(data);
    }else{
        return [];
    }
}
// 保存本地存储数据
function saveDate(data){
    data = JSON.stringify(data);
    localStorage.setItem('list',data)
}
//渲染本地存储数据
function load(productList,containerId){    
    var container=document.getElementById(containerId);
  if(productList.length<1){
    container.innerHTML = "";
    return;
  }
  var total = 0;
  var Num = 0;
  var str=`<div class="cart-thead">
  <div class="t-checkbox">
      <input type="checkbox" name="" id="" class="checkall"> 全选
  </div>
  <div class="t-goods">商品</div>
  <div class="t-price">单价</div>
  <div class="t-num">数量</div>
 
  <div class="t-action">操作</div>
</div>`;
for(var i=0;i<productList.length;i++){
    total+=productList[i].price*productList[i].num;
    Num+=productList[i].num;
    str+=`<div class="cart-item check-cart-item">
    <div class="p-checkbox">
        <input type="checkbox" name="" id="" checked class="j-checkbox">
    </div>
    <div class="p-goods">
        <div class="p-img">
            <img src="${productList[i].img}" alt="">
        </div>
        <div class="p-msg">${productList[i].name}</div>
    </div>
    <div class="p-price">￥${productList[i].price}</div>
    <div class="p-num">
        <div class="quantity-form">
            <a href="javascript:;" class="decrement">-</a>
            <input type="text" class="itxt" value="${productList[i].num}">
            <a href="javascript:;" class="increment">+</a>
        </div>
    </div>
    
    <div class="p-action"><a href="javascript:;">删除</a></div>
</div>`
}
str+=`<div class="cart-floatbar">
                    <div class="select-all">
                        <input type="checkbox" name="" id="" class="checkall">全选
                    </div>
                    <div class="operation">
                      
                        <a href="javascript:;" class="clear-all">清理购物车</a>
                    </div>
                    <div class="toolbar-right">
                        <div class="amount-sum">已经选<em>${Num}</em>件商品</div>
                        <div class="price-sum">总价： <em>￥${total}</em></div>
                        <div class="btn-area">去结算</div>
                    </div>
                </div>
            </div>`
container.innerHTML=str;
}






























})
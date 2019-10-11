function setStorage(productList){
    //设置本地存储
    window.localStorage.setItem('list',JSON.stringify(productList))
}

function getStorage(){
    //获取本地存储:list
    return JSON.parse(window.localStorage.getItem('list')||'[]');
}

function addCarEvent(){
    var that = this;
    //给商品列表添加点击加入购物车事件
    var addCartBtns = document.querySelectorAll('.addCart');
    console.log(addCartBtns);
    for(var i=0;i<addCartBtns.length;i++){
        addCartBtns[i].onclick = function(){
            //在事件函数中this指的是当前的事件源
            //获取当前被点击商品的信息
            var li = this.parentNode;
            var product = {
                img:"1.png",
                name:li.children[0].innerHTML,
                price:li.children[1].innerHTML,	
             
            }
            // console.log(product.imgUrl)
            //把商品信息传入addProduct函数,来进行商品列表的更新
            that.addProduct(product);
        }
    }
}
addCarEvent();


function addProduct(product){
    var that = this;
    //product是传入的新商品
    var productList = this.getStorage()
    for(var i=0;i<productList.length;i++){
        if (productList[i].price==product.price) {
            //如果该商品上商品列表中已存在	
            productList[i].num = productList[i].num+1;
            //更新本地存储,更新购物车
            this.setStorage(productList);
            return;
        }
    }
    //如果该商品上商品列表中不存在
    product.num = 1;
    productList.push(product);
    //更新本地存储,更新购物车
    this.setStorage(productList);
}
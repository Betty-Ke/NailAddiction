
window.addEventListener("load", function(){
    // 購買數量
    cart_count(); 
    //頁面載入
    init_page();
    //試試
    btn_try_click();
    //購買
    btn_buy_click();
});

// 購買數量
function cart_count(){
    var numplus = document.getElementById("numplus");
    var numcut = document.getElementById("numcut");
    var inputnum = document.getElementById("inputnum");

    numplus.addEventListener("click", function(){
        inputnum.value = parseInt(inputnum.value) + 1;
    });
    numcut.addEventListener("click", function(){
        if(inputnum.value <= 1){
            inputnum.value = 1;
        }else{
            inputnum.value = parseInt(inputnum.value) - 1;
        }
    });

}
//取網址傳來的參數
var url = new URL(location.href);
var p_pic = url.searchParams.get('pic');
//去掉網址傳來的底線
var p_name = url.searchParams.get('name').replaceAll("_"," ");
var p_price = url.searchParams.get('price');
var p_discount = url.searchParams.get('discount');
function init_page(){  
    //改變圖片
    document.querySelector('.pdt_img').src= "img/"+ p_pic;
    //改變商品名稱
    document.querySelector('.text_box h4').innerText= p_name;
    //改變商品價格
    if(p_discount != null){
        document.querySelector('.text_box p').innerText= "NT$ "+p_discount;
    }else {
        document.querySelector('.text_box p').innerText= "NT$ "+p_price;
    }
}

function btn_try_click(){
    //session 存試試的商品
    let btn_try = document.getElementsByClassName('btn_try')[0];
    btn_try.addEventListener('click', function(){
        let tyr_puduct = {'name': p_name, 'price' : p_price, 'discount' : p_discount, 'pic': p_pic};
        sessionStorage.setItem('session_try', JSON.stringify(tyr_puduct));
        location.href='lookbook.html';
    }); 
}
//購買按鈕
function btn_buy_click(){
    //購物車數量
    var btn = document.getElementsByClassName('btn_buy');
    for(var i = 0 ; i < btn.length ; i ++ ){
        btn[i].addEventListener('click', function(){
            let shopCarCon = document.getElementsByClassName('shopCarCon')[0];
            let session_shopCarCon =  parseInt(sessionStorage.getItem('session_shopCarCon'));
            //判斷session購物車是否有東西
            if(!isNaN(session_shopCarCon)){     
                //點擊後數量+1   
                shopCarCon.dataset.count =  ++session_shopCarCon;
            }else {
                //代表第一購買，則增加class(購物車圈圈) ，顯示1
                shopCarCon.classList.add('shopCarCon_show');
                shopCarCon.dataset.count = session_shopCarCon = 1;
            }
            //最後更改後的數量存進session
            sessionStorage.setItem('session_shopCarCon', session_shopCarCon);

            // 購物車
            //取出購物車商品
            let shoping_goods = JSON.parse(sessionStorage.getItem('session_shop_goods'));
            //購物數量
            let count = document.getElementById("inputnum").value; 
            
            //商品物件
            let good = {
                'name': p_name,
                'price' : p_price, 
                'discount' : p_discount, 
                'count' : count, 
                'pic': p_pic
            };  
            //購物車若是空的代表第一次購買
            if(shoping_goods == null) {
                shoping_goods = [];
            }
            shoping_goods.push(good);
            sessionStorage.setItem('session_shop_goods', JSON.stringify(shoping_goods));
           
        });
    }
}

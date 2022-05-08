
let category_btn = document.getElementById("category_btn");
// let options_i = category_btn.selectedIndex;
category_btn.addEventListener('change', change_catbar);
let colorbar = document.getElementsByClassName("colorbar");
window.addEventListener("load", function(){
    //頁面載入
    init_try_page();
    btn_buy_click();
    cart_count();
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

function init_try_page(){
    //session try
    let pdt_img = document.querySelector(".lookbook_product img");
    let pdt_name = document.querySelector(".lookbook_product h4");
    let pdt_price = document.querySelector(".lookbook_product p");
    let pdt_url = document.querySelector(".lookbook_product a");

    //商品頁點測試帶過來的商品物件
    let tyr_puduct = JSON.parse(sessionStorage.getItem('session_try'));

    if(tyr_puduct != null){
        pdt_img.src = src="img/" + tyr_puduct.pic;
        pdt_name.innerHTML = tyr_puduct.name;
        pdt_price.innerHTML = tyr_puduct.price;
        if(tyr_puduct.discount != null){
            pdt_url.href="product_d.html?pic="+tyr_puduct.pic+"&name="+tyr_puduct.name+"&price="+tyr_puduct.price+"&discount="+tyr_puduct.discount;
        }else {
            pdt_url.href="product_d.html?pic="+tyr_puduct.pic+"&name="+tyr_puduct.name+"&price="+tyr_puduct.price; 

        }
        //存儲session若有購買可以直接拿出來用
        let good = {'name': tyr_puduct.name, 'price' : tyr_puduct.price, 'discount' : tyr_puduct.discount, 'pic': tyr_puduct.pic};  
        sessionStorage.setItem('session_try_not_buy', JSON.stringify(good));
    }
}

// 換系列顏色
function change_catbar(){
    // console.log(this.value);
    let cat = this.value;
    switch(cat){
        case 'je':
            for(let k = 0;k < colorbar.length; k++){
                colorbar[k].classList.add("color_none");
            }
            document.getElementsByClassName("colorbar3")[0].classList.remove("color_none");
            break;
        case 'ma':
            for(let k = 0;k < colorbar.length; k++){
                colorbar[k].classList.add("color_none");
            }
            document.getElementsByClassName("colorbar2")[0].classList.remove("color_none");
            break;
        case 'ce':
            for(let k = 0;k < colorbar.length; k++){
                colorbar[k].classList.add("color_none");
            }
            document.getElementsByClassName("colorbar4")[0].classList.remove("color_none");
            break;
    }
}
// color_btn 換圖
let color_btn = document.getElementsByClassName("color");
for(let j = 0; j < color_btn.length; j++){
    color_btn[j].addEventListener("click", change_color);
    color_btn[j].addEventListener('click', change_pdt);
}
function change_color(){
    // console.log(this.id);
    let btn_id = this.id;
    // console.log(btn_id);
    let jnail_pic = document.getElementById( btn_id+'_i');
    // console.log(jnail_pic);
    let handpic_all = document.getElementsByClassName("handpic");
    for(let k = 0; k < handpic_all.length; k++){
        handpic_all[k].style.display = "none";
        for(let j = 0; j < color_btn.length; j++){
            if(color_btn[j].classList.contains("-on")){
                color_btn[j].classList.remove("-on");
            }
        }   
    }
    jnail_pic.style.display = "block";
    this.closest("li").classList.add("-on");

}
// product info
function change_pdt(){
    let btn_data = this.dataset.pdt;
    let btn_dataname = (this.dataset.name).replaceAll('_',' ');
    let btn_price = this.dataset.price;
    let btn_discount = this.dataset.discount;

    console.log(btn_data);
    let pdt_img = document.querySelector(".lookbook_product img");
    console.log(pdt_img);
    pdt_img.src ="img/" + btn_data;

    let pdt_name = document.querySelector(".lookbook_product h4");
    pdt_name.innerHTML = btn_dataname;

    let pdt_url = document.querySelector(".lookbook_product a");

    //有折扣就顯示折扣價錢
    if(btn_discount != ""){
        let pdt_price = document.querySelector(".lookbook_product p");
        pdt_price.innerHTML= "NT$ "+btn_discount;
        pdt_url.href = "product_d.html?pic="+btn_data+"&name="+btn_dataname+"&price="+btn_price+"&discount="+btn_discount;

    }else{
        let pdt_price = document.querySelector(".lookbook_product p");
        pdt_price.innerHTML= "NT$ "+btn_price;
        pdt_url.href = "product_d.html?pic="+btn_data+"&name="+btn_dataname+"&price="+btn_price;

    }

    //存儲session若有購買可以直接拿出來用
    let good = {'name': btn_dataname, 'price' : btn_price, 'discount' : btn_discount, 'pic': btn_data};  
    sessionStorage.setItem('session_try_not_buy', JSON.stringify(good));
   

    
}
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
var interval_id = new Array();

function share_slider(index){

    let xleft = -150;
    let xright = 470;
    let s = 2000;
    switch(index){
        case 0:
            let pic1 = document.querySelector('.pic1');
            x1 = x1 - 2;
            if (x1 <= xleft){         
                x1 = xright;
            }
            console.log(x1);
            pic1.style.transform = "translate3d(" + x1 + "px, 0px, 0px)";
            break;
        case 1:
            let pic2 = document.querySelector('.pic2');
            x2 = x2 - 2;
            if (x2 <= xleft-150){         
                x2 = xright-150;    
            }
            pic2.style.transform = "translate3d(" + x2 + "px, 0px, 0px)";
            break;
        case 2:
            let pic3 = document.querySelector('.pic3');
            x3 = x3 - 2;
            if (x3 <= xleft-300){
                x3 = xright-300;   
            }
            pic3.style.transform = "translate3d(" + x3 + "px, 0px, 0px)";
            break;
        case 3:
            let pic4 = document.querySelector('.pic4');
            x4 = x4 - 2;
            if (x4 <= xleft-450){   
                x4 = xright-450; 
            }
            pic4.style.transform = "translate3d(" + x4 + "px, 0px, 0px)";
            break;


    }
    
}

window.addEventListener("load", function(){
    if(window.innerWidth <= 576.98){
        let pictures = document.querySelectorAll(".share_pic > li");
        for(let k = 0; k < pictures.length; k++){
            share_slider(k);
            interval_id[k] = setInterval(share_slider, 50, k);
        }
        bindtouchEvent();
    }

    
});
function bindtouchEvent(){
    let pictures = document.querySelectorAll(".share_pic > li");
    for(let j = 0 ; j < pictures.length ; j++){

        pictures[j].addEventListener("touchstart", function(){
            if(interval_id.length != 0 ){
                for(let i = 0 ; i < interval_id.length; i++ ){
                    clearInterval(interval_id[i]);
                }      
            } 
        });
    
        pictures[j].addEventListener("touchend", function(){
            interval_id =[];
            for(let k = 0; k < pictures.length; k++){
                interval_id[k] = setInterval(share_slider, 50, k);
            }
        });
    }  
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
            let try_not_buy = JSON.parse(sessionStorage.getItem('session_try_not_buy'));
            //購物數量
            let count = document.getElementById("inputnum").value; 
            //商品物件
            sessionStorage.getItem('session_try_not_buy')
            let p_pic =try_not_buy.pic;
            let p_name =try_not_buy.name;
            let p_price =try_not_buy.price;
            let p_discount =try_not_buy.discount == "" ? null : try_not_buy.discount;
            let good = {'name': p_name, 'price' : p_price, 'discount' : p_discount, 'count' : count, 'pic': p_pic};  
            //購物車若是空的代表第一次購買
            if(shoping_goods == null) {
                shoping_goods = [];
            }
            shoping_goods.push(good);
            sessionStorage.setItem('session_shop_goods', JSON.stringify(shoping_goods));
           
        });
    }
    

}

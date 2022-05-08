var interval_id;
var index = 1;
// slider秒數
var timeout = 3;
// slider張數
var pic_number = 3 ; 
var gototop_height = 2600;
var aside_height = 400;
var slider_pic = window.innerWidth <= 1000 ? 'slidersm' : 'slider';

window.addEventListener('resize', start);

function start(){        
    slider_pic = window.innerWidth <= 1000 ? 'slidersm' : 'slider';
    if(window.innerWidth <= 767.98){
        gototop_height = 3200;
        aside_height = 75;
    }else{
        gototop_height = 2600;
        aside_height = 400;
    }
    // if(window.innerWidth <= 1000){
    //     slider_pic = 'slidersm';
    // }else{
    //     slider_pic = 'slider';
    // }
}

// 點擊事件後要重啟
function restart_carousel(){
    clearInterval(interval_id);
    interval_id = setInterval(change_slider, timeout * 1000);
}

// 點擊上一張下一張
function btn_prev_next(){
    var prev = document.getElementsByClassName('prev')[0];
    var next = document.getElementsByClassName('next')[0];

    prev.addEventListener('click', function(e){
        var dot_now = document.getElementsByClassName('dot_now')[0];   
        var dot_now_index = parseInt(dot_now.dataset.index); 
            index = dot_now_index -1 < 1 ? pic_number : dot_now_index -1;
            restart_carousel();  
            change_slider();        
    });

    next.addEventListener('click', function(e){ 
        var dot_now = document.getElementsByClassName('dot_now')[0];   
        var dot_now_index = parseInt(dot_now.dataset.index);  
            index = dot_now_index +1 > pic_number ? 1 : dot_now_index +1;
            restart_carousel();  
            change_slider();          
    });
}



// 圖換點點也換
function change_slider(){
    
    var pic = document.getElementsByClassName('kv')[0];
    var dot = document.getElementsByClassName('dot');
    
    for(let i = 0; i < dot.length; i++){
        dot[i].classList.remove('dot_now');
    }
    // pic.style.backgroundImage='url(./img/slider' + index + '.jpg)';
    // pic.style.backgroundImage='url(./img/slidersm' + index + '.png)';
    pic.style.backgroundImage='url(../img/' + slider_pic + index + '.png)';
    dot[index -1].classList.add('dot_now'); 
    index % pic_number == 0 ? index = 1 : index ++ ;           
}

// 點擊點點換圖
function dot_click(){
    var dot = document.getElementsByClassName('dot');
    for(let i = 0; i < dot.length; i++){
        dot[i].addEventListener('click', function(e){      
            //換點點
            // document.getElementsByClassName('dot_now')[0].setAttribute('class', 'dot');
            // // this.setAttribute('class', 'dot_now');
            // this.classList.add('dot_now');
            //換圖片，換連結
            index = parseInt(this.dataset.index); 
            restart_carousel(); 
            change_slider();   
        });
    }

}

// Home cat_link
function cat_link(){
    var search_obj = new URLSearchParams(location.search);
    // console.log(search_obj.get("target"));
    var all = document.getElementsByClassName("pdt_card");
    var catproduct2 = document.getElementsByClassName("pdt_cat2");
    var catproduct3 = document.getElementsByClassName("pdt_cat3");
    var catproduct4 = document.getElementsByClassName("pdt_cat4"); 
    var cat_btn_now = document.getElementsByClassName('cat_btn_now');
    // 取得網址參數
    switch(search_obj.get("target")){
        case '3':
            for(let i = 0; i < all.length; i++){
                all[i].style.display = "none";
            }
            for(let j = 0; j < catproduct3.length; j++){
                catproduct3[j].style.display = "block";
            }
            cat_btn_now[0].classList.remove("cat_btn_now");
            document.getElementById("cat3").closest("li").classList.add("cat_btn_now");
            break;
        case '4':
            for(let i = 0; i < all.length; i++){
                all[i].style.display = "none";
            }
            for(let j = 0; j < catproduct4.length; j++){
                catproduct4[j].style.display = "block";
            }
            cat_btn_now[0].classList.remove("cat_btn_now");
            document.getElementById("cat4").closest("li").classList.add("cat_btn_now");
            break;
        case '2':
            for(let i = 0; i < all.length; i++){
                all[i].style.display = "none";
            }
            for(let j = 0; j < catproduct2.length; j++){
                catproduct2[j].style.display = "block";
            }
            cat_btn_now[0].classList.remove("cat_btn_now");
            document.getElementById("cat2").closest("li").classList.add("cat_btn_now");
            break;        
        }
}

// 商品頁分類篩選
function btn_cat(btnId, productClass, catClass){
    var btnCat = document.getElementById(btnId);
    var allProduct = document.getElementsByClassName(productClass);
    var catProduct = document.getElementsByClassName(catClass);
    
    btnCat.addEventListener("click", function(e){
        e.preventDefault();
        document.getElementsByClassName('cat_btn_now')[0].classList.remove("cat_btn_now");
        btnCat.closest("li").classList.add("cat_btn_now");
        for(var i = 0; i < allProduct.length; i++){
            allProduct[i].style.display = "none";
        }
        for(var j = 0; j < catProduct.length; j++){
            catProduct[j].style.display = "block";
        }
    });
}

// scroll event
window.addEventListener("scroll", function(){
    console.log("scrollY: " + window.scrollY);
    // aside icon
    var aside_icons = document.getElementsByClassName('as_icon');
    if(window.scrollY >= aside_height){
        for(let i = 0; i < aside_icons.length; i++){
            aside_icons[i].classList.add('as_icon_act');
        }
    }else{
        for(let i = 0; i < aside_icons.length; i++){
            aside_icons[i].classList.remove('as_icon_act');
        }
    }

    // news
/*     var news_block = document.getElementsByClassName('news_box');
    if(window.scrollY >= 325){
        news_block[0].style.opacity = 1;
    } */

    // gototop
    var gototop = document.getElementsByClassName('gototop');
    if(window.scrollY >= gototop_height){
        for(let i = 0; i < gototop.length; i++){
            gototop[i].style.visibility = "visible";
        }
    }else{
        for(let i = 0; i < gototop.length; i++){
            gototop[i].style.visibility = "hidden";
        }
    }

});

window.addEventListener("load", function(){
    dot_click();
    cat_link();
    btn_prev_next();
    change_slider();
    interval_id = setInterval(change_slider, timeout * 1000);
    
});
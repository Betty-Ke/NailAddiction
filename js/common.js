
document.addEventListener('DOMContentLoaded', function(){
    session_shop();
    console.log(document.body.scrollHeight);
    var toggle_btn = document.getElementsByClassName("toggle-in")[0];
    var nav_el = document.getElementsByClassName("nav")[0];
    var nav_rel = document.getElementsByClassName("nav_right")[0];
    var toggle_header = document.getElementsByTagName("header")[0];
    toggle_btn.addEventListener('click', function(){


        toggle_btn.classList.toggle("-on");

        toggle_header.classList.toggle("tg-on");
        console.log(window.scrollHeight);
        if(nav_el.style.maxHeight == ""){
            nav_el.style.maxHeight = "45vh"; // 設定 CSS：max-height
            nav_rel.style.maxHeight = "15vh";
            
        }else{
            nav_el.style.maxHeight = ""; // 移除 CSS： max-height
            nav_rel.style.maxHeight = "";
        }


    });
})
function session_shop(){
    //進入網頁判斷session購物車是否有東西
  let shopCarCon = document.getElementsByClassName('shopCarCon')[0];
  let session_shopCarCon =  parseInt(sessionStorage.getItem('session_shopCarCon'));
  if(!isNaN(session_shopCarCon) && session_shopCarCon != 0){  
    //若有東西則增加class(購物車圈圈) 
    shopCarCon.classList.add('shopCarCon_show');
    shopCarCon.dataset.count =  session_shopCarCon;
  }
}

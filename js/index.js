
dot_click();

// 點點換圖
function dot_click(){
    var dot = document.getElementsByClassName('dot');
    for(let i = 0; i < dot.length; i++){
        dot[i].addEventListener('click', function(e){
            //換點點
            document.getElementsByClassName('dot_now')[0].setAttribute('class', 'dot');
            this.setAttribute('class', 'dot_now');
            //換圖片，換連結
            var index = this.dataset.index;
            var pic = document.getElementsByClassName('kv1')[0];
            if(index == "1"){
                pic.style.backgroundImage='url(./img/slider1.jpg)';
            }else if(index == "2"){
                pic.style.backgroundImage='url(./img/slider2.jpg)';
            }else{
                pic.style.backgroundImage='url(./img/slider3.jpg)';
            }
        });
    }

}


// Home cat_link
document.addEventListener("DOMContentLoaded", function(){
    var search_obj = new URLSearchParams(location.search);
    // console.log(search_obj.get("target"));
    var all = document.getElementsByClassName("pdt_card");
    var catproduct2 = document.getElementsByClassName("pdt_cat2");
    var catproduct3 = document.getElementsByClassName("pdt_cat3");
    var catproduct4 = document.getElementsByClassName("pdt_cat4"); 
    var cat_btn_now = document.getElementsByClassName('cat_btn_now');
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
});

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


// 購買數量
cart_count();
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
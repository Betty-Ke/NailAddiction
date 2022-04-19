
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
    



// 購物車數量
var numplus = document.getElementById("numplus");
var numcut = document.getElementById("numcut");
var inputnum = document.getElementById("inputnum");

numplus.addEventListener("click", function(){
    inputnum.value = parseInt(inputnum.value) + 1;
});
numcut.addEventListener("click", function(){
    if(inputnum.value <= 0){
        inputnum.value = 0;
    }else{
        inputnum.value = parseInt(inputnum.value) - 1;
    }
});


// 商品分類篩選
function btn_cat(btnId, productClass, catClass){
	var btnCat = document.getElementById(btnId);
	var allProduct = document.getElementsByClassName(productClass);
	var catProduct = document.getElementsByClassName(catClass);
	
	btnCat.addEventListener("click", function(){
		// btnCat.style.background="#eea2a4";
		for(var i = 0; i < allProduct.length; i++){
			allProduct[i].style.display = "none";
		}
		for(var j = 0; j < catProduct.length; j++){
			catProduct[j].style.display = "block";

		}
	});
}
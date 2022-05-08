window.addEventListener("load", function(){
    init_page();
    let deliver_btn = document.getElementById("deliver");
    deliver_btn.addEventListener('change', deliver_way);
    deliver_way();
});

function init_page(){
    //更改購物車數量
    let session_shopCarCon =  parseInt(sessionStorage.getItem('session_shopCarCon'));
    document.getElementById('shop_car_count').innerHTML= "購物車("+ session_shopCarCon+"件)";

    let shoping_goods = JSON.parse(sessionStorage.getItem('session_shop_goods'));
    for(let i = 0 ; i < shoping_goods.length ; i ++){
        //商品名
        let name = shoping_goods[i].name;
        //圖片名
        let pic = shoping_goods[i].pic;
        //購買數量
        let count = shoping_goods[i].count;
        //折扣
        let discount = shoping_goods[i].discount == null ? "無" : shoping_goods[i].discount ;
        //價格
        let price = shoping_goods[i].price;
        let iteminfo = document.getElementsByClassName('iteminfo')[0];
        //小計數量乘折扣，若無折扣則乘價格
        let subtotal = parseInt(count)* parseInt(discount == "無" ? price : discount);
        let discountstring = discount != "無" ? discount : "無"; 
        let p_html =`
        <ul data-index = ${i}>
            <li><img src="./img/${pic}"></li>
            <li>${name}</li>
            <li>${price}</li>
            <li>${discountstring}</li>
            <li>${count}</li>
            <li class="subtotal" data-subtotal='${subtotal}' >${subtotal}</li>
            <li class="btn_delete">x</li>
        </ul>`;
        iteminfo.insertAdjacentHTML('afterbegin',p_html);
    } 
    summary();
    delete_click();
}

function deliver_way(){
    
    let fare = document.getElementsByClassName("fare")[0];
    let way = this.value;
    console.log(way);
    switch(way){
        case 'f':
            fare.innerHTML = 0;
            break;
        case 's':
            fare.innerHTML = 60;
            break;
        case 'h':
            fare.innerHTML = 80;
            break;
    }
    summary();
}

function summary(){
    //付款區
    //小計
    let subtotal_class = document.getElementsByClassName('subtotal');
    let subtotal = 0;
    for(let i = 0 ; i < subtotal_class.length ; i ++){
        subtotal += parseInt(subtotal_class[i].dataset.subtotal);
    }
    //summary小計
    document.getElementsByClassName('summary_subtotal')[0].innerHTML = subtotal;

    let summary =  document.getElementsByClassName('summary');
    let total = 0;
    for(let i = 0 ; i < summary.length ; i ++){
        total += parseInt(summary[i].innerHTML);
    }
    document.getElementById('total').innerHTML = total;
    
}



function delete_click(){
    var btn_delete = document.getElementsByClassName('btn_delete');
    for(let i = 0 ; i < btn_delete.length ; i ++){
            btn_delete[i].addEventListener('click', function(){
                this.closest('ul').remove();
                //移除也要移除session裡的商品
                let shoping_goods = JSON.parse(sessionStorage.getItem('session_shop_goods'));
                shoping_goods.splice(this.dataset.index, 1);
                sessionStorage.setItem('session_shop_goods', JSON.stringify(shoping_goods));
                //移除購物車數量
                let session_shopCarCon = parseInt(sessionStorage.getItem('session_shopCarCon'));
                sessionStorage.setItem('session_shopCarCon', --session_shopCarCon);
                session_shop();
                //移除明細購物車數量
                if(isNaN){
                    document.getElementById('shop_car_count').innerHTML= "購物車(0件)";
                }else{
                    document.getElementById('shop_car_count').innerHTML= "購物車("+ session_shopCarCon+"件)";
                }

                if(session_shopCarCon == 0 ){
                    let shopCarCon = document.getElementsByClassName('shopCarCon')[0];
                    //購物車 為0時移除紅圈圈
                    shopCarCon.classList.remove('shopCarCon_show');
                }
                //刪除也需重新計算
                summary();
            });
    };

}


$(function(){   
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        var adscrtop=$(".div-w").offset().top;
        if(window.innerWidth>767){ //RWD 767以下寬不動作
         if(scrollVal>adscrtop){
            $(".div-img").css({"position": "fixed","top": "0px"});          
         }else{
            $(".div-img").css({"position": "static"});
         }
        }else{
          $(".div-img").css({"position": "static"});
        }
    });
 });


 //scroll 事件適用於所有可滾動的元素和 window 對象（瀏覽器窗口）。
$(window).scroll(function() {
        var scroHei = $(window).scrollTop();//滾動的高度
        if (scroHei > 400) {
            $(‘.J_goTop‘).fadeIn();
        } else {
            $(‘.J_goTop‘).fadeOut();
        }    })

/*點擊返回頂部*/

$(‘.J_goTop‘).click(function() {
    $(‘body,html‘).animate({
        scrollTop: 0
    }, 600);
})


 $(document).ready(function () {
    // 回到最上方的按鈕
      $('.toTop').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
              scrollTop: 0,
          }, 700)
      });
      $('nav').on('click','a', function (e) {// 監聽 nav 下的每個 a
          e.preventDefault();
          const anchor = $(this).attr('href');//取得個別點擊時的href，就是個別id的區塊 e.g #zone1
          const linkScroll = $(anchor).offset().top;// 每個區塊的最上方距離 document 最上方有多遠
          $('html,body').stop().animate({ // 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
              scrollTop: linkScroll -43 // 43 是此範例 header 的高度，因為 header 設定 fixed 所以扣掉，
                                        // 但 zone1 要設定 padding-top 空間才不會被蓋掉
          },700)
      });
  });
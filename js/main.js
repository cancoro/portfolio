$(function(){
    /* フェードイン */
    $(window).scroll(function(){
        //fadeinクラスに対して順に処理を行う指示
        $(".fadein").each(function(){
            //スクロールした距離
            let scroll = $(window).scrollTop();
            //fadeinクラスまでの距離
            let target = $(this).offset().top;
            //画面の高さ
            let windowHeight = $(window).height();
            //fadeinクラスの要素が画面下に来てから80px通過したら要素を表示
            if(scroll > target - windowHeight + 80){
                $(this).addClass("show");
            }
        });
    });

});


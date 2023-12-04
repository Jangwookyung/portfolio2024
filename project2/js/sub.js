$(function(){

    // fa-bars 클릭했을때, popUpBox가 나와라
    $('.fa-bars').click(function(){
        $('.popUpBox').stop().animate({'left':0},500)
    })

    // x 아이콘을 클릭했을때, popUpBox가 들어가라
    $('.fa-times-circle-o').click(function(){
        $('.popUpBox').stop().animate({'left':'-100%'},200)
    })




    // 쿠폰정책 아이콘을 클릭했을때, 팝업창이 떠라.
    $('.list span i').click(function(){
        $('.list .popUp').css({'display':'block'})
    })
    // 팝업창 닫기를 클릭했을때, 팝업창이 사라져라.
    $('.list .popUp i').click(function(){
        $('.list .popUp').css({'display':'none'})
    })




    // 쿠폰받기를 클릭했을때, 팝업창이 뜨고 다시누르면 사라져라.
    var couponBtn = 0;
    $('.list .btn').click(function(){
        couponBtn++
        if(couponBtn==2)couponBtn==0
        if(couponBtn==1){
            $('.list .couponDn').css({'display':'block'})
        }
        else{
            $('.list .couponDn').css({'display':'none'})
        }
    })




    // 추가구성 선택지 팝업설정
    // 추가구성 선택지1 
    var aa=0;
    $('.formBox .op1').click(function(){
        aa++
        if(aa==2)aa=0
        if(aa==1){
            $('.formBox .formpop1').css({'display':'block'})
            $('.formlist .formBox .op1').css({'border':'1px solid #666'})
        }else{
            $('.formBox .formpop1').css({'display':'none'})
            $('.formlist .formBox .op1').css({'border':'1px solid #fff'})
        }
    })

    // 추가구성 선택지2
    var bb=0;
    $('.formBox .op2').click(function(){
        bb++
        if(bb==2)bb=0
        if(bb==1){
            $('.formBox .formpop2').css({'display':'block'})
            $('.formlist .formBox .op2').css({'border':'1px solid #666'})
        }else{
            $('.formBox .formpop2').css({'display':'none'})
            $('.formlist .formBox .op2').css({'border':'1px solid #fff'})
        }
    })

    // 추가구성 선택지3 
    var cc=0;
    $('.formBox .op3').click(function(){
        cc++
        if(cc==2)cc=0
        if(cc==1){
            $('.formBox .formpop3').css({'display':'block'})
            $('.formlist .formBox .op3').css({'border':'1px solid #666'})
        }else{
            $('.formBox .formpop3').css({'display':'none'})
            $('.formlist .formBox .op3').css({'border':'1px solid #fff'})
        }
    })




    // 품절된 상품
    $('.formBox .formpop1 li').click(function(){
        alert('해당 상품은 품절되었습니다.')
    })
    $('.formBox .formpop2 li').click(function(){
        alert('해당 상품은 품절되었습니다.')
    })
    $('.formBox .formpop3 li').click(function(){
        alert('해당 상품은 품절되었습니다.')
    })





    // 수량 변경
    const cNum = $('.count .btn input');
        
        // 마이너스 버튼 클릭 시
        $('.count .btn .minus').click(function () {
            updateCount(-1);
        });

        // 플러스 버튼 클릭 시
        $('.count .btn .plus').click(function () {
            updateCount(1);
        });

        // 수량 업데이트 함수
        function updateCount(value) {
            let cnt = parseInt(cNum.val());
            cnt += value;

        // 음수로 떨어지지 않도록 체크
        if (cnt < 1) {
            cnt = 1;
        
        }

        // 최대 수량 체크 (3개로 설정)
        const Cmax = 3;
        if (cnt > Cmax) {
            cnt = Cmax;
            alert('1인당 최대 3개까지 구매가능합니다.')
        }


        // 수량에 따라 합계 달라지게 설정
        var price = $('.allpriceBox .allprice');
        var count = 2059000;

        const allprice = cnt*count;

        price.text(allprice.toLocaleString()+'원')
        
            cNum.val(cnt);
            
        }

        






    // 장바구니 추가 알림
    $('.buyBox .cartbtn').click(function(){
        if(confirm('장바구니에 추가되었습니다.\n장바구니로 이동하시겠습니까?')){
            alert("장바구니로 이동합니다.");
            $('.box1-inner li .new').css({'display':'block'})
        }
    })






    // 구매하기 버튼 클릭시
    $('.buyBox .buybtn').click(function(){
        var buy=confirm('결제 페이지로 이동합니다.')
        alert(buy)
    })






    // .trailer li img를 클릭할때마다 mainImg가 바뀌어라.
    $('.trailer li').click(function(){
        var i=$(this).index()
        console.log(i)
        $('.box2 .mainImg li').fadeOut()
        $('.box2 .mainImg li').eq(i).fadeIn()

    })
    
})
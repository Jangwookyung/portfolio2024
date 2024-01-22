// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요
$(function(){

    // 마우스휠을 움직였을때 window 화면 이벤트가 발생
$(window).on('mousewheel', function(event, delta){
    event.preventDefault();
    // 마우스 휠을 올렸을때
    if(delta > 0){
        var prev = $(this).scrollTop() - $(window).height();
        $('html, body').stop().animate({'scrollTop': prev}, 1500, 'easeOutExpo');
    }
    // 마우스 휠을 내렸을때
    else if(delta < 0){
        var next = $(this).scrollTop() + $(window).height();
        $('html, body').stop().animate({'scrollTop': next}, 1500, 'easeOutExpo');
    }
});

// 섹션화면
$('section').on('mousewheel', function(event, delta){
    event.preventDefault();
    // 마우스 휠을 올렸을때
    if(delta > 0){
        var prev = $(this).prev().offset().top;
        $('html, body').stop().animate({'scrollTop': prev}, 1500, 'easeOutExpo');
    }
    // 마우스 휠을 내렸을때
    else if(delta < 0){
        var next = $(this).next().offset().top;
        $('html, body').stop().animate({'scrollTop': next}, 1500, 'easeOutExpo');
    }
});

    // main nav ul li를 클릭했을때 on값 더하기
    $('main nav ul li').click(function(){
        var hit =$(window).height()
        var i = $(this).index();
        console.log(i)

        $('main nav ul li').removeClass('on')
        $(this).addClass('on')

        $('html, body').stop().animate({'scrollTop':hit*i},1500,'easeOutExpo')
    })


    // main화면으로 올때마다 텍스트 애니메이션
    // $(window).scroll(function(){
    //     var res=$(window).scrollTop();
    //     var prof=$('.profile').offset().top
    //     console.log(res)
    
    //     if(res>=prof){
    //         $('main .txtBox .d').addClass('on')
    //     }
    //     else{
    //         $('main .txtBox .d').removeClass('on')
    //     }

    //     if(res>=prof){
    //         $('main .txtBox .k').addClass('on')
    //     }
    //     else{
    //         $('main .txtBox .k').removeClass('on')
    //     }

    //     if(res>=prof){
    //         $('main .txtBox .s').addClass('on')
    //     }
    //     else{
    //         $('main .txtBox .s').removeClass('on')
    //     }
    // })


    // 이름 클릭하면 팝업 뜨기
    $('.profile .txtBox .dp').mouseenter(function(){
        $('.profile .popup').css({'display':'block'})
    })
    // 팝업 닫기
    $('.profile .popup .close').click(function(){
        $('.profile .popup').css({'display':'none'})
    })


    // profile 이미지 호버시 사진 바뀌기
    $('.profile .star li').mouseenter(function(){
        var imgh = $(this).index();
        console.log(imgh)
        
        $('.profile .mainImg li').removeClass('on')
        $('.profile .mainImg li').eq(imgh).addClass('on')
    })



    // 갤러리 텍스트 탭 누르면 사진 바뀌기
    $('.gallery .txtBox p').click(function(){

        var photo=$(this).index();

        $('.gallery article>div').removeClass('on')
        $('.gallery article>div').eq(photo).addClass('on')
    })

    // 갤러리 탭 누를때 배경색상 바뀌기
    $('.gallery .txtBox .album01').click(function(){
        $('.gallery').css("background-color", "#89726E");
        // 글씨 설정
        $('.gallery .txtBox .album02').removeClass('on');
        $('.gallery .txtBox .album01').addClass('on');
    })
    $('.gallery .txtBox .album02').click(function(){
        $('.gallery').css("background-color", "#A8AE9C");
        // 글씨 설정
        $('.gallery .txtBox .album01').removeClass('on');
        $('.gallery .txtBox .album02').addClass('on');
    })




    // 무드샘플러 각 사진 누르면 팝업 뜨고 닫히기
    var mood = 0;
    var mood1 = 0;
    $('.music .mood li').click(function(){
        var mood =$(this).index();
        
        if(mood1==2)mood1=0
        
        if(mood1==0){
            $('.music .mood>div').css({'display':'none'})
            $('.music .mood>div').eq(mood).css({'display':'block'})
            mood1++;
        }
        else if (mood1==1){
            $('.music .mood>div').css({'display':'none'})
            // $('.music .mood>div').eq(mood).css({'display':'block'})
            mood1--;
        }

        
    })


    // musictap 버튼을 누르면 열리고 닫기
    var musicbar=0;
    $('.musictab .btnbar').click(function(){
        musicbar++
        if(musicbar==2)musicbar=0
        if(musicbar==1){
            $('.musictab').css({'bottom':'0%'})
        }
        else{
            $('.musictab').css({'bottom':'-90%'})
            // 화면 해상도가 1500px이상인 경우에 위치값
            var swd = $(window).width();
            
            if (swd >= 1500) {
                $('.musictab').css({'bottom':'-92%'});
            }
            // 해상도 1920px이상
            if (swd >= 1920) {
                $('.musictab').css({'bottom':'-74%'});
            }
        }
    })

    // musictap 닫기 버튼 누르면 닫기
    $('.inter .bottom .fa-times').click(function(){
        $('.musictab').css({'bottom':'-90%'})
    })
    // 화면 해상도가 1500px 이상인 경우에만 이벤트를 바인딩
    var swd = $(window).width();

    if (swd >= 1500) {
        $('.inter .bottom .fa-times').click(function(){
            $('.musictab').css({'bottom':'-92%'});
        });
    }


    // 좋아요 클릭
    var like=0;
    $('.inter .icon .fa-heart').click(function(){
        like++
        if(like==2)like=0
        if(like==1){
            $('.inter .icon .fa-heart').css({'color':'#D1214B', 'scale':'1.2'})
        }
        else{
            $('.inter .icon .fa-heart').css({'color':'#fff', 'scale': '1'})
        }
    })


    // musictab 볼륨 인풋 설정
    document.querySelector('.inter .vol input').addEventListener('input',function(event){
        var gradient_value = 100 / event.target.attributes.max.value;
      event.target.style.background = 'linear-gradient(to right, #57423F 0%, #57423F '+gradient_value * event.target.value +'%, #BFA6A2 ' +gradient_value *  event.target.value + '%, #BFA6A2 100%)';
    });



    // 푸터 스크롤끝에 닿으면 3초간 나타나기
    window.addEventListener('scroll', function(){
        console.log(window.scrollY)
        // $('.music .ytb .title').text(this.window.scrollY)
        if(window.scrollY >= 2859){
            $('footer p').stop().animate({'opacity':'1'}).delay(2500).animate({'opacity':'0'})
        }
        else {
            $('footer p').stop().animate({'opacity':'0'})
        }
    
    })



})
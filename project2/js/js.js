// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function(){
    // fa-bars 클릭했을때, popUpBox가 나와라
    $('.fa-bars').click(function(){
        $('.popUpBox').stop().animate({'left':0},500)
    })

    // x 아이콘을 클릭했을때, popUpBox가 들어가라
    $('.fa-times-circle-o').click(function(){
        $('.popUpBox').stop().animate({'left':'-100%'},200)
    })



    // hero 카메라 슬라이드
    var cm=0;

    $('.box3 button').click(function(){
        cm++;
        console.log(cm)

        // var cmwd=$('.inner li').width()
        // console.log(cmwd)

        $('.inner li').eq(cm-1).clone().appendTo('.inner')
        $('.inner').css({'left':-634.5*cm})
        $('.inner li').removeClass('on');
        $('.inner li').eq(cm+1).addClass('on')

        })

    // 자동으로 클릭한 효과를 내라
    var slide=setInterval(function(){
        $('.box3 button').trigger('click')
    },5000)

        


    // title에 마우스가 들어갈때, 이미지가 바뀌어라.
    $('.box4-2 li').mouseenter(function(){
        var i = $(this).index();
        console.log(i)

        $('.box4-1 li').fadeOut()
        $('.box4-1 li').eq(i).fadeIn()

    })


    // 스크롤했을때, 왼쪽 텍스트는 위에서 아래로
    // 오른쪽 텍스트는 아래에서 위로와라.
    window.addEventListener('scroll', function(){
        console.log(window.scrollY)

        if(window.scrollY > 4000){
            $('.box6-1').stop().animate({'top':'0%'},1000)
            $('.box6-2').stop().animate({'top':'0%'},1000)
        }
        else {
            $('.box6-1').stop().animate({'top':'-100%'},1000)
            $('.box6-2').stop().animate({'top':'100%'},1000)
        }


    })





    // right를 클릭했을때, li의 크기만큼 왼쪽으로 이동해라.
    var bt = 0;
    var clickcount = 0;
    $('.right').click(function(){
        var liwd = $('.box8-2 .imgBox li').width()
        if(bt<4)bt++;
        console.log(bt)

        $('.box8-2 .imgBox ul').stop().animate({'left':-liwd*bt},1200)
        
        // 슬라이드바 오른쪽으로 이동
        if(clickcount<4)clickcount++;
        var lineSlide = clickcount*5;
        $('.box8-2 .btnBox .line2').css({'left':lineSlide+'%'})
    })

    // left를 클릭했을때, li의 크기만큼 오른쪽으로 이동해라.
    $('.left').click(function(){
        var liwd = $('.box8-2 .imgBox li').width()
        if(bt>0)bt--;
        console.log(bt)

        $('.box8-2 .imgBox ul').stop().animate({'left':-liwd*bt},1200)
        
        // 슬라이드바 마이너스로 이동
        if(clickcount>0)clickcount--;
        var lineSlide = -clickcount*5;
        $('.box8-2 .btnBox .line2').css({'left':-lineSlide+'%'})
    })

})
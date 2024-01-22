// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function(){

    // 메인이미지 슬라이드
    var img=0;
    setInterval(function(){
        img++;
        if(img==3)img=0;

        $('.slide li').eq(img-1).css({'left': 0}).stop().animate({'left':'-100%'})
        $('.slide li').eq(img).css({'left': '100%'}).stop().animate({'left':'0'})
    },5000)



    // 공지사항, 보도자료 내용바꾸기
    $('.box6-1 .titleBox>ul li').click(function(){
        var i=$(this).index()
        console.log(i)

        $('.box6-1 .listBox>ul').css({'display':'none'})
        $('.box6-1 .listBox>ul').eq(i).css({'display':'block'})

        $('.box6-1 .titleBox>ul li').removeClass('on')
        $(this).addClass('on')
    })

    // 예약정보 선택
    $('.box3-2 .titleBox>ul li').click(function(){
        var r=$(this).index()
        
        $('.box3-3 ul').css({'display':'none'})
        $('.box3-3 ul').eq(r).css({'display':'block'})

        $('.box3-2 .titleBox li').removeClass('on')
        $('.box3-2 .titleBox li').eq(r).addClass('on')
    })


    // 예약 완료 팝업 및 예약 내용 초기화
    $('.more').click(function(){

        alert('예약이 완료되었습니다.')
    })


    // 선택날짜 보이기
    $('.day td').click(function(){
        $('.day td').removeClass('on')
        $(this).addClass('on')

        $('.cal h2 span').css({'display':'inline-block'})
        
        var d=$(this).text()
        $('.cal h2 em').text('11월 '+d+'일')
    })


    // 유물소식 순서대로 보이기
    // 초기 설정
    $('.box7-inner ul').first().addClass('on');

    // ".bottom" 요소 클릭 처리
    $('.box7 .bottom').on('click', function () {
        var currentVisible = $('.box7-inner ul.on');
        var nextVisible = currentVisible.next('ul');

        if (nextVisible.length === 0) {
            // 다음 ul이 없으면 첫 번째로 돌아가기
            nextVisible = $('.box7-inner ul').first();
        }

        currentVisible.animate({
            opacity: 0,
        }, 500, function(){
            
        // 현재 보이는 ul 감추고 다음 것 보이도록 설정
        currentVisible.removeClass('on');
        nextVisible.addClass('on').animate({
                opacity: 1,
            }, 500);
        })
    });

     // ".top" 요소 클릭 처리
    $('.top').on('click', function () {
        var currentVisible = $('.box7-inner ul.on');
        var prevVisible = currentVisible.prev('ul');

        if (prevVisible.length === 0) {
            // 이전 ul이 없으면 마지막으로 돌아가기
            prevVisible = $('.box7-inner ul').last();
        }

        currentVisible.animate({
            opacity: 0,
        }, 500, function(){
            
        // 현재 보이는 ul 감추고 이전 것 보이도록 설정
        currentVisible.removeClass('on');
        prevVisible.addClass('on').animate({
                opacity: 1,
            }, 500);
        })
    });
    
    // 약도 내려받기
    $('.box10 .txtBox .dn').click(function(){
        alert('다운로드가 완료되었습니다.')
    })

})



// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function(){
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
    var u=0;
    $(function(){

    })
    
    // 약도 내려받기
    $('.box10 .txtBox .dn').click(function(){
        alert('다운로드가 완료되었습니다.')
    })

})


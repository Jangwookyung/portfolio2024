// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function(){




    // 마우스 커서값
    const circle = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        circle.style.left = mouseX + 'px';
        circle.style.top = mouseY + 'px';
    })




    // 메뉴 클릭시 섹션 전환하기
    $('header nav li').click(function(){
        let m=$(this).index()
        console.log(m);

        $('section').removeClass('on')
        $('section').eq(m).addClass('on')
    })




    // 메뉴 클릭시 헤더 위치 이동
    // main 버튼 클릭했을때
    $('header nav li').eq(0).click(function(){
        // 헤더 위치
        $('header nav').stop().animate({'top':'67%'},900)
        // 타이틀 위치
        $('.main-inner .titBox').stop().animate({'top':'22%'},900)
        // 메인 배경 공
        $('.main-inner .back').removeClass('hidden')
    });




    // 프로필 버튼 클릭했을때
    $('header nav li').eq(1).click(function(){
        // 헤더 위치
        $('header nav').stop().animate({'top':'3%'},900)
        // 타이틀 위치
        $('.main-inner .titBox').stop().animate({'top':'-100%'},900)
        // 메인 배경 공
        $('.main-inner .back').addClass('hidden')

        // 각각의 차트에 대한 애니메이션 비동기적으로 시작
        animateChart('.profile .skill-chart1', 'dash1');
        animateChart('.profile .skill-chart2', 'dash2');
        animateChart('.profile .skill-chart3', 'dash3');
        animateChart('.profile .skill-chart4', 'dash4');
        animateChart('.profile .skill-chart5', 'dash5');

        // 프로필 이미지가 5초에 한번씩 뒤집히기
        setInterval(function() {
            $('.prof-left .imgBox li').toggleClass('on');
        }, 4000);
    });

    // 원형 차트에 대한 애니메이션 함수
    function animateChart(chartSelector, animationName) {
        var chart = $(chartSelector + ' .circle');
        chart.css('animation', 'none');
        void chart.get(0).offsetWidth; // Reflow 강제

        // 비동기적으로 애니메이션 시작
        setTimeout(function() {
            chart.css('animation', null);
            chart.css('animation', animationName + ' 3s forwards');
        }, 0);
    }




    // 프로젝트 버튼을 클릭했을때
    $('header nav li').eq(2).click(function(){
        // 헤더 위치
        $('header nav').stop().animate({'top':'3%'},900)
        // 타이틀 위치
        $('.main-inner .titBox').stop().animate({'top':'-100%'},900)
        // 메인 배경 공
        $('.main-inner .back').addClass('hidden')
    });




    // 컨셉뷰 버튼을 눌렀을때 팝업창 뜨기
    $('.project-inner>article>ul>.btn').click(function(){
        let p = $(this).closest('article').index();
        console.log(p);

        // 팝업 보이도록 설정
        $('.concept').addClass('on');

        // 모든 concept 클래스에 on 클래스 제거
        $('.popup li').removeClass('on');

        // 클릭된 버튼과 관련된 concept 클래스에 on 클래스 추가
        $('.concept-' + (p - 1)).addClass('on');

        // 팝업 스크롤을 맨 위로 이동
        $('.popup').scrollTop(0);
    });

    $('.concept span').click(function(){
        // 팝업 감추도록 설정
        $('.concept').removeClass('on');
    });





    // 푸터 시작할때 애니메이션
    setTimeout(function() {
        var footer = document.querySelector('footer div');
        footer.classList.add('show');

        setTimeout(function() {
            footer.classList.remove('show');
        }, 2500); // 2.5초 후에 show 클래스 제거
    }, 4000); // 4초 후에 show 클래스 추가


    // 푸터 아이콘 클릭했을때 나타나기
    var i=0;
    $('footer p').click(function(){
        i++
        if(i==2)i=0
        if (i==1) {
            $('footer div').addClass('visible'); // 클래스 추가로 변경
            $('footer div').css({
                'opacity': '1',
                'visibility': 'visible'
            }); // 초기 설정 변경
        }
        else {
            $('footer div').removeClass('visible'); // 클래스 제거로 변경
            $('footer div').css({
                'opacity': '0',
                'visibility': 'hidden'
            }); // 초기 설정 변경
        }
        
    })
})
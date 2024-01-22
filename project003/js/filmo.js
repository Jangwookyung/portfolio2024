$(function(){

    //가로 스크롤

    $(window).on('wheel', function(event) {
        var delta = event.originalEvent.deltaY;
        $('section .timeline').scrollLeft($('section .timeline').scrollLeft() + delta);
      });
})
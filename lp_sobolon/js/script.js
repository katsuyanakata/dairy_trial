$(function () {

    // スムーススクロール
    $('a[href^="#"]').click(function () {
        let speed = 300;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position + 100 }, speed, "swing");
        return false;
    });


    let item = $('.feature-item');
    let modalClose = $('.modal-mask, .modal-close');
    item.click(function(){
        $('.modal').fadeIn();
        const modalNumber = $(this).data('modal');
        if(modalNumber === 1 ){
            $('li:nth-child(1)').fadeIn();
        } else if(modalNumber === 2){
            $('li:nth-child(2)').fadeIn();
        } else if(modalNumber === 3){
            $('li:nth-child(3)').fadeIn();
        }
        return false;
    });
    modalClose.click(function(){
        $('.modal, .modal-item').fadeOut();
        return false;
    });

});



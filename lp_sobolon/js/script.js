// スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        let speed = 300;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position + 100 }, speed, "swing");
        return false;
    });
});


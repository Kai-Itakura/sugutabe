// ナビゲーション
$(function () {
    let hamburger = $('.hamburger');
    let nav = $('.localMenu');
    let main_cover = $('.main-cover');
    let body = $('html,body');
    hamburger.on('click', function () {
        //hamburger,nav,main_cover,body.toggleClass('active');
        nav.toggleClass('active');
        hamburger.toggleClass('active');
        main_cover.toggleClass('active');
        body.toggleClass('active');
        if (hamburger.hasClass('active')) {
            main_cover.on('click', function () {
                hamburger.removeClass('active');
                main_cover.removeClass('active');
                body.removeClass('active');
                nav.removeClass('active');
            });
        }
    });
});
//メニュー内を閉じておく
$(function () {
    $('.localMenu a[href]').click(function () {
        $('html,body').removeClass('active');
        $('.hamburger').removeClass('active');
        $('.main-cover').removeClass('active');
    });
});
//トップへ戻るボタン
$(function () {
    let pagetop = $('#scroll-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
// スライダー
$(function () {
    function sliderSetting() {
        let w = $(window).width();
        if (w < 1040) {
            $('.farmers-container').not('.slick-initialized').slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: 'linear',
            });
        } else {
            $('.farmers-container.slick-initialized').slick('unslick');
        }
    }
    sliderSetting();
    $(window).resize(function () {
        sliderSetting();
    });
});
//スムーススクロール
$('a[href^="#"]').on('click', function () {
    let speed = 500;
    let href = $(this).attr('href');
    let target = $(href == '#' || href == "" ? 'html' : href);
    let position = target.offset().top;

    $('body,html').animate({
        scrollTop: position
    }, speed, 'swing');
    return false;
});
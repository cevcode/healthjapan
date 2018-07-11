function toggleDropDown(button, id, wrapper) {
    $(button).click(function() {
        event.preventDefault();
        var elem = $(id);
        if(elem.hasClass('show')) {
            elem.removeClass('show');
        }
        else
        {
            elem.addClass('show');
        }
    });
    var inside = false;
    $(wrapper).hover(function(){
        inside=true;
    }, function(){
        inside=false;
    });

    $("body").mouseup(function(){
        if(!inside) $(wrapper).removeClass('show');
    });
};

function createSlider(selector, slidesToShow, slidesToScroll, slidesToShowDesktopBig, slidesToShowDesktopSmall, slidesToShowDesktopTablet, slidesToShowDesktopMobile) {
    $(selector).slick({
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        dots: true,
        responsive: [
            {
                breakpoint: 1520,
                settings: {
                    slidesToShow: slidesToShowDesktopBig
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: slidesToShowDesktopSmall
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: slidesToShowDesktopTablet
                }
            },
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: slidesToShowDesktopMobile
                }
            },
        ]
    });
};

$(document).ready(function() {
    $('#search').focus(function () {
        $('.search__result').show();
    });
    $('#search').blur(function () {
        $('.search__result').hide();
    });
    $('ul.sf-menu').superfish();


    $('.select').select2();


    toggleDropDown('#cart-btn', '#cart-result', '.dropdown');
    toggleDropDown('#favorite-btn', '#favorite-result', '.dropdown');
    toggleDropDown('#compare-btn', '#compare-result', '.dropdown');
    toggleDropDown('.catalog__button', '.catalog__menu', '.catalog__menu');
    createSlider('.slider', 1, 1, 1, 1, 1, 1);
    createSlider('.sales__slider', 5, 5, 4, 4, 2, 1);
    createSlider('.new-offers__slider', 5, 5, 4, 4, 2, 1);
    createSlider('.additional-products__slider', 5, 5, 4, 4, 3, 1);
    createSlider('.new-offers__slider', 5, 5, 4, 4, 3, 1);
    createSlider('.recent-products__slider', 5, 5, 4, 4, 3, 1);
});

$('.card__media').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.card__nav'
});
$('.card__nav').slick({
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    asNavFor: '.card__media',
    centerMode: true,
    dots: true,
    focusOnSelect: true
});

var counter = 1;
$('#counter_add').click(function () {
    $('#counter').val(++counter);
});
$('#counter_dec').click(function () {
    $('#counter').val(--counter);
});

var acc = document.getElementsByClassName("accordion__title");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            panel.style.padding = null;
            panel.style.borderBottom = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 20 + "px";
            panel.style.padding = "0 0 20px 0";
            panel.style.borderBottom = "1px solid #e6e6e6";
        }
    });
};

var remain_bv   = 1000000;
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;

    var day = Math.floor( (timestamp/60/60) / 24);
    var hour = Math.floor(timestamp/60/60);
    var mins = Math.floor((timestamp - hour*60*60)/60);
    var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

    $('span.timer__days').text(day + ':');
    $('span.timer__hours').text(left_hour + ':');

    if(String(mins).length > 1)
        $('span.timer__minutes').text(mins);
    else
        $('span.timer__minutes').text("0" + mins);
}

$(document).ready(function(){
    setInterval(function(){
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if(remain_bv <= 0){
            alert('need update remain_bv');
        }
    }, 1000);
});

var menuMobile = $('.catalog__menu--mobile');
var menuButtonMobile = $('.menu__button--mobile');
menuButtonMobile.click(function () {
    if(menuMobile.hasClass('shown')) {
        menuMobile.removeClass('shown');
    } else {
        menuMobile.addClass('shown');
    }
});

var menuMobileInner = $('.menu__mobile');
var menuMobileInnerButton = $('.catalog__button--mobile');

menuMobileInnerButton.click(function () {
    if(menuMobileInner.hasClass('show') && menuMobileInnerButton.hasClass('show')) {
        menuMobileInner.removeClass('show');
        menuMobileInnerButton.removeClass('show');
    } else {
        menuMobileInner.addClass('show');
        menuMobileInnerButton.addClass('show');
    }
});





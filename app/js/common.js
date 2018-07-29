// if(!event){ event = window.event; }

function toggleDropDown(button, id, wrapper) {
    $(button).click(function(e) {
        e.preventDefault();
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
        draggable: true,
        // focusOnSelect: true,
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
                    slidesToShow: slidesToShowDesktopMobile,
                    arrows: false
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


    $('.select').select2({
    });


    toggleDropDown('#cart-btn', '#cart-result', '.dropdown');
    toggleDropDown('#favorite-btn', '#favorite-result', '.dropdown');
    toggleDropDown('#compare-btn', '#compare-result', '.dropdown');
    toggleDropDown('.search__button-categories', '.search__categories', '.search__categories');
    createSlider('.slider', 1, 1, 1, 1, 1, 1);
    createSlider('.sales__slider', 5, 4, 4, 4, 2, 1);
    createSlider('.brands__slider', 5, 4, 4, 4, 2, 1);
    createSlider('.new-offers__slider', 5, 4, 4, 4, 2, 1);
    createSlider('.additional-products__slider', 5, 4, 4, 4, 2, 1);
    createSlider('.new-offers__slider', 5, 4, 4, 4, 2, 1);
    createSlider('.recent-products__slider', 5, 4, 4, 4, 2, 1);
});

// $('.search__button-categories').click(function () {
//     $(this).toggleClass('show');
//     $('.search__categories') .toggleClass('show');
// });

$('.catalog__button').click(function(e) {
    e.preventDefault();
    var elem = $('.catalog__menu');
    $(this).toggleClass('open') && elem.toggleClass('show');
});

$('.catalog__button--mobile').click(function(e) {
    e.preventDefault();
    var elem = $('.menu__mobile');
    $(this).toggleClass('open') && elem.toggleClass('show');
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


function counterToggle(add, dec, id) {
    var counter = 1;
    $(add).click(function () {
        $(id).val(++counter);
    });
    $(dec).click(function () {
        $(id).val(--counter);
    });
};

counterToggle('.counter_add', '.counter_dec', '.counter');

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

var accVoid = document.getElementsByClassName("accordion__title--void");
var idx;
for (idx = 0; idx < accVoid.length; idx++) {
    accVoid[idx].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            panel.style.padding = null;
            panel.style.borderBottom = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 20 + "px";
            panel.style.padding = "20px";
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

    $('span.timer__days').text(day);
    $('span.timer__hours').text(left_hour);

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

var menuFilters = $('.filter');
var menuButtonFilters = $('.filters__mobile');
menuButtonFilters.click(function () {
    if(menuFilters.hasClass('shown')) {
        menuFilters.removeClass('shown');
        menuButtonFilters.removeClass('shown');
    } else {
        menuFilters.addClass('shown');
        menuButtonFilters.addClass('shown');
    }
});


var catalogMobileInner = $('.brand-catalog-mobile-menu');
var catalogMobileInnerButton = $('.brand-catalog-mobile-btn');

catalogMobileInnerButton.click(function () {
    if(catalogMobileInner.hasClass('show') && catalogMobileInnerButton.hasClass('show')) {
        catalogMobileInner.removeClass('show');
        catalogMobileInnerButton.removeClass('show');
    } else {
        catalogMobileInner.addClass('show');
        catalogMobileInnerButton.addClass('show');
    }
});

$(function($) {
    $("#cart-phone").mask("+9 (999) 999-99-99");
});


var current = 'tab1';
function show(id) {
    document.getElementById(current).style.display = 'none';
    document.getElementById(id).style.display = 'block';
    current = id;
};

$('.tabs__container').each( function( i, buttonLinks ) {
    var $buttonLinks = $( buttonLinks );
    var activeElem = $('.tabs__button--active');
    $buttonLinks.on( 'click', 'a', function() {
        $('html, body').animate({ scrollTop: activeElem.offset().top }, 800);
        $buttonLinks.find(activeElem).removeClass(activeElem);
        $( this ).addClass(activeElem);
    });
});

$(document).on('click', '.tabs__container a', function (e) {
    e.preventDefault();
    var valueMnu = $(this).attr('href').substr(1);
    Hash.add('cheked', valueMnu);
});

$(document).ready(function() {
    var hash = Hash.get();
    if (hash.cheked) {
        $('.tabs__container a[href="#' + hash.cheked + '"]').trigger('click');
    }
});

Hash = {
    // Получаем данные из адреса
    get: function() {
        var vars = {}, hash, splitter, hashes;
        if (!this.oldbrowser()) {
            var pos = window.location.href.indexOf('?');
            hashes = (pos != -1) ? decodeURIComponent(window.location.href.substr(pos + 1)) : '';
            splitter = '&';
        }
        else {
            hashes = decodeURIComponent(window.location.hash.substr(1));
            splitter = '/';
        }

        if (hashes.length == 0) {return vars;}
        else {hashes = hashes.split(splitter);}

        for (var i in hashes) {
            if (hashes.hasOwnProperty(i)) {
                hash = hashes[i].split('=');
                if (typeof hash[1] == 'undefined') {
                    vars['anchor'] = hash[0];
                }
                else {
                    vars[hash[0]] = hash[1];
                }
            }
        }
        return vars;
    },
    // Заменяем данные в адресе на полученный массив
    set: function(vars) {
        var hash = '';
        for (var i in vars) {
            if (vars.hasOwnProperty(i)) {
                hash += '&' + i + '=' + vars[i];
            }
        }

        if (!this.oldbrowser()) {
            if (hash.length != 0) {
                hash = '?' + hash.substr(1);
            }
            window.history.pushState(hash, '', document.location.pathname + hash);
        }
        else {
            window.location.hash = hash.substr(1);
        }
    },
    // Добавляем одно значение в адрес
    add: function(key, val) {
        var hash = this.get();
        hash[key] = val;
        this.set(hash);
    },
    // Удаляем одно значение из адреса
    remove: function(key) {
        var hash = this.get();
        delete hash[key];
        this.set(hash);
    },
    // Очищаем все значения в адресе
    clear: function() {
        this.set({});
    },
    // Проверка на поддержку history api браузером
    oldbrowser: function() {
        return !(window.history && history.pushState);
    },
};

$('.review-modal').click(function() {
    $('html').toggleClass('overflow__hide');
});






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

function createSlider(selector, slidesToShow, slidesToScroll) {
    $(selector).slick({
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        dots: true
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

    toggleDropDown('#cart-btn', '#cart-result', '.dropdown');
    toggleDropDown('#favorite-btn', '#favorite-result', '.dropdown');
    toggleDropDown('#compare-btn', '#compare-result', '.dropdown');
    toggleDropDown('.catalog__button', '.catalog__menu', '.catalog__menu');
    createSlider('.slider', 1, 1);
    createSlider('.sales__slider', 5, 5);
    createSlider('.new-offers__slider', 5, 5);
    createSlider('.additional-products__slider', 5, 5);
    createSlider('.new-offers__slider', 5, 5);
    createSlider('.recent-products__slider', 5, 5);
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
}




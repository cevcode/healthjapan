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


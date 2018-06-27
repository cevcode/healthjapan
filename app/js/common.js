function toggleDropDown(button, id) {
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
    $(button).click(function()
    {
        $('.dropdown').hover(function(){
            inside=true;
        }, function(){
            inside=false;
        });

        $("body").mouseup(function(){
            if(!inside) $('.dropdown').removeClass('show');
        });
    });
};

$('#search').focus(function () {
    $('.search__result').show();
})
$('#search').blur(function () {
    $('.search__result').hide();
})



toggleDropDown('#cart-btn', '#cart-result');
toggleDropDown('#favorite-btn', '#favorite-result');
toggleDropDown('#compare-btn', '#compare-result');

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
});

$('.sales__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true
});

$('.new-offers__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true
});

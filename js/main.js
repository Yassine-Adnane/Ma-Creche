$(function()
{
    'use strict';
    //Adjust Slider Height
    var winH    = $(window).height();
    $('.slider, .carousel-item').height(winH);
});


$('#Slider-FeedBacks').carousel(
{
    interval: 3000
});


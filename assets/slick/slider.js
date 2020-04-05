$(document).ready(function () {

     $('.stuff__slider_first').slick({
         appendArrows: $('.stuff__container-for-arrows_first'),
         touchMove:false,
         slidesToScroll:1,
         slidesToShow:3,
         draggable:false,
         adaptiveHeight:true,
         variableWidth: true,
         centerMode:true,
         responsive: [
             {
                 breakpoint:850,
                 settings:{
                     slidesToShow:2
                 }
             }, {
                 breakpoint:525,
                 settings:{
                     slidesToShow:1
                 }
             }
         ]
     });



     $('.stuff__slider_second').slick({
         appendArrows: $('.stuff__container-for-arrows_second'),
         touchMove:false,
         slidesToScroll:1,
         slidesToShow:3,
         adaptiveHeight: true,
         responsive: [
             {
                 breakpoint:850,
                 settings:{
                     slidesToShow:2
                 }
             }, {
                 breakpoint:525,
                 settings:{
                     slidesToShow:1
                 }
             }
         ]
     });



    $('.stuff__slider_third').slick({
        appendArrows: $('.stuff__container-for-arrows_third'),
        touchMove:false,
        slidesToScroll:1,
        slidesToShow:3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint:850,
                settings:{
                    slidesToShow:2
                }
            }, {
                breakpoint:525,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    });
});
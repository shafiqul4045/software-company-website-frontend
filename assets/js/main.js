(function($) { 
    "use strict";
    var categoryWrap = document.querySelectorAll('.collapse-menu-slide');
    var categoryToggleIcon = document.querySelectorAll('.collapse-menu span');
    categoryToggleIcon.forEach((element)=>{
        element.addEventListener('click', ()=>{
        categoryWrap.forEach((e)=>{
            e.classList.toggle('collapse-menu-active')
        })
        })
    })

    // Client Testimonial Slider

    var swiper = new Swiper(".client-testimonial", {
        navigation: {
            nextEl: ".ct-swiper-button-next",
            prevEl: ".ct-swiper-button-prev",
        },
    });

}(jQuery));
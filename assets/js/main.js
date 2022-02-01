// $(document).ready(function(){
//     $('.collapse-menu').click(function(){
//         $('.collapse-menu-slide').addClass('slide');
//       });
//       $('.collapse-menu').click(function(){
//         $('.collapse-menu-slide').removeClass('slide');
//       });
//   });
(function($) { 
    
    "use strict";
//     // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml11 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x50]|\w)/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml11 .line',
//     scaleY: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 700
//   })
//   .add({
//     targets: '.ml11 .line',
//     translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
//     easing: "easeOutExpo",
//     duration: 700,
//     delay: 100
//   }).add({
//     targets: '.ml11 .letter',
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 600,
//     offset: '-=775',
//     delay: (el, i) => 34 * (i+1)
//   }).add({
//     targets: '.ml11',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })
   
    var categoryWrap = document.querySelectorAll('.collapse-menu-slide');
    var categoryToggleIcon = document.querySelectorAll('.collapse-menu span');
    categoryToggleIcon.forEach((element)=>{
        element.addEventListener('click', ()=>{
        categoryWrap.forEach((e)=>{
            e.classList.toggle('collapse-menu-active')
        })
        })
    })
    var categoryWrap = document.querySelectorAll('.collapse-menu-slide');
    var categoryToggleIcon = document.querySelectorAll('.collapse-menu');
    categoryToggleIcon.forEach((element)=>{
        element.addEventListener('click', ()=>{
        categoryWrap.forEach((e)=>{
            e.classList.toggle('collapse-menu-unactive')
        })
        })
    })

    // Client Testimonial Slider

    var swiper = new Swiper(".client-testimonial", {
        loop: true,
        speed: 1000,
        autoplay:true,
        delay:5000,
        navigation: {
            nextEl: ".ct-swiper-button-next",
            prevEl: ".ct-swiper-button-prev",
        },
    });
    $('.video-frame').magnificPopup({
        type: 'iframe'
      });


      
}(jQuery));
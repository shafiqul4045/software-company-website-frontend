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


    $('.collapse-menu').on("click", function(){
        // $(this).toggleClass('nav-open');
        $('.mobile-menu').addClass('active');
    })
    $('.mobile-menu-close').on("click", function(){
      $('.mobile-menu').removeClass('active');
    })



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 300,
    easing: "easeOutExpo",
    delay: 100
  });

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
    
   
    // var categoryWrap = document.querySelectorAll('.collapse-menu-slide');
    // var categoryToggleIcon = document.querySelectorAll('.collapse-menu span');
    // var collapseMenu = document.querySelector('.collapse-menu');

    // categoryToggleIcon.forEach((element)=>{
    //     element.addEventListener('click', ()=>{
    //     categoryWrap.forEach((e)=>{
    //         e.classList.toggle('collapse-menu-active')
    //     })
    //     })
    // })
    
    // var categoryWrap = document.querySelectorAll('.collapse-menu-slide');
    // var categoryToggleIcon = document.querySelectorAll('.collapse-menu');
    // categoryToggleIcon.forEach((element)=>{
    //     element.addEventListener('click', ()=>{
    //     categoryWrap.forEach((e)=>{
    //         e.classList.toggle('collapse-menu-unactive')
    //     })
    //     })
    // })

    // Client Testimonial Slider

    // var swiper = new Swiper(".client-testimonial", {
    //     loop: true,
    //     speed: 1000,
    //     autoplay:true,
    //     delay:5000,
    //     navigation: {
    //         nextEl: ".ct-swiper-button-next",
    //         prevEl: ".ct-swiper-button-prev",
    //     },
    // });
    // $('.video-frame').magnificPopup({
    //     type: 'iframe'
    //   });


      
}(jQuery));
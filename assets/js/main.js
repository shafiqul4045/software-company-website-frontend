$(document).ready(function(){
    // UPDATE: I was able to get this working again... Enjoy!
      //  // Client Testimonial Slider
      //  var swiper = new Swiper(".client-testimonial", {
      //   navigation: {
      //     nextEl: ".ct-swiper-button-next",
      //     prevEl: ".ct-swiper-button-prev",
      //   },
      // });

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

$('a').hover(
  function () {
     $('.cursor2').css({"background-color":"transparent"});
  }, 
  function () {
    $('.cursor2').css({"background-color":"red"});
  }
);

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})



  });
(function($) { 
    
    "use strict";
    //preloader
    $(window).on('load', function() {
      $("#pre-load").delay(1000).fadeOut(300);
  })


  //Videos popup jQuery 
  var popupvideos = $('.popup-videos, .popup-border');
  if(popupvideos.length){
      $('.popup-videos, .popup-border').magnificPopup({
          disableOn: 10,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
      }); 
  }










    $('.collapse-menu').on("click", function(){
        // $(this).toggleClass('nav-open');
        $('.mobile-menu').addClass('active');
    })
    $('.mobile-menu-close').on("click", function(){
      $('.mobile-menu').removeClass('active');
    })


// header2-sticky

// sticky navbar============================
window.addEventListener('scroll',function(){
  const header = document.querySelector('.header-section');
  header.classList.toggle("sticky",window.scrollY > 0);
});

// mobile-menu

$('.mobile-menu-btn').on("click",function(){
  $('.main-menu').addClass('show-menu');
});

$('.menu-close-btn').on("click",function(){
  $('.main-menu').removeClass('show-menu');
});

// mobile-drop-down
$('.drop-down').on('click',function(){
  // $(this).next('.mob-submenu').slideToggle();
  $(this).toggleClass('active').next('ul').slideToggle();
  $(this).parent().siblings().children('ul').slideUp();
  $(this).parent().siblings().children('.active').removeClass('active');
});

// sidebar-sticky

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    $('.scroll-btn').addClass('show');
  } else {
    $('.scroll-btn').removeClass('show');
  }
});
$('.scroll-btn').click(function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// sidebar

// mobile-search-area
$('.search-btn').on("click", function(){
  $('.mobile-search').addClass('slide');
  
});
$('.search-cross-btn').on("click", function(){
  $('.mobile-search').removeClass('slide');
  
});

   // Menu Toggle button sidebar

   var toggleIcon = document.querySelectorAll('.menu-sidebar-btn')
   var closeIcon = document.querySelectorAll('.cross-icon')
   var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')

   toggleIcon.forEach((element)=>{
       element.addEventListener('click', ()=>{
           document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
               el.classList.add('show-sidebar')
           })
       })
   })

   closeIcon.forEach((element)=>{
       element.addEventListener('click', ()=>{
           document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el)=>{
               el.classList.remove('show-sidebar')
           })
       })
   })

    window.onclick = function(event){
       // Menu Toggle button sidebar
       searchWrap.forEach((el)=>{
         if(event.target == el){
           el.classList.remove('show-sidebar')
         }
       })
   }


    $('.video-frame').magnificPopup({
        type: 'iframe'
      });

 
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
      
}(jQuery));
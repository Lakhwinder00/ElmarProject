var trigger = $(".hamburger"); 
var overlay = $(".overlay");
var isClosed = true;

function toggleSideBar() {
  if (isClosed == true) {
    $("#toggelbtn").removeClass("is-open");
    $("#toggelbtn").addClass("is-closed");
    $('#wrapper').removeClass('toggled');
    isClosed = false;
    // OPTIONAL Overlay overflow hidden in body
    overlay.hide();
   $("body").removeClass("overflow-hidden");
  } else {
    $("#toggelbtn").removeClass("is-closed");
    $("#toggelbtn").addClass("is-open");
    $('#wrapper').addClass('toggled');
    isClosed = true;
    // OPTIONAL Overlay overflow hidden in body
    overlay.show();
    $("body").addClass("overflow-hidden");
  }
}
$(document).on('click', '#toggelbtn', function () {
  toggleSideBar();
})
//$(document).on('click', '#mobileNavToggle', function () {
//  //debugger
//  if ($('#mobileNav').hasClass("closed") || $('#larutaHeader').hasClass("mobile-closed") || $('#larutaHeader').hasClass("mobile-closed")==false) {
    
//    $('#larutaHeader').removeClass('mobile-closed');
//    $('#larutaHeader').addClass('mobile-opened');

//    $('#mobileNav').removeClass('closed');
//    $('#mobileNav').addClass('opened');
//  }
//  else if ($('#mobileNav').hasClass("opened") && $('#larutaHeader').hasClass("mobile-opened")) {
//    $('#larutaHeader').removeClass('mobile-opened');
//    $('#larutaHeader').addClass('mobile-closed');;

//    $('#mobileNav').removeClass('opened');
//    $('#mobileNav').addClass('closed');
//  }
//})
$(document).ready(function () {
  $('.sidebar-nav .nav-link[data-toggle="tooltip"]').tooltip({boundary: "#wrapper", container: '#wrapper', trigger: "hover", placement: "right"});

  toggleSideBar();

  // Active tooltip in dropdowns
  $("#sidebar-wrapper a.dropdown-toggle").tooltip({boundary: "#wrapper", container: '#wrapper', trigger: "hover", placement: "right"});

  // Add slideDown animation to Bootstrap dropdown when expanding.
  $(".sidebar-nav .dropdown").on('show.bs.dropdown', function() {
    trigger.removeClass('is-closed');
    trigger.addClass('is-open');
    isClosed = true;
    $('#wrapper').addClass('toggled');
    // OPTIONAL Overlay overflow hidden in body
    overlay.show();
    $('body').addClass('overflow-hidden');
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  

});
$(document).on('click', '.hasDD', function (e) {
  $(this)
    .find("> ul")
    .slideToggle();
  $(this)
    .find("> ul ul")
    .css("display", "none");
  $(this)
    .find("> ul li")
    .removeClass("on");
  $(this).toggleClass("on");
  e.stopPropagation();
});
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $('#catalogFilterTop').addClass('position-fixed');
    $('.cus-top-filter').addClass('hide-sec');
  }
  else {
    $('#catalogFilterTop').removeClass('position-fixed');
    $('.cus-top-filter').removeClass('hide-sec');
  }
});

$(document).on('click','#mobileFilter', function () {
  $("#catalogFiltersColumn").show().addClass('filter-show');
})
$(document).on('click', '#closeMobileFilter', function () {
  $("#catalogFiltersColumn").hide();
})

$(document).ready(function(){
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

  $('.cus-slide-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.cus-slide-image',
    dots: false,
    prevArrow: false,
    nextArrow: false
  });
  $('.slide-tiles').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slide-tiles',
    dots: true,
    prevArrow: false,
    nextArrow: false
  });

});


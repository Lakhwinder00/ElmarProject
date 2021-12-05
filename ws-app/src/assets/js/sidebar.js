var trigger = $(".hamburger"); 
var overlay = $(".overlay");
var isClosed = true;

function toggleSideBar() {
    debugger;
  if (isClosed == true) {
    trigger.removeClass("is-open");
    trigger.addClass("is-closed");
    $('#wrapper').removeClass('toggled');
    isClosed = false;
    // OPTIONAL Overlay overflow hidden in body
    overlay.hide();
   $("body").removeClass("overflow-hidden");
  } else {
    trigger.removeClass("is-closed");
    trigger.addClass("is-open");
    $('#wrapper').addClass('toggled');
    isClosed = true;
    // OPTIONAL Overlay overflow hidden in body
    overlay.show();
    $("body").addClass("overflow-hidden");
  }
}

$('#toggelbtn').click(function () { 
  toggleSideBar();
});

$(document).ready(function () {
    debugger
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
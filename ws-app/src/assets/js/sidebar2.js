$(".hasDD").click(function(e) {
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
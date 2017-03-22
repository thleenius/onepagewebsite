/*set up nav scrolling*/
$('nav').onePageNav();

/* menu toggle button*/
$('.menu-icon').click(function(){
	$('nav li').slideToggle();
});

var menu = $('nav li');

/*show nav again when page is resized*/
$(window).resize(function(){
	var width = $(window).width();

	if (width > 768 && menu.is(':hidden')){
		menu.removeAttr('style');
	}

});
function verticalCenter(){ //Vertically center elements with class "v-center"
	$('.v-center').css({
		'margin-top' : -1*(($(this).parent().outerHeight() / 2) - ($(this).outerHeight() / 2)).toString() + 'px'
	});
}

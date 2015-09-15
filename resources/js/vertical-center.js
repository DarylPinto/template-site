function verticalCenter(){ //Vertically center elements with class "v-center"
	var distance = -1*( ($(this).parent().outerHeight() / 2) - ($(this).outerHeight() / 2) ).toString() + 'px'
	$('.v-center').css({
		'margin-top' : distance
	});
}

$(document).ready(function() {
	verticalCenter();
});
$( window ).resize(function() {
	verticalCenter();
});

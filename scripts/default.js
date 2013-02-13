var gravatar='http://en.gravatar.com/srosh.json?callback=setMyImage';

(function($){
	$(document).ready(function(){
		$('body').append($('<script src="'+gravatar+'"/>'));
		$('.side-left').scrollToFixed({zIndex:1000,marginTop: -25 , limit: ($('footer').offset().top - $('.side-left').height() - 200) });
		// $('.side-left').scrollToFixed({marginTop: 68 , limit: ($('footer').offset().top - $('.side-left').height() - 200) });
		$('.page-header').scrollToFixed({zIndex:0,marginTop: -313, limit: ($('footer').offset().top - $('.side-left').height() - 200) });
	});
})(jQuery)

var setMyImage = function(data) {
 if (data && data.entry) {
  	var turl = data.entry[0].thumbnailUrl;
  	$('img.gravatar').attr('src',turl);
  }
}
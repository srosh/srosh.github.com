var gravatar='http://en.gravatar.com/srosh.json?callback=setMyImage';

(function($){
	$(document).ready(function(){
		$('body').append($('<script src="'+gravatar+'"/>'));
	});
})(jQuery)

var setMyImage = function(data) {
 if (data && data.entry) {
  	var turl = data.entry[0].thumbnailUrl;
  	$('img.gravatar').attr('src',turl);
  }
}
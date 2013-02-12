var gravatar='http://en.gravatar.com/srosh.json';

(function($){
	$.getJSON(gravatar, function(data) {
	  if (data && data.entry) {
	  	var turl = data.entry[0].thumbnailUrl;
	  	$('img.gravatar').attr('src',turl);
	  }
	});
})(jQuery)
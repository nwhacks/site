function resize() {
	var width = $(window).width();
	$("#montage a").each(function() {
		$(this).css("width", width/$(this).siblings().andSelf().length);
		var $img = $(this).children("img"), height = $(this).height();
		$img.css("margin", (height - $img.height()) / 2 + "px auto");
	});
	$("#montage").removeAttr("class");
}
$(window).load(resize).resize(resize);
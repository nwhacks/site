$("#faq nav a").click(function(e) {
	e.preventDefault();
	$("#faq article").removeAttr("class");
	$("#faq nav a").removeAttr("class");
	$($(this).attr("href")).addClass("active");
	$(this).addClass("active");
});

function resize() {
	var width = $(window).width();
	var height = $(window).height();
	$("section").first().css("margin-top", height + "px");
	$("#montage a").each(function() {
		$(this).css("width", width/$(this).siblings().andSelf().length);
		var $img = $(this).children("img"), height = $(this).height();
		$img.css("margin", (height - $img.height()) / 2 + "px auto");
	});
	$("#montage").removeAttr("class");
}
$(window).load(function(){resize();$("body").removeAttr("class")}).resize(resize);
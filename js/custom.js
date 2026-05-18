(function($){

	$('.portifolioTimeline .point').click(function(e) {

		var $this_content = $(this).parent().find('.content');
		$('.portifolioTimeline .content').not($this_content).slideUp('fast');
		$this_content.slideToggle('fast');

	});

	$(".fancybox").fancybox();

})(jQuery);

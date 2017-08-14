
$(document).ready(function() {

	$(".tlt").animated("fadeInUp","fadeInDown");
	$(".flash").animated("fadeInDown","fadeInUp");
	$(".left .contacts_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .contacts_item").animated("fadeInRight", "fadeOutDown");
	$(".left .info_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .info_item").animated("fadeInRight", "fadeOutDown");
	$(".left .info_data").animated("fadeInLeft");
	$(".right .info_data").animated("fadeInRight");

});
$(document).ready(function() {

	
	function initSize() {
		
		$(".till_item .tc").each(function() {
			var parh = $(this).parent().height();
			$(this).height(parh);
		});
	};

	initSize();

	$(window).resize(function() {
		initSize();
	});
	

	//Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

});




/*get current year*/
$(document).ready(function(){
	var today = new Date();
		var year = today.getFullYear();
		var el = document.getElementById("year");
		el.innerHTML = '<span>'+ year+ '</span>';
});

/*photogallery*/
$(document).ready(function($) {
    $("#lightgallery,#lightgallery1,#lightgallery2,#lightgallery3,#lightgallery4,#lightgallery5,#lightgallery6,#lightgallery7,#lightgallery8,#lightgallery9,#lightgallery10,#lightgallery11,#lightgallery12,#lightgallery13,#lightgallery14,#lightgallery15,#lightgallery16").lightGallery({
    	 thumbnail:true,
    	 mode: 'lg-scale-up',
    	
    }); 
});


	



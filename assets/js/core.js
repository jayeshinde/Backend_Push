// Author: Vijay Kumar
// Template: Cascade - Flat & Responsive Bootstrap Admin Template
// Version: 1.0
// Bootstrap version: 3.0.0
// Copyright 2013 bootstrapguru
// www: http://bootstrapguru.com
// mail: support@bootstrapguru.com
// You can find our other themes on: https://bootstrapguru.com/themes/



// jQuery $('document').ready(); function 
$('document').ready(function(){

	$('.btn-nav-toggle-responsive').click(function(){
		$('.left-sidebar').toggleClass('show-fullsidebar');
	});

	$('li.nav-toggle > button').click(function(e){
		e.preventDefault();
		$('.hidden-minibar').toggleClass("hide");
		$('.site-holder').toggleClass("mini-sidebar");
		if($('.toggle-left').hasClass('fa-angle-double-left')){ $('.toggle-left').removeClass('fa-angle-double-left').addClass('fa-angle-double-right'); }
		else { $('.toggle-left').removeClass('fa-angle-double-right').addClass('fa-angle-double-left'); }
	

		if($('.site-holder').hasClass('mini-sidebar'))
		{    
			$('.sidebar-holder').tooltip({
		      selector: "a",
		      container: "body",
		      placement: "right"
		    });
		    $('li.submenu ul').tooltip('destroy');
		 }
		 else
		 {
			$('.sidebar-holder').tooltip('destroy');
		 }
		

	});

		if($('.site-holder').hasClass('mini-sidebar'))
		{    
			$('.sidebar-holder').tooltip({
		      selector: "a",
		      container: "body",
		      placement: "right"
		    });
		    $('li.submenu').tooltip('destroy');
		 }
		 else
		 {
			$('.sidebar-holder').tooltip('destroy');
		 }

	$('.show-info').click(function(){
		$('.page-information').toggleClass('hidden');
	});
});
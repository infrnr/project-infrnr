var j = jQuery.noConflict();
j(document).ready(function(){
	j(".up").hide();
	j(".click").click(function(){
		j(".menu").toggle(300);
		j(".up").toggle(0);
		j(".down").toggle(0);
	});
	j(".w-29").click(function(){

		if(!j(".w-29").hasClass("open"))
		{	
			j(".w-29").addClass("open");
			j(".DoubleMenu").css("left","0px");
			j(".puk").css("left","0px");
		} else
		{
			j(".w-29").removeClass("open");
			j(".DoubleMenu").css("left","-1100px");	
			j(".puk").css("left","-1100px");	
		}
	});
	j(".centerr").slick({
  	mobileFirst: true,
  	dots:false,
	infinite:false,
	slidesToShow: 1,
	appendArrows: '.arrrows',
  	responsive: [
    {
      breakpoint: 1200,
      settings: {
		dots:true,
	  	centerMode: true,
	  	slidesToShow: 3,
	  	centerPadding: '0px',
	  	initialSlide: 2,
	  	appendDots: '.dotts',
      }
    }
  	]		
	});

	j(".center").slick({
  	mobileFirst: true,
  	dots:false,
	infinite:false,
	slidesToShow: 1,
	appendArrows: '.arrows',
  	responsive: [
    {
      breakpoint: 1200,
      settings: {
		dots:true,
	  	centerMode: true,
	  	slidesToShow: 3,
	  	centerPadding: '0px',
	  	initialSlide: 2,
	  	appendDots: '.dots',
      }
    }
  	]		
	});

	j(".cente").slick({
  	mobileFirst: true,
  	dots:false,
	infinite:false,
	slidesToShow: 1,
	appendArrows: '.aows',
  	responsive: [
    {
      breakpoint: 1200,
      settings: {
		dots:true,
	  	centerMode: true,
	  	slidesToShow: 3,
	  	centerPadding: '0px',
	  	initialSlide: 2,
	  	appendDots: '.dos',
      }
    }
  	]		
	});

	j(".sertificate").slick({
	mobileFirst: true,
	slidesToShow: 2,
	infinite:false,
	arrows:true,
  	responsive: [
    {
      breakpoint: 1200,
      settings: {
		dots:false,
		arrows:false,
		slidesToShow: 3,
		centerPadding: '0px',
		initialSlide: 0,
      }
    }
  	]		
	});
	j("#Avalon").click(
		function(){
			sendAjaxForm('putYourHand','https://api.slapform.com/Login-Alex200@yandex.ru');
			return false; 
		}
	);
	j("#Avalone").click(
		function(){
			sendAjaxForm('putYourHand','https://api.slapform.com/Login-Alex200@yandex.ru');
			return false; 
		}
	);
	j("input:text").on('keydown',function(e){
		var str = e.target.value;
		localStorage.setItem('Name',str);
	});
	j("#em").on('keydown',function(e){
		var str = e.target.value;
		localStorage.setItem('Email',str);
	});
	j("#eme").on('keydown',function(e){
		var str = e.target.value;
		localStorage.setItem('Emaila',str);
	});
	j("input:text").val(localStorage.getItem("Name"));
	j("#em").val(localStorage.getItem("Email"));
	j("#eme").val(localStorage.getItem("Emaila"));
	
	j(".history").click(
		function(){
			history.pushState(null, null, "?form=1");
			var url_string = window.location.href
			var url = new URL(url_string);
			var utm = url.searchParams.get("form");
			if (utm==1) j(".aras").show(); else
			j(".aras").hide();
		});
	window.addEventListener("popstate", function(e) {
		var url_string = window.location.href
		var url = new URL(url_string);
		var utm = url.searchParams.get("form");
		if (utm==1) j(".aras").show(); else
		j(".aras").hide();
    	}, false)
});

function sendAjaxForm(ajax_form,url) {
    j.ajax({
        url:     url,
        type:     "POST", 
        dataType: "html", 
        data: j("#"+ajax_form).serialize(),  
        success: function(response) { //Данные отправлены успешн
        	localStorage.clear();
        	var timeoutID = window.setTimeout(window.alert, 1000, 'Отправленно');
    	},
    	error: function(response) { // Данные не отправлены
            var timeoutID = window.setTimeout(window.alert, 1000, 'Ошибка!');
    	}
 	});
}

function next_quest(i){
			
			var j = i+1;
			setTimeout(function() {
			$('#quest'+i+'_wrap').hide();
			$('#quest'+j+'_wrap').show();
     	}, 400);
		
			if(j==9){
				var effect = setInterval(scroll, 3000);
                               setTimeout(function(){clearInterval(effect)}, 4300);

				$("#box").animate({width: "100%"},5300);
							
				setTimeout(function() {
					 $('#end_button').show();
				}, 5300);

			}
		
	
		
	}

    	function text_checkbox(){
	var values = document.getElementsByName("checklist");
	var arr1= Array();
	for(var i=0; i<values.length;i++){
		if(values[i].checked){
			arr1[i]= values[i].value;		
		}
	}
	  $('#checkli').val(arr1);

}

function jump_quest(i){
    var tt = $('input[name="entry.1924509075"]:checked').val();
   
   setTimeout(function() {
   $('.backg').hide();

   $('#quest'+i+'_wrap').show();

   $(window).scrollTop(0);	
}, 400);
   
//                if(i==9){
           
//            var effect = setInterval(scroll, 3000);
//                       setTimeout(function(){clearInterval(effect)}, 4300);

//        $("#box").animate({width: "100%"},5300);
                   
//        setTimeout(function() {
//             window.location.href=("https://license-center.netlify.app/"+tt);
//        }, 5300);						
//    }
       
}

function namyo(){
    $('#quest1_3').hide();
    $('#jb').hide();
}

function yo(){
    $('#quest1_3').show();
    $('#jb').show();

}


function ja_p() {
    if($("#quest1_1").is(":checked")) {
	 
    $('.uv').show();
		}
	else{
		$('.uv').hide();
	}
     if($("#quest1_2").is(":checked")) {

    $('.cj').show();
		}
	else{
		$('.cj').hide();
	}
	 if($("#quest1_3").is(":checked")) {

		 $('.jb').show();
		}  
	else{
		$('.jb').hide();
	}
	 if($("#quest1_4").is(":checked")) {

		 $('.jj').show();
		}  
	else{
		$('.jj').hide();
	}
	 if($("#quest1_5").is(":checked")) {

		 $('.et').show();
		}  
	else{
		$('.et').hide();
	}
  }

  function menu_remove() {
	$('.float').css({transition:"1s"});
    $('.float').css({background:"transparent"});
    $('.float').css({border:"1px solid #1b1b1b"});
    $('.float').css({color:"#1b1b1b"});
	setTimeout(function() {
	$('#floating_menu').hide();
	$('#video').css({display:"none"});
	$('#vid').css({display:"none"});
	$('#hvid').css({display:"none"});
	$('#vtext').css({display:"none"});
	$('.mn_ex,.total_menu').hide();
	$('.mn_su').hide();

}, 250);

$('.wrap').stop().animate({'margin-left' : '0%'})
$('header .ham-con').removeClass("on");
$('body').css('overflow-y','scroll');	
$('header .ham-con .container-box > .top').removeClass('on')
setTimeout(function() {
	$('.ham-con').hide();
}, 300); 

  }

$(function(){
    $('#quest11_1').on('click',yo);
    $('#quest11_2').on('click',namyo);
    $('#quest1_1,#quest1_2,#quest1_3,#quest1_4,#quest1_5').on('click',ja_p);
	$('.float').on('click',menu_remove);
})
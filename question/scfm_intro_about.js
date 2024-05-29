

function go_sub(){
    $('#start0').css({transition:"1s"});
    $('#start0').css({background:"transparent"});
    $('#start0').css({border:"1px solid #1b1b1b"});
    $('#start0').css({color:"#1b1b1b"});
    $('.quest00').attr("onclick","jump_quest(7)");
    setTimeout(function() {$('.countercheck').counterUp({
		delay: 10,
		time: 1000
});
}, 500);  
}


function ban() {
									
    $('#dzi1_ord').text('세금 환급 혜택 대상이 아닙니다.');
    $('#dzi1_ord').css({color:"#fff"});

}

function ban2() {
									
    $('#dzi2_ord').text('세금 환급 혜택 대상이 아닙니다.');
    $('#dzi2_ord').css({color:"#fff"});

}

function ban3() {
									
    $('#dzi3_ord').text('세금 환급 혜택 대상이 아닙니다.');
    $('#dzi3_ord').css({color:"#fff"});

}



function fecheck(){
    $("#female").prop('checked', true); 
}





function oo()  {
						
    const query = '.input_font:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    

    let result = '';
    
    selectedEls.forEach((el) => {
      result += el.value + '/ ';
   
    });

            var cast =result; 

            localStorage.setItem("cast", JSON.stringify(cast));
}


function pp(){
						   
    var ss = $('input[name=result1]:checked').val();


    
    jump_quest(99);
                                         }

            function jump_quest(i){
            
                
setTimeout(function() {
$('.backg').hide();
$('#quest'+i+'_wrap').show();
$(window).scrollTop(0);	
}, 400);

       if(i==99){
      var ss = $('input[name=result1]:checked').val();
      const random_number = Math.floor(Math.random() * 100); 


   var effect = setInterval(scroll, 3000);
              setTimeout(function(){clearInterval(effect)}, 4300);

$("#box").animate({width: "100%"},5300);
           



setTimeout(function() {
   /*원하는 검사 결과 링크로 이동*/
   OnSubmit();
   jump_quest(100);
//    document.getElementsByName('inputForm').submit();
}, 5300);						
}

}







   $(function(){
    $('#now_name').bind("click keyup",name);
    $(".input_font").on("click",oo);
    $('.result').on("click",pp);
    $('#agree12, #phone').bind("click keyup", now_phone);
  })
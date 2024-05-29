$(document).ready(function(){
    $('#send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[가-힣]+$/;
        const regex = /^[|0-9|]+$/;
        var mf = $('#mf').val();
        var age = $('#age').val();
        var nw = $('#now-wg').val();
        var height = $('#height').val();
        var hg = $('#hope-wg').val();
        // var id = $('#id-number').val();
        var name = $('#name').val();
        // var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
   
        var agree = $('#agree11').is(":checked");
        
        
        $('#name,#phone,#message,#agree11,#mf,#height,#now-wg,#hope-wg,#age').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
         if(!regex1.test(name) || name.length<0 ){
            var error = true;
            $('#name').addClass("error_input");
           alert("이름 입력을 확인하세요.");
        }else{
            $('#name').removeClass("error_input");
        }

        if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
            $('#phone').removeClass("error_input");
        }else{
            var error = true;
            $('#phone').addClass("error_input");
            alert("휴대폰 번호 입력을 확인하세요.");
        }

        if(age>=24 && age<=55 && regex.test(age) ){
            
            $('#age').removeClass("error_input");
        }else{
            var error = true;
            $('#age').addClass("error_input");
            alert("24 ~ 55세까지 신청가능합니다.");
        }

        if(mf == null ){
            var error = true;
            $('#mf').addClass("error_input");
           alert("성별을 선택해주세요.");
        }else{
            $('#mf').removeClass("error_input");
        }

     


        if (agree == false){
            var error = true;
            $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBj9OqqlRdTfltQ0x5aPOl5g7KwpwFiA_XjN5BivHwlw0NJQ/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
     $('#send_message').prop("disabled", false);
     OnSubmit();
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"#222222"});
    $('#send_message').css({color:"#fff"});
    $('#hidden_iframe11').attr("onload", "dll();");
    $('#hidden_iframe12').attr("onload", "hoa();");
   
        }
    });    

   

});


function dll(){
    // var f = document.fm;
    // f.submit();
    // $('[name="fm"],[name="fm1"]').submit();

}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa(){ 
        alert("빠르게 전화로 도움 드리겠습니다.\n여러분의 감량에 도움이 될 수 있도록\n도와드리니 전화를 꼭 받아주세요.");
        $(window).scrollTop(0);
        window.location.href = './consulting-result.html';
 }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form_check(){

    const regex1 = /^[|가-힣|]+$/;
    const regex = /^[|0-9|]+$/;
    var mf = $('#mf').val();
    var age = $('#age').val();
    var nw = $('#now-wg').val();
    var height = $('#height').val();
    var hw = $('#hope-wg').val();
    // var id = $('#id-number').val();
    var name = $('#name').val();
    // var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var agree = $('#agree11').is(":checked");
    var total= nw-hw;

    if (mf != null)
    {
       
            if(regex1.test(name) && name.length > 1 )
            {
                   
                    if(regex.test(age) && age.length == 2 && age >=30 && age <75)
                    {
                    
                     
                            
                               

                                    if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone))
                                    {
                        
                                        if (agree == true)
                                        {
                                            $('#send_message').css({transition:"1s"});
                                            $('#send_message').prop("disabled", false);
                                            $('#send_message').prop("value", "무료 상담 신청하기");
                                            $('#send_message').css({background:"#0e3b64"});
                                            $('#send_message').css({cursor:"pointer"});
                                        }
                                        else
                                        {
                                            $('#send_message').css({transition:"1s"});
                                            $('#send_message').prop("disabled", true);
                                            $('#send_message').prop("value", "개인정보 동의를 확인해주세요");
                                            $('#send_message').css({background:"#121212"});
                                            $('#send_message').css({cursor:"default"});     
                                        }
                            
                                     }
                                     else if(phone.length == 0)
                                     {
                                         $('#send_message').css({transition:"1s"});
                                         $('#send_message').prop("disabled", true);
                                         $('#send_message').prop("value", "전화번호를 확인하세요.");
                                         $('#send_message').css({background:"#121212"});
                                         $('#send_message').css({cursor:"default"});     
                                     }
                                     else
                                     {
                                         $('#send_message').css({transition:"1s"});
                                         $('#send_message').prop("disabled", true);
                                         $('#send_message').prop("value", "전화번호 입력을 확인하세요.");
                                         $('#send_message').css({background:"#121212"});
                                         $('#send_message').css({cursor:"default"});     
                                     }

                            
                    
                          
                    }
                    else if(age.length==0)
                    {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "연령을 입력을 확인하세요.");
                    $('#send_message').css({background:"#121212"});
                    $('#send_message').css({cursor:"default"});     
                    }
                    else 
                    {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "30세 ~ 75까지 가능합니다.");
                    $('#send_message').css({background:"#121212"});
                    $('#send_message').css({cursor:"default"});     
                    }
                
            }
            else if(name.length == 0)
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "성함을 입력을 확인하세요.");
                $('#send_message').css({background:"#121212"});
                $('#send_message').css({cursor:"default"});     
            }
            else
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "성함의 입력을 확인하세요.");
                $('#send_message').css({background:"#121212"});
                $('#send_message').css({cursor:"default"});     
            }
    }
   
    else
    {
        $('#send_message').css({transition:"1s"});
        $('#send_message').prop("disabled", true);
        $('#send_message').prop("value", "성별 선택을 확인하세요.");
        $('#send_message').css({background:"#121212"});
        $('#send_message').css({cursor:"default"});        
    }

   
 }
  


    function form_check1(){
        var mf = $('#mf').val();
        var age = $('#age').val();
        var nw = $('#now-wg').val();
        var tnw= String(nw);
        var height = $('#height').val();
        var hw = $('#hope-wg').val();
        var thw= String(hw);
        // var id = $('#id-number').val();
        var name = $('#name').val();
        // var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
   

        if(mf == "여성")
        {
            // alert("여성 선택");
            $("#female").prop("checked", true);
        }
        if(mf == "남성")
        {
            // alert("남성 선택");
            $("#male").prop("checked", true);
        }
    
        $("[name='name']").val(name); 
        
        $("[name='item3']").attr("value",thw);
        $("[name='item1']").attr("value",tnw);
        $("[name='item2']").val(height);
        $("[name='age']").val(age);  
        $("[name='tel1']").val(phone.substr(0,3));
        $("[name='tel2']").val(phone.substr(3,4));
        $("[name='tel3']").val(phone.substr(7,4)); 
         $('[name="etc"]').val(message);
        }




$(function(){
 $('#name,#phone,#mf,#age,#message,#agree11,#now-wg,#hope-wg,#height').bind("keyup click change",form_check);
 $('#name,#phone,#mf,#age,#message,#agree11,#now-wg,#hope-wg,#height').bind("keyup click change",form_check1);
//  $('#license').bind("keyup click change",lic_pick);
})
$(document).ready(function(){
    $('#send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[가-힣]+$/;
        const regex = /^[|0-9|]+$/;
        var check = $('#check').is(":checked");
        var s_name = $('#s_name').val();
        var s_phone = $('#s_phone').val();
        var p_name = $('#p_name').val();
        var p_phone = $('#p_phone').val();
        var email = $('#email').val();
        var email_check = $('#email_check').val();
        var s_reason = $('#s_reason').val();
        var p_reason = $('#p_reason').val();
        var cn = $('#cn').val();
        var film = $('#film').is(":checked");
        var agree = $('#agree11').is(":checked");
        
        
        $('#agree11').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
        //  if(!regex1.test(name) || name.length<0 ){
        //     var error = true;
        //     $('#name').addClass("error_input");
        //    alert("이름 입력을 확인하세요.");
        // }else{
        //     $('#name').removeClass("error_input");
        // }

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
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdzcN5v78Pjz3dsnHNhP3xcjKnddr61N0fXjyr-9J9-sFxPLQ/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
    $('#send_message').prop("disabled", false);
    
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"#222222"});
    $('#send_message').css({color:"#fff"});
    $('#hidden_iframe11').attr("onload", "hoa();");
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
        alert("강의 신청 감사합니다.\n\n작성하신 이메일 혹은 문자를 통해 \n강의 합격 여부를 안내드리겠습니다.\n감사합니다.\n\n-나비스쿨");
        $(window).scrollTop(0);
        window.location.reload();
 }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

//   window.location.reload();
 }


 function form_check1(){

    const regex1 = /^[|가-힣|]+$/;
    const regex = /^[|0-9|]+$/;
    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var check = $('#check').is(":checked");
    var s_name = $('#s_name').val();
    var s_phone = $('#s_phone').val();
    var p_name = $('#p_name').val();
    var p_phone = $('#p_phone').val();
    var email = $('#email').val();
    var email_check = $('#email_check').val();
    var s_reason = $('#s_reason').val();
    var p_reason = $('#p_reason').val();
    var cn = $('#cn').val();
    var film = $('#film').is(":checked");
    var agree = $('#agree11').is(":checked");


    
    if (check == true)
    {
       
            if(regex1.test(s_name) && s_name.length > 1 )
            {
                   
                
                if(s_phone.substr(0, 3) == "010" && s_phone.length ==11 && regex.test(s_phone))
                {
                        

                    if(regex1.test(p_name) && p_name.length > 1 )
                    {
                           

                        if(p_phone.substr(0, 3) == "010" && p_phone.length ==11 && regex.test(p_phone))
                        {


                            if(email.match(regExp) != null)
                            {
                                
                                
                                if(email_check == email)
                                {
                                    
                                    if(s_reason.length > 1)
                                    {

                                        if(p_reason.length > 1)
                                        {

                                            if( cn != null )
                                            {

                                                if (film == true)
                                                {

                                                        if (agree == true)
                                                        {
                                                            $('#send_message').css({transition:"1s"});
                                                            $('#send_message').prop("disabled", false);
                                                            $('#send_message').prop("value", "강의 지원 신청하기");
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
                                                else
                                                {
                                                    $('#send_message').css({transition:"1s"});
                                                    $('#send_message').prop("disabled", true);
                                                    $('#send_message').prop("value", "영상/사진 촬영 동의를 확인하세요.");
                                                    $('#send_message').css({background:"#595959"});
                                                    $('#send_message').css({cursor:"default"});   
                                                }

                                            }
                                            else
                                            {
                                                $('#send_message').css({transition:"1s"});
                                                $('#send_message').prop("disabled", true);
                                                $('#send_message').prop("value", "유입 경로 선택을 확인하세요.");
                                                $('#send_message').css({background:"#595959"});
                                                $('#send_message').css({cursor:"default"});   
                                            }
                                    
                                        }
                                        else
                                        {
                                            $('#send_message').css({transition:"1s"});
                                            $('#send_message').prop("disabled", true);
                                            $('#send_message').prop("value", "학부모 참가 동기 입력을 확인하세요.");
                                            $('#send_message').css({background:"#595959"});
                                            $('#send_message').css({cursor:"default"});   
                                        }


                                    }
                                    else
                                    {
                                        $('#send_message').css({transition:"1s"});
                                        $('#send_message').prop("disabled", true);
                                        $('#send_message').prop("value", "학생 참가 동기 입력을 확인하세요.");
                                        $('#send_message').css({background:"#595959"});
                                        $('#send_message').css({cursor:"default"});   
                                    }
                               
                                }
                                else
                                {
                                    $('#send_message').css({transition:"1s"});
                                    $('#send_message').prop("disabled", true);
                                    $('#send_message').prop("value", "이메일 주소 확인 입력을 체크해주세요.");
                                    $('#send_message').css({background:"#595959"});
                                    $('#send_message').css({cursor:"default"});     
                                }

                            }
                            else if(email.length>0)
                            {
                                $('#send_message').css({transition:"1s"});
                                $('#send_message').prop("disabled", true);
                                $('#send_message').prop("value", "이메일 주소 입력을 확인하세요.");
                                $('#send_message').css({background:"#595959"});
                                $('#send_message').css({cursor:"default"});     
                            }
                            else
                            {
                                $('#send_message').css({transition:"1s"});
                                $('#send_message').prop("disabled", true);
                                $('#send_message').prop("value", "이메일 주소를 입력하세요.");
                                $('#send_message').css({background:"#595959"});
                                $('#send_message').css({cursor:"default"});     
                            }


                        }
                        else if(p_phone.length == 0)
                        {
                            $('#send_message').css({transition:"1s"});
                            $('#send_message').prop("disabled", true);
                            $('#send_message').prop("value", "학부모 핸드폰 입력을 확인하세요.");
                            $('#send_message').css({background:"#121212"});
                            $('#send_message').css({cursor:"default"});     
                        }
                        else
                        {
                            $('#send_message').css({transition:"1s"});
                            $('#send_message').prop("disabled", true);
                            $('#send_message').prop("value", "학부모 핸드폰 입력을 확인하세요.");
                            $('#send_message').css({background:"#121212"});
                            $('#send_message').css({cursor:"default"});     
                        }
                    
                                                
                                        
                                              
                                      
                                    
                }
                else if(p_name.length == 0)
                {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "학부모 성함 입력을 확인하세요.");
                    $('#send_message').css({background:"#121212"});
                    $('#send_message').css({cursor:"default"});     
                }
                else
                {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "학부모 성함 입력을 확인하세요.");
                    $('#send_message').css({background:"#121212"});
                    $('#send_message').css({cursor:"default"});     
                }
                            
                }
                else if(s_phone.length == 0)
                {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "학생 핸드폰 입력을 확인하세요.");
                    $('#send_message').css({background:"#121212"});
                    $('#send_message').css({cursor:"default"});     
                }
                else
                {
                    $('#send_message').css({transition:"1s"});
                    $('#send_message').prop("disabled", true);
                    $('#send_message').prop("value", "학생 핸드폰 입력을 확인하세요.");
                    $('#send_message').css({background:"#121212"});
                    $('#send_message').css({cursor:"default"});     
                }

                            
                    
                          
                  
                
            }
            else if(s_name.length == 0)
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "학생 이름 입력을 확인하세요.");
                $('#send_message').css({background:"#121212"});
                $('#send_message').css({cursor:"default"});     
            }
            else
            {
                $('#send_message').css({transition:"1s"});
                $('#send_message').prop("disabled", true);
                $('#send_message').prop("value", "학생 이름 입력을 확인하세요.");
                $('#send_message').css({background:"#121212"});
                $('#send_message').css({cursor:"default"});     
            }
    }
   
    else
    {
        $('#send_message').css({transition:"1s"});
        $('#send_message').prop("disabled", true);
        $('#send_message').prop("value", "필수 체크를 확인하세요.");
        $('#send_message').css({background:"#121212"});
        $('#send_message').css({cursor:"default"});        
    }

 }
  
 





$(function(){
 $('#check, #s_name, #s_phone, #p_name, #p_phone, #agree11, #email, #email_check, #s_reason, #p_reason, #cn, #film').bind("keyup click change",form_check1);
//  $('#license').bind("keyup click change",lic_pick);
})

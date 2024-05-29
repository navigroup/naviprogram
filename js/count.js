$(function() {
  // 설정된 마감 날짜와 시간
  var targetDate = new Date("2024-05-31T11:59:00");
  var year = targetDate.getFullYear();
  var month = (targetDate.getMonth() + 1).toString().padStart(2, "0");
  var day = targetDate.getDate().toString().padStart(2, "0");

  // 24-hour countdown
  var countDownDate = targetDate.getTime();
  
  // Update the countdown every 1 second
  var x = setInterval(function() {
    // Get current time
    var now = new Date().getTime();
  
    // Find the distance between now and the countdown date
    var distance = countDownDate - now;
  
    // Calculate time units
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");
  
    // Output the result in elements with ids "day", "countdown", "day1", and "countdown1"
    var dateText = year + ". " + month + ". " + day;
    var countdownText = days + "일 " + hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
    document.getElementById("day").innerHTML = dateText;
    document.getElementById("countdown").innerHTML = countdownText;
    document.getElementById("day1").innerHTML = dateText;
    document.getElementById("countdown1").innerHTML = countdownText;
    
    // If the countdown is finished, clear the interval
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "마감되었습니다.";
      document.getElementById("countdown1").innerHTML = "마감되었습니다.";
    }
  
  }, 1000);

  function upslide() {
      var h = $('#ticker').find('tbody > tr').outerHeight(); 
      var item = $('#ticker').find('tbody > tr:first-child'); 
      var itemClone = item.clone(); 
      $('#ticker > tbody').append(itemClone);
      
      $('#ticker_wrap').css({'top':0}).animate({'top': '-' + h +'px'}, function(){ 
          $('#ticker_wrap').css({'top': 0}); 
          item.remove(); 
      }); 
  }
  
  setInterval(function(){ upslide() }, 1700);
});

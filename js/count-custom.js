$(function() {
  var targetDate = new Date("2024-05-31T11:59:00");
  
  // Update the countdown every 1 second
  var x = setInterval(function() {
    // Get current time
    var now = new Date().getTime();
  
    // Find the distance between now and the countdown date
    var distance = targetDate.getTime() - now;
  
    // Calculate time units
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
    var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");
  
    // Output the result in elements with ids "countdown" and "countdown1"
    document.getElementById("day").innerHTML = year + ". " + month + ". " + day;
    document.getElementById("countdown").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
    document.getElementById("day1").innerHTML = year + ". " + month + ". " + day;
    document.getElementById("countdown1").innerHTML = hours + "시 " + minutes + "분 " + seconds + "초 남음 ";
  
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
})

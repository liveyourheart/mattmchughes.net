

window.onload = function(){
  setInterval(function(){

    var d = new Date();
    var hour = addZero(d.getHours());
    var min = addZero(d.getMinutes());
    var sec = addZero(d.getSeconds());

    $('.clock').text(hour + ':' + min + ":" + sec);
    $('.hex').text('#'+hour + min + sec);
    $('body').css('background-color', '#'+hour + min + sec)
   }, 1000);
};

function addZero(num){
    if(num < 10){
      num = "0" + num;
    }
    return num;
}

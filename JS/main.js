$(document).ready(function () {
    for (var i = 0; i < 400; i++) {
      create(i);
    }
  
    function create(i) {
      var width = Math.random() * 15;
      var height = width * 0.3;
      var colourIdx = Math.ceil(Math.random() * 5);
      var colour = "red";
      switch (colourIdx) {
        case 1:
          colour = "yellow";
          break;
        case 2:
          colour = "blue";
          break;
        case 3:
          colour = "red";
          break;
        case 4:
          colour = "pink";
          break;
        case 5:
          colour = "green";
          break;
  
      }
      $('<div class="confetti-' + i + ' ' + colour + '"></div>').css({
        "width": width + "px",
        "height": height + "px",
        "top": -Math.random() * 50 + "%",
        "left": Math.random() * 100 + "%",
        "opacity": Math.random() + 0.5,
        "transform": "rotate(" + Math.random() * 360 + "deg)"
      }).appendTo('.wrapper');
  
      drop(i);
    }
  
    function drop(x) {
      $('.confetti-' + x).animate({
        top: "100%",
        left: "+=" + Math.random() * 15 + "%"
      }, Math.random() * 7000 + 3000, function () {
        reset(x);
      });
    }
  
    function reset(x) {
      $('.confetti-' + x).animate({
        "top": -Math.random() * 20 + "%",
        "left": "-=" + Math.random() * 15 + "%"
      }, 0, function () {
        drop(x);
      });
    }
  });



  CountDownTimer('04/14/2019 12:00 AM', 'countdown');
  CountDownTimer('04/14/2019 12:00 AM', 'newcountdown');

  function CountDownTimer(dt, id)
  {
      var end = new Date(dt);

      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var timer;

      function showRemaining() {
          var now = new Date();
          var distance = end - now;
          if (distance < 0) {

              clearInterval(timer);
              document.getElementById(id).innerHTML = '0';

              return;
          }
          var days = Math.floor(distance / _day);
          var hours = Math.floor((distance % _day) / _hour);
          var minutes = Math.floor((distance % _hour) / _minute);
          var seconds = Math.floor((distance % _minute) / _second);

          document.getElementById(id).innerHTML = days /*+ ' days'*/;
          //document.getElementById(id).innerHTML += hours + 'hrs ';
          //document.getElementById(id).innerHTML += minutes + 'mins ';
          //document.getElementById(id).innerHTML += seconds + 'secs';
      }

      timer = setInterval(showRemaining, 1000);
  }


  
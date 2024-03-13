$(document).ready(function() {
    $('#menu-btn').click(function() {
      $('#menuList').toggleClass('menu-toggle');
      $('#menu-btn').toggleClass("menu-btn-toggle");
    });
  });

// name typed.js
     
    var typed = new Typed('#name', {
     
      strings: [
        "Saravanan Raja" 
      ],
      stringsElement: null,
    
      /**
       * @property {number} typeSpeed type speed in milliseconds
       */
      typeSpeed: 100,

      /**
       * @property {boolean} fadeOut Fade out instead of backspace
       * @property {string} fadeOutClass css class for fade animation
       * @property {boolean} fadeOutDelay Fade out delay in milliseconds
       */
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    
      /**
       * @property {boolean} loop loop strings
       * @property {number} loopCount amount of loops
       */
      loop: false,
      loopCount: Infinity,
    
      /**
       * @property {boolean} showCursor show cursor
       * @property {string} cursorChar character for cursor
       * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
       */
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
  
    });

//  typing description

function animateText(textArea) {
let text = textArea.innerHTML;
let to = text.length,
from = 0;

animate({
duration: 5000,
timing: bounce,
draw: function(progress) {
let result = (to - from) * progress + from;
textArea.innerHTML = text.slice(0, Math.ceil(result))
}
});
}


function bounce(timeFraction) {
for (let a = 0, b = 1; 1; a += b, b /= 2) {
if (timeFraction >= (7 - 4 * a) / 11) {
return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
}
}
}

animateText($(`#self-intro`)[0]); 
animateText($(`#career-objective`)[0]);


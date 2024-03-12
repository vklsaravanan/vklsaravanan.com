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
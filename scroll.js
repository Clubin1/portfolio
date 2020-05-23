$(document).ready(function() {
    
    //activate wow.js
     new WOW().init();
  
    //activate fullpage.js
    $('#fullpage').fullpage({
      scrollBar: true,
      navigation: true,
      navigationTooltips: ['Landing', 'About', 'Skills & Work', 'Footer'],
      loopBottom: true,
      sectionSelector: 'section'
    });
  
  //apply color to each section from array
  int = -1;
  color_array = ['#000','#000','#000','#000','#000','#000'];

  $('section').each(function(){
    int++
    $(this).addClass('grid-item-' + int).css('background-color', color_array[int]);
  });
  
});